import type { SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Jennie Ung",
  shortName: "Jennie",
  // Used in page titles, OG/Twitter cards, and the resume header.
  role: "Software Engineer & Designer",
  location: "Seattle, WA",
  email: "ujennie@uw.edu",
  // No custom domain yet — update this one constant if that changes.
  url: "https://jennieung.vercel.app",
  resumePath: "/jennie-ung-resume.pdf",
  githubUsername: "ujenniee",
} as const;

// Search snippets and link previews only — not rendered on the page.
export const siteDescription = `${siteConfig.name} — ${siteConfig.role} based in ${siteConfig.location}.`;

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    href: `https://github.com/${siteConfig.githubUsername}`,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jennie-ung-82b647283",
  },
  {
    platform: "email",
    label: "Email",
    href: `mailto:${siteConfig.email}`,
  },
];
