import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Ideas and perspectives from the CELTech team on talent, cloud, modernization, and applied AI.",
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Ideas from our team"
        description="Perspectives on building great technology teams and shipping software that lasts."
      />

      <section className="container-page py-16 md:py-24">
        <Reveal>
          <article className="group grid overflow-hidden rounded-3xl border border-line bg-card shadow-[var(--shadow-soft)] lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto">
              <Image
                src="/images/insights.png"
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-brandsoft-text">
                Featured · {featured.category} · {featured.read}
              </span>
              <h2 className="mt-3 text-2xl font-bold text-heading sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-body">{featured.excerpt}</p>
              <Link
                href="/company/insights"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-500"
              >
                Read article <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal as="article" key={post.title} delay={i * 0.06}>
              <div className="card flex h-full flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brandsoft-text">
                  {post.category} · {post.read}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-heading">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {post.excerpt}
                </p>
                <Link
                  href="/company/insights"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-500"
                >
                  Read more <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
