"use client";

import React from "react";
import { motion } from "framer-motion";
import type { ServiceGroup } from "@/data/services";

interface ServicesMenuProps {
  eyebrow: string;
  title: string;
  script: string;
  /** one-line promise — the client knows what we do before reading a row */
  promise: string;
  groups: ServiceGroup[];
  ctaScript: string;
  /** deep velvet tone — burgundy for weddings, near-black velvet for origins */
  deep: [string, string, string];
  onEnquire: () => void;
}

interface FlatItem {
  name: string;
  descriptor: string;
  group: string;
  num: string;
  firstInGroup: boolean;
}

export default function ServicesMenu({
  eyebrow,
  title,
  script,
  promise,
  groups,
  ctaScript,
  deep,
  onEnquire,
}: ServicesMenuProps) {
  // One continuous 01–N run across groups, remembering group boundaries.
  const flat: FlatItem[] = [];
  {
    let n = 0;
    for (const g of groups) {
      g.items.forEach((s, i) => {
        n += 1;
        flat.push({ ...s, group: g.title, num: String(n).padStart(2, "0"), firstInGroup: i === 0 });
      });
    }
  }
  const head = groups.slice(0, 2);
  const tail = groups.slice(2);

  return (
    <div className="w-full h-full overflow-hidden relative select-none">
      {/* ── Mobile: simple and clean, parchment-native ─────────────────── */}
      <div className="md:hidden w-full pt-4 pb-[110px]">
        <div className="px-6 pt-1 pb-2">
          <p className="font-sans-utility text-[10px] tracking-[0.32em] uppercase text-[#C9A86A] font-bold text-center pl-[0.32em]">
            ✦ &nbsp;{eyebrow}&nbsp; ✦
          </p>
          <h1 className="font-serif-editorial text-center leading-tight mt-2">
            <span className="block text-[34px] font-medium tracking-[0.08em] uppercase text-[#1C1B18]">
              {title}
            </span>
            <span className="block text-2xl italic font-normal lowercase text-[#1C1B18]/70 mt-0.5">
              {script}
            </span>
          </h1>
          <p className="font-sans-utility text-[12px] text-[#1C1B18]/65 text-center leading-relaxed mt-2 px-2">
            {promise}
          </p>

          <div className="mt-5">
            {flat.map((s) => (
              <div key={s.name}>
                {s.firstInGroup && (
                  <p className="font-sans-utility text-[10px] tracking-[0.3em] uppercase text-[#C9A86A] font-bold mt-5 mb-1 pl-[0.3em]">
                    {s.group}
                  </p>
                )}
                <button
                  onClick={onEnquire}
                  className="w-full flex items-center gap-4 py-3.5 border-b border-[#1C1B18]/12 text-left cursor-pointer outline-none active:bg-[#1C1B18]/[.04] transition-colors"
                >
                  <span className="font-serif-editorial italic text-base text-[#C9A86A] w-7 shrink-0">
                    {s.num}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-serif-editorial text-[21px] uppercase tracking-[0.05em] text-[#1C1B18] leading-snug">
                      {s.name}
                    </span>
                    <span className="block font-sans-utility text-[11px] text-[#1C1B18]/60 mt-0.5 leading-relaxed">
                      {s.descriptor}
                    </span>
                  </span>
                  <span className="text-[#C9A86A] text-lg shrink-0">→</span>
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onEnquire}
            className="mt-6 flex w-full min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#C9A86A] font-sans-utility text-[12px] tracking-[0.2em] uppercase font-bold text-[#2B0F14] active:scale-[0.99] transition-transform"
          >
            Enquire for yours <span>→</span>
          </button>
          <p className="font-script text-[19px] text-[#1C1B18]/60 text-center mt-3">{ctaScript}</p>
        </div>
      </div>

      {/* ── Desktop: velvet menu card ────────────────────────────────────── */}
      <div className="hidden md:flex w-full max-w-5xl mx-auto px-8 h-full flex-col py-3">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 min-h-0 relative rounded-[10px] overflow-hidden text-[#F5EED5] shadow-[0_24px_55px_-10px_rgba(28,27,24,0.35)]"
          style={{ background: `linear-gradient(135deg, ${deep[0]} 0%, ${deep[1]} 55%, ${deep[2]} 130%)` }}
        >
          {/* Gilt double frame + corners */}
          <span aria-hidden className="absolute inset-2 border border-[#C9A86A]/60 pointer-events-none rounded-[6px]" />
          <span aria-hidden className="absolute inset-3 border border-[#C9A86A]/25 pointer-events-none rounded-[4px]" />
          <span aria-hidden className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C9A86A]" />
          <span aria-hidden className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C9A86A]" />
          <span aria-hidden className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C9A86A]" />
          <span aria-hidden className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C9A86A]" />

          <div className="relative h-full flex flex-col px-10 py-5">
            {/* Masthead — context first */}
            <div className="text-center shrink-0">
              <span className="font-sans-utility text-[10px] tracking-[0.38em] uppercase text-[#C9A86A] font-semibold pl-[0.38em]">
                ✦ &nbsp;{eyebrow}&nbsp; ✦
              </span>
              <h1 className="font-serif-editorial leading-none mt-1.5">
                <span className="block text-[30px] font-medium tracking-[0.1em] uppercase text-[#F5EED5]">
                  {title}
                </span>
                <span className="block text-2xl italic font-normal lowercase text-[#E8D4A0] mt-1">
                  {script}
                </span>
              </h1>
              <p className="font-sans-utility text-[11px] tracking-[0.08em] text-[#F5EED5]/70 mt-2 max-w-xl mx-auto leading-relaxed">
                {promise}
              </p>
            </div>

            {/* Grouped ledger — everything visible, nothing hidden */}
            <div className="flex-1 min-h-0 grid grid-cols-2 gap-x-12 grid-rows-[1fr_auto] mt-1">
              {head.map((g) => (
                <section key={g.title} aria-label={g.title} className="flex flex-col min-h-0">
                  <div className="flex items-center gap-3 shrink-0 pt-1 pb-0.5">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A86A]/50" />
                    <span className="font-sans-utility text-[10px] tracking-[0.32em] uppercase text-[#C9A86A] font-semibold pl-[0.32em]">
                      {g.title}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A86A]/50" />
                  </div>
                  {g.items.map((s) => {
                    const f = flat.find((x) => x.name === s.name)!;
                    return (
                      <button
                        key={s.name}
                        onClick={onEnquire}
                        className="group w-full flex-1 flex items-center gap-3 py-1 border-b border-[#F5EED5]/12 text-left cursor-pointer outline-none hover:bg-white/[0.06] active:bg-white/[0.09] transition-colors px-2 rounded-[4px]"
                      >
                        <span className="font-serif-editorial italic text-[15px] text-[#C9A86A] w-6 shrink-0">
                          {f.num}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block font-serif-editorial text-[19px] uppercase tracking-[0.07em] text-[#F5EED5] leading-snug group-hover:text-[#E8D4A0] transition-colors">
                            {s.name}
                          </span>
                          <span className="block font-sans-utility text-[10.5px] tracking-[0.06em] text-[#F5EED5]/70 mt-0.5 leading-relaxed">
                            {s.descriptor}
                          </span>
                        </span>
                        <span className="text-[#C9A86A] text-base shrink-0 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </button>
                    );
                  })}
                </section>
              ))}
              {tail.map((g) => (
                <div key={g.title} className="col-span-2 flex items-center gap-4 px-2 pt-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A86A]/50" />
                  <span className="font-sans-utility text-[9px] tracking-[0.28em] uppercase text-[#C9A86A]/80 pl-[0.28em] whitespace-nowrap">
                    {g.title}
                  </span>
                  {g.items.map((s) => (
                    <button
                      key={s.name}
                      onClick={onEnquire}
                      className="group flex items-center gap-3 cursor-pointer outline-none whitespace-nowrap"
                    >
                      <span className="font-serif-editorial italic text-sm text-[#C9A86A]">
                        {flat.find((x) => x.name === s.name)!.num}
                      </span>
                      <span className="font-serif-editorial text-base uppercase tracking-[0.08em] text-[#F5EED5] group-hover:text-[#E8D4A0] transition-colors">
                        {s.name}
                      </span>
                      <span className="text-[#C9A86A] group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  ))}
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A86A]/50" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enquire CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 flex items-center justify-center gap-4 shrink-0 pb-1"
        >
          <button
            onClick={onEnquire}
            className="group px-7 py-2.5 bg-[#2B0F14] text-[#F5EED5] font-sans-utility text-[10px] tracking-[0.25em] uppercase font-bold rounded-full shadow-[0_10px_28px_rgba(43,15,20,0.35)] hover:bg-[#641F27] transition-colors cursor-pointer flex items-center gap-3"
          >
            Enquire for yours
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <p className="font-script text-xl text-[#1C1B18]/60 hidden sm:block">{ctaScript}</p>
        </motion.div>
      </div>
    </div>
  );
}
