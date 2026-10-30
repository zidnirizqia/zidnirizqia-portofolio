"use client";

import React, { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryPhotos = [
  { id: 1, src: "/projects/skripsi-annotated-video.png", title: "Automated Vehicle Tracking", subtitle: "YOLOv8 + Deep SORT Pipeline" },
  { id: 2, src: "/projects/pi-masjo-thumb.png", title: "Mie Ayam Mas Jo Website", subtitle: "Pemesanan & Poin Loyalitas" },
  { id: 3, src: "/projects/skripsi-tracking-system.png", title: "Directional Line Crossing", subtitle: "Antarmuka Flask & Live Counter" },
  { id: 4, src: "/projects/pi-masjo-admin-dashboard.png", title: "Admin Management & Reports", subtitle: "Rekapitulasi Penjualan UMKM" },
  { id: 5, src: "/projects/skripsi-line-setup.png", title: "Interactive Line Calibration", subtitle: "Kanvas Penentuan Garis Hitung" },
  { id: 6, src: "/projects/pi-masjo-points.png", title: "Program Reward Poin", subtitle: "Customer Retention Engineering" },
];

export function PhotoGallery() {
  const slides = galleryPhotos;
  const count = slides.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentPos = useRef(0);
  const targetPos = useRef(0);
  const cardWidthRef = useRef(320);
  const animFrame = useRef<number | null>(null);
  const pointerState = useRef<{
    id: number;
    startX: number;
    pos: number;
    velocity: number;
    time: number;
  } | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const wrapIndex = useCallback(
    (val: number) => {
      if (count === 0) return 0;
      return (Math.round(val) % count + count) % count;
    },
    [count]
  );

  const updateTransforms = useCallback(() => {
    const cardW = cardWidthRef.current;
    if (!cardW || count === 0) return;
    const spacing = cardW * 1.08;
    const current = currentPos.current;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      let offset = idx - current;
      offset = (offset % count + count) % count;
      if (offset > count / 2) offset -= count;

      const absOffset = Math.abs(offset);
      const falloff = Math.pow(absOffset, 0.56);
      const rotateY = Math.min(42 * falloff, 80) * Math.sign(offset);
      const translateZ = -0.7 * cardW * falloff;
      const translateX = offset * spacing;

      card.style.transform = `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) rotateY(${-rotateY}deg)`;
      const opacity = Math.max(0.25, 1 - 0.22 * absOffset);
      card.style.opacity = String(opacity);
      card.style.zIndex = String(100 - Math.round(absOffset * 10));
    });
  }, [count]);

  const animateTo = useCallback(
    (target: number) => {
      if (animFrame.current !== null) cancelAnimationFrame(animFrame.current);
      targetPos.current = target;
      setActiveIndex(wrapIndex(target));

      const step = () => {
        const diff = target - currentPos.current;
        if (Math.abs(diff) < 0.001) {
          currentPos.current = target;
          updateTransforms();
          animFrame.current = null;
          return;
        }
        currentPos.current += diff * 0.14;
        updateTransforms();
        animFrame.current = requestAnimationFrame(step);
      };
      animFrame.current = requestAnimationFrame(step);
    },
    [updateTransforms, wrapIndex]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (animFrame.current !== null) cancelAnimationFrame(animFrame.current);
    e.currentTarget.setPointerCapture(e.pointerId);
    targetPos.current = currentPos.current;
    pointerState.current = {
      id: e.pointerId,
      startX: e.clientX,
      pos: currentPos.current,
      velocity: 0,
      time: performance.now(),
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = pointerState.current;
    if (!state || state.id !== e.pointerId) return;
    const cardW = cardWidthRef.current * 1.08;
    if (!cardW) return;
    const now = performance.now();
    const prev = currentPos.current;
    currentPos.current = state.pos - (e.clientX - state.startX) / cardW;
    state.velocity = ((currentPos.current - prev) / Math.max(now - state.time, 1)) * 1000;
    state.time = now;

    const newIdx = wrapIndex(currentPos.current);
    if (newIdx !== activeIndex) setActiveIndex(newIdx);
    updateTransforms();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = pointerState.current;
    if (!state || state.id !== e.pointerId) return;
    pointerState.current = null;

    const clickDistance = Math.abs(e.clientX - state.startX);
    if (clickDistance < 5) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      
      // If clicked on the left 25% of the gallery
      if (clickX < rect.width * 0.25) {
        animateTo(Math.round(targetPos.current) - 1);
        return;
      } 
      // If clicked on the right 25% of the gallery
      else if (clickX > rect.width * 0.75) {
        animateTo(Math.round(targetPos.current) + 1);
        return;
      }
    }

    const momentum = Math.max(-2, Math.min(2, state.velocity * 0.16));
    animateTo(Math.round(currentPos.current + momentum));
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;
    const cardW = cardWidthRef.current * 1.08;
    if (!cardW) return;
    if (Math.abs(e.deltaX) < 5) return;
    e.preventDefault();
    currentPos.current += (e.deltaX / cardW) * 1.5;
    updateTransforms();
    animateTo(Math.round(currentPos.current));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const updateSize = () => {
      const firstCard = cardRefs.current[0];
      if (firstCard) {
        cardWidthRef.current = firstCard.offsetWidth;
        updateTransforms();
      }
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(container);
    return () => observer.disconnect();
  }, [updateTransforms]);

  return (
    <section className="v3-scope py-16 md:py-24 overflow-hidden relative" id="gallery">
      <div className="text-center pb-8">
        <h2 className="section-label">
          Project Gallery
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-light">
          Drag horizontally or click on the left/right sides to explore project highlights
        </p>
      </div>

      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="3D Coverflow Project Carousel"
        className="w-full relative flex flex-col items-center select-none"
        style={{ ["--cf-card" as any]: "clamp(260px, 30vw, 420px)" }}
      >
        <div
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") animateTo(Math.round(targetPos.current) - 1);
            if (e.key === "ArrowRight") animateTo(Math.round(targetPos.current) + 1);
          }}
          className="cursor-grab active:cursor-grabbing py-10 outline-none w-full"
          style={{
            perspective: "calc(var(--cf-card) * 3)",
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative w-full"
            style={{
              height: "var(--cf-card)",
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${count}`}
                className="absolute left-1/2 top-0 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] will-change-transform group cursor-pointer"
                style={{ width: "var(--cf-card)" }}
                onClick={() => animateTo(idx)}
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  draggable={false}
                  className="h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end">
                  <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {slide.title}
                  </h4>
                  <p className="text-xs text-blue-300 font-medium mt-1">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
