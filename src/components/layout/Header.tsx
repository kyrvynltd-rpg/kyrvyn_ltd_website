"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Research & Operations" },
  { href: "/contact", label: "Contact Operations" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname?.startsWith("/admin")) return null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-4 px-8 flex items-center justify-between relative z-[60]">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo1.png" 
            alt="Logo" 
            width={40} 
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-accent-maroon dark:hover:text-accent-blood ${
                pathname === link.href
                  ? "text-accent-maroon dark:text-accent-blood font-bold"
                  : "text-slate-900 font-semibold dark:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="md:hidden p-2 -mr-2 text-slate-900 dark:text-white hover:text-accent-maroon transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-3xl bg-white/95 dark:bg-[#050505]/95 min-h-screen w-full"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-3xl tracking-tighter transition-colors hover:text-accent-maroon dark:hover:text-accent-blood ${
                    pathname === link.href
                      ? "text-accent-maroon dark:text-accent-blood font-bold"
                      : "text-slate-900 font-semibold dark:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
