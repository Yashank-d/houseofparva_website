// Shared image helpers - buttery blur-up placeholders for next/image.
// Generates a tiny inline SVG shimmer so heroes never pop in harshly.
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop stop-color="#E8DFD0" offset="20%" />
      <stop stop-color="#F5F1E8" offset="50%" />
      <stop stop-color="#E8DFD0" offset="80%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const blurPlaceholder = (w = 32, h = 24) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
