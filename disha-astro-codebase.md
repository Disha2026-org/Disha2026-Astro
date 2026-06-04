# DishaAstro — Full Codebase

> **Project:** Disha '26 — College fest website (CET, Thiruvananthapuram)
> **Stack:** Astro 6 + React 19 + Tailwind CSS 4 + Three.js
> **Generated:** Compiled from all source files excluding `node_modules/`, `.git/`, `dist/`, `package-lock.json`, and binary assets (images/fonts).

---

## Table of Contents

1. [Root Config Files](#1-root-config-files)
2. [Source: Pages](#2-source-pages)
3. [Source: Layouts](#3-source-layouts)
4. [Source: Components (Astro)](#4-source-components-astro)
5. [Source: Components (React JSX)](#5-source-components-react-jsx)
6. [Source: Styles](#6-source-styles)
7. [Public](#7-public)
8. [Astro Generated](#8-astro-generated)

---

## 1. Root Config Files

### `package.json`

```json
{
  "name": "disha26-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "lint": "eslint .",
    "preview": "astro preview",
    "format": "prettier --write ."
  },
  "dependencies": {
    "@astrojs/react": "^5.0.6",
    "@react-three/fiber": "^9.5.0",
    "@react-three/postprocessing": "^3.0.4",
    "@tailwindcss/postcss": "^4.3.0",
    "astro": "^6.4.0",
    "postprocessing": "^6.38.3",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "tailwindcss": "^4.2.1",
    "three": "^0.183.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "eslint": "^9.39.4",
    "globals": "^17.4.0",
    "prettier": "^3.8.1",
    "vite": "^5.4.21"
  }
}
```

### `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    envPrefix: ['VITE_', 'PUBLIC_'],
  },
});
```

### `vite.config.js`

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### `tsconfig.json`

```json
{
  "extends": "astro/tsconfigs/base",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

### `postcss.config.js`

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### `eslint.config.js`

```js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);
```

### `.prettierrc`

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

### `.prettierignore`

```
node_modules
dist
build
coverage
*.log
.env
```

### `.gitignore`

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env
.vite
```

### `.env`

```
export VITE_SUPABASE_URL=https://hjxunglgjitjifbrgcfu.supabase.co
export VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### `README.md`

```md
# Astro + Vite

Yeah I just said fuck it we ball.
```

### `index.html` (legacy Vite entry — unused by Astro build)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./src/assets/disha_logo.webp" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Anton+SC&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <link
      href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave&family=Sedgwick+Ave+Display&display=swap"
      rel="stylesheet"
    />
    <title>Disha '26</title>
  </head>
  <body class="bg-black">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 2. Source: Pages

### `src/pages/index.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import HeroSection from '../components/HeroSection.astro';
import AboutDisha from '../components/AboutDisha.astro';
import Leaderboard from '../components/Leaderboard.astro';
import EventsList from '../components/EventsList.astro';
import ConvenorGallery from '../components/ConvenorGallery.astro';
import Footer from '../components/Footer.astro';
---

<Layout>
  <HeroSection />
  <AboutDisha />
  <Leaderboard />
  <EventsList />
  <ConvenorGallery />
  <Footer />
</Layout>
```

---

## 3. Source: Layouts

### `src/layouts/Layout.astro`

```astro
---
import '../index.css';
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/webp" href="/favicon.webp" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Anton&family=Anton+SC&display=swap" />
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&display=swap" />
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave&family=Sedgwick+Ave+Display&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Anton+SC&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
    <link href="https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
    <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave&family=Sedgwick+Ave+Display&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
    <noscript>
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Anton+SC&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave&family=Sedgwick+Ave+Display&display=swap" rel="stylesheet" />
    </noscript>
    <meta name="description" content="College departments compete for a cup through performances and competitions over several days." />
    <title>Disha '26</title>
  </head>
  <body class="bg-black">
    <slot />
  </body>
</html>

<style is:global>
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    margin-block: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(222, 0, 95, 0.7);
    border-radius: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(222, 0, 95, 1);
  }
</style>

<script>
</script>
```

---

## 4. Source: Components (Astro)

### `src/components/HeroSection.astro`

```astro
---
import heroBg from '../assets/kalyani_background_2.webp';
import dishaLogo from '../assets/disha_logo.webp';
---

<div id="home" class="relative h-[85svh] md:h-screen w-full bg-[#10152B] text-white flex flex-col font-sans overflow-hidden">
  <img
    src={heroBg.src}
    alt=""
    class="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none floating-bg"
    aria-hidden="true"
    fetchpriority="high"
  />

  <div class="absolute -inset-[10px] z-5 opacity-25 mix-blend-overlay pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:6px_6px] scanline-move"></div>

  <div class="hidden md:block absolute inset-0 z-6 opacity-10 mix-blend-overlay pointer-events-none" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjc1JyBudW1PY3RhdmVzPSczJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI24pJy8+PC9zdmc+&quot;);"></div>

  <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

  <header id="main-header" class="fixed z-[60] flex items-center justify-between bg-[#0f0f0f]/60 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_4px_30px_rgba(0,0,0,0.7)]" style="left:0;right:0;margin:0 auto;width:100%;padding:clamp(10px,1.5vh,16px) clamp(14px,2.5vw,48px)">
    <div class="flex items-center shrink-0">
      <a href="#home">
        <img src={dishaLogo.src} alt="DISHA 26" width="80" height="80" style="height:clamp(22px,3.4vh,34px)" class="w-auto object-contain" />
      </a>
    </div>
    <nav class="hidden lg:flex items-center" style="gap:clamp(20px,2.8vw,52px)">
      <a href="#about" class="nav-link font-bold text-white/50 hover:text-white transition-colors duration-200 whitespace-nowrap font-bohme" style="font-size:clamp(11px,0.9vw,15px);letter-spacing:0.13em">ABOUT</a>
      <a href="#leaderboard" class="nav-link font-bold text-white/50 hover:text-white transition-colors duration-200 whitespace-nowrap font-bohme" style="font-size:clamp(11px,0.9vw,15px);letter-spacing:0.13em">LEADERBOARD</a>
      <a href="#events" class="nav-link font-bold text-white/50 hover:text-white transition-colors duration-200 whitespace-nowrap font-bohme" style="font-size:clamp(11px,0.9vw,15px);letter-spacing:0.13em">EVENTS</a>
      <a href="#team" class="nav-link font-bold text-white/50 hover:text-white transition-colors duration-200 whitespace-nowrap font-bohme" style="font-size:clamp(11px,0.9vw,15px);letter-spacing:0.13em">CONTACT</a>
    </nav>
    <div class="hidden lg:flex items-center shrink-0">
      <a id="header-register" href="https://forms.gle/jHP7ByHxjmZ2psXv8" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 font-bold text-white/70 hover:text-white transition-colors whitespace-nowrap font-bohme" style="font-size:clamp(11px,0.9vw,15px);letter-spacing:0.13em">
        REGISTER
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </div>
    <div class="flex lg:hidden items-center shrink-0">
      <span id="header-title" class="font-black text-white/80 whitespace-nowrap uppercase transition-all duration-300 font-bohme" style="font-size:clamp(11px,3.2vw,13px);letter-spacing:0.1em">CET College Union 2025-26</span>
    </div>
    <div class="flex lg:hidden items-center shrink-0">
      <button id="menu-toggle" class="flex items-center justify-center text-white/60 hover:text-white transition-colors rounded-full" style="padding:6px" aria-label="Toggle menu">
        <svg id="menu-icon-open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
        <svg id="menu-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="hidden"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  </header>

  <div id="mobile-overlay" class="fixed inset-0 z-[55] flex-col hidden" style="background:rgba(0,0,0,0.85);backdrop-filter:blur(12px)">
    <div id="menu-card" class="absolute bg-[#111111] border border-white/[0.07] rounded-2xl overflow-hidden" style="top:calc(2vh + clamp(48px,7vh,70px) + 12px);left:0;right:0;margin:0 auto;width:min(92vw,440px);box-shadow:0 20px 80px rgba(0,0,0,0.9)">
      <nav class="flex flex-col">
        <a href="#about" class="mobile-nav-link flex items-center justify-between px-6 py-[18px] font-semibold text-white/75 hover:text-white hover:bg-white/[0.05] border-b border-white/[0.05] transition-colors duration-150 font-bohme" style="font-size:clamp(14px,4vw,17px);letter-spacing:0.1em">
          ABOUT
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="opacity-25 shrink-0"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a href="#leaderboard" class="mobile-nav-link flex items-center justify-between px-6 py-[18px] font-semibold text-white/75 hover:text-white hover:bg-white/[0.05] border-b border-white/[0.05] transition-colors duration-150 font-bohme" style="font-size:clamp(14px,4vw,17px);letter-spacing:0.1em">
          LEADERBOARD
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="opacity-25 shrink-0"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a href="#events" class="mobile-nav-link flex items-center justify-between px-6 py-[18px] font-semibold text-white/75 hover:text-white hover:bg-white/[0.05] border-b border-white/[0.05] transition-colors duration-150 font-bohme" style="font-size:clamp(14px,4vw,17px);letter-spacing:0.1em">
          EVENTS
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="opacity-25 shrink-0"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a href="#team" class="mobile-nav-link flex items-center justify-between px-6 py-[18px] font-semibold text-white/75 hover:text-white hover:bg-white/[0.05] border-b border-white/[0.05] transition-colors duration-150 !border-b-0 font-bohme" style="font-size:clamp(14px,4vw,17px);letter-spacing:0.1em">
          CONTACT
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="opacity-25 shrink-0"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </nav>
      <div class="p-4 pt-3">
        <a href="https://forms.gle/jHP7ByHxjmZ2psXv8" target="_blank" rel="noopener noreferrer" class="w-full py-4 rounded-xl bg-gradient-to-r from-[#b530ff] to-[#ff2b93] text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_4px_28px_rgba(181,48,255,0.4)] font-bohme" style="font-size:clamp(13px,3.5vw,15px);letter-spacing:0.13em">
          REGISTER NOW
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </div>

  <main class="relative z-20 flex flex-col items-center justify-center grow px-4 text-center -mt-16 md:-mt-16 lg:-mt-24">
    <div class="relative mb-6 md:mb-10 w-fit mx-auto whitespace-nowrap z-0 flex items-center justify-center">
      <h1 class="absolute z-0 text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-extrabold tracking-tighter font-['Sedgwick_Ave_Display',_cursive] text-[#DE005F] [-webkit-text-stroke:10px_#DE005F] md:[-webkit-text-stroke:18px_#DE005F] drop-shadow-[0_0_15px_rgba(222,0,95,0.8)]">
        Disha '26
      </h1>
      <h1 class="relative z-20 text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-extrabold tracking-tighter font-['Sedgwick_Ave_Display',_cursive] text-white">
        Disha '26
      </h1>
    </div>
    <div class="text-lg md:text-2xl lg:text-3xl font-black uppercase tracking-widest flex items-center gap-2 md:gap-4 bg-[#1a1525]/90 px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/5 relative z-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <span class="timer-unit" data-unit="D">
        <span class="timer-value">00</span>
        <span class="text-[#B829EA] font-black text-[10px] md:text-xs tracking-tighter">D</span>
      </span>
      <span class="text-white opacity-40 timer-colon">:</span>
      <span class="timer-unit" data-unit="H">
        <span class="timer-value">00</span>
        <span class="text-[#B829EA] font-black text-[10px] md:text-xs tracking-tighter">H</span>
      </span>
      <span class="text-white opacity-40 timer-colon">:</span>
      <span class="timer-unit" data-unit="M">
        <span class="timer-value">00</span>
        <span class="text-[#B829EA] font-black text-[10px] md:text-xs tracking-tighter">M</span>
      </span>
      <span class="text-white opacity-40 timer-colon">:</span>
      <span class="timer-unit" data-unit="S">
        <span class="timer-value">00</span>
        <span class="text-[#B829EA] font-black text-[10px] md:text-xs tracking-tighter">S</span>
      </span>
    </div>
    <a href="https://forms.gle/jHP7ByHxjmZ2psXv8" target="_blank" rel="noopener noreferrer" class="mt-8 px-12 py-3.5 bg-[#DE005F] text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#b8004e] active:scale-95 transition-all duration-200 select-none whitespace-nowrap relative z-10 shadow-xl font-bohme inline-block">
      Register
    </a>
  </main>

  <div class="absolute bottom-[16%] md:bottom-[10%] lg:bottom-[8%] z-20 w-[120%] -ml-[10%] overflow-hidden whitespace-nowrap py-4 md:py-6 bg-black/80 border-y-[3px] -rotate-2 shadow-2xl pointer-events-none">
    <div class="inline-flex gap-12 md:gap-24 pr-12 md:pr-24 ticker-track">
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} class="text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider font-bohme shrink-0">
          THE BIGGEST FRESHERS FEST <span class="text-[#DE005F]">COMING SOON!</span>
        </span>
      ))}
    </div>
  </div>

  <div class="absolute bottom-12 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-30 opacity-70 hover:opacity-100 transition-opacity cursor-pointer text-white md:hidden">
    <span class="text-sm font-normal">Scroll Down</span>
    <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="3" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

