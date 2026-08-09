import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { differentiators, team } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} bridges the gap between world-class technology professionals and organizations seeking engineering excellence.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Connecting the right talent, technology, and opportunities"
        description="In a world where technology drives competitive advantage, having the right people is critical. CELTech LLC helps companies access the expertise they need and helps professionals grow meaningful careers."
      />

      {/* Vision & mission */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-brandsoft-text">
                Our vision
              </span>
              <p className="mt-4 text-lg leading-relaxed text-heading">
                To become a trusted technology partner that empowers businesses
                through exceptional technical talent while helping professionals
                achieve meaningful career growth.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card h-full p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-brandsoft-text">
                Our mission
              </span>
              <p className="mt-4 text-lg leading-relaxed text-heading">
                To bridge the gap between world-class technology professionals
                and organizations seeking engineering excellence — building
                high-performing teams and advancing great careers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our people"
            title="Meet the team"
            description="The people you'll actually work with — each a distinct expert in their field."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal as="article" key={member.name} delay={i * 0.05}>
                <div className="card group h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at ${site.name}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-semibold text-heading">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-brand-600">
                      {member.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work environment */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Inside CELTech"
          title="Where the work happens"
          align="left"
          description="Our bright San Francisco studio is built for deep work and real collaboration."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/office_space.png"
                alt={`The bright, open ${site.name} studio`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </Reveal>
          <Reveal
            delay={0.1}
            className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-soft)]"
          >
            <div className="relative aspect-[4/3] h-full">
              <Image
                src="/images/work_pairing.png"
                alt="Two CELTech engineers pair-programming at a standing desk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why CELTech */}
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Why CELTech" title="What sets us apart" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-card p-6">
                  <h3 className="text-base font-semibold text-heading">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
