import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";
import { forProfessionals, openRoles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Find opportunities where your skills matter. CELTech LLC connects talented engineers with companies where they can grow.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Find opportunities where your skills matter"
        description="Your technical expertise deserves the right environment. We connect talented engineers and technology professionals with companies where they can apply their skills and keep growing."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/for_professionals.png"
                alt="A technology professional at work"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl font-bold text-heading sm:text-3xl">
              Why join the CELTech network
            </h2>
            <ul className="mt-6 space-y-3">
              {forProfessionals.map((f) => (
                <li key={f} className="flex items-start gap-3 text-body">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-2 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Open roles"
            title="Current opportunities"
            align="left"
          />
          <div className="mt-10 flex flex-col gap-4">
            {openRoles.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.05}>
                <div className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-heading">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-subtle">
                      {role.location} · {role.type} · {role.focus}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn btn-ghost shrink-0 self-start sm:self-auto"
                  >
                    Apply <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="text-sm text-subtle">
              Don&apos;t see the right role?{" "}
              <Link
                href="/contact"
                className="font-semibold text-brand-600 hover:text-brand-500"
              >
                Send us your profile
              </Link>{" "}
              and we&apos;ll reach out when there&apos;s a fit.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
