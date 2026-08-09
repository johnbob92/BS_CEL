"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "auto" | "light" | "dark";
const STORAGE_KEY = "celtech-theme";
const order: Theme[] = ["auto", "light", "dark"];

function isNight() {
  const h = new Date().getHours();
  return h >= 19 || h < 7;
}

function resolveDark(theme: Theme) {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return isNight();
}

function apply(theme: Theme) {
  document.documentElement.classList.toggle("dark", resolveDark(theme));
  document.documentElement.dataset.theme = theme;
}

// Minimal external store so the toggle stays in sync without setState-in-effect.
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function getSnapshot(): Theme {
  try {
    return (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "auto";
  } catch {
    return "auto";
  }
}

function getServerSnapshot(): Theme {
  return "auto";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function cycle() {
    const next = order[(order.indexOf(theme) + 1) % order.length];
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    apply(next);
    listeners.forEach((l) => l());
  }

  const label =
    theme === "auto"
      ? "Theme: Auto (follows time of day)"
      : theme === "light"
        ? "Theme: Light"
        : "Theme: Dark";

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={label}
      title={label}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-card text-body transition-colors hover:text-brand-600 ${className}`}
    >
      <span className="sr-only">{label}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {theme === "auto" ? (
            <AutoIcon className="h-5 w-5" />
          ) : theme === "light" ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

function AutoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
