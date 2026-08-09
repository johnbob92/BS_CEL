import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";
import { servicesDetail } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicesDetail.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesDetail.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.intro,
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = servicesDetail.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = servicesDetail.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHeader eyebrow="Services" title={service.title} description={service.tagline} />

      {/* Intro + capabilities */}
      <section className="container-page py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-body">{service.intro}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 rounded-xl bg-brandsoft px-4 py-3 text-sm font-medium text-brandsoft-text"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={service.image}
                alt={`${service.title} work by a CELTech team`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our approach"
            title={service.expertiseLabel}
            align="left"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.strategies.map((strategy, i) => (
              <Reveal as="article" key={strategy.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-7">
                  <span className="text-sm font-bold text-brand-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-heading">
                    {strategy.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {strategy.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="container-page py-16 md:py-20">
        <SectionHeading eyebrow="Keep exploring" title="Other services" align="left" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card group flex items-center justify-between p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-sm font-semibold text-heading">
                {s.title}
              </span>
              <ArrowRightIcon className="h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-accent-600 to-brand-500 p-10 text-center">
          <h2 className="max-w-xl text-2xl font-bold text-white sm:text-3xl">
            Ready to add {service.title.toLowerCase()} expertise to your team?
          </h2>
          <Link href="/contact" className="btn bg-white text-brand-700 hover:-translate-y-0.5">
            Start the conversation <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
