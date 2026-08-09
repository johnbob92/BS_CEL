import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LegalContent } from "@/components/LegalContent";
import { termsSections } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${site.name} website and services.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Terms of Service"
        description="Please read these terms carefully before using our website and services."
      />
      <LegalContent
        sections={termsSections}
        crossLinkHref="/company/about/privacy-policy"
        crossLinkLabel="Read our Privacy Policy"
      />
    </>
  );
}
