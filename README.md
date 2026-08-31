# SETY VIDEOS AND MIXING LAB — Portfolio & Rate List Website

A luxury, production-ready, highly responsive portfolio website built for **SETY VIDEOS AND MIXING LAB**.

Designed for high-end wedding cinematography and traditional event photography studios.

---

## 🌟 Key Features

- **Cinematic Entrance Hero**: GSAP timeline reveal with slow image scaling, line-by-line heading text reveals, and animated scroll indicator.
- **Editorial Portfolio Gallery**: Filterable category gallery (Weddings, Candid, Cinematic, Traditional, Drone, Albums) with Framer Motion lightbox modal, keyboard arrow navigation, and ESC close support.
- **Interactive Rate Sheet & Packages**: Packages 1 through 6 + Special Bride/Groom package with clear Indian Currency (₹) formatting, deliverable specs, and side-by-side comparison modal matrix.
- **Studio Enquiry Modal**: Seamless event date booking desk with instant confirmation feedback.
- **Fully Data-Driven**: Package rates, studio contact info, services list, and gallery photos are 100% editable in simple config files without touching UI code.
- **100% Mobile & Screen Responsive**: Tested across viewports from 320px smartphones to 4K desktop displays.
- **GitHub Pages Ready**: Zero backend required, relative base paths configured for instant GitHub Pages deployment.

---

## 📁 Central Configuration Files (How to Edit Studio Data)

All business logic and content is decoupled from components:

1. **Packages & Rates**: [`src/data/packages.js`](file:///c:/Users/setym/OneDrive/Desktop/Portfolio/src/data/packages.js)
   - Edit package names, inclusions, price tags, or add new packages.
2. **Contact & Social Links**: [`src/config/contact.js`](file:///c:/Users/setym/OneDrive/Desktop/Portfolio/src/config/contact.js)
   - Update phone number, WhatsApp, studio email, address, and social media handles.
3. **Gallery Photos**: [`src/data/gallery.js`](file:///c:/Users/setym/OneDrive/Desktop/Portfolio/src/data/gallery.js)
   - Add new photos, change categories, or update locations.
4. **Services List**: [`src/data/services.js`](file:///c:/Users/setym/OneDrive/Desktop/Portfolio/src/data/services.js)
   - Customize the 10 core studio service descriptions.

---

## 🖼 Replacing Studio Images

Store your studio photos under `/public/images/`:

- Hero Background: `/public/images/hero.jpg`
- Portfolio Photos: `/public/images/gallery/`
- Package Covers: `/public/images/packages/`

---

## 🚀 Local Development Setup

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build production distribution
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

### Option 1: Automatic Deployment via GitHub Actions (Recommended)

1. Push this repository to GitHub.
2. Go to **Settings > Pages** in your GitHub repository.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site whenever you push to `main`.

### Option 2: Manual gh-pages Branch Build

```bash
npm run build
```
Upload the contents of the generated `dist/` folder directly to your GitHub repository's `gh-pages` branch or web hosting server.

---

## ⚙️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Vanilla CSS Tokens
- **Animations**: GSAP (ScrollTrigger) + Framer Motion
- **Icons**: Lucide React
