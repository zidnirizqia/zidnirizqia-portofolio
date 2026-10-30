"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Code } from "lucide-react";

// Cinematic smooth cross-fade dissolve between normal photo and Spider-Man photo with a relaxed pause
function InteractiveProfile() {
  const [showSpiderman, setShowSpiderman] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 4-second cycle with 1.2s luxurious dissolve + ~2.8s resting pause
    const interval = setInterval(() => {
      setShowSpiderman((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeSpiderman = isHovered || showSpiderman;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[300px] h-[350px] sm:w-[380px] sm:h-[450px] lg:w-[420px] lg:h-[500px] relative rounded-none overflow-hidden select-none cursor-pointer"
    >
      {/* Base Normal Photo */}
      <motion.div
        className="absolute inset-0 w-full h-full will-change-[opacity]"
        initial={false}
        animate={{ opacity: activeSpiderman ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <Image
          src="/profile.png"
          alt="Zidni Khaerur Rizqia"
          fill
          priority
          sizes="(max-width: 768px) 380px, 420px"
          className="object-cover object-top"
        />
      </motion.div>

      {/* Spider-Man Easter Egg Photo (Cinematic Cross-fade) */}
      <motion.div
        className="absolute inset-0 w-full h-full will-change-[opacity]"
        initial={false}
        animate={{ opacity: activeSpiderman ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <Image
          src="/PhotoSpiderman.png"
          alt="Zidni as Spider-Man"
          fill
          priority
          sizes="(max-width: 768px) 380px, 420px"
          className="object-cover object-top"
        />
      </motion.div>
    </div>
  );
}

const resumeHref =
  "mailto:zidnikhaerur@gmail.com?subject=Resume%20Request%20-%20Zidni%20Khaerur%20Rizqia";

export function AboutIntro() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="v3-scope h-auto pb-20 text-foreground relative px-[5%] sm:px-[5%] lg:px-[10%] mt-24 sm:mt-28"
    >
      <div className="w-full mx-auto relative">
        {/* Top 3-Column Layout on Desktop with Staggered Scroll Reveal */}
        <div className="hidden lg:grid lg:grid-cols-[2.4fr_2.8fr_2.2fr] gap-8 items-center">
          {/* Left: Heading & Resume */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 space-y-6 text-left"
          >
            <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <span className="grad-vi block">Hi, I&apos;m</span>
              <span className="block text-foreground mt-1 whitespace-nowrap">Zidni Khaerur</span>
              <span className="block text-foreground whitespace-nowrap">Rizqia</span>
            </h2>

            <div className="mt-8">
              <a href={resumeHref} target="_blank" rel="noopener noreferrer">
                <button
                  id="about-view-resume"
                  className="font-display px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] whitespace-nowrap bg-[#2c67ed] text-white"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </button>
              </a>
            </div>
          </motion.div>

          {/* Center: Interactive Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 flex justify-center items-center"
          >
            <InteractiveProfile />
          </motion.div>

          {/* Right: Bio & View Projects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 space-y-6 text-left"
          >
            <h3 className="font-display text-xl font-bold text-foreground tracking-tight">
              Building <span className="text-[#2c67ed]">Practical Software</span> through Development &amp; Experimentation
            </h3>
            <div className="text-base sm:text-lg leading-relaxed space-y-3 font-light text-v3-muted">
              <p>
                I am an Informatics graduate from Universitas Gunadarma with
                experience in software development and applied technology
                projects. My work spans web-based systems and computer vision.
              </p>
              <p>
                I developed a food-ordering website for Mie Ayam Mas Jo with a
                loyalty point system and worked on vehicle detection, tracking,
                and counting using YOLOv8 and Deep SORT.
              </p>
            </div>

            <div className="mt-8">
              <a href="#projects" onClick={scrollToProjects}>
                <button
                  id="about-view-projects"
                  className="font-display px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 hover:bg-[rgba(37,99,235,0.08)] whitespace-nowrap border border-[rgba(37,99,235,0.35)] text-blue-600 dark:text-blue-400"
                >
                  <Code className="w-4 h-4" />
                  <span>View Projects</span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mobile / Tablet Stacked Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6 lg:hidden"
        >
          <div className="flex justify-center w-full">
            <InteractiveProfile />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-left w-full">
            <span className="grad-vi block">Hi, I&apos;m</span>
            <span className="block text-foreground mt-1">Zidni Khaerur Rizqia</span>
          </h2>

          <div className="text-base sm:text-lg leading-relaxed text-left w-full space-y-2 font-light text-v3-muted">
            <p>
              Building <strong>Practical Software</strong> through Development, Experimentation, and Technology.
            </p>
            <p>
              Informatics graduate from Universitas Gunadarma experienced in web
              application engineering, food ordering systems with customer
              loyalty, and YOLOv8 computer vision pipelines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a href={resumeHref} className="flex-1">
              <button
                id="about-view-resume-mobile"
                className="font-display w-full px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 bg-[#2c67ed] text-white"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </a>

            <a href="#projects" onClick={scrollToProjects} className="flex-1">
              <button
                id="about-view-projects-mobile"
                className="font-display w-full px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-[rgba(37,99,235,0.35)] text-blue-600 dark:text-blue-400"
              >
                <Code className="w-4 h-4" />
                <span>View Projects</span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
