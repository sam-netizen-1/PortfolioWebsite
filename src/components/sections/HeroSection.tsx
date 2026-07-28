import { BadgeCheck, Download, MousePointer2 } from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { profile } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import type { ThemeMode } from "../../types/theme";
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
    const section = sectionRef.current;

    if (!shouldLoadScene || !section || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setIsSceneVisible(entry.isIntersecting);
    }, { rootMargin: "120px 0px", threshold: 0.02 });

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldLoadScene]);

  return (
    <section ref={sectionRef} className="hero-section" id="top">
      <div className="scene-layer" aria-hidden="true">
        {shouldLoadScene ? (
          <Suspense fallback={<div className="scene-preloader">Loading project map</div>}>
            <CommandCenterScene
              activeProjectId={activeProjectId}
              isSceneVisible={isSceneVisible}
              onSelectProject={onSelectProject}
              reduceMotion={reduceMotion}
              theme={theme}
            />
          </Suspense>
        ) : <div className="scene-static-art" />}
      </div>
      <div className="hero-grid">
        <div className="hero-copy hero-copy-enter">
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
            {!shouldLoadScene && !reduceMotion ? (
              <button className="scene-launch" type="button" onClick={() => setShouldLoadScene(true)}>
                Launch project map
              </button>
            ) : null}
          </div>
        </div>

        <ImpactMetrics />
      </div>
      <a className="scroll-cue" href="#projects">
        Selected work
      </a>
    </section>
  );
}
