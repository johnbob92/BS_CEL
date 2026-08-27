"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { StarIcon } from "./icons";

/**
 * Client testimonials.
 *
 * When `NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID` is set, this renders the official
 * Elfsight reviews widget, which streams live, verified reviews from a
 * connected profile (e.g. a Google Business Profile) — no text is hand-copied.
 *
 * Until a real review profile exists, we show individual client testimonials
 * rather than a fabricated aggregate score. No "verified on Google" badge is
 * shown while there is no live Google listing to link to.
 */

const widgetId = process.env.NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID;

const highlights = [
  {
    name: "Marcus Reyes",
    role: "VP Engineering, Northwind Retail",
    quote:
      "CELSTARTAB rebuilt our checkout on a modern stack and cut page loads to under a second. Delivery was on time and the code was genuinely clean.",
  },
  {
    name: "Priya Nadar",
    role: "Founder, Loop Health",
    quote:
      "They embedded with our team, shipped our HIPAA-ready platform, and stayed hands-on through launch. Easily our most reliable partner.",
  },
  {
    name: "Daniel Whitfield",
    role: "COO, Cascade Logistics",
    quote:
      "From discovery to a live dashboard in a matter of sprints. Sharp communicators who care about the metrics that move the business.",
  },
];

export function Reviews() {
  if (widgetId) {
    return (
      <div className="w-full">
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
        />
        <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy />
      </div>
    );
  }

  return (
    <div className="grid w-full gap-6 md:grid-cols-3">
      {highlights.map((r, i) => (
        <motion.figure
          key={r.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="card flex h-full flex-col p-6"
        >
          <div className="flex text-amber-400" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, s) => (
              <StarIcon key={s} className="h-4 w-4" />
            ))}
          </div>
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-body">
            “{r.quote}”
          </blockquote>
          <figcaption className="mt-5 border-t border-line pt-4">
            <p className="text-sm font-semibold text-heading">{r.name}</p>
            <p className="text-xs text-subtle">{r.role}</p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
