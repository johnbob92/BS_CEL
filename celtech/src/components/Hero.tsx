"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { ArrowRightIcon } from "./icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)]" />
        <div className="animate-aurora absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="animate-aurora absolute right-0 top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-card/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brandsoft-text backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Technology talent &amp; consulting
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-extrabold leading-[1.05] text-heading sm:text-5xl lg:text-6xl"
          >
            We connect exceptional technology talent with companies{" "}
            <span className="text-gradient">building the future</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-body"
          >
            {site.name} is the bridge between technical excellence and business
            innovation — giving organizations access to the engineers, cloud
            specialists, and architects they need, and helping professionals
            grow meaningful careers.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Find talent <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/company/careers" className="btn btn-ghost">
              Explore careers
            </Link>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { k: "500+", v: "Vetted professionals" },
              { k: "40+", v: "Client partners" },
              { k: "4.9★", v: "Avg. rating" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-bold text-heading">{s.k}</dt>
                <dd className="text-xs text-subtle">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-lift)]">
            <Image
              src="/images/hero_team.png"
              alt="CELTech technology professionals collaborating in a bright modern office"
              width={1280}
              height={720}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-line bg-card/90 p-4 shadow-[var(--shadow-soft)] backdrop-blur sm:block"
          >
            <p className="text-xs font-medium text-subtle">Avg. time to match</p>
            <p className="text-lg font-bold text-heading">10 days</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -right-4 -top-6 hidden rounded-2xl border border-line bg-card/90 p-4 shadow-[var(--shadow-soft)] backdrop-blur sm:block"
          >
            <p className="text-xs font-medium text-subtle">Engagement retention</p>
            <p className="text-lg font-bold text-heading">96%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
