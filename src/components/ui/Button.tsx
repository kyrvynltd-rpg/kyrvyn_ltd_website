import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonProps = CommonProps & ComponentProps<"button">;

type ButtonLinkProps = CommonProps &
  Omit<ComponentProps<typeof Link>, "className"> & {
    href: string;
  };

function variantClasses(variant: ButtonVariant) {
  switch (variant) {
    case "secondary":
      return "border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10";
    case "ghost":
      return "bg-transparent text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10";
    case "primary":
    default:
      return "bg-accent-maroon dark:bg-accent-blood text-white hover:opacity-90 shadow-lg shadow-accent-maroon/20";
  }
}

function sizeClasses(size: ButtonSize) {
  switch (size) {
    case "sm":
      return "px-4 py-2 text-sm rounded-xl";
    case "lg":
      return "px-8 py-4 text-base rounded-2xl";
    case "md":
    default:
      return "px-6 py-3 text-sm rounded-xl";
  }
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${variantClasses(variant)} ${sizeClasses(size)} ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-[0.98] ${variantClasses(variant)} ${sizeClasses(size)} ${className}`}
      {...props}
    />
  );
}
