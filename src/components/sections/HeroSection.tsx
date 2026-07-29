import { ArrowDownRight, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { profile } from "../../data/resume";
import { SignalMap } from "../ui/SignalMap";
import { ImpactMetrics } from "./ImpactMetrics";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy hero-copy-enter">
          <div className="hero-kicker">
            <span className="availability-dot" />
            <span>{profile.name}</span>
            <i />
            <span>{profile.role}</span>
          </div>

          <h1>
            Commerce gets <em>complicated.</em>
            <br />
            I make the interface feel <span>simple.</span>
          </h1>

          <p className="hero-summary">{profile.introduction}</p>

          <div className="hero-actions">
            <a className="primary-action" href="#work">
              See how I solve problems
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-action" href={profile.resume} target="_blank" rel="noreferrer">
              <FileText size={17} aria-hidden="true" />
              Read résumé
            </a>
          </div>

          <div className="hero-location">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
            <span>·</span>
            {profile.availability}
          </div>
        </div>

        <SignalMap />
      </div>

      <div className="current-strip" aria-label="What Samkit is currently doing">
        <div className="current-strip-label">
          <span>Now</span>
          <small>2026 / active</small>
        </div>
        {profile.currently.map((item) => (
          <div className="current-item" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
        <a
          href="https://www.linkedin.com/posts/samkit-kothari-84b5131b4_top-vc-reveals-how-to-win-the-ai-game-activity-7408164449699864577-WU58"
          target="_blank"
          rel="noreferrer"
          aria-label="Read Samkit's thinking on agentic commerce"
        >
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      <ImpactMetrics />
    </section>
  );
}
