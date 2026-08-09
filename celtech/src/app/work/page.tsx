import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Original, high-resolution looks at products CELTECH LLC has designed and engineered — with the outcomes that mattered.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Products we designed, built, and shipped"
        description="Every image here is from work we delivered — no stock mockups. Here's what we made and the results it drove."
      />

      <section className="container-page py-16 md:py-24">
        <div className="flex flex-col gap-16">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.slug}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-3xl border border-slate-900/10 shadow-[var(--shadow-soft)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={`${p.title} — an original product built by CELTECH for ${p.client}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {p.category} · {p.client}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-slate-600">{p.summary}</p>
                  <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-brand-50 px-4 py-3">
                    <span className="text-sm font-semibold text-brand-800">
                      Result
                    </span>
                    <span className="text-sm text-slate-700">{p.result}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-accent-600 to-brand-500 p-10 text-center">
          <h2 className="max-w-xl text-2xl font-bold text-white sm:text-3xl">
            Your product could be the next case study.
          </h2>
          <Link
            href="/contact"
            className="btn bg-white text-brand-700 hover:-translate-y-0.5"
          >
            Start a project <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
