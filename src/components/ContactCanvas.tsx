"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactCanvas() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full h-full p-6 md:p-12 flex flex-col justify-between relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center gap-4">
        <span className="font-serif-editorial text-xl italic text-[#641F27]">04</span>
        <span className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#1C1B18]/60">
          RESERVE YOUR DATES & COMMISSIONS
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Form & Headline */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="font-sans-utility text-[10px] tracking-[0.25em] uppercase text-[#641F27] font-semibold block mb-2">
              LET'S CREATE SOMETHING TIMELESS
            </span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl uppercase leading-[1.02] text-[#1C1B18]">
              We'd love to <br />
              <span className="text-[#641F27] italic">hear</span> from you.
            </h2>
          </div>

          <p className="font-sans-utility text-xs md:text-sm text-[#1C1B18]/80 leading-relaxed font-light max-w-md">
            Whether it's your wedding, an intimate celebration, or a story you want to remember forever, we'd be honored to tell it.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
              <div>
                <label className="block font-sans-utility text-[9px] tracking-[0.25em] uppercase text-[#1C1B18]/70 mb-1 font-semibold">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1C1B18]/30 py-2 text-xs font-sans-utility focus:outline-none focus:border-[#641F27] transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans-utility text-[9px] tracking-[0.25em] uppercase text-[#1C1B18]/70 mb-1 font-semibold">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1B18]/30 py-2 text-xs font-sans-utility focus:outline-none focus:border-[#641F27] transition-colors"
                    placeholder="hello@domain.com"
                  />
                </div>

                <div>
                  <label className="block font-sans-utility text-[9px] tracking-[0.25em] uppercase text-[#1C1B18]/70 mb-1 font-semibold">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1B18]/30 py-2 text-xs font-sans-utility focus:outline-none focus:border-[#641F27] transition-colors"
                    placeholder="+91"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans-utility text-[9px] tracking-[0.25em] uppercase text-[#1C1B18]/70 mb-1 font-semibold">
                  YOUR MESSAGE
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1C1B18]/30 py-2 text-xs font-sans-utility focus:outline-none focus:border-[#641F27] transition-colors resize-none"
                  placeholder="Tell us about your wedding dates, venue, or story..."
                />
              </div>

              {/* Dark Torn Button */}
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#12352C] text-[#F5F1E8] hover:bg-[#641F27] font-sans-utility text-xs tracking-[0.25em] uppercase transition-all duration-500 rounded-xs shadow-md flex items-center gap-3 group"
              >
                <span>SEND MESSAGE</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6 bg-[#F5F1E8] rounded-xs scrapbook-shadow text-center my-4 max-w-md"
            >
              <h3 className="font-serif-editorial text-2xl uppercase tracking-wider text-[#1C1B18] mb-2">
                Message Received
              </h3>
              <p className="font-script text-xl text-[#641F27] mb-2">
                "Can't wait to create magic together."
              </p>
              <p className="font-sans-utility text-xs text-[#1C1B18]/80">
                We will get back to you within 24 hours.
              </p>
            </motion.div>
          )}
        </div>

        {/* Right Column: Contact Scrapbook Collage */}
        <div className="lg:col-span-6 relative hidden lg:block">
          <div className="relative w-full max-w-md mx-auto">
            {/* Dark Red Swatch behind */}
            <div className="absolute -top-6 -left-6 w-32 h-64 bg-[#641F27] rounded-xs shadow-md rotate-[-5deg]" />

            {/* Main Polaroid */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-[#F5F1E8] p-5 pb-6 rounded-xs scrapbook-shadow rotate-[1deg] relative z-20"
            >
              {/* Top Masking Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-6 masking-tape z-30 rotate-[-2deg]" />

              <div className="aspect-[4/5] w-full overflow-hidden bg-[#E8DFD0] mb-3">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85"
                  alt="Couple Kissing in Mountains"
                  className="w-full h-full object-cover grayscale opacity-95"
                />
              </div>

              <p className="font-script text-xl text-[#1C1B18] text-center">
                Can't wait to create magic together.
              </p>
            </motion.div>

            {/* Top Right Scrap Note with Paperclip */}
            <div className="absolute -right-8 -top-6 z-30 bg-[#E8DFD0] p-4 max-w-xs rounded-xs shadow-md border border-[#1C1B18]/10 rotate-[4deg]">
              <div className="absolute -top-3 right-4 w-3 h-8 border-2 border-[#1C1B18]/50 rounded-full z-40" />
              <p className="font-script text-base text-[#1C1B18] leading-tight">
                Long after the music fades, your story remains. We cannot wait to preserve yours.
              </p>
              <span className="font-script text-xs text-[#641F27] block text-right mt-1">♡</span>
            </div>

            {/* Dark Emerald Contact Info Swatch */}
            <div className="absolute -bottom-8 -right-6 z-30 bg-[#12352C] text-[#F5F1E8] p-5 max-w-xs rounded-xs shadow-lg rotate-[-3deg] space-y-3">
              <span className="font-sans-utility text-[9px] tracking-[0.3em] uppercase text-[#CFA4A5] font-semibold block">
                REACH US AT
              </span>

              <div className="space-y-2 font-sans-utility text-xs text-[#F5F1E8]/90">
                <p>✉ hello@thehouseofparva.in</p>
                <p>📷 @weddingsbyparva</p>
                <p>📍 Bangalore, India & worldwide</p>
              </div>
            </div>

            {/* Bottom Vintage Postage Stamp */}
            <div className="absolute -bottom-10 left-4 z-40 bg-[#641F27] text-[#F5F1E8] p-3 rounded-xs border border-[#F5F1E8]/20 shadow-md rotate-[-10deg] flex flex-col items-center">
              <span className="font-serif-editorial text-[8px] uppercase tracking-widest">POSTE PARVA</span>
              <span className="font-serif-editorial text-2xl font-bold">50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Attribution */}
      <div className="border-t border-[#1C1B18]/10 pt-3 flex flex-col sm:flex-row justify-between items-center text-[#1C1B18]/60 font-sans-utility text-[10px] tracking-[0.2em] uppercase gap-2">
        <span>PARVA WEDDINGS • A HOUSE OF PARVA BRAND</span>
        <span>A DIVISION OF OCEAN AND ORIGIN LLP</span>
      </div>
    </div>
  );
}
