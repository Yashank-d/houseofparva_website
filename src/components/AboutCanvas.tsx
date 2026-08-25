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

          <div className="relative">
            <p className="font-serif-editorial italic text-[18px] md:text-[19px] leading-snug text-[#1C1B18]">
              “This is more than our work,<br />
              <span className="text-[#641F27]">it’s our way of seeing love.”</span>
            </p>
            <div className="flex items-center gap-2 mt-2.5">
              <div className="h-px w-8 bg-[#C9A86A]/40" />
              <span className="text-[#C9A86A]/50 text-[9px]">❦</span>
            </div>
          </div>

          {/* Premium Emerald Atelier Card */}
          <div className="relative bg-[#12352C] text-[#F5F1E8] p-6 md:p-7 rounded-xs shadow-[0_14px_36px_rgba(0,0,0,0.22)] border border-[#C9A86A]/15 max-w-lg overflow-hidden">
            <div className="absolute inset-0 paper-bg-emerald opacity-[0.05] pointer-events-none" />
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/25 to-transparent pointer-events-none" />
            <span className="font-sans-utility text-[8px] tracking-[0.34em] uppercase text-[#C9A86A] font-semibold block mb-5">
              WHAT DRIVES US
            </span>

            <div className="grid grid-cols-3 gap-5 divide-x divide-[#F5F1E8]/10">
              <div className="pr-4">
                <div className="w-7 h-7 rounded-full border border-[#C9A86A]/25 bg-white/[0.04] flex items-center justify-center mb-3 text-[#C9A86A]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-6.5-4.3-9-9A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9 7c-2.5 4.7-9 9-9 9z" /></svg>
                </div>
                <span className="font-serif-editorial text-[13px] tracking-wide text-[#F5F1E8] block">Connection</span>
                <p className="font-sans-utility text-[11px] leading-[1.6] text-[#F5F1E8]/60 mt-1">
                  Real is beautiful. We look for in-between glances.
                </p>
              </div>

              <div className="px-4">
                <div className="w-7 h-7 rounded-full border border-[#C9A86A]/25 bg-white/[0.04] flex items-center justify-center mb-3 text-[#C9A86A]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="2.6" /></svg>
                </div>
                <span className="font-serif-editorial text-[13px] tracking-wide text-[#F5F1E8] block">Aesthetic</span>
                <p className="font-sans-utility text-[11px] leading-[1.6] text-[#F5F1E8]/60 mt-1">
                  Timeless, minimal and honest light.
                </p>
              </div>

              <div className="pl-4">
                <div className="w-7 h-7 rounded-full border border-[#C9A86A]/25 bg-white/[0.04] flex items-center justify-center mb-3 text-[#C9A86A]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" /></svg>
                </div>
                <span className="font-serif-editorial text-[13px] tracking-wide text-[#F5F1E8] block">Experience</span>
                <p className="font-sans-utility text-[11px] leading-[1.6] text-[#F5F1E8]/60 mt-1">
                  From intimate rituals to wild celebrations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Photo Section — Two Portraits (reference) — enlarged */}
        <div className="lg:col-span-6 relative hidden lg:block">
          <div className="relative w-full max-w-[620px] mx-auto flex gap-7 lg:gap-9 items-start">
            {/* Yashank */}
            <div className="flex-1">
              <div className="aspect-[4/5.6] w-full overflow-hidden bg-[#E8DFD0]">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85"
                  alt="Yashank D."
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="text-center mt-5">
                <p className="font-serif-editorial text-[19px] tracking-[0.02em] text-[#1C1B18]">Yashank D.</p>
                <p className="font-sans-utility text-[9px] tracking-[0.22em] uppercase text-[#1C1B18]/55 mt-1.5">FOUNDER & PHOTOGRAPHER</p>
                <div className="h-px w-11 bg-[#C9A86A]/45 mx-auto mt-2.5" />
              </div>
            </div>

            {/* P / O monogram */}
            <div className="absolute left-1/2 top-[38%] -translate-x-1/2 flex flex-col items-center pointer-events-none select-none">
              <span className="font-serif-editorial text-[20px] leading-none text-[#C9A86A]">P</span>
              <span className="w-6 h-px bg-[#C9A86A]/50 rotate-[-32deg] my-1" />
              <span className="font-serif-editorial text-[20px] leading-none text-[#C9A86A]">O</span>
            </div>

            {/* Devika */}
            <div className="flex-1">
              <div className="aspect-[4/5.6] w-full overflow-hidden bg-[#E8DFD0]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"
                  alt="Devika Y."
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="text-center mt-5">
                <p className="font-serif-editorial text-[19px] tracking-[0.02em] text-[#1C1B18]">Devika Y.</p>
                <p className="font-sans-utility text-[9px] tracking-[0.22em] uppercase text-[#1C1B18]/55 mt-1.5">FOUNDER & CREATIVE DIRECTOR</p>
                <div className="h-px w-11 bg-[#C9A86A]/45 mx-auto mt-2.5" />
              </div>
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
