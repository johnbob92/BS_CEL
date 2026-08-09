import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { team } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the founders and team behind CELTECH LLC, and see the real studio where we design and build software.",
};

const values = [
  {
    title: "Craft over shortcuts",
    body: "We write software we're proud to maintain — tested, documented, and built to last.",
  },
  {
    title: "Radical transparency",
    body: "Weekly demos, honest estimates, and a shared board so you always know where things stand.",
  },
  {
    title: "Outcomes, not hours",
    body: "We measure success by the metrics that move your business, not by lines of code.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A small team obsessed with building the right thing"
        description={`${site.name} is a software consulting studio. We're engineers, designers, and problem-solvers who love turning ambitious ideas into dependable products.`}
      />

      {/* Team */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Our people"
          title="Meet the team"
          description="The founders and staff you'll actually work with — real people, real photos, no stock imagery."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal as="article" key={member.name} delay={i * 0.06}>
              <div className="card group h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at ${site.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-brand-600">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work environment */}
      <section className="bg-slate-50/70 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Inside the studio"
            title="Where the work happens"
            align="left"
            description="Our bright San Francisco studio is built for deep work and real collaboration."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="overflow-hidden rounded-3xl border border-slate-900/10 shadow-[var(--shadow-soft)]">
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
              className="overflow-hidden rounded-3xl border border-slate-900/10 shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-[4/3] h-full">
                <Image
                  src="/images/work_pairing.png"
                  alt="Two CELTECH engineers pair-programming at a standing desk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading eyebrow="What we value" title="How we operate" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-900/10 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
