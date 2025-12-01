export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://uabidbinwaris.dev';
  
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
