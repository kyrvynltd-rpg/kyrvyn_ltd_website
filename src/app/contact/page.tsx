"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Github, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";
  const contactEmail = (process.env.NEXT_PUBLIC_CONTACT_EMAIL || "").trim();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
      consent: fd.get("gdpr-consent") === "on",
      website: String(fd.get("website") || ""),
    };

    try {
      if (isStaticExport) {
        if (!contactEmail) {
          setStatus("error");
          setError("Contact is not configured for this deployment.");
          return;
        }

        const subject = `Kyrvyn enquiry: ${payload.name || "New request"}`;
        const body = [`Name: ${payload.name}`, `Email: ${payload.email}`, "", payload.message].join(
          "\n",
        );

        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus("success");
        form.reset();
        return;
      }

      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await r.json().catch(() => ({}))) as { message?: string };
      if (!r.ok) throw new Error(data.message || "Request failed");
      setStatus("success");
      form.reset();
      (window as unknown as { plausible?: (event: string) => void }).plausible?.("Contact Submit");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Request failed");
    }
  }

  return (
    <div className="py-12 max-w-2xl mx-auto">
      <GlassCard className="p-8 mb-12 shadow-xl text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">Contact</h1>
        <p className="text-slate-900 dark:text-slate-400">
          Share your goals and context. We’ll respond with next steps to help you build, expand, or
          optimize your digital footprint.
        </p>
      </GlassCard>

      {/* Minimal Contact Form */}
      <GlassCard className="p-8 group shadow-2xl">
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Representative Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              aria-label="Representative Name"
              className="w-full bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-maroon dark:focus:border-accent-blood transition-colors invalid:[&:not(:placeholder-shown)]:border-red-500 valid:[&:not(:placeholder-shown)]:border-green-500 peer"
              placeholder="Corporate Representative"
            />
            <span className="text-xs text-red-500 hidden peer-invalid:[&:not(:placeholder-shown)]:block">
              Please enter a valid representative name.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Corporate Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-label="Corporate Email"
              className="w-full bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-maroon dark:focus:border-accent-blood transition-colors invalid:[&:not(:placeholder-shown)]:border-red-500 valid:[&:not(:placeholder-shown)]:border-green-500 peer"
              placeholder="name@company.com"
            />
            <span className="text-xs text-red-500 hidden peer-invalid:[&:not(:placeholder-shown)]:block">
              Please provide a valid corporate email address.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Inquiry Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              minLength={10}
              aria-label="Inquiry Details"
              className="w-full bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-maroon dark:focus:border-accent-blood transition-colors resize-none invalid:[&:not(:placeholder-shown)]:border-red-500 valid:[&:not(:placeholder-shown)]:border-green-500 peer"
              placeholder="Tell us what you’re building, what success looks like, and any constraints or deadlines."
            />
            <span className="text-xs text-red-500 hidden peer-invalid:[&:not(:placeholder-shown)]:block">
              Your inquiry must be at least 10 characters long.
            </span>
          </div>

          {/* GDPR Opt-In */}
          <div className="flex items-start gap-3 mt-2">
            <input
              type="checkbox"
              id="gdpr-consent"
              name="gdpr-consent"
              required
              className="mt-1 w-4 h-4 cursor-pointer accent-accent-maroon dark:accent-accent-blood peer"
            />
            <label
              htmlFor="gdpr-consent"
              className="text-sm text-cool-grey dark:text-gray-400 select-none"
            >
              I consent to the processing of my contact data in accordance with the UK GDPR and
              Kyrvyn Ltd&apos;s{" "}
              <a
                href="/privacy-policy"
                className="text-accent-maroon dark:text-accent-blood hover:underline font-semibold"
              >
                Data Privacy Policy
              </a>
              .
            </label>
          </div>

          <Button type="submit" className="mt-2 w-full" disabled={status === "loading"}>
            {status === "loading" ? "Submitting..." : "Submit Inquiry"} <Send size={18} />
          </Button>

          {status === "success" && (
            <div className="text-sm text-emerald-600 dark:text-emerald-400">
              Inquiry received. We’ll respond via email.
            </div>
          )}
          {status === "error" && (
            <div className="text-sm text-red-600 dark:text-red-400">
              {error || "Submission failed. Please try again."}
            </div>
          )}
        </form>
      </GlassCard>

      {/* Social Links */}
      <div className="mt-16 flex items-center justify-center gap-8">
        <a
          href="https://github.com/kyrvynltd-rpg/"
          className="text-cool-grey hover:text-accent-maroon dark:hover:text-accent-blood transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </div>
  );
}
