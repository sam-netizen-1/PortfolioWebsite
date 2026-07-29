import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { projects } from "../../data/resume";
import { ProjectVisual } from "../ui/ProjectVisual";
import { SectionHeading } from "../ui/SectionHeading";

type AccentStyle = CSSProperties & {
  "--accent": string;
};

export function ProjectsShowroom() {
  return (
    <section className="content-section project-band" id="work">
      <div className="section-intro-grid">
        <SectionHeading
          eyebrow="01 / Selected work"
          title="Evidence, not just outcomes."
          description="Four stories about making complicated systems easier to use, extend, and trust. Each case study shows the constraints, decisions, and learning behind the result."
        />
        <p className="section-aside">
          The production interfaces are confidential. These original visualizations explain the systems without exposing proprietary
          screens, customer information, or internal data.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => {
          const accentStyle: AccentStyle = { "--accent": project.accent };

          return (
            <article
              className={`project-card project-card-${project.id}${index === 0 ? " project-card-featured" : ""}`}
              key={project.id}
              style={accentStyle}
            >
              <ProjectVisual projectId={project.id} large={index === 0} />
              <div className="project-card-copy">
                <div className="project-card-meta">
                  <span>{project.eyebrow}</span>
                  <span>{project.timeline}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.short}</p>
                <div className="project-card-results" aria-label={`${project.title} results`}>
                  {project.results.slice(0, index === 0 ? 3 : 2).map((result) => (
                    <span key={result.label}>
                      <strong>{result.value}</strong>
                      {result.label}
                    </span>
                  ))}
                </div>
                <div className="project-card-bottom">
                  <div className="compact-tech-list" aria-label={`${project.title} technologies`}>
                    {project.tech.slice(0, 4).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a href={`/work/${project.id}`} aria-label={`Read the ${project.title} case study`}>
                    Read case study
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
