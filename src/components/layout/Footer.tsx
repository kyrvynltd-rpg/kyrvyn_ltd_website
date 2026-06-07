"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="w-full mt-auto mt-20 backdrop-blur-lg bg-white/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Registration Column */}
        <div className="flex flex-col gap-3">
          <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tighter">Kyrvyn Ltd</span>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Forward-thinking technology partner for digital transformation.
          </span>
          <div className="flex flex-col gap-1 mt-2 text-sm">
            <span>Registered in England and Wales.</span>
            <span>Business Focus: Digital transformation, web engineering, and secure integrations.</span>
            <span>Company Registration Number: 17078769</span>
          </div>
          <div className="flex flex-col gap-1 mt-4 text-sm">
            <span className="font-semibold text-slate-900 dark:text-white">Registered Address:</span>
            <span>124-128 City Road</span>
            <span>London, United Kingdom</span>
            <span>EC1V 2NX</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-2">
          <span className="font-bold text-slate-900 dark:text-white mb-2">Company</span>
          <div className="flex flex-col leading-loose">
            <Link href="/privacy" className="hover:text-accent-maroon dark:hover:text-accent-blood transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent-maroon dark:hover:text-accent-blood transition-colors">Terms of Service</Link>
            <Link href="/privacy#cookies" className="hover:text-accent-maroon dark:hover:text-accent-blood transition-colors">Cookie Policy</Link>
            <Link href="/privacy#ccpa" className="hover:text-accent-maroon dark:hover:text-accent-blood transition-colors">Do Not Sell My Personal Information</Link>
          </div>
        </div>

        {/* Regulatory Disclosure Column */}
        <div className="flex flex-col gap-4">
          <span className="font-bold text-slate-900 dark:text-white">Regulatory Disclosure</span>
          <p className="text-sm text-slate-400 leading-relaxed">
            For Informational Purposes Only. Nothing on this website constitutes financial, investment, or legal advice. Kyrvyn Ltd is a technology infrastructure provider, not a broker-dealer, exchange, or financial advisor. Digital assets are highly volatile and largely unregulated. Not an offer to sell or solicit securities in the United States or any other jurisdiction.
          </p>
          <span className="text-xs opacity-50 mt-auto">&copy; {new Date().getFullYear()} Kyrvyn Ltd. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
