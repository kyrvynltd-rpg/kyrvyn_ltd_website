export default function PrivacyPolicy() {
  return (
    <div className="py-12 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold mb-4 tracking-tighter">Data Privacy Policy</h1>
      <p className="text-cool-grey dark:text-gray-400 mb-12 border-b border-black/10 dark:border-white/10 pb-8 text-sm">
        Effective Date: June 6, 2026. This document outlines how Kyrvyn Ltd processes and protects
        personal data under the UK General Data Protection Regulation (UK GDPR).
      </p>

      <section className="backdrop-blur-md bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 shadow-lg mb-8">
        <h2 className="text-xl font-bold text-accent-maroon dark:text-accent-blood mb-4">
          Data Collection
        </h2>
        <p className="text-sm leading-relaxed mb-4 text-cool-grey dark:text-gray-300">
          We collect only the information required to respond to inquiries, provide requested
          updates, and deliver our services. This typically includes name, email address, company
          context, and the message you provide.
        </p>
        <p className="text-sm leading-relaxed text-black/50 dark:text-white/50 italic font-medium">
          Kyrvyn Ltd stores corporate contact data in secure, access-controlled UK systems and uses
          encryption in transit. Records are retained only as long as needed to respond to requests
          and meet legal obligations.
        </p>
      </section>

      <section className="backdrop-blur-md bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 shadow-lg">
        <h2 className="text-xl font-bold text-accent-maroon dark:text-accent-blood mb-4">
          Security & Data Rights
        </h2>
        <p className="text-sm leading-relaxed mb-4 text-cool-grey dark:text-gray-300">
          We maintain incident response procedures, review third-party subprocessors, and apply
          access controls appropriate to the sensitivity of the data we process.
        </p>
        <p className="text-sm leading-relaxed text-black/50 dark:text-white/50 italic font-medium">
          You can request access, correction, or deletion of your personal data by submitting a
          request via the contact form.
        </p>
      </section>
    </div>
  );
}
