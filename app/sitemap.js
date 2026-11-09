import { site } from "./data/site";
import { services } from "./data/servicesData";
import { work } from "./data/workData";
import { publishedArticles } from "./data/articlesData";
export default function sitemap() {
  // Builds are not content updates. Omit lastModified until editorial dates are maintained.
  const pages = [
    "/",
    "/full-stack-developer-portfolio",
    ...services.map((s) => `/${s.slug}`),
    ...work.map((p) => `/work/${p.slug}`),
  ].map((path) => ({ url: new URL(path, site.url).href }));
  // Articles carry real publish/update dates, so they can report lastModified honestly.
  const articles = publishedArticles.length
    ? [
        { url: new URL("/articles", site.url).href, lastModified: publishedArticles[0].published },
        ...publishedArticles.map((a) => ({
          url: new URL(`/articles/${a.slug}`, site.url).href,
          lastModified: a.updated ?? a.published,
        })),
      ]
    : [];
  return [...pages, ...articles];
}
