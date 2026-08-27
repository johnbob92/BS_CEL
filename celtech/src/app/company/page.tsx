import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company",
  description: `Learn about ${site.name} — our vision, how we work, careers, insights, and events.`,
};

const sections = [
  {
    href: "/company/about",
    label: "About Us",
    image: "/images/team_group.png",
    description:
      "Our story, vision, and mission — and the people who make the connection happen.",
  },
  {
    href: "/company/how-we-work",
    label: "How We Work",
    image: "/images/how_we_work.png",
    description:
      "The partnership model we use to understand, match, deliver, and grow.",
  },
  {
    href: "/company/careers",
    label: "Careers",
    image: "/images/careers.png",
    description:
      "Find opportunities where your skills matter and your career can grow.",
  },
  {
    href: "/company/insights",
    label: "Insights",
    image: "/images/insights.png",
    description: "Ideas and perspectives from the CELSTARTAB team.",
  },
  {
    href: "/company/events",
    label: "Events",
    image: "/images/events.png",
    description: "Where to meet CELSTARTAB in person and online.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="The bridge between technical excellence and business innovation"
        description={site.description}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <Reveal as="article" key={s.href} delay={i * 0.06}>
              <Link
                href={s.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold text-heading">
                    {s.label}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-body">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-all group-hover:gap-3">
                    Explore <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
