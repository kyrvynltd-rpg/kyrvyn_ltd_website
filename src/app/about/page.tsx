import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-20 py-12">
      <section className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        <GlassCard className="p-8 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-accent-maroon dark:text-accent-blood mt-0">Our Mission</h2>
          <p className="text-slate-900 dark:text-slate-400">
            Kyrvyn Ltd is a UK technology company focused on sellable, practical digital services
            for modern businesses. We design and build bespoke websites, provide technical strategy
            and architecture consulting, and deliver custom software for clients who need reliable,
            well-executed digital delivery.
          </p>
          <p className="text-slate-900 dark:text-slate-400 mb-0">
            Our work covers secure integrations, blockchain solutions, performance improvements, UX
            upgrades, and platform modernisation. We focus on clear communication, maintainable
            engineering, and outcomes that help clients launch, improve, and grow with confidence.
          </p>
        </GlassCard>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid gap-8">
          <GlassCard className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-center p-8 gap-8">
              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 overflow-hidden border-4 border-slate-200 dark:border-white/10 shadow-2xl">
                <Image
                  src="/images/gabs.png"
                  alt="Gabriele Iacopo Langellotto"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                  Gabriele Iacopo Langellotto
                </h3>
                <p className="text-accent-maroon dark:text-accent-blood font-semibold mb-4">
                  Founder & Technical Consultant
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Full-stack engineer focused on bespoke website delivery, technical consulting, and
                  custom development for clients who need practical solutions, resilient platforms,
                  and strong user experience.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Team Capabilities Highlight */}
        <GlassCard className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            What We Sell
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-accent-maroon dark:text-accent-blood mb-2">
                Bespoke Website Development
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                We design and build bespoke websites that support your brand, user journeys,
                conversion goals, and long-term growth.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-accent-maroon dark:text-accent-blood mb-2">
                Technical Consulting & Architecture
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                We provide technical strategy and architecture consulting for planning, platform
                choices, delivery direction, and technical decision-making.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-accent-maroon dark:text-accent-blood mb-2">
                Custom Development
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                We deliver bespoke development for integrations, blockchain solutions, performance
                improvements, UX upgrades, and platform modernisation.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