<style>
  @keyframes drift {
    0% { transform: translate(0px, 0px); }
    25% { transform: translate(15px, -10px); }
    50% { transform: translate(0px, -20px); }
    75% { transform: translate(-15px, -10px); }
    100% { transform: translate(0px, 0px); }
  }
  .floating-bg {
    animation: drift 20s linear infinite;
    will-change: transform;
  }
  @keyframes scanline {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(2px, 2px); }
  }
  .scanline-move {
    animation: scanline 0.5s linear infinite;
    will-change: transform;
  }
  .scanline-move.paused {
    animation-play-state: paused;
  }
  @keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .ticker-track {
    animation: ticker 20s linear infinite;
    will-change: transform;
  }
</style>

<script>
// --- Countdown Timer (batched DOM) ---
const TARGET = new Date('2026-03-27T00:00:00').getTime();
var timerUnits = document.querySelectorAll('.timer-unit');
var timerValues = [];

function updateTimer() {
  const now = Date.now();
  const diff = Math.max(0, TARGET - now);
  var d = Math.floor(diff / (1000 * 60 * 60 * 24));
  var h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  var m = Math.floor((diff / 1000 / 60) % 60);
  var s = Math.floor((diff / 1000) % 60);

  timerValues[0] = d.toString().padStart(2, '0');
  timerValues[1] = h.toString().padStart(2, '0');
  timerValues[2] = m.toString().padStart(2, '0');
  timerValues[3] = s.toString().padStart(2, '0');

  for (var i = 0; i < timerUnits.length; i++) {
    timerUnits[i].querySelector('.timer-value').textContent = timerValues[i];
  }
}

if (timerUnits.length) {
  timerValues = new Array(timerUnits.length);
  updateTimer();
  setInterval(updateTimer, 1000);
}

// --- Mobile Menu ---
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('mobile-overlay');
const menuCard = document.getElementById('menu-card');
const iconOpen = document.getElementById('menu-icon-open');
const iconClose = document.getElementById('menu-icon-close');
let menuOpen = false;

function openMenu() {
  menuOpen = true;
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
  document.body.style.overflow = 'hidden';
  iconOpen.classList.add('hidden');
  iconClose.classList.remove('hidden');
  requestAnimationFrame(() => {
    overlay.style.opacity = '0';
    menuCard.style.opacity = '0';
    menuCard.style.transform = 'scale(0.94) translateY(-20px)';
    requestAnimationFrame(() => {
      overlay.style.transition = 'opacity 0.25s ease';
      overlay.style.opacity = '1';
      menuCard.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      menuCard.style.opacity = '1';
      menuCard.style.transform = 'scale(1) translateY(0)';
      document.querySelectorAll('.mobile-nav-link').forEach((el, i) => {
        el.style.transition = `opacity 0.3s ease, transform 0.3s ease`;
        el.style.transitionDelay = `${0.2 + i * 0.055}s`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });
}

function closeMenu() {
  menuOpen = false;
  document.body.style.overflow = '';
  menuCard.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
  menuCard.style.opacity = '0';
  menuCard.style.transform = 'scale(0.95) translateY(-10px)';
  overlay.style.transition = 'opacity 0.25s ease';
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
  }, 250);
}

menuToggle.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeMenu();
});
document.querySelectorAll('.mobile-nav-link').forEach((a) => {
  a.addEventListener('click', closeMenu);
  a.style.opacity = '0';
  a.style.transform = 'translateY(12px)';
});

// --- Pause scanline when off-screen ---
var scanlineEl = document.querySelector('.scanline-move');
var scanlineObserver = new IntersectionObserver(function (entries) {
  for (var i = 0; i < entries.length; i++) {
    scanlineEl.classList.toggle('paused', !entries[i].isIntersecting);
  }
}, { threshold: 0 });
if (scanlineEl && scanlineEl.parentElement) scanlineObserver.observe(scanlineEl.parentElement);

