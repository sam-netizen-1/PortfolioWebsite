import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/resume";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-signoff">
        <span className="brand-mark">SK</span>
        <div>
          <strong>Designed around the work. Written from experience.</strong>
          <p>Built by {profile.name} with React, TypeScript, CSS, and a stubborn care for details.</p>
        </div>
      </div>
      <div className="footer-links" aria-label="Footer links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} aria-hidden="true" />
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={16} aria-hidden="true" />
          GitHub
        </a>
        <a href={`mailto:${profile.email}`}>
          <Mail size={16} aria-hidden="true" />
          Email
        </a>
        <a href="#top">
          <ArrowUp size={16} aria-hidden="true" />
          Back to top
        </a>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location} · IST</span>
      </div>
    </footer>
  );
}
