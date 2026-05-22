export default function PrivacyPolicy() {
  return (
    <div className="py-12 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold mb-4 tracking-tighter">Data Privacy Policy</h1>
      <p className="text-cool-grey dark:text-gray-400 mb-12 border-b border-black/10 dark:border-white/10 pb-8 text-sm">
        Effective Date: October 2026. This document outlines the institutional compliance architectures deployed by Demo Technologies PLC operating under the UK General Data Protection Regulation (UK GDPR).
      </p>

      <section className="backdrop-blur-md bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 shadow-lg mb-8">
        <h2 className="text-xl font-bold text-accent-maroon dark:text-accent-blood mb-4">Data Collection Operations</h2>
        <p className="text-sm leading-relaxed mb-4 text-cool-grey dark:text-gray-300">
          Pursuant to Article 13 of the UK GDPR, we explicitly outline the data schemas retrieved during interactions with our decentralized infrastructure. Submissions provided through our Corporate Communications interface and Research Newsletter mechanisms constitutes explicit authorization for restricted record retention.
        </p>
        <p className="text-sm leading-relaxed text-black/50 dark:text-white/50 italic font-medium">
          [PLACEHOLDER: Legal clauses detailing isolated server-side databases, cryptographic security standards employed during data transit, and maximum duration thresholds of corporate email record retention.]
        </p>
      </section>

      <section className="backdrop-blur-md bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 shadow-lg">
        <h2 className="text-xl font-bold text-accent-maroon dark:text-accent-blood mb-4">FCA Systems & Controls Compliance</h2>
        <p className="text-sm leading-relaxed mb-4 text-cool-grey dark:text-gray-300">
          Demo Technologies PLC maintains strict regulatory compliance with the Financial Conduct Authority (FCA) SYSC framework regarding operational resilience and data risk mitigation in distributed ledger ecosystems.
        </p>
        <p className="text-sm leading-relaxed text-black/50 dark:text-white/50 italic font-medium">
          [PLACEHOLDER: Additional procedural outlines detailing proprietary incident response strategies, third-party Sub-Processor auditing requirements, and the institutional portal for Subject Access Requests (SAR).]
        </p>
      </section>
    </div>
  );
}
