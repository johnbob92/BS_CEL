import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LegalContent } from "@/components/LegalContent";
import { privacySections } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Privacy Policy"
        description="How we collect, use, and protect your information when you use our services."
      />
      <LegalContent
        sections={privacySections}
        crossLinkHref="/company/about/terms-of-service"
        crossLinkLabel="Read our Terms of Service"
      />
    </>
  );
}
