import { useEffect } from "react";
import { Footer, Header } from "./components/layout";
import { CaseStudyPage } from "./components/pages/CaseStudyPage";
import {
  AboutSection,
  ContactSection,
  ExperienceTimeline,
  FieldNotesSection,
  HeroSection,
  LinkedInProofSection,
  PrinciplesSection,
  ProjectsShowroom,
  SkillsConstellation
} from "./components/sections";
import { projects } from "./data/resume";
import { useThemePreference } from "./hooks/useThemePreference";

function App() {
  const { theme, toggleTheme } = useThemePreference();
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const project = pathParts[0] === "work" ? projects.find((item) => item.id === pathParts[1]) : undefined;

  useEffect(() => {
    if (project) return;

    const scrollToHash = () => {
      const targetId = decodeURIComponent(window.location.hash.slice(1));
      if (!targetId) return;

      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [project]);

  return (
    <div className="app-shell" data-theme={theme}>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      {project ? (
        <CaseStudyPage project={project} />
      ) : (
        <main id="main-content">
          <HeroSection />
          <ProjectsShowroom />
          <AboutSection />
          <PrinciplesSection />
          <FieldNotesSection />
          <LinkedInProofSection />
          <ExperienceTimeline />
          <SkillsConstellation />
          <ContactSection />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
