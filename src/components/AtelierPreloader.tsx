"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Simple atelier veil — parchment backdrop matching the paper canvas,
// atelier mark rises, wordmark + hairline sweep, then the whole veil
// melts away. Desktop only (mobile shells already run MPreloader).
export default function AtelierPreloader({
  mark,
  title,
  accent = "#641F27",
}: {
  mark: string;
  title: string;
  accent?: string;
}) {
  const [gone, setGone] = useState(false);
  const [skip, setSkip] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setSkip(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (skip) return;
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setGone(true) });
      tl.fromTo(
        ".ap-mark",
        { scale: 0.88, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "expo.out" }
      )
        .fromTo(
          ".ap-word",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
          "-=0.5"
        )
        .fromTo(
          ".ap-bar",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.65, ease: "expo.inOut" },
          "-=0.4"
        )
        .to({}, { duration: 0.3 })
        .to(el, { opacity: 0, duration: 0.8, ease: "power2.out" });
    }, el);
    return () => ctx.revert();
  }, [skip]);

  if (skip || gone) return null;

  return (
    <div
      ref={root}
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#EAE1D2" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 42%, rgba(201,168,106,0.16) 0%, transparent 65%)",
        }}
      />
      <div className="relative flex flex-col items-center px-6 text-center">
        <span className="font-sans-utility text-[9px] tracking-[0.4em] uppercase text-[#1C1B18]/45 pl-[0.4em]">
          The House of Parva
        </span>
        <img src={mark} alt={title === "Origins" ? "Parva Origins" : "Parva Weddings"} className="ap-mark w-[92px] h-auto mt-5" />
        <span
          className="ap-word font-serif-editorial text-[26px] tracking-[0.22em] uppercase mt-4 pl-[0.22em]"
          style={{ color: accent }}
        >
          {title}
        </span>
        <span className="ap-bar block w-[120px] h-px mt-5 origin-center" style={{ background: accent }} />
      </div>
    </div>
  );
}
