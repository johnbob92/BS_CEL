import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Reviews } from "@/components/Reviews";
import { ArrowRightIcon } from "@/components/icons";
import {
  differentiators,
  forCompanies,
  forProfessionals,
  processSteps,
  projects,
  servicesDetail,
} from "@/lib/content";

const trustedBy = [
  "Northwind",
  "Loop Financial",
  "Cascade",
  "Helio Health",
  "Vertex Labs",
  "Brightwave",
];

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-line bg-surface-2 py-8">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-subtle">
            Trusted by teams building the future
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold text-subtle transition-colors hover:text-heading"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* For companies / For professionals */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="One bridge, two directions"
          title="The right talent, the right technology, the right opportunities"
          description="Whether you're building a team or building your career, CELSTARTAB creates the connection."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-brandsoft-text">
                For companies
              </span>
              <h3 className="mt-3 text-2xl font-bold text-heading">
                Build your technology team with confidence
              </h3>
              <p className="mt-3 text-body">
                We help you identify professionals with the right skills,
                experience, and mindset to contribute from day one.
              </p>
              <ul className="mt-6 space-y-3">
                {forCompanies.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-body">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/company/how-we-work"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-500"
              >
                See how we work <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card h-full p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-brandsoft-text">
                For professionals
              </span>
              <h3 className="mt-3 text-2xl font-bold text-heading">
                Find opportunities where your skills matter
              </h3>
              <p className="mt-3 text-body">
                Your technical expertise deserves the right environment. We
                connect you with companies where you can grow.
              </p>
              <ul className="mt-6 space-y-3">
                {forProfessionals.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-body">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/company/careers"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-500"
              >
                Explore careers <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface-2 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Expertise across the modern technology stack"
            description="Access specialized professionals and consulting across the disciplines that move your business forward."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesDetail.map((s, i) => (
              <Reveal as="article" key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold text-heading">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                    {s.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-transform group-hover:gap-3">
                    Learn more <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Link href="/services" className="btn btn-ghost">
              View all services <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why CELSTARTAB */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Why CELSTARTAB"
          title="More than talent matching"
          description="Our approach goes beyond filling roles. We build partnerships designed to last."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brandsoft text-brand-600">
                  <span className="text-lg font-bold">{i + 1}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-heading">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-2 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="A calm, transparent process"
            description="We take the time to understand, then match with care — and stay for the long term."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
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
        </div>
      </section>

      {/* Case studies preview */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Case studies"
          title="Talent that delivers measurable outcomes"
          description="A look at the teams we've assembled and the results they drove."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.slug} delay={i * 0.08}>
              <Link
                href="/case-studies"
                className="group block overflow-hidden rounded-2xl border border-line bg-card shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.title} delivered by a CELSTARTAB team for ${p.client}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-heading">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-body">{p.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-surface-2 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            description="What early clients say about partnering with CELSTARTAB."
          />
          <div className="mt-14">
            <Reviews />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-600 to-brand-500 px-8 py-14 text-center shadow-[var(--shadow-lift)] sm:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Ready to build something exceptional?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Whether you&apos;re looking for exceptional technology talent or
              your next career opportunity, CELSTARTAB is here to help create the
              connection.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="btn bg-white text-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                Partner with us <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/company/careers"
                className="btn border border-white/40 text-white hover:-translate-y-0.5"
              >
                Join our network
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
