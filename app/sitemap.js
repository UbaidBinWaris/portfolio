/**
 * SITEMAP CRAWL MANAGEMENT
 * 
 * This sitemap controls which pages search engines should crawl and index.
 * 
 * ✅ ALLOWED TO CRAWL:
 * - Homepage (/) - Priority 1.0, Weekly updates
 * 
 * ❌ NOT ALLOWED TO CRAWL (blocked in robots.js and middleware.js):
 * - /api/* - All API routes
 * - /admin/* - Admin routes
 * - /*?* - Any URL with query parameters
 * - /*.json, /*.txt - File types
 * - /_next/* - Next.js internal files
 * 
 * 📄 READABLE BUT NOT INDEXED:
 * - /sitemap.xml - Google must READ this file, but won't index it as a page
 * - /robots.txt - Same as above
 * 
 * For a single-page application, only the homepage should be in the sitemap.
 * Anchor links (#home, #experience, etc.) are NOT separate pages.
 */

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://ubaidbinwaris.com';
  const currentDate = new Date();

  const ubaidImages = [
    '20260503_172113.jpg',
    '20260504_163046.jpg',
    '20260504_163922.jpg',
    '20260504_164453.jpg',
    '20260504_164618.jpg',
    '20260505_140106.jpg',
    '20260505_184302.jpg',
    '20260505_184329.jpg',
    '20260507_153851.jpg',
  ].map((img) => `${siteUrl}/ubaid/${img}`);
  
  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: ubaidImages,
    },
    ...ubaidImages.map((imgUrl) => ({
      url: imgUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
