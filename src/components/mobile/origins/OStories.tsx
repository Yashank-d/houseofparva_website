"use client";
import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { originGallery } from "@/data/originsData";
import Reveal from "../Reveal";

interface Pin {
  src: string;
}

const thumb = (src: string) =>
  src.includes("res.cloudinary.com") && src.includes("/upload/")
    ? src.replace("/upload/", "/upload/w_640,q_auto,f_auto/")
    : src;

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const FAMILY = "Parva Origins";
const PLACE = "Bangalore, Karnataka";

function PinCard({ p, eager, onOpen }: { p: Pin; eager?: boolean; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="block w-full text-left outline-none [content-visibility:auto] [contain-intrinsic-size:280px_380px]"
    >
      <div className="relative overflow-hidden rounded-[16px] bg-[#E8DFD0]">
        <img
          src={thumb(p.src)}
          alt="Parva Origins family photography in Bangalore — naming ceremony, housewarming and family celebration"
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-auto block"
        />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
        <p className="absolute bottom-2.5 left-3 right-3 font-script text-[17px] leading-none text-white drop-shadow">
          {FAMILY}
        </p>
      </div>
      <p className="font-sans-utility text-[9px] tracking-[0.16em] uppercase text-[#1C1B18]/40 mt-1.5 px-0.5">
        {PLACE}
      </p>
    </button>
  );
}

