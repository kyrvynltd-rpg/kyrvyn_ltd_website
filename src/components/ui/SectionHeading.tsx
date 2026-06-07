import type { ComponentProps } from "react";

export function SectionHeading({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-700 dark:text-slate-400 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function SectionDivider(props: ComponentProps<"div">) {
  const { className = "", ...rest } = props;
  return (
    <div
      className={`h-px w-full bg-black/10 dark:bg-white/10 ${className}`}
      {...rest}
    />
  );
}
