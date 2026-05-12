/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev",
  generateRobotsTxt: true,
  // Disable index sitemap generation for single-page portfolio
  // This prevents Google from looking for sitemap-0.xml which doesn't exist
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 1,
  exclude: ["/api/*", "/admin/*", "/robots.txt", "/sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/hero-background.mp4"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/hero-background.mp4"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/hero-background.mp4"],
      },
      {
        userAgent: "msnbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/hero-background.mp4"],
      },
      // AI Crawlers — allowed for AI answer engine citations (AEO)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    additionalSitemaps: [],
  },
  transform: async (_config, path) => ({
    loc: path,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
    lastmod: new Date().toISOString(),
  }),
};
