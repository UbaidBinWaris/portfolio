// Comprehensive SEO Configuration for Next.js Portfolio
// This configuration uses next-seo for enhanced SEO capabilities

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev";

export const defaultSEOConfig = {
  titleTemplate: '%s | Ubaid Bin Waris',
  defaultTitle: 'Ubaid Bin Waris | Full Stack Developer Portfolio',
  description: 'Ubaid Bin Waris - Expert Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications. Available for hire.',
  
  canonical: siteUrl,
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Ubaid Bin Waris | Full Stack Developer',
    title: 'Ubaid Bin Waris | Full Stack Developer | React & Next.js',
    description: 'Professional Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications. Available for freelance.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ubaid Bin Waris - Full Stack Developer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    handle: '@ubaidbinwaris',
    site: '@ubaidbinwaris',
    cardType: 'summary_large_image',
  },
  
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'keywords',
      content: [
        // Brand & Name variations
        'Ubaid Bin Waris',
        'ubaidbinwaris',
        'ubaid bin waris',
        'ubaidbin',
        'uabidbinwaris',
        'uabid bin waris',
        'UbaidBinWaris',
        'Ubaid Waris',
        'ubaid developer',
        'ubaid portfolio',
        'uabidbinwaris.dev',
        
        // Core Expertise
        'Full Stack Developer',
        'React Developer',
        'Next.js Developer',
        'Node.js Developer',
        'MERN Stack Developer',
        'JavaScript Developer',
        'TypeScript Developer',
        'Web Developer',
        'Frontend Developer',
        'Backend Developer',
        
        // Services (High Intent)
        'hire full stack developer',
        'hire react developer',
        'hire nextjs developer',
        'professional web developer for hire',
        'freelance full stack developer',
        'remote full stack developer for hire',
        'full stack development services',
        
        // Problem-Solving Keywords
        'website performance optimization',
        'custom web development',
        'web application development',
        'responsive web development',
        'progressive web app development',
        
        // Technology Stack
        'React Expert',
        'Next.js Expert',
        'Node.js Expert',
        'MongoDB Developer',
        'Tailwind CSS Developer',
        
        // Location-Based
        'Pakistan Full Stack Developer',
        'Pakistani Web Developer',
        'Remote Developer Pakistan',
      ].join(', '),
    },
    {
      name: 'author',
      content: 'Ubaid Bin Waris',
    },
    {
      name: 'publisher',
      content: 'Ubaid Bin Waris',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:0',
    },
    {
      name: 'googlebot',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:0',
    },
    {
      name: 'bingbot',
      content: 'index, follow, max-image-preview:large, max-snippet:-1',
    },
    {
      name: 'theme-color',
      content: '#0A1930',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'format-detection',
      content: 'telephone=no, email=no, address=no',
    },
  ],
  
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'canonical',
      href: siteUrl,
    },
    // Social profile verification
    {
      rel: 'me',
      href: 'https://github.com/UbaidBinWaris',
    },
    {
      rel: 'me',
      href: 'https://www.linkedin.com/in/ubaidbinwaris',
    },
    {
      rel: 'me',
      href: 'https://twitter.com/ubaidbinwaris',
    },
    {
      rel: 'me',
      href: 'https://www.upwork.com/freelancers/~01d2f557e6c01a0296',
    },
    {
      rel: 'me',
      href: 'https://www.fiverr.com/ubaidwaris655',
    },
    // Performance optimization
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://www.clarity.ms',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://www.googletagmanager.com',
    },
  ],
};

