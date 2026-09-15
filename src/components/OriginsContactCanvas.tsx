"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { blurPlaceholder } from "./img";
import EnquiryForm from "./EnquiryForm";
import { originsServices } from "@/data/services";

export default function OriginsContactCanvas() {
  return (
    <div className="w-full h-full p-6 md:p-12 flex flex-col justify-between relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center gap-4">
        <span className="font-serif-editorial text-xl italic text-[#2B0F14]">04</span>
        <span className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#1C1B18]/60">
          RESERVE YOUR DATES & COMMISSIONS
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Form & Headline */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="font-sans-utility text-[10px] tracking-[0.25em] uppercase text-[#2B0F14] font-semibold block mb-2">
              LET&apos;S CREATE SOMETHING TIMELESS
            </span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl uppercase leading-[1.02] text-[#1C1B18]">
              We&apos;d love to <br />
              <span className="text-[#2B0F14] italic">hear</span> from you.
            </h2>
          </div>

          <p className="font-sans-utility text-xs md:text-sm text-[#1C1B18]/80 leading-relaxed font-light max-w-md">
            From naming ceremonies to housewarmings and family sessions — tell us what you&apos;re celebrating, and we&apos;d be honored to keep it.
          </p>

          <EnquiryForm
            accent="#2B0F14"
            services={originsServices.map((s) => s.name)}
            messagePlaceholder="Tell us about your celebration, dates, or family story..."
            successScript="The first page of your family's archive starts here."
          />
        </div>

        {/* Right Column: Contact Scrapbook Collage */}
        {/* Right Column: Velvet Keepsake Collage */}
        <div className="lg:col-span-6 relative hidden lg:block">
          <div className="relative w-full max-w-md mx-auto">
            {/* Velvet Paper Swatch behind */}
            <div className="absolute -top-6 -left-6 w-32 h-64 bg-[#2B0F14] rounded-xs shadow-xl rotate-[-5deg] paper-card" style={{ clipPath: "polygon(0.5% 0%, 98% 1%, 99.5% 98%, 1% 99%)" }} />

            {/* Main Keepsake Frame — Polaroid with ContactPageImg.jpg (B&W to Color on hover) */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-[#FFFCF5] p-5 pb-8 rounded-xs shadow-[0_16px_32px_rgba(28,27,24,0.14)] rotate-[1deg] relative z-20 border border-[#C9A86A]/12 group cursor-pointer"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-6 masking-tape z-30 rotate-[-2deg]" />
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#E8DFD0] mb-4 ring-1 ring-[#C9A86A]/10 relative">
                <Image
                  src="/Assets/ContactPageImg.jpg"
                  alt="House of Parva family portrait — family photography in Bangalore"
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder(32, 40)}
                  className="object-cover grayscale contrast-[1.06] brightness-[0.98] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute bottom-[22px] left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/15 to-transparent pointer-events-none" />
            </motion.div>

            {/* Top Right Scrap Note */}
            <div className="absolute -right-8 -top-6 z-30 bg-[#FFFCF8] p-4 max-w-[260px] rounded-xs shadow-xl border border-[#C9A86A]/15 rotate-[3.5deg]">
              <div className="absolute -top-3 right-5 w-3 h-7 border-[1.5px] border-[#C9A86A]/40 rounded-full z-40 bg-[#FFFCF8]/60" />
              <p className="font-script text-[15px] leading-snug text-[#1C1B18]">
                Long after the lullabies fade, these pages remain. We cannot wait to keep yours.
              </p>
              <span className="font-sans-utility text-[9px] tracking-[0.18em] uppercase text-[#C9A86A] block text-right mt-2">— The Atelier</span>
            </div>

            {/* Velvet Contact Card */}
            <div className="absolute -bottom-20 -right-12 z-30 bg-[#2B0F14] text-[#F5EED5] p-5 rounded-xs shadow-[0_16px_36px_rgba(0,0,0,0.32)] rotate-[-5.5deg] border border-[#C9A86A]/15 min-w-[270px]">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/30 to-transparent" />
              <span className="font-sans-utility text-[7px] tracking-[0.32em] uppercase text-[#C9A86A] font-semibold block mb-3">
                REACH US AT
              </span>
              <div className="space-y-2.5">
                <a href="mailto:hello@thehouseofparva.in" className="group flex items-center gap-2.5 hover:text-[#C9A86A] transition-colors">
                  <span className="w-6 h-6 rounded-full bg-white/[0.06] border border-[#C9A86A]/20 flex items-center justify-center text-[#C9A86A] group-hover:bg-[#C9A86A] group-hover:text-[#2B0F14] transition-colors">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </span>
                  <span className="font-sans-utility text-[11px] tracking-wide">hello@thehouseofparva.in</span>
                </a>
                <a href="https://instagram.com/originsbyparva" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5 hover:text-[#C9A86A] transition-colors">
                  <span className="w-6 h-6 rounded-full bg-white/[0.06] border border-[#C9A86A]/20 flex items-center justify-center text-[#C9A86A] group-hover:bg-[#C9A86A] group-hover:text-[#2B0F14] transition-colors">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </span>
                  <span className="font-sans-utility text-[11px] tracking-wide">@originsbyparva</span>
                </a>
                <div className="flex items-center gap-2.5 text-[#F5EED5]/80">
                  <span className="w-6 h-6 rounded-full bg-white/[0.06] border border-[#C9A86A]/20 flex items-center justify-center text-[#C9A86A]">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 21s-6.5-4.3-9-9A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9 7c-2.5 4.7-9 9-9 9z" /><circle cx="12" cy="12" r="2.5" /></svg>
                  </span>
                  <span className="font-sans-utility text-[11px] tracking-wide">Bangalore, India & worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Attribution */}
      <div className="border-t border-[#1C1B18]/10 pt-3 flex flex-col sm:flex-row justify-between items-center text-[#1C1B18]/60 font-sans-utility text-[10px] tracking-[0.2em] uppercase gap-2">
        <span>PARVA ORIGINS • A HOUSE OF PARVA BRAND</span>
        <span>A DIVISION OF OCEAN AND ORIGIN LLP</span>
      </div>
    </div>
  );
}
