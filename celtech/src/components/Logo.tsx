import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-hidden
      fill="none"
    >
      <defs>
        <linearGradient id="cs-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#06a3f5" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#cs-mark)" />
      <path
        d="M20 8.5c1.25 7.75 3.75 10.25 11.5 11.5-7.75 1.25-10.25 3.75-11.5 11.5-1.25-7.75-3.75-10.25-11.5-11.5 7.75-1.25 10.25-3.75 11.5-11.5Z"
        fill="#ffffff"
      />
      <circle cx="30" cy="10" r="2.1" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-8 w-8 transition-transform duration-300 group-hover:scale-105 md:h-9 md:w-9" />
      <span className="font-display text-lg font-bold tracking-tight md:text-xl">
        <span className="text-heading">CEL</span>
        <span className="text-brand-500">STAR</span>
        <span className="text-heading">TAB</span>
      </span>
    </Link>
  );
}
