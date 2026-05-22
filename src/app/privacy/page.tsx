import { GlassCard } from "@/components/ui/GlassCard";

export default function PrivacyPolicy() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <GlassCard className="p-8 shadow-xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Privacy Policy</h1>
          <p className="text-slate-900 dark:text-slate-400 font-medium border-b border-black/10 dark:border-white/10 pb-4 mb-8">
            Effective Date: November 12, 2026
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-2xl font-semibold mt-8 mb-4">1. GDPR Data Handling Practices</h2>
          <p className="text-slate-900 dark:text-slate-400 leading-relaxed mb-6">
            [Structured Markdown Placeholder: Detail strict GDPR compliance mapping for the collection of corporate tracking identifiers via the Contact Operations and Research Newsletter pipeline. All data is localized in physically isolated UK servers under standard tier-4 data protection statutes.]
          </p>
          
          <h2 id="cookies" className="text-slate-900 dark:text-white text-2xl font-semibold mt-8 mb-4">2. Cookie & Tracker Policy</h2>
          <p className="text-slate-900 dark:text-slate-400 leading-relaxed mb-6">
            [Structured Markdown Placeholder: Provide exhaustive breakdown of strictly necessary infrastructure cookies vs. behavioral analytics modules. Users maintain total revocation rights via the automated Trust Blue Consent Protocol.]
          </p>

          <h2 id="ccpa" className="text-slate-900 dark:text-white text-2xl font-semibold mt-8 mb-4">3. CCPA Disclosures & Rights</h2>
          <p className="text-slate-900 dark:text-slate-400 leading-relaxed mb-6">
            [Structured Markdown Placeholder: Execute California Consumer Privacy Act requirements. Implement the 'Do Not Sell or Share My Personal Information' mechanism and elaborate on the non-sale of underlying infrastructural interaction data to third-party aggregation exchanges.]
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
