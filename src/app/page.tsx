"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HouseOfParvaGateway() {
  return (
    <div className="w-screen h-screen overflow-hidden paper-bg-parchment text-[#1C1B18] flex flex-col justify-between relative font-sans selection:bg-[#641F27] selection:text-[#F5F1E8] select-none">

      {/* Top Utility Header Bar */}
      <header className="w-full py-2.5 px-8 md:px-16 flex justify-between items-center relative z-40 flex-shrink-0">
        <div className="flex items-center gap-3">
          <img
            src="/Parva_logo.svg"
            alt="Parva Logo"
            className="w-26 md:w-32 h-auto filter drop-shadow-xs"
          />
          <div className="h-3.5 w-px bg-[#1C1B18]/20 hidden sm:block" />
          <span className="font-sans-utility text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#1C1B18]/60 hidden sm:inline font-medium">
            FINE ART & STORYTELLING HOUSE
          </span>
        </div>

        <div className="font-sans-utility text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#641F27] font-semibold">
          THE HOUSE OF PARVA
        </div>
      </header>

      {/* Main Center Gateway Area: Pushed Higher to Top */}
      <main className="w-full max-w-6xl lg:max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-start items-center relative z-20 pt-1 md:pt-2 pb-4 overflow-y-auto">
        
        {/* Header Section (Pushed Higher to Top) */}
        <div className="w-full text-center relative z-40 space-y-1.5 md:space-y-2 pt-0 pb-3">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans-utility text-xs md:text-sm tracking-[0.38em] uppercase text-[#641F27] font-semibold block"
          >
            WELCOME TO
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-[0.08em] md:tracking-[0.1em] text-[#1C1B18] font-normal leading-none whitespace-nowrap"
          >
            THE HOUSE OF PARVA
          </motion.h1>

          {/* Ornamental Flourish Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex items-center justify-center gap-4 py-0.5 max-w-sm mx-auto"
          >
            <div className="h-px bg-[#641F27]/30 flex-1 max-w-[120px]" />
            <span className="text-[#641F27] text-xs md:text-sm">❦</span>
            <div className="h-px bg-[#641F27]/30 flex-1 max-w-[120px]" />
          </motion.div>

          {/* Category Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans-utility text-[10.5px] md:text-xs lg:text-sm tracking-[0.34em] uppercase text-[#641F27] font-semibold"
          >
            PHOTOGRAPHY & FILMS • WEDDINGS • FAMILY • STORIES
          </motion.div>

          {/* Italic Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif-editorial text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1C1B18]/90 italic font-light pt-0.5"
          >
            Two worlds, one belief – every story deserves to be remembered beautifully.
          </motion.p>
        </div>

        {/* Two Physical Paper Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-stretch max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full relative pt-2">
          
          {/* LEFT CARD: PARVA ORIGINS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#F5F1E8] p-7 md:p-10 lg:p-11 rounded-xs border border-[#1C1B18]/15 flex flex-col justify-between items-center text-center shadow-xl transition-all duration-500"
            style={{
              boxShadow: "0 12px 36px -6px rgba(28, 27, 24, 0.14), 0 2px 6px rgba(28, 27, 24, 0.05)",
            }}
          >
            {/* Washi Masking Tape Accent on Top Left */}
            <div className="absolute -top-4 left-10 w-32 h-6.5 masking-tape z-30 rotate-[-2deg]" />

            {/* Double Border Frame Line Effect */}
            <div className="absolute inset-2.5 md:inset-3.5 border border-[#1C1B18]/12 pointer-events-none rounded-xs" />

            <div className="w-full flex flex-col items-center space-y-4.5 relative z-10 pt-1">
              
              {/* Monogram Logo */}
              <div className="w-20 md:w-24 lg:w-26 h-auto flex items-center justify-center">
                <img
                  src="/Assets/Brands/Asset 29.svg"
                  alt="Parva Origins Monogram"
                  className="w-full h-auto object-contain filter hue-rotate-[90deg] saturate-50 contrast-125 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    filter: "invert(17%) sepia(48%) saturate(980%) hue-rotate(116deg) brightness(92%) contrast(96%)"
                  }}
                />
              </div>

              {/* Main Brand Title */}
              <div className="space-y-0.5">
                <span className="font-sans-utility text-[10.5px] md:text-xs tracking-[0.45em] uppercase text-[#12352C] font-semibold block">
                  PARVA
                </span>
                <h2 className="font-serif-editorial text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.2em] text-[#12352C] font-medium leading-none">
                  ORIGINS
                </h2>
              </div>

              {/* Ornamental Flourish Line */}
              <div className="w-full flex items-center justify-center gap-3 py-0.5">
                <div className="h-px bg-[#12352C]/25 flex-1 max-w-[95px]" />
                <span className="text-[#12352C] text-[11px]">❦</span>
                <div className="h-px bg-[#12352C]/25 flex-1 max-w-[95px]" />
              </div>

              {/* Tagline */}
              <div className="space-y-0.5 pt-0.5">
                <p className="font-sans-utility text-[10px] md:text-[11px] lg:text-xs tracking-[0.28em] uppercase text-[#12352C] font-semibold">
                  CELEBRATING LIFE'S
                </p>
                <p className="font-sans-utility text-[10px] md:text-[11px] lg:text-xs tracking-[0.28em] uppercase text-[#12352C] font-semibold">
                  BEAUTIFUL BEGINNINGS
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-1.5 pt-1.5 text-[9.5px] md:text-[10.5px] lg:text-[11.5px] font-sans-utility tracking-[0.22em] uppercase text-[#1C1B18]/75 font-normal max-w-sm mx-auto">
                <p>BABY SHOWERS • NAMING CEREMONIES</p>
                <p>HOUSEWARMINGS • FAMILY SESSIONS</p>
                <p className="text-[#12352C] font-semibold">AND MORE</p>
              </div>

            </div>

            {/* CTA Button -> Direct Link to /parvaorigins */}
            <div className="pt-7 w-full flex items-center justify-center relative z-10">
              <Link
                href="/parvaorigins"
                className="group/btn inline-flex items-center gap-2.5 font-sans-utility text-xs md:text-sm tracking-[0.28em] uppercase text-[#12352C] hover:text-[#641F27] transition-colors font-semibold"
              >
                <span>DISCOVER ORIGINS</span>
                <span className="transform group-hover/btn:translate-x-1.5 transition-transform text-sm">→</span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CARD: PARVA WEDDINGS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#F5F1E8] p-7 md:p-10 lg:p-11 rounded-xs border border-[#1C1B18]/15 flex flex-col justify-between items-center text-center shadow-xl transition-all duration-500"
            style={{
              boxShadow: "0 12px 36px -6px rgba(100, 31, 39, 0.14), 0 2px 6px rgba(28, 27, 24, 0.05)",
            }}
          >
            {/* Double Border Frame Line Effect */}
            <div className="absolute inset-2.5 md:inset-3.5 border border-[#641F27]/12 pointer-events-none rounded-xs" />

            <div className="w-full flex flex-col items-center space-y-4.5 relative z-10 pt-1">
              
              {/* Monogram Logo */}
              <div className="w-20 md:w-24 lg:w-26 h-auto flex items-center justify-center">
                <img
                  src="/Assets/Brands/Asset 30.svg"
                  alt="Parva Weddings Monogram"
                  className="w-full h-auto object-contain filter drop-shadow-xs transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Main Brand Title */}
              <div className="space-y-0.5">
                <span className="font-sans-utility text-[10.5px] md:text-xs tracking-[0.45em] uppercase text-[#641F27] font-semibold block">
                  PARVA
                </span>
                <h2 className="font-serif-editorial text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.2em] text-[#641F27] font-medium leading-none">
                  WEDDINGS
                </h2>
              </div>

              {/* Ornamental Flourish Line */}
              <div className="w-full flex items-center justify-center gap-3 py-0.5">
                <div className="h-px bg-[#641F27]/25 flex-1 max-w-[95px]" />
                <span className="text-[#641F27] text-[11px]">❦</span>
                <div className="h-px bg-[#641F27]/25 flex-1 max-w-[95px]" />
              </div>

              {/* Tagline */}
              <div className="space-y-0.5 pt-0.5">
                <p className="font-sans-utility text-[10px] md:text-[11px] lg:text-xs tracking-[0.28em] uppercase text-[#641F27] font-semibold">
                  CRAFTING TIMELESS WEDDING
                </p>
                <p className="font-sans-utility text-[10px] md:text-[11px] lg:text-xs tracking-[0.28em] uppercase text-[#641F27] font-medium">
                  STORIES WITH SOUL
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-1.5 pt-1.5 text-[9.5px] md:text-[10.5px] lg:text-[11.5px] font-sans-utility tracking-[0.22em] uppercase text-[#1C1B18]/75 font-normal max-w-sm mx-auto">
                <p>WEDDING PHOTOGRAPHY • CINEMATIC FILMS</p>
                <p>DESTINATION WEDDINGS • INTIMATE CELEBRATIONS</p>
                <p className="text-[#641F27] font-semibold">AND MORE</p>
              </div>

            </div>

            {/* CTA Button -> Direct Link to /parvaweddings */}
            <div className="pt-7 w-full flex items-center justify-center relative z-10">
              <Link
                href="/parvaweddings"
                className="group/btn inline-flex items-center gap-2.5 font-sans-utility text-xs md:text-sm tracking-[0.28em] uppercase text-[#641F27] hover:text-[#12352C] transition-colors font-semibold"
              >
                <span>DISCOVER WEDDINGS</span>
                <span className="transform group-hover/btn:translate-x-1.5 transition-transform text-sm">→</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer Bar */}
      <footer className="w-full py-4 px-8 md:px-16 flex justify-between items-center relative z-40 border-t border-[#1C1B18]/15 text-xs font-sans-utility tracking-[0.2em] uppercase select-none flex-shrink-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-[#1C1B18]/80">
          <a
            href="https://instagram.com/weddingsbyparva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#641F27] transition-colors font-medium tracking-[0.18em]"
          >
            IG: @weddingsbyparva
          </a>
          <span className="opacity-30 hidden sm:inline">•</span>
          <a
            href="mailto:hello@thehouseofparva.in"
            className="hover:text-[#641F27] transition-colors font-medium tracking-[0.18em] lowercase font-sans"
          >
            hello@thehouseofparva.in
          </a>
        </div>

        <div className="text-[10px] text-[#1C1B18]/60 font-sans-utility tracking-[0.2em] uppercase">
          OCEAN AND ORIGIN LLP • BENGALURU
        </div>
      </footer>
    </div>
  );
}
