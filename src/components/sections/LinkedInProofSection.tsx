import { ArrowUpRight, Quote } from "lucide-react";
import { profile, testimonials } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function LinkedInProofSection() {
  return (
    <section className="proof-section">
      <div className="content-section">
        <div className="proof-heading-row">
          <SectionHeading
            eyebrow="05 / In their words"
            title="The human side of delivery."
            description="Good systems are collaborative systems. These recommendations describe the working style behind the metrics."
          />
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            View all 6 recommendations
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <blockquote key={testimonial.name}>
              <div className="quote-mark">
                <Quote size={24} aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <p>“{testimonial.quote}”</p>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.context}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
