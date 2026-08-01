import type {
  Experience,
  FieldNote,
  Metric,
  Principle,
  Profile,
  Project,
  ProjectId,
  SkillGroup,
  Testimonial
} from "../types/portfolio";

export const profile: Profile = {
  name: "Samkit Kothari",
  role: "Senior Frontend Engineer · Ecommerce, MarTech & Applied AI",
  headline:
    "I turn high-stakes commerce complexity into fast, calm, useful interfaces.",
  introduction:
    "I build the frontend platforms, campaign tools, and storefront experiences that make modern commerce easier to run and easier to trust.",
  location: "Pune, India",
  email: "kotharisamkeet@gmail.com",
  linkedin: "https://www.linkedin.com/in/samkit-kothari-84b5131b4",
  github: "https://github.com/sam-netizen-1",
  resume: "/samkit-kothari-sse-resume.pdf",
  availability: "Open to senior frontend, platform, and product engineering conversations",
  currently: [
    { label: "Building", value: "An AI agent for campaign email creation" },
    { label: "Learning", value: "Business strategy through an MBA in IT" },
    { label: "Exploring", value: "What agentic commerce changes for frontend teams" }
  ]
};

export const metrics: Metric[] = [
  {
    value: "10+",
    label: "commerce sites migrated",
    detail: "Beauty and luxury storefronts moved onto a shared, maintainable platform.",
    icon: "globe"
  },
  {
    value: "2×",
    label: "campaign revenue",
    detail: "Personalized advertising revenue after rebuilding the delivery layer.",
    icon: "chart"
  },
  {
    value: "80%",
    label: "less production time",
    detail: "Content workflow reduction delivered by the VibeLabs AI prototype.",
    icon: "sparkles"
  },
  {
    value: "29+",
    label: "localized languages",
    detail: "Global privacy content supported across the Hydrafacial experience.",
    icon: "map"
  }
];

export const principles: Principle[] = [
  {
    index: "01",
    title: "Clarity before cleverness",
    body: "The best interface makes a complicated system feel obvious. I use motion, abstraction, and technical sophistication only when they make the next decision clearer."
  },
  {
    index: "02",
    title: "Systems over screens",
    body: "A screen is a moment. A system has to survive new tenants, channels, campaigns, edge cases, and teammates without losing its shape."
  },
  {
    index: "03",
    title: "Measure the experience",
    body: "Performance, revenue, failure rates, and operational effort are product signals. I want the interface and the evidence to tell the same story."
  },
  {
    index: "04",
    title: "Leave it kinder",
    body: "Good engineering improves life for the next user and the next developer. Clear boundaries, useful documentation, and generous collaboration are part of the deliverable."
  }
];

