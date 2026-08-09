export const site = {
  name: "CELTech LLC",
  shortName: "CELTech",
  domain: "celtech.com",
  url: "https://celtech.com",
  tagline: "The bridge between technical excellence and business innovation",
  description:
    "CELTech LLC connects outstanding technology professionals with organizations building the future — helping companies access the engineering expertise they need and helping professionals grow meaningful careers.",
  email: "admin@celtech.com",
  phone: "+1 (505) 234-2345",
  phoneHref: "tel:+15052342345",
  address: {
    line1: "Treetop Ln",
    line2: "Taos, NM 87571, USA",
    query: "Treetop Ln, Taos, NM 87571",
  },
  hours: "Mon–Fri · 9:00 AM – 6:00 PM MT",
  summary:
    "CELTech LLC is a software consulting company that connects outstanding technology professionals with organizations building the future. We help companies access engineering excellence and help professionals grow meaningful careers.",
  social: {
    linkedin: "https://www.linkedin.com/company/celtech",
    instagram: "https://www.instagram.com/celtech",
    facebook: "https://www.facebook.com/celtech",
    x: "https://x.com/celtech",
    github: "https://github.com/celtech",
  },
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
        description: "Explore the full range of CELTech expertise.",
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
        description: "The CELTech partnership model.",
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
        description: "Where to meet CELTech.",
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];
