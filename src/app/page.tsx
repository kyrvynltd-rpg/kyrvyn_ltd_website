"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Zap, Lock, ArrowRight } from "lucide-react";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[60vh]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto relative z-10 w-full"
        >
          <GlassCard className="p-8 relative">
            <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-accent-maroon to-accent-blood hidden dark:block opacity-40 -z-10 rounded-full" />
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
              Reshaping the
              <br />
              Digital Landscape
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mx-auto font-medium mb-10 max-w-2xl">
              Kyrvyn Ltd empowers businesses to build, expand, and optimize their digital footprint
              through tailored web engineering, secure integrations, and modern blockchain
              solutions.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-maroon dark:bg-accent-blood text-white rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,0,0,0.12)] dark:shadow-[0_0_24px_rgba(0,212,255,0.18)]"
              >
                Talk to Kyrvyn <ArrowRight size={20} />
              </Link>
            </motion.div>
          </GlassCard>
        </motion.div>
      </section>

      {/* At a Glance Grid */}
      <section className="w-full">
        <h2 className="text-2xl font-semibold mb-8 border-b pb-4 border-black/10 dark:border-white/10">
          How We Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
              Strategy & Architecture
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Clear technical direction, measurable outcomes, and delivery plans built around your
              business goals, constraints, and timelines.
            </p>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Build & Scale</h3>
            <p className="text-slate-600 dark:text-slate-400">
              High-performance web platforms and product experiences engineered for reliability,
              speed, and growth-ready operations.
            </p>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
              Secure Integration
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Secure-by-design delivery with modern integrations, compliance-aware data handling,
              and optional blockchain capabilities when they add real value.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full relative py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-maroon/5 to-accent-blood/5 rounded-3xl -z-10" />
        <NewsletterForm />
      </section>
    </div>
  );
}