// --- Scroll-Aware Header Title ---
const heroEl = document.getElementById('home');
const headerTitle = document.getElementById('header-title');
if (heroEl && headerTitle) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      headerTitle.textContent = entry.isIntersecting ? 'CET College Union 2025-26' : 'Disha 2026';
    },
    { threshold: 0.1 }
  );
  observer.observe(heroEl);
}
</script>
```

### `src/components/AboutDisha.astro`

```astro
---
import kalyaniforwebAsset from '../assets/kalyaniFORweb.webp';
const ABOUT_TEXT = "As the first of CET's iconic 3 Ds, Disha '26 is the ultimate stage for our freshers to ignite their spirit and showcase their artistry. With seven departments vying for the prestigious Disha Cup, the stakes have never been higher. Join us for a high-energy celebration of talent and synergy - guided this year by our mascot, Kalyani.";
const words = ABOUT_TEXT.split(' ');
---

<section id="about" class="relative min-h-screen bg-[#000000] py-24 md:py-32 overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#DE005F]/15 via-[#10152B]/90 to-[#000000] z-0 opacity-50"></div>

  <div class="absolute top-0 right-0 w-[70%] md:w-[40%] h-[50%] bg-[radial-gradient(circle,#DE005F_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(circle_at_top_right,black_30%,transparent)] z-30 opacity-70 pointer-events-none"></div>

  <div class="absolute bottom-0 left-0 w-[70%] md:w-[40%] h-[50%] bg-[radial-gradient(circle,#B829EA_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(circle_at_bottom_left,black_30%,transparent)] z-30 opacity-70 pointer-events-none"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center lg:gap-24">
    <div class="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mb-12 lg:mb-0 lg:-ml-20 lg:pb-40">
      <div class="relative inline-block">
        <div class="absolute -inset-[10px] z-5 opacity-20 mix-blend-overlay pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:6px_6px] scanline-move"></div>
        <img
          src={kalyaniforwebAsset.src}
          alt="Illustrated version of the Kalyani character"
          width="800"
          height="920"
          class="w-full h-auto object-cover max-w-sm lg:max-w-md xl:max-w-2xl drop-shadow-[0_0_25px_rgba(222,0,95,0.7)] kalyaniforweb-reveal"
        />
        <span class="block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[#B829EA] font-['Sedgwick_Ave_Display',_cursive] text-6xl md:text-8xl lg:text-[8rem] font-extrabold tracking-[-0.05em] [-webkit-text-stroke:1px_#fff] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] z-20 reveal-on-scroll">
          Kalyani
        </span>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white relative">
      <div class="w-full max-w-2xl lg:max-w-none">
        <div class="flex flex-col items-center lg:items-start mb-8 md:mb-16">
          <span class="text-white text-4xl md:text-6xl font-black uppercase tracking-widest leading-none drop-shadow-[0_0_15px_rgba(222,0,95,0.6)] font-bohme reveal-on-scroll">
            ABOUT
          </span>
          <span class="relative -mt-4 md:-mt-8 text-[#DE005F] font-['Sedgwick_Ave_Display',_cursive] font-extrabold tracking-wider text-7xl md:text-9xl [text-shadow:0_0_10px_rgba(222,0,95,0.8),0_0_20px_rgba(222,0,95,0.6),0_0_40px_rgba(222,0,95,0.4),0_0_80px_rgba(222,0,95,0.2)] reveal-on-scroll" style="z-index: 2;">
            DISHA
          </span>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style="z-index: 0;">
            <p class="text-[12rem] md:text-[18rem] lg:text-[22rem] tracking-widest font-black uppercase text-gray-700 opacity-10">KALYANI</p>
          </div>
          <p class="text-lg md:text-xl font-bold leading-loose tracking-[0.15em] relative z-10 flex flex-wrap font-myriad">
            {words.map((word, i) => (
              <span key={i} class="reveal-word mr-[0.35em]" style="color:rgba(255,255,255,0.2)">{word}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .reveal-on-scroll {
    opacity: 0;
    transition: opacity 0.8s ease;
  }
  .reveal-on-scroll.visible {
    opacity: 1;
  }
  @keyframes scanline {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(2px, 2px); }
  }
  .scanline-move {
    animation: scanline 0.5s linear infinite;
    will-change: transform;
  }
  .kalyaniforweb-reveal {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .kalyaniforweb-reveal.visible {
    opacity: 1;
    transform: scale(1);
  }
</style>

<script>
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

  const kalyaniforwebEl = document.querySelector('.kalyaniforweb-reveal');
  if (kalyaniforwebEl) observer.observe(kalyaniforwebEl);

  // Word-by-word reveal with ScrollTrigger-like behavior
  const wordEls = document.querySelectorAll('.reveal-word');
  const wordObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          wordEls.forEach((el, i) => {
            setTimeout(() => {
              el.style.color = 'rgba(255,255,255,1)';
              el.style.transition = 'color 0.3s ease';
            }, i * 50);
          });
        } else {
          wordEls.forEach((el) => {
            el.style.color = 'rgba(255,255,255,0.2)';
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  if (wordEls.length > 0) {
    const parent = wordEls[0].parentElement;
    if (parent) wordObserver.observe(parent);
  }
</script>
```

### `src/components/Leaderboard.astro`

```astro
---
import eventsBackground from '../assets/events_background.webp';
---

<section id="leaderboard" class="relative min-h-screen py-24 md:py-32 bg-[#000000] font-bohme">
  <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div class="sticky top-0 w-full h-screen">
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0 mix-blend-luminosity leaderboard-bg" data-bg={eventsBackground.src}></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#10152B]/90 via-[#7e22ce]/20 to-[#000000] z-0"></div>
      <div class="absolute top-0 left-0 w-full h-64 md:h-96 bg-gradient-to-b from-black via-black/60 to-transparent z-[2]"></div>
      <div class="absolute inset-0 z-[1] opacity-20 mix-blend-overlay bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:4px_4px]"></div>

      <div class="absolute top-[30%] -left-[20%] w-[140%] z-[5] opacity-25 rotate-[15deg] overflow-hidden whitespace-nowrap pointer-events-none">
        <div class="inline-flex gap-8 banner-scroll">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} class="text-8xl md:text-[12rem] font-black uppercase text-[#7e22ce] [-webkit-text-stroke:2px_#7e22ce] text-transparent tracking-tighter font-display shrink-0">DOMINATE</span>
          ))}
        </div>
      </div>
      <div class="absolute top-[50%] -left-[20%] w-[140%] z-[5] opacity-15 -rotate-[15deg] overflow-hidden whitespace-nowrap pointer-events-none">
        <div class="inline-flex gap-8 banner-scroll-reverse">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} class="text-8xl md:text-[12rem] font-black uppercase text-[#DE005F] [-webkit-text-stroke:2px_#DE005F] text-transparent tracking-tighter font-display shrink-0">CONQUER</span>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div class="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
    <div class="relative mb-16 md:mb-24 w-full text-center flex flex-col items-center justify-center">
      <h1 class="relative z-10 text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest text-white drop-shadow-2xl font-bohme leader-heading w-full">LEADER</h1>
      <h1 class="absolute z-20 drop-shadow-black top-8 md:top-14 text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-wider font-['Sedgwick_Ave_Display',_cursive] text-[#7e22ce] [text-shadow:0_0_10px_rgba(126,34,206,0.8),0_0_20px_rgba(126,34,206,0.6),0_0_40px_rgba(126,34,206,0.4),0_0_80px_rgba(126,34,206,0.2)] leader-heading w-full">BOARD</h1>
    </div>

    <div id="leaderboard-table" class="w-full flex flex-col mt-10 relative z-20 overflow-hidden border border-white/10 bg-[#1a1525]/60 shadow-[0_0_50px_rgba(126,34,206,0.15)] rounded-xl">
      <div class="flex items-center justify-between px-6 py-4 md:px-8 md:py-6 bg-[#7e22ce]/90">
        <h3 class="text-sm md:text-xl font-black uppercase tracking-normal text-white font-bohme">Standings</h3>
        <h3 class="text-sm md:text-xl font-black uppercase tracking-normal text-white font-bohme">Score</h3>
      </div>
      <div id="leaderboard-rows" class="flex flex-col">
        <div class="flex items-center justify-center px-6 py-8 text-white/40 text-sm font-bohme">Loading...</div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes bannerScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes bannerScrollReverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .banner-scroll {
    animation: bannerScroll 30s linear infinite;
    will-change: transform;
  }
  .banner-scroll-reverse {
    animation: bannerScrollReverse 40s linear infinite;
    will-change: transform;
  }
  .leaderboard-bg {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .leader-row {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .leader-row.visible {
    opacity: 1;
    transform: translateX(0);
  }
</style>

<script>
  (function() {
    var bg = document.querySelector('.leaderboard-bg');
    if (bg) bg.style.backgroundImage = 'url("' + bg.getAttribute('data-bg') + '")';
  })();
</script>

<script>
  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

  async function loadLeaderboard() {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard?select=*&order=point.desc`, {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      });
      const data = await res.json();
      const container = document.getElementById('leaderboard-rows');

      if (!data || data.length === 0) {
        container.innerHTML = '<div class="flex items-center justify-center px-6 py-8 text-white/40 text-sm font-bohme">No data available</div>';
        return;
      }

      container.innerHTML = data
        .map(
          (row, i) => `
        <div class="leader-row group relative flex items-center justify-between px-6 py-4 md:px-8 md:py-5 border-b border-white/5 last:border-b-0 transition-colors duration-200 hover:bg-[#7e22ce]/20 ${i % 2 === 0 ? 'bg-transparent' : 'bg-black/20'}">
          <div class="flex items-center gap-4 md:gap-6">
            <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 border border-white/5 flex items-center justify-center font-black text-lg md:text-xl shadow-inner font-bohme ${i === 0 ? 'text-[#DE005F]' : i === 1 ? 'text-[#b829ea]' : i === 2 ? 'text-[#7e22ce]' : 'text-white/40'}">${i + 1}</div>
            <p class="text-sm md:text-lg font-bold uppercase tracking-normal text-white/90 truncate max-w-[180px] md:max-w-md font-bohme">${row.department}</p>
          </div>
          <div class="flex items-baseline gap-1 md:gap-2">
            <span class="text-xl md:text-3xl font-black tabular-nums text-[#b829ea] font-bohme">${row.point?.toLocaleString()}</span>
          </div>
        </div>`
        )
        .join('');

      // Stagger reveal with intersection observer
      const rows = container.querySelectorAll('.leader-row');
      const rowObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              rows.forEach((row, i) => {
                setTimeout(() => row.classList.add('visible'), i * 100);
              });
              rowObserver.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );
      if (rows.length > 0) rowObserver.observe(rows[0]);
    } catch (err) {
      document.getElementById('leaderboard-rows').innerHTML =
        '<div class="flex items-center justify-center px-6 py-8 text-red-400/60 text-sm font-bohme">Failed to load leaderboard</div>';
    }
  }

  loadLeaderboard();

  // Scroll-triggered heading reveal
  const headings = document.querySelectorAll('.leader-heading');
  const headingObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1) translateY(0)';
        } else {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'scale(0.8) translateY(30px)';
        }
      });
    },
    { threshold: 0.3 }
  );
  headings.forEach((h) => {
    h.style.opacity = '0';
    h.style.transform = 'scale(0.8) translateY(30px)';
    h.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
    headingObserver.observe(h);
  });
</script>
```

### `src/components/EventsList.astro`

```astro
---
import DitherCanvas from './ThreeCanvas.jsx';

const REAL_EVENTS_DATA = [
  { id: 1, title: 'MAIN EVENTS', eventsList: ['Face of Disha', 'MX-Techie', 'MX-Disha', 'Fashion Show', 'Street Play', 'Disha Idol', 'Just Dance', 'Wall Painting'] },
  { id: 2, title: 'TECHNICAL', eventsList: ['Ideathon', 'Quiz', 'Technical Essay', 'Prompt Writing', 'Speed Typing'] },
  { id: 3, title: 'E-GAMES', eventsList: ['E-Football', 'BGMI', 'Valorant', 'Mini Militia', 'Free Fire', 'FIFA', 'COD'] },
  { id: 4, title: 'SPORTS', eventsList: ['Football', 'Cricket', 'Volleyball', 'Tug of War', 'Badminton', 'Table Tennis', 'Chess', 'Carroms', 'Cycle Slow Race', 'Basketball', 'Arm Wrestling', 'Super Over (W)', 'Penalty Shoot (W)', 'Mr. Ponjikkara'] },
  { id: 5, title: 'ATHLETICS', eventsList: ['100M Race (M/W)', 'Shot Put (M/W)', 'High Jump', 'Long Jump', '400 M Relay (M/W)', 'Brisk Walk 800M (M/W)', '200M Race (M/W)', 'Biathlon'] },
  { id: 6, title: 'LITERARY', eventsList: ['Story Writing (Eng)', 'Story Writing (Mal)', 'Story Writing (Hin)', 'Versification (Eng)', 'Versification (Mal)', 'Versification (Hin)', 'Jingle Writing (Eng)', 'Jingle Writing (Mal)', 'Book Review', 'Film Review', 'Recitation (Eng)', 'Recitation (Mal)', 'Recitation (Hin)', 'Short Story (Eng)', 'Short Story (Mal)', 'Caption Writing (Eng)', 'Caption Writing (Mal)', 'Extempore (Eng)', 'Extempore (Mal)', 'Extempore (Hin)'] },
  { id: 7, title: 'MUSICAL', eventsList: ['Classical Music', 'Light Music', 'Western (Duet)', 'Bands Battle', 'Nadanpattu', 'Unplugged', 'Mappilappattu'] },
  { id: 8, title: 'DANCE', eventsList: ['Adapt Tunes', 'Prepared Duo', 'Prepared Solo'] },
  { id: 9, title: 'THEATRICAL', eventsList: ['Street Play', 'Mono Act', 'Mimicry', 'Stand-up Comedy', 'Skit'] },
  { id: 10, title: 'ART', eventsList: ['Pencil Drawing', 'Water Colouring', 'Cartoon', 'Digital Painting', 'Face Painting', 'Doodle Art', 'Minimal Poster', 'Oil Painting', 'Clay Modelling', 'Origami', 'Bottle Art', 'Calligraphy'] },
  { id: 11, title: 'MISCELLANEOUS', eventsList: ['Troll Making', 'Rubix Cube', 'Short Film', 'Department Magazine', 'Mannequin', 'Trailer Making', 'Reel Making', 'Business (Naptol)', 'Channel Surfing', 'Guess Who?', 'Treasure Hunt', 'Open Debate', 'Jam', 'Integration Bee', 'Spot Commentary', 'Shot Story', 'Picture Perception', 'Theme-Based Photography', 'Movie Recreation'] },
];
---

<section id="events" class="relative w-full bg-black z-20">
  <div class="absolute inset-0 z-0 h-full w-full pointer-events-auto">
    <div class="sticky top-0 w-full h-[100dvh] overflow-hidden bg-black">
      <div class="absolute inset-0 w-full h-full">
        <DitherCanvas
          client:idle
          waveColor={[0.45, 0.0, 0.2]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.6}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      <div class="absolute inset-0 bg-black/30 pointer-events-none"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8A003B]/30 via-transparent to-transparent opacity-80 pointer-events-none"></div>
      <div class="absolute top-0 left-0 w-full h-64 md:h-96 bg-gradient-to-b from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
    </div>
  </div>

  <div id="events-scroll-section" class="sticky top-0 z-10 w-full h-[100dvh] flex items-center overflow-hidden pointer-events-none">
    <div class="absolute top-10 md:top-14 left-0 z-50 w-full flex justify-center pointer-events-none px-4">
      <h2 class="flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-5 drop-shadow-[0_0_15px_rgba(222,0,95,0.6)]">
        <span class="text-[#DE005F] -mt-4 font-['Sedgwick_Ave_Display',_cursive] font-extrabold tracking-[-0.05em] text-6xl md:text-9xl relative [text-shadow:0_0_10px_rgba(222,0,95,0.8),0_0_20px_rgba(222,0,95,0.6),0_0_40px_rgba(222,0,95,0.4)]">
          EVENTS
        </span>
      </h2>
    </div>

    <div id="events-cards-wrapper" class="flex items-center h-full w-max px-[5vw] gap-6 md:gap-12 mt-28 md:mt-32 will-change-transform">
      {REAL_EVENTS_DATA.map((event) => (
        <div
          key={event.id}
          class="event-card pointer-events-auto w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw] h-[70vh] flex flex-col bg-black/60 border border-white/10 rounded-none p-6 md:p-10 shrink-0 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          <div class="shrink-0 mb-6 w-full flex justify-center">
            <h3 class="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-[#DE005F] break-words text-center font-bohme" style="text-shadow:0 0 15px rgba(222,0,95,0.4)">
              {event.title}
            </h3>
          </div>

          <div class="flex-grow overflow-y-auto overflow-x-hidden custom-scrollbar pr-2 relative w-full">
            <div class="relative flex items-center justify-center gap-3 mb-6 sticky top-0 z-20 pt-2 pb-6 -mt-2 w-full">
              <div class="absolute inset-0 -mx-6 bg-gradient-to-b from-black/90 via-black/50 to-transparent pointer-events-none"></div>
              <span class="relative z-10 h-px flex-grow bg-gradient-to-r from-transparent to-[#DE005F]"></span>
              <span class="relative z-10 h-px flex-grow bg-gradient-to-l from-transparent to-[#DE005F]/50"></span>
            </div>

            <div class="flex flex-col w-full">
              {event.eventsList.map((item, index) => (
                <div key={index} class="group flex items-start gap-4 py-3 md:py-4 border-b border-white/10 hover:border-white/30 transition-colors w-full">
                  <span class="text-[#DE005F] font-black text-sm md:text-base w-5 shrink-0 mt-0.5 font-myriad">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span class="text-white/90 group-hover:text-white font-bold tracking-wide text-sm sm:text-base md:text-lg flex-1 break-words whitespace-normal leading-snug font-myriad" style="text-shadow:0 2px 4px rgba(0,0,0,0.5)">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div id="events-spacer" class="w-full pointer-events-none"></div>
</section>

<script>
  (function () {
    var section = document.getElementById('events-scroll-section');
    var wrapper = document.getElementById('events-cards-wrapper');
    var spacer = document.getElementById('events-spacer');
    if (!section || !wrapper || !spacer) return;

    var maxScroll = 0;
    var sectionTop = -1;
    var scrollPos = 0;
    var rafPending = false;

    function getScrollAmount() {
      return Math.max(0, wrapper.scrollWidth - window.innerWidth);
    }

    function setup() {
      maxScroll = getScrollAmount();
      spacer.style.height = maxScroll + 'px';

      var eventsSection = section.parentElement;
      sectionTop = eventsSection.getBoundingClientRect().top + window.scrollY;
      scrollPos = Math.max(0, Math.min(window.scrollY - sectionTop, maxScroll));
      applyTransform();
    }

    function onScroll() {
      if (sectionTop === -1 || isSwipingH) return;

      scrollPos = Math.max(0, Math.min(window.scrollY - sectionTop, maxScroll));
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(applyTransform);
      }
    }

    function applyTransform() {
      rafPending = false;
      wrapper.style.transform = 'translate3d(' + (-scrollPos) + 'px, 0px, 0px)';
    }

    // --- Touch swipe (mobile) ---
    var touchStartX = 0;
    var touchStartY = 0;
    var isSwipingH = false;
    var touchBaseScroll = 0;

    function handleTouchStart(e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isSwipingH = false;
      touchBaseScroll = scrollPos;
    }

    function handleTouchMove(e) {
      var currentX = e.touches[0].clientX;
      var diffX = touchStartX - currentX;
      var diffY = touchStartY - e.touches[0].clientY;

      if (!isSwipingH && Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        isSwipingH = true;
      }

      if (isSwipingH) {
        if (e.cancelable) e.preventDefault();
        scrollPos = Math.max(0, Math.min(touchBaseScroll + (diffX * 1.2), maxScroll));
        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(applyTransform);
        }
      }
    }

    function handleTouchEnd() {
      if (isSwipingH) {
        window.scrollTo({
          top: sectionTop + scrollPos,
          left: 0,
          behavior: 'instant'
        });
        setTimeout(function() {
          isSwipingH = false;
        }, 50);
      } else {
        isSwipingH = false;
      }
    }

    // --- Init ---
    var ro = new ResizeObserver(setup);
    ro.observe(document.body);

    setup();
    window.addEventListener('resize', setup);
    document.addEventListener('scroll', onScroll, { passive: true });

    var cardsSection = section.parentElement;
    if (cardsSection) {
      cardsSection.addEventListener('touchstart', handleTouchStart, { passive: true });
      cardsSection.addEventListener('touchmove', handleTouchMove, { passive: false });
      cardsSection.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
  })();
</script>
```

### `src/components/ConvenorGallery.astro`

```astro
---
import MariamImg from '../assets/DishaTeam/Mariam_Jo_Palakkadan_Convenor.webp';
import AbhishekImg from '../assets/DishaTeam/Abhishek_B.webp';
import HasilImg from '../assets/DishaTeam/HASIL_ALI_P_T.webp';
import AnoojImg from '../assets/DishaTeam/Anooj_M_A.webp';
import HelizeImg from '../assets/DishaTeam/Helize_P_Mathew_coordinator.webp';
import NandanImg from '../assets/DishaTeam/Nandanlal.webp';
import SarangiImg from '../assets/DishaTeam/Sarangi.webp';

const TEAM = [
  { id: 1, name: "Mariam", title: "Convenor", img: MariamImg, cls: "w-[42%] aspect-[3/4] top-[20%] left-[33%] z-50 rotate-2" },
  { id: 2, name: "Helize", title: "Coordinator", img: HelizeImg, cls: "w-[32%] aspect-[3/4] top-[6%] left-[10%] z-20 -rotate-3" },
  { id: 3, name: "Anooj", title: "Coordinator", img: AnoojImg, cls: "w-[30%] aspect-[4/5] top-[-1%] right-[8%] z-30 rotate-3" },
  { id: 4, name: "Abhishek", title: "Co-Convenor", img: AbhishekImg, cls: "w-[33.6%] aspect-[4/5] top-[38%] left-[4%] z-40 -rotate-2" },
  { id: 5, name: "Hasil", title: "Co-Convenor", img: HasilImg, cls: "w-[34%] aspect-[3/4] top-[26%] right-[0%] z-20 rotate-1" },
  { id: 6, name: "NandanLal", title: "Coordinator", img: NandanImg, cls: "w-[36%] aspect-[4/5] bottom-[5%] left-[16%] z-30 -rotate-1" },
  { id: 7, name: "Sarangi", title: "Coordinator", img: SarangiImg, cls: "w-[32%] aspect-square bottom-[12%] right-[12%] z-40 -rotate-3" },
];
---

<section id="team" class="relative w-full bg-[#000000] py-24 md:py-32 px-6 md:px-12 overflow-hidden flex justify-center font-sans">
  <div class="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_0.2px)] bg-[size:6px_6px]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#8911b3]/10 via-black to-black z-0 pointer-events-none"></div>

  <div class="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8">
    <div class="lg:col-span-5 order-1 flex flex-col items-center lg:items-start z-10 text-center lg:text-left lg:self-end lg:pb-4">
      <h2 class="flex flex-col gap-1 mb-0">
        <span class="text-white text-4xl md:text-6xl font-black uppercase tracking-widest leading-none drop-shadow-[0_0_15px_rgba(137,17,179,0.6)] font-bohme">#TEAM</span>
        <span class="text-[#8911b3] font-['Sedgwick_Ave_Display',_cursive] font-extrabold tracking-wider text-7xl md:text-9xl relative -mt-4 md:-mt-8 [text-shadow:0_0_10px_rgba(137,17,179,0.8),0_0_20px_rgba(137,17,179,0.6),0_0_40px_rgba(137,17,179,0.4)]">DISHA</span>
      </h2>
    </div>

    <div class="lg:col-span-7 order-2 lg:row-span-2 relative aspect-[4/5] w-full max-w-[550px] mx-auto lg:mr-0 select-none">
      {TEAM.map((m) => (
        <div
          class={`team-photo absolute cursor-pointer overflow-hidden bg-[#10152B] border-2 md:border-2 origin-center rounded-sm border-white/10 shadow-2xl ${m.cls}`}
          data-id={m.id}
        >
          <img src={m.img.src} alt={m.name} loading="lazy" decoding="async" class="w-full h-full object-cover pointer-events-none team-photo-img" />
          <div class="team-overlay absolute inset-0 bg-gradient-to-t from-[#10152B] via-[#10152B]/40 to-transparent flex flex-col justify-end p-3 md:p-5 pointer-events-none">
            <h3 class="text-white font-black text-sm md:text-xl uppercase tracking-widest leading-none font-myriad">{m.name}</h3>
            <p class="text-[#8911b3] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-1">{m.title}</p>
          </div>
        </div>
      ))}
    </div>

    <div class="lg:col-span-5 order-3 flex flex-col items-center lg:items-start z-10 text-center lg:text-left lg:self-start lg:pt-4">
      <div class="flex flex-col bg-transparent gap-3 text-white/70 text-sm md:text-base tracking-wider uppercase font-bold backdrop-blur-md p-6 w-full max-w-md font-myriad">
        <div class="flex justify-between items-center border-b border-white/10 pb-2">
          <span class="text-[#8911b3]">Convenor</span>
          <span>Mariam: +91 94966 22452</span>
        </div>
        <div class="flex justify-between items-center border-b border-white/10 pb-2">
          <span class="text-[#8911b3]">Co-Convenor</span>
          <span>Abhishek: +91 89216 76073</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-[#8911b3]">Co-Convenor</span>
          <span>Hasil: +91 95441 29022</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .team-photo {
    will-change: transform, filter;
  }
  .team-photo-img {
    filter: grayscale(100%) contrast(120%) brightness(0.7);
    opacity: 0.8;
    transition: filter 0.4s ease-out, opacity 0.4s ease-out;
  }
  .team-photo.active .team-photo-img {
    filter: grayscale(0%) contrast(110%);
    opacity: 1;
  }
  .team-photo.active {
    border-color: #8911b3 !important;
    box-shadow: 0 0 30px rgba(137,17,179,0.6);
    z-index: 60 !important;
  }
  .team-overlay {
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }
  .team-overlay h3, .team-overlay p {
    transform: translateY(2px);
    transition: transform 0.4s ease-out;
  }
  .team-photo.active .team-overlay {
    opacity: 1;
  }
  .team-photo.active .team-overlay h3,
  .team-photo.active .team-overlay p {
    transform: translateY(0);
  }
</style>

<script>
  (function () {
    var photos = document.querySelectorAll('#team .team-photo');
    if (!photos.length) return;

    var activeId = null;

    function resetAll() {
      photos.forEach(function (el) {
        var id = parseInt(el.getAttribute('data-id'));
        var isActive = id === activeId;
        el.classList.toggle('active', isActive);
        el.style.transform = isActive ? 'scale(1.08)' : '';
      });
    }

    // Set initial hidden + random rotation
    photos.forEach(function (el) {
      var rng = Math.random() * 30 - 15;
      el.style.opacity = '0';
      el.style.transform = 'scale(0.8) rotate(' + rng + 'deg)';
    });

    // --- Reveal via IntersectionObserver ---
    var revealed = false;
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting && !revealed) {
          revealed = true;
          photos.forEach(function (el, idx) {
            setTimeout(function () {
              el.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
              el.style.opacity = '1';
              el.style.transform = 'scale(1)';
            }, 400 + idx * 80);
          });
          io.disconnect();
          break;
        }
      }
    }, { threshold: 0.15 });

    if (photos.length > 0) io.observe(photos[0].parentElement);

    // Add transition for hover after reveal is done
    setTimeout(function () {
      photos.forEach(function (el) {
        el.style.transition = 'all 0.4s ease-out';
      });
    }, 400 + photos.length * 80 + 200);

    // --- Hover/Click ---
    photos.forEach(function (el) {
      var id = parseInt(el.getAttribute('data-id'));
      el.addEventListener('mouseenter', function () {
        if (window.matchMedia('(hover: hover)').matches) { activeId = id; resetAll(); }
      });
      el.addEventListener('mouseleave', function () {
        if (window.matchMedia('(hover: hover)').matches) { activeId = null; resetAll(); }
      });
      el.addEventListener('click', function () {
        activeId = activeId === id ? null : id;
        resetAll();
      });
    });
  })();
