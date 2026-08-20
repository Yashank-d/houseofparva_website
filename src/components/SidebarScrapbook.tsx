"use client";

import React from "react";

interface SidebarScrapbookProps {
  currentPage: number;
  onSelectPage: (index: number) => void;
}

export default function SidebarScrapbook({
  currentPage,
  onSelectPage,
}: SidebarScrapbookProps) {
  // Exactly 4 creative editorial navigation items (No numbers)
  const pages = [
    { name: "THE WELCOME", targetIdx: 0 },
    { name: "STORIES WE'VE TOLD", targetIdx: 1 },
    { name: "WHO WE ARE", targetIdx: 2 },
    { name: "BEGIN YOUR CHAPTER", targetIdx: 3 },
  ];

  return (
    <>
      {/* High-Density Randomized Non-Linear Micro-Torn SVG clipPath */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="microTornRandomCurvedSilhouette" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0,0 
                L 0.985,0 
                L 0.972,0.015 L 0.988,0.030 L 0.958,0.045 L 0.975,0.060 L 0.942,0.075 L 0.965,0.090 
                L 0.930,0.105 L 0.952,0.120 L 0.918,0.135 L 0.940,0.150 L 0.905,0.165 L 0.928,0.180 
                L 0.892,0.195 L 0.915,0.210 L 0.885,0.225 L 0.908,0.240 L 0.890,0.255 L 0.918,0.270 
                L 0.932,0.285 L 0.955,0.300 L 0.940,0.315 L 0.968,0.330 L 0.952,0.345 L 0.979,0.360 
                L 0.960,0.375 L 0.945,0.390 L 0.920,0.405 L 0.902,0.420 L 0.885,0.435 L 0.908,0.450 
                L 0.872,0.465 L 0.895,0.480 L 0.880,0.495 L 0.905,0.510 L 0.922,0.525 L 0.948,0.540 
                L 0.935,0.555 L 0.962,0.570 L 0.948,0.585 L 0.975,0.600 L 0.960,0.615 L 0.985,0.630 
                L 0.968,0.645 L 0.952,0.660 L 0.938,0.675 L 0.955,0.690 L 0.928,0.705 L 0.945,0.720 
                L 0.918,0.735 L 0.938,0.750 L 0.908,0.765 L 0.925,0.780 L 0.948,0.795 L 0.968,0.810 
                L 0.950,0.825 L 0.978,0.840 L 0.962,0.855 L 0.988,0.870 L 0.969,0.885 L 0.945,0.900 
                L 0.922,0.915 L 0.948,0.930 L 0.920,0.945 L 0.942,0.960 L 0.910,0.975 L 0.888,0.990 
                L 0.875,1.00 
                L 0,1.00 Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      {/* Decorative Emerald Paper Container (20vw width, 3D Drop Shadow) */}
      <div 
        className="fixed inset-y-0 left-0 z-30 w-[20vw] min-w-[195px] max-w-[290px] h-full pointer-events-none"
        style={{
          filter: "drop-shadow(10px 4px 20px rgba(18, 53, 44, 0.45)) drop-shadow(20px 8px 36px rgba(28, 27, 24, 0.3))"
        }}
      >
        {/* Deep Emerald Physical Paper Sheet */}
        <div
          className="absolute inset-0 bg-[#12352C]"
          style={{
            clipPath: "url(#microTornRandomCurvedSilhouette)",
            WebkitClipPath: "url(#microTornRandomCurvedSilhouette)",
          }}
        />

        {/* Content Printed Directly on Emerald Paper */}
        <aside className="w-full h-full text-[#F5F1E8] flex flex-col justify-between p-4 md:p-5 pointer-events-auto relative z-10 select-none">
          
          {/* Subtle Paper Grain Overlay */}
          <div className="absolute inset-0 paper-grain opacity-40 pointer-events-none" />

          {/* Parva_logo.svg (Shifted slightly left) */}
          <div className="relative z-10 pt-2 pl-1 md:pl-2.5 flex flex-col items-start text-left w-full space-y-1.5">
            <img
              src="/Parva_logo.svg"
              alt="Parva Weddings Logo"
              className="w-32 md:w-36 h-auto opacity-95 filter drop-shadow-xs"
            />
            <div className="flex flex-col items-start text-left pt-0.5">
              <h2 className="font-serif-editorial text-sm md:text-base font-medium tracking-[0.3em] uppercase text-[#F5F1E8] leading-tight">
                Weddings
              </h2>
              <span className="font-sans-utility text-[7.5px] tracking-[0.35em] uppercase text-[#CFA4A5] font-semibold mt-0.5">
                Photo & Film
              </span>
            </div>
          </div>

          {/* Navigation Items (Shifted slightly left) */}
          <nav className="relative z-10 my-auto pl-1 md:pl-2.5 py-2">
            <ul className="space-y-5">
              {pages.map((page) => {
                const isActive = currentPage === page.targetIdx;
                return (
                  <li key={page.name}>
                    <button
                      onClick={() => onSelectPage(page.targetIdx)}
                      className="group flex items-center gap-3 text-left w-full cursor-pointer py-1"
                    >
                      {/* Active Small Ivory Dot */}
                      <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-125">
                        {isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F5F1E8] block shadow-xs" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-transparent border border-[#F5F1E8]/35 block group-hover:border-[#F5F1E8] group-hover:bg-[#F5F1E8]/20 transition-all duration-300" />
                        )}
                      </span>

                      {/* Navigation Title Text */}
                      <span
                        className={`font-sans-utility text-[11px] md:text-xs tracking-[0.22em] uppercase font-medium transition-all duration-300 transform group-hover:translate-x-1.5 ${
                          isActive
                            ? "text-[#F5F1E8] font-semibold"
                            : "text-[#F5F1E8]/60 group-hover:text-[#F5F1E8]"
                        }`}
                      >
                        {page.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Lower Left: Handwritten Script & Dried Flower (Shifted slightly left) */}
          <div className="relative z-10 pl-1 md:pl-2.5 pb-2 flex flex-col items-start gap-3">
            <p className="font-script text-xl md:text-2xl text-[#CFA4A5] leading-snug">
              Let's create <br />
              something timeless
            </p>

            {/* Dried Flower Stem Attached with Masking Tape */}
            <div className="relative mt-1">
              <div className="absolute top-5 -left-2 w-14 h-4 masking-tape z-20 rotate-[4deg] opacity-90" />
              <svg
                className="w-10 h-16 text-[#F5F1E8]/75 opacity-85"
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
