# Vais Research

Personal, bilingual research portfolio. An editorial layout combines large typography, original conceptual illustrations and annotated scientific sources. Three ML research directions explore generalization to new sites, modalities and people. VAIS Voice and Enterprise remain accessible as applied research projects.

- [Central Asia GeoAI](https://github.com/KazakhstanAi/central-asia-geoai): tailings monitoring, with a proposed extension to cross-site multimodal spatiotemporal learning and uncertainty. Initial 3–5-site feasibility pilot remains planned.
- [Scientific Multimodal AI](https://github.com/KazakhstanAi/multimodal): grounded paper–slide–speech assessment. Current implementation is a prepared-modality TF-IDF/ridge baseline with a synthetic demonstration.
- [Human–AI Decision Systems](https://github.com/KazakhstanAi/Human-AI-RL): adaptive assistance conditioned on interaction history. Current implementation is a synthetic simulator with LinUCB, not a validated participant study or offline RL system.
- [VAIS Voice](https://github.com/KazakhstanAi/vais-voice): KZ/RU synthetic-speech research with a benchmark and detector web/gateway prototype. Detection requires a healthy inference service; generation in real mode remains unavailable.
- VAIS Enterprise: KZ/RU RAG and agent evaluation with a synthetic demo protocol.

GeoAI has a dedicated research page with six annotated primary sources, three comparable systems and a conditional pilot plan. VAIS Voice has a bilingual page with six relevant sources, an audio-processing pipeline, detection metrics and a roadmap. The research pages retain their methodology and planned experiments. The voice report mockup is explicitly illustrative; the live Voice application is the source for current benchmark and detector availability. Enterprise has a published synthetic demo protocol.

## Stack and routes

The applied-project section links to Voice and Enterprise applications. All five projects share navigation and bilingual overview pages. Implementation status and publication targets are distinguished from validated results.

Astro 7, TypeScript, static HTML, custom responsive CSS, system fonts. Navigation and content work without client-side JavaScript.

| Page | English | Russian |
| --- | --- | --- |
| Portfolio | `/` | `/ru` |
| GeoAI research | `/projects/geoai` | `/ru/projects/geoai` |
| Scientific Multimodal AI | `/projects/multimodal` | `/ru/projects/multimodal` |
| Human–AI Decision Systems | `/projects/human-ai` | `/ru/projects/human-ai` |
| VAIS Voice | `/projects/voice` | `/ru/projects/voice` |
| VAIS Enterprise | `/enterprise` | `/ru/enterprise` |

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

- `src/components/LandingPage.astro`: three research cards, two applied-project cards and scientific materials.
- `src/data/research-directions.ts`: bilingual research questions, implementation boundaries, evaluation plans and five annotated primary sources for the new directions.
- `src/components/ResearchDirectionPage.astro`, `ResearchDirectionArtwork.astro`: shared research-page structure and original vector illustrations.
- `src/data/projects.ts`, `src/components/ProjectNav.astro`: shared project links and identities on every portfolio page.
- `src/styles/projects.css`: shared orange GeoAI, blue Multimodal, ochre Human–AI, green Voice and purple Enterprise themes.
- `src/components/EnterprisePage.astro`: Enterprise overview, protocol, dataset and reproducibility sections.
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

The production host is the existing Cloudflare Worker `research-portfolio`.
`wrangler.jsonc` records its custom domain and static asset configuration.
With an authenticated Cloudflare session, publish the checked build using:

```sh
npm run check
npm run build
npx wrangler@4.136.3 deploy
```

## License

Original code and assets: [MIT](LICENSE). Linked papers, commercial product names, and third-party materials retain their own rights; papers are linked, not redistributed.
