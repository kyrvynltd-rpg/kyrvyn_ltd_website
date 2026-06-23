"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    subLinks: [
      { href: "/services/website-development", label: "Website Development" },
      { href: "/services/technical-consulting", label: "Technical Consulting" },
      { href: "/services/custom-development", label: "Custom Development" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    if (isAdmin) return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isAdmin]);

  useEffect(() => {
    if (isAdmin) return;
    setIsOpen(false);
  }, [pathname, isAdmin]);

  useEffect(() => {
    if (isAdmin) return;
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, isAdmin]);

  if (isAdmin) return null;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="page-container py-4 flex items-center justify-between relative z-[60]">
        <Link
          href="/"
          className="flex items-center font-black tracking-tight text-slate-900 dark:text-white"
        >
          Kyrvyn Ltd
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.subLinks ? (
              <div key={link.label} className="relative group py-2">
                <Link
                  href={link.href}
                  className="text-slate-900 font-semibold dark:text-white hover:text-accent-maroon dark:hover:text-accent-blood transition-colors"
                >
                  {link.label}
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:flex flex-col gap-2 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-200 dark:border-white/10 min-w-[200px]">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-accent-maroon dark:hover:text-accent-blood transition-colors font-medium"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
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
            ),
          )}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden p-2 -mr-2 text-slate-900 dark:text-white hover:text-accent-maroon transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
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
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-3xl bg-white/85 dark:bg-[#050505]/85 min-h-screen w-full"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link) =>
                link.subLinks ? (
                  <div key={link.label} className="flex flex-col items-center gap-4">
                    <Link
                      href={link.href}
                      className="text-3xl tracking-tighter text-slate-900 font-semibold dark:text-white hover:text-accent-maroon dark:hover:text-accent-blood transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                    <div className="flex flex-col items-center gap-4">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`text-xl tracking-tighter transition-colors hover:text-accent-maroon dark:hover:text-accent-blood ${
                            pathname === sub.href
                              ? "text-accent-maroon dark:text-accent-blood font-bold"
                              : "text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
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
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
