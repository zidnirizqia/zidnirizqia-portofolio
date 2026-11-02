"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Award,
  Layers,
  Server,
} from "lucide-react";
import { experienceData } from "@/data/experience";

export function Experience() {
  const { sectionTitle, sectionSubtitle, experience, trainingsTitle, trainings } =
    experienceData;

  const handleTrainingClick = () => {
    // Switch to certificates tab in Projects
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("portfolio:switch-tab", {
          detail: { tab: "certificates" },
        })
      );
    }

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="max-w-7xl mx-auto px-6 py-24 sm:py-32"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-md">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          >
            {sectionTitle}
          </h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-light">
          {sectionSubtitle}
        </p>
      </motion.div>

      {/* Main Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-panel p-8 sm:p-10 md:p-12 rounded-[2.25rem] border border-border/80 bg-card/60 shadow-xl space-y-8 relative overflow-hidden"
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none" />

        {/* Top Header: Role, Period, Organization */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold tracking-wider mb-2">
              <Server className="w-3.5 h-3.5" />
              IT Support &amp; Lab Management
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              {experience.role}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base font-medium mt-1">
              {experience.organization}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary/90 bg-primary/10 px-4 py-2 rounded-xl border border-primary/20 w-fit shrink-0">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Responsibilities & Points */}
        <div className="space-y-4 relative z-10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Responsibilities &amp; Key Contributions
          </h4>
          <ul className="space-y-3">
            {experience.descriptionPoints.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-base text-foreground/90 font-light leading-relaxed"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="space-y-3 relative z-10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            Core Competencies &amp; Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-3.5 py-1.5 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground/80 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Supporting Trainings Block */}
        <div className="pt-6 border-t border-border/60 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              {trainingsTitle}
            </h4>
            <span className="text-xs text-muted-foreground/80">
              Click any item to view verified certificate
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trainings.map((t) => (
              <button
                key={t.id}
                onClick={handleTrainingClick}
                type="button"
                className="group flex items-center justify-between p-4 rounded-2xl bg-foreground/[0.03] hover:bg-foreground/[0.07] border border-foreground/10 hover:border-blue-500/40 text-left transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] cursor-pointer"
              >
                <div className="min-w-0 pr-3">
                  <div className="text-sm font-semibold text-foreground group-hover:text-blue-400 transition-colors line-clamp-1">
                    {t.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                    <span>{t.provider}</span>
                    <span>•</span>
                    <span>{t.date}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
