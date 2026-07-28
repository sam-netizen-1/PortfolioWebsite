import { useEffect, useState } from "react";
import { Footer, Header } from "./components/layout";
import { ContactSection, ExperienceTimeline, HeroSection, LinkedInProofSection, ProjectsShowroom, SkillsConstellation } from "./components/sections";
import { projects } from "./data/resume";
import { useThemePreference } from "./hooks/useThemePreference";
import { useReducedMotionPreference } from "./hooks/useReducedMotionPreference";
import type { ProjectId } from "./types/portfolio";

function App() {
  const [activeProjectId, setActiveProjectId] = useState<ProjectId>(projects[0].id);
  const reducedMotion = useReducedMotionPreference();
  const { theme, toggleTheme } = useThemePreference();

  useEffect(() => {
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
  }, []);

  return (
    <div className="app-shell" data-theme={theme}>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <HeroSection activeProjectId={activeProjectId} onSelectProject={setActiveProjectId} reduceMotion={reducedMotion} theme={theme} />
        <ProjectsShowroom activeProjectId={activeProjectId} onSelectProject={setActiveProjectId} />
        <ExperienceTimeline />
        <LinkedInProofSection />
        <SkillsConstellation />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
