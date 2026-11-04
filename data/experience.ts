export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
}

export interface ExperienceData {
  sectionTitle: string;
  experience: ExperienceItem;
}

export const experienceData: ExperienceData = {
  sectionTitle: "Experience",
  experience: {
    id: "labamen-programmer",
    role: "Programmer",
    organization: "Laboratorium Akuntansi Menengah",
    period: "2024 – 2026",
  },
};
