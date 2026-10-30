"use client";

import React from "react";

interface TechItem {
  name: string;
  icon: string;
}

const techStack: TechItem[] = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "YOLOv8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  },
  {
    name: "Deep SORT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
  {
    name: "cPanel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cpanel/cpanel-original.svg",
  },
];

export function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-10 border-y border-foreground/10 bg-background/50 backdrop-blur-sm select-none">
      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused] py-1">
        {[...techStack, ...techStack].map((item, idx) => (
          <div
            key={idx}
            className="mx-3 px-5 py-2.5 rounded-full border border-foreground/10 bg-card/70 text-foreground font-semibold text-sm flex items-center gap-3 transition-all hover:scale-105 hover:border-primary/50 hover:bg-foreground/5 cursor-default shadow-sm group shrink-0"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.name}
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300 dark:brightness-110"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
