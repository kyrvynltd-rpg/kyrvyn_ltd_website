import { ReactNode } from "react";

interface GlassCardProps {
  children?: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`bg-white/55 backdrop-blur-3xl border border-white/55 shadow-2xl shadow-slate-900/10 rounded-3xl text-slate-950 dark:bg-slate-950/55 dark:backdrop-blur-3xl dark:border-white/10 dark:shadow-[0_0_50px_rgba(0,212,255,0.10)] dark:text-white ${className}`}
    >
      {children}
    </div>
  );
}
