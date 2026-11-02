"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

const LA = 3000;
const VA = 0.92;
const OA = 0;
const Rg = 1;

interface LanyardSvgProps {
  length: number;
  color?: string;
}

export const LanyardSvg: React.FC<LanyardSvgProps> = ({ length: n, color: a }) => {
  const l = n;
  const r = n + 10;
  const c = n + 18;
  return (
    <svg
      width="44"
      height={n + 38}
      viewBox={`0 0 44 ${n + 38}`}
      style={{ display: "block", margin: "0 auto", overflow: "visible" }}
    >
      <defs>
        <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#71717a" />
          <stop offset="35%" stopColor="#27272a" />
          <stop offset="70%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>
        <linearGradient id="hookDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#52525b" />
          <stop offset="40%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#3f3f46" />
        </linearGradient>
        <linearGradient id="strapHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="75%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect x="12" y="0" width="20" height={l + 4} rx="2" fill={a || "#27272a"} />
      <rect x="12" y="0" width="20" height={l + 4} rx="2" fill="url(#strapHighlight)" />
      <line
        x1="13.5"
        y1="0"
        x2="13.5"
        y2={l + 4}
        stroke="#ffffff"
        strokeOpacity="0.15"
        strokeWidth="0.75"
        strokeDasharray="3 2"
      />
      <line
        x1="30.5"
        y1="0"
        x2="30.5"
        y2={l + 4}
        stroke="#ffffff"
        strokeOpacity="0.15"
        strokeWidth="0.75"
        strokeDasharray="3 2"
      />
      <rect
        x="10"
        y={l}
        width="24"
        height="10"
        rx="2.5"
        fill="url(#metalDark)"
        stroke="#18181b"
        strokeWidth="0.8"
      />
      <circle cx="13.5" cy={l + 5} r="1.3" fill="#a1a1aa" />
      <circle cx="30.5" cy={l + 5} r="1.3" fill="#a1a1aa" />
      <path
        d={`M 15 ${l + 9} C 15 ${r + 6}, 29 ${r + 6}, 29 ${l + 9}`}
        fill="none"
        stroke="url(#metalDark)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="19" y={r + 2} width="6" height="6" rx="1" fill="url(#metalDark)" />
      <path
        d={`M 20 ${r + 7} 
           L 20 ${c + 6} 
           C 20 ${c + 15}, 24 ${c + 15}, 24 ${c + 6} 
           L 24 ${r + 7}`}
        fill="none"
        stroke="url(#hookDark)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line
        x1="20.5"
        y1={c + 1}
        x2="20.5"
        y2={c + 10}
        stroke="#d4d4d8"
        strokeWidth="1.2"
      />
    </svg>
  );
};

interface LanyardCardProps {
  ropeLength?: number;
  ropeColor?: string;
  cardWidth?: string;
  className?: string;
}

export function LanyardCard({
  ropeLength = 75,
  ropeColor = "#27272a",
  cardWidth = "w-72 sm:w-80 md:w-84",
  className,
}: LanyardCardProps) {
  const physics = useRef({ angle: 0, vel: 0 });
  const animFrame = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);
  const lastAngle = useRef(0);
  const isDragging = useRef(false);
  const [angle, setAngle] = useState(0);
  const [, setRerender] = useState(false);
  const dragStartX = useRef(0);
  const dragStartAngle = useRef(0);

  const step = useCallback(
    (time: number) => {
      if (lastTime.current === null) lastTime.current = time;
      const dt = Math.min((time - lastTime.current) / 1000, 0.05);
      lastTime.current = time;
      const cur = physics.current;

      if (isDragging.current) {
        if (dt > 0) cur.vel = (cur.angle - lastAngle.current) / dt;
        lastAngle.current = cur.angle;
        animFrame.current = requestAnimationFrame(step);
      } else {
        const effLen = ropeLength + 100;
        const accel =
          -(LA / effLen) * Math.sin(cur.angle) -
          (VA / Rg) * cur.vel -
          (OA / Rg) * cur.angle;
        cur.vel += accel * dt;
        cur.angle += cur.vel * dt;
        setAngle(cur.angle);

        if (Math.abs(cur.angle) > 0.001 || Math.abs(cur.vel) > 0.001) {
          animFrame.current = requestAnimationFrame(step);
        } else {
          cur.angle = 0;
          cur.vel = 0;
          setAngle(0);
        }
      }
    },
    [ropeLength]
  );

  const startAnimation = useCallback(() => {
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    lastTime.current = null;
    animFrame.current = requestAnimationFrame(step);
  }, [step]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      isDragging.current = true;
      setRerender(true);
      dragStartX.current = e.clientX;
      dragStartAngle.current = physics.current.angle;
      lastAngle.current = physics.current.angle;
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      lastTime.current = null;
      animFrame.current = requestAnimationFrame(step);
    },
    [step]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return;
      const dx = e.clientX - dragStartX.current;
      const effLen = ropeLength + 100;
      const nextAngle = dragStartAngle.current - dx / effLen;
      const clamped = Math.max(-1.4, Math.min(1.4, nextAngle));
      physics.current.angle = clamped;
      setAngle(clamped);
    },
    [ropeLength]
  );

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    isDragging.current = false;
    setRerender(false);
  }, []);

  const onClick = useCallback(() => {
    if (
      Math.abs(physics.current.vel) < 0.1 &&
      Math.abs(physics.current.angle) < 0.05
    ) {
      physics.current.vel = 4;
      startAnimation();
    }
  }, [startAnimation]);

  useEffect(() => {
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  const deg = angle * (180 / Math.PI);

  // Computed random bars for authentic barcode display
  const barcodeBars = [
    { w: "3.5px", h: "50%" },
    { w: "1px", h: "94%" },
    { w: "2px", h: "65%" },
    { w: "1px", h: "12%" },
    { w: "3.5px", h: "22%" },
    { w: "1px", h: "80%" },
    { w: "2px", h: "88%" },
    { w: "1px", h: "34%" },
    { w: "3.5px", h: "60%" },
    { w: "1px", h: "52%" },
    { w: "2px", h: "95%" },
    { w: "1px", h: "64%" },
    { w: "3.5px", h: "70%" },
    { w: "1px", h: "23%" },
    { w: "2px", h: "81%" },
    { w: "1px", h: "88%" },
    { w: "3.5px", h: "32%" },
    { w: "1px", h: "65%" },
    { w: "2px", h: "53%" },
    { w: "1px", h: "95%" },
    { w: "3.5px", h: "62%" },
    { w: "1px", h: "40%" },
    { w: "2px", h: "24%" },
    { w: "1px", h: "82%" },
    { w: "3.5px", h: "87%" },
    { w: "1px", h: "31%" },
    { w: "2px", h: "67%" },
    { w: "1px", h: "55%" },
    { w: "3.5px", h: "95%" },
    { w: "1px", h: "61%" },
    { w: "2px", h: "28%" },
    { w: "1px", h: "25%" },
    { w: "3.5px", h: "83%" },
    { w: "1px", h: "86%" },
    { w: "2px", h: "29%" },
    { w: "1px", h: "70%" },
  ];

  return (
    <div className={cn("flex flex-col items-center select-none", className)} style={{ touchAction: "none" }}>
      {/* Wall Hook Mount */}
      <div className="w-3.5 h-3.5 rounded-full shadow-md z-10 relative bg-zinc-900 border border-zinc-700" />

      {/* Swinging Pendulum Wrapper */}
      <div
        className="flex flex-col items-center cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onClick={onClick}
        style={{
          transform: `rotate(${deg}deg)`,
          transformOrigin: "top center",
          willChange: "transform",
          marginTop: "-6px",
        }}
      >
        <div style={{ pointerEvents: "none" }}>
          <LanyardSvg length={ropeLength} color={ropeColor} />
        </div>

        {/* ID Card Holder */}
        <div
          className={cn(
            "relative rounded-[1.75rem] overflow-hidden shadow-2xl border border-foreground/15 dark:border-white/15 bg-card pointer-events-none mt-[-16px]",
            cardWidth
          )}
        >
          {/* Lanyard Hole Clip Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <div className="w-9 h-2.5 rounded-full bg-black/70 dark:bg-black/90 border border-white/30 shadow-inner flex items-center justify-center">
              <div className="w-7 h-1 rounded-full bg-zinc-950 opacity-90" />
            </div>
          </div>

          <div className="flex flex-col h-full bg-card w-full">
            {/* Upper Card Header with Avatar */}
            <div className="relative px-5 pt-7 pb-6 flex flex-col items-center bg-gradient-to-br from-purple-700 via-primary to-indigo-950 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
              <div className="mt-1 relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-primary to-purple-400 backdrop-blur-md shadow-2xl border border-white/50 overflow-hidden group">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                  <img
                    alt="Zidni Khaerur Rizqia"
                    className="w-full h-full object-cover filter contrast-105"
                    loading="eager"
                    src="/profile.png"
                    onError={(e) => {
                      // Fallback avatar if local image not found yet
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Card Details */}
            <div className="p-5 flex flex-col items-center text-center bg-card text-card-foreground flex-1 gap-3">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-foreground">
                  Zidni Khaerur Rizqia
                </h3>
                <div className="inline-flex items-center gap-1 mt-1 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                  <span>Informatics Graduate · IT Support &amp; Web Development</span>
                </div>
              </div>

              {/* Specialty */}
              <div className="w-full text-left bg-muted/40 p-3 rounded-xl border border-border/50">
                <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold mb-1.5">
                  Focus Areas
                </span>
                <div className="flex flex-col gap-0">
                  <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wide text-center">
                    IT SUPPORT · WEB DEVELOPMENT · COMPUTER VISION
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 divide-x divide-muted-foreground/20 w-full bg-muted/40 p-1.5 rounded-xl border border-border/50">
                <div className="text-center px-1">
                  <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold mb-0.5">
                    Location
                  </span>
                  <span className="font-bold text-foreground text-xs whitespace-nowrap">
                    Jakarta, ID
                  </span>
                </div>
                <div className="text-center px-1">
                  <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold mb-0.5">
                    Experience
                  </span>
                  <span className="font-bold text-foreground text-xs whitespace-nowrap">
                    Fresh Grad
                  </span>
                </div>
                <div className="text-center px-1">
                  <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold mb-0.5">
                    Status
                  </span>
                  <span className="font-bold text-emerald-500 text-xs flex items-center justify-center gap-1">
                    ● Available
                  </span>
                </div>
              </div>

              {/* Barcode & Code */}
              <div className="flex flex-col items-center mt-1 w-full gap-1">
                <div className="flex gap-[2.5px] items-end h-7 px-3 py-0.5 bg-white/90 dark:bg-black/40 rounded-lg border border-border/40 w-full justify-center">
                  {barcodeBars.map((bar, idx) => (
                    <div
                      key={idx}
                      className="bg-foreground rounded-[1px]"
                      style={{ width: bar.w, height: bar.h }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center w-full px-1 text-[10px]">
                  <span className="font-mono font-bold tracking-widest text-primary">
                    ZKR-2026-DEV
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
