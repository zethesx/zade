# Zade Studios

Zade Studios is a single-page React + TypeScript portfolio for a fictional digital studio. The public experience lives at `/`; project links intentionally point to safe external placeholders until real destinations are ready.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run typecheck
npm run build
```

## Replace content

- Project information, URLs, categories, services and preview paths: `src/data/projects.ts`
- Email, navigation, availability and social links: `src/data/site.ts`
- Project preview artwork: replace the SVG files in `public/media/` and keep the paths in `src/data/projects.ts` aligned.
- Contact video: replace `public/media/lumen.mp4`. The page uses it as muted, looping, inline decorative media and falls back to `public/media/lumen-poster.svg` plus a cobalt field when unavailable or when reduced motion is requested.
- Social preview and favicon: `public/og-zade.svg` and `public/favicon.svg`.

## Project shape

`src/App.tsx` owns the one-page composition. `src/components/` contains the logo, icon, copy-email interaction and project link surface. `src/styles/tokens.css` holds the named color, type, spacing, motion and shape tokens; `src/styles/global.css` contains responsive layout and interaction styling.

The `contracts/` folder records the finite responsive layout matrix, media crop/fallback plan, motion intent and aesthetic authority used for this build. It is documentation for maintainers, not a public route.

## Asset notes

The six project previews are authored local SVG compositions rather than stock photos or fake browser chrome. They are deliberately distinct in ratio, color, type treatment and visual grammar so the portfolio can be swapped to real case-study imagery without restructuring the page.

The original `lumen.mp4` was found at `C:\Users\user\Desktop\lumen.mp4` and copied into this project's `public/media/` directory. Runtime never references the Desktop source.

## Deployment

The project is configured for Cloudflare Workers Static Assets through `wrangler.jsonc`.

```bash
npm ci
npm run build
npm run deploy
```

For the Git-connected production workflow, Workers Builds should use:

- Repository: `zethesx/zade`
- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Root directory: `/`

The `dist/` directory is generated locally and is intentionally ignored by Git. No custom domain is configured by this project. The canonical URL in `index.html` is a clearly replaceable placeholder for `https://zadestudios.com/`.
