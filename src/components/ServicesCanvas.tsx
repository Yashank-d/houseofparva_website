"use client";

import React from "react";
import ServicesMenu from "./ServicesMenu";
import { weddingsGroups } from "@/data/services";

export default function ServicesCanvas({ onNavigate }: { onNavigate?: (i: number) => void }) {
  return (
    <ServicesMenu
      eyebrow="What we offer"
      title="Services"
      script="every celebration, covered."
      promise="From whispered proposals to full multi-day celebrations — photography and films for every way a wedding unfolds."
      groups={weddingsGroups}
      ctaScript="Every story begins with a hello."
      deep={["#641F27", "#3D1620", "#1E0A0E"]}
      onEnquire={() => onNavigate?.(4)}
    />
  );
}