</script>
```

### `src/components/Footer.astro`

```astro
---
const textContent = "DISHA '26";
const name1 = "Sooraj";
const ph1 = "+91 73063 94116";
const name2 = "George";
const ph2 = "+91 73568 78569";
import WaveBg from './WaveBg.jsx';
---

<footer class="w-full bg-black flex flex-col relative overflow-hidden">
  <WaveBg client:visible />

  <div class="relative z-10">
    <!-- Mobile / Tablet: stacked, centered -->
    <div class="flex flex-col items-center gap-8 lg:hidden w-full max-w-7xl mx-auto px-6 py-10">
      <div class="text-center font-myriad">
        <p class="text-zinc-600 text-xs tracking-[0.15em] font-semibold uppercase">Created and maintained by:</p>
        <div class="mt-2 space-y-1">
          <p class="text-zinc-500 text-xs tracking-[0.1em]">{name1}: {ph1}</p>
          <p class="text-zinc-500 text-xs tracking-[0.1em]">{name2}: {ph2}</p>
        </div>
      </div>

      <h2 class="font-['Sedgwick_Ave_Display',_cursive] font-extrabold tracking-tighter text-white leading-none text-center
                 text-[clamp(3rem,15vw,6rem)]
                 [text-shadow:0_0_10px_rgba(137,17,179,0.8),0_0_20px_rgba(137,17,179,0.6),0_0_40px_rgba(137,17,179,0.4)]">
        {textContent}
      </h2>

      <div class="flex items-center justify-center gap-8 mx-auto">
        <a href="https://www.instagram.com/dishacet" target="_blank" rel="noopener noreferrer"
           class="text-zinc-500 hover:text-purple-400 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/dishacet" target="_blank" rel="noopener noreferrer"
           class="text-zinc-500 hover:text-purple-400 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href="mailto:disha@cet.ac.in"
           class="text-zinc-500 hover:text-purple-400 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Desktop / Laptop -->
    <div class="hidden lg:grid lg:grid-cols-[65%_35%] w-full max-w-7xl mx-auto px-12 pt-10 pb-16">
      <div class="flex flex-col justify-end">
        <h2 class="font-['Sedgwick_Ave_Display',_cursive] font-extrabold tracking-tighter text-white leading-none
                   text-[clamp(2.5rem,8vw,6.5rem)]
                   [text-shadow:0_0_10px_rgba(137,17,179,0.8),0_0_20px_rgba(137,17,179,0.6),0_0_40px_rgba(137,17,179,0.4)]">
          {textContent}
        </h2>
      </div>

      <div class="flex flex-col justify-center items-center">
        <div class="flex items-center justify-center gap-10 mx-auto">
          <a href="https://www.instagram.com/dishacet" target="_blank" rel="noopener noreferrer"
             class="text-zinc-500 hover:text-purple-400 transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/dishacet" target="_blank" rel="noopener noreferrer"
             class="text-zinc-500 hover:text-purple-400 transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="mailto:disha@cet.ac.in"
             class="text-zinc-500 hover:text-purple-400 transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>

        <div class="mt-14 text-center font-myriad">
          <p class="text-zinc-600 text-xs tracking-[0.15em] font-semibold uppercase">Created and maintained by:</p>
          <div class="mt-2 space-y-1">
            <p class="text-zinc-500 text-xs tracking-[0.1em]">{name1}: {ph1}</p>
            <p class="text-zinc-500 text-xs tracking-[0.1em]">{name2}: {ph2}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="w-full py-4 lg:py-3">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <a href="https://www.instagram.com/cet.college.union" target="_blank" rel="noopener noreferrer"
           class="text-zinc-600 hover:text-purple-400 transition-colors text-[10px] lg:text-[11px] tracking-[0.3em] font-bold uppercase">
          &copy; 2026 CET College Union
        </a>
      </div>
    </div>
  </div>
