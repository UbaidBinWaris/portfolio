// Enhanced Person Schema with Service Offerings for Google AI
// Import this in layout.js to replace the existing personSchema

const siteUrl =
  process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev";

export const enhancedPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}#ubaidbinwaris-developer`,
  name: "Ubaid Bin Waris",
  givenName: "Ubaid",
  additionalName: "Bin",
  familyName: "Waris",
  alternateName: [
    "ubaidbinwaris",
    "Ubaid Bin Waris",
    "UbaidBinWaris",
    "uabidbinwaris",
  ],
  url: siteUrl,
  mainEntityOfPage: siteUrl,
  image: {
    "@type": "ImageObject",
    url: `${siteUrl}/me.jpg`,
    caption: "Ubaid Bin Waris - Full Stack Developer",
  },
  sameAs: [
    "https://github.com/UbaidBinWaris",
    "https://www.linkedin.com/in/ubaidbinwaris",
    "https://twitter.com/ubaidbinwaris",
    "https://www.upwork.com/freelancers/~01d2f557e6c01a0296",
    "https://www.fiverr.com/ubaidwaris655",
    "https://uabidbinwaris.dev",
  ],
  jobTitle: [
    "Full Stack Developer",
    "Full Stack Web Developer",
    "MERN Stack Developer",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationalCategory: {
      "@type": "CategoryCode",
      codeValue: "15-1252.00",
      inCodeSet: {
        "@type": "CategoryCodeSet",
        name: "O*Net-SOC",
        url: "https://www.onetonline.org/",
      },
    },
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      name: "base",
      currency: "USD",
    },
    responsibilities:
      "Developing and maintaining web applications using React, Next.js, Node.js, MongoDB, and deploying on Linux servers with Docker and cloud platforms",
    skills:
      "React, Next.js, Node.js, Express.js, MongoDB, SQL, JavaScript, TypeScript, Tailwind CSS, REST APIs, GraphQL, Linux, DevOps, Docker, PM2, AWS, Hetzner, Hostinger, Server Configuration, Full Stack Development",
  },
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed",
  },
  description:
    "Ubaid Bin Waris is a Full Stack Web Developer and Computer Science student from Islamabad, Pakistan, specializing in React, Next.js, Node.js, MongoDB, and DevOps. Expert in building scalable web applications, RESTful APIs, and deploying production systems on Linux servers using Docker and cloud hosting.",
  disambiguatingDescription:
    "Software engineer and web developer specializing in modern JavaScript frameworks, full-stack development, and DevOps infrastructure. Professional programmer with expertise in Next.js, Node.js, and cloud deployment.",
  knowsAbout: [
    "React Development",
    "Next.js Framework",
    "Node.js Backend Development",
    "JavaScript Programming",
    "TypeScript Development",
    "MongoDB Database",
    "SQL Databases",
    "Tailwind CSS",
    "Web Development",
    "Full Stack Development",
    "MERN Stack",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "REST APIs",
    "GraphQL",
    "Web Application Development",
    "Linux System Administration",
    "DevOps",
    "Docker Containerization",
    "Server Configuration",
    "Cloud Hosting",
    "AWS",
    "Hetzner",
    "Hostinger",
    "PM2 Process Manager",
    "CI/CD Deployment",
  ],
  knowsLanguage: [
    {
      "@type": "Language",
      name: "English",
    },
    {
      "@type": "Language",
      name: "Urdu",
    },
  ],
  email: "ubaidwaris34@gmail.com",
  nationality: {
    "@type": "Country",
    name: "Pakistan",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
    addressRegion: "Islamabad Capital Territory",
    addressLocality: "Islamabad",
  },
  birthPlace: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
      addressLocality: "Islamabad",
    },
  },
  gender: "Male",
  award: ["Web Development Excellence", "Full Stack Development Expertise"],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Software Development Training",
  },
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "GitHub",
      value: "UbaidBinWaris",
    },
    {
      "@type": "PropertyValue",
      propertyID: "LinkedIn",
      value: "ubaidbinwaris",
    },
  ],
  // Service offerings for Google AI to understand what services are provided
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Full Stack Web Development",
        description:
          "Custom web application development using React, Next.js, Node.js, and MongoDB",
        serviceType: "Web Development",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: 500,
        minPrice: 500,
      },
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "React.js Development",
        description:
          "Expert React.js development for responsive user interfaces",
        serviceType: "Frontend Development",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: 400,
        minPrice: 400,
      },
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Next.js Development",
        description: "Professional Next.js development with SSR, SSG, and ISR",
        serviceType: "Frontend Development",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: 600,
        minPrice: 600,
      },
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Node.js Backend Development",
        description: "Robust backend development with Node.js and Express.js",
        serviceType: "Backend Development",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: 500,
        minPrice: 500,
      },
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "API Development & Integration",
        description:
          "Custom RESTful API development and third-party integrations",
        serviceType: "Backend Development",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: 300,
        minPrice: 300,
      },
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "MongoDB Database Design",
        description: "Professional database design and optimization",
        serviceType: "Database Development",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: 250,
        minPrice: 250,
      },
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cloud Deployment & DevOps",
        description:
          "Professional cloud deployment on AWS, Vercel, and other platforms",
        serviceType: "DevOps",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: 200,
        minPrice: 200,
      },
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Website Maintenance & Support",
        description: "Ongoing maintenance, updates, and technical support",
        serviceType: "Web Development",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: 150,
        minPrice: 150,
        unitText: "MONTH",
      },
      availability: "https://schema.org/InStock",
    },
  ],
};

export default enhancedPersonSchema;
