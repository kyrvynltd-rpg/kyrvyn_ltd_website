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
            Kyrvyn Ltd is a forward-thinking UK technology company dedicated to reshaping the global digital landscape. We empower businesses to build, expand, and optimize their digital footprint through tailored solutions that connect strategy, engineering, and measurable outcomes.
          </p>
          <p className="text-slate-900 dark:text-slate-400 mb-0">
            Our work spans modern web platforms, secure integrations, and blockchain solutions where they create genuine advantage. We focus on long-term maintainability, performance, and trust so clients can modernize with confidence and scale with clarity.
          </p>
        </GlassCard>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid gap-8">
          <GlassCard className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-full h-80 bg-gradient-to-b from-blue-500/20 to-purple-500/20 overflow-hidden">
                <Image
                  src="/images/gabs.jpeg"
                  alt="Gabriele Iacopo Langellotto"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center w-full">
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                  Gabriele Iacopo Langellotto
                </h3>
                <p className="text-accent-maroon dark:text-accent-blood font-semibold mb-4">
                  Founder & Digital Transformation Architect
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Full-stack engineer focused on helping organizations ship resilient digital products, modernize legacy systems, and deliver measurable improvements across performance, reliability, and user experience.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Team Capabilities Highlight */}
        <GlassCard className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">How We Drive Digital Growth</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-accent-maroon dark:text-accent-blood mb-2">Build</div>
              <p className="text-slate-700 dark:text-slate-300">Design and engineer modern web platforms that elevate brand credibility, usability, and conversion across devices.</p>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-accent-maroon dark:text-accent-blood mb-2">Expand</div>
              <p className="text-slate-700 dark:text-slate-300">Scale capabilities with secure integrations, automation, and data-driven features that support business operations.</p>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-accent-maroon dark:text-accent-blood mb-2">Optimize</div>
              <p className="text-slate-700 dark:text-slate-300">Improve performance, accessibility, reliability, and security to keep your digital footprint competitive over time.</p>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
