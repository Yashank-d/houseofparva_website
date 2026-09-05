"use client";
import React from "react";
import Reveal from "../Reveal";

export default function OHome({ onNavigate }: { onNavigate: (i: number) => void }) {
  return (
    <div className="w-full pt-3 pb-[110px]">
      {/* Velvet hero — typographic until the first family frames arrive */}
      <Reveal
        className="mx-4 rounded-[28px] bg-[#2B0F14]/90 backdrop-blur-md overflow-hidden shadow-[0_18px_44px_rgba(43,15,20,0.4)] border border-[#C9A86A]/15"
        y={20}
        duration={1}
      >
        <div className="px-6 pt-7 pb-5">
          <p className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#C9A86A] font-semibold">
            ★ Family Photography & Films
          </p>
          <h1 className="font-serif-editorial text-[36px] leading-[0.95] uppercase text-[#F5EED5] mt-2">
            Beginnings
            <br />
            we&apos;ve kept,
            <br />
            <span className="lowercase italic font-normal text-[#C9A86A]">forever cherished.</span>
          </h1>
          <p className="font-scribble text-[20px] text-[#F5EED5]/75 mt-2">
            Welcome, where little stories begin…
          </p>
        </div>
        <div className="px-4 pb-4">
          <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] bg-[#1E0A0E]">
            <img
              src="/Assets/OriginsHero_1600.jpg"
              alt="Parva Origins — family celebration"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#C9A86A] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B0F14]" />
              <span className="font-sans-utility text-[9px] tracking-[0.16em] uppercase text-[#2B0F14] font-bold">First Frames</span>
            </div>
            <div className="absolute bottom-3.5 left-4 right-4 pointer-events-none">
              <p className="font-script text-[22px] leading-none text-white">The First Chapter</p>
              <p className="font-sans-utility text-[9px] tracking-[0.2em] uppercase text-white/70 mt-1">Family & Beginnings</p>
            </div>
          </div>
        </div>
        <div className="px-6 pb-7">
          <button
            onClick={() => onNavigate(1)}
            className="w-full h-[54px] rounded-full bg-[#C9A86A] text-[#2B0F14] font-sans-utility text-[12px] tracking-[0.2em] uppercase font-bold active:opacity-85 active:scale-[0.98] transition flex items-center justify-center gap-2"
          >
            View Stories <span>→</span>
          </button>
          <p className="font-sans-utility text-[12px] text-[#F5EED5]/55 text-center mt-3">
            Tiny toes • Warm homes • Beautiful beginnings
          </p>
        </div>
      </Reveal>

      {/* Quote card — frosted cream */}
      <Reveal className="mx-4 mt-4 rounded-[24px] bg-[#FFFCF8]/70 backdrop-blur-md p-6 shadow-[0_10px_30px_rgba(28,27,24,0.08)] border border-white/50" y={22}>
        <div className="w-10 h-[3px] bg-[#C9A86A] rounded-full" />
        <p className="font-script text-[21px] leading-snug text-[#1C1B18] mt-3">
          Every family has a first page. Let&apos;s preserve yours.
        </p>
        <p className="font-script text-[18px] text-[#2B0F14] mt-1">— Parva</p>
        <p className="font-sans-utility text-[10px] tracking-[0.24em] uppercase text-[#1C1B18]/40 mt-4">
          Parva Origins • Bangalore
        </p>
      </Reveal>
    </div>
  );
}
