import type { ComponentProps } from "react";

type BadgeVariant = "default" | "info" | "success" | "warning";

export function Badge({
  className = "",
  variant = "default",
  ...props
}: ComponentProps<"span"> & { variant?: BadgeVariant }) {
  const variantClass =
    variant === "success"
      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20"
      : variant === "info"
        ? "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20"
        : variant === "warning"
          ? "bg-amber-500/10 text-amber-800 dark:text-amber-200 border-amber-500/20"
          : "bg-white/50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-black/10 dark:border-white/10";

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${variantClass} ${className}`}
      {...props}
    />
  );
}
