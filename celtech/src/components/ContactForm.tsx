"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// FormSubmit (https://formsubmit.co) is a free, no-API-key relay that emails
// each submission straight to the inbox. It requires a one-time activation:
// the first submission triggers a "Confirm your email" message to the address
// below; click it once and all future submissions are delivered.
//
// Override the endpoint with NEXT_PUBLIC_FORM_ENDPOINT (e.g. FormSubmit's
// random-alias URL) to keep the raw address out of the page source.
const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ??
  `https://formsubmit.co/${site.email}`;
// Optional absolute URL to return to after sending (FormSubmit `_next`).
const FORM_REDIRECT = process.env.NEXT_PUBLIC_FORM_REDIRECT;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={() => setSubmitting(true)}
      className="grid gap-5"
    >
      <input
        type="hidden"
        name="_subject"
        value="New inquiry from the CELSTARTAB website"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {FORM_REDIRECT && (
        <input type="hidden" name="_next" value={FORM_REDIRECT} />
      )}
      {/* Honeypot spam trap (bots fill it; FormSubmit then drops the message) */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

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
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
        />
        <Field
          label="Budget (optional)"
          name="budget"
          placeholder="e.g. $25k–$50k"
        />
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-heading">
          Tell me about yourself<span className="text-brand-500"> *</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Share your background, the role or project you're interested in, and how we can help."
          className="rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-heading outline-none transition-colors placeholder:text-subtle focus:border-brand-400 focus:ring-4 focus:ring-brand-500/20"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Send message"}
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
