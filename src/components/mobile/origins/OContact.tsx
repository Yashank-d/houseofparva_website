"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../Reveal";

const fieldCls =
  "w-full bg-transparent border-0 border-b border-[#1C1B18]/20 py-3.5 text-[16px] font-sans-utility text-[#1C1B18] placeholder:text-[#1C1B18]/30 focus:outline-none focus:border-[#2B0F14] rounded-none";

export default function OContact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Failed");
      setSent(true);
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full pt-4 pb-[110px]">
      {/* Velvet invite panel */}
      <Reveal className="mx-4 rounded-[28px] bg-[#2B0F14]/90 backdrop-blur-md p-6 shadow-[0_18px_44px_rgba(43,15,20,0.4)] border border-[#C9A86A]/15" y={20}>
        <p className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#C9A86A] font-bold">
          ★ Let&apos;s create something timeless
        </p>
        <h2 className="font-serif-editorial text-[32px] leading-[0.95] uppercase text-[#F5EED5] mt-2">
          We&apos;d love to
          <br />
          <span className="lowercase italic font-normal text-[#C9A86A]">hear</span> from you.
        </h2>
        <p className="font-sans-utility text-[14px] leading-relaxed text-[#F5EED5]/70 mt-3">
          Naming ceremonies, housewarmings, family sessions — tell us what you&apos;re celebrating,
          and we&apos;d be honored to keep it.
        </p>
      </Reveal>

      {/* Form card — frosted */}
      <Reveal className="mx-4 mt-4 rounded-[28px] bg-[#FFFCF8]/75 backdrop-blur-md p-6 shadow-[0_12px_32px_rgba(28,27,24,0.1)] border border-white/50" y={22}>
        {!sent ? (
          <form onSubmit={submit}>
            <div className="mb-4">
              <label className="block font-sans-utility text-[10px] tracking-[0.22em] uppercase text-[#1C1B18]/50 font-bold">Your name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your name" className={fieldCls} />
            </div>
            <div className="mb-4">
              <label className="block font-sans-utility text-[10px] tracking-[0.22em] uppercase text-[#1C1B18]/50 font-bold">Email address</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="hello@domain.com" className={fieldCls} />
            </div>
            <div className="mb-4">
              <label className="block font-sans-utility text-[10px] tracking-[0.22em] uppercase text-[#1C1B18]/50 font-bold">Phone number</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91" className={fieldCls} />
            </div>
            <div>
              <label className="block font-sans-utility text-[10px] tracking-[0.22em] uppercase text-[#1C1B18]/50 font-bold">Your message</label>
              <textarea required rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your celebration, dates, or family story…" className={`${fieldCls} resize-none`} />
            </div>
            {err && <p className="font-sans-utility text-[14px] text-[#2B0F14] mt-4">{err}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[54px] mt-6 rounded-full bg-[#2B0F14] text-[#F5EED5] font-sans-utility text-[12px] tracking-[0.2em] uppercase font-bold disabled:opacity-60 active:opacity-85 active:scale-[0.98] transition"
            >
              {loading ? "Sending…" : "Send message →"}
            </button>
            <p className="font-sans-utility text-[11px] tracking-[0.14em] uppercase text-[#1C1B18]/35 text-center mt-3">
              We reply within 24 hours
            </p>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-[#2B0F14] mx-auto flex items-center justify-center">
              <span className="text-[#C9A86A] text-xl">✓</span>
            </div>
            <h3 className="font-serif-editorial text-[26px] uppercase text-[#1C1B18] mt-4">Message received</h3>
            <p className="font-script text-[21px] text-[#2B0F14] mt-1">The first page of your family&apos;s archive starts here.</p>
          </motion.div>
        )}
      </Reveal>

      {/* Reach — frosted velvet card */}
      <Reveal className="mx-4 mt-4 rounded-[28px] bg-[#2B0F14]/85 backdrop-blur-md p-5 shadow-[0_18px_44px_rgba(43,15,20,0.35)] border border-[#C9A86A]/15" y={22}>
        <p className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#C9A86A] font-bold px-1">
          Reach us at
        </p>
        <div className="mt-3 space-y-2">
          <a href="mailto:hello@thehouseofparva.in" className="min-h-[56px] rounded-[18px] bg-white/[0.06] border border-[#C9A86A]/20 px-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#C9A86A] flex items-center justify-center shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2B0F14" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </span>
            <span className="font-sans-utility text-[14px] text-[#F5EED5]">hello@thehouseofparva.in</span>
          </a>
          <a href="https://instagram.com/originsbyparva" target="_blank" rel="noopener noreferrer" className="min-h-[56px] rounded-[18px] bg-white/[0.06] border border-[#C9A86A]/20 px-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-white/10 border border-[#C9A86A]/30 flex items-center justify-center shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A86A" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /></svg>
            </span>
            <span className="font-sans-utility text-[14px] text-[#F5EED5]">@originsbyparva</span>
          </a>
          <div className="min-h-[56px] rounded-[18px] px-4 flex items-center">
            <span className="font-sans-utility text-[12px] tracking-[0.14em] uppercase text-[#F5EED5]/55">Bangalore, India & worldwide</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
