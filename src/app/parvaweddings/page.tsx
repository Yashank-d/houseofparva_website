"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SidebarScrapbook from "@/components/SidebarScrapbook";
import HomeCanvas from "@/components/HomeCanvas";
import PortfolioCanvas from "@/components/PortfolioCanvas";
import AboutCanvas from "@/components/AboutCanvas";
import ContactCanvas from "@/components/ContactCanvas";
import MHome from "@/components/mobile/MHome";
import MStories from "@/components/mobile/MStories";
import MAbout from "@/components/mobile/MAbout";
import MContact from "@/components/mobile/MContact";
import MPreloader from "@/components/mobile/MPreloader";

export default function ParvaWeddingsPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isLockedRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  const totalPages = 4;

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

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

  // Keyboard Arrow Key Listener — desktop only
  useEffect(() => {
    if (isMobile) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        goToNextPage();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        goToPrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobile]);

  // Strict Sequential Viewport Wheel Scroll Listener — desktop only
  useEffect(() => {
    if (isMobile) return;
    const handleWheel = (e: WheelEvent) => {
      // If locked during transition/inertia, block ALL incoming scroll events
      if (isLockedRef.current) return;

      const threshold = 35;
      if (e.deltaY > threshold) {
        isLockedRef.current = true;
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
        setTimeout(() => {
          isLockedRef.current = false;
        }, 1200);
      } else if (e.deltaY < -threshold) {
        isLockedRef.current = true;
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
        setTimeout(() => {
          isLockedRef.current = false;
        }, 1200);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isMobile]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) < 50) {
      touchStartY.current = null;
      return;
    }
    if (diff > 0) goToNextPage();
    else goToPrevPage();
    touchStartY.current = null;
  };

  const renderPageCanvas = () => {
    switch (currentPage) {
      case 0:
        return <HomeCanvas onNavigate={setCurrentPage} />;
      case 1:
        return <PortfolioCanvas />;
      case 2:
        return <AboutCanvas />;
      case 3:
        return <ContactCanvas />;
      default:
        return <HomeCanvas onNavigate={setCurrentPage} />;
    }
  };
  const renderMobileCanvas = () => {
    switch (currentPage) {
      case 0:
        return <MHome onNavigate={setCurrentPage} />;
      case 1:
        return <MStories onNavigate={setCurrentPage} />;
      case 2:
        return <MAbout />;
      case 3:
        return <MContact />;
      default:
        return <MHome onNavigate={setCurrentPage} />;
    }
  };

  // Mobile — Starbucks Reserve style: single header row, shell scrolls
  const mScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile) return;
    mScrollRef.current?.scrollTo(0, 0);
  }, [currentPage, isMobile]);

  if (isMobile) {
    const navItems = [
      { short: "Home", idx: 0, icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>) },
      { short: "Stories", idx: 1, icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="9" cy="9" r="1.6" /><path d="m21 15-4.5-4.5L6 21" /></svg>) },
      { short: "About", idx: 2, icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20.5c1.4-3.6 4.2-5.5 7.5-5.5s6.1 1.9 7.5 5.5" /></svg>) },
      { short: "Contact", idx: 3, icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="4" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>) },
    ];
    return (
      <div className="w-full h-[100dvh] overflow-hidden paper-bg-parchment text-[#1C1B18] flex flex-col relative font-sans selection:bg-[#641F27] selection:text-[#F5F1E8]">
        <MPreloader mark="/Assets/Brands/Asset 30.svg" sub="Weddings" />
        {/* Seamless masthead — no bar, no rules; sits directly on the paper */}
        <header className="shrink-0 z-20" style={{ paddingTop: "env(safe-area-inset-top)" }}>
          <div className="h-[64px] px-5 flex items-center justify-between">
            <span className="flex items-center gap-3 min-w-0">
              <img src="/Assets/seal/parva_seal_256.png" alt="Parva seal" className="w-9 h-9 object-contain shrink-0" />
              <span className="w-px h-9 bg-[#1C1B18]/12 shrink-0" />
              <span className="flex flex-col leading-none">
                <span className="font-serif-editorial text-[21px] tracking-[0.12em] text-[#1C1B18]">PARVA</span>
                <span className="font-sans-utility text-[7.5px] tracking-[0.46em] uppercase text-[#641F27] font-semibold mt-1">Weddings</span>
              </span>
            </span>
            <Link href="/" aria-label="Back to the House of Parva" className="shrink-0 min-h-[44px] flex items-center gap-1.5 pl-2">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#641F27" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="14 6 8 12 14 18" /></svg>
              <span className="font-sans-utility text-[9px] tracking-[0.18em] uppercase font-semibold text-[#1C1B18]/70 leading-snug text-right">Back to<br />the House</span>
            </Link>
          </div>
        </header>
        <div className="flex-1 w-full relative overflow-hidden">
          <div ref={mScrollRef} className="absolute inset-0 w-full h-full overflow-y-auto overscroll-contain">
            <AnimatePresence mode="wait">
              <motion.div key={currentPage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="w-full">
                {renderMobileCanvas()}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Floating tab pill — emerald, gold active */}
          <nav className="absolute bottom-0 inset-x-0 z-30 px-5" style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 12px)" }}>
            <div className="w-full rounded-full bg-[#2B0F14]/80 backdrop-blur-xl shadow-[0_14px_36px_rgba(43,15,20,0.4)] border border-[#C9A86A]/25 flex items-center px-2 py-2">
              {navItems.map((item) => {
                const active = currentPage === item.idx;
                return (
                  <button
                    key={item.short}
                    onClick={() => setCurrentPage(item.idx)}
                    className={`relative flex-1 h-[48px] rounded-full flex flex-col items-center justify-center gap-0.5 outline-none focus:outline-none transition-colors duration-300 ${active ? "text-[#2B0F14]" : "text-[#F5F1E8]/60 active:text-[#F5F1E8]"}`}
                  >
                    {active && (
                      <motion.span
                        layoutId="mnav-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                        className="absolute inset-0 rounded-full bg-[#C9A86A] shadow-[0_4px_14px_rgba(201,168,106,0.45)]"
                      />
                    )}
                    <span className="relative">{item.icon}</span>
                    <span className={`relative font-sans-utility text-[9px] tracking-[0.14em] uppercase leading-none ${active ? "font-bold" : "font-medium"}`}>{item.short}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen overflow-hidden paper-bg-parchment text-[#1C1B18] flex relative font-sans selection:bg-[#641F27] selection:text-[#F5F1E8]">

      {/* Physical Layer 1: Locked Emerald Paper Sheet (20vw width) */}
      <SidebarScrapbook
        currentPage={currentPage}
        onSelectPage={setCurrentPage}
      />

      {/* Physical Layer 2: Main Cream Content Canvas */}
      <div className="w-full h-full pl-[16vw] md:pl-[18vw] relative flex flex-col justify-between overflow-hidden z-10">
        {/* Top Header */}
        <header className="w-full py-5 px-8 md:px-12 flex justify-between items-center relative z-40 select-none">
          {/* Back to House of Parva Gateway Link */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#1C1B18]/70 hover:text-[#641F27] transition-colors font-medium"
            title="Return to The House of Parva Gateway"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
            <span>THE HOUSE OF PARVA</span>
          </Link>

          {/* Clean Underlined Script CTA Button -> Contact Page (Hidden on Contact Page) */}
          <div className="flex items-center gap-6">
            {currentPage !== 3 && (
              <button
                onClick={() => setCurrentPage(3)}
                className="group inline-flex items-center gap-2.5 font-script text-xl md:text-2xl text-[#1C1B18] hover:text-[#641F27] transition-colors relative cursor-pointer py-1"
                title="Begin Your Chapter | Contact Us"
              >
                <span className="border-b-2 border-[#641F27] pb-0.5 font-medium">
                  Let's create something timeless
                </span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-lg">
                  →
                </span>
              </button>
            )}
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full absolute inset-0"
            >
              {renderPageCanvas()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Control Bar — breathing room, not extreme bottom */}
        <footer className="w-full py-5 md:py-6 px-8 md:px-12 flex justify-between items-center relative z-40 border-t border-[#1C1B18]/10 text-xs font-sans-utility tracking-[0.18em] uppercase select-none mb-1">
          {/* Left: single-line Instagram | Email */}
          <div className="flex flex-row items-center gap-3 text-[12.5px] md:text-[13px] text-[#1C1B18]/70 z-10">
            <a
              href="https://instagram.com/weddingsbyparva"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-[#641F27] transition-colors font-medium tracking-[0.16em]"
            >
              <svg className="w-4 h-4 text-[#1C1B18]/60 group-hover:text-[#641F27] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>WEDDINGSBYPARVA</span>
            </a>
            <span className="text-[#1C1B18]/20 font-light mx-1">|</span>
            <a
              href="mailto:hello@thehouseofparva.in"
              className="group flex items-center gap-2 hover:text-[#641F27] transition-colors font-medium tracking-[0.14em] normal-case font-sans text-[12.5px] md:text-[13px]"
            >
              <svg className="w-4 h-4 text-[#1C1B18]/60 group-hover:text-[#641F27] transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>hello@thehouseofparva.in</span>
            </a>
          </div>

          {/* ABSOLUTE CENTER: Dynamic Mouse Scroll Indicator */}
          <div className="absolute left-1/2 -translate-x-1/2 z-20">
            <button
              onClick={() => {
                if (currentPage < 3) {
                  goToNextPage();
                } else {
                  goToPrevPage();
                }
              }}
              className="group flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105"
              title={currentPage < 3 ? "Scroll down to next section" : "Scroll up to previous section"}
            >
              <div className="w-3.5 h-6 border border-[#1C1B18]/40 rounded-full flex justify-center items-center relative overflow-hidden group-hover:border-[#641F27] transition-colors">
                {currentPage < 3 ? (
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-1 bg-[#641F27] rounded-full"
                  />
                ) : (
                  <motion.div
                    animate={{ y: [3, -3, 3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-1 bg-[#641F27] rounded-full"
                  />
                )}
              </div>

              <span className="font-sans-utility text-[9.5px] tracking-[0.25em] uppercase text-[#1C1B18]/70 group-hover:text-[#641F27] transition-colors font-medium">
                {currentPage < 3 ? "Scroll down" : "Scroll up"}
              </span>
            </button>
          </div>

          {/* Right Spacer */}
          <div className="w-24 hidden md:block z-10" />
        </footer>
      </div>
    </div>
  );
}
