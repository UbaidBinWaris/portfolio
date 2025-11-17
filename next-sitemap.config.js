/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 1.0,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
};
