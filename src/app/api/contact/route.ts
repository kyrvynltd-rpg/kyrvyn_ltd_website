import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  consent: boolean;
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
  const max = 10;

  const entry = memoryRateLimit.get(key);
  if (!entry || entry.resetAt < now) {
    memoryRateLimit.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= max) return true;
  entry.count += 1;
  return false;
}

function validate(payload: Partial<ContactPayload>) {
  if (payload.website) return { ok: false as const, status: 400, message: "Invalid request." };
  if (!payload.consent) return { ok: false as const, status: 400, message: "Consent is required." };
  if (!payload.name || payload.name.trim().length < 2)
    return { ok: false as const, status: 400, message: "Name is required." };
  if (!payload.email || !payload.email.includes("@"))
    return { ok: false as const, status: 400, message: "Email is required." };
  if (!payload.message || payload.message.trim().length < 10)
    return { ok: false as const, status: 400, message: "Message is required." };
  return { ok: true as const };
}

export async function POST(req: Request) {
  const key = getClientKey(req);
  if (isRateLimited(key)) {
    return NextResponse.json({ ok: false, message: "Rate limit exceeded." }, { status: 429 });
  }

  let body: Partial<ContactPayload> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON." }, { status: 400 });
  }

  const v = validate(body);
  if (!v.ok) return NextResponse.json({ ok: false, message: v.message }, { status: v.status });

  const webhook = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (webhook) {
    try {
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          source: "kyrvynltd-site",
          type: "contact",
          name: body.name,
          email: body.email,
          message: body.message,
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
