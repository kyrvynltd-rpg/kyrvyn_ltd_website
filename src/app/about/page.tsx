import { GlassCard } from "@/components/ui/GlassCard";

export default function About() {
  return (
    <div className="flex flex-col gap-20 py-12">
      <section className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        <GlassCard className="p-8 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-accent-maroon dark:text-accent-blood mt-0">Enterprise Architecture</h2>
          <p className="text-slate-900 dark:text-slate-400">
            Demo provides institutional-grade blockchain infrastructure specifically designed for high-trust environments in the United Kingdom and globally. Our architecture guarantees transaction immutability, mathematically secure consensus algorithms, and strict protocol compliance.
          </p>
          <p className="text-slate-900 dark:text-slate-400 mb-0">
            Engineered for maximum resilience and zero-downtime operations, our scalable networks form the foundational tier of modern secure finance and data integrity systems. We architect secure pathways for enterprise adoption.
          </p>
        </GlassCard>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Gabriele Iacopo Langellotto */}
          <GlassCard className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-full h-80 bg-gradient-to-b from-blue-500/20 to-purple-500/20 overflow-hidden">
                <img 
                  src="/images/gabs.jpeg" 
                  alt="Gabriele Iacopo Langellotto" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center w-full">
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                  Gabriele Iacopo Langellotto
                </h3>
                <p className="text-accent-maroon dark:text-accent-blood font-semibold mb-4">
                  Lead Blockchain Architect & Full-Stack Developer
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Experienced full-stack developer with a strong background in blockchain and web infrastructure. Gabriele focuses on building scalable solutions and enjoys solving complex technical problems. Always learning and staying updated with the latest technologies.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Dip Raiyan */}
          <GlassCard className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-full h-80 bg-gradient-to-b from-emerald-500/20 to-teal-500/20 overflow-hidden">
                <img 
                  src="/images/dip.jpeg" 
                  alt="Dip Raiyan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center w-full">
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                  Dip Raiyan
                </h3>
                <p className="text-accent-maroon dark:text-accent-blood font-semibold mb-4">
                  Principal Web Developer & Blockchain Specialist
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Passionate web developer with expertise in building efficient systems and blockchain integration. Dip is detail-oriented and enjoys collaborating on projects that make a real impact. Committed to writing clean, maintainable code and best practices.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Team Capabilities Highlight */}
        <GlassCard className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">What We Bring to the Table</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-accent-maroon dark:text-accent-blood mb-2">Blockchain</div>
              <p className="text-slate-700 dark:text-slate-300">Solid understanding of blockchain fundamentals and smart contract development. Always exploring new possibilities in this evolving space.</p>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-accent-maroon dark:text-accent-blood mb-2">Web Development</div>
              <p className="text-slate-700 dark:text-slate-300">Experienced in building modern web applications with attention to performance and user experience.</p>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-accent-maroon dark:text-accent-blood mb-2">Dedication</div>
              <p className="text-slate-700 dark:text-slate-300">Committed to delivering quality work and supporting projects from start to finish. Your success is our priority.</p>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
