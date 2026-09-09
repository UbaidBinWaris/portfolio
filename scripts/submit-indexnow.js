#!/usr/bin/env node
// Run explicitly after deployment; ordinary builds never submit to search engines.
const DOMAIN = "https://ubaidbinwaris.com";
const KEY = "34010ce9592af026867e6c742c168f94";
async function main() {
  const keyResponse = await fetch(`${DOMAIN}/${KEY}.txt`);
  if (!keyResponse.ok || (await keyResponse.text()).trim() !== KEY)
    throw new Error("Publish and verify the IndexNow key file first.");
  const response = await fetch(`${DOMAIN}/sitemap.xml`);
  if (!response.ok) throw new Error(`Sitemap returned ${response.status}`);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  if (!urls.length || urls.some((url) => new URL(url).origin !== DOMAIN))
    throw new Error("Sitemap must contain canonical production URLs only.");
  if (!process.argv.includes("--submit")) {
    console.log("Dry run. Canonical URLs from the live sitemap:", urls);
    console.log("To submit after verification: npm run indexnow -- --submit");
    return;
  }
  for (const url of urls) {
    const page = await fetch(url, { method: "HEAD", redirect: "manual" });
    if (page.status !== 200)
      throw new Error(`Refusing submission: ${url} returned ${page.status}`);
  }
  const result = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: new URL(DOMAIN).host,
      key: KEY,
      keyLocation: `${DOMAIN}/${KEY}.txt`,
      urlList: urls,
    }),
  });
  if (![200, 202].includes(result.status))
    throw new Error(`IndexNow returned ${result.status}`);
  console.log(
    `Submitted ${urls.length} URLs (HTTP ${result.status}); indexing is not guaranteed.`,
  );
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
