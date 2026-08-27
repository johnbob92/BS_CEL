import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "The CELSTARTAB partnership model: understand, match, deliver, and grow — with quality and transparency at every step.",
};

const engagementModels = [
  {
    title: "Direct placement",
    body: "We find and place permanent technology professionals who become long-term members of your team.",
  },
  {
    title: "Team augmentation",
    body: "Scale up quickly with vetted engineers who integrate seamlessly with your existing team and process.",
  },
  {
    title: "Dedicated pods",
    body: "A ready-formed, cross-functional team that owns an initiative end-to-end with our delivery support.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="How we work"
        title="A partnership built on trust and fit"
        description="Our approach goes beyond traditional talent matching. We take the time to understand your technical needs, business objectives, and engineering culture."
      />

      <section className="container-page py-16 md:py-20">
        <Reveal className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-soft)]">
          <div className="relative aspect-[16/6]">
            <Image
              src="/images/how_we_work.png"
              alt="A CELSTARTAB team collaborating around a whiteboard"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Our process"
          title="Four steps, one lasting partnership"
          align="left"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-card p-6">
                <span className="text-4xl font-extrabold text-brand-200">
                  {step.n}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-2 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Engagement models"
            title="Ways to work with us"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-card p-7">
                  <h3 className="text-lg font-semibold text-heading">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {m.body}
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
            Let&apos;s find the model that fits your goals.
          </h2>
          <Link href="/contact" className="btn btn-primary">
            Get in touch <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
