# Sunit Pal — Portfolio

A production-ready, modern portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Premium dark aesthetic** — obsidian background with gold accents
- **Framer Motion animations** — scroll-reveal, stagger, hover, and floating effects
- **Fully responsive** — mobile-first, tested across all breakpoints
- **SEO optimized** — metadata, Open Graph, Twitter cards
- **Performance optimized** — lazy loading, image optimization, minimal JS

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
/app                    → Next.js App Router (layout, page, globals.css)
/components
  /ui                   → Reusable UI components (Button, Badge, Animations)
  /layout               → Navbar, Footer
  /sections             → Hero, Experience, Projects, Skills, Education, Contact
/lib
  data.ts               → All portfolio content (edit here!)
  utils.ts              → Utility functions
/types
  index.ts              → TypeScript interfaces
/public
  /images               → Profile photo and assets
  /resume               → Resume PDF
```

## 🖼️ Adding Your Profile Photo

1. Add your photo as `/public/images/profile.jpg`
2. Update `Hero.tsx` — replace the initials div with:
   ```tsx
   import Image from "next/image";
   <Image src="/images/profile.jpg" alt="Sunit Pal" fill className="object-cover" />
   ```

## 📄 Adding Your Resume

Place your resume PDF at:
```
/public/resume/Sunit_Pal_Resume.pdf
```

## ✏️ Customizing Content

All portfolio data lives in `/lib/data.ts`. Edit that single file to update:
- Personal info & bio
- Work experience
- Projects
- Skills
- Education
- Social links

## 🚢 Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Lucide React](https://lucide.dev/) — Icons
