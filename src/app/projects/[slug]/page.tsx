import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { caseStudies } from "@/lib/caseStudies";

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <div className="py-24 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          404 - Case Study Not Found
        </h1>
        <ButtonLink href="/projects" variant="secondary">
          Back to Projects
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <ButtonLink href="/projects" variant="ghost" size="sm">
          ← Back to Projects
        </ButtonLink>
      </div>

      <GlassCard className="p-10 md:p-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              {cs.title}
            </h1>
            <Badge variant="info">{cs.industry}</Badge>
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {cs.subtitle}
          </p>

          <div className="flex flex-wrap gap-2">
            {cs.services.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Problem
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {cs.problem}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Solution
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {cs.solution}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Outcomes
              </h2>
              <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc pl-5 space-y-2">
                {cs.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {cs.stack.map((t) => (
                  <Badge key={t} variant="default">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                Want a similar delivery?
              </span>
              <span className="text-sm text-slate-700 dark:text-slate-400">
                Start with a short technical brief and we’ll respond with next steps.
              </span>
            </div>
            <ButtonLink href="/contact" variant="primary">
              Contact
            </ButtonLink>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}
