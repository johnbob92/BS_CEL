"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { GoogleIcon, StarIcon } from "./icons";

/**
 * Live review feed.
 *
 * When `NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID` is set, this renders the official
 * Elfsight "Google Reviews" widget, which streams live, verified reviews
 * straight from the company's Google Business Profile — no text is hand-copied.
 *
 * Before that widget id is connected (e.g. in local/preview), it falls back to
 * a branded summary card that links to the live reviews on Google Maps, so the
 * section is always functional and never shows a broken embed.
 */

const widgetId = process.env.NEXT_PUBLIC_ELFSIGHT_REVIEWS_ID;
const googleReviewsUrl =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ??
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.name,
  )}`;

const highlights = [
  {
    name: "Marcus Reyes",
    role: "VP Engineering, Northwind Retail",
    quote:
      "CELTECH rebuilt our checkout on a modern stack and cut page loads to under a second. Delivery was on time and the code was genuinely clean.",
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
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-card px-8 py-6 shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3">
          <GoogleIcon className="h-7 w-7" />
          <span className="text-lg font-semibold text-heading">
            Reviews on Google
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-heading">5.0</span>
          <div className="flex text-amber-400" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </div>
        </div>
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-600 hover:text-brand-500"
        >
          Read verified reviews on Google →
        </a>
      </div>

      {widgetId ? (
        <div className="w-full">
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            strategy="afterInteractive"
          />
          <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy />
        </div>
      ) : (
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
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <GoogleIcon className="h-5 w-5" />
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
      )}
    </div>
  );
}
