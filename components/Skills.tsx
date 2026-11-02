"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Server,
  FileText,
  Wrench,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

interface SkillUsage {
  field: string;
  tools: string;
  usedIn: string;
}

const skillUsages: SkillUsage[] = [
  {
    field: "IT Support & Networking",
    tools: "Troubleshooting, Software Deployment, Windows, Cisco",
    usedIn: "Labamen & Cisco Certifications",
  },
  {
    field: "Web Engineering",
    tools: "PHP, MySQL, JavaScript, Bootstrap",
    usedIn: "Mie Ayam Mas Jo",
  },
  {
    field: "Cloud & Hosting",
    tools: "cPanel, AWS Cloud Foundations",
    usedIn: "Live Deployments & AWS Cert",
  },
  {
    field: "Computer Vision & AI",
    tools: "Python, OpenCV, YOLOv8, Deep SORT, Flask",
    usedIn: "Vehicle Counting Thesis",
  },
  {
    field: "Frontend Architecture",
    tools: "React, Next.js, TypeScript, Tailwind CSS",
    usedIn: "This Portfolio Web",
  },
  {
    field: "Dev Workflow",
    tools: "Git, GitHub, Version Control",
    usedIn: "Project Repositories & Collab",
  },
];

const workPrinciples = [
  {
    title: "Technical Documentation",
    description:
      "Authored IEEE-standard SRS, SDD, testing protocols, and user manuals for the Jumantik municipal health project (PPPL).",
    icon: FileText,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/25",
  },
  {
    title: "System Troubleshooting",
    description:
      "Diagnosed and resolved real-time network drops, software conflicts, and hardware faults across ~30 active lab PCs during live sessions.",
    icon: Wrench,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/25",
  },
  {
    title: "Empirical Validation",
    description:
      "Conducted Black Box testing and 15-respondent UAT for web platforms, paired with 3-way ablation benchmarking for tracking pipelines.",
    icon: CheckCircle2,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
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
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Expertise &amp; <span className="text-gradient-primary">Tech Stack</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-light">
          Tools, technologies, and proven methodologies applied across real-world systems.
        </p>
      </motion.div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (7 cols): Tools and Applied Proof */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-[2rem] border border-foreground/15 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2.5">
              <Server className="w-5 h-5 text-primary" /> Applied Stack &amp; Proof
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/50">
              Practical
            </span>
          </div>

          <div className="space-y-3.5">
            {skillUsages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-4 rounded-2xl bg-foreground/[0.03] border border-border/50 hover:border-primary/40 transition-all hover:bg-foreground/[0.05]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {item.field}
                  </span>
                  <span className="text-xs text-muted-foreground/80 font-medium">
                    Applied in: <strong className="text-foreground/90 font-semibold">{item.usedIn}</strong>
                  </span>
                </div>
                <div className="text-sm sm:text-base font-semibold text-foreground">
                  {item.tools}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column (5 cols): How I Work */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-[2rem] border border-foreground/15 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-primary" /> Proven Work Principles
              </h3>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/50">
                Verified
              </span>
            </div>

            <div className="space-y-4">
              {workPrinciples.map((principle, idx) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                    className="p-4 rounded-2xl bg-foreground/[0.03] border border-border/50 space-y-2 hover:border-border transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl border ${principle.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-foreground">
                        {idx + 1}. {principle.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed pl-1">
                      {principle.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quick statement footer */}
          <div className="mt-6 pt-5 border-t border-border/60 text-xs text-muted-foreground font-medium leading-relaxed">
            Emphasizing precision in engineering execution, active on-site problem resolution, and rigorous system documentation.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
