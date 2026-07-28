export type ProjectId = "personify" | "storefront" | "hydrafacial" | "vibelabs";

export type PortfolioIconName =
  | "bot"
  | "boxes"
  | "building"
  | "chart"
  | "code"
  | "gauge"
  | "globe"
  | "layers"
  | "linkedin"
  | "mail"
  | "map"
  | "quote"
  | "rocket"
  | "sparkles"
  | "users"
  | "workflow";

export type Profile = {
  name: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
};

export type Metric = {
  value: string;
  label: string;
  icon: PortfolioIconName;
};

export type SocialProof = {
  value: string;
  label: string;
  detail: string;
  icon: PortfolioIconName;
};

export type RecommendationTheme = {
  title: string;
  body: string;
};

export type Project = {
  id: ProjectId;
  title: string;
  short: string;
  problem: string;
  solution: string;
  impact: string;
  workflow: string[];
  tech: string[];
  accent: string;
  icon: PortfolioIconName;
};

export type Experience = {
  kind: "work" | "education";
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  icon: PortfolioIconName;
  skills: string[];
};
