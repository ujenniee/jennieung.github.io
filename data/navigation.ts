import type { NavItem } from "@/lib/types";

/** Order here drives both the navbar and the scroll-spy observer. */
export const homeSections: NavItem[] = [
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Education", href: "/#education", sectionId: "education" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const navItems: NavItem[] = homeSections;

/** Module-level constant so the scroll-spy effect keeps a stable dependency. */
export const homeSectionIds: string[] = homeSections
  .map((item) => item.sectionId)
  .filter((id): id is string => Boolean(id));

export const footerLinks: NavItem[] = [
  ...homeSections.slice(0, 4),
  { label: "Case Studies", href: "/projects" },
  { label: "Resume", href: "/resume" },
];
