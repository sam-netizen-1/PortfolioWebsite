import { experiences } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceTimeline() {
  const workExperience = experiences.filter((experience) => experience.kind === "work");
  const education = experiences.filter((experience) => experience.kind === "education");

  return (
    <>
      <section className="content-section" id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Frontend ownership across commerce, MarTech, and platform delivery."
          description="A progression from frontend delivery into senior product and platform ownership."
        />
        <div className="timeline">
          {workExperience.map((experience, index) => (
            <article key={`${experience.company}-${experience.role}`} className="timeline-item">
              <div className="timeline-pin">{index + 1}</div>
              <div>
                <p className="period">{experience.period}</p>
                {experience.company === workExperience[index + 1]?.company ? (
                  <p className="career-progression">Promoted within {experience.company}</p>
                ) : null}
                <h3>{experience.role}</h3>
                <strong>{experience.company}</strong>
                <p>{experience.summary}</p>
                <ul className="timeline-highlights">
                  {experience.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {experience.highlights.length > 2 ? (
                  <details className="timeline-more">
                    <summary>
                      View {experience.highlights.length - 2} more contribution{experience.highlights.length - 2 === 1 ? "" : "s"}
                    </summary>
                    <ul>
                      {experience.highlights.slice(2).map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section education-section" id="education">
        <SectionHeading
          eyebrow="Education"
          title="Engineering foundations with ongoing business and technology study."
        />
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={`${item.company}-${item.role}`}>
              <p className="period">{item.period}</p>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
