"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MessageSquare, ExternalLink } from "lucide-react";
import { DotPattern } from "./DotPattern";
import { AuroraText } from "./AuroraText";
import { LanyardCard } from "./LanyardCard";

const typewriterTitles = [
  "Informatics Graduate",
  "Software & Web Developer",
  "Computer Vision Specialist",
  "IT Support & Network Engineer",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const tick = useCallback(() => {
    const current = typewriterTitles[titleIndex];
    if (isTyping) {
      if (charIndex < current.length) {
        setText((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setTitleIndex((prev) => (prev + 1) % typewriterTitles.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, titleIndex]);

  useEffect(() => {
    const timer = setTimeout(tick, isTyping ? 90 : 45);
    return () => clearTimeout(timer);
  }, [tick, isTyping]);

  return (
    <div className="h-8 flex items-center justify-center md:justify-start">
      <span className="text-lg md:text-xl text-blue-400 font-medium tracking-wide">
        {text}
      </span>
      <span className="w-[2.5px] h-5 ml-1.5 rounded-full bg-[#2c67ed] animate-blink" />
    </div>
  );
}

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/zidnirizqia", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/zidnirizqia", label: "LinkedIn" },
    { icon: Mail, href: "mailto:zidnikhaerurrizqia9@gmail.com", label: "Email" },
    { icon: MessageSquare, href: "https://wa.me/6281779133277", label: "WhatsApp" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex flex-col pt-24 md:pt-32 pb-16 overflow-hidden justify-center"
    >
      <DotPattern width={16} height={16} cx={1} cy={1} cr={1} glow={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        {/* Left Column: Headline & Bio */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-0 order-2 md:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mb-3 text-center md:text-left w-full"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-300 mb-1">
              Hi, I&apos;m
            </h1>

            {/* Aurora Animated Text Name */}
            <div>
              <AuroraText
                text="Zidni Khaerur Rizqia"
                fontSize="clamp(2.2rem, 5vw, 4.2rem)"
                className="bg-transparent overflow-visible p-0 justify-start"
                textClassName="bg-gradient-to-r from-blue-400 via-purple-400 to-sky-300 bg-clip-text text-transparent pb-2 font-extrabold"
              />
            </div>

            {/* Dynamic Typewriter */}
            <div className="mt-2">
              <Typewriter />
            </div>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed w-full font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            Informatics graduate from Universitas Gunadarma (GPA 3.69 / 4.00).
            I build modern web applications and computer vision pipelines,
            grounded by nearly two years of hands-on experience in computer
            laboratory operations, IT maintenance, and system troubleshooting for ~30 PC workstations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={scrollToProjects}
              className="rounded-xl px-7 h-12 bg-[#2c67ed] text-white font-semibold flex items-center gap-2 hover:bg-[#1d4ed8] transition-all shadow-[0_0_25px_rgba(44,103,237,0.35)] hover:shadow-[0_0_35px_rgba(44,103,237,0.55)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToContact}
              className="rounded-xl px-7 h-12 border border-white/15 hover:border-blue-500/50 hover:bg-blue-500/10 text-white font-semibold flex items-center gap-2 transition-all shadow-md hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links with 'Find me' Badge */}
          <motion.div
            className="flex items-center gap-4 justify-center md:justify-start w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
          >
            <span className="text-xs text-blue-400 tracking-widest uppercase font-semibold mr-1">
              Find me
            </span>
            {socialLinks.map(({ icon: Icon, href, label }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-blue-500/40 hover:bg-blue-500/10 text-blue-300 hover:text-white transition-all hover:scale-105 shadow-sm"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Swinging Lanyard & ID Card */}
        <motion.div
          className="flex-1 w-full max-w-md relative flex justify-center items-center py-4 order-1 md:order-2"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <LanyardCard
            ropeLength={75}
            ropeColor="#27272a"
            cardWidth="w-72 sm:w-80 md:w-84"
          />
        </motion.div>
      </div>
    </section>
  );
}
