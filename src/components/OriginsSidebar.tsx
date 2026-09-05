"use client";

import React from "react";

interface OriginsSidebarProps {
  currentPage: number;
  onSelectPage: (index: number) => void;
}

export default function OriginsSidebar({
  currentPage,
  onSelectPage,
}: OriginsSidebarProps) {
  const pages = [
    { name: "THE WELCOME", targetIdx: 0 },
    { name: "STORIES WE'VE KEPT", targetIdx: 1 },
    { name: "WHO WE ARE", targetIdx: 2 },
    { name: "BEGIN YOUR CHAPTER", targetIdx: 3 },
  ];

  return (
    <>
      {/* Velvet Paper Container (20vw width, real torn fiber) */}
      <div
        className="fixed inset-y-0 left-0 z-30 w-[20vw] min-w-[195px] max-w-[290px] h-full pointer-events-none"
        style={{
          filter: "drop-shadow(12px 4px 18px rgba(0,0,0,0.4)) drop-shadow(6px 1px 8px rgba(0,0,0,0.25))"
        }}
      >
        {/* Deep Velvet Physical Paper Sheet — real PNG mask (photo-real torn fiber) */}
        <div
          className="absolute inset-0 paper-bg-velvet"
          style={{
            WebkitMaskImage: "url(/masks/torn-edge.png)",
            maskImage: "url(/masks/torn-edge.png)",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
        {/* Content Printed Directly on Velvet Paper */}
        <aside className="w-full h-full text-[#F5EED5] flex flex-col justify-between px-5 md:px-6 py-5 pointer-events-auto relative z-10 select-none">

          {/* Parva_logo.svg */}
          <div className="relative z-10 pt-1 flex flex-col items-start text-left w-full space-y-1.5">
            <img
              src="/Parva_logo.svg"
              alt="Parva Origins Logo"
              className="w-32 md:w-36 h-auto opacity-95 filter drop-shadow-xs"
            />
            <div className="flex flex-col items-start text-left pt-0.5">
              <h2 className="font-serif-editorial text-sm md:text-base font-medium tracking-[0.3em] uppercase text-[#F5EED5] leading-tight">
                Origins
              </h2>
              <span className="font-sans-utility text-[7.5px] tracking-[0.35em] uppercase text-[#C9A86A] font-semibold mt-0.5">
                Photo & Film
              </span>
            </div>
          </div>

          {/* Navigation — straight, no hover shift */}
          <nav className="relative z-10 my-auto py-2">
            <ul className="space-y-[18px]">
              {pages.map((page) => {
                const isActive = currentPage === page.targetIdx;
                return (
                  <li key={page.name}>
                    <button
                      onClick={() => onSelectPage(page.targetIdx)}
                      className="group flex items-center gap-3.5 text-left w-full cursor-pointer py-1.5 px-2 rotate-0 transform-none"
                      style={{ transform: "none" }}
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 flex items-center justify-center rotate-0">
                        {isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] block shadow-xs rotate-0" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-transparent border border-[#F5EED5]/35 block rotate-0" />
                        )}
                      </span>
                      <span
                        className={`font-sans-utility text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium leading-none rotate-0 transition-colors duration-200 ${
                          isActive ? "text-[#C9A86A] font-semibold" : "text-[#F5EED5]/60 group-hover:text-[#F5EED5]"
                        }`}
                        style={{ transform: "none" }}
                      >
                        {page.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Lower Left: Handwritten Script & Dried Flower */}
          <div className="relative z-10 pb-1 flex flex-col items-start gap-3">
            <p className="font-script text-xl md:text-2xl text-[#C9A86A] leading-snug">
              Let&apos;s keep <br />
              every beginning
            </p>

            {/* Dried Flower Stem Attached with Masking Tape */}
            <div className="relative mt-1">
              <div className="absolute top-5 -left-2 w-14 h-4 masking-tape z-20 rotate-[4deg] opacity-90" />
              <svg
                className="w-10 h-16 text-[#F5EED5]/75 opacity-85"
                viewBox="0 0 50 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M25 95 C 25 60, 20 40, 25 5" />
                <path d="M25 70 C 15 65, 10 50, 12 45" />
                <path d="M25 55 C 35 50, 40 38, 38 32" />
                <circle cx="25" cy="8" r="3" fill="currentColor" />
                <circle cx="18" cy="15" r="2.5" fill="currentColor" />
                <circle cx="32" cy="18" r="2.5" fill="currentColor" />
              </svg>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
