"use client";

import React from "react";
import { motion } from "framer-motion";

interface OriginsHomeCanvasProps {
  onNavigate: (pageIndex: number) => void;
}

const ribbon = [
  "Naming Ceremonies",
  "Housewarmings",
  "Poojas",
  "Baby Showers",
  "Family Sessions",
];

export default function OriginsHomeCanvas({ onNavigate }: OriginsHomeCanvasProps) {
  return (
    <div className="w-full h-full relative overflow-hidden select-none flex flex-col">
      {/* Ambient glow + grain light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 72% 40%, rgba(201,168,106,0.14) 0%, transparent 65%)" }}
      />

      {/* Main editorial row */}
      <div className="flex-1 w-full max-w-6xl mx-auto flex items-center gap-6 md:gap-10 px-4 md:px-8 min-h-0 relative z-10">

        {/* LEFT: stacked headline, pill CTA */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-[42%] shrink-0 space-y-5"
        >
          <p className="font-scribble text-4xl md:text-5xl text-[#2B0F14] font-bold leading-none">
            Welcome,
          </p>

          <div className="space-y-3">
            <span className="flex items-center gap-2 font-sans-utility text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#1C1B18]/70 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
              Family Photography & Films
            </span>

            <h1 className="font-serif-editorial text-[#1C1B18] leading-[0.95]">
              <span className="block text-5xl md:text-7xl font-medium tracking-tight uppercase">Beginnings</span>
              <span className="block text-5xl md:text-7xl font-light tracking-tight uppercase">we&apos;ve kept,</span>
              <span className="block text-4xl md:text-6xl italic font-normal lowercase text-[#2B0F14] mt-1">
                forever cherished.
              </span>
            </h1>

            <div className="h-px w-24 bg-[#C9A86A]/60" />

            <p className="font-sans-utility text-sm md:text-[15px] text-[#1C1B18]/75 leading-relaxed max-w-xs">
              Tiny toes. Warm homes. Beautiful beginnings — yours, gently preserved.
            </p>
          </div>

          <div className="flex items-center gap-5 pt-1">
            <button
              onClick={() => onNavigate(1)}
              className="group px-8 py-3.5 bg-[#2B0F14] text-[#F5EED5] font-sans-utility text-[11px] tracking-[0.25em] uppercase rounded-full shadow-[0_10px_28px_rgba(43,15,20,0.35)] hover:bg-[#641F27] transition-colors cursor-pointer flex items-center gap-3"
            >
              View Stories
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="font-script text-xl text-[#1C1B18]/60 leading-none">
              Every family<br />has a first page.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: arch frame — the doorway to beginnings */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 h-full max-h-[86vh] flex items-center justify-center relative"
        >
          {/* Offset velvet arch echo */}
          <div
            aria-hidden
            className="absolute h-[94%] aspect-[3/4.1] translate-x-5 translate-y-3 bg-[#2B0F14] rounded-t-[999px] rounded-b-[28px] rotate-[2deg]"
            style={{ boxShadow: "0 18px 40px rgba(43,15,20,0.3)" }}
          />
          {/* Cream arch mat */}
          <div className="relative h-[94%] aspect-[3/4.1] bg-[#F5F1E8] rounded-t-[999px] rounded-b-[28px] scrapbook-shadow border border-[#1C1B18]/10 p-4 md:p-5 rotate-[-1deg]">
            {/* Washi tape crown */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 masking-tape z-20 rotate-[1.5deg]" />
            {/* Inner sanctuary — first family frame */}
            <div className="w-full h-full rounded-t-[999px] rounded-b-[18px] bg-[#E8DFD0] overflow-hidden relative ring-1 ring-[#C9A86A]/30">
              <img
                src="/Assets/OriginsHero_1600.jpg"
                alt="Parva Origins — family celebration"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-0 right-0 text-center px-6">
                <p className="font-script text-2xl md:text-[1.7rem] text-white leading-none drop-shadow">
                  The First Chapter
                </p>
                <p className="font-sans-utility text-[9px] tracking-[0.3em] uppercase text-white/70 mt-1.5">
                  Origins • Family & Beginnings
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom celebration marquee ribbon — 4 identical copies, -50% loop, no seam */}
      <div className="shrink-0 relative z-10 border-t border-[#1C1B18]/10 mt-2">
        <div className="overflow-hidden py-3">
          <div className="flex w-max animate-origins-marquee">
            {[0, 1].map((half) => (
              <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
                {[...ribbon, ...ribbon].map((r, i) => (
                  <span key={`${half}-${i}`} className="flex items-center shrink-0">
                    <span className="font-serif-editorial italic text-lg md:text-xl text-[#1C1B18]/70 px-6 whitespace-nowrap">{r}</span>
                    <span className="text-[#C9A86A] text-xs">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
