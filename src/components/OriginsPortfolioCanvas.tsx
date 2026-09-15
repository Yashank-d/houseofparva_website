"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { originGallery } from "@/data/originsData";
import { originAspect } from "@/data/originAspects";

const thumb = (src: string, w = 1000) =>
  src.includes("res.cloudinary.com") && src.includes("/upload/")
    ? src.replace("/upload/", `/upload/w_${w},q_auto,f_auto/`)
    : src;

function shuffleArray<T>(array: readonly T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

type FlipRef = {
  pageFlip: () => {
    flipNext: (corner?: unknown) => void;
    flipPrev: (corner?: unknown) => void;
    getCurrentPageIndex: () => number;
  };
};

const CAPTIONS = [
  "kept, forever —",
  "cherished, always.",
  "in sacred light.",
  "joy in quiet corners.",
  "laughter across tables.",
  "bound by tradition.",
  "generations gathered.",
  "the golden hour.",
  "every breath recorded.",
  "heirlooms of the heart.",
];

interface PanoramicSpread {
  type: "panoramic";
  photo: string;
  num: number;
  caption: string;
}

interface PortraitSpread {
  type: "portrait-spread";
  left: { photo: string; num: number; caption: string };
  right: { photo: string; num: number; caption: string };
}

type ContentSpread = PanoramicSpread | PortraitSpread;

export default function OriginsPortfolioCanvas({ onNavigate }: { onNavigate?: (i: number) => void }) {
  const [spread, setSpread] = useState(0);
  const book = useRef<FlipRef>(null);
  const lock = useRef(false);

  // Grouping:
  // - Only TRUE LANDSCAPE photos (aspect >= 1.2) go full-bleed across both pages.
  // - All PORTRAIT photos remain strictly on single framed album leaves.
  const { spreads, lastPortrait } = useMemo(() => {
    const landscape = shuffleArray(originGallery.filter((src) => originAspect(src) >= 1.2));
    const portrait = shuffleArray(originGallery.filter((src) => originAspect(src) < 1.2));

    let photoCount = 0;

    // 1. Convert all landscapes to panoramic spreads
    const landscapeSpreads: PanoramicSpread[] = landscape.map((photo) => {
      photoCount++;
      return {
        type: "panoramic",
        photo,
        num: photoCount,
        caption: CAPTIONS[(photoCount - 1) % CAPTIONS.length],
      };
    });

    // 2. Pair portraits into facing 2-photo spreads
    const portraitSpreads: PortraitSpread[] = [];
    let finalPortrait: { photo: string; num: number; caption: string } | null = null;

    for (let i = 0; i < portrait.length; i += 2) {
      if (i + 1 < portrait.length) {
        photoCount++;
        const left = {
          photo: portrait[i],
          num: photoCount,
          caption: CAPTIONS[(photoCount - 1) % CAPTIONS.length],
        };
        photoCount++;
        const right = {
          photo: portrait[i + 1],
          num: photoCount,
          caption: CAPTIONS[(photoCount - 1) % CAPTIONS.length],
        };
        portraitSpreads.push({ type: "portrait-spread", left, right });
      } else {
        // Odd portrait at the end: will be placed on the left leaf of the final spread
        photoCount++;
        finalPortrait = {
          photo: portrait[i],
          num: photoCount,
          caption: "held with both hands.",
        };
      }
    }

    // 3. Interweave landscape spreads and portrait spreads deterministically
    const list: ContentSpread[] = [];
    let l = 0;
    let p = 0;

    while (l < landscapeSpreads.length || p < portraitSpreads.length) {
      if (l < landscapeSpreads.length) {
        list.push(landscapeSpreads[l++]);
      }
      if (p < portraitSpreads.length) {
        list.push(portraitSpreads[p++]);
      }
      if (p < portraitSpreads.length && l >= landscapeSpreads.length) {
        list.push(portraitSpreads[p++]);
      }
    }

    return {
      spreads: list,
      lastPortrait: finalPortrait,
    };
  }, []);

  // Total spreads: Spread 0 (Title) + Content Spreads + Final Spread
  const totalSpreads = spreads.length + 1;
  const totalPages = (spreads.length + 2) * 2;

  const current = () => {
    try {
      return book.current?.pageFlip().getCurrentPageIndex() ?? 0;
    } catch {
      return 0;
    }
  };

  const turn = (d: 1 | -1) => {
    const flip = book.current?.pageFlip();
    if (!flip || lock.current) return false;
    const at = current();
    if (d > 0 && at >= totalPages - 2) return false;
    if (d < 0 && at <= 0) return false;
    lock.current = true;
    if (d > 0) flip.flipNext();
    else flip.flipPrev();
    setTimeout(() => (lock.current = false), 800);
    return true;
  };

  const onBookWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) < 14) return;
    if (turn(e.deltaY > 0 ? 1 : -1)) e.stopPropagation();
  };

  // Keyboard navigation: ArrowLeft / ArrowRight
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") turn(1);
      if (e.key === "ArrowLeft") turn(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const getHeaderTitle = () => {
    if (spread === 0) return "THE FAMILY ALBUM — VOLUME TITLE SPREAD";
    if (spread >= totalSpreads) return `THE FAMILY ALBUM — THE END (SPREAD ${spread} OF ${totalSpreads})`;
    return `THE FAMILY ALBUM (SPREAD ${spread} OF ${totalSpreads})`;
  };

  // Helper to render a classic single-page framed portrait leaf (no fullscreen modal)
  const renderPortraitLeaf = (
    photo: string,
    num: number,
    caption: string,
    isLeft: boolean,
    key: string,
    eager = false
  ) => {
    const leafBg = isLeft
      ? "bg-gradient-to-r from-[#FDF8F0] via-[#FBF7EC] via-[82%] to-[#D8CCB2]/70"
      : "bg-gradient-to-r from-[#D8CCB2]/70 via-[#FBF7EC] via-[18%] to-[#FDF8F0]";
    const leafPadding = isLeft
      ? "pl-5 md:pl-6 pr-3 md:pr-4"
      : "pl-3 md:pl-4 pr-5 md:pr-6";

    return (
      <div
        key={key}
        className={`overflow-hidden w-full h-full ${leafBg} ${isLeft ? "border-r border-[#1C1B18]/12" : "border-l border-[#1C1B18]/12"} select-none cursor-pointer`}
        onClick={() => turn(isLeft ? -1 : 1)}
      >
        <div className={`relative w-full h-full py-4 md:py-5 ${leafPadding}`}>
          {/* Fore-edge gold gilt trim — strictly on outer edges */}
          {isLeft ? (
            <div aria-hidden className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A86A] via-[#E8D4A0] to-[#C9A86A] opacity-80 pointer-events-none" />
          ) : (
            <div aria-hidden className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A86A] via-[#E8D4A0] to-[#C9A86A] opacity-80 pointer-events-none" />
          )}

          <div className="relative w-full h-full py-3 md:py-4 px-2 md:px-3">
            <span aria-hidden className="absolute inset-1.5 md:inset-2 border border-[#C9A86A]/60 pointer-events-none" />
            <span aria-hidden className="absolute inset-2.5 md:inset-3 border border-[#C9A86A]/20 pointer-events-none" />

            <div className="group relative w-full h-full flex flex-col justify-between text-left select-none">
              <span className="block font-sans-utility text-[9px] tracking-[0.3em] uppercase text-[#1C1B18]/55 shrink-0">
                Nº {String(num).padStart(2, "0")}
              </span>

              <span className="block w-full flex-1 my-1.5 min-h-0 relative overflow-hidden bg-[#E8DFD0]">
                <img
                  src={thumb(photo, 800)}
                  alt={`Parva Origins family photograph ${num}`}
                  loading={eager ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span aria-hidden className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C9A86A]" />
                <span aria-hidden className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C9A86A]" />
                <span aria-hidden className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C9A86A]" />
                <span aria-hidden className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C9A86A]" />
              </span>

              <span className="block font-script text-xl text-[#1C1B18]/85 leading-none shrink-0">
                {caption}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full px-4 md:px-8 py-2 md:py-3 flex flex-col justify-between relative overflow-hidden select-none">
      {/* Top Header */}
      <div className="relative z-20 flex items-center justify-between px-2 shrink-0 py-1">
        <span className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#2B0F14] font-semibold">
          {getHeaderTitle()}
        </span>
        <span className="font-sans-utility text-[9px] tracking-[0.25em] uppercase text-[#1C1B18]/50 hidden sm:inline">
          USE ← → KEYS TO TURN
        </span>
      </div>

      {/* Album Stage */}
      <div className="relative z-10 w-full flex-1 min-h-0 flex items-center justify-center px-4 md:px-10 my-auto py-1">
        <div className="relative flex items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full max-w-[1240px]">
          {/* Turn arrow: previous */}
          <button
            onClick={() => turn(-1)}
            disabled={spread === 0}
            aria-label="Previous opening"
            className={`shrink-0 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#F5F1E8]/95 backdrop-blur-md border border-[#C9A86A]/45 shadow-[0_8px_24px_rgba(28,27,24,0.12)] flex items-center justify-center text-[#2B0F14] transition-all duration-300 outline-none ${
              spread === 0
                ? "opacity-25 cursor-not-allowed pointer-events-none"
                : "opacity-100 hover:bg-[#2B0F14] hover:text-[#F5EED5] hover:border-[#2B0F14] hover:scale-105 active:scale-95 cursor-pointer"
            }`}
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Album book wrapper */}
          <div className="relative flex items-center justify-center" style={{ perspective: "2000px" }}>
            {/* Hardcover album board backing */}
            <div aria-hidden className="absolute -inset-2.5 md:-inset-3 rounded-xs bg-[#EDE4D0] shadow-[0_24px_55px_-10px_rgba(28,27,24,0.28)] border border-[#C9A86A]/40 pointer-events-none">
              <div className="absolute inset-1 rounded-[1px] border border-[#C9A86A]/20 pointer-events-none" />
            </div>
            {/* Floor shadow */}
            <div aria-hidden className="absolute -bottom-6 left-12 right-12 h-6 bg-black/20 blur-xl rounded-full pointer-events-none" />

            {/* Book container — exact original size preserved */}
            <div
              onWheel={onBookWheel}
              className="relative flex items-center justify-center w-[min(70vw,calc((100vh-230px)*1.52))] max-w-[960px] aspect-[1.52/1]"
            >
              {/* @ts-expect-error react-pageflip v2 ref + prop types */}
              <HTMLFlipBook
                ref={book}
                width={480}
                height={630}
                size="stretch"
                minWidth={240}
                maxWidth={520}
                minHeight={315}
                maxHeight={680}
                showCover={false}
                mobileScrollSupport={false}
                flippingTime={800}
                usePortrait={false}
                startPage={0}
                drawShadow
                useMouseEvents
                disableFlipByClick={true}
                onFlip={(e: { data: number }) => setSpread(Math.floor(e.data / 2))}
                className="shadow-[0_20px_50px_-10px_rgba(28,27,24,0.28)]"
              >
                {/* ─────────────────────────────────────────────────────────────
                    SPREAD 0: TITLE SPREAD (Leaves 0 & 1)
                ────────────────────────────────────────────────────────────── */}

                {/* Leaf 0: Curator's Archival Dedication Note (Left) */}
                <div className="overflow-hidden w-full h-full bg-gradient-to-r from-[#FDF8F0] via-[#FBF7EC] via-[82%] to-[#D8CCB2]/70 text-[#1C1B18] border-r border-[#1C1B18]/12 relative flex flex-col justify-between py-6 md:py-8 pl-7 md:pl-9 pr-5 md:pr-7 select-none">
                  <div aria-hidden className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A86A] via-[#E8D4A0] to-[#C9A86A] opacity-80 pointer-events-none" />
                  <span aria-hidden className="absolute inset-3 md:inset-4 border border-[#C9A86A]/55 pointer-events-none rounded-[2px]" />
                  <span aria-hidden className="absolute inset-4 md:inset-5 border border-[#C9A86A]/20 pointer-events-none rounded-[1px]" />

                  <span aria-hidden className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C9A86A]/80" />
                  <span aria-hidden className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C9A86A]/80" />
                  <span aria-hidden className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C9A86A]/80" />
                  <span aria-hidden className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C9A86A]/80" />

                  <div className="relative z-10">
                    <span className="font-sans-utility text-[9px] tracking-[0.34em] uppercase text-[#2B0F14] font-semibold block">
                      CURATION & ARCHIVE NOTE
                    </span>
                    <div className="w-8 h-[1.5px] bg-[#C9A86A] mt-2" />
                  </div>

                  <div className="relative z-10 space-y-3.5 my-auto py-2">
                    <span className="font-serif-editorial text-4xl md:text-5xl text-[#C9A86A] leading-none block">
                      P
                    </span>
                    <p className="font-serif-editorial text-lg md:text-xl uppercase tracking-[0.06em] text-[#1C1B18] leading-tight">
                      Memories belong in heavy books,
                      <br />
                      <span className="italic normal-case text-[#2B0F14]">held with both hands.</span>
                    </p>
                    <p className="font-serif-editorial text-[13px] md:text-[14px] text-[#1C1B18]/80 leading-relaxed font-normal">
                      From sacred naming mornings and temple blessings to laughter across festival tables, every story in this volume is recorded as an heirloom for generations to come.
                    </p>
                    <div className="pt-2">
                      <span className="font-script text-2xl md:text-3xl text-[#2B0F14] block">
                        — House of Parva
                      </span>
                      <span className="font-sans-utility text-[8.5px] tracking-[0.25em] uppercase text-[#1C1B18]/50 block mt-1">
                        BANGALORE & BEYOND
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 pt-3 border-t border-[#C9A86A]/30 flex items-center justify-between font-sans-utility text-[8.5px] tracking-[0.24em] uppercase text-[#1C1B18]/60">
                    <span>29 ARCHIVAL FRAMES</span>
                    <span>•</span>
                    <span>{spreads.length} OPENINGS</span>
                    <span>•</span>
                    <span>VOL. I</span>
                  </div>
                </div>

                {/* Leaf 1: Velvet Monograph Cover Plate (Right) */}
                <div
                  className="overflow-hidden w-full h-full bg-gradient-to-br from-[#2B0F14] via-[#1F0A0E] to-[#140608] text-[#F5EED5] flex flex-col justify-between py-6 md:py-8 pl-5 md:pl-7 pr-7 md:pr-9 cursor-pointer relative select-none border-l border-[#1C1B18]/12"
                  onClick={() => turn(1)}
                >
                  <div aria-hidden className="absolute top-0 right-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C9A86A] via-[#E8D4A0] to-[#C9A86A] opacity-90 pointer-events-none" />
                  <span aria-hidden className="absolute inset-3 md:inset-4 border border-[#C9A86A]/75 pointer-events-none rounded-[2px]" />
                  <span aria-hidden className="absolute inset-4 md:inset-5 border border-[#C9A86A]/35 pointer-events-none rounded-[1px]" />

                  <span aria-hidden className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C9A86A]" />
                  <span aria-hidden className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C9A86A]" />
                  <span aria-hidden className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C9A86A]" />
                  <span aria-hidden className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C9A86A]" />

                  <div className="relative z-10 text-center pt-2">
                    <span className="font-sans-utility text-[9.5px] tracking-[0.38em] uppercase text-[#C9A86A] font-semibold block">
                      THE FAMILY ARCHIVE
                    </span>
                    <span className="text-[10px] text-[#C9A86A]/50 tracking-[0.3em] block mt-0.5">✦ ✦ ✦</span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
                    <img
                      src="/Assets/seal/parva_seal_256.png"
                      alt="Parva seal"
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                      draggable={false}
                    />
                    <h2 className="font-serif-editorial text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.16em] text-[#F5EED5] leading-[0.95] mt-3">
                      PARVA
                      <br />
                      <span className="text-[#C9A86A]">ORIGINS</span>
                    </h2>
                    <p className="font-script text-xl md:text-2xl text-[#E8DFD0]/90 mt-3 capitalize">
                      Every beginning, beautifully kept.
                    </p>

                    <div aria-hidden className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A86A]/60 to-transparent mt-6" />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        turn(1);
                      }}
                      className="mt-4 inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#C9A86A] text-[#2B0F14] font-sans-utility text-[10px] tracking-[0.22em] uppercase font-bold hover:bg-[#E8D4A0] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      <span>EXPLORE OUR WORK</span>
                      <span>→</span>
                    </button>
                  </div>

                  <div className="relative z-10 text-center pb-2 border-t border-[#C9A86A]/20 pt-3">
                    <span className="font-sans-utility text-[9px] tracking-[0.3em] uppercase text-[#C9A86A]/75">
                      BANGALORE & BEYOND • VOLUME I
                    </span>
                  </div>
                </div>

                {/* ─────────────────────────────────────────────────────────────
                    CONTENT SPREADS (Panoramic Landscapes & Framed Portraits)
                ────────────────────────────────────────────────────────────── */}
                {spreads.map((item, sIndex) => {
                  const spreadKey = `spread-${sIndex}`;

                  // CASE 1: Full-Bleed Panoramic Spread (Only for Landscape Photos)
                  if (item.type === "panoramic") {
                    return [
                      // Left leaf (left 50% slice of landscape photo)
                      <div
                        key={`${spreadKey}-left`}
                        className="overflow-hidden bg-[#161412] relative select-none cursor-pointer w-full h-full"
                        onClick={() => turn(-1)}
                      >
                        <div className="relative w-full h-full overflow-hidden">
                          <img
                            src={thumb(item.photo, 1200)}
                            alt="Parva Origins family celebration"
                            className="absolute top-0 left-0 w-[calc(200%+1px)] h-full max-w-none object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                            style={{ transformOrigin: "left center" }}
                            draggable={false}
                            loading={sIndex < 3 ? "eager" : "lazy"}
                          />
                          {/* Soft organic binding valley curve — zero hard line, natural physical depth */}
                          <div
                            aria-hidden
                            className="absolute top-0 right-0 bottom-0 w-10 sm:w-14 bg-gradient-to-l from-black/[0.12] via-black/[0.03] to-transparent pointer-events-none mix-blend-multiply"
                          />

                          {/* Fore-edge gold gilt trim on far left */}
                          <div aria-hidden className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A86A] via-[#E8D4A0] to-[#C9A86A] opacity-90 pointer-events-none" />

                          {/* Archival badge */}
                          <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-[#C9A86A]/35 text-white/90 shadow-md">
                            <span className="font-sans-utility text-[8px] tracking-[0.25em] uppercase text-[#F5EED5]">Nº {String(item.num).padStart(2, "0")}</span>
                            <span className="text-[7px] text-[#C9A86A]">✦</span>
                            <span className="font-sans-utility text-[7.5px] tracking-[0.22em] uppercase text-[#C9A86A]">PANORAMA</span>
                          </div>
                        </div>
                      </div>,

                      // Right leaf (right 50% slice of landscape photo)
                      <div
                        key={`${spreadKey}-right`}
                        className="overflow-hidden bg-[#161412] relative select-none cursor-pointer w-full h-full"
                        onClick={() => turn(1)}
                      >
                        <div className="relative w-full h-full overflow-hidden">
                          <img
                            src={thumb(item.photo, 1200)}
                            alt="Parva Origins family celebration"
                            className="absolute top-0 -left-[100%] w-[200%] h-full max-w-none object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                            style={{ transformOrigin: "right center" }}
                            draggable={false}
                            loading={sIndex < 3 ? "eager" : "lazy"}
                          />
                          {/* Soft organic binding valley curve — zero hard line, natural physical depth */}
                          <div
                            aria-hidden
                            className="absolute top-0 left-0 bottom-0 w-10 sm:w-14 bg-gradient-to-r from-black/[0.12] via-black/[0.03] to-transparent pointer-events-none mix-blend-multiply"
                          />

                          {/* Fore-edge gold gilt trim on far right */}
                          <div aria-hidden className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A86A] via-[#E8D4A0] to-[#C9A86A] opacity-90 pointer-events-none" />

                          {/* Editorial script caption */}
                          <div className="absolute bottom-3.5 right-5 z-10 text-right drop-shadow-md">
                            <span className="font-script text-xl md:text-2xl text-[#F5EED5] block leading-tight">
                              {item.caption}
                            </span>
                            <span className="font-sans-utility text-[7.5px] tracking-[0.26em] uppercase text-[#C9A86A] block mt-0.5">
                              BANGALORE & BEYOND
                            </span>
                          </div>
                        </div>
                      </div>,
                    ];
                  }

                  // CASE 2: Portrait Spread (Facing pair of portraits in classic framed album leaf style)
                  return [
                    renderPortraitLeaf(
                      item.left.photo,
                      item.left.num,
                      item.left.caption,
                      true,
                      `${spreadKey}-left`,
                      sIndex < 3
                    ),
                    renderPortraitLeaf(
                      item.right.photo,
                      item.right.num,
                      item.right.caption,
                      false,
                      `${spreadKey}-right`,
                      sIndex < 3
                    ),
                  ];
                })}

                {/* ─────────────────────────────────────────────────────────────
                    FINAL SPREAD: COLOPHON + VELVET ENDPLATE
                ────────────────────────────────────────────────────────────── */}

                {/* Final Spread Left Leaf: The last portrait photo in classic framed style (or Colophon if even) */}
                {lastPortrait ? (
                  renderPortraitLeaf(
                    lastPortrait.photo,
                    lastPortrait.num,
                    lastPortrait.caption,
                    true,
                    "final-spread-left"
                  )
                ) : (
                  <div className="overflow-hidden w-full h-full bg-gradient-to-r from-[#FDF8F0] via-[#FBF7EC] via-[82%] to-[#D8CCB2]/70 border-r border-[#1C1B18]/12 select-none">
                    <div className="relative w-full h-full py-6 md:py-8 pl-6 md:pl-8 pr-4 md:pr-6 flex flex-col justify-between">
                      <div aria-hidden className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A86A] via-[#E8D4A0] to-[#C9A86A] opacity-80 pointer-events-none" />
                      <span aria-hidden className="absolute inset-2.5 md:inset-3.5 border border-[#C9A86A]/50 pointer-events-none rounded-[2px]" />
                      <div className="relative z-10">
                        <span className="font-sans-utility text-[8.5px] tracking-[0.3em] uppercase text-[#2B0F14] font-semibold block">
                          VOLUME COLOPHON
                        </span>
                      </div>
                      <div className="relative z-10 my-auto py-2 text-center">
                        <span className="text-[#C9A86A] text-sm block mb-3 opacity-75">✦</span>
                        <p className="font-serif-editorial text-base uppercase text-[#1C1B18] tracking-wider">
                          Recorded in Bengaluru
                        </p>
                        <p className="font-serif-editorial text-[12px] text-[#1C1B18]/70 mt-2 leading-relaxed max-w-[240px] mx-auto">
                          Printed on heavyweight archival stock, bound by hand, preserving family lineages across Karnataka and beyond.
                        </p>
                      </div>
                      <div className="relative z-10 pt-2 border-t border-[#C9A86A]/25 text-center font-sans-utility text-[8px] tracking-[0.25em] uppercase text-[#1C1B18]/50">
                        PARVA ORIGINS • MMXXVI
                      </div>
                    </div>
                  </div>
                )}

                {/* Final Spread Right Leaf: Velvet Monograph Endplate */}
                <div className="overflow-hidden w-full h-full bg-gradient-to-br from-[#2B0F14] via-[#1F0A0E] to-[#140608] text-[#F5EED5] border-l border-[#1C1B18]/12 select-none">
                  <div className="relative w-full h-full py-6 md:py-8 pl-4 md:pl-6 pr-6 md:pr-8 flex flex-col justify-between items-center text-center">
                    <div aria-hidden className="absolute top-0 right-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C9A86A] via-[#E8D4A0] to-[#C9A86A] opacity-90 pointer-events-none" />
                    <span aria-hidden className="absolute inset-2.5 md:inset-3.5 border border-[#C9A86A]/70 pointer-events-none rounded-[2px]" />
                    <span aria-hidden className="absolute inset-3.5 md:inset-4.5 border border-[#C9A86A]/30 pointer-events-none rounded-[1px]" />

                    <div className="relative z-10 pt-2">
                      <span className="font-sans-utility text-[8.5px] tracking-[0.34em] uppercase text-[#C9A86A] block">
                        THE CONCLUSION
                      </span>
                    </div>

                    <div className="relative z-10 my-auto py-2">
                      <span className="font-serif-editorial text-5xl md:text-6xl text-[#C9A86A] leading-none block">
                        O
                      </span>
                      <p className="font-serif-editorial text-2xl md:text-3xl uppercase text-[#F5EED5] mt-3 leading-tight tracking-[0.08em]">
                        The End
                        <br />
                        <span className="italic normal-case text-[#C9A86A]">of this volume.</span>
                      </p>
                      <p className="font-script text-xl text-[#E8DFD0]/80 mt-2">
                        Your story is next.
                      </p>
                      <button
                        type="button"
                        onClick={() => onNavigate?.(4)}
                        className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C9A86A] text-[#2B0F14] font-sans-utility text-[9.5px] tracking-[0.22em] uppercase font-bold hover:bg-[#E8D4A0] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer"
                      >
                        <span>BEGIN YOURS</span>
                        <span>→</span>
                      </button>
                    </div>

                    <div className="relative z-10 pb-2 border-t border-[#C9A86A]/20 pt-2 w-full">
                      <span className="font-sans-utility text-[8.5px] tracking-[0.28em] uppercase text-[#C9A86A]/70">
                        BANGALORE & BEYOND
                      </span>
                    </div>
                  </div>
                </div>
              </HTMLFlipBook>
            </div>
          </div>

          {/* Turn arrow: next */}
          <button
            onClick={() => turn(1)}
            disabled={spread >= totalSpreads}
            aria-label="Next opening"
            className={`shrink-0 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#F5F1E8]/95 backdrop-blur-md border border-[#C9A86A]/45 shadow-[0_8px_24px_rgba(28,27,24,0.12)] flex items-center justify-center text-[#2B0F14] transition-all duration-300 outline-none ${
              spread >= totalSpreads
                ? "opacity-25 cursor-not-allowed pointer-events-none"
                : "opacity-100 hover:bg-[#2B0F14] hover:text-[#F5EED5] hover:border-[#2B0F14] hover:scale-105 active:scale-95 cursor-pointer"
            }`}
          >
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom meta bar */}
      <div className="relative z-20 pt-2 border-t border-[#1C1B18]/10 mx-2 md:mx-6 flex justify-between items-center text-[10px] font-sans-utility tracking-[0.2em] uppercase text-[#1C1B18]/70 shrink-0">
        <span>PARVA ORIGINS ALBUM</span>
        <span className="font-semibold text-[#2B0F14]">
          OPENING {String(spread).padStart(2, "0")} / {String(totalSpreads).padStart(2, "0")}
        </span>
        <span>BANGALORE & BEYOND</span>
      </div>
    </div>
  );
}