/**
 * ROBOTS.TXT CRAWL MANAGEMENT
 * 
 * This file controls which paths search engine bots can and cannot crawl.
 * 
 * CRAWL POLICY:
 * ✅ ALLOW: Homepage (/$) and sitemap.xml (must be readable)
 * ❌ DISALLOW: Everything else including:
 *    - API routes (/api/*)
 *    - URLs with query parameters (/*?*)
 *    - File types (.json, .txt, .mp4) - but NOT .xml
 *    - Next.js internals (/_next/*)
 */

export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://uabidbinwaris.dev';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/$', '/sitemap.xml'],  // Allow homepage and sitemap
        disallow: [
          '/api/',
          '/admin/',
          '/*?*',  // Block all URLs with query parameters
          '/*.json',
          '/*.txt',
          '/*.mp4',
          '/_next/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/$', '/sitemap.xml'],
        disallow: [
          '/api/',
          '/admin/',
          '/*?*',
          '/*.json',
          '/*.txt',
          '/*.mp4',
          '/_next/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/$', '/sitemap.xml'],
        disallow: [
          '/api/',
          '/admin/',
          '/*?*',
          '/*.json',
          '/*.txt',
          '/*.mp4',
          '/_next/',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
