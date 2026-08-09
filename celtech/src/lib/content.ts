export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    summary:
      "End-to-end web and mobile product development, from architecture to launch and beyond.",
    points: ["React & Next.js", "React Native & iOS/Android", "Design systems"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    summary:
      "Resilient, cost-efficient infrastructure with automated delivery pipelines you can trust.",
    points: ["AWS / GCP / Azure", "Kubernetes & IaC", "CI/CD automation"],
  },
  {
    slug: "data-ai",
    title: "Data & AI",
    summary:
      "Turn raw data into products — analytics platforms, pipelines, and applied machine learning.",
    points: ["Data platforms", "LLM & ML integration", "Dashboards & BI"],
  },
  {
    slug: "consulting",
    title: "Technical Consulting",
    summary:
      "Fractional CTO guidance, architecture reviews, and pragmatic roadmaps for scaling teams.",
    points: ["Architecture review", "Team augmentation", "Roadmapping"],
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  image: string;
  summary: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "analytics-dashboard",
    title: "Real-time Analytics Platform",
    client: "Northwind Retail",
    category: "Data & AI",
    image: "/images/project_dashboard.png",
    summary:
      "A unified analytics workspace consolidating sales, inventory, and marketing signals into one live dashboard.",
    result: "Reporting time cut from days to seconds across 30+ stores.",
  },
  {
    slug: "mobile-banking",
    title: "Mobile Banking App",
    client: "Loop Financial",
    category: "Product Engineering",
    image: "/images/project_mobile.png",
    summary:
      "A secure, delightful mobile banking experience with instant transfers and biometric login.",
    result: "4.8★ App Store rating within the first quarter of launch.",
  },
  {
    slug: "commerce-platform",
    title: "Headless Commerce Platform",
    client: "Cascade Goods",
    category: "Cloud & DevOps",
    image: "/images/project_ecommerce.png",
    summary:
      "A rebuilt, headless storefront on a scalable cloud backend with sub-second page loads.",
    result: "38% lift in conversion and 3× faster load times.",
  },
];

export const team = [
  {
    name: "Connor Ellison",
    role: "Founder & CEO",
    image: "/images/team_ceo.png",
    bio: "Two decades building and scaling engineering teams. Connor leads strategy and client partnerships.",
  },
  {
    name: "Sofia Marchetti",
    role: "Co-founder & CTO",
    image: "/images/team_cto.png",
    bio: "Cloud and platform architect who keeps our systems fast, secure, and boringly reliable.",
  },
  {
    name: "Andre Bassett",
    role: "Head of Engineering",
    image: "/images/team_lead.png",
    bio: "Full-stack lead obsessed with clean code, testing, and shipping on schedule.",
  },
  {
    name: "Mei Tanaka",
    role: "Head of Design",
    image: "/images/team_design.png",
    bio: "Product designer crafting the bright, accessible interfaces our clients are known for.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    body: "We dig into your goals, users, and constraints to define a sharp, measurable scope.",
  },
  {
    n: "02",
    title: "Design",
    body: "Clickable prototypes and a technical architecture you can review before a line of code ships.",
  },
  {
    n: "03",
    title: "Build",
    body: "Weekly releases, transparent tracking, and rigorous automated testing at every step.",
  },
  {
    n: "04",
    title: "Scale",
    body: "We harden, monitor, and optimize — then stay on as a long-term engineering partner.",
  },
];
