"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface EnquiryFormProps {
  /** deep brand tone for active states */
  accent: string;
  /** service names offered as "enquiring about" chips */
  services: string[];
  messagePlaceholder: string;
  successScript: string;
  sealSrc?: string;
}

export default function EnquiryForm({
  accent,
  services,
  messagePlaceholder,
  successScript,
  sealSrc = "/Assets/seal/parva_seal_256.png",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [service, setService] = useState("");
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
        body: JSON.stringify({ ...formData, service }),
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

  const fieldWrap =
    "group border-b border-[#1C1B18]/25 focus-within:border-[#C9A86A] transition-colors pb-1";
  const labelCls =
    "block font-sans-utility text-[9px] tracking-[0.25em] uppercase text-[#1C1B18]/55 group-focus-within:text-[var(--acc)] font-semibold transition-colors";
  const inputCls =
    "w-full bg-transparent py-2 text-[13px] font-sans-utility text-[#1C1B18] placeholder:text-[#1C1B18]/30 focus:outline-none";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative p-7 bg-[#FFFCF5] rounded-[6px] border border-[#C9A86A]/35 shadow-[0_16px_32px_rgba(28,27,24,0.12)] text-center max-w-lg overflow-hidden"
      >
        <span aria-hidden className="absolute inset-2 border border-[#C9A86A]/40 pointer-events-none rounded-[4px]" />
        <img src={sealSrc} alt="Parva seal" className="w-14 h-14 object-contain mx-auto" />
        <h3 className="font-serif-editorial text-2xl uppercase tracking-wider text-[#1C1B18] mt-3">
          Message Received
        </h3>
        <p className="font-script text-2xl mt-1" style={{ color: accent }}>
          {successScript}
        </p>
        <div className="w-16 h-px bg-[#C9A86A]/60 mx-auto mt-4" />
        <p className="font-sans-utility text-[11px] tracking-[0.14em] uppercase text-[#1C1B18]/60 mt-3">
          We will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ "--acc": accent } as React.CSSProperties}
      className="relative rounded-[6px] bg-[#FFFCF5]/95 border border-[#C9A86A]/35 shadow-[0_16px_32px_rgba(28,27,24,0.12)] px-6 py-6 md:px-7 max-w-lg overflow-hidden"
    >
      <span aria-hidden className="absolute inset-2 border border-[#C9A86A]/40 pointer-events-none rounded-[4px]" />
      <span aria-hidden className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C9A86A]" />
      <span aria-hidden className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C9A86A]" />
      <span aria-hidden className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C9A86A]" />
      <span aria-hidden className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C9A86A]" />

      <div className="relative">
        <p className="font-sans-utility text-[9px] tracking-[0.3em] uppercase text-[#1C1B18]/60 font-semibold">
          A note to the House
        </p>
        <p className="font-script text-[22px] leading-tight text-[#1C1B18]/80 mt-0.5">
          we reply within a day.
        </p>

        {/* Service selector — single dropdown, no clutter */}
        <label className="group block mt-5 border-b border-[#1C1B18]/25 focus-within:border-[#C9A86A] transition-colors pb-1">
          <span className="block font-sans-utility text-[9px] tracking-[0.25em] uppercase text-[#1C1B18]/55 group-focus-within:text-[var(--acc)] font-semibold transition-colors">
            I&apos;m enquiring about
          </span>
          <span className="relative block">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full appearance-none bg-transparent py-2 pr-8 text-[13px] font-serif-editorial uppercase tracking-[0.08em] text-[#1C1B18] focus:outline-none cursor-pointer"
            >
              <option value="">Choose a celebration…</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <svg
              aria-hidden
              className="absolute right-1 top-1/2 -translate-y-1/2 text-[#C9A86A] pointer-events-none"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </label>

        <div className="mt-5 space-y-4">
          <label className={`group block ${fieldWrap}`}>
            <span className={labelCls}>Your name</span>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputCls}
              placeholder="Enter your name"
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className={`group block ${fieldWrap}`}>
              <span className={labelCls}>Email address</span>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputCls}
                placeholder="hello@domain.com"
              />
            </label>
            <label className={`group block ${fieldWrap}`}>
              <span className={labelCls}>Phone number</span>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputCls}
                placeholder="+91"
              />
            </label>
          </div>

          <label className={`group block ${fieldWrap}`}>
            <span className={labelCls}>Your message</span>
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputCls} resize-none`}
              placeholder={messagePlaceholder}
            />
          </label>
        </div>

        {error && (
          <p className="text-xs bg-[#F5F1E8] border px-3 py-2 rounded-xs font-sans-utility mt-4" style={{ color: accent, borderColor: `${accent}33` }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#C9A86A] text-[#2B0F14] font-sans-utility text-[11px] tracking-[0.25em] uppercase font-bold shadow-[0_10px_24px_rgba(201,168,106,0.4)] hover:brightness-[1.06] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition cursor-pointer"
        >
          <span>{loading ? "Sealing…" : "Seal & send"}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </form>
  );
}
