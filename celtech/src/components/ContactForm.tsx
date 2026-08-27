"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

// Configure a free access key (https://web3forms.com) tied to the business
// inbox to actually deliver submissions — including the attached résumé — by
// email. Without it, the form falls back to opening the visitor's mail app.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const MAX_FILE_BYTES = 5 * 1024 * 1024;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [mailtoMode, setMailtoMode] = useState(false);

  function reset() {
    setStatus("idle");
    setError(null);
    setFileName(null);
    setMailtoMode(false);
    formRef.current?.reset();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const data = new FormData(form);

    const file = data.get("resume");
    if (file instanceof File && file.size > MAX_FILE_BYTES) {
      setError("Please attach a résumé under 5 MB.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError(null);

    // Preferred path: send everything (incl. the résumé file) by email.
    if (WEB3FORMS_KEY) {
      try {
        const res = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          body: data,
        });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.success !== false) {
          setStatus("success");
          form.reset();
          setFileName(null);
          return;
        }
        setError(json.message || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      } catch {
        setError(
          "We couldn't reach the mail service. Please email us directly at " +
            site.email +
            ".",
        );
        setStatus("error");
        return;
      }
    }

    // Fallback: open the visitor's email client with the details prefilled.
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone Number: ${get("phone")}`,
      `Budget: ${get("budget")}`,
      "",
      "About:",
      get("message"),
      "",
      file instanceof File && file.name
        ? `(Please attach your résumé "${file.name}" to this email.)`
        : "",
    ].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Website inquiry from " + (get("name") || "a visitor"),
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setMailtoMode(true);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-brandsoft p-10 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-heading">
          {mailtoMode ? "Almost there!" : "Thanks — we'll be in touch!"}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-body">
          {mailtoMode
            ? `Your email app should have opened with the details. Please attach your résumé and hit send — or email us at ${site.email}.`
            : "A member of our team will reply within one business day."}
        </p>
        <button type="button" onClick={reset} className="btn btn-ghost mt-6">
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      action={WEB3FORMS_KEY ? WEB3FORMS_ENDPOINT : undefined}
      method="POST"
      encType="multipart/form-data"
      className="grid gap-5"
    >
      {WEB3FORMS_KEY && (
        <>
          <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
          <input
            type="hidden"
            name="subject"
            value="New inquiry from the CELSTARTAB website"
          />
          <input type="hidden" name="from_name" value={site.name} />
        </>
      )}
      {/* Honeypot spam trap (kept off-screen) */}
      <input
        type="checkbox"
        name="botcheck"
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

      {/* Résumé / CV upload */}
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
              onChange={(e) =>
                setFileName(e.currentTarget.files?.[0]?.name ?? null)
              }
            />
          </label>
          <span className="truncate text-sm text-subtle">
            {fileName ?? "PDF, DOC, DOCX · up to 5 MB"}
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

      {status === "error" && error && (
        <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-500">
          {error}
        </p>
      )}

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
