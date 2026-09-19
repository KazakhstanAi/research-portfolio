# Vais Research

Personal, bilingual research portfolio. A research-lab-inspired editorial layout combines large typography, a featured project, original terrain and speech illustrations, and a curated reading section. It introduces two independent projects without presenting planned research as an operational product.

- [Central Asia GeoAI](https://github.com/KazakhstanAi/central-asia-geoai): a shared geospatial platform, starting with GeoRisk tailings monitoring using InSAR time series and anomaly screening.
- [VAIS Voice](https://github.com/KazakhstanAi/kazakh-russian-speech-intelligence): a planned evaluation, security and observability platform for Kazakh–Russian voice AI. VAIS VoiceBench, VoiceGuard, Speech Intelligence and Continuous Evaluation; first MVP target: 100 authorised sandbox test calls. Historical repository URL retained.

GeoAI has a dedicated research page with six annotated primary sources, three comparable systems and a conditional pilot plan. VAIS Voice has a bilingual project page with seven annotated papers, module boundaries, MVP metrics, governance and a roadmap. Evidence for methods is distinguished from evidence for our future implementations. Both are research-stage projects; no operational platform is claimed.

## Stack and routes

Astro 7, TypeScript, static HTML, custom responsive CSS, system fonts. Navigation and content work without client-side JavaScript.

| Page | English | Russian |
| --- | --- | --- |
| Portfolio | `/` | `/ru` |
| GeoAI research | `/projects/geoai` | `/ru/projects/geoai` |
| VAIS Voice | `/projects/voice` | `/ru/projects/voice` |

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
- `src/components/VoiceProject.astro`: bilingual VAIS Voice platform concept, MVP and limitations.
- `src/data/voice-references.ts`: seven annotated voice-evaluation, local-speech and anti-spoofing sources; distinguishes academic VoiceBench from our independent VAIS VoiceBench module.
- `src/components/ResearchArtwork.astro`: original deterministic SVG illustrations, not real satellite measurements or recorded audio. No external assets or animation dependencies.
- `src/data/references.ts`: annotated papers, documentation, and comparable systems. Keep publication types and limitations explicit when updating sources.
- `src/layouts/BaseLayout.astro`: metadata, navigation, language switching, footer.
- `src/styles/global.css`: shared editorial and responsive styles.

Research statements describe proposed work, not validated predictions. An InSAR anomaly must not be presented as a collapse probability or failure date. Commercial examples illustrate adoption, not independently verified accuracy.

Design references: [Anthropic](https://www.anthropic.com/) and [OpenAI Research](https://openai.com/research/). These are visual and editorial references only; Vais Research is independent and uses its own branding, text, and artwork.

## Deployment

`npm run build` writes the static site to `dist/`. The production origin is `https://vaislabs.com`, used for canonical and alternate-language metadata. The Astro configuration defaults to this origin; a build environment can explicitly set `SITE_URL=https://vaislabs.com` or override it for another deployment. This setting does not configure hosting or DNS.

The existing GitHub organization and repository URLs are unchanged by the Vais Research branding. CI checks types and builds the site; it does not deploy it.

## License

Original code and assets: [MIT](LICENSE). Linked papers, commercial product names, and third-party materials retain their own rights; papers are linked, not redistributed.
