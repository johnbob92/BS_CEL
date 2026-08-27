"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, type NavItem } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  function closeMobile() {
    setOpen(false);
    setMobileSection(null);
  }

  return (
    // Background is always present (not scroll-dependent) so page content never
    // shows through the bar — this also works in the no-JS static build.
    <header className="sticky top-0 z-50 border-b border-line bg-[var(--nav-bg)] shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <DesktopNavItem key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary">
            Start a project
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong text-heading"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-surface lg:hidden"
          >
            <nav className="container-page flex max-h-[70vh] flex-col gap-1 overflow-y-auto py-4">
              {nav.map((item) =>
                item.children ? (
                  <div key={item.href} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection((s) =>
                          s === item.href ? null : item.href,
                        )
                      }
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-heading hover:bg-brandsoft"
                    >
                      {item.label}
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 transition-transform ${mobileSection === item.href ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileSection === item.href && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 flex flex-col gap-0.5 border-l border-line pl-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMobile}
                                className="rounded-lg px-3 py-2 text-sm text-body hover:bg-brandsoft hover:text-brandsoft-text"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    className="rounded-xl px-4 py-3 text-base font-medium text-heading hover:bg-brandsoft"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Link
                href="/contact"
                onClick={closeMobile}
                className="btn btn-primary mt-2 w-full"
              >
                Start a project
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DesktopNavItem({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const active = isActive(pathname, item.href);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
          active
            ? "bg-brandsoft text-brand-600"
            : "text-body hover:text-heading"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  // CSS-only dropdown (hover + keyboard focus) so it also works without JS.
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className={`relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
          active
            ? "bg-brandsoft text-brand-600"
            : "text-body hover:text-heading"
        }`}
      >
        {item.label}
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Link>

      <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-[var(--shadow-lift)]">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-xl px-4 py-3 transition-colors hover:bg-brandsoft"
            >
              <span className="block text-sm font-semibold text-heading">
                {child.label}
              </span>
              {child.description && (
                <span className="mt-0.5 block text-xs text-subtle">
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
