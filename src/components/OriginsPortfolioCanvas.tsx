"use client";

import React from "react";
import { motion } from "framer-motion";
import { originWorks } from "@/data/originsData";

export default function OriginsPortfolioCanvas({ onNavigate }: { onNavigate?: (i: number) => void }) {
  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col justify-between relative overflow-hidden select-none">
      {/* Top Header */}
      <div className="relative z-20 flex items-center justify-between px-4">
        <span className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#2B0F14] font-semibold">
          THE FAMILY ARCHIVE {originWorks.length > 0 ? `(1 / ${originWorks.length})` : "(ARRIVING SOON)"}
        </span>
      </div>

      {/* Main Canvas — empty state until the first story is added to originsData.ts */}
      <div className="relative z-10 w-full h-[84vh] max-h-[760px] min-h-[620px] flex items-center justify-center px-8 md:px-16 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl h-full flex flex-col items-center justify-center p-8 md:p-12 relative bg-[#F5F1E8] rounded-xs scrapbook-shadow border border-[#1C1B18]/10 overflow-hidden text-center"
        >
          <span className="font-sans-utility text-[10px] tracking-[0.25em] uppercase text-[#2B0F14] font-semibold block">
            JOURNAL ENTRY — PENDING
          </span>
          <div className="mt-6 p-8 border border-dashed border-[#C9A86A]/60 rounded-xs inline-block rotate-[-1.5deg] bg-[#E8DFD0]/40">
            <span className="font-serif-editorial text-7xl md:text-8xl text-[#C9A86A] leading-none block">O</span>
          </div>
          <h3 className="font-serif-editorial text-3xl md:text-4xl uppercase text-[#1C1B18] mt-6">
            The shelves are ready,
            <br />
            <span className="italic normal-case text-[#2B0F14]">the pages are blank.</span>
          </h3>
          <p className="font-script text-2xl text-[#1C1B18]/80 leading-relaxed mt-4 max-w-xl">
            Our first family records — naming mornings, housewarmings, festival tables — are on their way.
          </p>
          <button
            onClick={() => onNavigate?.(3)}
            className="mt-6 px-8 py-3 border border-[#2B0F14]/40 bg-[#F5F1E8] font-sans-utility text-[10px] tracking-[0.2em] uppercase text-[#2B0F14] hover:bg-[#2B0F14] hover:text-[#F5F1E8] hover:border-[#2B0F14] shadow-sm hover:shadow transition-all duration-300 cursor-pointer rounded-xs"
          >
            BEGIN YOURS →
          </button>

          <div className="pt-4 mt-8 border-t border-[#1C1B18]/10 w-full flex justify-between items-center text-[10px] font-sans-utility tracking-[0.2em] uppercase text-[#1C1B18]/70">
            <span>PARVA ORIGINS ARCHIVE</span>
            <span>BANGALORE & BEYOND</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
