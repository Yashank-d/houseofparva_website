"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function LuxuryLandingPage() {
  const [logoError, setLogoError] = useState(false);

  // Framer Motion Variants for serene editorial staging
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-velvet-grain text-[#ede7c7] selection:bg-[#dfcca3] selection:text-[#220609] px-6 py-6 sm:py-10 md:py-16">
      {/* Ambient Velvet Gold Radial Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[950px] h-[600px] bg-gradient-to-tr from-[#dfcca3]/15 via-[#dfcca3]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#dfcca3]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#dfcca3]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Architectural Corner Framing Brackets (Haute Couture Invitation Feel) */}
      <div className="fixed top-5 left-5 sm:top-8 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 border-t border-l border-[#dfcca3]/35 pointer-events-none z-20" />
      <div className="fixed top-5 right-5 sm:top-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 border-t border-r border-[#dfcca3]/35 pointer-events-none z-20" />
      <div className="fixed bottom-5 left-5 sm:bottom-8 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 border-b border-l border-[#dfcca3]/35 pointer-events-none z-20" />
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 border-b border-r border-[#dfcca3]/35 pointer-events-none z-20" />

      {/* Top Soulful Statement (Matching Reference) */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="w-full text-center z-10 pt-6 sm:pt-8 px-4"
      >
        <p className="font-sans font-light text-xs sm:text-base md:text-lg tracking-[0.16em] sm:tracking-[0.18em] text-[#ede7c7]/90">
          Something soulful is taking shape.
        </p>
      </motion.header>

      {/* Main Sanctuary Content - Expanded to fill screen height gracefully */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center text-center z-10 px-4 py-8 sm:py-12"
      >
        {/* Emblem / Logo with Subtle Ambient Aureole */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-10 md:mb-12 relative group">
          {/* Subtle Ambient Shimmer Behind Logo */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#dfcca3]/20 via-transparent to-[#dfcca3]/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative w-64 sm:w-72 md:w-80 h-36 sm:h-44 md:h-52 mx-auto flex items-center justify-center p-2">
            {!logoError ? (
              <Image
                src="/Logo.svg"
                alt="House of Parva Couture Emblem"
                width={360}
                height={220}
                priority
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_24px_rgba(237,231,199,0.25)] transform group-hover:scale-105 transition-transform duration-700"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <span className="font-serif text-4xl md:text-5xl tracking-[0.25em] font-light text-[#ede7c7]">
                  PARVA
                </span>
                <div className="w-16 h-[1px] bg-[#dfcca3] my-2.5" />
                <span className="text-[11px] tracking-[0.45em] uppercase font-sans text-[#dfcca3]">
                  Weddings & Couture
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Majestic Headline (Coming Soon / Launching Soon) */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-10 md:mb-14">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif font-light tracking-tight sm:tracking-wide leading-none text-[#ede7c7]">
            Coming Soon
          </h1>
        </motion.div>

        {/* Delicate Couture Gold Separator Line */}
        <motion.div variants={itemVariants} className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dfcca3]/60 to-transparent mb-6 sm:mb-8" />

        {/* The Premium Brand Summary / Quote (Matching Reference Elegance) */}
        <motion.div
          variants={itemVariants}
          className="max-w-xl mx-auto px-2"
        >
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#ede7c7]/95 leading-relaxed font-light">
            &ldquo;Crafted in heritage. Brought to life at &lsquo;House of Parva&rsquo;.&rdquo;
          </p>
        </motion.div>
      </motion.main>

      {/* Serene Atelier Bottom Sign-off */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="w-full text-center z-10 pb-6 sm:pb-8"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 font-serif text-[11px] sm:text-xs tracking-[0.25em] text-[#dfcca3]/70">
            <span>◈</span>
            <span>HOUSE OF PARVA</span>
            <span>◈</span>
          </div>
          <p className="text-[11px] font-light tracking-[0.12em] text-[#ede7c7]/60">
            © 2026 Ocean and Origin LLP. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}




