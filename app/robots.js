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
        allow: '/',  // Allow all pages by default
        disallow: [
          '/api/',
          '/admin/',
          '/_next/static/',
          '/humans.txt',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/static/',
          '/humans.txt',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/static/',
          '/humans.txt',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
