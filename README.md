# Muhammad Umais — Portfolio

A responsive, single-page developer portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, and Lucide icons.

## Features

- Responsive desktop, tablet, and mobile navigation and layouts
- Scroll-triggered reveal animations for the About, Skills, and Experience content
- Animated mobile menu open/close transitions
- High-contrast experience timeline text in both themes
- Escape-key support for closing the mobile menu
- Reduced-motion accessibility support
- Reusable components and data-driven skills and experience content
- Semantic page sections and keyboard-visible focus states

## Getting started

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

Create and test a production build:

```bash
npm run build
npm run preview
```

## Customize

Edit `src/data/portfolio.js` to update profile text, skills, experience, and project details. Update profile, skills, and experience content in `src/data/portfolio.js` before publishing.

The page contains exactly four main sections: Home, About, Skills, and Experience. Desktop navigation displays all four links; mobile navigation opens as an overlay, closes after a section is selected, and scrolls to the correct section. The portfolio supports dark and light themes. Experience timeline text uses high-contrast colors in both themes. Scroll animations respect the operating system reduced-motion preference.
