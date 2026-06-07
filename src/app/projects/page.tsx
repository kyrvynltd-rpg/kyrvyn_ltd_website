import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { SectionDivider, SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/caseStudies";

export default function Projects() {
  return (
    <div className="py-12">
      <SectionHeading
        title="Projects"
        subtitle="Selected engagements and capability demonstrations covering enterprise web delivery, performance engineering, and blockchain integration workflows."
      />
      <SectionDivider className="mt-8 mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((cs) => (
          <GlassCard key={cs.slug} className="p-8 flex flex-col gap-6">
            <div className="flex items-start justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {cs.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-400">
                  {cs.subtitle}
                </p>
              </div>
              <Badge variant="info">{cs.industry}</Badge>
            </div>

            <div className="flex flex-wrap gap-2">
              {cs.services.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
                Highlights
              </span>
              <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc pl-5 space-y-1">
                {cs.outcomes.slice(0, 3).map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Stack: {cs.stack.slice(0, 3).join(" • ")}
              </div>
              <ButtonLink href={`/projects/${cs.slug}`} variant="secondary" size="sm">
                View case study
              </ButtonLink>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
