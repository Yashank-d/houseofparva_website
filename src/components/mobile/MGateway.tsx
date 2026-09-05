"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import MPreloader from "./MPreloader";

const ateliers = [
  {
    index: "Atelier — 01",
    eyebrow: "Weddings",
    mark: "/Assets/Brands/Asset 30.svg",
    markAlt: "Parva Weddings",
    title: "Parva Weddings",
    desc: "For the days that become your forever.",
    sub: "Pre-weddings • Weddings • Intimate • Destination • Photography • Films",
    cta: "Enter Weddings",
    href: "/parvaweddings",
    label: "Enter Parva Weddings — weddings atelier",
    gold: true,
  },
  {
    index: "Atelier — 02",
    eyebrow: "Family & Beginnings",
    mark: "/Assets/Brands/Asset 29.svg",
    markAlt: "Parva Origins",
    title: "Parva Origins",
    desc: "For the moments that mark a new beginning.",
    sub: "Housewarmings • Poojas • Baby Showers • Namings • Family Celebrations",
    cta: "Enter Origins",
    href: "/parvaorigins",
    label: "Enter Parva Origins — family and beginnings atelier",
    gold: false,
  },
];

export default function MGateway() {
  const headMark = useRef<HTMLDivElement>(null);
  return (
    <div
      className="w-full h-[100dvh] overflow-hidden relative font-sans selection:bg-[#C9A86A] selection:text-[#2B0F14] flex flex-col"
      style={{ background: "linear-gradient(180deg, #3D1620 0%, #2B0F14 40%, #1E0A0E 100%)" }}
    >
      <MPreloader mark="/Parva_logo.svg" house lightMark landRef={headMark} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 36% at 50% 0%, rgba(201,168,106,0.16) 0%, transparent 65%)" }} />

      {/* compact reserve mark */}
      <header className="shrink-0 w-full flex flex-col items-center relative z-10 px-6 pt-6">
        <div ref={headMark} className="flex flex-col items-center">
          <img src="/Parva_logo.svg" alt="Parva" className="w-[76px] h-auto" style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.4))" }} />
          <p className="font-sans-utility text-[8px] tracking-[0.3em] uppercase text-[#F5EED5]/60 mt-2 pl-[0.3em]">
            Fine Art & Storytelling House
          </p>
        </div>
      </header>

      <main className="flex-1 min-h-0 w-full px-4 relative z-10 flex flex-col overflow-y-auto" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        {/* compact hero */}
        <div className="text-center shrink-0 pt-2">
          <p className="font-sans-utility text-[10px] tracking-[0.4em] uppercase text-[#C9A86A] pl-[0.4em]">Welcome to</p>
          <h1 className="font-serif-editorial text-[36px] tracking-[0.08em] uppercase text-[#F5EED5] font-light leading-[1.05] mt-1.5 pl-[0.08em]">
            The House of Parva
          </h1>
          <p className="font-serif-editorial text-[15px] text-[#F5EED5]/70 italic font-light mt-2 leading-snug px-2">
            Two worlds, one belief — every story, remembered beautifully.
          </p>
        </div>

        <p className="shrink-0 font-sans-utility text-[9px] tracking-[0.24em] uppercase text-[#F5EED5]/70 text-center mt-3 pl-[0.24em]">
          Choose your story <span className="text-[#C9A86A]">—</span> tap to enter
        </p>

        {/* both ateliers visible — full cards with Enter pills, substance over void */}
        <div className="mt-3 space-y-3 pb-1">
          {ateliers.map((a, i) => (
            <Reveal key={a.title} y={24} delay={0.1 + i * 0.12} duration={1}>
              <div className="rounded-[24px] bg-[#FFFCF8]/80 backdrop-blur-md p-5 shadow-[0_14px_36px_rgba(0,0,0,0.32)] border border-white/40">
                <div className="flex items-center gap-4">
                  <img src={a.mark} alt={a.markAlt} className="w-[76px] h-auto shrink-0" />
                  <span className="flex-1 min-w-0 text-left">
                    <span className="block font-sans-utility text-[9px] tracking-[0.24em] uppercase text-[#641F27] font-bold">
                      {a.index} • {a.eyebrow}
                    </span>
                    <span className="block font-serif-editorial text-[26px] tracking-[0.08em] uppercase text-[#1C1B18] leading-tight mt-1">
                      {a.title}
                    </span>
                  </span>
                </div>
                <p className="font-serif-editorial italic text-[17px] text-[#1C1B18]/80 mt-3 leading-snug">
                  {a.desc}
                </p>
                <p className="font-sans-utility text-[10px] tracking-[0.08em] uppercase text-[#1C1B18]/45 mt-1.5 leading-relaxed">
                  {a.sub}
                </p>
                <Link
                  href={a.href}
                  aria-label={a.label}
                  className={`mt-4 flex w-full min-h-[52px] items-center justify-center gap-2 rounded-full font-sans-utility text-[11px] tracking-[0.2em] uppercase font-bold active:scale-[0.99] transition-transform outline-none ${
                    a.gold ? "bg-[#C9A86A] text-[#2B0F14]" : "bg-[#2B0F14] text-[#F5F1E8]"
                  }`}
                >
                  {a.cta} <span>→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Follow the House */}
        <div className="mt-4">
          <p className="font-sans-utility text-[9px] tracking-[0.3em] uppercase text-[#C9A86A] text-center pl-[0.3em]">
            Follow the House
          </p>
          <div className="mt-2.5 space-y-2">
            {[
              { name: "House of Parva", handle: "@thehouseofparva.in", href: "https://instagram.com/thehouseofparva.in" },
              { name: "Parva Weddings", handle: "@weddingsbyparva", href: "https://instagram.com/weddingsbyparva" },
              { name: "Parva Origins", handle: "@originsbyparva", href: "https://instagram.com/originsbyparva" },
            ].map((a) => (
              <a
                key={a.handle}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[18px] bg-white/[0.05] border border-[#C9A86A]/20 px-4 min-h-[56px] active:bg-white/[0.1] transition-colors"
              >
                <svg className="w-[20px] h-[20px] text-[#C9A86A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="flex-1 min-w-0 text-left">
                  <span className="block font-sans-utility text-[11px] tracking-[0.16em] uppercase text-[#F5EED5]">{a.name}</span>
                  <span className="block font-sans-utility text-[11px] text-[#F5EED5]/50 mt-0.5">{a.handle}</span>
                </span>
                <span className="text-[#C9A86A]">→</span>
              </a>
            ))}
          </div>
        </div>

        <p className="shrink-0 font-sans-utility text-[8px] tracking-[0.22em] uppercase text-[#F5EED5]/35 text-center mt-3 pb-2 pl-[0.22em]">
          Two ateliers • One house • Ocean and Origin LLP
        </p>
      </main>
    </div>
  );
}
