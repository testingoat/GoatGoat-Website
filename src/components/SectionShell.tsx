import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  align?: "left" | "center";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  align = "left",
}: SectionShellProps) {
  const isCenter = align === "center";

  return (
    <section
      id={id}
      className="w-full border-b border-white/5 bg-slate-950/40 px-6 py-16 sm:px-10 sm:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header
          className={`max-w-3xl ${
            isCenter ? "mx-auto text-center" : "text-left"
          }`}
        >
          {eyebrow && (
            <p className="mb-3 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-400">
              {eyebrow}
            </p>
          )}
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-pretty text-sm text-slate-400 sm:text-base">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

