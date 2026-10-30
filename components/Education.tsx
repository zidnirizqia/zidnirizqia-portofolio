"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, MapPin } from "lucide-react";
import { MagicCard } from "./MagicCard";

const focusAreas = [
  "Software and web application development",
  "Algorithms and programming",
  "Computer vision and image processing",
  "Artificial intelligence and applied machine learning",
  "Database and information-system fundamentals",
  "Technical research, testing, and documentation",
];

export function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Academic <span className="text-gradient-primary">Background</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
          Academic foundation in Informatics, software development, and applied computing
        </p>
      </motion.div>

      {/* Main Degree Card wrapped in MagicCard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <MagicCard
          className="p-8 md:p-10 rounded-[2.25rem] border border-border/80 bg-card/80 shadow-xl"
          gradientSize={400}
          gradientColor="rgba(139, 92, 246, 0.12)"
          gradientFrom="#8b5cf6"
          gradientTo="#38bdf8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12">
            {/* Left Column: Degree & Institution Meta */}
            <div className="flex flex-col gap-6 lg:border-r lg:border-border/60 lg:pr-10">
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full border text-xs font-extrabold flex items-center gap-1.5 shadow-sm text-emerald-400 bg-emerald-500/10 border-emerald-500/30">
                  <Award className="w-3.5 h-3.5" />
                  IPK 3.69/4.00
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-2">
                  Sarjana Komputer (S.Kom.)
                </h3>
                <p className="text-primary font-bold text-base mb-4">
                  Informatics Major
                </p>

                <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-semibold text-muted-foreground">
                  <span className="flex items-center gap-2 text-foreground font-bold">
                    <MapPin className="w-4 h-4 text-primary" />
                    Universitas Gunadarma
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Period: 2022 – 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Focus: Web Systems &amp; Computer Vision
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Focus Areas & Key Competencies */}
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Key Academic Competencies &amp; Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-muted/30 border border-border/40 hover:border-primary/30 transition-colors"
                  >
                    <div className="p-1 rounded-lg bg-primary/10 text-primary mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MagicCard>
      </motion.div>
    </section>
  );
}
