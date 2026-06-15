import { profile } from "../../data/resume";

export function Footer() {
  return (
    <footer>
      <span>{profile.name}</span>
      <span>{profile.role}</span>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </footer>
  );
}
