"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Loading() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 dark:bg-[#020617]/80 backdrop-blur-sm min-h-screen w-full">
      <div className="flex flex-col items-center gap-8">
        <div className="flex gap-3">
          {[0, 1, 2].map((i) =>
            reducedMotion ? (
              <div
                key={i}
                className="w-12 h-12 border-2 border-accent-maroon dark:border-accent-blood rounded-lg bg-transparent flex items-center justify-center relative overflow-hidden"
              >
                <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-sm" />
              </div>
            ) : (
              <motion.div
                key={i}
                className="w-12 h-12 border-2 border-accent-maroon dark:border-accent-blood rounded-lg bg-transparent flex items-center justify-center relative overflow-hidden"
                initial={{ rotate: 0, opacity: 0.3 }}
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              >
                <div className="w-2 h-2 bg-slate-900 dark:bg-white rounded-sm" />
              </motion.div>
            ),
          )}
        </div>

        {reducedMotion ? (
          <div className="flex flex-col items-center font-mono">
            <span className="text-xl font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">
              Validating Node
            </span>
            <span className="text-sm text-accent-maroon dark:text-accent-blood">
              Awaiting Consensus...
            </span>
          </div>
        ) : (
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center font-mono"
          >
            <span className="text-xl font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-2">
              Validating Node
            </span>
            <span className="text-sm text-accent-maroon dark:text-accent-blood">
              Awaiting Consensus...
            </span>
          </motion.div>
        )}

        <div className="w-64 h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
          {reducedMotion ? (
            <div className="h-full w-1/2 bg-accent-maroon dark:bg-accent-blood" />
          ) : (
            <motion.div
              className="h-full bg-accent-maroon dark:bg-accent-blood"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
