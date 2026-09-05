"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function OriginsContactCanvas() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

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
                  className="w-full bg-transparent border-b border-[#1C1B18]/30 py-2 text-xs font-sans-utility focus:outline-none focus:border-[#2B0F14] transition-colors"
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
                    className="w-full bg-transparent border-b border-[#1C1B18]/30 py-2 text-xs font-sans-utility focus:outline-none focus:border-[#2B0F14] transition-colors"
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
                    className="w-full bg-transparent border-b border-[#1C1B18]/30 py-2 text-xs font-sans-utility focus:outline-none focus:border-[#2B0F14] transition-colors"
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
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1C1B18]/30 py-2 text-xs font-sans-utility focus:outline-none focus:border-[#2B0F14] transition-colors resize-none"
                  placeholder="Tell us about your celebration, dates, or family story..."
                />
              </div>

              {error && (
                <p className="text-xs text-[#2B0F14] bg-[#F5F1E8] border border-[#2B0F14]/20 px-3 py-2 rounded-xs font-sans-utility">{error}</p>
              )}
              {/* Velvet Button */}
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3.5 bg-[#2B0F14] text-[#F5EED5] hover:bg-[#641F27] disabled:opacity-60 disabled:cursor-not-allowed font-sans-utility text-xs tracking-[0.25em] uppercase transition-all duration-500 rounded-xs shadow-md flex items-center gap-3 group"
              >
                <span>{loading ? "SENDING…" : "SEND MESSAGE"}</span>
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
              <p className="font-script text-xl text-[#2B0F14] mb-2">
                "The first page of your family&apos;s archive starts here."
              </p>
              <p className="font-sans-utility text-xs text-[#1C1B18]/80">
                We will get back to you within 24 hours.
              </p>
            </motion.div>
          )}
        </div>

        {/* Right Column: Velvet Keepsake Collage */}
        <div className="lg:col-span-6 relative hidden lg:block">
          <div className="relative w-full max-w-md mx-auto">
            {/* Velvet Paper Swatch behind */}
            <div className="absolute -top-6 -left-6 w-32 h-64 bg-[#2B0F14] rounded-xs shadow-xl rotate-[-5deg] paper-card" style={{ clipPath: "polygon(0.5% 0%, 98% 1%, 99.5% 98%, 1% 99%)" }} />

            {/* Main Keepsake Frame — monogram placeholder until stories arrive */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-[#FFFCF5] p-5 pb-8 rounded-xs shadow-[0_16px_32px_rgba(28,27,24,0.14)] rotate-[1deg] relative z-20 border border-[#C9A86A]/12"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-6 masking-tape z-30 rotate-[-2deg]" />
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#E8DFD0] mb-4 ring-1 ring-[#C9A86A]/10 flex flex-col items-center justify-center border border-dashed border-[#C9A86A]/50">
                <span className="font-serif-editorial text-7xl text-[#C9A86A] leading-none">O</span>
                <p className="font-script text-2xl text-[#1C1B18]/70 mt-3 px-8 text-center">
                  Our first family frames are on their way…
                </p>
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
            <img
              src="/Assets/seal/parva_seal_256.png"
              alt="Parva Seal"
              className="absolute -bottom-8 -left-8 w-20 h-20 md:w-24 md:h-24 object-contain rotate-[-12deg] opacity-90 drop-shadow-md pointer-events-none z-20"
            />
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
