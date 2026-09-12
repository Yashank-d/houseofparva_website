# The House of Parva ❦

> **Fine Art & Storytelling House** — Crafting timeless wedding stories and celebrating life's beautiful beginnings.

An editorial, scrapbook-inspired web experience built with **Next.js 16**, **Tailwind CSS v4**, **Framer Motion**, **GSAP**, and **TypeScript**. Presented by **Ocean and Origin LLP**, Bengaluru.

---

## 🏛️ Brand Architecture

Three routes under one house:

| Route | Experience |
|---|---|
| `/` — **The Gateway** | Velvet-maison portal. Desktop gilded ateliers + mobile Reserve-style cards. Opens with the Maison Reveal preloader that glides home into the header mark. |
| `/parvaweddings` — **Parva Weddings** | 4-canvas scrapbook: Home · Portfolio (Artistic Archive) · About · Contact. Emerald sidebar on desktop, floating tab pill on mobile. |
| `/parvaorigins` — **Parva Origins** | 4-canvas milestone book: Home · Stories · About · Contact. Velvet sidebar on desktop, floating tab pill on mobile. |

Desktop canvases use wheel/keyboard sequential paging; mobile shells scroll natively. The layout switches width-first (`< 768px` + phone-UA fallback, tablets stay on desktop).

---

## ✨ Preloaders

| Preloader | Where | Behaviour |
|---|---|---|
| `GatewayPreloader` | `/` desktop | Maison Reveal — mark rises with gold hairline, extras melt away, shared-element glide into the header while the velvet veil dissolves. |
| `AtelierPreloader` | `/parvaweddings`, `/parvaorigins` desktop | Simple parchment veil — atelier mark + wordmark + hairline sweep, then melts away. |
| `MPreloader` | all mobile shells | Splash mark → gold bar → curtain lift (gateway variant glides home like desktop). |

---

## 🛠️ Data & Content

Portfolio works, stories, and imagery are centrally managed — no CMS calls at runtime:

```
src/data/portfolioData.ts   # Weddings archive works, galleries (Cloudinary URLs), vows
src/data/originsData.ts     # Origins stories and milestones
src/data/originAspects.ts   # Origins aspect/crop presets
src/data/pinAspects.ts      # Weddings pin aspect presets
```

To add a wedding story: append an entry to `artisticWorks` in `portfolioData.ts` with Cloudinary `mainImage` + `gallery` URLs.

---

## 📬 Contact API

`src/app/api/contact/route.ts` accepts booking inquiries and delivers them via **Resend**. Required environment variables (see `.env.local`, never committed):

```
RESEND_API_KEY=...
RESEND_FROM_EMAIL=...
CONTACT_TO_EMAIL=...
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm**

### Development

```bash
git clone https://github.com/Yashank-d/houseofparva_website.git
cd Website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build check
npm run lint    # eslint (pre-existing <img> / entity warnings are codebase-wide)
```

---

## 🗂️ Project Structure

```
src/
  app/
    page.tsx              # Gateway (desktop + mobile switch)
    parvaweddings/page.tsx
    parvaorigins/page.tsx
    api/contact/route.ts  # Resend inquiry endpoint
  components/
    GatewayPreloader.tsx  # desktop gateway veil
    AtelierPreloader.tsx  # desktop atelier veils
    SidebarScrapbook.tsx  # weddings desktop sidebar
    OriginsSidebar.tsx    # origins desktop sidebar
    *Canvas.tsx           # desktop page canvases
    mobile/               # mobile shells, canvases, MPreloader
  data/                   # portfolio / origins content
public/
  Assets/Brands/          # atelier marks (Asset 29 Origins · Asset 30 Weddings)
  Parva_logo.svg          # maison mark
```

---

## ☁️ Deploying to Vercel

1. Push to GitHub (`dev` → PR → `main`).
2. Import the repo in the [Vercel Dashboard](https://vercel.com/new) — framework auto-detects **Next.js**.
3. Add the three `RESEND_*` / `CONTACT_*` env vars.
4. Deploy.

---

## 📄 License & Credits

© **Ocean and Origin LLP** • Bengaluru & Beyond • hello@thehouseofparva.in — All Rights Reserved.
