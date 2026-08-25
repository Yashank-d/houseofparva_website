"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ParvaOriginsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Family Session",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-screen h-screen overflow-hidden paper-bg-parchment text-[#1C1B18] flex flex-col justify-between relative font-sans selection:bg-[#12352C] selection:text-[#F5F1E8] select-none">

      {/* Header Bar */}
      <header className="w-full py-5 px-8 md:px-12 flex justify-between items-center relative z-40">
        <Link
          href="/"
          className="group flex items-center gap-2 font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#1C1B18]/70 hover:text-[#12352C] transition-colors font-medium"
          title="Return to The House of Parva Gateway"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          <span>THE HOUSE OF PARVA</span>
        </Link>

        <div className="font-sans-utility text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#12352C] font-semibold">
          PARVA ORIGINS ARCHIVE
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-6xl mx-auto px-6 md:px-12 py-2 flex-1 flex flex-col justify-between overflow-y-auto z-20">
        
        {/* Top Hero Logo & Headline */}
        <div className="text-center my-auto py-6 space-y-4 max-w-3xl mx-auto">
          {/* Logo SVG */}
          <div className="w-full max-w-[220px] md:max-w-[260px] mx-auto">
            <img
              src="/Assets/Brands/Asset 29.svg"
              alt="Parva Origins Logo"
              className="w-full h-auto object-contain filter hue-rotate-[90deg] saturate-50 contrast-125"
              style={{
                filter: "invert(17%) sepia(48%) saturate(980%) hue-rotate(116deg) brightness(92%) contrast(96%)"
              }}
            />
          </div>

          <p className="font-script text-2xl md:text-3xl text-[#12352C]">
            "Celebrating life's beautiful beginnings."
          </p>

          <p className="font-sans-utility text-xs md:text-sm text-[#1C1B18]/80 leading-relaxed max-w-xl mx-auto font-light">
            Parva Origins is our fine art portraiture and milestone archive. From baby showers and naming ceremonies to housewarmings and multi-generational family sessions—we preserve life's quiet beginnings.
          </p>

          {/* Three Service Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="bg-[#F5F1E8] p-6 rounded-xs border border-[#1C1B18]/12 shadow-sm space-y-2">
              <span className="font-sans-utility text-[9.5px] tracking-[0.25em] uppercase text-[#12352C] font-semibold block">
                01 • BABY & NAMING
              </span>
              <p className="font-sans-utility text-xs text-[#1C1B18]/80 leading-relaxed font-light">
                Capturing the quiet warmth of new life, naming ceremonies, cradling rituals, and baby showers.
              </p>
            </div>

            <div className="bg-[#F5F1E8] p-6 rounded-xs border border-[#1C1B18]/12 shadow-sm space-y-2">
              <span className="font-sans-utility text-[9.5px] tracking-[0.25em] uppercase text-[#12352C] font-semibold block">
                02 • HOUSEWARMINGS
              </span>
              <p className="font-sans-utility text-xs text-[#1C1B18]/80 leading-relaxed font-light">
                Documenting griha pravesh rituals, traditional pujas, and homecoming celebrations in family spaces.
              </p>
            </div>

            <div className="bg-[#F5F1E8] p-6 rounded-xs border border-[#1C1B18]/12 shadow-sm space-y-2">
              <span className="font-sans-utility text-[9.5px] tracking-[0.25em] uppercase text-[#12352C] font-semibold block">
                03 • FAMILY SESSIONS
              </span>
              <p className="font-sans-utility text-xs text-[#1C1B18]/80 leading-relaxed font-light">
                Unscripted fine-art portraits of connection, laughter, and multi-generational family milestones.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer Bar */}
      <footer className="w-full pt-4 pb-5 px-8 md:px-12 flex justify-between items-center relative z-40 border-t border-[#1C1B18]/15 text-xs font-sans-utility tracking-[0.2em] uppercase select-none">
        <div className="flex items-center gap-4 text-xs text-[#1C1B18]/80">
          <a
            href="mailto:hello@thehouseofparva.in"
            className="hover:text-[#12352C] transition-colors font-medium tracking-[0.18em] lowercase font-sans"
          >
            hello@thehouseofparva.in
          </a>
          <span>•</span>
          <span className="text-[#1C1B18]/60">BENGALURU & WORLDWIDE</span>
        </div>

        <Link
          href="/parvaweddings"
          className="text-xs text-[#641F27] hover:text-[#12352C] transition-colors font-medium tracking-[0.2em] uppercase"
        >
          EXPLORE PARVA WEDDINGS →
        </Link>
      </footer>
    </div>
  );
}
