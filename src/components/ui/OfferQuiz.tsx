"use client";

import { useMemo, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button, ButtonLink } from "@/components/ui/Button";

type OfferKey = "website" | "consulting" | "custom";

type Offer = {
  key: OfferKey;
  title: string;
  description: string;
  benefits: string[];
  nextStepLabel: string;
};

type Question = {
  id: string;
  title: string;
  options: Array<{
    label: string;
    scores: Partial<Record<OfferKey, number>>;
  }>;
};

const offers: Record<OfferKey, Offer> = {
  website: {
    key: "website",
    title: "Bespoke Website Development",
    description: "We design and build bespoke websites.",
    benefits: [
      "Turn more visitors into enquiries with clearer messaging and conversion-first UX",
      "Ship a site that loads fast, looks premium, and builds trust instantly",
      "Get a maintainable codebase you can confidently grow over time",
    ],
    nextStepLabel: "Plan my website",
  },
  consulting: {
    key: "consulting",
    title: "Technical Consulting & Architecture",
    description: "We provide technical strategy and architecture consulting.",
    benefits: [
      "Get clarity fast: scope, roadmap, risks, and trade-offs made explicit",
      "Avoid expensive rewrites by making the right platform decisions early",
      "Unblock delivery with an actionable plan your team can execute",
    ],
    nextStepLabel: "Book consulting",
  },
  custom: {
    key: "custom",
    title: "Custom Integrations, Blockchain & Platform Modernisation",
    description:
      "We deliver bespoke development for integrations, blockchain solutions, performance improvements, UX upgrades, and platform modernisation.",
    benefits: [
      "Automate workflows and connect systems securely without fragile glue code",
      "Modernise safely: improve performance and UX without breaking operations",
      "Deliver complex features with a security-first, reliability-first approach",
    ],
    nextStepLabel: "Discuss custom build",
  },
};

const questions: Question[] = [
  {
    id: "goal",
    title: "What outcome matters most right now?",
    options: [
      { label: "Launch a website that looks premium and converts", scores: { website: 3 } },
      { label: "Get a clear plan before we build anything", scores: { consulting: 3 } },
      { label: "Connect systems / automate workflows / ship complex features", scores: { custom: 3 } },
    ],
  },
  {
    id: "pain",
    title: "What’s currently costing you the most?",
    options: [
      { label: "Low trust or low conversion", scores: { website: 2, consulting: 1 } },
      { label: "Unclear scope and decision paralysis", scores: { consulting: 3 } },
      { label: "Slow site, brittle code, or operational friction", scores: { custom: 2, consulting: 1 } },
    ],
  },
  {
    id: "risk",
    title: "What’s your biggest delivery risk?",
    options: [
      { label: "We need speed, but we can’t afford quality issues", scores: { website: 1, custom: 2 } },
      { label: "We might build the wrong thing without guidance", scores: { consulting: 3 } },
      { label: "Security and reliability have to be solid", scores: { custom: 3 } },
    ],
  },
  {
    id: "startingPoint",
    title: "Where are you starting from?",
    options: [
      { label: "New build or a full redesign", scores: { website: 2 } },
      { label: "Existing product that needs direction", scores: { consulting: 2, custom: 1 } },
      { label: "Existing platform that needs upgrades/integrations", scores: { custom: 2, consulting: 1 } },
    ],
  },
];

function pickBestOffer(scores: Record<OfferKey, number>): OfferKey {
  const entries = Object.entries(scores) as Array<[OfferKey, number]>;
  entries.sort((a: [OfferKey, number], b: [OfferKey, number]) => b[1] - a[1]);
  const [topKey] = entries[0] ?? ["consulting", 0];
  return topKey;
}

export function OfferQuiz({ className = "" }: { className?: string }) {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<OfferKey, number>>({
    website: 0,
    consulting: 0,
    custom: 0,
  });

  const isDone = step >= questions.length;
  const recommendedKey = useMemo<OfferKey>(() => pickBestOffer(scores), [scores]);
  const recommended = offers[recommendedKey];

  const brief = useMemo(() => {
    const lines = [
      `Recommended offer: ${recommended.title}`,
      "",
      "What I want to achieve:",
      "- ",
      "",
      "Context:",
      "- ",
      "",
      "Timeline:",
      "- ",
    ];
    return lines.join("\n");
  }, [recommended.title]);

  const contactHref = useMemo(() => {
    const params = new URLSearchParams({ brief });
    return `/contact?${params.toString()}`;
  }, [brief]);

  function answer(optionScores: Partial<Record<OfferKey, number>>) {
    setScores((prev: Record<OfferKey, number>) => ({
      website: prev.website + (optionScores.website ?? 0),
      consulting: prev.consulting + (optionScores.consulting ?? 0),
      custom: prev.custom + (optionScores.custom ?? 0),
    }));
    setStep((s: number) => s + 1);
  }

  function restart() {
    setStep(0);
    setScores({ website: 0, consulting: 0, custom: 0 });
  }

  if (isDone) {
    return (
      <GlassCard className={`p-8 md:p-10 ${className}`}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
              Your best-fit offer
            </span>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {recommended.title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300">{recommended.description}</p>
          </div>

          <div className="grid gap-3">
            {recommended.benefits.map((b: string) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-3"
              >
                <div className="mt-1 h-2 w-2 rounded-full bg-accent-maroon dark:bg-accent-blood shrink-0" />
                <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{b}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <ButtonLink href={contactHref} variant="primary" size="lg" className="rounded-2xl">
              {recommended.nextStepLabel}
            </ButtonLink>
            <Button onClick={restart} variant="secondary" size="lg" className="rounded-2xl">
              Retake quiz
            </Button>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400">
            This gives a starting recommendation. The fastest way to confirm scope is a short
            consultation.
          </div>
        </div>
      </GlassCard>
    );
  }

  const q = questions[step];

  return (
    <GlassCard className={`p-8 md:p-10 ${className}`}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-slate-500">
            Quiz • Step {step + 1} of {questions.length}
          </div>
          <Button onClick={restart} variant="ghost" size="sm">
            Restart
          </Button>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {q.title}
        </h3>

        <div className="grid gap-3">
          {q.options.map((o) => (
            <Button
              key={o.label}
              onClick={() => answer(o.scores)}
              variant="secondary"
              size="lg"
              className="w-full justify-start text-left rounded-2xl"
            >
              {o.label}
            </Button>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
