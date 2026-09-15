import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Caveat, Reenie_Beanie } from "next/font/google";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
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

// ⚠️ Production domain (no trailing slash). Used for canonical URLs,
// sitemap, Open Graph and structured data.
export const SITE_URL = "https://thehouseofparva.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "House of Parva | Professional Photography & Videography in Bangalore",
    template: "%s | House of Parva",
  },
  description:
    "House of Parva — fine-art wedding photography & cinematic films in Bangalore: pre-weddings, destination & intimate weddings, proposals, maternity, baby showers, naming ceremonies, housewarmings and family sessions across Karnataka & India.",
  keywords: [
    "wedding photographer in Bangalore",
    "best wedding photographer Bangalore",
    "candid wedding photography Bangalore",
    "cinematic wedding films India",
    "pre wedding shoot Bangalore",
    "destination wedding photographer India",
    "maternity photographer Bangalore",
    "maternity photoshoot Bangalore",
    "baby shower photographer Bangalore",
    "naming ceremony photographer",
    "housewarming photographer Bangalore",
    "pooja ceremony photographer",
    "family photographer Bangalore",
    "family photoshoot Bangalore",
    "couple shoot Bangalore",
    "House of Parva",
    "Parva Weddings",
    "Parva Origins",
  ],
  authors: [{ name: "House of Parva" }],
  creator: "House of Parva",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "House of Parva",
    title: "House of Parva | Wedding & Family Photography, Bangalore",
    description:
      "Fine-art wedding photography, cinematic films, maternity, baby shower, housewarming & family photography in Bangalore & beyond.",
    images: [{ url: "/Assets/OriginsHero_1600.jpg", width: 1600, height: 1200, alt: "House of Parva — family celebration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Parva | Wedding & Family Photography, Bangalore",
    description:
      "Fine-art wedding photography, cinematic films, maternity, baby shower, housewarming & family photography in Bangalore & beyond.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
  },
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
        <LocalBusinessSchema />
        {/* Warm up the Cloudinary connection before hero images request it */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        {children}
      </body>
    </html>
  );
}
