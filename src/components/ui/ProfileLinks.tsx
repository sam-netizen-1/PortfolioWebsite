import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/resume";

export function ProfileLinks() {
  return (
    <div className="profile-links" aria-label="Profile links">
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        <Linkedin size={17} aria-hidden="true" />
        LinkedIn
      </a>
      <a href={`mailto:${profile.email}`}>
        <Mail size={17} aria-hidden="true" />
        Email
      </a>
      <a href={profile.github} target="_blank" rel="noreferrer">
        <Github size={17} aria-hidden="true" />
        GitHub
      </a>
    </div>
  );
}
