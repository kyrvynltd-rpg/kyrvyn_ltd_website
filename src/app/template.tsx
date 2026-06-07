"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  
  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={reducedMotion ? { opacity: 1 } : { y: 10, opacity: 0, filter: "blur(6px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      exit={reducedMotion ? { opacity: 0 } : { y: 10, opacity: 0, filter: "blur(6px)" }}
      transition={{ ease: "easeOut", duration: 0.35 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
