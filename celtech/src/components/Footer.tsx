import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "./icons";

const socials = [
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.x, label: "X", Icon: XIcon },
  { href: site.social.github, label: "GitHub", Icon: GitHubIcon },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-900/10 bg-slate-50">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
            {site.description}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.shortName} on ${label}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-600 transition-colors hover:text-brand-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-brand-600"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="transition-colors hover:text-brand-600"
              >
                {site.phone}
              </a>
            </li>
            <li className="pt-1">
              {site.address.line1}
              <br />
              {site.address.line2}
            </li>
            <li className="pt-1 text-slate-500">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Designed &amp; built in-house at {site.shortName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
