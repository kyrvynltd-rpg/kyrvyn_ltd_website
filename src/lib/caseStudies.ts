export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  services: string[];
  stack: string[];
  outcomes: string[];
  problem: string;
  solution: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-web-platform-modernization",
    title: "Enterprise Web Platform Modernization",
    subtitle: "Performance, accessibility, and UX uplift for a complex web application.",
    industry: "Enterprise SaaS",
    services: ["Bespoke Website Development", "Performance Improvements", "UX Upgrades"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "CI Quality Gates"],
    outcomes: [
      "Improved Lighthouse scores through performance budgets and image optimization",
      "Reduced UI friction with clearer navigation and conversion paths",
      "Established a reusable design system for long-term consistency",
    ],
    problem:
      "The existing UI lacked consistent patterns, had performance bottlenecks, and did not provide clear user journeys to key actions.",
    solution:
      "Implemented a component-driven design system, standardized layout and typography, and introduced measurable quality gates across the delivery pipeline.",
  },
  {
    slug: "blockchain-protocol-integration-showcase",
    title: "Blockchain Protocol Integration Showcase",
    subtitle: "A trust-building demo experience focused on reliability and safety.",
    industry: "Blockchain",
    services: [
      "Custom Integrations",
      "Blockchain Solutions",
      "Technical Consulting & Architecture",
    ],
    stack: ["React", "TypeScript", "API Design", "Observability"],
    outcomes: [
      "Clear demo flows with robust error states and security-first constraints",
      "Documentation-first integration approach for enterprise stakeholders",
      "Foundation for wallet connection and testnet-only workflows",
    ],
    problem:
      "Stakeholders needed a credible, low-risk way to understand the integration surface and operational constraints before committing to delivery.",
    solution:
      "Designed a demo-first narrative, focusing on safety, traceability, and clarity, enabling technical evaluation without exposing sensitive operations.",
  },
  {
    slug: "content-and-research-publishing-pipeline",
    title: "Content & Research Publishing Pipeline",
    subtitle: "Structured publishing with Sanity CMS and Next.js for rapid iteration.",
    industry: "Media / Research",
    services: [
      "Technical Consulting & Architecture",
      "Custom Development",
      "Platform Modernisation",
    ],
    stack: ["Sanity", "next-sanity", "GROQ", "Next.js App Router"],
    outcomes: [
      "Fast authoring workflow via Studio at /admin",
      "Incremental revalidation for reliable content freshness",
      "Improved readability and structure for long-form technical writing",
    ],
    problem:
      "The site required a maintainable approach to publish technical posts while keeping rendering fast and stable.",
    solution:
      "Integrated a CMS-backed workflow with predictable schema definitions and rendering components designed for performance and clarity.",
  },
];
