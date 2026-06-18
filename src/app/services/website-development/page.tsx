"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, CheckCircle2, Shield, Zap, Settings, Star } from "lucide-react";

export default function WebsiteDevelopmentServicePage() {
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
              Bespoke Website Development
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mx-auto font-medium mb-10 max-w-2xl">
              A high-converting, 1-page standalone website designed to solve your specific business pain points. Get your website in <strong>48/72hs</strong>.
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
                Start Your Project <ArrowRight size={20} />
              </Link>
            </motion.div>
          </GlassCard>
        </motion.div>
      </section>

      {/* The Core Offer */}
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-8 border-b pb-4 border-black/10 dark:border-white/10 text-slate-900 dark:text-white">
          Our Core Package
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              We focus on building a professional online presence that actually works for you. Our core offer is a high-converting, 1-page standalone website that includes all the essential sections you need to succeed online.
            </p>
            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-accent-maroon dark:text-accent-blood flex-shrink-0" size={24} /> A professional hero section (what you do)</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-accent-maroon dark:text-accent-blood flex-shrink-0" size={24} /> A bio/photo establishing credibility</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-accent-maroon dark:text-accent-blood flex-shrink-0" size={24} /> A clear list of your services</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-accent-maroon dark:text-accent-blood flex-shrink-0" size={24} /> A client testimonial section for social proof</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-accent-maroon dark:text-accent-blood flex-shrink-0" size={24} /> UK GDPR-compliant privacy policy footer</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-accent-maroon dark:text-accent-blood flex-shrink-0" size={24} /> Prominent call-to-action (embedded Calendly or contact form)</li>
            </ul>
          </div>
          <GlassCard className="p-8 flex flex-col justify-center items-center text-center group">
             <div className="w-20 h-20 rounded-full bg-accent-maroon/10 text-accent-maroon dark:text-accent-blood flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Zap size={40} />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Lightning Fast Delivery</h3>
             <p className="text-lg text-slate-600 dark:text-slate-400">
               Stop waiting weeks for a website. We deliver your complete, high-converting single-page site in just <strong className="text-slate-900 dark:text-white">48/72hs</strong>.
             </p>
          </GlassCard>
        </div>
      </section>

      {/* The Two Tracks */}
      <section className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Choose Your Track
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            We position our technical tracks as business solutions, designed to solve your specific pain points as a busy freelancer or business owner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hardcoded Option (Primary Recommendation) */}
          <GlassCard className="p-8 relative border-2 border-accent-maroon dark:border-accent-blood shadow-lg group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
            <div className="absolute top-0 right-4 transform -translate-y-1/2 bg-accent-maroon dark:bg-accent-blood text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg z-10">
              <Star size={16} className="fill-white" /> Our Primary Recommendation
            </div>
            <div className="w-14 h-14 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Shield size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
              The &quot;Hands-Off&quot; Track
            </h3>
            <div className="text-sm font-bold tracking-widest uppercase text-accent-maroon dark:text-accent-blood mb-4">
              Hardcoded (HTML/CSS/JS) + Maintenance
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
              A lightning-fast, ultra-secure, and maintenance-free solution. For clients who want <strong>zero technical headache</strong>. 
              We offer this alongside a monthly retainer/maintenance service where we handle minor text changes, hosting management, and uptime monitoring for a small fee (e.g., £29–£49/month).
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" /> <span>Passive solution, we handle everything</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" /> <span>Maximum security, no vulnerable plugins</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-0.5" /> <span>Unmatched loading speeds</span></li>
            </ul>
            <Link
              href="/contact?track=hands-off"
              className="block w-full text-center px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition-opacity mt-auto"
            >
              Choose Hands-Off
            </Link>
          </GlassCard>

          {/* WordPress Option */}
          <GlassCard className="p-8 group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
            <div className="w-14 h-14 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Settings size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
              The &quot;Independence&quot; Track
            </h3>
            <div className="text-sm font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-4">
              WordPress
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
              Built for freelancers who want complete ownership and control. Once we build the standalone landing page, you can easily log in to update your client testimonials, blog posts, or pricing without ever paying a developer.
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 mb-8">
              <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span>Complete ownership of your content</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span>User-friendly admin dashboard</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span>No ongoing maintenance fees required</span></li>
            </ul>
            <Link
              href="/contact?track=independence"
              className="block w-full text-center px-6 py-4 bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-white/20 transition-colors mt-auto"
            >
              Choose Independence
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full">
        <GlassCard className="p-12 text-center bg-slate-900 dark:bg-slate-800 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-maroon/20 to-accent-blood/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Ready to elevate your business?</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you want complete independence or a hands-off experience, we have the perfect bespoke website solution for you. Let&apos;s get started today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform"
            >
              Book a consultation <ArrowRight size={20} />
            </Link>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
