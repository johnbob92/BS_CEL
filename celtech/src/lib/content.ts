/* ---------------------------------------------------------------- Services */

export type Strategy = { name: string; body: string };

export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  image: string;
  expertiseLabel: string;
  capabilities: string[];
  strategies: Strategy[];
};

export const servicesDetail: ServiceDetail[] = [
  {
    slug: "cloud-development",
    title: "Cloud Development",
    tagline: "Build, migrate, and scale with confidence in the cloud.",
    intro:
      "We connect you with cloud engineers and architects who help you move to the cloud, optimize what you already run, and build a foundation that scales with your ambitions.",
    image: "/images/project_ecommerce.png",
    expertiseLabel: "Our cloud expertise",
    capabilities: [
      "AWS, Azure & Google Cloud",
      "Kubernetes & containers",
      "Infrastructure as Code",
      "Cloud-native architecture",
    ],
    strategies: [
      {
        name: "Migration & modernization",
        body: "To achieve transformative outcomes, you need a future-forward approach to cloud migration and modernization. That means not only shifting workloads to the cloud and updating your applications, but also upskilling and empowering your teams to thrive in the new environment.",
      },
      {
        name: "Optimization",
        body: "Public cloud is on track to make up a growing share of enterprise IT spending — so how do you make sure you spend it wisely? Our experts help you eliminate redundancies, make the most of automation, and maximize the return on your cloud investment.",
      },
      {
        name: "Infrastructure",
        body: "Infrastructure is the foundation of every modern organization. Today, key priorities include privacy, governance, security, and resiliency. We help you craft a resilient, secure infrastructure that positions your organization to embrace the ever-changing possibilities of building in the cloud.",
      },
    ],
  },
  {
    slug: "software-engineering",
    title: "Software Engineering",
    tagline: "Ship dependable products with engineers who care about craft.",
    intro:
      "From the first prototype to production at scale, we match you with full-stack engineers who design, build, and maintain software your business can rely on.",
    image: "/images/project_dashboard.png",
    expertiseLabel: "Our engineering expertise",
    capabilities: [
      "React, Next.js & TypeScript",
      "Node, Python, Go & Java",
      "Mobile (iOS, Android, RN)",
      "APIs & microservices",
    ],
    strategies: [
      {
        name: "Product engineering",
        body: "Great products come from teams that understand both the user and the business. We embed engineers who move fast without cutting corners — validating ideas, shipping in small increments, and turning your roadmap into working software.",
      },
      {
        name: "Platform & APIs",
        body: "As you grow, the interfaces between your systems matter as much as the systems themselves. We design clean, well-documented APIs and internal platforms that let every team build faster on a stable, shared foundation.",
      },
      {
        name: "Quality & reliability",
        body: "Speed only matters if it lasts. Our engineers bake in automated testing, code review, and observability from day one, so the software they deliver stays fast, secure, and maintainable long after launch.",
      },
    ],
  },
  {
    slug: "legacy-modernization",
    title: "Legacy Modernization",
    tagline: "Evolve critical systems without betting the business.",
    intro:
      "Aging systems slow you down and add risk. We provide specialists who modernize the software that runs your business — safely, incrementally, and with your team fully on board.",
    image: "/images/project_mobile.png",
    expertiseLabel: "Our modernization expertise",
    capabilities: [
      "Monolith to microservices",
      "Re-platforming & re-hosting",
      "Data migration",
      "Automated test coverage",
    ],
    strategies: [
      {
        name: "Assessment & strategy",
        body: "Modernization starts with clarity. We assess your existing systems, dependencies, and business risks to produce a pragmatic roadmap that sequences the work by value — not by what's easiest to touch first.",
      },
      {
        name: "Re-platforming & refactoring",
        body: "We move workloads onto modern platforms and refactor the code that matters most, preserving the domain knowledge locked inside your systems while shedding the constraints that hold you back.",
      },
      {
        name: "Incremental delivery",
        body: "Big-bang rewrites fail. We modernize behind the scenes in safe, reversible steps — keeping your systems running and your users unaffected while the foundation is rebuilt beneath them.",
      },
    ],
  },
  {
    slug: "data-ai",
    title: "Data & AI",
    tagline: "Turn raw data into products, decisions, and advantage.",
    intro:
      "We connect you with data engineers and AI specialists who build the pipelines, platforms, and models that turn your data into a genuine competitive edge.",
    image: "/images/project_dashboard.png",
    expertiseLabel: "Our data & AI expertise",
    capabilities: [
      "Data platforms & pipelines",
      "LLM & ML integration",
      "Analytics & BI",
      "MLOps",
    ],
    strategies: [
      {
        name: "Data foundations",
        body: "Every insight rests on trustworthy data. We help you build modern data platforms and pipelines — governed, reliable, and ready to power analytics and AI across the organization.",
      },
      {
        name: "Applied AI & ML",
        body: "AI creates value when it's grounded in real problems. Our specialists integrate machine learning and large language models where they measurably improve outcomes, with the guardrails to keep them safe and dependable.",
      },
      {
        name: "Insight & activation",
        body: "Data is only useful when it reaches the people and systems that act on it. We deliver dashboards, APIs, and automations that put the right information in the right hands at the right moment.",
      },
    ],
  },
  {
    slug: "devops-sre",
    title: "DevOps & SRE",
    tagline: "Automate delivery and keep production calm.",
    intro:
      "We provide DevOps and Site Reliability Engineers who make shipping software routine and keep your systems fast, observable, and resilient under load.",
    image: "/images/project_ecommerce.png",
    expertiseLabel: "Our reliability expertise",
    capabilities: [
      "CI/CD pipelines",
      "Observability & monitoring",
      "Incident response",
      "Platform engineering",
    ],
    strategies: [
      {
        name: "CI/CD automation",
        body: "Manual releases are slow and risky. We build automated pipelines that test, package, and deploy your software safely — so your teams ship more often, with more confidence and less stress.",
      },
      {
        name: "Observability & reliability",
        body: "You can't fix what you can't see. We instrument your systems with meaningful metrics, logs, and traces, then set clear SLOs so reliability becomes a measurable, managed part of how you operate.",
      },
      {
        name: "Platform engineering",
        body: "The best way to scale delivery is to make the right path the easy path. We build internal platforms and golden paths that let product teams self-serve infrastructure without reinventing it every time.",
      },
    ],
  },
];