export const fieldNotes: FieldNote[] = [
  {
    index: "NOTE 01",
    title: "When the interface starts to disappear",
    category: "Agentic commerce",
    readTime: "3 min",
    excerpt:
      "If customers begin delegating shopping decisions to agents, frontend engineering does not become less important. Its contract changes.",
    paragraphs: [
      "The familiar search-and-browse journey is slowly gaining another participant: a software agent acting on behalf of the customer. That shifts some value away from adding another filter and toward creating reliable orchestration layers, legible product data, and transparent decision states.",
      "For frontend teams, the interesting work becomes broader. We still design for people, but we also help a product explain what an automated system is doing, why it made a choice, and when a human should step back in.",
      "I am interested in that handoff—the moment infrastructure, interface, and trust become the same product problem."
    ]
  },
  {
    index: "NOTE 02",
    title: "Observability is part of the user experience",
    category: "Resilience",
    readTime: "2 min",
    excerpt:
      "A fast interface during a normal Tuesday is only half the story. The real test is what happens during the sale event.",
    paragraphs: [
      "Dashboards, real-user monitoring, synthetic checks, alerts, and runbooks can look like operational concerns that sit outside frontend product work. In practice, they are how a team protects the experience when demand stops being predictable.",
      "The strongest reliability work creates a shared language: what healthy looks like, which signals matter, who acts, and how quickly the system can recover. That clarity reduces stress for both customers and the people on call.",
      "Resilience has a human outcome. People can trust the product, and teams can operate it without heroics."
    ]
  },
  {
    index: "NOTE 03",
    title: "A migration is product work in disguise",
    category: "Platform thinking",
    readTime: "3 min",
    excerpt:
      "Moving ten storefronts is not a copy-and-paste exercise. It is a long conversation about what should remain unique and what should become a system.",
    paragraphs: [
      "Multi-tenant migrations force useful decisions. Which brand differences create customer value? Which differences are accidental history? Which abstractions help teams move faster, and which ones hide too much?",
      "The technical work—rendering strategy, hydration, caching, analytics, theming, and component boundaries—matters because it gives those decisions a durable home.",
      "The goal is not to make every tenant identical. It is to create a platform strong enough to support genuine difference without returning to duplication."
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Samkit consistently brought technical clarity, reliability, and a focus on scalable solutions to our cross-team work.",
    name: "Abbas Ali R Sariya",
    context: "Cross-team collaborator · Public recommendation summarized"
  },
  {
    quote:
      "Strong across Astro and React, always helpful, dependable, and willing to go beyond the immediate task.",
    name: "Akshat Vijayvergiya",
    context: "Frontend colleague · Public recommendation summarized"
  }
];

export const experiences: Experience[] = [
  {
    kind: "work",
    company: "THG Ingenuity",
    role: "Senior Frontend Engineer",
    period: "Sep 2025 — Present",
    summary:
      "Product and platform ownership across Personify, multichannel journeys, frontend resilience, and AI-assisted campaign creation.",
    highlights: [
      "Shipping campaign, journey, email-builder, and observability improvements across a production MarTech platform.",
      "Mentoring engineers and partnering with design, data, product, and marketing teams."
    ]
  },
  {
    kind: "work",
    company: "THG Ingenuity",
    role: "Software Engineer — Frontend",
    period: "May 2024 — Sep 2025",
    summary:
      "Multi-tenant commerce platforms, personalization, experimentation, migrations, performance, and frontend modernization.",
    highlights: [
      "Migrated 10+ storefronts and built a personalized content layer that doubled campaign revenue.",
      "Modernized React services and improved rendering, caching, SEO, accessibility, and observability."
    ]
  },
  {
    kind: "work",
    company: "Coditas",
    role: "Software Engineer",
    period: "Jul 2022 — May 2024",
    summary:
      "Responsive products, reusable component systems, performance improvements, testing, and production delivery.",
    highlights: [
      "Built React and Next.js applications using Tailwind, MUI, and Chakra UI.",
      "Improved cross-browser reliability through code splitting, lazy loading, and automated tests."
    ]
  },
  {
    kind: "education",
    company: "NMIMS CDOE",
    role: "MBA — Information Technology",
    period: "Jun 2026 — Jun 2028",
    summary:
      "Connecting engineering decisions with business strategy, leadership, and organizational context.",
    highlights: ["Currently studying alongside full-time engineering work."]
  },
  {
    kind: "education",
    company: "SNJB's KBJ College of Engineering",
    role: "BE — Computer Engineering",
    period: "2018 — 2022",
    summary:
      "Computer engineering foundation across software development, algorithms, and collaborative project delivery.",
    highlights: ["Graduated with a 9.14 GPA."]
  }
];

export const projects: Project[] = [
  {
    id: "personify",
    title: "Personify",
    eyebrow: "MarTech platform · Flagship case study",
    short:
      "A calmer way for traders to create campaigns, define audiences, and orchestrate multichannel customer journeys.",
    thesis:
      "Complex campaign systems should help people think in journeys, not force them to think in database states.",
    outcome:
      "A clearer and more resilient campaign workspace spanning email, SMS, push, segmentation, and event-triggered journeys.",
    role: "Senior Frontend Engineer",
    timeline: "2025 — Now",
    team: "Cross-functional product squad",
    status: "In production · Evolving",
    problem:
      "Campaign traders needed one dependable workspace for creating messages, selecting audiences, scheduling delivery, and connecting trigger events into longer customer journeys. Every new channel and workflow increased the cognitive and technical complexity.",
    solution:
      "I contributed campaign drafts, email heatmaps, reusable journey templates, email-builder capabilities, a redesigned campaign experience, and more robust workflow-journey architecture. I am now developing an AI agent that helps traders move from intent to an editable email.",
    impact:
      "The work makes campaign creation and journey management easier to understand, safer to operate, and more maintainable as the platform grows.",
    constraints: [
      "Multiple channels with different rules, states, and delivery expectations",
      "Existing workflows that had to keep operating during incremental redesign",
      "Complex trigger and segmentation logic that needed a calm visual model",
      "A product shared by technical systems and non-technical campaign teams"
    ],
    decisions: [
      {
        index: "D1",
        title: "Make state visible",
        body:
          "Campaign status, validation, and next actions were treated as part of the primary interface—not information hidden behind an error or a secondary panel.",
        signal: "Less ambiguity"
      },
      {
        index: "D2",
        title: "Design journeys as reusable language",
        body:
          "Templates and clearer journey patterns helped turn repeated operational knowledge into something the product could teach and reuse.",
        signal: "Faster setup"
      },
      {
        index: "D3",
        title: "Put AI inside the workflow",
        body:
          "The email agent is being designed around an editable campaign process so generated work remains reviewable, contextual, and under human control.",
        signal: "Human oversight"
      }
    ],
    workflow: ["Customer signal", "Audience segment", "Journey logic", "Email · SMS · Push"],
    architecture: [
      "Event and customer signals enter the campaign workspace",
      "Segment definitions make the intended audience explicit",
      "Journey logic connects timing, conditions, and reusable templates",
      "Channel-specific builders prepare reviewable messages",
      "Operational signals expose status, risk, and delivery health"
    ],
    results: [
      { value: "3", label: "delivery channels unified" },
      { value: "1", label: "campaign workspace" },
      { value: "AI", label: "email agent in development" }
    ],
    tech: ["React", "TypeScript", "Email builder", "Segmentation", "Event-driven journeys", "AI agents"],
    accent: "#a98698",
    icon: "workflow",
    confidentiality:
      "The interface shown here is an original, redacted system visualization. It communicates the product model without exposing proprietary screens or customer data.",
    learning:
      "The hardest workflow problems rarely need more UI. They need a clearer model of state, responsibility, and what happens next.",
    next: "storefront"
  },
  {
    id: "storefront",
    title: "Commerce Platform",
    eyebrow: "Multi-tenant ecommerce · Platform case study",
    short:
      "One storefront foundation supporting distinct beauty and luxury brands without copying the same problems ten times.",
    thesis:
      "A platform should standardize the expensive invisible work while protecting the parts of a brand customers actually feel.",
    outcome:
      "10+ storefront migrations with a shared architecture for theming, rendering, content, analytics, SEO, and performance.",
    role: "Frontend platform engineer",
    timeline: "2024 — 2025",
    team: "Commerce platform teams",
    status: "Delivered across production brands",
    problem:
      "Every tenant needed different themes, merchandising rules, content, analytics, SEO behavior, and integrations. Duplicating applications would accelerate the first launch and make every future improvement slower.",
    solution:
      "I helped build a configurable storefront layer with Astro, React, Next.js, tenant-driven theming, server-side data mapping, client hydration, SDK-style hooks, privacy-safe fallbacks, and edge caching.",
    impact:
      "The platform improved speed and maintainability while giving brand teams room to create distinct customer experiences. A related personalized content layer doubled campaign revenue.",
    constraints: [
      "Brand-specific experiences on top of shared platform boundaries",
      "SEO and existing URLs that could not regress during migration",
      "Performance across regions, devices, and unpredictable campaign traffic",
      "Legacy React services evolving while production work continued"
    ],
    decisions: [
      {
        index: "D1",
        title: "Configuration with boundaries",
        body:
          "Tenant differences became explicit configuration and extension points instead of scattered conditionals that were difficult to test or reason about.",
        signal: "10+ tenants"
      },
      {
        index: "D2",
        title: "Render for the customer",
        body:
          "Server rendering, selective hydration, caching, and careful data mapping were combined around page intent rather than a single rendering dogma.",
        signal: "Faster delivery"
      },
      {
        index: "D3",
        title: "Treat resilience as launch work",
        body:
          "RUM, synthetic checks, load testing, spike protection, alerts, and runbooks made major sale events a designed operating mode.",
        signal: "Sale ready"
      }
    ],
    workflow: ["Brand rules", "Tenant configuration", "Shared platform", "Customer storefront"],
    architecture: [
      "Brand and merchandising rules enter a tenant configuration layer",
      "Shared data mapping creates a stable product-facing contract",
      "Astro and React choose the appropriate rendering and hydration boundary",
      "Edge caching and fallbacks protect performance and privacy",
      "RUM and synthetic checks close the loop after release"
    ],
    results: [
      { value: "10+", label: "storefronts migrated" },
      { value: "2×", label: "personalized campaign revenue" },
      { value: "18", label: "React version reached from 16" }
    ],
    tech: ["Astro", "React", "Next.js", "Tailwind", "Edge rendering", "Analytics", "RUM"],
    accent: "#82aaa1",
    icon: "layers",
    confidentiality:
      "Brand names and production screens are intentionally minimized. The diagrams focus on the platform decisions and measurable outcomes I can discuss publicly.",
    learning:
      "The best shared platform is not the one with the most abstractions. It is the one teams can understand, extend, and operate during the busiest day of the year.",
    next: "vibelabs"
  },
  {
    id: "vibelabs",
    title: "VibeLabs",
    eyebrow: "AI content engine · Hackathon winner",
    short:
      "A practical generative-AI workflow for product copy, campaign creative, edited imagery, and video.",
    thesis:
      "AI is most useful when it removes repetitive production effort without removing the human review that protects a brand.",
    outcome:
      "Winner of the THG India AI Hackathon 2025, with a prototype that reduced content production time by 80%.",
    role: "Frontend and product prototyping",
    timeline: "THG India AI Hackathon 2025",
    team: "Four-person hackathon team",
    status: "Award-winning prototype",
    problem:
      "Commerce teams repeatedly transform the same product inputs into SEO copy, campaign messages, edited visuals, and advertising assets. The work is slow, fragmented, and difficult to scale across a catalog.",
    solution:
      "We created an AI-assisted engine for SEO-friendly product copy, personalized campaign content, prompt improvement, product-image editing, 360-degree concepts, and video generation.",
    impact:
      "The prototype compressed a multi-tool creative workflow into one reviewable pipeline, cut production time by 80%, and won the internal hackathon.",
    constraints: [
      "A compressed hackathon timeline",
      "Different generation models and media types inside one coherent flow",
      "Outputs that had to remain editable and brand-aware",
      "A demo that needed to communicate value immediately"
    ],
    decisions: [
      {
        index: "D1",
        title: "Begin with product truth",
        body:
          "Structured product inputs became the common source for copy, imagery, and video so generated assets remained connected rather than becoming isolated experiments.",
        signal: "One source"
      },
      {
        index: "D2",
        title: "Improve intent, not just prompts",
        body:
          "Prompt assistance helped users describe the outcome they wanted without requiring them to become experts in model-specific phrasing.",
        signal: "Lower friction"
      },
      {
        index: "D3",
        title: "Design for review",
        body:
          "Generated assets were presented as a workflow of candidates and refinements, keeping approval and brand judgment with the user.",
        signal: "Reviewable AI"
      }
    ],
    workflow: ["Product inputs", "AI drafting", "Creative refinement", "Review-ready assets"],
    architecture: [
      "A product brief establishes attributes, audience, and campaign theme",
      "Prompt assistance translates the brief into model-ready intent",
      "Copy, image, and video pipelines generate coordinated candidates",
      "A review layer supports comparison, refinement, and approval",
      "Approved assets leave the system ready for channel-specific use"
    ],
    results: [
      { value: "80%", label: "less production time" },
      { value: "Winner", label: "THG India AI Hackathon" },
      { value: "4", label: "creative output types" }
    ],
    tech: ["LLMs", "Prompt engineering", "NLP", "Image pipelines", "Video generation", "React"],
    accent: "#b6dc7b",
    icon: "bot",
    confidentiality:
      "This case study uses a purpose-built visualization rather than internal prototype screens. Publicly shared capabilities and outcomes remain the source of truth.",
    learning:
      "A useful AI product does not begin with the model. It begins with a repetitive human workflow that deserves a calmer, faster shape.",
    next: "hydrafacial"
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial",
    eyebrow: "Global customer experience · Delivery case study",
    short:
      "Store discovery, loyalty, dynamic forms, and privacy localization across a global beauty experience.",
    thesis:
      "Localization is not a final translation step. It is a product constraint that should shape the component and content model from the beginning.",
    outcome:
      "A more complete service-discovery journey with localized privacy content delivered across 29+ languages.",
    role: "Frontend engineer",
    timeline: "Production engagement",
    team: "Cross-functional delivery team",
    status: "Delivered",
    problem:
      "Customers needed to find nearby providers, filter locations, complete dynamic forms, and access the right policy content across many markets and languages.",
    solution:
      "I built a geolocation-aware store locator, API-driven forms and validation, loyalty flows, filters, and reusable localized privacy sections.",
    impact:
      "The experience connected discovery and conversion while supporting a global privacy footprint of more than 29 languages.",
    constraints: [
      "Location permissions and graceful fallbacks",
      "Dynamic form rules and API validation",
      "Market-specific content across more than 29 languages",
      "A responsive journey spanning maps, filters, forms, and loyalty"
    ],
    decisions: [
      {
        index: "D1",
        title: "Ask for location with context",
        body:
          "Geolocation was treated as an optional accelerator, with filters and manual discovery remaining useful when permission was unavailable.",
        signal: "Graceful fallback"
      },
      {
        index: "D2",
        title: "Model content for change",
        body:
          "Reusable privacy sections and market-aware content boundaries reduced the risk of localization becoming a set of one-off pages.",
        signal: "29+ languages"
      },
      {
        index: "D3",
        title: "Connect the journey",
        body:
          "Locator, form, and loyalty states were designed as one progression so the customer did not have to re-establish context at every step.",
        signal: "Fewer dead ends"
      }
    ],
    workflow: ["Location intent", "Provider filters", "Localized experience", "Service discovery"],
    architecture: [
      "Permission-aware location establishes a useful starting point",
      "Filters combine geography with service preferences",
      "Market context selects localized content and policy modules",
      "Dynamic forms validate customer intent through APIs",
      "Loyalty and provider details support the next customer action"
    ],
    results: [
      { value: "29+", label: "localized languages" },
      { value: "1", label: "connected discovery journey" },
      { value: "API", label: "driven forms and validation" }
    ],
    tech: ["React", "Geolocation", "Dynamic forms", "Localization", "API validation"],
    accent: "#b99a70",
    icon: "map",
    confidentiality:
      "The visual is a reconstructed experience map rather than a production capture. It demonstrates the interaction model without reproducing client assets.",
    learning:
      "A global interface feels local when it handles uncertainty—permissions, language, validation, and missing context—without making that complexity the customer’s problem.",
    next: "personify"
  }
];

const projectsById = new Map(projects.map((project) => [project.id, project]));

export function getProjectById(projectId: ProjectId): Project {
  return projectsById.get(projectId) ?? projects[0];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Interface",
    icon: "code",
    skills: ["React", "TypeScript", "Astro", "Next.js", "HTML", "CSS", "Accessibility"]
  },
  {
    label: "Platform",
    icon: "layers",
    skills: ["Rendering strategy", "Edge caching", "Design systems", "Multi-tenancy", "REST APIs", "CI/CD"]
  },
  {
    label: "Commerce",
    icon: "chart",
    skills: ["Personalization", "Segmentation", "GTM", "SEO", "A/B testing", "Campaign journeys"]
  },
  {
    label: "Reliability",
    icon: "gauge",
    skills: ["RUM", "Synthetic monitoring", "Load testing", "Alerts", "Runbooks", "Performance"]
  },
  {
    label: "Applied AI",
    icon: "sparkles",
    skills: ["AI agents", "Prompt systems", "Content workflows", "Image pipelines", "Video generation"]
  }
];
