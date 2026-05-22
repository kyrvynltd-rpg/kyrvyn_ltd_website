import { GlassCard } from "@/components/ui/GlassCard";

export default function TermsOfService() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <GlassCard className="p-8 shadow-xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Terms of Service</h1>
          <p className="text-slate-900 dark:text-slate-400 font-medium border-b border-black/10 dark:border-white/10 pb-4 mb-8">
            Effective Date: November 12, 2026
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-2xl font-semibold mt-8 mb-4">1. Non-Fiduciary Infrastructure Provisioning</h2>
          <p className="text-slate-900 dark:text-slate-400 leading-relaxed mb-6">
            [Structured Markdown Placeholder: Legally define Demo Ltd strictly as a non-fiduciary technology and protocol infrastructure provider. Explicitly disclaim status as a broker-dealer, trading venue, virtual asset service provider, or financial advisor under FCA/SEC frameworks.]
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-2xl font-semibold mt-8 mb-4">2. Mandatory US Arbitration Agreement</h2>
          <p className="text-slate-900 dark:text-slate-400 leading-relaxed mb-6">
            [Structured Markdown Placeholder: Enforce a binding US Federal Arbitration clause limiting class action liabilities natively for all corporate clients leveraging Node pathways from United States jurisdictions.]
          </p>

          <h2 className="text-slate-900 dark:text-white text-2xl font-semibold mt-8 mb-4">3. Inter-jurisdictional Compliance Thresholds</h2>
          <p className="text-slate-900 dark:text-slate-400 leading-relaxed mb-6">
            [Structured Markdown Placeholder: Detail complex protocol limitations confirming digital assets handled through this structural pathway do not constitute unregistered securities within localized legal frameworks.]
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
