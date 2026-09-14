"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Shared single IntersectionObserver — every <Reveal/> on the page shares it,
// so scroll reveals cost one observer total, not one per section.
let io: IntersectionObserver | null = null;
const pending = new Map<Element, () => void>();

function sharedObserver() {
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          const play = pending.get(e.target);
          if (play) {
            pending.delete(e.target);
            io?.unobserve(e.target);
            play();
          }
        }
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );
  return io;
}

export default function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  duration = 0.9,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, y });
    }, el);
    const play = () =>
      gsap.to(el, { opacity: 1, y: 0, duration, delay, ease: "expo.out", overwrite: true });
    pending.set(el, play);
    const obs = sharedObserver();
    obs.observe(el);
    return () => {
      pending.delete(el);
      obs.unobserve(el);
      ctx.revert();
    };
  }, [y, delay, duration]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
