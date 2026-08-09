"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Front-end demo submit. Wire this to your email/CRM endpoint
    // (e.g. a /api/contact route, Formspree, or HubSpot) in production.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    e.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-brandsoft p-10 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-heading">
          Thanks — we&apos;ll be in touch!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-body">
          A member of our team will reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-6"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" autoComplete="organization" />
        <Field
          label="Budget (optional)"
          name="budget"
          placeholder="e.g. $25k–$50k"
        />
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-heading">
          How can we help?
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, timeline, and goals."
          className="rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-heading outline-none transition-colors placeholder:text-subtle focus:border-brand-400 focus:ring-4 focus:ring-brand-500/20"
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-heading">
        {label}
        {required && <span className="text-brand-500"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-heading outline-none transition-colors placeholder:text-subtle focus:border-brand-400 focus:ring-4 focus:ring-brand-500/20"
      />
    </label>
  );
}
