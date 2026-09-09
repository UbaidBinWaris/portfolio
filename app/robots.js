import { site } from "./data/site";
export default function robots() {
  // Public CSS, JavaScript and images remain crawlable.
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
