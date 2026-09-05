"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MGateway from "@/components/mobile/MGateway";

export default function HouseOfParvaGateway() {
  // NOTE: init false so server HTML matches first client render (no hydration mismatch);
  // the effect below corrects to mobile right after mount.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Width-first, with a phone-UA fallback for browsers reporting a wide
    // ("desktop site") viewport on phones.
    const check = () => {
      const narrow = window.innerWidth < 768;
      const phoneUA = /iPhone|iPod|Android.*Mobile/i.test(navigator.userAgent);
      const minSide = Math.min(window.screen.width, window.screen.height);
      // Tablets (incl. iPad mini at 744px) stay on desktop; only true phones
      // (smallest side well under tablet sizes) get the mobile layout — even
      // when "desktop site" mode spoofs viewport width or UA.
      const isTablet = !phoneUA && minSide >= 600;
      setIsMobile(!isTablet && (narrow || phoneUA || minSide < 600));
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) return <MGateway />;

  return (
    <div className="w-full min-h-[100dvh] overflow-x-hidden overflow-y-auto md:overflow-hidden bg-[#2B0F14] text-[#F5EED5] flex flex-col relative font-sans selection:bg-[#C9A86A] selection:text-[#2B0F14] select-none touch-manipulation" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      {/* velvet depth */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 88% 68% at 50% 30%, rgba(201,168,106,0.078) 0%, rgba(255,245,220,0.035) 18%, transparent 62%), radial-gradient(ellipse 130% 88% at 50% 105%, rgba(0,0,0,0.45) 0%, transparent 60%)" }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.028]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.95) 0.85px, transparent 0.85px)", backgroundSize: "17px 17px" }} />
      {/* outer frame — thinner on mobile to save real estate */}
      <div className="pointer-events-none absolute inset-[8px] md:inset-[14px] border border-[#F5EED5]/07" />
      <div className="pointer-events-none absolute top-[8px] left-[8px] md:top-[14px] md:left-[14px] w-4 h-4 md:w-5 md:h-5 border-l border-t border-[#C9A86A]/28" />
      <div className="pointer-events-none absolute top-[8px] right-[8px] md:top-[14px] md:right-[14px] w-4 h-4 md:w-5 md:h-5 border-r border-t border-[#C9A86A]/28" />
      <div className="pointer-events-none absolute bottom-[8px] left-[8px] md:bottom-[14px] md:left-[14px] w-4 h-4 md:w-5 md:h-5 border-l border-b border-[#C9A86A]/28" />
      <div className="pointer-events-none absolute bottom-[8px] right-[8px] md:bottom-[14px] md:right-[14px] w-4 h-4 md:w-5 md:h-5 border-r border-b border-[#C9A86A]/28" />

      {/* top bar — larger tap targets on mobile, no hidden text */}
      <div className="w-full flex justify-between items-center px-4 sm:px-7 md:px-10 pt-3.5 md:pt-6 relative z-20 shrink-0">
        <a href="https://instagram.com/weddingsbyparva" target="_blank" rel="noopener noreferrer" className="font-sans-utility text-[10px] md:text-[8.5px] tracking-[0.18em] md:tracking-[0.28em] uppercase text-[#F5EED5]/45 md:text-[#F5EED5]/25 py-2 -my-2">IG — @weddingsbyparva</a>
        <a href="mailto:hello@thehouseofparva.in" className="hidden sm:inline font-sans-utility text-[8.5px] tracking-[0.28em] uppercase text-[#F5EED5]/25 py-2 -my-2">hello@thehouseofparva.in</a>
        <span className="font-sans-utility text-[10px] md:text-[8.5px] tracking-[0.18em] md:tracking-[0.28em] uppercase text-[#F5EED5]/45 md:text-[#F5EED5]/25 py-2 -my-2">Est. MMXXVI</span>
      </div>

      {/* centered maison mark */}
      <motion.header initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="w-full flex flex-col items-center relative z-20 pt-3 md:pt-5 shrink-0">
        <img src="/Parva_logo.svg" alt="Parva" className="w-[66px] sm:w-[72px] md:w-[86px] h-auto" style={{ filter: "brightness(0) invert(0.94) sepia(0.12) saturate(0.3) drop-shadow(0 1px 8px rgba(0,0,0,0.35))" }} />
        <div className="flex items-center gap-2.5 md:gap-3 mt-2.5 md:mt-3">
          <span className="h-px w-6 md:w-8 bg-[#C9A86A]/22" />
          <span className="font-sans-utility text-[8px] sm:text-[8.5px] md:text-[9px] tracking-[0.28em] md:tracking-[0.36em] uppercase text-[#F5EED5]/55 md:text-[#F5EED5]/42">Fine Art & Storytelling House</span>
          <span className="h-px w-6 md:w-8 bg-[#C9A86A]/22" />
        </div>
      </motion.header>

      {/* hero — wraps on mobile instead of overflowing */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8 flex-1 flex flex-col items-center relative z-20 pt-3 md:pt-6 pb-4 shrink-0">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="text-center w-full">
          <p className="font-sans-utility text-[10px] md:text-[10.5px] tracking-[0.38em] md:tracking-[0.48em] uppercase text-[#C9A86A]">Welcome to</p>
          <h1 className="font-serif-editorial text-[24px] xs:text-[27px] sm:text-[36px] md:text-[48px] lg:text-[54px] tracking-[0.08em] sm:tracking-[0.10em] md:tracking-[0.12em] uppercase text-[#F5EED5] font-light leading-[0.95] md:leading-none mt-2 px-2 sm:px-0" style={{ textShadow: "0 2px 18px rgba(0,0,0,0.4)", wordSpacing: "0.06em" }}>
            <span className="block sm:inline">The House</span> <span className="block sm:inline">of Parva</span>
          </h1>
          <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-[240px] sm:max-w-[320px] mx-auto mt-3 md:mt-3.5">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A86A]/30" />
            <span className="text-[#C9A86A] text-[9px] leading-none">❦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A86A]/30" />
          </div>
          <p className="font-sans-utility text-[9px] sm:text-[9.5px] md:text-[10.5px] tracking-[0.18em] sm:tracking-[0.30em] uppercase text-[#C9A86A]/90 mt-2.5 px-2">Photography & Films • Weddings • Family • Stories</p>
          <p className="font-serif-editorial text-[15px] sm:text-[16px] md:text-[18px] text-[#F5EED5]/70 md:text-[#F5EED5]/58 italic font-light mt-1.5 leading-snug px-4 sm:px-0">Two worlds, one belief — every story, <br className="sm:hidden" />remembered beautifully.</p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32, duration: 0.5 }} className="font-sans-utility text-[10.5px] md:text-[11px] tracking-[0.22em] md:tracking-[0.28em] uppercase text-[#F5EED5]/70 md:text-[#F5EED5]/65 mt-3.5 md:mt-5">
          Choose your story <span className="text-[#C9A86A]">—</span> tap to enter
        </motion.p>

        {/* ── Gilded ateliers — mobile: full-width stacked, 44px+ targets, thumb zone ── */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }} className="w-full max-w-[1040px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 mt-3.5 md:mt-5">
          {/* Weddings — LEFT on desktop, TOP on mobile (primary) */}
          <Link href="/parvaweddings" aria-label="Enter Parva Weddings — weddings atelier" className="group relative flex flex-col items-center text-center px-5 sm:px-8 md:px-10 py-7 sm:py-8 md:py-11 border border-[#C9A86A]/24 hover:border-[#C9A86A]/45 active:border-[#C9A86A]/50 bg-[#F5EED5]/06 hover:bg-[#F5EED5]/10 active:bg-[#F5EED5]/12 backdrop-blur-[1px] transition-all duration-300 overflow-hidden active:scale-[0.99] md:hover:-translate-y-1 md:hover:shadow-[0_16px_40px_rgba(0,0,0,0.32)]">
            <div className="pointer-events-none absolute inset-[7px] md:inset-[8px] border border-white/08 group-hover:border-white/14 transition-colors" />
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent opacity-80" />
            <span className="font-sans-utility text-[9px] sm:text-[9.5px] tracking-[0.30em] sm:tracking-[0.36em] uppercase text-[#C9A86A]">Atelier — 01 • Weddings</span>
            <div className="w-[76px] sm:w-[84px] md:w-[102px] mt-4" style={{ filter: "brightness(0) invert(1) opacity(0.96)" }}>
              <img src="/Assets/Brands/Asset 30.svg" alt="Parva Weddings" className="w-full h-auto" />
            </div>
            <span className="font-sans-utility text-[9px] sm:text-[10px] tracking-[0.44em] uppercase text-[#F5EED5]/70 mt-4">Parva</span>
            <h2 className="font-serif-editorial text-[26px] sm:text-[30px] md:text-[36px] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#F5EED5] leading-none mt-1">Weddings</h2>
            <div className="h-px w-12 bg-[#C9A86A]/40 mt-3 md:mt-4 group-hover:w-20 group-active:w-20 transition-all duration-500" />
            <p className="font-sans-utility text-[10.5px] sm:text-[11px] md:text-[11.5px] tracking-[0.18em] md:tracking-[0.20em] uppercase text-[#F5EED5]/85 leading-relaxed mt-3">Crafting timeless wedding<br />stories with soul</p>
            <p className="font-sans-utility text-[10px] md:text-[10.5px] tracking-[0.13em] md:tracking-[0.14em] uppercase text-[#F5EED5]/60 md:text-[#F5EED5]/58 mt-2 leading-relaxed">Wedding photography • Cinematic films<br />Destination • Intimate celebrations</p>
            <span className="mt-5 md:mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 font-sans-utility text-[10px] sm:text-[11px] tracking-[0.20em] uppercase text-[#2B0F14] bg-[#C9A86A] md:bg-[#F5EED5] md:group-hover:bg-[#C9A86A] border border-[#C9A86A] md:border-[#F5EED5] md:group-hover:border-[#C9A86A] min-h-[40px] md:min-h-[44px] px-5 md:px-7 py-2.5 md:py-3 transition-colors shadow-sm">
              Enter Weddings <span className="text-[12px] md:text-[13px]">→</span>
            </span>
            <span className="font-sans-utility text-[10px] md:text-[9px] tracking-[0.16em] md:tracking-[0.18em] uppercase text-[#F5EED5]/50 md:text-[#F5EED5]/45 mt-2">Tap to explore</span>
          </Link>

          {/* Origins — RIGHT on desktop, BOTTOM on mobile */}
          <Link href="/parvaorigins" aria-label="Enter Parva Origins — family and beginnings atelier" className="group relative flex flex-col items-center text-center px-5 sm:px-8 md:px-10 py-7 sm:py-8 md:py-11 border border-[#C9A86A]/24 hover:border-[#C9A86A]/45 active:border-[#C9A86A]/50 bg-[#F5EED5]/06 hover:bg-[#F5EED5]/10 active:bg-[#F5EED5]/12 backdrop-blur-[1px] transition-all duration-300 overflow-hidden active:scale-[0.99] md:hover:-translate-y-1 md:hover:shadow-[0_16px_40px_rgba(0,0,0,0.32)]">
            <div className="pointer-events-none absolute inset-[7px] md:inset-[8px] border border-white/08 group-hover:border-white/14 transition-colors" />
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/40 to-transparent opacity-80" />
            <span className="font-sans-utility text-[9px] sm:text-[9.5px] tracking-[0.30em] sm:tracking-[0.36em] uppercase text-[#C9A86A]">Atelier — 02 • Family & Beginnings</span>
            <div className="w-[76px] sm:w-[84px] md:w-[102px] mt-4" style={{ filter: "brightness(0) invert(1) opacity(0.96)" }}>
              <img src="/Assets/Brands/Asset 29.svg" alt="Parva Origins" className="w-full h-auto" />
            </div>
            <span className="font-sans-utility text-[9px] sm:text-[10px] tracking-[0.44em] uppercase text-[#F5EED5]/70 mt-4">Parva</span>
            <h2 className="font-serif-editorial text-[26px] sm:text-[30px] md:text-[36px] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#F5EED5] leading-none mt-1">Origins</h2>
            <div className="h-px w-12 bg-[#C9A86A]/40 mt-3 md:mt-4 group-hover:w-20 group-active:w-20 transition-all duration-500" />
            <p className="font-sans-utility text-[10.5px] sm:text-[11px] md:text-[11.5px] tracking-[0.18em] md:tracking-[0.20em] uppercase text-[#F5EED5]/85 leading-relaxed mt-3">Celebrating life&apos;s<br />beautiful beginnings</p>
            <p className="font-sans-utility text-[10px] md:text-[10.5px] tracking-[0.13em] md:tracking-[0.14em] uppercase text-[#F5EED5]/60 md:text-[#F5EED5]/58 mt-2 leading-relaxed">Baby showers • Naming ceremonies<br />Housewarmings • Family sessions</p>
            <span className="mt-5 md:mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 font-sans-utility text-[10px] sm:text-[11px] tracking-[0.20em] uppercase text-[#2B0F14] bg-[#C9A86A] md:bg-[#F5EED5] md:group-hover:bg-[#C9A86A] border border-[#C9A86A] md:border-[#F5EED5] md:group-hover:border-[#C9A86A] min-h-[40px] md:min-h-[44px] px-5 md:px-7 py-2.5 md:py-3 transition-colors shadow-sm">
              Enter Origins <span className="text-[12px] md:text-[13px]">→</span>
            </span>
            <span className="font-sans-utility text-[10px] md:text-[9px] tracking-[0.16em] md:tracking-[0.18em] uppercase text-[#F5EED5]/50 md:text-[#F5EED5]/45 mt-2">Tap to explore</span>
          </Link>
        </motion.div>

        {/* Follow the House — all three ateliers on Instagram */}
        <div className="w-full max-w-[1040px] mt-4 md:mt-5">
          <p className="font-sans-utility text-[9px] md:text-[9.5px] tracking-[0.3em] uppercase text-[#C9A86A] text-center">Follow the House</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-3 mt-2.5">
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
                className="group flex items-center gap-3 px-4 py-3 border border-[#C9A86A]/20 hover:border-[#C9A86A]/50 active:border-[#C9A86A]/60 bg-[#F5EED5]/04 hover:bg-[#F5EED5]/08 transition-colors"
              >
                <svg className="w-[18px] h-[18px] text-[#C9A86A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="flex-1 min-w-0 text-left">
                  <span className="block font-sans-utility text-[10px] tracking-[0.2em] uppercase text-[#F5EED5]/85">{a.name}</span>
                  <span className="block font-sans-utility text-[10px] tracking-[0.08em] text-[#F5EED5]/45 mt-0.5">{a.handle}</span>
                </span>
                <span className="text-[#C9A86A] text-sm group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
        </div>

        <p className="font-sans-utility text-[9px] sm:text-[8.5px] tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#F5EED5]/35 md:text-[#F5EED5]/32 mt-3.5 md:mt-4 text-center px-4">Two ateliers • One house • Bengaluru & Beyond</p>
      </main>

      <footer className="w-full flex justify-center items-center px-4 sm:px-6 md:px-8 pb-[calc(12px+env(safe-area-inset-bottom))] md:pb-5 pt-3 relative z-20 shrink-0">
        <span className="font-sans-utility text-[9px] sm:text-[8.5px] tracking-[0.18em] sm:tracking-[0.26em] uppercase text-[#F5EED5]/30 md:text-[#F5EED5]/20 text-center leading-relaxed">Ocean and Origin LLP • Est. MMXXVI<br className="sm:hidden" /><span className="hidden sm:inline"> — </span>hello@thehouseofparva.in</span>
      </footer>
    </div>
  );
}