/* -------------------------------------------------------------- Industries */

export type Industry = {
  name: string;
  blurb: string;
};

export const industries: Industry[] = [
  {
    name: "Financial Services",
    blurb:
      "Secure, compliant platforms for banks, fintechs, and insurers moving money and trust at scale.",
  },
  {
    name: "Healthcare & Life Sciences",
    blurb:
      "HIPAA-ready systems and data platforms that help care teams and researchers move faster.",
  },
  {
    name: "Retail & Consumer",
    blurb:
      "Commerce, supply chain, and customer experiences engineered for peak-season scale.",
  },
  {
    name: "Technology & Software",
    blurb:
      "Extra engineering firepower for product companies shipping ambitious roadmaps.",
  },
  {
    name: "Energy & Utilities",
    blurb:
      "Resilient, data-driven systems for a sector managing critical infrastructure.",
  },
  {
    name: "Public Sector",
    blurb:
      "Modern, accessible, and dependable digital services for the organizations that serve communities.",
  },
];

/* -------------------------------------------------------------- Case studies */

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
      "We placed a data engineering pod that unified sales, inventory, and marketing signals into one live dashboard.",
    result: "Reporting time cut from days to seconds across 30+ stores.",
  },
  {
    slug: "mobile-banking",
    title: "Mobile Banking App",
    client: "Loop Financial",
    category: "Software Engineering",
    image: "/images/project_mobile.png",
    summary:
      "A cross-functional team delivered a secure, delightful mobile banking experience with instant transfers and biometric login.",
    result: "4.8★ App Store rating within the first quarter of launch.",
  },
  {
    slug: "commerce-platform",
    title: "Headless Commerce Platform",
    client: "Cascade Goods",
    category: "Cloud Development",
    image: "/images/project_ecommerce.png",
    summary:
      "Cloud engineers re-platformed a legacy storefront onto a scalable, headless architecture with sub-second page loads.",
    result: "38% lift in conversion and 3× faster load times.",
  },
];

/* --------------------------------------------------------------------- Team */

export const team = [
  {
    name: "Connor Ellison",
    role: "Founder & CEO",
    image: "/images/person_ceo.png",
    bio: "Two decades connecting engineering talent with the companies that need it. Connor leads strategy and client partnerships.",
  },
  {
    name: "Sofia Marchetti",
    role: "Co-founder & CTO",
    image: "/images/person_cto.png",
    bio: "Cloud and platform architect who sets the technical bar every professional we place is measured against.",
  },
  {
    name: "Andre Bassett",
    role: "Head of Engineering",
    image: "/images/person_eng.png",
    bio: "Full-stack leader focused on code quality, delivery, and mentoring the engineers in our network.",
  },
  {
    name: "Mei Tanaka",
    role: "Head of Talent",
    image: "/images/person_talent.png",
    bio: "Leads how we find, evaluate, and match professionals — obsessed with fit over volume.",
  },
  {
    name: "Raj Patel",
    role: "Head of Cloud",
    image: "/images/person_cloud.png",
    bio: "Guides cloud migration and reliability engagements from strategy through steady-state operations.",
  },
  {
    name: "Elena Vasquez",
    role: "Delivery Director",
    image: "/images/person_delivery.png",
    bio: "Keeps engagements on track and relationships healthy, from kickoff to long-term partnership.",
  },
];

/* ------------------------------------------------------------------- Process */

