import type { Certification, CourseworkGroup, EducationItem } from "@/lib/types";

export const education: EducationItem[] = [
  {
    id: "uw",
    institution: "University of Washington",
    credential: "Bachelor of Science in Computer Science",
    detail: "Minor in Business",
    location: "Seattle, WA",
    startDate: "Sept. 2024",
    endDate: "Present",
    gpa: "3.68",
  },
  {
    id: "highline",
    institution: "Highline College",
    credential: "Associate of Arts",
    location: "Des Moines, WA",
    startDate: "Sept. 2022",
    endDate: "June 2024",
    gpa: "3.98",
  },
];

export const coursework: CourseworkGroup[] = [
  {
    id: "cs",
    title: "Computer Science",
    courses: [
      "Data Structures and Algorithms",
      "Systems Programming",
      "Hardware/Software Interface",
      "Intro to Data Management",
      "Object-Oriented Programming",
      "Discrete Mathematics",
    ],
  },
  {
    id: "math",
    title: "Mathematics",
    courses: ["Calculus", "Linear Algebra", "Probability and Statistics"],
  },
];

// Ready for future additions — the section hides itself while this is empty.
export const certifications: Certification[] = [];