</footer>
```

---

## 5. Source: Components (React JSX)

### `src/components/ThreeCanvas.jsx`

```jsx
import React, { Suspense, lazy } from 'react';

const DitherCanvas = lazy(() => import('./ThreeCanvasImpl.jsx'));

export default function ThreeCanvas(props) {
  return (
    <Suspense fallback={<div className="w-full h-full bg-black" />}>
      <DitherCanvas {...props} />
    </Suspense>
  );
}
```

### `src/components/ThreeCanvasImpl.jsx`

```jsx
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { wrapEffect } from '@react-three/postprocessing';
import { Effect } from 'postprocessing';
import * as THREE from 'three';

const _origConsoleWarn = console.warn.bind(console);
console.warn = (msg, ...args) => {
  if (msg && typeof msg === 'string' && msg.includes('THREE.Clock') && msg.includes('deprecated')) return;
  _origConsoleWarn(msg, ...args);
};

const waveVertexShader = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
}
`;

const waveFragmentShader = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform vec2 mousePos;
uniform float enableMouseInteraction;
uniform float mouseRadius;

vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

const int OCTAVES = 3;
float fbm(vec2 p) {
  float value = 0.0;
  float amp = 1.0;
  float freq = waveFrequency;
  for (int i = 0; i < OCTAVES; i++) {
    value += amp * abs(cnoise(p));
    p *= freq;
    amp *= waveAmplitude;
  }
  return value;
}

float pattern(vec2 p) {
  vec2 p2 = p - time * waveSpeed;
  return fbm(p + fbm(p2));
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  uv -= 0.5;
  uv.x *= resolution.x / resolution.y;

  float dim = 0.0;

  if (enableMouseInteraction > 0.5) {
    vec2 mouseNDC = (mousePos / resolution - 0.5) * vec2(1.0, -1.0);
    mouseNDC.x *= resolution.x / resolution.y;

    vec2 dir = uv - mouseNDC;
    float dist = length(dir);
    float effect = 1.0 - smoothstep(0.0, mouseRadius, dist);

    uv += normalize(dir + vec2(0.0001)) * effect * 0.15;
    dim = effect * 0.25;
  }

  float f = pattern(uv) - dim;
  vec3 col = mix(vec3(0.0), waveColor, f);
  gl_FragColor = vec4(col, 1.0);
}
`;

