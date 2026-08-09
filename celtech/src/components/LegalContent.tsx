import Link from "next/link";
import { Reveal } from "./Reveal";
import { ArrowRightIcon } from "./icons";
import { legalUpdated, type LegalSection } from "@/lib/content";

export function LegalContent({
  sections,
  crossLinkHref,
  crossLinkLabel,
}: {
  sections: LegalSection[];
  crossLinkHref: string;
  crossLinkLabel: string;
}) {
  return (
    <section className="container-page py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-sm text-subtle">Last updated: {legalUpdated}</p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-8">
          {sections.map((section, i) => (
            <Reveal as="article" key={section.heading} delay={i * 0.03}>
              <h2 className="text-xl font-semibold text-heading">
                {section.heading}
              </h2>
              {section.body.map((paragraph, p) => (
                <p key={p} className="mt-3 leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center gap-4 border-t border-line pt-8">
          <Link
            href="/company/about"
            className="text-sm font-semibold text-brand-600 hover:text-brand-500"
          >
            ← Back to About Us
          </Link>
          <Link
            href={crossLinkHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-500"
          >
            {crossLinkLabel} <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
