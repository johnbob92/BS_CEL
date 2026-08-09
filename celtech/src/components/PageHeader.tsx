import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./SectionHeading";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-900/5">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 to-white" />
      <div className="container-page py-16 md:py-20">
        <Reveal className="flex max-w-3xl flex-col gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
