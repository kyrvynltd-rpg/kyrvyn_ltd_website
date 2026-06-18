"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function CookieBanner() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (type: "all" | "essential") => {
    localStorage.setItem("cookie_consent", type);
    setIsVisible(false);
  };

  if (pathname?.startsWith("/admin")) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 flex justify-center"
        >
          <div className="w-full max-w-5xl backdrop-blur-2xl bg-white/75 dark:bg-[#050505]/85 border border-black/10 dark:border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 w-full md:w-2/3">
              <h3 className="text-lg font-bold text-black dark:text-white">
                Cookies and Data Governance
              </h3>
              <p className="text-sm text-cool-grey dark:text-gray-300">
                We utilize essential cookies to guarantee core platform functionality and
                infrastructural security. With your authorization, we deploy supplementary tracking
                mechanisms to optimise performance analytics. All data is processed in strict
                compliance with the UK GDPR framework.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto shrink-0 justify-end flex-wrap">
              <button
                onClick={() => handleConsent("essential")}
                className="px-5 py-2.5 text-xs font-semibold border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
              >
                Manage Preferences
              </button>
              <button
                onClick={() => handleConsent("essential")}
                className="px-5 py-2.5 text-xs font-semibold border-2 border-black/20 dark:border-white/20 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black dark:text-white"
              >
                Essential Cookies Only
              </button>
              <button
                onClick={() => handleConsent("all")}
                className="px-5 py-2.5 text-xs font-semibold bg-accent-maroon dark:bg-accent-blood text-white rounded-xl hover:opacity-90 shadow-lg shadow-accent-maroon/20 transition-all duration-300"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
