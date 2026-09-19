# Kazakhstan AI Research Portfolio

Bilingual presentation site for two independent research initiatives:

- [Central Asia GeoAI](https://github.com/KazakhstanAi/central-asia-geoai) — an extensible geospatial intelligence platform whose first research module investigates InSAR anomaly screening for tailings facilities;
- [Kazakh–Russian Speech Intelligence](https://github.com/KazakhstanAi/kazakh-russian-speech-intelligence) — code-switching ASR and robust synthetic-speech detection.

The site presents research questions, first milestones, evaluation principles, limitations, and links to the technical repositories. It does not claim that either research system is already operational.

## Stack

- Astro 7 and TypeScript;
- static HTML output;
- framework-free client JavaScript;
- custom responsive CSS and inline SVG visualisations;
- English at `/` and Russian at `/ru`.

## Development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Quality checks and production build:

```bash
npm run check
npm run build
npm run preview
```

The configured canonical origin is `https://research.kazakhstan.ai`. Change `site` in `astro.config.mjs` before deployment if another production origin is selected.

## Structure

```text
public/                 Static metadata assets
src/components/         Page and data-visualisation components
src/data/content.ts     English and Russian copy
src/layouts/            Document metadata and shared layout
src/pages/              Localised routes
src/styles/             Design system and responsive styles
```

## Deployment

`npm run build` generates a static site in `dist/`. It can be deployed to GitHub Pages, Cloudflare Pages, Vercel, Netlify, or any static host. No deployment workflow is enabled until the production host and domain are chosen.

## License

Code and original visual assets are available under the [MIT License](LICENSE). Project names, research claims, and third-party materials may have separate terms.
