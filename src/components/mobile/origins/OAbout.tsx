"use client";
import React from "react";
import Reveal from "../Reveal";

const founders = [
  { name: "Yashank D.", role: "Photographer", src: "/Assets/Founders/Founder-B_768.jpg" },
  { name: "Tejas", role: "Filmmaker", src: "/Assets/Founders/Founder-A_768.jpg" },
];

const drives = [
  { n: "01", title: "Tenderness", text: "Unhurried, gentle, entirely at your pace." },
  { n: "02", title: "Honesty", text: "Real rooms, real rituals, real joy." },
  { n: "03", title: "Kinship", text: "From poojas to housewarmings, generations in." },
];

export default function OAbout() {
  return (
    <div className="w-full pt-3 pb-[110px]">
      {/* One velvet story panel */}
      <Reveal
        className="mx-4 rounded-[28px] bg-[#2B0F14]/90 backdrop-blur-md overflow-hidden shadow-[0_18px_44px_rgba(43,15,20,0.4)] border border-[#C9A86A]/15"
        y={20}
        duration={1}
      >
        <div className="px-6 pt-6">
          <p className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#C9A86A] font-bold">
            ★ Hello, we are Parva
          </p>
          <h2 className="font-serif-editorial text-[30px] leading-[0.95] uppercase text-[#F5EED5] mt-2">
            For little chapters,
            <br />
            <span className="lowercase italic font-normal text-[#C9A86A]">& big love.</span>
          </h2>
          <p className="font-sans-utility text-[13px] leading-relaxed text-[#F5EED5]/65 mt-2.5">
            Family photographers and filmmakers who believe childhood is best kept unhurried. No
            stiff poses — just real rooms, real rituals, and everyday joy.
          </p>
        </div>

        {/* Founders side by side */}
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
              <p className="font-serif-editorial text-[17px] text-[#F5EED5] text-center mt-2">{f.name}</p>
              <p className="font-sans-utility text-[8px] tracking-[0.2em] uppercase text-[#C9A86A] font-bold text-center mt-0.5">
                {f.role}
              </p>
            </div>
          ))}
        </div>

        <div className="px-6 mt-4">
          <p className="font-serif-editorial italic text-[16px] leading-snug text-[#F5EED5] text-center">
            “Home is where the story starts, <span className="text-[#C9A86A]">we keep it the way it felt.”</span>
          </p>
        </div>

        {/* Drives strip */}
        <div className="mx-4 mt-5 mb-4 rounded-[20px] bg-white/[0.05] border border-[#C9A86A]/20 px-2 py-4 grid grid-cols-3 gap-2">
          {drives.map((d) => (
            <div key={d.n} className="text-center px-1">
              <p className="font-sans-utility text-[10px] font-bold tracking-[0.18em] text-[#C9A86A]">{d.n}</p>
              <p className="font-serif-editorial text-[15px] text-[#F5EED5] mt-1">{d.title}</p>
              <p className="font-sans-utility text-[10px] leading-snug text-[#F5EED5]/55 mt-1">{d.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <p className="font-serif-editorial italic text-[15px] text-[#2B0F14] text-center px-8 mt-5">
        “Childhood rooms, festival mornings — kept forever.”
      </p>
      <p className="font-sans-utility text-[9px] tracking-[0.24em] uppercase text-[#1C1B18]/35 text-center mt-2">
        Parva Origins • Bangalore
      </p>
    </div>
  );
}
