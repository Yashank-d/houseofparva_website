"use client";
import React from "react";
import Reveal from "./Reveal";

const founders = [
  { name: "Yashank D.", role: "Photographer", src: "/Assets/Founders/Founder-B_768.jpg" },
  { name: "Tejas", role: "Filmmaker", src: "/Assets/Founders/Founder-A_768.jpg" },
];

const drives = [
  { n: "01", title: "Connection", text: "Real is beautiful — in-between glances." },
  { n: "02", title: "Aesthetic", text: "Timeless, minimal, honest light." },
  { n: "03", title: "Experience", text: "Intimate rituals to wild celebrations." },
];

export default function MAbout() {
  return (
    <div className="w-full pt-3 pb-[110px]">
      {/* One emerald story panel — everything lives here, no card hopping */}
      <Reveal
        className="mx-4 rounded-[28px] bg-[#2B0F14]/90 backdrop-blur-md overflow-hidden shadow-[0_18px_44px_rgba(43,15,20,0.35)] border border-[#C9A86A]/15"
        y={20}
        duration={1}
      >
        <div className="px-6 pt-6">
          <p className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#C9A86A] font-bold">
            ★ Hello, we are Parva
          </p>
          <h2 className="font-serif-editorial text-[30px] leading-[0.95] uppercase text-[#F5F1E8] mt-2">
            Behind the lens,{" "}
            <span className="lowercase italic font-normal text-[#C9A86A]">beyond the moments.</span>
          </h2>
          <p className="font-sans-utility text-[13px] leading-relaxed text-[#F5F1E8]/65 mt-2.5">
            No forced poses. No staged smiles — just real moments, raw emotions, storytelling that
            feels authentically yours.
          </p>
        </div>

        {/* Founders side by side — compact, faces up top */}
        <div className="px-6 mt-5 grid grid-cols-2 gap-3">
          {founders.map((f, i) => (
            <div key={f.name}>
              <div className="rounded-[18px] overflow-hidden bg-[#1E0A0E] aspect-[3/4]">
                <img
                  src={f.src}
                  alt={f.name}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="font-serif-editorial text-[17px] text-[#F5F1E8] text-center mt-2">{f.name}</p>
              <p className="font-sans-utility text-[8px] tracking-[0.2em] uppercase text-[#C9A86A] font-bold text-center mt-0.5">
                {f.role}
              </p>
            </div>
          ))}
        </div>

        <div className="px-6 mt-4">
          <p className="font-serif-editorial italic text-[16px] leading-snug text-[#F5F1E8] text-center">
            “This is more than our work, <span className="text-[#C9A86A]">it’s our way of seeing love.”</span>
          </p>
        </div>

        {/* Drives — slim 3-col strip, desktop echo */}
        <div className="mx-4 mt-5 mb-4 rounded-[20px] bg-white/[0.05] border border-[#C9A86A]/20 px-2 py-4 grid grid-cols-3 gap-2">
          {drives.map((d) => (
            <div key={d.n} className="text-center px-1">
              <p className="font-sans-utility text-[10px] font-bold tracking-[0.18em] text-[#C9A86A]">{d.n}</p>
              <p className="font-serif-editorial text-[15px] text-[#F5F1E8] mt-1">{d.title}</p>
              <p className="font-sans-utility text-[10px] leading-snug text-[#F5F1E8]/55 mt-1">{d.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <p className="font-serif-editorial italic text-[15px] text-[#641F27] text-center px-8 mt-5">
        “I don&apos;t just take pictures. I preserve the way it felt.”
      </p>
      <p className="font-sans-utility text-[9px] tracking-[0.24em] uppercase text-[#1C1B18]/35 text-center mt-2">
        Parva Weddings • Bangalore
      </p>
    </div>
  );
}
