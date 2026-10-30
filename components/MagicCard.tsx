"use client";

import React, { useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 280,
  gradientColor = "rgba(139, 92, 246, 0.12)",
  gradientFrom = "#8b5cf6",
  gradientTo = "#38bdf8",
  ...props
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex flex-col justify-between backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden cursor-pointer",
        className
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`radial-gradient(${gradientSize}px at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 75%)`,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          maskComposite: "xor",
          padding: "1.5px",
          background: useMotionTemplate`radial-gradient(${gradientSize}px at ${mouseX}px ${mouseY}px, ${gradientFrom}, ${gradientTo}, transparent 70%)`,
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