export default function OStories({ onNavigate }: { onNavigate?: (i: number) => void }) {
  const [idx, setIdx] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const touch = useRef<{ x: number; y: number } | null>(null);

  // Flat gallery, shuffled once per visit. Odd counts drop the last entry
  // so the two columns always pair evenly.
  const wall = useMemo<Pin[]>(() => {
    const list = originGallery.length % 2 === 1 ? originGallery.slice(0, -1) : originGallery;
    return shuffled(list.map((src) => ({ src })));
  }, []);

  const go = (d: 1 | -1) => {
    if (idx === null) return;
    setDir(d);
    setIdx((idx + d + wall.length) % wall.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = touch.current.x - e.changedTouches[0].clientX;
    const dy = touch.current.y - e.changedTouches[0].clientY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx > 0 ? 1 : -1);
    else if (dy < -110) setIdx(null);
    touch.current = null;
  };

  const open = (i: number) => {
    setDir(1);
    setIdx(i);
  };

  const view = idx !== null ? wall[idx] : null;

  return (
    <div className="w-full pt-4 pb-[110px]">
      <Reveal className="px-6" y={20}>
        <p className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#2B0F14] font-bold">
          ★ The Family Gallery
        </p>
        <h2 className="font-serif-editorial text-[32px] leading-[0.95] uppercase text-[#1C1B18] mt-2">
          Every beginning,
          <br />
          <span className="lowercase italic font-normal text-[#2B0F14]">beautifully kept.</span>
        </h2>
        <p className="font-sans-utility text-[12px] text-[#1C1B18]/45 mt-2">
          {wall.length > 0
            ? `${wall.length} frames • tap any photo to enter the viewer`
            : "The first pages are still blank"}
        </p>
      </Reveal>

      {wall.length === 0 ? (
        <Reveal className="px-4 mt-5" y={24}>
          <div className="rounded-[24px] bg-[#2B0F14]/90 backdrop-blur-md p-6 text-center shadow-[0_18px_44px_rgba(43,15,20,0.4)] border border-[#C9A86A]/15">
            <div className="mx-auto p-6 border border-dashed border-[#C9A86A]/50 rounded-[18px] inline-block">
              <span className="font-serif-editorial text-6xl text-[#C9A86A] leading-none block">O</span>
            </div>
            <p className="font-serif-editorial text-[24px] uppercase text-[#F5EED5] leading-tight mt-4">
              The shelves are ready,
              <br />
              <span className="lowercase italic font-normal text-[#C9A86A]">the pages are blank.</span>
            </p>
            <p className="font-script text-[20px] text-[#F5EED5]/75 mt-2 leading-snug">
              Naming mornings, housewarmings, festival tables — our first family records are on their way.
            </p>
            <button
              onClick={() => onNavigate?.(4)}
              className="w-full h-[50px] mt-4 rounded-full bg-[#C9A86A] text-[#2B0F14] font-sans-utility text-[11px] tracking-[0.2em] uppercase font-bold outline-none active:scale-[0.98] transition"
            >
              Begin yours →
            </button>
          </div>
        </Reveal>
      ) : (
        <>
          {/* Two even columns — alternate distribution, ends together */}
          <div className="px-3 mt-4 flex gap-3 items-start">
            <div className="flex-1 min-w-0 space-y-5">
              {wall.map((p, i) =>
                i % 2 === 0 ? (
                  <PinCard key={`${p.src}-l`} p={p} eager={i < 6} onOpen={() => open(i)} />
                ) : null
              )}
            </div>
            <div className="flex-1 min-w-0 space-y-5">
              {wall.map((p, i) =>
                i % 2 === 1 ? (
                  <PinCard key={`${p.src}-r`} p={p} eager={i < 6} onOpen={() => open(i)} />
                ) : null
              )}
            </div>
          </div>

          <Reveal className="px-4 mt-6" y={24}>
            <div className="rounded-[24px] bg-[#2B0F14]/90 backdrop-blur-md p-6 text-center shadow-[0_18px_44px_rgba(43,15,20,0.4)] border border-[#C9A86A]/15">
              <div className="w-10 h-[3px] bg-[#C9A86A] rounded-full mx-auto" />
              <p className="font-serif-editorial text-[24px] uppercase text-[#F5EED5] leading-tight mt-3">
                Felt something?
                <br />
                <span className="lowercase italic font-normal text-[#C9A86A]">let&apos;s keep yours.</span>
              </p>
              <button
                onClick={() => onNavigate?.(4)}
                className="w-full h-[50px] mt-4 rounded-full bg-[#C9A86A] text-[#2B0F14] font-sans-utility text-[11px] tracking-[0.2em] uppercase font-bold outline-none active:scale-[0.98] transition"
              >
                Begin yours →
              </button>
            </div>
            <p className="font-sans-utility text-[10px] tracking-[0.24em] uppercase text-[#1C1B18]/35 text-center mt-6">
              Parva Origins • Gallery
            </p>
          </Reveal>
        </>
      )}

      {/* Swipeable fullscreen viewer — solid, no glass */}
      <AnimatePresence>
        {view && idx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#1C1B18]/95 flex flex-col"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="shrink-0 flex items-center justify-between pl-5 pr-4 min-h-[60px]" style={{ paddingTop: "env(safe-area-inset-top)" }}>
              <span className="px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 font-sans-utility text-[11px] tracking-[0.18em] uppercase text-[#F5EED5]/80">
                {String(idx + 1).padStart(2, "0")} / {String(wall.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => setIdx(null)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#C9A86A] font-sans-utility text-[13px] font-bold text-[#2B0F14] outline-none"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 min-h-0 relative overflow-hidden flex items-center justify-center px-2">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.img
                  key={idx}
                  src={view.src}
                  alt="Parva Origins family celebration photograph — Bangalore family photography"
                  custom={dir}
                  initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-full max-h-full object-contain rounded-[10px] pointer-events-none"
                  draggable={false}
                />
              </AnimatePresence>
              <button aria-label="Previous photo" onClick={() => go(-1)} className="absolute left-0 top-0 bottom-0 w-[22%] outline-none" />
              <button aria-label="Next photo" onClick={() => go(1)} className="absolute right-0 top-0 bottom-0 w-[22%] outline-none" />
            </div>

            <div className="shrink-0 px-6 pt-2 text-center" style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 20px)" }}>
              <AnimatePresence mode="wait">
                <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <p className="font-script text-[24px] leading-none text-[#C9A86A]">{FAMILY}</p>
                  <p className="font-sans-utility text-[10px] tracking-[0.2em] uppercase text-[#F5EED5]/50 mt-1.5">
                    {PLACE} • swipe or tap sides
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