const ditherFragmentShader = `
precision highp float;
uniform float colorNum;
uniform float pixelSize;

float interleavedGradientNoise(vec2 n) {
  float f = 0.06711056 * n.x + 0.00583715 * n.y;
  return fract(52.9829189 * fract(f));
}

void mainImage(in vec4 inputColor, in vec2 uv, out vec4 outputColor) {
  vec2 normalizedPixelSize = pixelSize / resolution;
  vec2 uvPixel = normalizedPixelSize * floor(uv / normalizedPixelSize);
  vec4 color = texture2D(inputBuffer, uvPixel);

  vec2 scaledCoord = floor(uv * resolution / pixelSize);
  float threshold = interleavedGradientNoise(scaledCoord) - 0.25;

  float denom = max(colorNum - 1.0, 1.0);
  float step = 1.0 / denom;
  color.rgb += threshold * step;
  float bias = 0.2;
  color.rgb = clamp(color.rgb - bias, 0.0, 1.0);
  color.rgb = floor(color.rgb * denom + 0.5) / denom;

  outputColor = color;
}
`;

class RetroEffectImpl extends Effect {
  constructor() {
    const uniforms = new Map([
      ['colorNum', new THREE.Uniform(4.0)],
      ['pixelSize', new THREE.Uniform(2.0)]
    ]);
    super('RetroEffect', ditherFragmentShader, { uniforms });
    this.uniforms = uniforms;
  }
  set colorNum(v) {
    this.uniforms.get('colorNum').value = v;
  }
  get colorNum() {
    return this.uniforms.get('colorNum').value;
  }
  set pixelSize(v) {
    this.uniforms.get('pixelSize').value = v;
  }
  get pixelSize() {
    return this.uniforms.get('pixelSize').value;
  }
}

