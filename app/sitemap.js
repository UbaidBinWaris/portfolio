export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://uabidbinwaris.dev';
  const currentDate = new Date();
  
  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Add more pages as you create them
    // {
    //   url: `${siteUrl}/blog`,
    //   lastModified: currentDate,
    //   changeFrequency: 'daily',
    //   priority: 0.8,
    // },
    // Note: Anchor links (#home, #experience, etc.) are not included
    // as they are not separate pages and cannot be indexed individually
    // All sections are part of the main homepage
  ];
}
