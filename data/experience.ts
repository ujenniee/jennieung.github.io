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
      "Building internal tooling that restores and manages presets for ultrasound imaging systems.",
    highlights: [
      "Designed an internal database and scalable directory architecture to restore and manage legacy ultrasound machine presets.",
      "Built Python and C++ tooling that automates preset recovery workflows and keeps deployments consistent across imaging systems.",
      "Ran validation testing on live scan models, partnering with sonographers and clinical scientists to verify functionality against real clinical workflows.",
      "Shipped a batch-processing tool for preset preparation that cut sales demo setup time by roughly 70%.",
    ],
    skills: ["Python", "C++", "Database Design", "Validation Testing", "Automation"],
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
      "Lead weekly tutorial sessions covering algorithms, data structures, and programming fundamentals.",
      "Mentor students one-on-one to diagnose learning gaps and rebuild their problem-solving approach.",
      "Review programming assignments with detailed feedback on code quality and debugging.",
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
