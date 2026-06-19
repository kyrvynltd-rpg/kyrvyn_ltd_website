"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { OfferQuiz } from "@/components/ui/OfferQuiz";
import { ArrowRight, Code2, Cpu, LineChart } from "lucide-react";

export default function ServicesHubPage() {
  return (
    <div className="flex flex-col gap-24 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto relative z-10 w-full"
        >
          <GlassCard className="p-8 relative md:p-16">
            <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-accent-maroon to-accent-blood hidden dark:block opacity-40 -z-10 rounded-full" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
              Tailored Technical Solutions
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mx-auto font-medium mb-10 max-w-2xl">
              We don&apos;t just write code. We deliver strategic, bespoke solutions designed to solve your exact business constraints and scale your platform.
            </p>
          </GlassCard>
        </motion.div>
      </section>

      {/* Offer Quiz Section */}
      <section className="w-full" id="quiz">
        <div className="flex flex-col gap-4 mb-8 text-center md:text-left">
          <h2 className="text-3xl font-bold border-b pb-4 border-black/10 dark:border-white/10 text-slate-900 dark:text-white">
            Find the right service
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl">
            Answer a few quick questions to get a best-fit recommendation and a prefilled brief you can send directly to our experts.
          </p>
        </div>
        <OfferQuiz />
      </section>

      {/* Manual Navigation */}
      <section className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Or Browse by Service Track
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Explore our specialized disciplines and discover how we can elevate your technical operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Website Development */}
          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300 relative flex flex-col h-full">
            <Link href="/services/website-development" className="absolute inset-0 z-10 block">
              <span className="sr-only">View Bespoke Website Development Service</span>
            </Link>
            <div className="w-14 h-14 rounded-lg bg-accent-maroon/10 text-accent-maroon dark:text-accent-blood flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-accent-maroon dark:group-hover:text-accent-blood transition-colors">
              Bespoke Website Development
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
              High-converting standalone websites delivered in 48/72 hours. Perfect for businesses needing immediate credibility and zero technical headache.
            </p>
            <div className="text-sm font-bold text-accent-maroon dark:text-accent-blood flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
              Explore Track <ArrowRight size={16} />
            </div>
          </GlassCard>

          {/* Technical Consulting */}
          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300 relative flex flex-col h-full">
            <Link href="/services/technical-consulting" className="absolute inset-0 z-10 block">
              <span className="sr-only">View Technical Consulting Service</span>
            </Link>
            <div className="w-14 h-14 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <LineChart size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Technical Consulting & Architecture
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
              De-risk your decisions with clear execution roadmaps, system architecture design, and comprehensive codebase audits.
            </p>
            <div className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
              Explore Track <ArrowRight size={16} />
            </div>
          </GlassCard>

          {/* Custom Development */}
          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300 relative flex flex-col h-full">
            <Link href="/services/custom-development" className="absolute inset-0 z-10 block">
              <span className="sr-only">View Custom Development Service</span>
            </Link>
            <div className="w-14 h-14 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Custom Integrations & Modernisation
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
              Complex development for enterprise integrations, blockchain solutions, and secure platform hardening.
            </p>
            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
              Explore Track <ArrowRight size={16} />
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full">
        <GlassCard className="p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-maroon/20 to-accent-blood/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 dark:text-white">Not sure what you need?</h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Skip the browsing and talk directly to an expert. We&apos;ll help you clarify your requirements and build a practical route forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform"
            >
              Book a consultation <ArrowRight size={20} />
            </Link>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
