import { GlassCard } from "@/components/ui/GlassCard";

export default function PrivacyPolicy() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <GlassCard className="p-8 shadow-xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Privacy Policy</h1>
          <p className="text-slate-900 dark:text-slate-400 font-medium border-b border-black/10 dark:border-white/10 pb-4 mb-8">
            Effective Date: June 6, 2026
          </p>
          
          <h2 className="text-slate-900 dark:text-white text-2xl font-semibold mt-8 mb-4">1. GDPR Data Handling Practices</h2>
          <p className="text-slate-900 dark:text-slate-400 leading-relaxed mb-6">
            Kyrvyn Ltd collects contact details submitted through the contact form and newsletter forms. Data is stored on UK-based servers and used only to respond to inquiries and provide requested updates.
          </p>
          
          <h2 id="cookies" className="text-slate-900 dark:text-white text-2xl font-semibold mt-8 mb-4">2. Cookie & Tracker Policy</h2>
          <p className="text-slate-900 dark:text-slate-400 leading-relaxed mb-6">
            We use essential cookies required for site functionality and may use limited analytics to improve performance. You can control cookies through your browser settings, and we do not use cookies to sell or share personal data.
          </p>

          <h2 id="ccpa" className="text-slate-900 dark:text-white text-2xl font-semibold mt-8 mb-4">3. CCPA Disclosures & Rights</h2>
          <p className="text-slate-900 dark:text-slate-400 leading-relaxed mb-6">
            Kyrvyn Ltd does not sell or share personal information. California residents may request access or deletion of personal data by submitting a request via the contact form.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
