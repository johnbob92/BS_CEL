import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";
import { servicesDetail, techFocus } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CELTech LLC connects organizations with expertise across cloud development, software engineering, legacy modernization, data & AI, and DevOps & SRE.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Expertise that meets you where you are"
        description="From a single specialist to a full cross-functional team, we connect you with the technology professionals your goals require."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesDetail.map((s, i) => (
            <Reveal as="article" key={s.slug} delay={i * 0.05}>
              <Link
                href={`/services/${s.slug}`}
                className="card group flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <h2 className="text-xl font-semibold text-heading">
                  {s.title}
                </h2>
                <p className="mt-3 flex-1 text-body">{s.tagline}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.capabilities.slice(0, 3).map((c) => (
                    <li
                      key={c}
                      className="rounded-full bg-brandsoft px-3 py-1 text-xs font-medium text-brandsoft-text"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-all group-hover:gap-3">
                  Learn more <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-2 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Technology focus"
            title="The specialists we place"
            align="left"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {techFocus.map((group, i) => (
              <Reveal key={group.area} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-card p-6">
                  <h3 className="text-lg font-semibold text-heading">
                    {group.area}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-body"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl border border-line bg-card p-10 text-center">
          <h2 className="max-w-xl text-2xl font-bold text-heading sm:text-3xl">
            Not sure which expertise you need? Let&apos;s figure it out together.
          </h2>
          <Link href="/contact" className="btn btn-primary">
            Talk to our team <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
