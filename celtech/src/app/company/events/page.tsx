import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Where to meet CELSTARTAB LLC — roundtables, webinars, and meetups for engineering leaders and technology professionals.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Where to meet CELSTARTAB"
        description="We host and attend gatherings for engineering leaders and technology professionals. Come say hello."
      />

      <section className="container-page py-16 md:py-20">
        <Reveal className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-soft)]">
          <div className="relative aspect-[16/6]">
            <Image
              src="/images/events.png"
              alt="A CELSTARTAB technology event"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="flex flex-col gap-4">
          {events.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.06}>
              <div className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center justify-center rounded-xl bg-brandsoft px-4 py-3 text-center text-brandsoft-text">
                    <span className="text-xs font-semibold uppercase">
                      {event.date.split(" ")[0]}
                    </span>
                    <span className="text-xl font-bold leading-none">
                      {event.date.split(" ")[1].replace(",", "")}
                    </span>
                  </div>
                  <div>
                    <span className="inline-flex rounded-full border border-line-strong bg-surface px-2.5 py-0.5 text-xs font-medium text-subtle">
                      {event.type} · {event.location}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-heading">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm text-body">
                      {event.description}
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn btn-ghost shrink-0 self-start sm:self-auto"
                >
                  Register <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
