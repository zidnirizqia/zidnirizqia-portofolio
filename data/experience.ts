export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  descriptionPoints: string[];
  tags: string[];
}

export interface TrainingItem {
  id: string;
  title: string;
  provider: string;
  date: string;
}

export interface ExperienceData {
  sectionTitle: string;
  sectionSubtitle: string;
  experience: ExperienceItem;
  trainingsTitle: string;
  trainings: TrainingItem[];
}

export const experienceData: ExperienceData = {
  sectionTitle: "Experience",
  sectionSubtitle:
    "Hands-on experience in computer laboratory operations, focusing on IT maintenance, hardware/software troubleshooting, and session supervision.",
  experience: {
    id: "labamen-programmer",
    role: "Programmer & IT Support Specialist",
    organization:
      "Intermediate Accounting Laboratory (Labamen), Universitas Gunadarma",
    period: "September 2024 – July 2026",
    descriptionPoints: [
      "Conducted IT maintenance and hardware/software troubleshooting for ~30 PC workstations in the laboratory, resolving operating system errors, network connectivity glitches, and academic software configurations.",
      "Served as Person-in-Charge (PIC) and Head of Session for practical accounting and programming lab cohorts of ~30 students, supervising active sessions and ensuring zero downtime.",
    ],
    tags: [
      "IT Maintenance",
      "System Troubleshooting",
      "Software Deployment",
      "Local Networking",
      "Lab Supervision",
    ],
  },
  trainingsTitle: "Network & Cloud Certifications",
  trainings: [
    {
      id: "cisco-lan",
      title: "Local Area Network (LAN) using Cisco Router",
      provider: "Universitas Gunadarma LePKom",
      date: "August 2024",
    },
    {
      id: "wlan",
      title: "Wireless LAN Installation & Configuration",
      provider: "Universitas Gunadarma LePKom",
      date: "January 2025",
    },
    {
      id: "cisco-wan",
      title: "Wide Area Network (WAN) with Cisco Router (Intermediate)",
      provider: "Universitas Gunadarma LePKom",
      date: "August 2025",
    },
    {
      id: "aws-cloud",
      title: "Cloud Computing & Generative AI on AWS",
      provider: "Dicoding Indonesia",
      date: "October 2026",
    },
  ],
};
