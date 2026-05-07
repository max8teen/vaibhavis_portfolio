# Deploy

This project is built with **TanStack Start** (React 19 + Vite 7).

## Vercel

1. Push to GitHub.
2. Import at https://vercel.com/new
3. Vercel uses `vercel.json`:
   - Build: `bun run build`
   - Output: `dist/client`
4. Deploy.

> The included `vercel.json` rewrites all paths to the SPA shell so every
> TanStack route works on refresh. For full SSR on Vercel use the TanStack
> Start Vercel adapter.

## Local

```bash
bun install
bun run dev
bun run build
bun run preview
```

## Structure

- `src/routes/` — pages (Home, Work, Process, About, Commission)
- `src/components/sections/` — reusable sections
- `src/lib/artworks.ts` — artwork catalog
- `src/assets/hero.jpg` — hero image
