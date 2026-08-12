import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-brandsoft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brandsoft-text">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="max-w-2xl text-3xl font-bold text-heading sm:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-body">
          {description}
        </p>
      )}
    </Reveal>
  );
}
