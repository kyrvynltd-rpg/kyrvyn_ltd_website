"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Zap, Lock, ArrowRight } from "lucide-react";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { OfferQuiz } from "@/components/ui/OfferQuiz";

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
              Bespoke websites
              <br />
              that turn visitors into customers.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mx-auto font-medium mb-10 max-w-2xl">
              If your website feels slow, unclear, or “fine but not converting”, you’re leaving
              revenue and credibility on the table. Kyrvyn Ltd designs bespoke websites, provides
              technical consulting and architecture, and delivers custom development for
              integrations, blockchain solutions, performance improvements, UX upgrades, and
              platform modernisation.
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
                Book a consultation <ArrowRight size={20} />
              </Link>
            </motion.div>
          </GlassCard>
        </motion.div>
      </section>

      {/* At a Glance Grid */}
      <section className="w-full">
        <h2 className="text-2xl font-semibold mb-8 border-b pb-4 border-black/10 dark:border-white/10">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300 relative flex flex-col">
            <Link href="/services/website-development" className="absolute inset-0 z-10 block">
              <span className="sr-only">View Bespoke Website Development Service</span>
            </Link>
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-accent-maroon dark:group-hover:text-accent-blood transition-colors">
              Bespoke Website Development
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              A premium, conversion-focused site that makes your offer obvious, your value credible,
              and your next step frictionless.
            </p>
            <div className="text-sm font-bold text-accent-maroon dark:text-accent-blood flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
              Learn more <ArrowRight size={16} />
            </div>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300 relative flex flex-col">
            <Link href="/services/technical-consulting" className="absolute inset-0 z-10 block">
              <span className="sr-only">View Technical Consulting & Architecture Service</span>
            </Link>
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Technical Consulting & Architecture
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              A clear plan, de-risked decisions, and an execution roadmap so you stop guessing and
              start shipping.
            </p>
            <div className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
              Learn more <ArrowRight size={16} />
            </div>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300 relative flex flex-col">
            <Link href="/services/custom-development" className="absolute inset-0 z-10 block">
              <span className="sr-only">View Custom Integrations & Platform Modernisation Service</span>
            </Link>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Custom Integrations, Blockchain & Platform Modernisation
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
              Bespoke development that connects systems, modernises platforms, and delivers reliable
              features without compromising security or speed.
            </p>
            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
              Learn more <ArrowRight size={16} />
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-2xl font-semibold border-b pb-4 border-black/10 dark:border-white/10">
            Find the right offer
          </h2>
          <p className="text-slate-700 dark:text-slate-300 max-w-3xl">
            Answer a few quick questions and get a best-fit recommendation, the benefits you can
            expect, and a prefilled brief you can send in seconds.
          </p>
        </div>
        <OfferQuiz />
      </section>

      {/* Newsletter Signup */}
      <section className="w-full relative py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-maroon/5 to-accent-blood/5 rounded-3xl -z-10" />
        <NewsletterForm />
      </section>
    </div>
  );
}
