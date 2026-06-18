"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, CheckCircle2, Zap, Target, Lightbulb, Compass } from "lucide-react";

export default function TechnicalConsultingServicePage() {
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
            <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-blue-500/40 to-cyan-500/40 hidden dark:block -z-10 rounded-full" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
              Technical Consulting & Architecture
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mx-auto font-medium mb-10 max-w-2xl">
              A clear plan, de-risked decisions, and an execution roadmap so you stop guessing and start shipping. We help you build the right foundation for your digital products.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] dark:shadow-[0_0_24px_rgba(59,130,246,0.3)]"
              >
                Book a Strategy Call <ArrowRight size={20} />
              </Link>
            </motion.div>
          </GlassCard>
        </motion.div>
      </section>

      {/* The Core Offer */}
      <section className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Stop Guessing. Start Shipping.
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Whether you are launching a new product or scaling an existing one, making the wrong technical choices can cost you months of development time and thousands in technical debt. Our consulting services provide clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
             <div className="w-14 h-14 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Target size={28} />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">System Architecture Design</h3>
             <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
               We design scalable, secure, and future-proof architectures tailored to your specific business requirements. We ensure your system can handle growth without catastrophic bottlenecks.
             </p>
             <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-indigo-500 flex-shrink-0 mt-0.5" /> <span>Microservices vs Monolith evaluation</span></li>
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-indigo-500 flex-shrink-0 mt-0.5" /> <span>Database and infrastructure planning</span></li>
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-indigo-500 flex-shrink-0 mt-0.5" /> <span>Security and compliance blueprinting</span></li>
             </ul>
             <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
               <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Estimated Investment</div>
               <div className="text-lg font-bold text-slate-900 dark:text-white">Custom quoting (Typically from £1,500)</div>
             </div>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
             <div className="w-14 h-14 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Lightbulb size={28} />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Technology Stack Selection</h3>
             <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
               Don&apos;t chase trends. We help you choose the right tools, frameworks, and languages based on your team&apos;s expertise, time-to-market constraints, and long-term maintainability.
             </p>
             <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-500 flex-shrink-0 mt-0.5" /> <span>Unbiased framework comparisons</span></li>
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-500 flex-shrink-0 mt-0.5" /> <span>Cost-benefit analysis of third-party tools</span></li>
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-500 flex-shrink-0 mt-0.5" /> <span>Risk mitigation for cutting-edge tech</span></li>
             </ul>
             <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
               <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Estimated Investment</div>
               <div className="text-lg font-bold text-slate-900 dark:text-white">Starting from £500</div>
             </div>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
             <div className="w-14 h-14 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Zap size={28} />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Codebase Audits & Refactoring</h3>
             <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
               Is your current application slow, buggy, or hard to update? We conduct deep-dive audits into your existing codebase to identify performance bottlenecks and technical debt.
             </p>
             <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-rose-500 flex-shrink-0 mt-0.5" /> <span>Performance and load testing analysis</span></li>
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-rose-500 flex-shrink-0 mt-0.5" /> <span>Security vulnerability identification</span></li>
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-rose-500 flex-shrink-0 mt-0.5" /> <span>Actionable refactoring roadmaps</span></li>
             </ul>
             <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
               <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Estimated Investment</div>
               <div className="text-lg font-bold text-slate-900 dark:text-white">Audits starting from £800</div>
             </div>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
             <div className="w-14 h-14 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Compass size={28} />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Execution Roadmaps</h3>
             <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
               We translate complex technical requirements into clear, step-by-step execution plans. Know exactly what needs to be built, in what order, and how long it will take.
             </p>
             <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span>Phased delivery planning</span></li>
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span>Resource allocation and team structuring</span></li>
               <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span>Clear milestones and deliverables</span></li>
             </ul>
             <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
               <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Estimated Investment</div>
               <div className="text-lg font-bold text-slate-900 dark:text-white">Starting from £1,000</div>
             </div>
          </GlassCard>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full">
        <GlassCard className="p-12 text-center bg-slate-900 dark:bg-slate-800 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Need a clear technical direction?</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Stop letting technical uncertainty slow down your business. Let&apos;s build a roadmap that guarantees successful execution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform"
            >
              Consult With An Expert <ArrowRight size={20} />
            </Link>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
