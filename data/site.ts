import type { SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Jennie Ung",
  shortName: "Jennie",
  // Used in page titles, OG/Twitter cards, and the resume header.
  role: "Software Engineer & Designer",
  summary:
    "CS student at the University of Washington. Currently building ultrasound imaging tools at Philips and teaching algorithms as an undergraduate TA.",
  location: "Seattle, WA",
  email: "ujennie@uw.edu",
  // No custom domain yet — update this one constant if that changes.
  url: "https://jennieung.vercel.app",
  resumePath: "/jennie-ung-resume.pdf",
  githubUsername: "ujenniee",
} as const;

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
