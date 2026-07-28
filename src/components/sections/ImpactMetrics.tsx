import { metrics } from "../../data/resume";
import { getPortfolioIcon } from "../ui/portfolioIcons";

export function ImpactMetrics() {
  return (
    <div className="metric-rail" aria-label="Career impact metrics">
      {metrics.slice(0, 3).map((metric) => {
        const Icon = getPortfolioIcon(metric.icon);
        return (
          <div
            key={metric.label}
            className="metric-tile"
          >
            <Icon size={18} aria-hidden="true" />
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        );
      })}
    </div>
  );
}
