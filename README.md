# Royal ZEE Water — Water Company Website

A classical-themed, light-blue & white React website with animated wave motifs,
scroll reveals, a video hero section, and WhatsApp/contact integration. Fully
mobile responsive.

## 1. Install Node.js

You need Node.js 18+ installed. Check with:
```
node -v
```
If you don't have it, download from https://nodejs.org

## 2. Install dependencies

Unzip this project, open a terminal in the project folder, then run:
```
npm install
```

## 3. Run it locally

```
npm run dev
```
Then open the URL shown in the terminal (usually http://localhost:5173).

## 4. Build for production

```
npm run build
```
This creates a `dist/` folder with the optimized static site, which you can
upload to any host (Netlify, Vercel, GitHub Pages, your own server, etc).

To preview the production build locally:
```
npm run preview
```

## Customize before launch

Open `src/App.jsx` and edit the `CONFIG` object near the top:

```js
const CONFIG = {
  whatsappNumber: "15550421948", // your number, digits only, country code first
  phone: "+1 (555) 042-1948",
  email: "hello@aquaheritage.com",
  address: "14 Millbrook Lane, Riverton",
  heroVideoSrc: "/videos/hero.mp4",
};
```

## Add your hero video

Your hero video is already in place at `public/videos/hero.mp4`. If you want
to swap it for a different clip later, just replace that file (same name) or
update `heroVideoSrc` in the `CONFIG` object. Until a video is present, the
hero section falls back to the "Pure Elegance, Naturally" image — nothing
breaks.

## Animations (Framer Motion)

The site now uses [Framer Motion](https://www.framer.com/motion/) throughout:
nav entrance, hero parallax on scroll, staggered card/value reveals, hover
lifts on buttons and cards, an animated mobile menu, and a pulsing WhatsApp
button. `framer-motion` is already listed in `package.json` — just run
`npm install` and it will be pulled in.

## Comments section

A new "Comments" section (and nav link) lets visitors leave feedback right on
the page. Comments are stored in the visitor's browser (`localStorage`), so
each visitor sees their own additions layered on top of two starter comments.
This is a front-end-only comment box — it has no shared backend, so comments
won't sync between different visitors or devices. If you want comments to be
public and shared across everyone, that section (`Comments` in `src/App.jsx`)
would need to be wired up to a real backend or a service like Firebase,
Supabase, or Disqus.

## Project structure

```
aqua-heritage/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── videos/          ← put hero.mp4 here
└── src/
    ├── main.jsx
    ├── App.jsx           ← all sections & content live here
    ├── index.css         ← theme, layout, animations
    └── assets/           ← your water images
```

## Sections included

- Sticky nav with mobile hamburger menu
- Hero with video/image background, animated falling droplets, and headline
- About / Heritage section
- Services (3 cards)
- Values (4 principles)
- Full-bleed image showcase
- Testimonial
- Contact section with WhatsApp button, phone, email, address
- Floating WhatsApp button (bottom-right, all pages)
