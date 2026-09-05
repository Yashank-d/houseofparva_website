"use client";

import React from "react";
import { motion } from "framer-motion";

interface HomeCanvasProps {
  onNavigate: (pageIndex: number) => void;
}

const ribbon = [
  "Pre-Weddings",
  "Weddings",
  "Intimate",
  "Destination",
  "Photography",
  "Films",
];

export default function HomeCanvas({ onNavigate }: HomeCanvasProps) {
  return (
    <div className="w-full h-full relative overflow-hidden select-none flex flex-col">
      {/* Warm marigold ambience */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 45% at 68% 38%, rgba(201,168,106,0.14) 0%, transparent 65%)" }}
      />

      {/* Still warm ambience, nothing rotating, nothing behind the words */}

      {/* Main editorial row */}
      <div className="flex-1 w-full max-w-6xl mx-auto flex items-center gap-6 md:gap-10 px-4 md:px-8 min-h-0 relative z-10">

        {/* LEFT: words, festive styling */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-[42%] shrink-0"
        >
          <p className="font-scribble text-4xl md:text-5xl text-[#641F27] font-bold leading-none">
            Welcome,
          </p>
          <p className="font-scribble text-2xl md:text-3xl text-[#641F27]/80 leading-tight font-medium mt-1">
            to our corner of timeless love…
          </p>

          <div className="mt-5 space-y-3">
            <span className="flex items-center gap-2 font-sans-utility text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#1C1B18]/70 font-semibold">
              <span className="text-[#C9A86A]">✦</span>
              Wedding Photography & Film
            </span>

            <h1 className="font-serif-editorial text-[#1C1B18] leading-[0.95]">
              <span className="block text-5xl md:text-7xl font-semibold tracking-tight uppercase">Stories</span>
              <span className="block text-5xl md:text-7xl font-light tracking-tight uppercase">we&apos;ve told,</span>
              <span className="mt-2 inline-block text-4xl md:text-6xl italic font-normal lowercase text-[#641F27] border-b-2 border-[#C9A86A]/70 pb-1">
                forever felt.
              </span>
            </h1>

            <p className="font-sans-utility text-sm md:text-[15px] text-[#1C1B18]/75 leading-relaxed max-w-xs">
              Candid moments. Raw emotions. Timeless memories — yours, beautifully captured.
            </p>
          </div>

          <div className="flex items-center gap-5 mt-6">
            <button
              onClick={() => onNavigate(1)}
              className="group px-8 py-3.5 bg-[#641F27] text-[#F5F1E8] font-sans-utility text-[11px] tracking-[0.25em] uppercase font-bold rounded-full shadow-[0_10px_28px_rgba(100,31,39,0.4)] hover:bg-[#2B0F14] transition-colors cursor-pointer flex items-center gap-3"
            >
              View Portfolio
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="font-script text-xl text-[#1C1B18]/60 leading-none hidden sm:block">
              Some stories are<br />meant to be felt.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: original polaroid — burgundy sheet, tape, clip, seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
          whileHover={{ scale: 1.04, rotate: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 h-full max-h-[86vh] flex flex-col items-center justify-center relative"
        >
          <div className="relative w-[min(88%,40vh)] cursor-pointer group">
            {/* Burgundy deckled mat */}
            <div
              className="absolute -inset-3 bg-[#641F27] rotate-[2.5deg] transition-transform duration-700 group-hover:rotate-[3.5deg] overflow-hidden"
              style={{
                clipPath: "polygon(0.8% 1.2%, 98.2% 0.3%, 99.6% 2.8%, 100% 96.8%, 98.1% 99.4%, 1.6% 98.2%, 0.2% 96.5%, 0% 3.5%)",
                boxShadow: "0 16px 32px rgba(100,31,39,0.3)",
              }}
            />

            {/* Washi tape */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-36 h-6 masking-tape z-40 rotate-[-1.5deg]" />

            {/* Temple-inlay frame — full-bleed color, gold corners */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E8DFD0] shadow-2xl">
              <img
                src="https://res.cloudinary.com/fdzu3ih2/image/upload/w_1080,q_auto,f_auto/v1787640290/Indhu_Delivered_Collection.jpg"
                alt="Indhu & Abhinandhan | Parva Weddings"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              {/* Gold inset keyline + temple corners */}
              <div className="absolute inset-3 border border-[#C9A86A]/70 pointer-events-none" />
              <span aria-hidden className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#C9A86A]" />
              <span aria-hidden className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#C9A86A]" />
              <span aria-hidden className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-[#C9A86A]" />
              <span aria-hidden className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-[#C9A86A]" />
              {/* On-photo white caption */}
              <div className="absolute bottom-6 left-0 right-0 text-center px-8 pointer-events-none">
                <p className="font-script text-3xl md:text-4xl text-white leading-none drop-shadow-lg">
                  Indhu & Abhinandhan
                </p>
                <p className="font-sans-utility text-[9.5px] tracking-[0.25em] uppercase text-white/80 mt-1.5">
                  April 19, 2026
                </p>
              </div>
            </div>
            <p className="font-sans-utility text-[9px] tracking-[0.3em] uppercase text-[#1C1B18]/45 mt-4 text-center">
              Fig. 01 — The Golden Hour
            </p>
          </div>
        </motion.div>
      </div>

      {/* Celebration marquee ribbon */}
      <div className="shrink-0 relative z-10 border-t border-[#1C1B18]/10">
        <div className="overflow-hidden py-2.5">
          <div className="flex w-max animate-origins-marquee">
            {[0, 1].map((half) => (
              <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
                {[...ribbon, ...ribbon].map((r, i) => (
                  <span key={`${half}-${i}`} className="flex items-center shrink-0">
                    <span className="font-serif-editorial italic text-base md:text-lg text-[#1C1B18]/65 px-6 whitespace-nowrap">{r}</span>
                    <span className="text-[#C9A86A] text-[10px]">✦</span>
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
