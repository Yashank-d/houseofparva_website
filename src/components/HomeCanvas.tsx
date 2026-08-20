"use client";

import React from "react";
import { motion } from "framer-motion";

interface HomeCanvasProps {
  onNavigate: (pageIndex: number) => void;
}

export default function HomeCanvas({ onNavigate }: HomeCanvasProps) {
  return (
    <div className="w-full h-full p-4 md:p-6 flex flex-col justify-center items-center relative overflow-hidden select-none">
      
      {/* Editorial Scrapbook Composition Container */}
      <div className="w-full max-w-6xl h-[88vh] relative flex items-center justify-between">

        {/* LEFT COLUMN: Editorial Typography & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-[36%] md:w-[34%] z-20 space-y-6 md:space-y-8 relative -ml-8 md:-ml-14"
        >
          {/* Scribbled Audience Welcome Note */}
          <motion.div
            initial={{ opacity: 0, y: -15, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="absolute -top-40 sm:-top-44 left-0 z-40 pointer-events-none space-y-0.5 whitespace-nowrap min-w-[480px]"
          >
            <p className="font-scribble text-6xl sm:text-7xl md:text-[4.5rem] text-[#641F27] leading-none font-bold tracking-wide">
              Welcome,
            </p>
            <p className="font-scribble text-3xl sm:text-4xl md:text-[2.6rem] text-[#641F27]/90 leading-tight font-medium">
              to our corner of timeless love…
            </p>
          </motion.div>

          <div className="relative z-20 space-y-2.5 pt-4">
            <span className="font-sans-utility text-xs md:text-sm tracking-[0.3em] uppercase text-[#1C1B18]/75 font-semibold block">
              WEDDING PHOTOGRAPHY & FILM
            </span>

            <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tight uppercase text-[#1C1B18] leading-[0.92]">
              Stories <br />
              we've told, <br />
              <span className="text-[#641F27] lowercase italic font-normal">
                forever felt.
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <div className="relative z-20 font-sans-utility text-sm md:text-base text-[#1C1B18]/80 leading-relaxed font-normal space-y-1 max-w-sm">
            <p>Candid moments. Raw emotions.</p>
            <p>Timeless memories.</p>
            <p>Yours, beautifully captured.</p>
          </div>

          {/* View Portfolio CTA */}
          <div className="relative z-20 pt-3">
            <button
              onClick={() => onNavigate(1)}
              className="group inline-flex items-center gap-3 font-script text-3xl md:text-4xl text-[#1C1B18] hover:text-[#641F27] transition-colors relative cursor-pointer"
            >
              <span className="border-b-2 border-[#641F27] pb-1">View Portfolio</span>
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </motion.div>

        {/* CENTERPIECE: LARGER HERO POLAROID & BURGUNDY BACKING SHEET */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
          whileHover={{ scale: 1.06, rotate: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-[48%] md:w-[44%] max-w-lg mx-auto cursor-pointer group"
        >
          {/* Metallic Paperclip Pin on Top Left Corner of Polaroid */}
          <div className="absolute -top-4 left-6 w-4 h-9 border-2 border-[#1C1B18]/70 rounded-full z-50 shadow-md rotate-[-12deg]" />

          {/* Burgundy Torn-Paper Sheet BEHIND Polaroid */}
          <div 
            className="absolute -top-3 -right-5 w-[104%] h-[104%] bg-[#641F27] rounded-xs rotate-[3.5deg] shadow-xl transition-transform duration-700 group-hover:rotate-[4.5deg]"
            style={{
              clipPath: "polygon(0% 2%, 96% 0%, 100% 95%, 98% 100%, 3% 97%, 0% 5%)",
            }}
          />

          {/* Translucent Washi Masking Tape at Top Center */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-36 h-6 masking-tape z-40 rotate-[-1.5deg]" />

          {/* Main Polaroid Frame */}
          <div className="relative bg-[#F5F1E8] p-5 md:p-6 pb-16 rounded-xs scrapbook-shadow border border-[#1C1B18]/10 rotate-[-0.5deg] shadow-2xl">
            {/* Photo using Home_page_image.jpg */}
            <div className="aspect-[4/5] w-full overflow-hidden bg-[#E8DFD0] rounded-xs shadow-inner">
              <img
                src="/Assets/Home_page_image.jpg"
                alt="Ashwathy & Abheek | Parva Weddings"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>

            {/* Handwritten Polaroid Caption & Date */}
            <div className="absolute bottom-3 left-6 right-6 flex justify-between items-end">
              <div className="space-y-0.5">
                <p className="font-script text-2xl md:text-3xl text-[#1C1B18]">
                  Ashwathy & Abheek
                </p>
                <p className="font-sans-utility text-[9.5px] tracking-[0.2em] uppercase text-[#1C1B18]/60">
                  June 13, 2026
                </p>
              </div>
            </div>

            {/* Official Parva Seal Image (/Assets/seal/parva_seal.png) Shifted 5px Higher */}
            <div className="absolute -bottom-3 -right-5 z-30 pointer-events-none">
              <img
                src="/Assets/seal/parva_seal.png"
                alt="Parva Seal"
                className="w-24 h-24 md:w-28 md:h-28 object-contain filter drop-shadow-md rotate-[-15deg] mix-blend-multiply opacity-90"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Handwritten Story & Lower Right Paperclipped Note */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-[26%] md:w-[24%] z-20 flex flex-col justify-between h-full py-4 space-y-6 pl-2"
        >
          {/* Top Right: Handwritten Wedding Story */}
          <div className="space-y-3 pt-4">
            <p className="font-script text-lg md:text-xl text-[#1C1B18]/90 leading-relaxed max-w-[260px]">
              Ashwathy and Abheek dancing within the fields outside the little white chapel they just eloped to. Her bouquet made of sun bunched wildflowers she found before the ceremony, and his boutoniere a few of her favorite stems from her own.
            </p>
            <span className="font-script text-base text-[#641F27] block text-right pr-2">
              - AN
            </span>
          </div>

          {/* Lower Right: Paperclipped Scrap Note (Enlarged & Signed - Parva) */}
          <div className="relative bg-[#E8DFD0] p-5 pt-6 rounded-xs shadow-lg border border-[#1C1B18]/15 rotate-[-3deg] max-w-[260px] ml-auto mb-2">
            {/* Metal Paperclip Pin */}
            <div className="absolute -top-3.5 right-5 w-4 h-9 border-2 border-[#1C1B18]/70 rounded-full z-30 shadow-xs" />
            <p className="font-script text-lg md:text-xl text-[#1C1B18] leading-snug">
              Some stories are meant to be felt, not just seen.
            </p>
            <span className="font-script text-base md:text-lg text-[#641F27] block text-right mt-2 font-medium">
              - Parva
            </span>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
