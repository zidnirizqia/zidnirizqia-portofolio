"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Server,
  Brain,
  Sparkles,
  Terminal,
  Search,
  FileText,
  Bug,
  BookOpen,
  Users,
} from "lucide-react";

interface SkillBar {
  name: string;
  level: number;
  icon: string;
}

const arsenal: SkillBar[] = [
  {
    name: "Python (OpenCV, AI Pipelines)",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "JavaScript & TypeScript",
    level: 88,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React.js & Tailwind CSS",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Computer Vision (YOLOv8, Deep SORT)",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  },
  {
    name: "Workflow (Git, GitHub, Docker)",
    level: 82,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Linux & Web Hosting / cPanel",
    level: 78,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
];

const traits = [
  {
    name: "Analytical & Algorithmic Problem Solving",
    icon: Brain,
    color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
  {
    name: "Research-Oriented Experimentation",
    icon: Search,
    color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    name: "End-to-End Project Documentation",
    icon: FileText,
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    name: "Iterative Debugging & System Improvement",
    icon: Bug,
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
  {
    name: "Independent Learning & Adaptation",
    icon: BookOpen,
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  {
    name: "Academic & Technical Collaboration",
    icon: Users,
    color: "text-rose-400 border-rose-500/30 bg-rose-500/10",
  },
];

export function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Expertise &amp; <span className="text-gradient-primary">Skills</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
          Core technical competencies, engineering workflows, and analytical traits
        </p>
      </motion.div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Technical Arsenal */}
        <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-foreground/15 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
            <h4 className="text-xl font-bold text-foreground flex items-center gap-2.5">
              <Server className="w-5 h-5 text-primary" /> Technical Arsenal
            </h4>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/50">
              Proficiency
            </span>
          </div>

          <div className="space-y-6">
            {arsenal.map((skill, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-foreground flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center w-7 h-7">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-4 h-4 object-contain"
                        loading="lazy"
                      />
                    </div>
                    {skill.name}
                  </span>
                  <span className="font-mono font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full text-xs border border-primary/20">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Track */}
                <div className="h-2.5 w-full bg-muted/60 rounded-full overflow-hidden border border-border/40 p-[1px]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 via-primary to-sky-400 rounded-full relative shadow-[0_0_12px_rgba(139,92,246,0.5)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_8px_#fff]" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Professional Traits & Narrative Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-foreground/15 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
              <h4 className="text-xl font-bold text-foreground flex items-center gap-2.5">
                <Brain className="w-5 h-5 text-primary" /> Professional Traits
              </h4>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/50">
                Core Competencies
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {traits.map((trait, idx) => {
                const Icon = trait.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: idx * 0.08,
                    }}
                    viewport={{ once: true }}
                    className={`px-4 py-2.5 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-sm hover:scale-105 transition-transform cursor-default ${trait.color}`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{trait.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Summary Card */}
          <div className="mt-8 pt-6 border-t border-border/60">
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent border border-primary/20 flex items-start gap-3.5 shadow-sm">
              <div className="p-2.5 rounded-xl bg-primary/20 text-primary shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-foreground font-bold text-sm sm:text-base block mb-1">
                  Software Development + Applied Technology
                </strong>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Experience building web applications and experimenting with
                  computer vision systems through structured testing,
                  iteration, and technical documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
