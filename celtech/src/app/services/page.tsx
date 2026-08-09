import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { processSteps, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CELTECH LLC delivers product engineering, cloud & DevOps, data & AI, and technical consulting for teams that need to ship reliable software.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Engineering expertise, tailored to your goals"
        description="We assemble a focused team around your problem and stay accountable from kickoff to scale."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal as="article" key={s.slug} delay={i * 0.06}>
              <div className="card h-full p-8">
                <h2 className="text-xl font-semibold text-slate-900">
                  {s.title}
                </h2>
                <p className="mt-3 text-slate-600">{s.summary}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 rounded-lg bg-brand-50/60 px-3 py-2 text-sm font-medium text-brand-800"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50/70 py-16 md:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900">
              A process built for momentum
            </h2>
            <p className="mt-3 text-slate-600">
              Every engagement runs on the same clear rhythm so you always know
              what&apos;s next.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-900/10 bg-white p-6">
                  <span className="text-4xl font-extrabold text-brand-100">
                    {step.n}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl border border-slate-900/10 bg-white p-10 text-center">
          <h2 className="max-w-xl text-2xl font-bold text-slate-900 sm:text-3xl">
            Not sure which service fits? Let&apos;s figure it out together.
          </h2>
          <Link href="/contact" className="btn btn-primary">
            Talk to an engineer <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
