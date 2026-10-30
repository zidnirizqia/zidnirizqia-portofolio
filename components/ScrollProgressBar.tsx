"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[70] pointer-events-none bg-white/[0.04]">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 origin-left shadow-[0_0_14px_rgba(59,130,246,0.9)]"
        style={{ scaleX }}
      />
    </div>
  );
}
