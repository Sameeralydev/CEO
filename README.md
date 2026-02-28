# Luxury CEO Brand Website

Premium Apple-style scrollytelling personal brand website built with React + Vite + Tailwind CSS + Framer Motion.

## Stack

- React (Vite, JavaScript)
- Tailwind CSS
- Framer Motion

## Features

- Single-page scroll narrative with premium black/white/gold aesthetic
- Sticky hero with subtle parallax
- Top scroll progress indicator
- Reveal animations with blur-to-sharp transitions
- Desktop section snap (mobile-friendly fallback)
- Reduced-motion support
- Data-driven content in one file: `src/data/content.js`
- Venture industry filter chips
- Front-end contact form validation with success message

## Project Structure

```text
luxury/
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
  src/
    App.jsx
    index.css
    main.jsx
    data/
      content.js
    utils/
      scrollToSection.js
    components/
      About.jsx
      Contact.jsx
      CSR.jsx
      Footer.jsx
      Hero.jsx
      Media.jsx
      Navbar.jsx
      SectionReveal.jsx
      Stats.jsx
      Testimonials.jsx
      Ventures.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Content Editing

Update all text/data from:

- `src/data/content.js`

This includes hero copy, stats, ventures, media, testimonials, CSR, and contact/social links.

## Deploy

### Vercel

1. Push project to GitHub.
2. Import repo in Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`
5. Output directory: `dist`

### Netlify

1. Push project to GitHub.
2. New site from Git in Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`

