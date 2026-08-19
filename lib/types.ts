export type NavItem = {
  label: string;
  href: string;
  /** Present when the link targets a section on the home page. */
  sectionId?: string;
};

export type SocialPlatform = "github" | "linkedin" | "email";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  summary: string;
  highlights: string[];
  skills: string[];
};

export type ProjectLink = {
  github?: string;
  demo?: string;
  caseStudy?: string;
};

export type ProjectOutcome = {
  metric: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  date: string;
  featured: boolean;
  /** Internal/closed-source work: suppresses repo and demo links. */
  proprietary?: boolean;
  image?: string;
  outcomes: ProjectOutcome[];
  stack: string[];
  links: ProjectLink;
  caseStudy?: ProjectCaseStudy;
};

export type ProjectCaseStudy = {
  problem: string;
  approach: string[];
  decisions: { title: string; body: string }[];
  result: string;
};

export type EducationItem = {
  id: string;
  institution: string;
  credential: string;
  detail?: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  href?: string;
};

export type CourseworkGroup = {
  id: string;
  title: string;
  courses: string[];
};
