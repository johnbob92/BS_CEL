import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  XIcon,
} from "./icons";

const socials = [
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.x, label: "X", Icon: XIcon },
  { href: site.social.github, label: "GitHub", Icon: GitHubIcon },
];

const columns = [
  {
    heading: "Services",
    links: [
      { href: "/services", label: "All Services" },
      { href: "/services/cloud-development", label: "Cloud Development" },
      { href: "/services/software-engineering", label: "Software Engineering" },
      { href: "/services/legacy-modernization", label: "Legacy Modernization" },
      { href: "/services/data-ai", label: "Data & AI" },
      { href: "/services/devops-sre", label: "DevOps & SRE" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/company/about", label: "About Us" },
      { href: "/company/how-we-work", label: "How We Work" },
      { href: "/company/careers", label: "Careers" },
      { href: "/company/insights", label: "Insights" },
      { href: "/company/events", label: "Events" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { href: "/industries", label: "Industries" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface-2">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
            {site.summary}
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 text-body transition-colors hover:text-brand-600"
              >
                <MailIcon className="h-4 w-4 text-brand-500" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 text-body transition-colors hover:text-brand-600"
              >
                <PhoneIcon className="h-4 w-4 text-brand-500" />
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3 text-body">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.shortName} on ${label}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-card text-body transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="text-sm font-semibold text-heading">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-subtle sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <nav className="flex items-center gap-5">
            <Link
              href="/company/about/terms-of-service"
              className="transition-colors hover:text-brand-600"
            >
              Terms of Service
            </Link>
            <Link
              href="/company/about/privacy-policy"
              className="transition-colors hover:text-brand-600"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
