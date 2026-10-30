"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

function generateStars(count: number, starColor: string) {
  const stars: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    stars.push(`${x}px ${y}px ${starColor}`);
  }
  return stars.join(", ");
}

interface StarLayerProps {
  count?: number;
  size?: number;
  duration?: number;
  starColor?: string;
  className?: string;
}

function StarLayer({
  count = 300,
  size = 1,
  duration = 50,
  starColor = "#ffffff",
  className,
}: StarLayerProps) {
  // Random positions must not be computed during render: SSR and the browser would
  // produce different values and React reports a hydration mismatch.
  const [boxShadow, setBoxShadow] = useState("none");
  useEffect(() => {
    setBoxShadow(generateStars(count, starColor));
  }, [count, starColor]);

  const style = useMemo(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
      boxShadow,
    }),
    [size, boxShadow]
  );

  return (
    <motion.div
      data-slot="star-layer"
      animate={{ y: [0, -2000] }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className={cn("absolute top-0 left-0 w-full h-[2000px]", className)}
      style={{ willChange: "transform" }}
    >
      <div className="absolute bg-transparent rounded-full" style={style} />
      <div className="absolute bg-transparent rounded-full top-[2000px]" style={style} />
    </motion.div>
  );
}

function ShootingStars() {
  const stars = useMemo(
    () => [
      { id: 1, delay: 0, top: "-10%", left: "20%", repeatDelay: 12 },
      { id: 2, delay: 4, top: "-5%", left: "65%", repeatDelay: 15 },
      { id: 3, delay: 8, top: "30%", left: "-5%", repeatDelay: 18 },
    ],
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ top: star.top, left: star.left, opacity: 0, x: 0, y: 0, rotate: 45 }}
          animate={{ opacity: [0, 1, 1, 0], x: [0, 1200], y: [0, 1200] }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: star.repeatDelay,
            ease: "linear",
          }}
          className="absolute h-[2px] w-[150px] bg-gradient-to-r from-transparent to-slate-400 dark:to-white rotate-[45deg]"
        >
          <div className="absolute right-0 top-1/2 h-[4px] w-[4px] -translate-y-1/2 rounded-full bg-slate-400 dark:bg-white shadow-[0_0_15px_4px_rgba(180,210,255,0.8)]" />
        </motion.div>
      ))}
    </div>
  );
}

interface StarsBackgroundProps {
  className?: string;
  factor?: number;
  speed?: number;
  starColor?: string;
}

export function StarsBackground({
  className,
  factor = 0.05,
  speed = 50,
  starColor = "var(--star-color)",
}: StarsBackgroundProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    let animFrame: number | null = null;
    const handleMove = (e: PointerEvent) => {
      if (!animFrame) {
        animFrame = requestAnimationFrame(() => {
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          mouseX.set(-(e.clientX - centerX) * factor);
          mouseY.set(-(e.clientY - centerY) * factor);
          animFrame = null;
        });
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, [factor, mouseX, mouseY]);

  return (
    <div
      data-slot="stars-background"
      aria-hidden="true"
      className={cn("stars-bg fixed inset-0 z-0 overflow-hidden pointer-events-none", className)}
    >
      <motion.div style={{ x: springX, y: springY }}>
        <StarLayer count={300} size={1} duration={speed} starColor={starColor} />
        <StarLayer count={150} size={2} duration={speed * 2} starColor={starColor} />
        <StarLayer count={50} size={3} duration={speed * 3} starColor={starColor} />
      </motion.div>
      <ShootingStars />
    </div>
  );
}
