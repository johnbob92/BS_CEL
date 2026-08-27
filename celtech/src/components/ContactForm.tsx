"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// FormSubmit (https://formsubmit.co) is a free, no-API-key relay that emails
// each submission — including the attached résumé — straight to the inbox.
// It requires a one-time activation: the first submission triggers a
// "Confirm your email" message to the address below; click it once and all
// future submissions (with attachments) are delivered.
//
// Override the endpoint with NEXT_PUBLIC_FORM_ENDPOINT (e.g. FormSubmit's
// random-alias URL) to keep the raw address out of the page source.
const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ??
  `https://formsubmit.co/${site.email}`;
// Optional absolute URL to return to after sending (FormSubmit `_next`).
const FORM_REDIRECT = process.env.NEXT_PUBLIC_FORM_REDIRECT;
const MAX_FILE_BYTES = 5 * 1024 * 1024;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const input = form.elements.namedItem("resume") as HTMLInputElement | null;
    const file = input?.files?.[0];
    if (file && file.size > MAX_FILE_BYTES) {
      e.preventDefault();
      setError("Please attach a résumé under 5 MB.");
      return;
    }
    setError(null);
    setSubmitting(true);
    // No preventDefault: the browser performs a native multipart POST to
    // FormSubmit so the résumé file is included and emailed as an attachment.
  }

  return (
    <form
      action={FORM_ENDPOINT}
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
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

      {/* Résumé / CV upload — no selected filename is displayed */}
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-heading">
          Résumé / CV{" "}
          <span className="font-normal text-subtle">
            (optional — attach when applying for a role)
          </span>
        </span>
        <div className="flex items-center gap-3 rounded-xl border border-dashed border-line-strong bg-surface px-4 py-3">
          <label className="btn btn-ghost cursor-pointer !py-2 !text-xs">
            Choose file
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx,.rtf,.txt"
              className="hidden"
            />
          </label>
          <span className="truncate text-sm text-subtle">
            PDF, DOC, DOCX · up to 5 MB
          </span>
        </div>
      </label>

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

      {error && (
        <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-500">
          {error}
        </p>
      )}

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
