# PEPONK Marketing Site

This repository contains the marketing site for PEPONK, built with **Vite**, **React**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** components.

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```
4. Preview the production build locally
   ```bash
   npm run preview
   ```

## Project Structure

- `src/` – Application source code
  - `components/` – Reusable React components
  - `pages/` – Top-level route views
  - `assets/` – Images and static assets used in the UI
- `public/` – Static files served at the site root
- `index.html` – HTML entry point used by Vite

## Deployment

The project builds to the `dist/` directory. Deploy the contents of that directory to any static hosting service (e.g., Vercel, Netlify, Cloudflare Pages, or traditional hosting).

## Required Tools

- Node.js 18+ (recommended to install via [nvm](https://github.com/nvm-sh/nvm))
- npm (comes with Node.js)

## Styling & UI

- Tailwind CSS powers the utility-first styling approach.
- shadcn/ui provides accessible React components configured to use Tailwind tokens.

## Linting

Run ESLint to check for issues:

```bash
npm run lint
```
