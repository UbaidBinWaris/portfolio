/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN_URL || "https://ubaidbinwaris.com",
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
        allow: ["/", "/ubaid/"],
        disallow: ["/api/", "/admin/", "/hero-background.mp4"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/ubaid/"],
        disallow: ["/api/", "/admin/", "/hero-background.mp4"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/ubaid/"],
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
