"use client";

import React from "react";
import ServicesMenu from "./ServicesMenu";
import { originsGroups } from "@/data/services";

export default function OriginsServicesCanvas({ onNavigate }: { onNavigate?: (i: number) => void }) {
  return (
    <ServicesMenu
      eyebrow="What we offer"
      title="Services"
      script="every beginning, kept."
      promise="From first lamps to first birthdays: photography and films for every beginning a family marks."
      groups={originsGroups}
      ctaScript="Every family has a first page."
      deep={["#2B0F14", "#1F0A0E", "#140608"]}
      onEnquire={() => onNavigate?.(4)}
    />
  );
}
