import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    id: "philips",
    role: "Acoustic Engineering Intern",
    organization: "Philips",
    location: "Bothell, WA",
    startDate: "June 2026",
    endDate: "Present",
    summary:
      "Building internal tooling that restores, configures, and delivers presets for ultrasound imaging systems.",
    highlights: [
      "Designed and implemented a version-controlled preset management architecture enabling rollback and restoration of ultrasound imaging presets across software releases.",
      "Developed Python and C++ tools that automate preset recovery, deployment, and validation workflows, improving consistency across multiple ultrasound imaging platforms.",
      "Built an on-cart batch configuration feature that applies imaging parameter changes across all presets associated with a transducer, reducing preset configuration time by 87%.",
      "Created internal developer tooling integrating Git workflows, automated documentation generation, pull request management, and parameter-level configuration review to streamline preset delivery.",
    ],
    skills: ["Python", "C++", "Git", "GitHub REST API", "Database Design", "Validation Testing", "Automation"],
  },
  {
    id: "uw-ta",
    role: "Undergraduate Teaching Assistant",
    organization: "University of Washington",
    location: "Seattle, WA",
    startDate: "Sept. 2025",
    endDate: "Present",
    summary: "Teaching core computer science to undergraduates.",
    highlights: [
      "Supported 300+ students in lecture and led weekly quiz sections for 20+ students, reinforcing algorithms, data structures, and programming fundamentals.",
      "Provided individualized academic support through office hours, assisting 100+ students with debugging, problem solving, and course concepts.",
      "Graded and evaluated 9 major programming projects, delivering actionable technical feedback to improve code quality and software development practices.",
      "Mentored students one-on-one to strengthen programming proficiency, debugging skills, and confidence in computer science coursework.",
    ],
    skills: ["Algorithms", "Data Structures", "Mentorship", "Code Review", "Technical Communication"],
  },
  {
    id: "microsoft-uw",
    role: "Mentee",
    organization: "Microsoft × University of Washington",
    location: "Seattle, WA",
    startDate: "Sept. 2023",
    endDate: "June 2024",
    summary: "A year-long industry mentorship program with Microsoft engineers.",
    highlights: [
      "Built career readiness and early exposure to emerging technologies with Microsoft engineers.",
      "Joined recurring conversations on career growth and navigating large engineering organizations.",
    ],
    skills: ["Mentorship", "Professional Development", "Industry Exposure"],
  },
];
