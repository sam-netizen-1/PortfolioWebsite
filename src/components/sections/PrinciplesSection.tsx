import { principles } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function PrinciplesSection() {
  return (
    <section className="principles-section" id="approach">
      <div className="content-section">
        <div className="section-intro-grid">
          <SectionHeading
            eyebrow="03 / How I work"
            title="A small operating system for building."
            description="These are not abstract values. They are the checks I use when a project becomes noisy, urgent, or difficult to reason about."
          />
          <div className="approach-manifesto" aria-label="Samkit's engineering manifesto">
            <span>Make it fast.</span>
            <span>Make it understandable.</span>
            <span>Make it resilient.</span>
            <strong>Make it useful.</strong>
          </div>
        </div>
        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.index}>
              <span>{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
