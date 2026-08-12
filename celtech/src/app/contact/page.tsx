import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { MapEmbed } from "@/components/MapEmbed";
import { ContactForm } from "@/components/ContactForm";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Visit our office in Taos, NM, send a message, or connect with us on social media.`,
};

const socialIcons: Record<
  string,
  { label: string; Icon: typeof LinkedInIcon }
> = {
  linkedin: { label: "LinkedIn", Icon: LinkedInIcon },
  instagram: { label: "Instagram", Icon: InstagramIcon },
  facebook: { label: "Facebook", Icon: FacebookIcon },
  x: { label: "X", Icon: XIcon },
  github: { label: "GitHub", Icon: GitHubIcon },
};

const socials = Object.entries(site.social)
  .filter(([key]) => key in socialIcons)
  .map(([key, href]) => ({ href, ...socialIcons[key] }));

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation"
        description="Whether you're looking for exceptional talent or your next opportunity, tell us more and we'll get back to you within one business day."
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="flex flex-col gap-8">
            <div className="card p-8">
              <h2 className="text-lg font-semibold text-heading">
                Visit our office
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-subtle">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-brand-600 hover:text-brand-500"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-subtle">Phone</dt>
                  <dd>
                    <a
                      href={site.phoneHref}
                      className="font-medium text-brand-600 hover:text-brand-500"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-subtle">Hours</dt>
                  <dd className="font-medium text-heading">{site.hours}</dd>
                </div>
              </dl>

              {socials.length > 0 && (
                <div className="mt-6 flex gap-3 border-t border-line pt-6">
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
              )}
            </div>

            <MapEmbed className="flex-1" />
          </Reveal>

          <Reveal delay={0.1} className="card p-8">
            <h2 className="text-lg font-semibold text-heading">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-body">
              Prefer email? Reach us any time at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-brand-600 hover:text-brand-500"
              >
                {site.email}
              </a>
              .
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
