"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function NewsletterForm({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";
  const contactEmail = (process.env.NEXT_PUBLIC_CONTACT_EMAIL || "").trim();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      if (isStaticExport) {
        if (!contactEmail) {
          setStatus("error");
          return;
        }

        const subject = "Newsletter subscription request";
        const body = `Please add this email to the newsletter list:\n\n${email}`;
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus("success");
        setEmail("");
        return;
      }

      const r = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, website: "" }),
      });
      if (!r.ok) throw new Error("request_failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (compact) {
    return (
      <GlassCard className={`w-full md:max-w-sm p-1 shadow-lg ${className}`}>
        <form
          className="flex items-center gap-2 focus-within:ring-2 ring-accent-maroon dark:ring-accent-blood rounded-2xl w-full"
          onSubmit={onSubmit}
        >
          <div className="pl-4 text-cool-grey">
            <Mail size={18} />
          </div>
          <input
            type="email"
            required
            aria-label="Email address"
            placeholder="Work email address..."
            className="w-full bg-transparent outline-none text-sm py-2 placeholder:text-cool-grey/60"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
          />
          <button
            type="submit"
            className="bg-accent-maroon dark:bg-accent-blood text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:pointer-events-none"
            disabled={status === "loading"}
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {status === "success" && (
          <div className="px-4 pb-3 text-xs text-emerald-600 dark:text-emerald-400">
            Subscription request prepared.
          </div>
        )}
        {status === "error" && (
          <div className="px-4 pb-3 text-xs text-red-600 dark:text-red-400">
            Unable to subscribe. Try again.
          </div>
        )}
      </GlassCard>
    );
  }

  return (
    <GlassCard
      className={`p-10 md:p-14 text-center max-w-3xl mx-auto flex flex-col items-center ${className}`}
    >
      <div className="w-16 h-16 rounded-full bg-accent-maroon dark:bg-accent-blood text-white flex items-center justify-center mb-6">
        <Mail size={32} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
        Get Kyrvyn Updates
      </h2>
      <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-lg">
        Occasional updates on bespoke websites, technical consulting, and custom development.
        Opt out anytime.
      </p>
      <form className="w-full max-w-md flex flex-col sm:flex-row gap-3" onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Enter your email..."
          className="flex-1 px-6 py-4 rounded-full bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-maroon dark:focus:ring-accent-blood transition-all"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
        />
        <Button type="submit" disabled={status === "loading"} className="rounded-full">
          {status === "loading" ? "Submitting..." : "Subscribe"}
        </Button>
      </form>
      {status === "success" && (
        <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
          Subscription request prepared.
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 text-sm text-red-600 dark:text-red-400">
          Unable to subscribe. Try again.
        </div>
      )}
    </GlassCard>
  );
}
