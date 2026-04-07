# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Milespace Website (`artifacts/milespace`)
- **Purpose**: Full marketing and sales website for Milespace digital agency (milespace.co.ke)
- **Stack**: React + Vite + TypeScript + Tailwind CSS + Framer Motion + Wouter
- **Preview path**: `/` (root)
- **Vercel compatible**: Pure static frontend, no backend required

**Pages:**
- `/` — Homepage with hero, services overview, recent work (iframe previews), stats, CTA
- `/about` — About Milespace, brand story, values
- `/services` — Detailed services breakdown (Web Dev, App Dev, Custom Software, Digital Marketing, UI/UX)
- `/pricing` — Pricing page with category dropdown + KES/USD toggle; all packages with 10% off badge on website packages
- `/pricing/:category/:slug` — Individual shareable package pages with share button
- `/portfolio` — Portfolio/work page with filterable project cards
- `/contact` — Contact form + WhatsApp link (all forms go to +254720176247)

**Key files:**
- `src/data/projects.ts` — Portfolio projects data (edit this to add real projects)
- `src/data/pricing.ts` — All pricing packages data
- `src/lib/whatsapp.ts` — WhatsApp link helpers (+254720176247)
- `src/components/ProjectCard.tsx` — Iframe-preview project cards
- `src/components/layout/Navbar.tsx` — Sticky navbar with logo
- `public/logo.png` — Milespace logo

**To update portfolio projects:**
Edit `src/data/projects.ts` — set `featured: true` on projects to show on homepage (max 3), add real `url` for iframe preview.
