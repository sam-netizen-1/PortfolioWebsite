import { BadgeCheck, FileText, MousePointer2 } from "lucide-react";
import { profile } from "../../data/resume";
import { ImpactMetrics } from "./ImpactMetrics";

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="scene-layer" aria-hidden="true">
        <div className="scene-static-art" />
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
              <FileText size={18} aria-hidden="true" />
              Resume
            </a>
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
