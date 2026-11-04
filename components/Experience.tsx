"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experienceData } from "@/data/experience";

export function Experience() {
  const { sectionTitle, experience } = experienceData;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="max-w-7xl mx-auto px-6 py-16 sm:py-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-sm">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground"
          >
            {sectionTitle}
          </h2>
        </div>
      </motion.div>

      {/* Compact Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-panel px-6 py-6 sm:px-8 sm:py-7 rounded-2xl border border-border/80 bg-card/60 shadow-lg relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
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
      </motion.div>
    </section>
  );
}
