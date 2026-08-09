import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Reviews } from "@/components/Reviews";
import { ArrowRightIcon } from "@/components/icons";
import { processSteps, projects, services } from "@/lib/content";

const trustedBy = [
  "Northwind",
  "Loop Financial",
  "Cascade",
  "Helio Health",
  "Vertex Labs",
  "Brightwave",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trusted-by marquee */}
      <section className="border-y border-slate-900/5 bg-slate-50/60 py-8">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            Trusted by teams building the future
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold text-slate-400 transition-colors hover:text-slate-600"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Full-stack consulting, one accountable partner"
          description="From the first whiteboard sketch to production at scale, our teams cover the entire software lifecycle."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="article" key={s.slug} delay={i * 0.06}>
              <div className="card group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <span className="text-lg font-bold">{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-slate-500"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Link href="/services" className="btn btn-ghost">
            Explore all services <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Work preview */}
      <section className="bg-slate-50/70 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Selected work"
            title="Original products, measurable outcomes"
            description="A look at platforms we designed and built end-to-end for our clients."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal as="article" key={p.slug} delay={i * 0.08}>
                <Link
                  href="/work"
                  className="group block overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.title} built by CELTECH for ${p.client}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                      {p.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="How we work"
          title="A calm, transparent process"
          description="No surprises, no vanity metrics — just steady, visible progress toward a product you're proud of."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-slate-900/10 bg-white p-6">
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
      </section>

      {/* Reviews */}
      <section className="bg-slate-50/70 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Client reviews"
            title="Don't just take our word for it"
            description="Live, verified reviews from the teams we've partnered with — straight from Google."
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
              Have a project in mind? Let&apos;s build it together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Tell us where you want to go. We&apos;ll map the fastest, safest
              path to get there.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="btn bg-white text-brand-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                Book a free consultation <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
