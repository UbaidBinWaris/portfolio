// Comprehensive Service Schemas for Google AI Understanding
// These schemas help Google AI showcase your services in search results and AI Overviews

const siteUrl =
  process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev";

// Individual Service Schemas
export const fullStackDevService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Full Stack Web Development",
  name: "Full Stack Web Development",
  description:
    "Custom web application development using React, Next.js, Node.js, and MongoDB. Building scalable, performant, and modern web solutions tailored to your business needs.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}#ubaidbinwaris-developer`,
    name: "Ubaid Bin Waris",
    url: siteUrl,
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: siteUrl,
    servicePhone: "",
    availableLanguage: ["English", "Urdu"],
  },
  category: "Web Development",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "Starting from $500",
    },
    availability: "https://schema.org/InStock",
  },
};

export const reactDevService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "React Development",
  name: "React.js Development",
  description:
    "Expert React.js development services for building responsive, performant, and modern user interfaces. Specializing in component-based architecture, state management, and performance optimization.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}#ubaidbinwaris-developer`,
    name: "Ubaid Bin Waris",
  },
  areaServed: "Worldwide",
  category: "Frontend Development",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "Starting from $400",
    },
  },
};

export const nextjsDevService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Next.js Development",
  name: "Next.js Development",
  description:
    "Professional Next.js development with server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR). SEO-optimized, fast-loading web applications.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}#ubaidbinwaris-developer`,
    name: "Ubaid Bin Waris",
  },
  areaServed: "Worldwide",
  category: "Frontend Development",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "Starting from $600",
    },
  },
};

export const nodejsDevService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Node.js Backend Development",
  name: "Node.js Backend Development",
  description:
    "Robust backend development with Node.js and Express.js. RESTful API development, database integration, authentication, and server-side logic implementation.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}#ubaidbinwaris-developer`,
    name: "Ubaid Bin Waris",
  },
  areaServed: "Worldwide",
  category: "Backend Development",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "Starting from $500",
    },
  },
};

export const apiDevService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "API Development & Integration",
  name: "API Development & Integration",
  description:
    "Custom RESTful API development and third-party API integration services. Secure, scalable, and well-documented APIs for seamless data exchange.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}#ubaidbinwaris-developer`,
    name: "Ubaid Bin Waris",
  },
  areaServed: "Worldwide",
  category: "Backend Development",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "Starting from $300",
    },
  },
};

export const databaseDesignService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Database Design & Optimization",
  name: "MongoDB Database Design",
  description:
    "Professional MongoDB database design, schema architecture, and query optimization. Ensuring data integrity, performance, and scalability.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}#ubaidbinwaris-developer`,
    name: "Ubaid Bin Waris",
  },
  areaServed: "Worldwide",
  category: "Database Development",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "Starting from $250",
    },
  },
};

export const cloudDeploymentService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Cloud Deployment",
  name: "Cloud Deployment & DevOps",
  description:
    "Professional cloud deployment services on AWS, Vercel, and other platforms. CI/CD setup, server configuration, and production optimization.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}#ubaidbinwaris-developer`,
    name: "Ubaid Bin Waris",
  },
  areaServed: "Worldwide",
  category: "DevOps",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "Starting from $200",
    },
  },
};

export const maintenanceService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Maintenance & Support",
  name: "Website Maintenance & Support",
  description:
    "Ongoing website maintenance, bug fixes, feature updates, and technical support. Ensuring your application stays secure, up-to-date, and performs optimally.",
  provider: {
    "@type": "Person",
    "@id": `${siteUrl}#ubaidbinwaris-developer`,
    name: "Ubaid Bin Waris",
  },
  areaServed: "Worldwide",
  category: "Web Development",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      price: "Starting from $150/month",
    },
  },
};

// Aggregate all services for easy import
export const allServicesSchemas = [
  fullStackDevService,
  reactDevService,
  nextjsDevService,
  nodejsDevService,
  apiDevService,
  databaseDesignService,
  cloudDeploymentService,
  maintenanceService,
];

// Service data for UI components
export const servicesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Custom web application development using React, Next.js, Node.js, and MongoDB. Building scalable, performant, and modern web solutions.",
    icon: "🚀",
    price: "Starting from $500",
    features: [
      "Custom Web Applications",
      "Responsive Design",
      "Database Integration",
      "API Development",
      "Performance Optimization",
    ],
  },
  {
    id: 2,
    title: "React.js Development",
    description:
      "Expert React.js development for building responsive, performant user interfaces with modern best practices.",
    icon: "⚛️",
    price: "Starting from $400",
    features: [
      "Component Architecture",
      "State Management",
      "React Hooks",
      "Performance Optimization",
      "Responsive UI/UX",
    ],
  },
  {
    id: 3,
    title: "Next.js Development",
    description:
      "Professional Next.js development with SSR, SSG, and ISR for SEO-optimized, fast-loading applications.",
    icon: "▲",
    price: "Starting from $600",
    features: [
      "Server-Side Rendering",
      "Static Site Generation",
      "SEO Optimization",
      "Image Optimization",
      "API Routes",
    ],
  },
  {
    id: 4,
    title: "Node.js Backend",
    description:
      "Robust backend development with Node.js and Express.js for scalable server-side applications.",
    icon: "🟢",
    price: "Starting from $500",
    features: [
      "RESTful APIs",
      "Authentication & Authorization",
      "Database Integration",
      "Server Configuration",
      "Security Implementation",
    ],
  },
  {
    id: 5,
    title: "API Development",
    description:
      "Custom API development and third-party integrations for seamless data exchange.",
    icon: "🔌",
    price: "Starting from $300",
    features: [
      "RESTful API Design",
      "API Documentation",
      "Third-party Integration",
      "Webhook Implementation",
      "API Security",
    ],
  },
  {
    id: 6,
    title: "Database Design",
    description:
      "Professional MongoDB database design and optimization for data integrity and performance.",
    icon: "🗄️",
    price: "Starting from $250",
    features: [
      "Schema Design",
      "Query Optimization",
      "Data Modeling",
      "Migration Services",
      "Performance Tuning",
    ],
  },
  {
    id: 7,
    title: "Cloud Deployment",
    description:
      "Professional cloud deployment on AWS, Vercel, and other platforms with CI/CD setup.",
    icon: "☁️",
    price: "Starting from $200",
    features: [
      "AWS Deployment",
      "Vercel Deployment",
      "CI/CD Setup",
      "Server Configuration",
      "SSL/HTTPS Setup",
    ],
  },
  {
    id: 8,
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, updates, and technical support to keep your application running smoothly.",
    icon: "🛠️",
    price: "Starting from $150/month",
    features: [
      "Bug Fixes",
      "Feature Updates",
      "Security Patches",
      "Performance Monitoring",
      "24/7 Support",
    ],
  },
];

export default {
  allServicesSchemas,
  servicesData,
  fullStackDevService,
  reactDevService,
  nextjsDevService,
  nodejsDevService,
  apiDevService,
  databaseDesignService,
  cloudDeploymentService,
  maintenanceService,
};
