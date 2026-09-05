"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Luxury splash — brand mark in, wordmark rises, gold bar sweeps, panel lifts away.
export default function MPreloader({
  mark = "/Assets/Brands/Asset 30.svg",
  sub = "Weddings",
  lightMark = false,
  house = false,
  landRef,
}: {
  mark?: string;
  sub?: string;
  /** true when the mark artwork is already cream (no invert needed) */
  lightMark?: boolean;
  /** true for the gateway: logo + tagline only, mirroring the home header */
  house?: boolean;
  /** gateway header mark to land on — splash content glides into it, bg dissolves */
  landRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const [gone, setGone] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      // Gateway: glide the mark home into the header, dissolve the backdrop.
      // Everything lives in ONE timeline so unmount only happens after the
      // glide completes (independent tweens would be killed mid-flight).
      if (house && landRef?.current && group.current) {
        const g = group.current;
        const land = landRef.current;
        const gr = g.getBoundingClientRect();
        const lr = land.getBoundingClientRect();
        const dy = lr.top + lr.height / 2 - (gr.top + gr.height / 2);
        gsap.set(land, { opacity: 0 });
        const tl = gsap.timeline({ onComplete: () => setGone(true) });
        tl.fromTo(g, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "expo.out" })
          .to(g, { duration: 0.25 })
          .to(g, { y: dy, scale: 0.74, duration: 0.85, ease: "expo.inOut" })
          .to(el, { opacity: 0, duration: 0.55, ease: "power1.inOut" }, "-=0.4")
          .to(land, { opacity: 1, duration: 0.3, ease: "power1.out" }, "-=0.3");
        return;
      }
      const tl = gsap.timeline({ onComplete: () => setGone(true) });
      tl.fromTo(
        ".mpl-mark",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "expo.out" }
      )
        .fromTo(
          ".mpl-word",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
          "-=0.45"
        )
        .fromTo(
          ".mpl-bar",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.65, ease: "expo.inOut" },
          "-=0.35"
        )
        .to(el, { yPercent: -100, duration: 0.75, ease: "expo.inOut", delay: 0.2 });
    }, el);
    return () => ctx.revert();
  }, []);

  if (gone) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(180deg, #3D1620 0%, #1E0A0E 100%)" }}
    >
      {house ? (
        <div ref={group} className="flex flex-col items-center">
          <img
            src={mark}
            alt="Parva"
            className="mpl-mark w-[104px] h-auto"
            style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.4))" }}
          />
          <span className="mpl-word font-sans-utility text-[9px] tracking-[0.3em] uppercase text-[#F5EED5]/70 mt-3 pl-[0.3em]">
            Fine Art & Storytelling House
          </span>
        </div>
      ) : (
        <>
          <img
            src={mark}
            alt="Parva"
            className="mpl-mark w-[88px] h-auto"
            style={
              lightMark
                ? { filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.4))" }
                : { filter: "brightness(0) invert(0.93) sepia(0.08) drop-shadow(0 2px 10px rgba(0,0,0,0.4))" }
            }
          />
          <span className="mpl-word font-sans-utility text-[11px] tracking-[0.5em] uppercase text-[#C9A86A] font-semibold mt-4 pl-[0.5em]">
            {sub}
          </span>
        </>
      )}
      <span className="mpl-bar block w-[120px] h-[2px] bg-[#C9A86A] rounded-full mt-5 origin-center" />
    </div>
  );
}
