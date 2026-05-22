"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ ease: "easeOut", duration: 0.6 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
