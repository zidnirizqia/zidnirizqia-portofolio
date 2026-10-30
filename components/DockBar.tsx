"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Home,
  User,
  FolderOpen,
  GraduationCap,
  Cpu,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DockItemData {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const dockItems: DockItemData[] = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Cpu, label: "Skills", href: "#skills" },
  { icon: Send, label: "Contact", href: "#contact" },
];

function DockIcon({
  item,
  mouseX,
  baseSize = 44,
  magnification = 62,
  distance = 120,
}: {
  item: DockItemData;
  mouseX: any;
  baseSize?: number;
  magnification?: number;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseDistance = useTransform(mouseX, (val: number) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0 };
    return val - rect.x - baseSize / 2;
  });

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseSize, magnification, baseSize]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const Icon = item.icon;

  const handleClick = () => {
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className="relative flex items-center justify-center rounded-2xl bg-zinc-100/90 dark:bg-zinc-800/90 border border-zinc-300/80 dark:border-zinc-700/80 text-foreground shadow-md hover:border-primary/50 transition-colors cursor-pointer group shrink-0"
    >
      <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />

      {/* Tooltip Label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 px-3 py-1 rounded-xl glass-panel border border-foreground/15 text-[11px] font-bold text-foreground shadow-xl pointer-events-none whitespace-nowrap"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function DockBar() {
  const mouseX = useMotionValue(Infinity);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          aria-label="Bottom Navigation"
          className="fixed bottom-4 inset-x-0 mx-auto w-fit z-40 flex items-center justify-center pointer-events-auto select-none"
        >
          <div
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="p-[3px] rounded-[24px] sm:rounded-[28px] border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/80 dark:bg-zinc-900/80 shadow-2xl backdrop-blur-xl"
            role="toolbar"
            aria-label="Application dock"
          >
            <div className="flex items-end w-fit rounded-[20px] sm:rounded-[24px] px-3.5 py-2 transition-all duration-300 gap-3 border border-zinc-200/90 dark:border-zinc-800/90 bg-white/90 dark:bg-black/90 shadow-inner">
              {dockItems.map((item, idx) => (
                <DockIcon key={idx} item={item} mouseX={mouseX} />
              ))}
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
