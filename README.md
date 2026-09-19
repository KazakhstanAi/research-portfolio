# Vais Research

Personal, bilingual research portfolio. A research-lab-inspired editorial layout combines large typography, a featured project, original terrain and speech illustrations, and a curated reading section. It introduces two independent projects without presenting planned research as an operational product.

- [Central Asia GeoAI](https://github.com/KazakhstanAi/central-asia-geoai): a shared geospatial platform, starting with GeoRisk tailings monitoring using InSAR time series and anomaly screening.
- [VAIS Voice](https://github.com/KazakhstanAi/kazakh-russian-speech-intelligence): synthetic speech authenticity for Kazakh–Russian environments. Planned MVP: audio upload → detector → score with quality/calibration information. A protected KZ/RU benchmark validates the detector; it is R&D infrastructure, not a separate product. Historical repository URL retained.

GeoAI has a dedicated research page with six annotated primary sources, three comparable systems and a conditional pilot plan. VAIS Voice has a bilingual page with six relevant sources, an audio-processing pipeline, detection metrics and a roadmap. Both are research-stage projects. The voice report preview is explicitly static: its 0.87 score is illustrative, its model name is proposed and its upload/analysis controls are disabled. No detector or inference service is claimed to be available.

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
- `src/components/VoiceProject.astro`: bilingual detector concept, static report mockup, evaluation protocol and limitations.
- `src/data/voice-references.ts`: six annotated detection/generalization, regional-speech and quality-control sources. Agent-testing literature is outside the current scope.
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
