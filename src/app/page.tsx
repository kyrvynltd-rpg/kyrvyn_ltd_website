"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Zap, Lock, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === "dark" ? "/images/logo3.png" : "/images/logo2.png";

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
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <Image
                src={logoSrc}
                alt="Logo"
                width={200}
                height={200}
                className="h-32 w-auto md:h-48 object-contain"
              />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-blue-900 dark:text-white">
              Institutional Web3<br />Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-blue-800 dark:text-slate-400 mx-auto font-medium mb-10 max-w-2xl">
              A high-trust UK blockchain technology platform engineered for absolute security, immutable consensus, and enterprise-scale operations.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
              >
                Contact Operations <ArrowRight size={20} />
              </Link>
            </motion.div>
          </GlassCard>
        </motion.div>
      </section>

      {/* At a Glance Grid */}
      <section className="w-full">
        <h2 className="text-2xl font-semibold mb-8 border-b pb-4 border-black/10 dark:border-white/10">Platform Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Mathematical Consensus</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Cryptographically secured immutable ledger ensuring absolute data integrity with mathematically verified state transitions.
            </p>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">High-Throughput Node</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Enterprise-grade scalability processing operations instantly via optimized parallel execution environments.
            </p>
          </GlassCard>

          <GlassCard className="p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Zero-Trust Infrastructure</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Decentralized privacy-preserving operations utilizing zero-knowledge proof verification across the network.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full relative py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl -z-10" />
        <GlassCard className="p-10 md:p-14 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">Subscribe to Operations</h2>
          <p className="text-blue-800 dark:text-slate-400 mb-8 max-w-lg">
            Join the node operator list to receive the latest analytical updates, infrastructure developments, and network announcements.
          </p>
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your institutional email..." 
              className="flex-1 px-6 py-4 rounded-full bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition-all"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all"
            >
              Subscribe
            </button>
          </form>
        </GlassCard>
      </section>
    </div>
  );
}
