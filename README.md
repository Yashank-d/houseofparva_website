# The House of Parva ❦

> **Fine Art & Storytelling House** — Crafting timeless wedding stories and celebrating life's beautiful beginnings.

An editorial, physical scrapbook-inspired web experience built with **Next.js 16**, **Tailwind CSS v4**, **Framer Motion**, and **TypeScript**.

---

## 🏛️ Brand Architecture

The website features two primary divisions under the parent umbrella:

1. **The Gateway (`/`)**: High-fashion physical card portal introducing the two divisions:
   - **Parva Weddings**: Wedding photography, cinematic films, destination elopements, and intimate celebrations.
   - **Parva Origins**: Milestone portraiture, baby showers, naming ceremonies, housewarmings, and family archives.

2. **Parva Weddings Archive (`/parvaweddings`)**: A 4-page interactive scrapbook experience:
   - `Home`: Editorial introduction, brand philosophy, and visual showcase.
   - `Portfolio`: The Artistic Archive featuring dynamic postcard styles, Cloudinary-hosted galleries, and uncropped bento lightboxes.
   - `About`: Behind-the-lens studio story, team values, and fine art approach.
   - `Contact`: Paperclipped inquiry note, direct contact details, and booking form.

3. **Parva Origins Archive (`/parvaorigins`)**: Dedicated brand page for life milestone portraiture.

---

## 🛠️ Data Management & Cloudinary Integration

All portfolio works, images, vow texts, and handwritten stories are centrally managed in a dedicated database file:

```
src/data/portfolioData.ts
```

To update or add new wedding stories to the portfolio:
1. Open [`src/data/portfolioData.ts`](file:///Users/yashankd/Ocean%20and%20Origin/Parva/Website/src/data/portfolioData.ts).
2. Add or edit entries in the `artisticWorks` array.
3. Paste Cloudinary image URLs into `mainImage` and `gallery`.

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.x or higher)
- **npm** / **yarn** / **pnpm**

### 2. Installation & Development

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# Navigate into project directory
cd Website

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying to Vercel

This repository is optimized out-of-the-box for **Vercel** deployment:

1. Push your repository to **GitHub**.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository.
4. Framework Preset will auto-detect as **Next.js**.
5. Click **Deploy**.

---

## 📄 License & Credits

© **Ocean and Origin LLP** • Bengaluru, India. All Rights Reserved.
