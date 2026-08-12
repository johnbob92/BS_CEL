import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "CELSTARTAB LLC supports organizations across financial services, healthcare, retail, technology, energy, and the public sector with specialized technology talent.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Expertise tuned to your industry"
        description="Every sector has its own constraints, regulations, and pace. We match you with professionals who understand yours."
      />

      <section className="container-page py-16 md:py-20">
        <Reveal className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-soft)]">
          <div className="relative aspect-[16/6]">
            <Image
              src="/images/industries_hero.png"
              alt="Technology connecting industries across a city"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal as="article" key={industry.name} delay={i * 0.06}>
              <div className="card h-full p-7">
                <h2 className="text-lg font-semibold text-heading">
                  {industry.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {industry.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-2 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Cross-industry strengths"
            title="What stays constant, whatever your sector"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Security & compliance",
                body: "Professionals who understand the regulatory and security demands your industry places on software.",
              },
              {
                title: "Domain fluency",
                body: "We match for context, not just code — people who speak your business language from day one.",
              },
              {
                title: "Scalable delivery",
                body: "From one specialist to a full team, we scale the engagement to your roadmap and season.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-card p-6">
                  <h3 className="text-lg font-semibold text-heading">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl border border-line bg-card p-10 text-center">
          <h2 className="max-w-xl text-2xl font-bold text-heading sm:text-3xl">
            Building in a sector we didn&apos;t list? We&apos;d still love to help.
          </h2>
          <Link href="/contact" className="btn btn-primary">
            Tell us about your needs <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
