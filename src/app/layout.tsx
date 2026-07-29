import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Cinzel } from "next/font/google";
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

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Parva | House of Parva — Luxury Weddings & Couture Digital Archive",
  description:
    "Explore the House of Parva's digital archive. Celebrating bespoke couture heritage, artisanal bridal storytelling, and luxury celebrations.",
  keywords: ["Parva", "House of Parva", "Luxury Weddings", "Couture Archive", "Bridal Heritage"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-[#c5a059] selection:text-white">
        {children}
      </body>
    </html>
  );
}

