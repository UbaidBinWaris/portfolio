import { articleHtml } from "../lib/articleBody";
import { publishedArticles } from "../data/articlesData";
import { site } from "../data/site";

export const dynamic = "force-static";

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// CDATA cannot contain "]]>"; split it if an article ever does.
const cdata = (s) => `<![CDATA[${s.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
const rfc822 = (iso) => new Date(`${iso}T00:00:00Z`).toUTCString();

// RSS 2.0 feed of published articles, with full HTML in content:encoded so
// importers such as dev.to receive the complete post.
export function GET() {
  if (!publishedArticles.length) return new Response("Not found", { status: 404 });
  const items = publishedArticles.map((a) => {
    const url = `${site.url}/articles/${a.slug}`;
    const html = articleHtml(a.body);
    return `    <item>
      <title>${escape(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(a.updated ?? a.published)}</pubDate>
      <description>${escape(a.description)}</description>
${a.tags.map((t) => `      <category>${escape(t)}</category>`).join("\n")}
      <content:encoded>${cdata(html)}</content:encoded>
    </item>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escape(`${site.name}: Engineering Articles`)}</title>
    <link>${site.url}/articles</link>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Articles by ${escape(site.name)} on cloud costs, AI engineering and shipping software.</description>
    <language>en</language>
    <lastBuildDate>${rfc822(publishedArticles[0].updated ?? publishedArticles[0].published)}</lastBuildDate>
${items.join("\n")}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
