# Project identity and navigation

The portfolio retains its editorial research layout. Applications use the Voice
layout conventions: a 72px header, system sans typography, rounded evidence cards,
clear status labels, primary/secondary actions and a collapsible mobile menu.

| Project | Accent | Research page | Application |
| --- | --- | --- | --- |
| GeoAI | Orange `#a34630` | `/projects/geoai` | Planned; no published subdomain found |
| VAIS Voice | Green `#087e70` | `/projects/voice` | `https://voice.vaislabs.com` |
| VAIS Enterprise | Purple `#7050b5` | `/enterprise` | `https://enterprise.vaislabs.com` |

The research pages also have `/ru` equivalents. Every portfolio page has the three
project links in its project navigation and footer. Each homepage card links to
the local research page; available applications have a separate CTA. Enterprise
appears in the homepage introduction, cards, methodology reading cards, project
navigation, footer and about copy. Enterprise documentation is labelled as project
methodology, not as external peer-reviewed literature.

Both applications link back to the portfolio in their desktop/mobile headers and
footers. Their footers also link to their own research overview and the other two
projects. The GeoAI application remains marked as planned rather than linking to
an unregistered hostname.

## Verification

- Portfolio: Astro check/build, all eight EN/RU routes, internal links and anchors.
- Voice: TypeScript/build and existing 25 frontend tests.
- Enterprise: TypeScript/build, seven sections and mobile menu interaction.
- Browser layout checks at 390, 768, 1024 and 1440px: no page overflow.
- No client-side exceptions observed during the route checks.
