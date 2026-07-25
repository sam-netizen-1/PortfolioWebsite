import type { CommandModule, Experience, Metric, Profile, Project, RecommendationTheme, SkillGroup, SocialProof } from "../types/portfolio";

export const profile: Profile = {
  name: "Samkit Kothari",
  role: "Senior Frontend Engineer",
  headline:
    "I build high-performance ecommerce platforms, personalization systems, and AI-assisted content workflows that turn frontend engineering into measurable business impact.",
  location: "Pune/Pimpri-Chinchwad Area, India",
  email: "kotharisamkeet@gmail.com",
  secondaryEmail: "snkothari15@gmail.com",
  phone: "8669129605",
  linkedin: "https://www.linkedin.com/in/samkit-kothari-84b5131b4",
  github: "https://github.com/sam-netizen-1",
  resume: "/samkit-kothari-sse-resume.pdf"
};

export const commandModules: CommandModule[] = [
  { label: "React", detail: "UI systems", color: "#58d7cf" },
  { label: "Astro", detail: "islands", color: "#f2b84b" },
  { label: "Next.js", detail: "commerce apps", color: "#ffffff" },
  { label: "Personalization", detail: "targeted content", color: "#ff6bb5" },
  { label: "AI", detail: "content engine", color: "#8be28c" },
  { label: "Performance", detail: "TTFB / TTI", color: "#f97316" },
  { label: "Analytics", detail: "RUM + GTM", color: "#a78bfa" }
];

export const metrics: Metric[] = [
  { value: "4+", label: "years frontend engineering", icon: "gauge" },
  { value: "10+", label: "beauty and luxury sites migrated", icon: "globe" },
  { value: "2x", label: "personalized campaign ad revenue", icon: "chart" },
  { value: "80%", label: "content production time reduced", icon: "sparkles" },
  { value: "29+", label: "localized Hydrafacial languages", icon: "map" }
];

export const socialProof: SocialProof[] = [
  {
    value: "2.2K+",
    label: "LinkedIn followers",
    detail: "A professional audience connected to my frontend engineering, ecommerce, AI tooling, and career-growth work.",
    icon: "linkedin"
  },
  {
    value: "500+",
    label: "connections",
    detail: "A network spanning engineering, ecommerce, product, design, data, and delivery communities.",
    icon: "users"
  },
  {
    value: "6",
    label: "received recommendations",
    detail: "Colleagues highlight technical clarity, frontend expertise, reliability, collaboration, and delivery quality.",
    icon: "quote"
  },
  {
    value: "Winner",
    label: "THG India AI Hackathon 2025",
    detail: "VibeLabs was recognized for applying generative AI to practical ecommerce content workflows.",
    icon: "building"
  }
];

export const recommendationThemes: RecommendationTheme[] = [
  {
    title: "Technical clarity",
    body: "Recommendations highlight clear technical thinking and strong hands-on expertise across Astro, React, and scalable frontend systems."
  },
  {
    title: "Reliable collaboration",
    body: "Colleagues describe me as dependable, helpful, and easy to work with across team boundaries."
  },
  {
    title: "Quality and ownership",
    body: "Peer feedback consistently points to dedication, high delivery standards, and a focus on maintainable, scalable solutions."
  }
];

