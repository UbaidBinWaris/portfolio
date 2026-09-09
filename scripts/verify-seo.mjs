import assert from "node:assert/strict";

// Run against a started production build. Never submits forms or indexing requests.
const base = process.argv[2] || "http://127.0.0.1:3100";
const origin = "https://ubaidbinwaris.com";
const get = (path, options) => fetch(new URL(path, base), options);
const sitemap = await get("/sitemap.xml");
assert.equal(sitemap.status, 200, "sitemap status");
assert.match(sitemap.headers.get("content-type"), /xml/);
const sitemapText = await sitemap.text();
const urls = [...sitemapText.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => new URL(match[1]),
);
assert.equal(
  urls.length,
  13,
  "home + portfolio + six services + five walkthroughs",
);
assert.equal(
  new Set(urls.map((url) => url.href)).size,
  urls.length,
  "unique sitemap URLs",
);
assert.doesNotMatch(sitemapText, /<lastmod>/, "no synthetic update dates");
const internalLinks = new Set();
for (const url of urls) {
  assert.equal(url.origin, origin, "canonical domain");
  const response = await get(url.pathname, { redirect: "manual" });
  assert.equal(response.status, 200, url.pathname);
  const html = await response.text();
  assert.equal(
    (html.match(/<h1\b/g) || []).length,
    1,
    `${url.pathname}: one H1`,
  );
  assert.equal(
    (html.match(/<main\b/g) || []).length,
    1,
    `${url.pathname}: one main`,
  );
  assert.equal(
    (html.match(/<footer\b/g) || []).length,
    1,
    `${url.pathname}: one footer`,
  );
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title, `${url.pathname}: title`);
  assert.equal(
    (title.match(/Ubaid Bin Waris/g) || []).length,
    1,
    `${url.pathname}: brand appears once`,
  );
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(new URL(canonical).href, url.href, `${url.pathname}: canonical`);
  assert.ok(
    html.match(/<meta name="description" content="[^"]+"/),
    "description",
  );
  assert.doesNotMatch(
    html,
    /uabidbinwaris\.dev|99\.99%|100k\+|5,000\+|4\.2x/,
    "no stale domain or unverified metrics",
  );
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${url.pathname}: unique IDs`);
  const schemas = [
    ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs),
  ].flatMap((match) => {
    const data = JSON.parse(match[1]);
    return data["@graph"] || [data];
  });
  assert.ok(
    schemas.some(
      (item) =>
        item["@type"] === "Person" && item["@id"] === `${origin}/#person`,
    ),
  );
  assert.ok(
    !schemas.some((item) => item["@type"] === "ProfessionalService"),
    "no invented local storefront",
  );
  for (const link of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = link[1].replaceAll("&amp;", "&");
    if (href.startsWith("/") || href.startsWith("#"))
      internalLinks.add(new URL(href, new URL(url.pathname, base)).href);
  }
  if (schemas.some((item) => item["@type"] === "Service")) {
    const faq = schemas.find((item) => item["@type"] === "FAQPage");
    assert.equal(faq.mainEntity.length, 4, "service-specific FAQs");
    assert.equal(
      (html.match(/<details\b/g) || []).length,
      4,
      "FAQ answers available without JavaScript",
    );
    const ogUrl = html.match(
      /<meta property="og:image" content="([^"]+)"/,
    )?.[1];
    assert.ok(ogUrl, "social image");
    const og = await get(new URL(ogUrl).pathname);
    assert.equal(og.status, 200, "service OG image exists");
    assert.match(og.headers.get("content-type"), /image\/png/);
  }
  console.log(`PASS ${url.pathname}: metadata, landmarks, JSON-LD`);
}
for (const href of internalLinks) {
  const url = new URL(href);
  const response = await fetch(url);
  assert.equal(response.status, 200, `internal link ${href}`);
  if (url.hash) {
    const html = await response.text();
    assert.ok(
      html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
      `anchor ${href}`,
    );
  }
}
const robotsResponse = await get("/robots.txt");
assert.equal(robotsResponse.status, 200);
const robots = await robotsResponse.text();
assert.doesNotMatch(robots, /Disallow: \/_next/);
assert.ok(robots.includes(`${origin}/sitemap.xml`));
const llmsResponse = await get("/llms.txt");
assert.equal(llmsResponse.status, 200);
const llms = await llmsResponse.text();
for (const url of urls.filter(
  (url) =>
    url.pathname !== "/" && url.pathname !== "/full-stack-developer-portfolio",
))
  assert.ok(llms.includes(url.href));
const manifest = await (await get("/manifest.json")).json();
for (const icon of manifest.icons) {
  const image = await get(icon.src);
  assert.equal(image.status, 200, "manifest icon exists");
  assert.match(image.headers.get("content-type"), /image\/png/);
}
for (const [from, to] of [
  ["/services/voice-ai-developer", "/voice-ai-developer"],
  ["/services/ai-automation-n8n", "/ai-automation-n8n"],
  ["/voice-ai-systems", "/voice-ai-developer"],
  ["/ai-workflow-automation", "/ai-automation-n8n"],
]) {
  const response = await get(from, { redirect: "manual" });
  assert.equal(response.status, 308, "permanent redirect");
  assert.equal(new URL(response.headers.get("location"), base).pathname, to);
}
const missing = await get("/not-a-real-service");
assert.equal(missing.status, 404);
assert.match(await missing.text(), /noindex/);
const tagged = await get("/?utm_source=verification&utm_medium=referral", {
  redirect: "manual",
});
assert.equal(tagged.status, 200, "preserve campaign parameters");
assert.equal((await get("/34010ce9592af026867e6c742c168f94.txt")).status, 200);
console.log(
  `PASS ${urls.length} pages, ${internalLinks.size} internal links, robots, sitemap, llms, icons, OG images, redirects, attribution and 404 behavior`,
);
