"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AuroraTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  fontSize?: string;
  colors?: {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
  };
  blurAmount?: string;
}

export function AuroraText({
  text,
  className,
  textClassName,
  fontSize = "clamp(2.2rem, 5vw, 4.2rem)",
  colors = {
    first: "bg-cyan-400",
    second: "bg-purple-500",
    third: "bg-sky-400",
    fourth: "bg-indigo-500",
  },
  blurAmount = "blur-xl",
}: AuroraTextProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center overflow-visible",
        className
      )}
    >
      <style>{`
        @keyframes aurora-1 {
          0% { top: 0; right: 0; }
          50% { top: 100%; right: 75%; }
          75% { top: 100%; right: 25%; }
          100% { top: 0; right: 0; }
        }
        @keyframes aurora-2 {
          0% { top: -50%; left: 0%; }
          60% { top: 100%; left: 75%; }
          85% { top: 100%; left: 25%; }
          100% { top: -50%; left: 0%; }
        }
        @keyframes aurora-3 {
          0% { bottom: 0; left: 0; }
          40% { bottom: 100%; left: 75%; }
          65% { bottom: 40%; left: 50%; }
          100% { bottom: 0; left: 0; }
        }
        @keyframes aurora-4 {
          0% { bottom: -50%; right: 0; }
          50% { bottom: 0%; right: 40%; }
          90% { bottom: 50%; right: 25%; }
          100% { bottom: -50%; right: 0; }
        }
        @keyframes aurora-border {
          0% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }
          25% { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; }
          50% { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; }
          75% { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; }
          100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }
        }
      `}</style>
      <div className="relative flex items-center justify-center">
        <div
          className={cn(
            "absolute -inset-2 opacity-50 filter transition-opacity duration-500",
            blurAmount
          )}
        >
          <span
            className={cn(
              "absolute h-28 w-28 rounded-full mix-blend-screen opacity-70",
              colors.first
            )}
            style={{
              animation: "aurora-1 6s ease-in-out infinite alternate, aurora-border 6s ease infinite",
            }}
          />
          <span
            className={cn(
              "absolute h-28 w-28 rounded-full mix-blend-screen opacity-70",
              colors.second
            )}
            style={{
              animation: "aurora-2 7s ease-in-out infinite alternate, aurora-border 6s ease infinite",
            }}
          />
          <span
            className={cn(
              "absolute h-28 w-28 rounded-full mix-blend-screen opacity-70",
              colors.third
            )}
            style={{
              animation: "aurora-3 5s ease-in-out infinite alternate, aurora-border 6s ease infinite",
            }}
          />
          <span
            className={cn(
              "absolute h-28 w-28 rounded-full mix-blend-screen opacity-70",
              colors.fourth
            )}
            style={{
              animation: "aurora-4 8s ease-in-out infinite alternate, aurora-border 6s ease infinite",
            }}
          />
        </div>
        <span
          className={cn(
            "relative z-10 font-extrabold tracking-tight leading-tight select-none",
            textClassName
          )}
          style={{ fontSize }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
