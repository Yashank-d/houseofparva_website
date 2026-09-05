"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { artisticWorks } from "@/data/portfolioData";
import Reveal from "./Reveal";

const heroSrc = (src: string) =>
  src.includes("res.cloudinary.com") && src.includes("/upload/")
    ? src.replace("/upload/", "/upload/w_1080,q_auto,f_auto/")
    : src;

const slides = [
  {
    src: "/Assets/Home_page_image_1200.jpg",
    couple: "Ashwathy & Abheek",
    meta: "June 13, 2026",
  },
  ...artisticWorks.map((w) => ({
    src: heroSrc(w.mainImage),
    couple: w.couple.replace(" and ", " & "),
    meta: `${w.location} • ${w.date}`,
  })),
];

export default function MHome({ onNavigate }: { onNavigate: (i: number) => void }) {
  const [s, setS] = useState(0);
  const [dir, setDir] = useState(1);
  const sx = useRef<number | null>(null);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => {
      setDir(1);
      setS((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const go = (d: 1 | -1) => {
    setDir(d);
    setS((p) => (p + d + slides.length) % slides.length);
  };
  return (
    <div className="w-full pt-3 pb-[110px]">
      {/* Reserve hero — emerald panel, gold greeting */}
      <div className="mx-4 rounded-[28px] bg-[#2B0F14] overflow-hidden shadow-[0_18px_44px_rgba(43,15,20,0.35)]">
        <div className="px-6 pt-7 pb-5">
          <p className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#C9A86A] font-semibold">
            ★ Wedding Photography & Film
          </p>
          <h1 className="font-serif-editorial text-[36px] leading-[0.95] uppercase text-[#F5F1E8] mt-2">
            Stories
            <br />
            we&apos;ve told,
            <br />
            <span className="lowercase italic font-normal text-[#C9A86A]">forever felt.</span>
          </h1>
          <p className="font-scribble text-[20px] text-[#F5F1E8]/75 mt-2">
            Welcome, to our corner of timeless love…
          </p>
        </div>
        <div className="px-4 pb-4">
          <div
            className="relative rounded-[20px] overflow-hidden aspect-[4/5] bg-[#1E0A0E]"
            onTouchStart={(e) => (sx.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (sx.current === null) return;
              const d = sx.current - e.changedTouches[0].clientX;
              if (Math.abs(d) > 44) go(d > 0 ? 1 : -1);
              sx.current = null;
            }}
          >
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={s}
                custom={dir}
                initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={slides[s].src}
                  alt={slides[s].couple}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#C9A86A] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B0F14]" />
              <span className="font-sans-utility text-[9px] tracking-[0.16em] uppercase text-[#2B0F14] font-bold">Featured</span>
            </div>
            <div className="absolute bottom-3.5 left-4 right-20 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-script text-[22px] leading-none text-white">{slides[s].couple}</p>
                  <p className="font-sans-utility text-[9px] tracking-[0.2em] uppercase text-white/70 mt-1">{slides[s].meta}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* slide dots */}
            <div className="absolute bottom-3.5 right-4 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => {
                    setDir(i > s ? 1 : -1);
                    setS(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${i === s ? "w-5 bg-[#C9A86A]" : "w-1.5 bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 pb-7">
          <motion.button
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => onNavigate(1)}
            className="w-full h-[54px] rounded-full bg-[#C9A86A] text-[#2B0F14] font-sans-utility text-[12px] tracking-[0.2em] uppercase font-bold active:opacity-85 active:scale-[0.98] transition flex items-center justify-center gap-2"
          >
            View Portfolio <span>→</span>
          </motion.button>
          <p className="font-sans-utility text-[12px] text-[#F5F1E8]/55 text-center mt-3">
            Candid moments • Raw emotions • Timeless memories
          </p>
        </div>
      </div>

      {/* Quote card — frosted cream, gold seal line */}
      <Reveal className="mx-4 mt-4 rounded-[24px] bg-[#FFFCF8]/70 backdrop-blur-md p-6 shadow-[0_10px_30px_rgba(28,27,24,0.08)] border border-white/50" y={22}>
        <div className="w-10 h-[3px] bg-[#C9A86A] rounded-full" />
        <p className="font-script text-[21px] leading-snug text-[#1C1B18] mt-3">
          Some stories are meant to be felt, not just seen.
        </p>
        <p className="font-script text-[18px] text-[#641F27] mt-1">— Parva</p>
        <p className="font-sans-utility text-[10px] tracking-[0.24em] uppercase text-[#1C1B18]/40 mt-4">
          Parva Weddings • Bangalore
        </p>
      </Reveal>
    </div>
  );
}
