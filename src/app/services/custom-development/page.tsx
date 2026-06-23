"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, CheckCircle2, Lock, Workflow, Database, Cpu } from "lucide-react";

export default function CustomDevelopmentServicePage() {
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
            <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-purple-500/40 to-fuchsia-500/40 hidden dark:block -z-10 rounded-full" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
              Custom Integrations & Platform Modernisation
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mx-auto font-medium mb-10 max-w-2xl">
              Bespoke development that connects systems, modernises platforms, and delivers reliable
              features without compromising security or speed.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 dark:bg-purple-500 text-white rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(147,51,234,0.2)] dark:shadow-[0_0_24px_rgba(168,85,247,0.3)]"
              >
                Discuss Your Requirements <ArrowRight size={20} />
              </Link>
            </motion.div>
          </GlassCard>
        </motion.div>
      </section>

      {/* The Core Offer */}
      <section className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Future-Proof Your Operations
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Off-the-shelf software rarely fits perfectly. We build custom solutions to bridge the
            gaps in your workflow, upgrade outdated legacy systems, and integrate next-generation
            technologies like blockchain to keep you ahead of the curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
            <div className="w-14 h-14 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Workflow size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Third-Party API Integrations
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
              Stop manually transferring data between tools. We build robust integrations connecting
              your CRMs, ERPs, payment gateways, and bespoke internal tools for seamless automation.
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Automated data synchronization</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Custom API development & webhooks</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Seamless integration with any REST or GraphQL API</span>
              </li>
            </ul>
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Estimated Investment
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">
                Starting from £800 per integration
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
            <div className="w-14 h-14 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lock size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Blockchain & Web3 Solutions
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
              Leverage decentralized technology for immutable records, tokenization, and secure
              transactions. We provide end-to-end blockchain architecture and development.
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Smart contract development & auditing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Decentralised Application (dApp) creation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-purple-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Secure wallet integrations</span>
              </li>
            </ul>
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Estimated Investment
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">
                Starting from £2,000
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
            <div className="w-14 h-14 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Database size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Legacy System Modernisation
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
              Is your old software holding back your growth? We systematically upgrade, refactor,
              and migrate legacy codebases to modern, scalable cloud environments safely and
              efficiently.
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Monolith to Microservices migration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Deployment to modern cloud infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Safe data migration and technology upgrading</span>
              </li>
            </ul>
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Estimated Investment
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">
                Custom quoting based on project scale
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
            <div className="w-14 h-14 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Security Audits & Performance Hardening
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
              A successful platform is only as good as its speed and security. We conduct thorough
              security audits, implement advanced caching, optimise databases, and secure your
              platform against emerging enterprise-level threats.
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-rose-500 flex-shrink-0 mt-0.5" />{" "}
                <span>High-availability architecture design</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-rose-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Advanced rate-limiting and DDoS protection</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-rose-500 flex-shrink-0 mt-0.5" />{" "}
                <span>Database query optimization</span>
              </li>
            </ul>
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Estimated Investment
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">
                Audits & improvements from £1,000
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full">
        <GlassCard className="p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 dark:text-white">
              Ready to scale securely?
            </h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Don&apos;t let outdated technology limit your business potential. Partner with us for
              reliable custom development and robust system modernization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform"
            >
              Start Your Integration <ArrowRight size={20} />
            </Link>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
