import React from "react";
import { Navbar } from "@/components/Navbar";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Hero } from "@/components/Hero";
import { StarsBackground } from "@/components/StarsBackground";
import { TechMarquee } from "@/components/TechMarquee";
import { AboutIntro } from "@/components/AboutIntro";
import { Projects } from "@/components/Projects";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DockBar } from "@/components/DockBar";

/*
 * Section order follows c:\vibe-lab\ref:
 *   1 v2  Navbar + Hero (lanyard) + TechMarquee
 *   2 v3  About intro (scratch-reveal photo)
 *   3 v2  Selected Works bento
 *   4 v3  Project Gallery 3D coverflow
 *   5 v2  Academic Background
 *   6 v2  Expertise & Skills
 *   7 v2  Contact + callout footer
 */
export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* v3 starfield: fixed layer, hidden behind the opaque hero, visible from the marquee down */}
      <StarsBackground />

      {/* Interactive Glowing Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Fixed Sticky Glass Navbar */}
      <Navbar />

      {/* Hero Section with Swinging Lanyard ID Card */}
      <div className="relative z-10">
        <Hero />
      </div>

      <div className="relative z-10">
        {/* Infinite Tech Marquee */}
        <TechMarquee />

        {/* About intro (from v3) */}
        <AboutIntro />

        {/* Selected Works (Bento Grid) */}
        <Projects />

        {/* 3D Coverflow Project Gallery (from v3) */}
        <PhotoGallery />

        {/* Academic Background */}
        <Education />

        {/* Expertise & Skills */}
        <Skills />

        {/* Contact Section */}
        <Contact />

        {/* Animated Callout Footer */}
        <Footer />
      </div>

      {/* Floating Bottom macOS Dock Bar */}
      <DockBar />
    </main>
  );
}
