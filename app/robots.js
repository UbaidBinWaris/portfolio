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
        allow: ['/$', '/sitemap.xml', '/robots.txt'],  // Allow homepage, sitemap, and robots.txt
        disallow: [
          '/api/',
          '/admin/',
          '/*?*',  // Block all URLs with query parameters
          '/*.json',
          '/*.mp4',
          '/_next/',
          '/humans.txt',  // Block specific txt files
          '/*.docx',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/$', '/sitemap.xml', '/robots.txt'],
        disallow: [
          '/api/',
          '/admin/',
          '/*?*',
          '/*.json',
          '/*.mp4',
          '/_next/',
          '/humans.txt',
          '/*.docx',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/$', '/sitemap.xml', '/robots.txt'],
        disallow: [
          '/api/',
          '/admin/',
          '/*?*',
          '/*.json',
          '/*.mp4',
          '/_next/',
          '/humans.txt',
          '/*.docx',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
