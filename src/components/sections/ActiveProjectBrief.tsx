import { ArrowUpRight } from "lucide-react";
import { getProjectById } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import { getPortfolioIcon } from "../ui/portfolioIcons";

type ActiveProjectBriefProps = {
  activeProjectId: ProjectId;
};

export function ActiveProjectBrief({ activeProjectId }: ActiveProjectBriefProps) {
  const activeProject = getProjectById(activeProjectId);
  const ActiveIcon = getPortfolioIcon(activeProject.icon);

  return (
    <div className="active-brief" aria-live="polite">
        <article
          key={activeProject.id}
          className="active-brief-content"
        >
          <div className="brief-heading">
            <ActiveIcon size={22} aria-hidden="true" />
            <span>Featured case study</span>
          </div>
          <h2>{activeProject.title}</h2>
          <p>{activeProject.short}</p>
          <a href="#projects">
            View case details
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </article>
    </div>
  );
}
