export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://uabidbinwaris.dev';
  
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Removed anchor links (#home, #experience, etc.) as they are not separate pages
    // Google cannot index anchor links as individual URLs
    // All sections are part of the main homepage
  ];
}
