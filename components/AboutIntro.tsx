"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Code } from "lucide-react";

// Interactive Profile: Features both automatic cinematic cross-fade AND cursor flashlight spill reveal on hover
function InteractiveProfile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maskPos, setMaskPos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const [showSpiderman, setShowSpiderman] = useState(false);

  // Automatic gentle dissolve when not hovering
  useEffect(() => {
    if (isHovered) return; // Pause automatic cycle while user is interacting with cursor spill

    const interval = setInterval(() => {
      setShowSpiderman((prev) => !prev);
    }, 3800);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMaskPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMaskPos({ x: -1000, y: -1000 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-[300px] h-[350px] sm:w-[380px] sm:h-[450px] lg:w-[420px] lg:h-[500px] relative rounded-none overflow-hidden select-none ${
        isHovered ? "cursor-none" : "cursor-pointer"
      }`}
    >
      {/* Base Normal Photo */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/profile.png"
          alt="Zidni Khaerur Rizqia"
          fill
          priority
          sizes="(max-width: 768px) 380px, 420px"
          className="object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Automatic Cross-fade Layer (Active when NOT hovering with cursor) */}
      <motion.div
        className="absolute inset-0 w-full h-full will-change-[opacity] pointer-events-none"
        initial={false}
        animate={{
          opacity: !isHovered && showSpiderman ? 1 : 0,
        }}
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

      {/* Interactive Cursor Radial Mask Spill Layer (Active on HOVER: 'ke-spill saat kursor ke foto') */}
      <div
        className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-200"
        style={{
          WebkitMaskImage: `radial-gradient(135px at ${maskPos.x}px ${maskPos.y}px, black 65%, transparent 100%)`,
          maskImage: `radial-gradient(135px at ${maskPos.x}px ${maskPos.y}px, black 65%, transparent 100%)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          opacity: isHovered ? 1 : 0,
        }}
      >
        <Image
          src="/PhotoSpiderman.png"
          alt="Spider-Man Spill Reveal"
          fill
          priority
          sizes="(max-width: 768px) 380px, 420px"
          className="object-cover object-top"
        />
      </div>

      {/* Mouse Cursor Tracking Indicator Dot */}
      <div
        className="absolute w-3.5 h-3.5 rounded-full pointer-events-none z-50 mix-blend-difference bg-white -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 shadow-[0_0_8px_#fff]"
        style={{
          left: `${maskPos.x}px`,
          top: `${maskPos.y}px`,
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}

const resumeHref =
  "https://drive.google.com/file/d/1RiZeBxz74RxjJTB8nwvzO1dMFxcDwp06/view?usp=drive_link";

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
      className="v3-scope h-auto pb-10 text-foreground relative px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm:mt-14"
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
              <span className="grad-vi block">About</span>
              <span className="block text-foreground mt-1 whitespace-nowrap">Me</span>
            </h2>

            <div className="mt-8">
              <a href={resumeHref} target="_blank" rel="noopener noreferrer">
                <button
                  id="about-view-resume"
                  className="font-display px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] whitespace-nowrap bg-[#2c67ed] text-white cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
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
                  className="font-display px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 hover:bg-[rgba(37,99,235,0.08)] whitespace-nowrap border border-[rgba(37,99,235,0.35)] text-blue-600 dark:text-blue-400 cursor-pointer"
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
            <span className="grad-vi block">About</span>
            <span className="block text-foreground mt-1">Me</span>
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
            <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="flex-1">
              <button
                id="about-view-resume-mobile"
                className="font-display w-full px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 bg-[#2c67ed] text-white cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </button>
            </a>

            <a href="#projects" onClick={scrollToProjects} className="flex-1">
              <button
                id="about-view-projects-mobile"
                className="font-display w-full px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-[rgba(37,99,235,0.35)] text-blue-600 dark:text-blue-400 cursor-pointer"
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