// Structured Data Schemas - ENHANCED FOR DISAMBIGUATION
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}#ubaidbinwaris-developer`,
  name: 'Ubaid Bin Waris',
  givenName: 'Ubaid',
  additionalName: 'Bin',
  familyName: 'Waris',
  alternateName: ['ubaidbinwaris', 'Ubaid Bin Waris', 'UbaidBinWaris', 'uabidbinwaris'],
  url: siteUrl,
  mainEntityOfPage: siteUrl,
  image: {
    '@type': 'ImageObject',
    url: `${siteUrl}/me.jpg`,
    caption: 'Ubaid Bin Waris - Full Stack Developer',
  },
  sameAs: [
    'https://github.com/UbaidBinWaris',
    'https://www.linkedin.com/in/ubaidbinwaris',
    'https://twitter.com/ubaidbinwaris',
    'https://www.upwork.com/freelancers/~01d2f557e6c01a0296',
    'https://www.fiverr.com/ubaidwaris655',
    'https://uabidbinwaris.dev',
  ],
  jobTitle: ['Full Stack Developer', 'Full Stack Web Developer', 'MERN Stack Developer'],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full Stack Developer',
    occupationalCategory: {
      '@type': 'CategoryCode',
      codeValue: '15-1252.00',
      inCodeSet: {
        '@type': 'CategoryCodeSet',
        name: 'O*Net-SOC',
        url: 'https://www.onetonline.org/',
      },
    },
    estimatedSalary: {
      '@type': 'MonetaryAmountDistribution',
      name: 'base',
      currency: 'USD',
    },
    responsibilities: 'Developing and maintaining web applications using React, Next.js, Node.js, and MongoDB',
    skills: 'React, Next.js, Node.js, MongoDB, JavaScript, TypeScript, Full Stack Development',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Self-Employed',
  },
  description: 'Ubaid Bin Waris is a professional Full Stack Web Developer from Pakistan, specializing in React, Next.js, Node.js, and MongoDB. Expert in building scalable web applications and modern user interfaces.',
  disambiguatingDescription: 'Software engineer and web developer, not to be confused with historical figures. Professional programmer specializing in modern JavaScript frameworks and full-stack development.',
  knowsAbout: [
    'React Development',
    'Next.js Framework',
    'Node.js Backend Development',
    'JavaScript Programming',
    'TypeScript Development',
    'MongoDB Database',
    'Tailwind CSS',
    'Web Development',
    'Full Stack Development',
    'MERN Stack',
    'Frontend Development',
    'Backend Development',
    'API Development',
    'Web Application Development',
  ],
  knowsLanguage: [
    {
      '@type': 'Language',
      name: 'English',
    },
    {
      '@type': 'Language',
      name: 'Urdu',
    },
  ],
  email: 'ubaidwaris34@gmail.com',
  nationality: {
    '@type': 'Country',
    name: 'Pakistan',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
    addressRegion: 'Sindh',
    addressLocality: 'Karachi',
  },
  birthPlace: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Pakistan',
    },
  },
  gender: 'Male',
  award: ['Web Development Excellence', 'Full Stack Development Expertise'],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Software Development Training',
  },
  identifier: [
    {
      '@type': 'PropertyValue',
      propertyID: 'GitHub',
      value: 'UbaidBinWaris',
    },
    {
      '@type': 'PropertyValue',
      propertyID: 'LinkedIn',
      value: 'ubaidbinwaris',
    },
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ubaid Bin Waris | Full Stack Developer',
  alternateName: ['ubaidbinwaris', 'uabidbinwaris.dev'],
  url: siteUrl,
  description: 'Professional Full Stack Developer portfolio showcasing React, Next.js, Node.js projects and services',
  author: {
    '@type': 'Person',
    name: 'Ubaid Bin Waris',
  },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ubaid Bin Waris',
  alternateName: 'ubaidbinwaris',
  url: siteUrl,
  logo: `${siteUrl}/me.jpg`,
  sameAs: [
    'https://github.com/UbaidBinWaris',
    'https://twitter.com/ubaidbinwaris',
    'https://linkedin.com/in/ubaidbinwaris',
    'https://www.upwork.com/freelancers/~01d2f557e6c01a0296',
    'https://www.fiverr.com/ubaidwaris655',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'ubaidwaris34@gmail.com',
    contactType: 'Customer Service',
    availableLanguage: ['English', 'Urdu'],
  },
};

export const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: '2024-01-01T00:00:00Z',
  dateModified: new Date().toISOString(),
  mainEntity: personSchema,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
    ],
  },
};

// Professional Service Schema
export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Full Stack Development Services',
  image: `${siteUrl}/me.jpg`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.8607,
    longitude: 67.0011,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://github.com/UbaidBinWaris',
    'https://www.linkedin.com/in/ubaidbinwaris',
  ],
};

// Aggregate all schemas for JSON-LD
export const aggregateSchemas = [
  personSchema,
  websiteSchema,
  organizationSchema,
  profilePageSchema,
  professionalServiceSchema,
];

export default defaultSEOConfig;
