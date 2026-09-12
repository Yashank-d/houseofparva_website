"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Maison Reveal — desktop gateway splash.
// Velvet backdrop identical to the gateway, maison mark rises with gold
// hairline, then the extras melt away and the mark glides home into the
// header while the backdrop dissolves (same blend as mobile MPreloader).
export default function GatewayPreloader({
  onDone,
  landRef,
}: {
  onDone?: () => void;
  landRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const [gone, setGone] = useState(false);
  const [skip, setSkip] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const doneRef = useRef(onDone);

  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  // Never trap phones that briefly render the desktop branch before
  // the width check flips to MGateway (or on resize to mobile).
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

    // Lock scroll behind the veil for a clean reveal.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const g = group.current;
      const land = landRef?.current;

      // If the header mark isn't mounted, fall back to a simple dissolve.
      if (!g || !land) {
        const tl = gsap.timeline({
          onComplete: () => {
            document.body.style.overflow = prevOverflow;
            doneRef.current?.();
            setGone(true);
          },
        });
        tl.fromTo(
          ".gp-mark",
          { scale: 0.86, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "expo.out" }
        ).to(el, { opacity: 0, duration: 0.7, ease: "power2.out", delay: 0.3 });
        return;
      }

      // Measured lazily at glide time (function-based tween values) so the
      // landing uses final layout after fonts settle — no 1px drift.
      // Anchored logo-to-logo: scale pins around the splash logo center and
      // translates that point exactly onto the header logo center.
      const measure = () => {
        const gr = g.getBoundingClientRect();
        const sr = g.querySelector(".gp-mark")?.getBoundingClientRect();
        const tr = land.querySelector("img")?.getBoundingClientRect();
        const lr = land.getBoundingClientRect();
        const scx = sr ? sr.left + sr.width / 2 : gr.left + gr.width / 2;
        const scy = sr ? sr.top + sr.height / 2 : gr.top + gr.height / 2;
        const tcx = tr ? tr.left + tr.width / 2 : lr.left + lr.width / 2;
        const tcy = tr ? tr.top + tr.height / 2 : lr.top + lr.height / 2;
        return {
          dx: tcx - scx,
          dy: tcy - scy,
          scale: sr && sr.width > 0 && tr ? tr.width / sr.width : 0.82,
          origin: `${((scx - gr.left) / gr.width) * 100}% ${((scy - gr.top) / gr.height) * 100}%`,
        };
      };

      gsap.set(land, { opacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = prevOverflow;
          setGone(true);
        },
      });
      tl.fromTo(
        ".gp-mark",
        { scale: 0.86, opacity: 0, filter: "blur(6px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "expo.out" }
      )
        .fromTo(
          ".gp-tag",
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
          "-=0.55"
        )
        .fromTo(
          ".gp-fade",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: "expo.out", stagger: 0.09 },
          "-=0.5"
        )
        .to({}, { duration: 0.35 })
        // Extras melt away — only the shared mark + tagline glide home.
        .to(".gp-fade", { y: -10, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.05 })
        // Cue the gateway body to rise underneath while the veil dissolves.
        .add(() => doneRef.current?.())
        .add(() => gsap.set(g, { transformOrigin: measure().origin }))
        .to(g, {
          x: () => measure().dx,
          y: () => measure().dy,
          scale: () => measure().scale,
          duration: 1.1,
          ease: "expo.inOut",
        })
        .to(el, { opacity: 0, duration: 0.85, ease: "power2.out" }, "-=0.6")
        .to(land, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.55");
    }, el);
    return () => {
      ctx.revert();
      document.body.style.overflow = prevOverflow;
    };
  }, [skip, landRef]);

  if (skip || gone) return null;

  return (
    <div
      ref={root}
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2B0F14] text-[#F5EED5] overflow-hidden"
    >
      {/* velvet depth — identical to the gateway so the dissolve is seamless */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 88% 68% at 50% 30%, rgba(201,168,106,0.078) 0%, rgba(255,245,220,0.035) 18%, transparent 62%), radial-gradient(ellipse 130% 88% at 50% 105%, rgba(0,0,0,0.45) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.95) 0.85px, transparent 0.85px)",
          backgroundSize: "17px 17px",
        }}
      />
      {/* outer frame */}
      <div className="pointer-events-none absolute inset-[14px] border border-[#F5EED5]/07" />
      <div className="pointer-events-none absolute top-[14px] left-[14px] w-5 h-5 border-l border-t border-[#C9A86A]/28" />
      <div className="pointer-events-none absolute top-[14px] right-[14px] w-5 h-5 border-r border-t border-[#C9A86A]/28" />
      <div className="pointer-events-none absolute bottom-[14px] left-[14px] w-5 h-5 border-l border-b border-[#C9A86A]/28" />
      <div className="pointer-events-none absolute bottom-[14px] right-[14px] w-5 h-5 border-r border-b border-[#C9A86A]/28" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <span className="gp-fade font-sans-utility text-[10.5px] tracking-[0.48em] uppercase text-[#C9A86A] pl-[0.48em]">
          Welcome to
        </span>
        {/* shared element — glides into the header mark */}
        <div ref={group} className="flex flex-col items-center">
          <img
            src="/Parva_logo.svg"
            alt=""
            className="gp-mark w-[104px] h-auto mt-5"
            style={{ filter: "brightness(0) invert(0.94) sepia(0.12) saturate(0.3) drop-shadow(0 2px 12px rgba(0,0,0,0.45))" }}
          />
          <span className="gp-tag flex items-center gap-3 mt-3">
            <span className="h-px w-8 bg-[#C9A86A]/22" />
            <span className="font-sans-utility text-[9px] tracking-[0.36em] uppercase text-[#F5EED5]/55 pl-[0.36em]">
              Fine Art & Storytelling House
            </span>
            <span className="h-px w-8 bg-[#C9A86A]/22" />
          </span>
        </div>
        <h1 className="gp-fade font-serif-editorial text-[30px] md:text-[36px] tracking-[0.14em] uppercase font-light leading-none mt-5 pl-[0.14em]">
          The House of Parva
        </h1>
        <span className="gp-fade block w-[148px] h-px bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent mt-6 origin-center" />
        <span className="gp-fade text-[#C9A86A] text-[11px] leading-none mt-4">❦</span>
      </div>
    </div>
  );
}
