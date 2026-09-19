# Vais Research

Personal, bilingual research portfolio. A quiet editorial layout introduces two independent projects without presenting planned research as an operational product.

- [Central Asia GeoAI](https://github.com/KazakhstanAi/central-asia-geoai): a shared geospatial platform, starting with GeoRisk tailings monitoring using InSAR time series and anomaly screening.
- [Kazakh–Russian Speech Intelligence](https://github.com/KazakhstanAi/kazakh-russian-speech-intelligence): code-switching ASR and voice anti-spoofing, currently at concept stage.

GeoAI has a dedicated research page with six annotated primary sources, three comparable systems, a conditional pilot plan, evaluation criteria, and limitations. Evidence for a method is distinguished from evidence for our future implementation. Speech does not have a dedicated page yet.

## Stack and routes

Astro 7, TypeScript, static HTML, custom responsive CSS, system fonts. Navigation and content work without client-side JavaScript.

| Page | English | Russian |
| --- | --- | --- |
| Portfolio | `/` | `/ru` |
| GeoAI research | `/projects/geoai` | `/ru/projects/geoai` |

## Development

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
```

```sh
npm run check
npm run build
npm run preview
```

## Content

- `src/components/LandingPage.astro`: bilingual introduction and project summaries.
- `src/components/GeoProject.astro`: bilingual research proposal and evaluation plan.
- `src/data/references.ts`: annotated papers, documentation, and comparable systems. Keep publication types and limitations explicit when updating sources.
- `src/layouts/BaseLayout.astro`: metadata, navigation, language switching, footer.
- `src/styles/global.css`: shared editorial and responsive styles.

Research statements describe proposed work, not validated predictions. An InSAR anomaly must not be presented as a collapse probability or failure date. Commercial examples illustrate adoption, not independently verified accuracy.

## Deployment

`npm run build` writes the static site to `dist/`. No host or domain is selected. Set `SITE_URL` to the actual production origin when building to enable canonical and alternate-language metadata; otherwise those links are omitted. Do not use a speculative domain.

The existing GitHub organization and repository URLs are unchanged by the Vais Research branding. CI checks types and builds the site; it does not deploy it.

## License

Original code and assets: [MIT](LICENSE). Linked papers, commercial product names, and third-party materials retain their own rights; papers are linked, not redistributed.
