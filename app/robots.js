/**
 * ROBOTS.TXT CRAWL MANAGEMENT
 * 
 * This file controls which paths search engine bots can and cannot crawl.
 * 
 * CRAWL POLICY:
 * ✅ ALLOW: Only the exact homepage (/$)
 * ❌ DISALLOW: Everything else including:
 *    - API routes (/api/*)
 *    - URLs with query parameters (/*?*)
 *    - File types (.xml, .json, .txt, .mp4)
 *    - Next.js internals (/_next/*)
 */

export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://uabidbinwaris.dev';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/$',  // Only allow exact homepage
        disallow: [
          '/api/',
          '/admin/',
          '/*?*',  // Block all URLs with query parameters
          '/*.json',
          '/*.xml',
          '/*.txt',
          '/*.mp4',
          '/_next/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/$',
        disallow: [
          '/api/',
          '/admin/',
          '/*?*',
          '/*.json',
          '/*.xml',
          '/*.txt',
          '/*.mp4',
          '/_next/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/$',
        disallow: [
          '/api/',
          '/admin/',
          '/*?*',
          '/*.json',
          '/*.xml',
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
