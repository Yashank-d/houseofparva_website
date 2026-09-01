"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export default function LuxuryLandingPage() {
  const [logoError, setLogoError] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Target: September 14, 2026 at 11:55 AM IST (UTC+05:30)
  const targetDate = new Date("2026-09-14T11:55:00+05:30").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15,
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="relative h-dvh max-h-dvh w-full flex flex-col justify-between items-center overflow-hidden bg-velvet-grain text-[#ede7c7] selection:bg-[#dfcca3] selection:text-[#220609] px-4 sm:px-6 py-3 sm:py-6 md:py-8">
      {/* Ambient Velvet Gold Radial Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] md:w-[950px] h-[550px] bg-gradient-to-tr from-[#dfcca3]/15 via-[#dfcca3]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#dfcca3]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#dfcca3]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Architectural Corner Framing Brackets */}
      <div className="fixed top-3 left-3 sm:top-6 sm:left-6 w-5 h-5 sm:w-8 sm:h-8 border-t border-l border-[#dfcca3]/30 pointer-events-none z-20" />
      <div className="fixed top-3 right-3 sm:top-6 sm:right-6 w-5 h-5 sm:w-8 sm:h-8 border-t border-r border-[#dfcca3]/30 pointer-events-none z-20" />
      <div className="fixed bottom-3 left-3 sm:bottom-6 sm:left-6 w-5 h-5 sm:w-8 sm:h-8 border-b border-l border-[#dfcca3]/30 pointer-events-none z-20" />
      <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 w-5 h-5 sm:w-8 sm:h-8 border-b border-r border-[#dfcca3]/30 pointer-events-none z-20" />

      {/* Top Statement */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="w-full text-center z-10 pt-1 sm:pt-2 px-4 shrink-0"
      >
        <p className="font-sans font-light text-xs sm:text-sm md:text-base tracking-[0.18em] text-[#ede7c7]/90 uppercase">
          Something soulful is taking shape
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center text-center z-10 px-4 my-auto overflow-hidden"
      >
        {/* Emblem / Logo */}
        <motion.div variants={itemVariants} className="mb-2 sm:mb-4 md:mb-6 relative group">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#dfcca3]/20 via-transparent to-[#dfcca3]/20 blur-2xl opacity-60 pointer-events-none" />

          <div className="relative w-48 sm:w-60 md:w-72 h-24 sm:h-32 md:h-36 mx-auto flex items-center justify-center p-2">
            {!logoError ? (
              <Image
                src="/Logo.svg"
                alt="House of Parva Couture Emblem"
                width={320}
                height={180}
                priority
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_24px_rgba(237,231,199,0.25)]"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <span className="font-serif text-3xl md:text-4xl tracking-[0.25em] font-light text-[#ede7c7]">
                  PARVA
                </span>
                <div className="w-12 h-[1px] bg-[#dfcca3] my-2" />
                <span className="text-[10px] tracking-[0.4em] uppercase font-sans text-[#dfcca3]">
                  Weddings & Couture
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="mb-3 sm:mb-5 md:mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight leading-none text-[#ede7c7]">
            Launching Soon
          </h1>
        </motion.div>

        {/* Live Countdown Clock */}
        <motion.div variants={itemVariants} className="w-full max-w-lg mx-auto mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-6">
            {/* Days */}
            <div className="flex flex-col items-center min-w-[58px] sm:min-w-[76px] md:min-w-[88px] p-2 sm:p-3 rounded-xs border border-[#dfcca3]/25 bg-[#220609]/40 backdrop-blur-xs">
              <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#dfcca3] tracking-wide">
                {mounted ? formatNumber(timeLeft.days) : "--"}
              </span>
              <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[0.25em] uppercase text-[#ede7c7]/70 mt-1">
                Days
              </span>
            </div>

            <span className="font-serif text-lg sm:text-2xl text-[#dfcca3]/50 -mt-3">:</span>

            {/* Hours */}
            <div className="flex flex-col items-center min-w-[58px] sm:min-w-[76px] md:min-w-[88px] p-2 sm:p-3 rounded-xs border border-[#dfcca3]/25 bg-[#220609]/40 backdrop-blur-xs">
              <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#dfcca3] tracking-wide">
                {mounted ? formatNumber(timeLeft.hours) : "--"}
              </span>
              <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[0.25em] uppercase text-[#ede7c7]/70 mt-1">
                Hours
              </span>
            </div>

            <span className="font-serif text-lg sm:text-2xl text-[#dfcca3]/50 -mt-3">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center min-w-[58px] sm:min-w-[76px] md:min-w-[88px] p-2 sm:p-3 rounded-xs border border-[#dfcca3]/25 bg-[#220609]/40 backdrop-blur-xs">
              <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#dfcca3] tracking-wide">
                {mounted ? formatNumber(timeLeft.minutes) : "--"}
              </span>
              <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[0.25em] uppercase text-[#ede7c7]/70 mt-1">
                Mins
              </span>
            </div>

            <span className="font-serif text-lg sm:text-2xl text-[#dfcca3]/50 -mt-3">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center min-w-[58px] sm:min-w-[76px] md:min-w-[88px] p-2 sm:p-3 rounded-xs border border-[#dfcca3]/25 bg-[#220609]/40 backdrop-blur-xs">
              <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#dfcca3] tracking-wide">
                {mounted ? formatNumber(timeLeft.seconds) : "--"}
              </span>
              <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[0.25em] uppercase text-[#ede7c7]/70 mt-1">
                Secs
              </span>
            </div>
          </div>

          <p className="font-sans text-[9.5px] sm:text-xs tracking-[0.22em] text-[#dfcca3]/75 uppercase mt-3">
            September 14, 2026 • 11:55 AM IST
          </p>
        </motion.div>

        {/* Separator Line */}
        <motion.div variants={itemVariants} className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dfcca3]/60 to-transparent mb-3 sm:mb-4" />

        {/* Brand Quote */}
        <motion.div variants={itemVariants} className="max-w-xl mx-auto px-2">
          <p className="font-serif italic text-base sm:text-xl md:text-2xl text-[#ede7c7]/95 leading-relaxed font-light">
            &ldquo;Crafted in heritage. Brought to life at &lsquo;House of Parva&rsquo;.&rdquo;
          </p>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="w-full text-center z-10 pb-1 sm:pb-2 shrink-0"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-3 font-serif text-[9.5px] sm:text-xs tracking-[0.25em] text-[#dfcca3]/70">
            <span>◈</span>
            <span>HOUSE OF PARVA</span>
            <span>◈</span>
          </div>
          <p className="text-[9.5px] sm:text-[10.5px] font-light tracking-[0.1em] text-[#ede7c7]/60">
            © 2026 Ocean and Origin LLP. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
