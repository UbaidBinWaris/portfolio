# Portfolio service pages

The homepage remains the primary portfolio experience. Six services use the shared `app/[slug]/page.js` route, backed by `app/data/servicesData.js`. Edit that data to update homepage cards, full pages, FAQs, service metadata, related links, social images and discovery files together.

## Routes

- `/ai-agent-development`
- `/voice-ai-developer`
- `/ai-automation-n8n`
- `/backend-architecture`
- `/infrastructure-devops`
- `/hire-nextjs-developer-pakistan`
- `/full-stack-developer-portfolio`
- `/work/[slug]`, generated from `app/data/workData.js`

The old `/services/voice-ai-developer` and `/services/ai-automation-n8n` paths permanently redirect to the new root paths. Unknown services return 404.

## Identity and crawl controls

`app/data/site.js` defines the public identity and canonical origin. It deliberately does not trust deployment environment variables: an old `NEXT_PUBLIC_DOMAIN_URL` must never make a preview or production build advertise the wrong domain.

`app/robots.js` and `app/sitemap.js` are the only owners of their public URLs. Do not add copies under `public/` or reintroduce `next-sitemap` generation. JavaScript, CSS and images remain crawlable. Sitemap dates are omitted until real editorial dates are maintained.

`app/llms.txt/route.js` shares the service/project data. It is supplementary context, not a ranking guarantee. Structured data describes the person, website and actual page content. FAQ answers are present in HTML and usable without JavaScript.

Project repositories are private or client-owned. Public walkthroughs do not expose source code or client identities. Publish numeric results only after confirming an attributable measurement and permission to share it.

## Verification

```sh
npm run lint
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
npm run verify:seo -- http://127.0.0.1:3100
```

The SEO verification checks all canonical pages, metadata, duplicate titles/IDs, structured data, links and anchor targets, redirects, social images, manifest icons, crawl files, query attribution and 404 behavior. It does not send emails or submit URLs to search engines.

## Production rollout

1. Deploy the reviewed build to the existing Vercel project. Local edits do not change the old live deployment.
2. Set the Vercel domain environment value to `https://ubaidbinwaris.com` as a housekeeping measure, and confirm the correct custom domain is assigned.
3. Verify the canonical domain, robots and sitemap against production. Each sitemap page must return 200; old service paths must return 308.
4. Submit the canonical sitemap through Google Search Console and Bing Webmaster Tools. Check indexing reports and Core Web Vitals there; code checks cannot establish actual rankings or field performance.
5. `npm run indexnow` previews the live sitemap URLs. Only `npm run indexnow -- --submit` sends them, after checking the key and page responses. Builds never submit.

The `.dev` domain previously advertised by production returned a lander during the audit. Do not attempt to configure that domain unless you control it. The canonical source no longer references it.

Analytics run on Vercel production only to avoid recording local/preview verification traffic. Confirm the existing GA4 and Clarity dashboards after release. Campaign query parameters are retained.
