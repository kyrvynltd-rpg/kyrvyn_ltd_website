import { NextResponse } from "next/server";

type NewsletterPayload = {
  email: string;
  website?: string;
};

const memoryRateLimit = new Map<string, { count: number; resetAt: number }>();

function getClientKey(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  return ip;
}

function isRateLimited(key: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const max = 20;

  const entry = memoryRateLimit.get(key);
  if (!entry || entry.resetAt < now) {
    memoryRateLimit.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= max) return true;
  entry.count += 1;
  return false;
}

export async function POST(req: Request) {
  const key = getClientKey(req);
  if (isRateLimited(key)) {
    return NextResponse.json({ ok: false, message: "Rate limit exceeded." }, { status: 429 });
  }

  let body: Partial<NewsletterPayload> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON." }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  if (!body.email || !body.email.includes("@")) {
    return NextResponse.json({ ok: false, message: "Email is required." }, { status: 400 });
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL?.trim();
  if (webhook) {
    try {
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          source: "kyrvynltd-site",
          type: "newsletter",
          email: body.email,
          createdAt: new Date().toISOString(),
        }),
      });
      if (!r.ok) {
        return NextResponse.json({ ok: false, message: "Delivery failed." }, { status: 502 });
      }
    } catch {
      return NextResponse.json({ ok: false, message: "Delivery failed." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
