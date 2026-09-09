import { site } from "./data/site";
import { services } from "./data/servicesData";
import { work } from "./data/workData";
export default function sitemap() {
  // Builds are not content updates. Omit lastModified until editorial dates are maintained.
  return [
    "/",
    "/full-stack-developer-portfolio",
    ...services.map((s) => `/${s.slug}`),
    ...work.map((p) => `/work/${p.slug}`),
  ].map((path) => ({ url: new URL(path, site.url).href }));
}
