# Sifat Bhatia

Source for [sifat.tech](https://sifat.tech), Sifat Bhatia’s design-engineering and creative-technology portfolio.

## Development

Use Node.js 20.9 or newer and npm. Install the locked dependencies:

```bash
npm ci
npm run dev -- --webpack --hostname 127.0.0.1 --port 3030
```

Open `http://127.0.0.1:3030`. The development server sends uncached responses. The commands above select webpack explicitly; `npm run dev` without that flag uses the Next.js default bundler.

```bash
npm run build -- --webpack
npm run start -- --hostname 127.0.0.1 --port 3030
npm run lint
```

`build` produces the production application. `start` requires a completed build. Do not run development and production servers on the same port.

## Structure

- `src/app`: App Router pages, route metadata, sitemap, robots, and API handlers.
- `src/components`: Navigation, hero carousel, selected work, services, journal entries, contact CTA, footer, motion and preview components.
- `src/lib/projects.ts`: Canonical project order, case-study content, engagement dates, image paths and destinations. The hero carousel, selected work, project index and adjacent-project navigation share this order.
- `src/lib/profile.ts`: Résumé-sourced experience, capabilities and education for the About page. The L’Affaire Musicale / Wicked Paradise contract ends in October 2026.
- `public/assets`: Wordmarks, project previews and case-study imagery.
- `public/fonts`: Self-hosted Siftion UI (400, 500, 600, 700), its font license, and the snapshot’s retained text/icon fonts.
- `src/app/globals.css`: Reconstructed portfolio layout and interactions.
- `src/app/siftion-tokens.css`: Siftion UI font faces and light/dark tokens.
- `src/app/siftion-controls.css`: Button states from the Siftion component library.
- `src/app/siftion-portfolio.css`: Portfolio aliases, fixed hero/CTA palettes, theme control and Contact styling.

Public routes include `/`, `/about`, `/contact`, `/projects`, `/projects/[slug]`, `/services`, `/journal`, `/now`, and `/lumiere`. Individual project routes are generated from `src/lib/projects.ts`.

The application uses Next.js 16, React 19, TypeScript, Tailwind CSS 4, GSAP, Framer Motion, Lenis and `next-view-transitions`. Fonts are served locally, so builds do not require Google Fonts downloads.

## Journal

`/api/journal` provides read and write handlers. Optional server-side environment variables:

- `DATABASE_URL`: Neon/PostgreSQL connection string for live journal data.
- `JOURNAL_WRITE_TOKEN`: Bearer token required for POST, PATCH and DELETE requests. Writes require both variables; otherwise they return 503.

Do not commit either value. Without a database, or after a failed query with no verified fallback, reads return an explicit unavailable response (503). `src/app/api/journal/pulses.json` remains an empty array, not a source of invented entries. The Journal distinguishes genuine empty data from errors and offers retry. The legacy fallback prose is archived outside the application pending provenance review; it is not published as research. A working GET response does not establish database connectivity, write readiness, or a scheduled publishing job.

## Source and design

The portfolio layout and content were reconstructed from a saved copy of sifat.tech. The source is editable Next.js code, not the original live TSX recovered exactly. Siftion UI supplies the typography, theme tokens, and controls. The hero stays dark and the contact CTA stays light in both themes. Theme choice persists in local storage; directional controls use SVG.

Machine-specific paths, recovery chronology, and source archives are kept outside the public repository. Local working instructions are ignored by Git.
