import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Caveat, Reenie_Beanie } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const reenieBeanie = Reenie_Beanie({
  variable: "--font-scribble",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "PARVA WEDDINGS | Wedding Photography & Cinematography Archive",
  description:
    "Curating intimate Indian wedding stories that last forever. Fine-art wedding photography & cinematic films by Parva Weddings, a House of Parva brand.",
  keywords: [
    "Parva Weddings",
    "House of Parva",
    "Luxury Wedding Photography",
    "Wedding Cinematography India",
    "Bangalore Wedding Photographer",
    "Fine Art Wedding Stories",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${caveat.variable} ${reenieBeanie.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#EAE1D2] text-[#1C1B18] font-sans selection:bg-[#641F27] selection:text-[#F5F1E8]">
        {children}
      </body>
    </html>
  );
}