export const processSteps = [
  {
    n: "01",
    title: "Understand",
    body: "We take the time to learn your technical needs, business objectives, and engineering culture.",
  },
  {
    n: "02",
    title: "Match",
    body: "We identify professionals whose skills, experience, and goals align with your requirements — quality over quantity.",
  },
  {
    n: "03",
    title: "Deliver",
    body: "Your new team members contribute from day one, with our support to keep momentum high.",
  },
  {
    n: "04",
    title: "Grow",
    body: "We nurture long-term partnerships built on trust, transparency, and shared success.",
  },
];

/* --------------------------------------------------- Company / value content */

export const differentiators = [
  {
    title: "Technology expertise first",
    body: "We understand technology. We evaluate professionals on real-world engineering experience, technical capability, and their ability to contribute to business outcomes.",
  },
  {
    title: "Strategic talent matching",
    body: "We focus on finding the right fit — matching expertise, experience, and goals to create successful long-term partnerships.",
  },
  {
    title: "Quality-driven approach",
    body: "We prioritize quality over quantity, connecting organizations with professionals who make an immediate and lasting impact.",
  },
  {
    title: "Partnership mindset",
    body: "We work closely with companies and professionals alike to build relationships rooted in trust, transparency, and shared success.",
  },
];

export const forCompanies = [
  "Build high-performing technology teams",
  "Access specialized technical expertise",
  "Accelerate software development initiatives",
  "Solve complex engineering challenges",
  "Drive digital transformation",
];

export const forProfessionals = [
  "Discover opportunities aligned with your skills",
  "Work with innovative companies",
  "Apply your expertise to meaningful projects",
  "Advance your technology career",
];

export const techFocus: { area: string; items: string[] }[] = [
  {
    area: "Software Engineering",
    items: [
      "Backend Development",
      "Full-Stack Engineering",
      "Frontend Development",
      "API & Microservices",
      "Enterprise Applications",
    ],
  },
  {
    area: "Cloud & Infrastructure",
    items: [
      "Cloud Engineering",
      "DevOps",
      "Site Reliability Engineering",
      "Platform Engineering",
      "Cloud Architecture",
    ],
  },
  {
    area: "Modern Technology",
    items: [
      "Artificial Intelligence & ML",
      "Data Engineering",
      "Automation",
      "Application Modernization",
      "Digital Transformation",
    ],
  },
];

/* --------------------------------------------------------- Careers / Insights */

export const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Remote (US)",
    type: "Full-time",
    focus: "React · Node · TypeScript",
  },
  {
    title: "Cloud Solutions Architect",
    location: "San Francisco, CA",
    type: "Full-time",
    focus: "AWS · Kubernetes · IaC",
  },
  {
    title: "Site Reliability Engineer",
    location: "Remote (US)",
    type: "Full-time",
    focus: "Observability · CI/CD",
  },
  {
    title: "Data Engineer",
    location: "Remote (US)",
    type: "Contract",
    focus: "Pipelines · dbt · Spark",
  },
  {
    title: "Technical Recruiter",
    location: "San Francisco, CA",
    type: "Full-time",
    focus: "Engineering hiring",
  },
];

export const insights = [
  {
    title: "How to actually assess senior engineering talent",
    category: "Talent",
    read: "6 min read",
    excerpt:
      "Resumes and take-homes only tell part of the story. Here's the evaluation framework our team uses to gauge real-world impact.",
  },
  {
    title: "A pragmatic path to cloud cost optimization",
    category: "Cloud",
    read: "8 min read",
    excerpt:
      "Cloud bills creep up quietly. These are the levers that deliver the biggest savings without slowing your teams down.",
  },
  {
    title: "Modernizing legacy systems without the big-bang rewrite",
    category: "Modernization",
    read: "7 min read",
    excerpt:
      "The strangler-fig pattern, done well, lets you evolve critical systems while keeping the lights on. Here's how we approach it.",
  },
  {
    title: "Where AI genuinely moves the needle for engineering teams",
    category: "Data & AI",
    read: "5 min read",
    excerpt:
      "Beyond the hype, a handful of applications consistently pay off. We break down where to start and what to avoid.",
  },
];

export const events = [
  {
    title: "CELTech Cloud Roundtable",
    date: "Sep 18, 2026",
    location: "San Francisco, CA",
    type: "In person",
    description:
      "An intimate evening with engineering leaders on scaling cloud teams and controlling spend.",
  },
  {
    title: "Hiring Great Engineers — Webinar",
    date: "Oct 2, 2026",
    location: "Online",
    type: "Virtual",
    description:
      "Our Head of Talent shares the interview framework we use to evaluate senior technical hires.",
  },
  {
    title: "AI in Production Meetup",
    date: "Oct 21, 2026",
    location: "San Francisco, CA",
    type: "In person",
    description:
      "Practitioners share real stories of shipping and operating AI features at scale.",
  },
];
