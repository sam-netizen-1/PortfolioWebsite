import { motion } from "framer-motion";
import { BadgeCheck, Download, MousePointer2 } from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { ProfileLinks } from "../ui/ProfileLinks";
import { profile } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import type { ThemeMode } from "../../types/theme";
import { ActiveProjectBrief } from "./ActiveProjectBrief";
import { ImpactMetrics } from "./ImpactMetrics";

const CommandCenterScene = lazy(() => import("../scene/CommandCenterScene"));

type HeroSectionProps = {
  activeProjectId: ProjectId;
  onSelectProject: (projectId: ProjectId) => void;
  reduceMotion: boolean;
  theme: ThemeMode;
};

export function HeroSection({ activeProjectId, onSelectProject, reduceMotion, theme }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadScene, setShouldLoadScene] = useState(false);
  const [isSceneVisible, setIsSceneVisible] = useState(true);

  useEffect(() => {
    const delay = window.matchMedia("(max-width: 760px)").matches ? 420 : 180;
    const timer = window.setTimeout(() => setShouldLoadScene(true), delay);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setIsSceneVisible(entry.isIntersecting);
    }, { rootMargin: "120px 0px", threshold: 0.02 });

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const scenePlaceholder = (
    <div className="scene-preloader">
      <span />
      <strong>Loading interactive project map</strong>
    </div>
  );

  return (
    <section ref={sectionRef} className="hero-section" id="top">
      <div className="scene-layer" aria-hidden="true">
        {shouldLoadScene ? (
          <Suspense fallback={scenePlaceholder}>
            <CommandCenterScene
              activeProjectId={activeProjectId}
              isSceneVisible={isSceneVisible}
              onSelectProject={onSelectProject}
              reduceMotion={reduceMotion}
              theme={theme}
            />
          </Suspense>
        ) : scenePlaceholder}
      </div>
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="eyebrow">
            <BadgeCheck size={18} aria-hidden="true" />
            Frontend • Commerce • Personalization • AI
          </div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="hero-summary">{profile.headline}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              <MousePointer2 size={18} aria-hidden="true" />
              Explore projects
            </a>
            <a className="secondary-action" href={profile.resume} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              Resume
            </a>
          </div>
          <ProfileLinks />
        </motion.div>

        <ActiveProjectBrief activeProjectId={activeProjectId} />
        <ImpactMetrics />
      </div>
      <a className="scroll-cue" href="#experience">
        Experience timeline
      </a>
    </section>
  );
}
