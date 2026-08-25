"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SidebarScrapbook from "@/components/SidebarScrapbook";
import HomeCanvas from "@/components/HomeCanvas";
import PortfolioCanvas from "@/components/PortfolioCanvas";
import AboutCanvas from "@/components/AboutCanvas";
import ContactCanvas from "@/components/ContactCanvas";

export default function ParvaWeddingsPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const isLockedRef = useRef(false);

  const totalPages = 4;

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Keyboard Arrow Key Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        goToNextPage();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        goToPrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Strict Sequential Viewport Wheel Scroll Listener (Home -> Portfolio -> About -> Contact)
  useEffect(() => {
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
  }, []);

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

        {/* Bottom Control Bar (Footer line shifted slightly higher with padding) */}
        <footer className="w-full pt-4 pb-5 px-8 md:px-12 flex justify-between items-center relative z-40 border-t border-[#1C1B18]/15 text-xs font-sans-utility tracking-[0.2em] uppercase select-none">
          {/* Left Bottom: Minimal SVG Icons + Stacked Text (Slightly Bigger) */}
          <div className="flex flex-col items-start gap-1.5 text-xs md:text-[13px] text-[#1C1B18]/85 z-10">
            {/* Instagram Link with Minimal SVG Icon */}
            <a
              href="https://instagram.com/weddingsbyparva"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-[#641F27] transition-colors font-medium tracking-[0.18em]"
            >
              <svg className="w-4 h-4 text-[#1C1B18]/70 group-hover:text-[#641F27] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>@weddingsbyparva</span>
            </a>

            {/* Email Link with Minimal SVG Envelope Icon */}
            <a
              href="mailto:hello@thehouseofparva.in"
              className="group flex items-center gap-2 hover:text-[#641F27] transition-colors font-medium tracking-[0.18em] lowercase font-sans text-xs md:text-[13px]"
            >
              <svg className="w-4 h-4 text-[#1C1B18]/70 group-hover:text-[#641F27] transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
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
