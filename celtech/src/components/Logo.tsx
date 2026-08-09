import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-hidden
      fill="none"
    >
      <defs>
        <linearGradient id="celtech-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="1" stopColor="#06a3f5" />
        </linearGradient>
      </defs>
      <path
        d="M40 15a15 15 0 1 0 0 18"
        stroke="url(#celtech-mark)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <g stroke="url(#celtech-mark)" strokeWidth="3" strokeLinecap="round">
        <line x1="6" y1="17" x2="21" y2="17" />
        <line x1="6" y1="24" x2="24" y2="24" />
        <line x1="6" y1="31" x2="21" y2="31" />
      </g>
      <g fill="#06a3f5">
        <circle cx="6" cy="17" r="3" />
        <circle cx="6" cy="24" r="3" />
        <circle cx="6" cy="31" r="3" />
      </g>
    </svg>
  );
}

export function Logo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-8 w-8 transition-transform duration-300 group-hover:scale-105 md:h-9 md:w-9" />
      <span className="font-display text-xl font-extrabold tracking-tight md:text-2xl">
        <span className="text-heading">CEL</span>
        <span className="text-brand-500">TECH</span>
      </span>
    </Link>
  );
}
