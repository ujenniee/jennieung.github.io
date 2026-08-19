import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Java", "Python", "C++", "C", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js"],
  },
  {
    id: "backend-data",
    title: "Backend & Data",
    skills: ["Node.js", "REST APIs", "SQL", "Database Design"],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    id: "design",
    title: "Design",
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Canva"
    ],
  },
];
