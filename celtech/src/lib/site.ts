export const site = {
  name: "CELTECH LLC",
  shortName: "CELTECH",
  domain: "celtech.com",
  url: "https://celtech.com",
  tagline: "Software consulting that ships.",
  description:
    "CELTECH LLC is a software consulting company that designs, builds, and scales reliable web, mobile, and cloud products for ambitious teams.",
  email: "hello@celtech.com",
  phone: "+1 (415) 555-0142",
  phoneHref: "tel:+14155550142",
  address: {
    line1: "535 Mission Street, Floor 14",
    line2: "San Francisco, CA 94105",
    // Used for the no-API-key Google Maps embed and the "Get directions" link.
    query: "535 Mission Street, San Francisco, CA 94105",
  },
  hours: "Mon–Fri · 9:00 AM – 6:00 PM PT",
  social: {
    linkedin: "https://www.linkedin.com/company/celtech",
    instagram: "https://www.instagram.com/celtech",
    facebook: "https://www.facebook.com/celtech",
    x: "https://x.com/celtech",
    github: "https://github.com/celtech",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
