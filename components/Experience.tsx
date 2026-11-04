"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Education and Experience"
      className="v3-scope pb-10 text-foreground relative px-[5%] sm:px-[5%] lg:px-[10%]"
    >
      <div className="w-full mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-xl font-bold text-white mb-5">
              Education
            </h3>
            <div className="space-y-4">
              <div className="group rounded-2xl px-6 py-5 flex items-center gap-4 bg-slate-800/40 hover:bg-slate-800/70 border border-white/10 transition-colors duration-200">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 relative flex items-center justify-center">
                  <Image
                    src="/images/gunadarma-logo.png"
                    alt="Universitas Gunadarma Logo"
                    width={56}
                    height={56}
                    className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-white leading-snug">
                    Universitas Gunadarma
                  </p>
                  <p className="text-sm mt-0.5 text-v3-muted">
                    Informatics | Faculty of Industrial Technology
                  </p>
                  <p className="text-sm mt-1 font-medium text-blue-300">
                    2022 – 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-xl font-bold text-white mb-5">
              Experience
            </h3>
            <div className="space-y-4">
              <div className="group rounded-2xl px-6 py-5 flex items-center gap-4 bg-slate-800/40 hover:bg-slate-800/70 border border-white/10 transition-colors duration-200">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 relative flex items-center justify-center">
                  <Image
                    src="/images/labamen-logo-transparent.png"
                    alt="Laboratorium Akuntansi Menengah Logo"
                    width={56}
                    height={56}
                    className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-white leading-snug">
                    Laboratorium Akuntansi Menengah
                  </p>
                  <p className="text-sm mt-0.5 text-v3-muted">
                    Programmer
                  </p>
                  <p className="text-sm mt-1 font-medium text-blue-300">
                    2024 – 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
