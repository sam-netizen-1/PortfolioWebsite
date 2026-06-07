import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail
  },
  {
    label: "LinkedIn",
    value: "samkit-kothari-84b5131b4",
    href: profile.linkedin,
    Icon: Linkedin
  },
  {
    label: "GitHub",
    value: "sam-netizen-1",
    href: profile.github,
    Icon: Github
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: profile.resume,
    Icon: Download
  }
];

export function ContactSection() {
  return (
    <section className="content-section contact-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Open to frontend, ecommerce, personalization, and AI workflow conversations."
        description="The fastest way to reach me is email or LinkedIn. GitHub is included for code and project context."
      />
      <div className="contact-panel">
        <div className="contact-copy">
          <span>
            <MapPin size={17} aria-hidden="true" />
            {profile.location}
          </span>
          <h3>Let's build fast, useful commerce experiences.</h3>
          <p>
            I am most interested in frontend platform work, storefront performance, experimentation, personalization,
            and practical AI tools that reduce repetitive content and campaign effort.
          </p>
        </div>
        <div className="contact-grid" aria-label="Contact links">
          {contactLinks.map(({ Icon, href, label, value }) => (
            <a
              href={href}
              key={label}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              <Icon size={20} aria-hidden="true" />
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