export const experiences: Experience[] = [
  {
    company: "THG Ingenuity",
    role: "Senior Frontend Engineer",
    period: "Sep 2025 - Present",
    summary:
      "Senior ownership across frontend observability, sale-event resilience, AI-assisted engineering workflows, and team delivery.",
    highlights: [
      "Built dashboards, real-user monitoring, synthetic checks, alerts, and runbooks for major sale events.",
      "Led load testing and spike-protection strategies to improve resilience and incident response.",
      "Applied GitHub Copilot, ChatGPT, and Claude to component scaffolding, prompt engineering, and faster debugging.",
      "Mentored junior engineers and collaborated with data, design, and marketing teams on product-driven features."
    ]
  },
  {
    company: "NMIMS CDOE",
    role: "Master of Business Administration, Information Technology",
    period: "Jun 2026 - Jun 2028",
    summary:
      "Postgraduate study connecting information technology, business strategy, management, and organizational decision-making.",
    highlights: [
      "Currently pursuing an MBA in Information Technology alongside senior frontend engineering work.",
      "Building broader business and leadership context for technology, product, and delivery decisions."
    ]
  },
  {
    company: "THG Ingenuity",
    role: "Software Engineer - Frontend",
    period: "May 2024 - Sep 2025",
    summary:
      "Frontend platform engineering for multi-tenant ecommerce storefronts, personalization, experimentation, performance, and observability.",
    highlights: [
      "Led React, Astro, Next.js, and Tailwind development across multi-tenant storefronts, with ownership of accessibility, SEO, and performance.",
      "Migrated 10+ beauty and luxury commerce sites and improved TTFB, TTI, SEO, and maintainability.",
      "Built a personalized ad and content-delivery layer integrated with GTM, resolving legacy issues and doubling personalized campaign revenue.",
      "Modernized React 16 services to React 18 and refactored legacy class components into modern functional patterns.",
      "Built server-side fetching, client hydration, data-mapping layers, SDK-style hooks, privacy-compliant fallbacks, and edge caching strategies."
    ]
  },
  {
    company: "Coditas",
    role: "Software Engineer / Associate Software Engineer",
    period: "Jul 2022 - May 2024",
    summary:
      "Responsive web applications, reusable component libraries, frontend performance work, and production testing practices.",
    highlights: [
      "Built responsive React and Next.js applications with reusable component systems using Tailwind CSS, MUI, and Chakra UI.",
      "Improved cross-browser compatibility and performance through code splitting, lazy loading, and automated test coverage.",
      "Contributed to CI/CD practices, agile delivery, and peer code reviews."
    ]
  },
  {
    company: "SNJB's KBJ College of Engineering, Chandwad",
    role: "Bachelor of Engineering, Computer Engineering",
    period: "Jun 2018 - Jun 2022",
    summary:
      "Computer engineering foundation across software development, problem solving, algorithms, and team-based project delivery.",
    highlights: [
      "Graduated with a 9.14 GPA while building a strong foundation in computer science and programming.",
      "Developed project, collaboration, and analytical skills that shaped the frontend engineering path that followed."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "storefront",
    title: "Ecommerce Multi-tenant Storefront",
    short: "A scalable storefront platform for multiple beauty brands.",
    problem: "Each tenant needed distinct themes, content rules, analytics, SEO behavior, and fast storefront delivery without duplicating code.",
    solution:
      "Created a configurable storefront layer with Astro.js, edge deployment, tenant-driven theming, dynamic content, and centralized management.",
    impact: "Improved storefront speed and latency while making tenant-specific experiences easier to manage.",
    tech: ["Astro.js", "React", "Next.js", "Tailwind CSS", "Edge rendering", "Analytics"],
    accent: "#58d7cf",
    icon: "layers"
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial",
    short: "Store locator, loyalty, forms, and global privacy localization.",
    problem: "Users needed to find nearby stores, complete dynamic forms, and access localized policy content across many markets.",
    solution:
      "Built a map-based locator with geolocation and filters, dynamic API-driven forms, loyalty flows, and localized privacy sections.",
    impact: "Delivered privacy content in 29+ languages and a more complete store-discovery and loyalty journey.",
    tech: ["React", "Geolocation", "Dynamic forms", "Localization", "API validation"],
    accent: "#f2b84b",
    icon: "map"
  },
  {
    id: "personify",
    title: "Personify",
    short: "Workflow builder and campaign orchestration for personalization.",
    problem: "Marketing teams needed to build journeys, segment audiences, and track campaign performance across channels.",
    solution:
      "Created drag-and-drop workflow builder components, CSV/query segmentation tools, email template widgets, and analytics dashboards.",
    impact: "Enabled teams to build targeted journeys, manage audiences, and monitor campaign performance across channels.",
    tech: ["React", "Workflow UI", "CSV uploads", "Segmentation", "Analytics dashboards"],
    accent: "#ff6bb5",
    icon: "workflow"
  },
  {
    id: "vibelabs",
    title: "VibeLabs AI Content Engine",
    short: "Winner, THG India AI Hackathon 2025.",
    problem: "Ecommerce teams needed faster product copy, email campaigns, edited product visuals, and advertisement content.",
    solution:
      "Built an AI-powered engine using LLMs for SEO product copy, personalized campaign content, prompt improvement, product image editing, and video generation.",
    impact: "Won the THG India AI Hackathon 2025 and reduced content production time by 80%.",
    tech: ["LLMs", "Prompt engineering", "NLP", "Image pipeline", "Video generation"],
    accent: "#8be28c",
    icon: "bot"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    icon: "code",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    label: "Frameworks & UI",
    icon: "boxes",
    skills: [
      "React.js",
      "Astro.js",
      "Next.js",
      "Redux",
      "Recoil",
      "Tailwind CSS",
      "SCSS",
      "MUI",
      "Chakra UI",
      "Jest",
      "React Testing Library"
    ]
  },
  {
    label: "Backend & Platforms",
    icon: "rocket",
    skills: ["Strapi", "Firebase", "REST APIs", "Git", "GitHub", "GitLab", "GTM", "JIRA"]
  },
  {
    label: "AI Tooling",
    icon: "sparkles",
    skills: ["ChatGPT", "Claude", "Gemini", "Grok", "GitHub Copilot", "Claude Code CLI", "Codex CLI"]
  },
  {
    label: "Delivery & Quality",
    icon: "gauge",
    skills: ["Accessibility", "SEO", "A/B testing", "RUM", "Synthetic monitoring", "CI/CD", "Agile delivery"]
  }
];
