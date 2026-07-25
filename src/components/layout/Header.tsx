import { Download } from "lucide-react";
import { profile } from "../../data/resume";
import type { ThemeMode } from "../../types/theme";
import { ThemeToggle } from "../ui/ThemeToggle";

type HeaderProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-header">
      <a href="#top" className="brand-mark" aria-label="Samkit Kothari portfolio home">
        <span>SK</span>
      </a>
      <nav aria-label="Portfolio sections">
        <a href="#experience" aria-label="Experience">
          <span className="nav-label-full">Experience</span>
          <span className="nav-label-short" aria-hidden="true">Exp</span>
        </a>
        <a href="#projects" aria-label="Projects">
          <span className="nav-label-full">Projects</span>
          <span className="nav-label-short" aria-hidden="true">Work</span>
        </a>
        <a href="#skills" aria-label="Skills">
          <span className="nav-label-full">Skills</span>
          <span className="nav-label-short" aria-hidden="true">Skills</span>
        </a>
        <a href="#contact" aria-label="Contact">
          <span className="nav-label-full">Contact</span>
          <span className="nav-label-short" aria-hidden="true">Talk</span>
        </a>
      </nav>
      <div className="header-actions">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <a className="icon-link" href={profile.resume} download="samkit-kothari-resume.pdf" aria-label="Download resume">
          <Download size={18} />
        </a>
      </div>
    </header>
  );
}
