"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { DotPattern } from "./DotPattern";
import { AuroraText } from "./AuroraText";
import { LanyardCard } from "./LanyardCard";

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
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-center md:text-left w-full"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2">
              Hi, I&apos;m
            </h1>

            {/* Aurora Animated Text */}
            <div>
              <AuroraText
                text="Zidni Khaerur Rizqia"
                fontSize="clamp(2.2rem, 5vw, 4.2rem)"
                className="bg-transparent overflow-visible p-0 justify-start"
                textClassName="bg-gradient-to-r from-cyan-400 via-purple-400 to-sky-300 bg-clip-text text-transparent pb-2 font-extrabold"
              />
            </div>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Informatics graduate from Universitas Gunadarma with hands-on
            experience in web application development and computer vision. I
            enjoy turning technical problems into practical solutions—from
            building a food-ordering website with a loyalty point system to
            developing vehicle detection, tracking, and counting pipelines.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={scrollToProjects}
              className="rounded-full px-7 h-12 bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToContact}
              className="rounded-full px-7 h-12 glass-panel border border-foreground/15 text-foreground font-semibold flex items-center gap-2 hover:border-primary/40 hover:bg-foreground/5 transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Let&apos;s Connect
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-5 justify-center md:justify-start w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 transform duration-200 p-2 glass-panel rounded-full border border-foreground/10 hover:border-primary/30 shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Swinging Lanyard & ID Card */}
        <motion.div
          className="flex-1 w-full max-w-md relative flex justify-center items-center py-4 order-1 md:order-2"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
