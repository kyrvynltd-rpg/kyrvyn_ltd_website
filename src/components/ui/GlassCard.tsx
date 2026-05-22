import { ReactNode } from "react";

interface GlassCardProps {
  children?: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`bg-white/95 backdrop-blur-3xl border border-white shadow-2xl shadow-blue-900/10 rounded-3xl text-slate-950 dark:bg-slate-950/95 dark:backdrop-blur-3xl dark:border-blue-500/20 dark:shadow-[0_0_50px_rgba(59,130,246,0.15)] dark:text-white ${className}`}
    >
      {children}
    </div>
  );
}