const WrappedRetro = wrapEffect(RetroEffectImpl);

const RetroEffect = forwardRef((props, ref) => {
  const { colorNum, pixelSize } = props;
  return <WrappedRetro ref={ref} colorNum={colorNum} pixelSize={pixelSize} />;
});
RetroEffect.displayName = 'RetroEffect';

function DitheredWaves({
  waveSpeed,
  waveFrequency,
  waveAmplitude,
  waveColor,
  colorNum,
  pixelSize,
  disableAnimation,
  enableMouseInteraction,
  mouseRadius
}) {
  const mesh = useRef(null);
  const prevColor = useRef([...waveColor]);

  const targetMouse = useRef(new THREE.Vector2(-1000, -1000));
  const smoothMouse = useRef(new THREE.Vector2(-1000, -1000));

  const { viewport, size, gl } = useThree();

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const activeMouseInteraction = enableMouseInteraction && !isMobile;

  const waveUniformsRef = useRef({
    time: { value: 0 },
    resolution: { value: new THREE.Vector2(0, 0) },
    waveSpeed: { value: waveSpeed },
    waveFrequency: { value: waveFrequency },
    waveAmplitude: { value: waveAmplitude },
    waveColor: { value: new THREE.Color(...waveColor) },
    mousePos: { value: new THREE.Vector2(-1000, -1000) },
    enableMouseInteraction: { value: activeMouseInteraction ? 1.0 : 0.0 },
    mouseRadius: { value: mouseRadius }
  });

  useEffect(() => {
    if (!activeMouseInteraction) return;

    const handlePointer = (e) => {
      const dpr = gl.getPixelRatio();
      targetMouse.current.set(e.clientX * dpr, e.clientY * dpr);
    };

    window.addEventListener('pointermove', handlePointer);
    window.addEventListener('pointerdown', handlePointer);

    return () => {
      window.removeEventListener('pointermove', handlePointer);
      window.removeEventListener('pointerdown', handlePointer);
    };
  }, [activeMouseInteraction, gl]);

  useEffect(() => {
    if (!mesh.current) return;
    const dpr = gl.getPixelRatio();
    const w = Math.floor(size.width * dpr),
      h = Math.floor(size.height * dpr);
    const res = mesh.current.material.uniforms.resolution.value;
    if (res.x !== w || res.y !== h) {
      res.set(w, h);
    }
  }, [size, gl]);

  const processedFragmentShader = React.useMemo(() => {
    return waveFragmentShader.replace(
      'const int OCTAVES = 3;',
      `const int OCTAVES = ${isMobile ? '2' : '3'};`
    );
  }, [isMobile]);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    const u = mesh.current.material.uniforms;

    if (!disableAnimation) {
      u.time.value += delta;
    }

    if (u.waveSpeed.value !== waveSpeed) u.waveSpeed.value = waveSpeed;
    if (u.waveFrequency.value !== waveFrequency) u.waveFrequency.value = waveFrequency;
    if (u.waveAmplitude.value !== waveAmplitude) u.waveAmplitude.value = waveAmplitude;

    if (!prevColor.current.every((v, i) => v === waveColor[i])) {
      u.waveColor.value.set(...waveColor);
      prevColor.current = [...waveColor];
    }

    u.enableMouseInteraction.value = activeMouseInteraction ? 1.0 : 0.0;
    u.mouseRadius.value = mouseRadius;

    if (activeMouseInteraction) {
      smoothMouse.current.lerp(targetMouse.current, 0.1);
      u.mousePos.value.copy(smoothMouse.current);
    }
  });

  return (
    <>
      <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry args={[1, 1]} />
        <shaderMaterial
          vertexShader={waveVertexShader}
          fragmentShader={processedFragmentShader}
          uniforms={waveUniformsRef.current}
        />
      </mesh>
    </>
  );
}

function DitherCanvas({
  waveSpeed = 0.05,
  waveFrequency = 3,
  waveAmplitude = 0.3,
  waveColor = [0.5, 0.5, 0.5],
  colorNum = 4,
  pixelSize = 2,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 1
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 6] }}
        dpr={1}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          failIfMajorPerformanceCaveat: false
        }}
      >
        <DitheredWaves
          waveSpeed={waveSpeed}
          waveFrequency={waveFrequency}
          waveAmplitude={waveAmplitude}
          waveColor={waveColor}
          colorNum={colorNum}
          pixelSize={pixelSize}
          disableAnimation={disableAnimation || !isVisible}
          enableMouseInteraction={enableMouseInteraction && isVisible}
          mouseRadius={mouseRadius}
        />
      </Canvas>
    </div>
  );
}

export default DitherCanvas;
```

### `src/components/WaveBg.jsx`

```jsx
import React, { Suspense, lazy, useEffect, useState } from 'react';

const WaveBgImpl = lazy(() => import('./WaveBgImpl.jsx'));

export default function WaveBg() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const shouldShow = Math.random() < 0.1;
    setShow(shouldShow);
    if (shouldShow) {
      console.log('Congratulations! You have found an Easter egg!');
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {show && (
        <Suspense fallback={null}>
          <WaveBgImpl />
        </Suspense>
      )}
    </div>
  );
}
```

### `src/components/WaveBgImpl.jsx`

```jsx
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const vertexShader = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;
varying vec2 vUv;

uniform vec2 resolution;
uniform float time;
uniform float drain;

vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  float f = 2.5;
  for (int i = 0; i < 3; i++) {
    v += a * cnoise(p * f);
    f *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  float aspect = resolution.x / resolution.y;
  vec2 uv = vec2(vUv.x * aspect, vUv.y);
  uv.y += drain * 2.8;
  uv.x += time * 0.015;

  float h = fbm(uv);
  float crest = abs(sin(h * 12.0));
  crest = smoothstep(0.15, 0.5, crest);
  crest = 1.0 - abs(crest - 0.5) * 2.0;
  crest = smoothstep(0.2, 0.55, crest);

  float topFade = 1.0 - smoothstep(0.0, 0.8, drain * 2.8 - 0.6);
  float bottomFade = smoothstep(0.0, 0.15, vUv.y);
  float alpha = crest * topFade * bottomFade;

  vec3 col = mix(
    vec3(0.05, 0.0, 0.08),
    vec3(0.5, 0.2, 0.8),
    alpha
  );

  gl_FragColor = vec4(col, alpha * 0.55);
}
`;

function WaveSurface({ active }) {
  const mesh = useRef(null);
  const { viewport } = useThree();
  const drainRef = useRef(0);

  const uniformsRef = useRef({
    time: { value: 0 },
    resolution: { value: [viewport.width * 2, viewport.height * 2] },
    drain: { value: 0 },
  });

  useFrame((_state, delta) => {
    if (!mesh.current) return;
    const u = mesh.current.material.uniforms;
    if (active && drainRef.current < 1.0) {
      u.time.value += delta * 0.3;
      drainRef.current = Math.min(drainRef.current + delta * 0.035, 1.0);
      u.drain.value = drainRef.current;
    }
  });

  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniformsRef.current}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function WaveBg() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 6] }}
        dpr={1}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          failIfMajorPerformanceCaveat: false,
        }}
      >
        <WaveSurface active={active} />
      </Canvas>
    </div>
  );
}
```

