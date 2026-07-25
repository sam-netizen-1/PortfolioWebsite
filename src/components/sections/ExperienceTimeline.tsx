import { motion } from "framer-motion";
import { experiences } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceTimeline() {
  return (
    <section className="content-section" id="experience">
      <SectionHeading
        eyebrow="Career and education"
        title="Frontend growth, product delivery, and engineering foundations."
        description="A timeline shaped by ecommerce platform work, increasing technical ownership, business education, and a computer engineering foundation."
      />
      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.role}`}
            className="timeline-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.12, duration: 0.48 }}
          >
            <div className="timeline-pin">{index + 1}</div>
            <div>
              <p className="period">{experience.period}</p>
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
          </motion.article>
        ))}
      </div>
    </section>
  );
}
