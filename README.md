# Ubaid Bin Waris — Portfolio

AI systems and full-stack engineering portfolio built with Next.js 16 and React 19.

**Website:** https://ubaidbinwaris.com

The homepage presents the full portfolio. Dedicated service pages and private-project architecture walkthroughs provide deeper context while sharing the same dark navy and teal design.

## Development

```sh
npm install
npm run dev
```

Configure email and analytics credentials locally as required. Never commit secrets. Public identity and canonical URLs are maintained in `app/data/site.js`.

## Content

- `app/data/servicesData.js`: six services, headings, descriptions, deliverables, workflows and service-specific FAQs.
- `app/data/workData.js`: private-project summaries and architecture walkthroughs.
- `app/data/site.js`: name, role, canonical domain, contact and profile links.
- `app/data/experienceData.js`: professional experience.
- `app/data/faqData.js`: homepage FAQs.

Services are rendered at `/[slug]`; walkthroughs are rendered at `/work/[slug]`. The old nested service URLs redirect permanently to the corresponding root slugs.

## Checks

```sh
npm run lint
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
npm run verify:seo -- http://127.0.0.1:3100
```

The build prerenders all content pages. Browser verification should cover desktop/mobile layout, keyboard navigation, FAQ expansion and cross-page anchor links.

## SEO and discovery

App Router owns robots and sitemap generation. Do not create duplicate files in `public/`. Metadata and JSON-LD use the canonical `.com` domain from the shared identity file. Social images are generated per service, and `llms.txt` is generated from the same public content.

IndexNow is an explicit post-deployment action:

```sh
npm run indexnow
# Only after checking the preview and live deployment:
npm run indexnow -- --submit
```

Ordinary builds never submit to search engines. A successful submission is not a guarantee of indexing or rankings.

See [service-page maintenance and rollout](docs/seo-and-service-pages.md) for the route inventory, validation scope and production checklist.

## Private work

Project code is private or client-owned. Walkthroughs explain architecture without exposing source code or confidential client information. Numeric results should only be published when measurements are verified and sharing is permitted.
