"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutCanvas() {
  return (
    <div className="w-full h-full p-6 md:p-12 flex flex-col justify-between relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center gap-4">
        <span className="font-serif-editorial text-xl italic text-[#641F27]">03</span>
        <span className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#1C1B18]/60">
          ABOUT THE STUDIO & FOUNDER
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Text & Principles */}
        <div className="lg:col-span-6 space-y-5">
          {/* HELLO WE ARE PARVA aligned flush to B in Behind the Lens */}
          <div className="space-y-2">
            <span className="font-sans-utility text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#641F27] font-semibold block pl-[2px]">
              HELLO, WE ARE PARVA
            </span>

            <h2 className="font-serif-editorial text-4xl md:text-6xl uppercase leading-[1.02] text-[#1C1B18]">
              Behind the lens, <br />
              beyond the <br />
              <span className="text-[#641F27] italic">moments.</span>
            </h2>
          </div>

          <p className="font-sans-utility text-xs md:text-sm text-[#1C1B18]/80 leading-relaxed font-light max-w-lg">
            We are wedding photographers and filmmakers who believe in capturing life as it naturally unfolds. No forced poses. No staged smiles. Just real moments, raw emotions, and storytelling that feels authentically yours.
          </p>

          <p className="font-script text-2xl text-[#641F27]">
            "This is more than our work, it's our way of seeing love."
          </p>

          {/* Dark Emerald Swatch: What Drives Us */}
          <div className="bg-[#12352C] text-[#F5F1E8] p-5 rounded-xs shadow-md space-y-3 border border-[#F5F1E8]/10 max-w-lg">
            <span className="font-sans-utility text-[9px] tracking-[0.3em] uppercase text-[#CFA4A5] font-semibold block">
              WHAT DRIVES US
            </span>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <span className="font-sans-utility text-[10px] font-semibold block text-[#F5F1E8]">Connection</span>
                <p className="font-sans-utility text-[9px] text-[#F5F1E8]/70 leading-normal">
                  Real is beautiful. We look for in-between glances.
                </p>
              </div>

              <div>
                <span className="font-sans-utility text-[10px] font-semibold block text-[#F5F1E8]">Aesthetic</span>
                <p className="font-sans-utility text-[9px] text-[#F5F1E8]/70 leading-normal">
                  Timeless, minimal and honest light.
                </p>
              </div>

              <div>
                <span className="font-sans-utility text-[10px] font-semibold block text-[#F5F1E8]">Experience</span>
                <p className="font-sans-utility text-[9px] text-[#F5F1E8]/70 leading-normal">
                  From intimate rituals to wild celebrations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Founder Polaroid & Handwritten Scraps */}
        <div className="lg:col-span-6 relative hidden lg:block">
          <div className="relative w-full max-w-md mx-auto">
            {/* Torn Burgundy Swatch behind */}
            <div className="absolute -top-6 -left-6 w-44 h-64 bg-[#641F27] rounded-xs shadow-md rotate-[-6deg]" />

            {/* Main Founder Polaroid */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-[#F5F1E8] p-5 pb-6 rounded-xs scrapbook-shadow rotate-[1deg] relative z-20"
            >
              {/* Masking Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 masking-tape z-30" />

              <div className="aspect-[4/5] w-full overflow-hidden bg-[#E8DFD0] mb-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                  alt="Yashank D. - Founder"
                  className="w-full h-full object-cover grayscale opacity-95"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <p className="font-script text-2xl text-[#1C1B18]">Yashank D.</p>
                  <p className="font-sans-utility text-[9px] tracking-[0.2em] text-[#1C1B18]/60 uppercase">
                    FOUNDER / PHOTOGRAPHER
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full border border-dashed border-[#1C1B18]/40 flex flex-col items-center justify-center text-[6px] font-sans-utility tracking-tighter text-[#1C1B18]/70">
                  <span>PARVA</span>
                  <span>2026</span>
                </div>
              </div>
            </motion.div>

            {/* Right Handwritten Note Scrap with Paperclip */}
            <div className="absolute -right-8 top-12 z-30 bg-[#E8DFD0] p-4 max-w-xs rounded-xs shadow-md border border-[#1C1B18]/10 rotate-[5deg]">
              <div className="absolute -top-3 right-4 w-3 h-8 border-2 border-[#1C1B18]/50 rounded-full z-40" />
              <p className="font-script text-base text-[#1C1B18]/90 leading-snug">
                I chase the unspoken words, the chaos, the calm and everything that makes your story uniquely yours.
              </p>
              <span className="font-script text-sm text-[#641F27] block text-right mt-1">- Y</span>
            </div>

            {/* Bottom Location Scrap */}
            <div className="absolute -bottom-6 -right-4 z-30 bg-[#F5F1E8] p-4 max-w-xs rounded-xs shadow-md border border-[#1C1B18]/10 rotate-[-2deg]">
              <span className="font-sans-utility text-[8px] tracking-[0.2em] uppercase text-[#641F27] block font-semibold mb-1">
                CURRENTLY
              </span>
              <p className="font-script text-sm text-[#1C1B18]/80 leading-tight">
                Based in Bengaluru. Available wherever your story takes me.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote Bar */}
      <div className="border-t border-[#1C1B18]/10 pt-3 flex justify-between items-center text-[#1C1B18]/60 font-sans-utility text-[10px] tracking-[0.2em] uppercase">
        <span>PARVA WEDDINGS • BANGALORE</span>
        <span className="font-serif-editorial italic text-[#641F27] text-sm font-medium">"I don't just take pictures. I preserve the way it felt."</span>
      </div>
    </div>
  );
}
