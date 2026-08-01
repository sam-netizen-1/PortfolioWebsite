import { ArrowUpRight, BookOpen, BrainCircuit, MapPin, Sparkles } from "lucide-react";
import { profile } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="content-section about-section" id="about">
      <div className="about-layout">
        <div>
          <SectionHeading eyebrow="02 / The person in the system" title="I like the messy middle." />
          <div className="about-statement">
            <p>
              Some engineers live for the empty canvas. I am drawn to the moment a product becomes complicated:
              more tenants, more traffic, more journeys, and more people relying on it.
            </p>
            <p>
              That is where thoughtful frontend systems matter. I enjoy finding the model hidden inside the mess,
              making it visible, and leaving behind something calmer than what I found.
            </p>
          </div>
        </div>

        <aside className="operator-card" aria-label="About Samkit">
          <div className="operator-card-top">
            <div className="operator-avatar">
              <span>SK</span>
              <i />
            </div>
            <div>
              <small>Operator profile</small>
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
            </div>
          </div>
          <div className="operator-values">
            <span>
              <MapPin size={15} aria-hidden="true" />
              Based in {profile.location}
            </span>
            <span>
              <BrainCircuit size={15} aria-hidden="true" />
              Builder · systems thinker · mentor
            </span>
            <span>
              <BookOpen size={15} aria-hidden="true" />
              MBA in Information Technology, in progress
            </span>
            <span>
              <Sparkles size={15} aria-hidden="true" />
              Curious about useful, reviewable AI
            </span>
          </div>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            More of the professional story
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </aside>
      </div>

      <div className="about-footnote">
        <span>What connects the work</span>
        <p>
          I care about the handoff between engineering and business: how a rendering decision affects conversion,
          how an operational tool changes a team’s day, and how technical clarity helps people make better decisions.
        </p>
      </div>
    </section>
  );
}
