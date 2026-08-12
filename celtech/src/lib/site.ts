export const site = {
  name: "CELSTARTAB LLC",
  shortName: "CELSTARTAB",
  domain: "celtech.com",
  url: "https://celtech.com",
  tagline: "The bridge between technical excellence and business innovation",
  description:
    "CELSTARTAB LLC connects outstanding technology professionals with organizations building the future — helping companies access the engineering expertise they need and helping professionals grow meaningful careers.",
  owner: "Celeste Estelle Rex",
  email: "rexceleste04@outlook.com",
  phone: "+1 (830) 851-5152",
  phoneHref: "tel:+18308515152",
  address: {
    line1: "2030 Tanner Ln",
    line2: "Billings, MT 59102, USA",
    query: "2030 Tanner Ln, Billings, MT 59102",
  },
  hours: "Mon–Fri · 9:00 AM – 6:00 PM MT",
  summary:
    "CELSTARTAB LLC is a software consulting company that connects outstanding technology professionals with organizations building the future. We help companies access engineering excellence and help professionals grow meaningful careers.",
  // No public social profiles are verified for this business yet.
  // Add real profile URLs here (e.g. linkedin) to show social links again.
  social: {} as Record<string, string>,
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string; description?: string }[];
};

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services",
        label: "All Services",
        description: "Explore the full range of CELSTARTAB expertise.",
      },
      {
        href: "/services/cloud-development",
        label: "Cloud Development",
        description: "Migration, optimization, and resilient infrastructure.",
      },
      {
        href: "/services/software-engineering",
        label: "Software Engineering",
        description: "Full-stack product, platform, and API engineering.",
      },
      {
        href: "/services/legacy-modernization",
        label: "Legacy Modernization",
        description: "Re-platform and refactor without the risk.",
      },
      {
        href: "/services/data-ai",
        label: "Data & AI",
        description: "Data platforms and applied machine learning.",
      },
      {
        href: "/services/devops-sre",
        label: "DevOps & SRE",
        description: "Automation, observability, and reliability.",
      },
    ],
  },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  {
    href: "/company",
    label: "Company",
    children: [
      {
        href: "/company/about",
        label: "About Us",
        description: "Our story, vision, and mission.",
      },
      {
        href: "/company/how-we-work",
        label: "How We Work",
        description: "The CELSTARTAB partnership model.",
      },
      {
        href: "/company/careers",
        label: "Careers",
        description: "Find your next opportunity.",
      },
      {
        href: "/company/insights",
        label: "Insights",
        description: "Ideas from our team.",
      },
      {
        href: "/company/events",
        label: "Events",
        description: "Where to meet CELSTARTAB.",
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];