---

## 6. Source: Styles

### `src/index.css`

```css
@import 'tailwindcss';

@theme {
  --font-sans: "Radio Canada Big", sans-serif;
  --font-display: "Anton", sans-serif;
  --font-sc: "Anton SC", sans-serif;
  --font-bohme: "Bohme", sans-serif;
  --font-bohme-rounded: "Bohme Rounded", sans-serif;
  --font-myriad: "Myriad Pro", sans-serif;
}

@font-face {
  font-family: 'Bohme';
  src: url('./assets/fonts/bohme/Bohme.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Bohme Rounded';
  src: url('./assets/fonts/bohme/Bohme-Rounded.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Myriad Pro';
  src: url('./assets/fonts/myriad-pro/MYRIADPRO-REGULAR.OTF') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Myriad Pro';
  src: url('./assets/fonts/myriad-pro/MYRIADPRO-BOLD.OTF') format('opentype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Myriad Pro';
  src: url('./assets/fonts/myriad-pro/MYRIADPRO-SEMIBOLD.OTF') format('opentype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

.uiverse-start-button {
  --main-color: rgb(46, 213, 115);
  --main-bg-color: rgba(46, 213, 116, 0.36);
  --pattern-color: rgba(46, 213, 116, 0.073);
  filter: hue-rotate(0deg);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  background: radial-gradient(circle, var(--main-bg-color) 0%, rgba(0, 0, 0, 0) 95%), linear-gradient(var(--pattern-color) 1px, transparent 1px), linear-gradient(to right, var(--pattern-color) 1px, transparent 1px);
  background-size: cover, 15px 15px, 15px 15px;
  background-position: center center, center center, center center;
  border-image: radial-gradient(circle, var(--main-color) 0%, rgba(0, 0, 0, 0) 100%) 1;
  border-width: 1px 0 1px 0;
  color: var(--main-color);
  padding: 1rem 3rem;
  font-weight: 700;
  font-size: 1.5rem;
  transition: background-size 0.2s ease-in-out;
}

.uiverse-start-button:hover {
  background-size: cover, 10px 10px, 10px 10px;
}
.uiverse-start-button:active {
  filter: hue-rotate(250deg);
}
```

---

## 7. Public

### `public/robots.txt`

```
User-agent: *
Disallow: /
```

### `public/icons.svg`

(SVG sprite with Bluesky, Discord, Documentation, GitHub, Social, X icons — content utility, not loaded by the current build)

### `public/favicon.webp`

(Binary image)

---

## 8. Astro Generated

### `.astro/types.d.ts`

```ts
/// <reference types="astro/client" />
/// <reference path="content.d.ts" />
```

### `.astro/content.d.ts`

```ts
declare module 'astro:content' {
	export interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof DataEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<DataEntryMap[C]>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;

	export type ReferenceDataEntry<
		C extends CollectionKey,
		E extends keyof DataEntryMap[C] = string,
	> = {
		collection: C;
		id: E;
	};

	export type ReferenceLiveEntry<C extends keyof LiveContentConfig['collections']> = {
		collection: C;
		id: string;
	};

	export function getCollection<C extends keyof DataEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof DataEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getLiveCollection<C extends keyof LiveContentConfig['collections']>(
		collection: C,
		filter?: LiveLoaderCollectionFilterType<C>,
	): Promise<
		import('astro').LiveDataCollectionResult<LiveLoaderDataType<C>, LiveLoaderErrorType<C>>
	>;

	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		entry: ReferenceDataEntry<C, E>,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? string extends keyof DataEntryMap[C]
			? Promise<DataEntryMap[C][E]> | undefined
			: Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getLiveEntry<C extends keyof LiveContentConfig['collections']>(
		collection: C,
		filter: string | LiveLoaderEntryFilterType<C>,
	): Promise<import('astro').LiveDataEntryResult<LiveLoaderDataType<C>, LiveLoaderErrorType<C>>>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof DataEntryMap>(
		entries: ReferenceDataEntry<C, keyof DataEntryMap[C]>[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof DataEntryMap>(
		entry: DataEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<
		C extends
			| keyof DataEntryMap
			// Allow generic `string` to avoid excessive type errors in the config
			// if `dev` is not running to update as you edit.
			// Invalid collection names will be caught at build time.
			| (string & {}),
	>(
		collection: C,
	): import('astro/zod').ZodPipe<
		import('astro/zod').ZodString,
		import('astro/zod').ZodTransform<
			C extends keyof DataEntryMap
				? {
						collection: C;
						id: string;
					}
				: never,
			string
		>
	>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof DataEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;
	type ExtractLoaderConfig<T> = T extends { loader: infer L } ? L : never;
	type InferLoaderSchema<
		C extends keyof DataEntryMap,
		L = ExtractLoaderConfig<ContentConfig['collections'][C]>,
	> = L extends { schema: import('astro/zod').ZodSchema }
		? import('astro/zod').infer<L['schema']>
		: any;

	type DataEntryMap = {
		
	};

	type ExtractLoaderTypes<T> = T extends import('astro/loaders').LiveLoader<
		infer TData,
		infer TEntryFilter,
		infer TCollectionFilter,
		infer TError
	>
		? { data: TData; entryFilter: TEntryFilter; collectionFilter: TCollectionFilter; error: TError }
		: { data: never; entryFilter: never; collectionFilter: never; error: never };
	type ExtractEntryFilterType<T> = ExtractLoaderTypes<T>['entryFilter'];
	type ExtractCollectionFilterType<T> = ExtractLoaderTypes<T>['collectionFilter'];
	type ExtractErrorType<T> = ExtractLoaderTypes<T>['error'];
	type ExtractDataType<T> = ExtractLoaderTypes<T>['data'];

	type LiveLoaderDataType<C extends keyof LiveContentConfig['collections']> =
		LiveContentConfig['collections'][C]['schema'] extends undefined
			? ExtractDataType<LiveContentConfig['collections'][C]['loader']>
			: import('astro/zod').infer<
					Exclude<LiveContentConfig['collections'][C]['schema'], undefined>
				>;
	type LiveLoaderEntryFilterType<C extends keyof LiveContentConfig['collections']> =
		ExtractEntryFilterType<LiveContentConfig['collections'][C]['loader']>;
	type LiveLoaderCollectionFilterType<C extends keyof LiveContentConfig['collections']> =
		ExtractCollectionFilterType<LiveContentConfig['collections'][C]['loader']>;
	type LiveLoaderErrorType<C extends keyof LiveContentConfig['collections']> = ExtractErrorType<
		LiveContentConfig['collections'][C]['loader']
	>;

	export type ContentConfig = never;
	export type LiveContentConfig = never;
}
```

### `.astro/settings.json`

```json
{
	"_variables": {
		"lastUpdateCheck": 1779965992275
	}
}
```

---

## Asset Summary (Binary — not inlined)

| Path | Type |
|---|---|
| `src/assets/disha_logo.webp` | Logo |
| `src/assets/events_background.webp` | Background |
| `src/assets/events_background_q60.webp` | Background (low quality) |
| `src/assets/kalyani_background_2.webp` | Hero background |
| `src/assets/kalyaniFORweb.webp` | Kalyani mascot |
| `src/assets/DishaTeam/Abhishek_B.webp` | Team photo |
| `src/assets/DishaTeam/Anooj_M_A.webp` | Team photo |
| `src/assets/DishaTeam/HASIL_ALI_P_T.webp` | Team photo |
| `src/assets/DishaTeam/Helize_P_Mathew_coordinator.webp` | Team photo |
| `src/assets/DishaTeam/Mariam_Jo_Palakkadan_Convenor.webp` | Team photo |
| `src/assets/DishaTeam/Nandanlal.webp` | Team photo |
| `src/assets/DishaTeam/Sarangi.webp` | Team photo |
| `src/assets/fonts/` | 5 font families (Bohme, Myriad Pro, Graffiti Youth, Marquette, aAnotherTag) — 20 font files |
| `public/favicon.webp` | Favicon |
| `public/icons.svg` | SVG icons sprite |

---

*End of codebase — 37 source files compiled (excludes `node_modules/`, `.git/`, `dist/`, `package-lock.json`, and binary assets).*
