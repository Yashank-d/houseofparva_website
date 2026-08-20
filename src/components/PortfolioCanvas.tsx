"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { artisticWorks, ArtisticWork } from "@/data/portfolioData";

export default function PortfolioCanvas() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [modalStory, setModalStory] = useState<ArtisticWork | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentWork = artisticWorks[activeIdx];

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev < artisticWorks.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : artisticWorks.length - 1));
  };

  // Motion Variants
  const canvasVariants = {
    initial: (dir: number) => ({
      x: dir > 0 ? "120%" : "-120%",
      opacity: 0,
      rotate: dir > 0 ? 8 : -8,
    }),
    animate: {
      x: "0%",
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-120%" : "120%",
      opacity: 0,
      rotate: dir > 0 ? -8 : 8,
      transition: {
        duration: 0.7,
        ease: [0.7, 0, 0.84, 0] as const,
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full p-4 md:p-8 flex flex-col justify-between relative overflow-hidden select-none"
    >
      {/* Left Minimal Arrowhead Icon (Close to Postcard, No Tail) */}
      <button
        onClick={handlePrev}
        className="absolute left-12 md:left-20 top-1/2 -translate-y-1/2 z-40 p-2 transition-all duration-300 cursor-pointer group hover:scale-125"
        title="Previous Project Work"
      >
        <svg className="w-8 h-8 md:w-11 md:h-11 text-[#1C1B18] group-hover:text-[#641F27] transition-colors filter drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right Minimal Arrowhead Icon (Close to Postcard, No Tail) */}
      <button
        onClick={handleNext}
        className="absolute right-12 md:right-20 top-1/2 -translate-y-1/2 z-40 p-2 transition-all duration-300 cursor-pointer group hover:scale-125"
        title="Next Project Work"
      >
        <svg className="w-8 h-8 md:w-11 md:h-11 text-[#1C1B18] group-hover:text-[#641F27] transition-colors filter drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Top Header Controls */}
      <div className="relative z-20 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <span className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#641F27] font-semibold">
            THE ARTISTIC ARCHIVE ({activeIdx + 1} / {artisticWorks.length})
          </span>
        </div>

        <div className="flex items-center gap-2">
          {artisticWorks.map((w, idx) => (
            <button
              key={w.id}
              onClick={() => {
                setDirection(idx > activeIdx ? 1 : -1);
                setActiveIdx(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeIdx === idx
                  ? "w-8 bg-[#641F27]"
                  : "w-2 bg-[#1C1B18]/20 hover:bg-[#1C1B18]/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Single Viewport Artistic Canvas */}
      <div className="relative z-10 w-full h-[82%] flex items-center justify-center px-8 md:px-16">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`artistic-${currentWork.id}`}
            custom={direction}
            variants={canvasVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full max-w-4xl h-full flex flex-col justify-between p-6 md:p-10 relative bg-[#F5F1E8] rounded-xs scrapbook-shadow border border-[#1C1B18]/10 overflow-hidden transform-gpu"
          >
            {/* Style 1: Pink Journal */}
            {currentWork.styleType === "pink-journal" && (
              <div className="w-full h-full flex flex-col justify-between relative py-2">
                {/* Center Image with Pink Border Framing & Handwritten Story */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
                  {/* Left Column: Tilted Pink Frame Photo */}
                  <div className="md:col-span-6 relative flex justify-center items-center">
                    <div className="p-3 bg-[#e8a3b5]/25 border border-[#d4889c]/40 rounded-xs inline-block rotate-[-1.5deg] shadow-md transition-transform hover:rotate-0 duration-500">
                      <div className="overflow-hidden bg-[#E8DFD0] flex">
                        <img
                          src={currentWork.mainImage}
                          alt={currentWork.couple}
                          className="max-w-full max-h-[42vh] w-auto object-contain rounded-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Structured Journal Entry & Handwritten Excerpt */}
                  <div className="md:col-span-6 flex flex-col justify-center space-y-4 md:pl-2">
                    <div className="space-y-1">
                      <span className="font-sans-utility text-[10px] tracking-[0.25em] uppercase text-[#641F27] font-semibold block">
                        JOURNAL ENTRY
                      </span>
                      <h3 className="font-serif-editorial text-2xl md:text-3xl text-[#1C1B18] capitalize">
                        {currentWork.couple}
                      </h3>
                    </div>

                    <p className="font-script text-xl md:text-2xl text-[#1C1B18]/90 leading-relaxed">
                      {currentWork.highlightedText && currentWork.handwrittenStory.includes(currentWork.highlightedText) ? (
                        <>
                          {currentWork.handwrittenStory.split(currentWork.highlightedText)[0]}
                          <span className="bg-[#e8a3b5]/40 px-1.5 py-0.5 rounded-xs">
                            {currentWork.highlightedText}
                          </span>
                          {currentWork.handwrittenStory.split(currentWork.highlightedText)[1]}
                        </>
                      ) : (
                        currentWork.handwrittenStory
                      )}
                    </p>

                    <span className="font-script text-lg text-[#641F27] block text-right pt-1">
                      — AW
                    </span>
                  </div>
                </div>

                {/* Bottom Archival Metadata */}
                <div className="pt-4 border-t border-[#1C1B18]/10 flex flex-col sm:flex-row justify-between items-start sm:items-end text-[10px] font-sans-utility tracking-[0.2em] uppercase text-[#1C1B18]/70">
                  <div className="space-y-0.5">
                    <p>LOVE STORY <span className="font-script text-sm text-[#1C1B18] capitalize font-normal">{currentWork.couple}</span></p>
                    <p>LOCATION <span className="text-[#1C1B18] font-normal">{currentWork.location}</span></p>
                    <p>WHEN <span className="font-script text-sm text-[#1C1B18] capitalize font-normal">{currentWork.date}</span></p>
                  </div>

                  <button
                    onClick={() => setModalStory(currentWork)}
                    className="mt-3 sm:mt-0 font-sans-utility text-[10px] tracking-[0.2em] uppercase text-[#641F27] hover:text-[#1C1B18] border-b border-[#641F27] cursor-pointer"
                  >
                    EXPLORE FULL RECORD →
                  </button>
                </div>
              </div>
            )}

            {/* Style 2: Handwritten Vows */}
            {currentWork.styleType === "handwritten-vows" && (
              <div className="w-full h-full flex flex-col justify-between relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
                  {/* Left Column: Entire Handwritten Marriage Vow Letter */}
                  <div className="md:col-span-6 space-y-3 font-script text-xl md:text-2xl text-[#1C1B18]/90 leading-relaxed pl-2">
                    <p>{currentWork.vowText}</p>
                  </div>

                  {/* Right Column: Overlapping White-Border Photo */}
                  <div className="md:col-span-6 relative">
                    <div className="bg-white p-3 rounded-xs shadow-xl rotate-[2deg] max-w-md ml-auto">
                      <div className="aspect-[4/3] w-full overflow-hidden bg-[#E8DFD0]">
                        <img
                          src={currentWork.mainImage}
                          alt={currentWork.couple}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C1B18]/10 flex justify-between items-center text-[10px] font-sans-utility tracking-[0.2em] uppercase text-[#1C1B18]/70">
                  <span>HANDWRITTEN VOWS ({currentWork.couple})</span>
                  <button
                    onClick={() => setModalStory(currentWork)}
                    className="text-[#641F27] border-b border-[#641F27] cursor-pointer"
                  >
                    VIEW ARCHIVE RECORD →
                  </button>
                </div>
              </div>
            )}

            {/* Style 3: Blue Ink Polaroid */}
            {currentWork.styleType === "blue-ink-polaroid" && (
              <div className="w-full h-full flex flex-col justify-between items-center text-center relative py-4">
                <div className="relative max-w-sm mx-auto my-auto">
                  {/* Translucent Washi Tape at Top */}
                  <div className="absolute -top-4 left-6 w-28 h-6 masking-tape z-30 rotate-[-2deg]" />

                  {/* Black and White Photo */}
                  <div className="bg-[#E8DFD0] p-4 rounded-xs shadow-md mb-4">
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      <img
                        src={currentWork.mainImage}
                        alt={currentWork.couple}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                  </div>

                  {/* Blue Ink Handwritten Quote */}
                  <p className="font-script text-2xl md:text-3xl text-[#1e3a8a] leading-relaxed text-right pr-4">
                    {currentWork.blueQuote}
                  </p>
                </div>

                <div className="w-full pt-4 border-t border-[#1C1B18]/10 flex justify-between items-center text-[10px] font-sans-utility tracking-[0.2em] uppercase text-[#1C1B18]/70">
                  <span>{currentWork.couple} ({currentWork.location})</span>
                  <button
                    onClick={() => setModalStory(currentWork)}
                    className="text-[#641F27] border-b border-[#641F27] cursor-pointer"
                  >
                    FULL RECORD →
                  </button>
                </div>
              </div>
            )}

            {/* Style 4: Paperclip Stack & Birds */}
            {currentWork.styleType === "paperclip-stack" && (
              <div className="w-full h-full flex flex-col justify-between relative">
                <div className="relative w-full max-w-xl mx-auto my-auto">
                  {/* Top Paperclipped Handwritten Scrap */}
                  <div className="absolute -top-8 -left-6 z-30 bg-[#E8DFD0] p-4 max-w-xs rounded-xs shadow-md border border-[#1C1B18]/15 rotate-[-4deg]">
                    <div className="absolute -top-3 left-4 w-3 h-8 border-2 border-[#1C1B18]/60 rounded-full z-40" />
                    <p className="font-script text-base text-[#1C1B18] leading-tight">
                      {currentWork.handwrittenStory}
                    </p>
                  </div>

                  {/* Layered Photos Stack */}
                  <div className="relative z-10 bg-white p-4 pb-6 rounded-xs shadow-xl rotate-[1deg]">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#E8DFD0]">
                      <img
                        src={currentWork.mainImage}
                        alt={currentWork.couple}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C1B18]/10 flex justify-between items-center text-[10px] font-sans-utility tracking-[0.2em] uppercase text-[#1C1B18]/70">
                  <span>{currentWork.couple} ({currentWork.date})</span>
                  <button
                    onClick={() => setModalStory(currentWork)}
                    className="text-[#641F27] border-b border-[#641F27] cursor-pointer"
                  >
                    EXPLORE →
                  </button>
                </div>
              </div>
            )}

            {/* Style 5: Artistic Letter */}
            {currentWork.styleType === "artistic-letter" && (
              <div className="w-full h-full flex flex-col justify-between relative p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
                  <div className="md:col-span-6 space-y-4">

                    <h3 className="font-serif-editorial text-3xl md:text-4xl uppercase text-[#1C1B18]">
                      {currentWork.couple}
                    </h3>
                    <p className="font-script text-2xl text-[#1C1B18]/90">
                      "{currentWork.handwrittenStory}"
                    </p>
                  </div>

                  <div className="md:col-span-6">
                    <div className="bg-[#E8DFD0] p-3 rounded-xs shadow-lg rotate-[-2deg] max-w-sm ml-auto">
                      <div className="aspect-[3/4] w-full overflow-hidden">
                        <img src={currentWork.mainImage} alt="" className="w-full h-full object-cover grayscale" />
                      </div>
                    </div>

                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C1B18]/10 flex justify-between items-center text-[10px] font-sans-utility tracking-[0.2em] uppercase text-[#1C1B18]/70">
                  <span>PARVA ARTISTIC ARCHIVE • {currentWork.location}</span>
                  <button onClick={() => setModalStory(currentWork)} className="text-[#641F27] border-b border-[#641F27] cursor-pointer">
                    FULL STORY →
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Story Lightbox Modal */}
      <AnimatePresence>
        {modalStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1C1B18]/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setModalStory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="bg-[#F5F1E8] text-[#1C1B18] max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 rounded-xs shadow-2xl relative border border-[#1C1B18]/20"
            >
              <button
                onClick={() => setModalStory(null)}
                className="absolute top-6 right-6 font-sans-utility text-xs tracking-[0.2em] text-[#641F27] hover:text-[#1C1B18] cursor-pointer"
              >
                CLOSE [✕]
              </button>

              <span className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#641F27] font-semibold">
                ARCHIVE RECORD
              </span>
              <h2 className="font-serif-editorial text-3xl md:text-5xl uppercase tracking-tight text-[#1C1B18] mt-2 mb-1">
                {modalStory.couple}
              </h2>
              <p className="font-sans-utility text-xs tracking-[0.2em] text-[#1C1B18]/60 uppercase mb-4">
                {modalStory.location} | {modalStory.date}
              </p>

              <p className="font-script text-2xl text-[#641F27] mb-4">
                "{modalStory.handwrittenStory}"
              </p>

              <div className="columns-1 sm:columns-2 gap-3 my-6 space-y-3">
                {modalStory.gallery.map((img, i) => (
                  <div key={i} className="bg-[#E8DFD0] overflow-hidden rounded-xs break-inside-avoid shadow-sm">
                    <img src={img} alt="" className="w-full h-auto block" />
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#1C1B18]/10 flex items-center justify-between text-xs font-sans-utility">
                <span className="text-[#1C1B18]/60 uppercase tracking-widest">{modalStory.details}</span>
                <button
                  onClick={() => setModalStory(null)}
                  className="px-5 py-2 bg-[#641F27] text-[#F5F1E8] uppercase tracking-widest text-[10px] rounded-xs cursor-pointer"
                >
                  DONE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Nav Buttons for Works */}
      <div className="relative z-20 flex justify-between items-center text-xs font-sans-utility tracking-[0.2em] uppercase px-4 pt-2">
        <button
          onClick={handlePrev}
          className="hover:text-[#641F27] transition-colors cursor-pointer"
        >
          ← PREV WORK
        </button>

        <span className="font-script text-base text-[#641F27] hidden sm:inline">
          {currentWork.couple} ({currentWork.location})
        </span>

        <button
          onClick={handleNext}
          className="hover:text-[#641F27] transition-colors cursor-pointer"
        >
          NEXT WORK →
        </button>
      </div>
    </div>
  );
}
