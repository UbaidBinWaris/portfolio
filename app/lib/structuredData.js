// Enhanced Structured Data (JSON-LD) for SEO
// Import this in your components to add rich snippets

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev";

// FAQ Schema for FAQ Section
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What technologies do you specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I specialize in React, Next.js, Node.js, MongoDB, TypeScript, Tailwind CSS, and the complete MERN stack. I build scalable, performant web applications with modern best practices."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with international clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, I work with clients worldwide remotely. I'm available across different time zones and use modern collaboration tools to ensure smooth communication and project delivery."
      }
    },
    {
      "@type": "Question",
      "name": "What is your typical project timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary based on complexity. A typical landing page takes 1-2 weeks, while full-stack applications can take 4-12 weeks. I provide detailed estimates after understanding your requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide ongoing support and maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, I offer ongoing support, maintenance, and feature development services. I ensure your application stays up-to-date, secure, and performs optimally."
      }
    }
  ]
};

// Service Schema - describing offered services
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Full Stack Web Development",
  "provider": {
    "@type": "Person",
    "name": "Ubaid Bin Waris",
    "url": siteUrl
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Frontend Development",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "React Development",
              "description": "Building responsive, performant React applications"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Next.js Development",
              "description": "Server-side rendered and static site generation with Next.js"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Backend Development",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Node.js API Development",
              "description": "RESTful and GraphQL API development with Node.js"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Database Design",
              "description": "MongoDB and SQL database architecture and optimization"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Full Stack Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MERN Stack Development",
              "description": "Complete full-stack applications using MongoDB, Express, React, and Node.js"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Application Development",
              "description": "Custom web applications tailored to business needs"
            }
          }
        ]
      }
    ]
  }
};

// Skill Schema - technical skills and proficiencies
export const skillsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Technical Skills",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Thing",
        "name": "React",
        "description": "Expert level proficiency in React.js for building user interfaces"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Thing",
        "name": "Next.js",
        "description": "Advanced Next.js development with SSR, SSG, and ISR"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Thing",
        "name": "Node.js",
        "description": "Backend development with Node.js and Express.js"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Thing",
        "name": "MongoDB",
        "description": "NoSQL database design and optimization"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Thing",
        "name": "TypeScript",
        "description": "Type-safe JavaScript development"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Thing",
        "name": "Tailwind CSS",
        "description": "Modern utility-first CSS framework"
      }
    }
  ]
};

// Author Schema - CRITICAL FOR DISAMBIGUATION
export const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}#ubaidbinwaris-developer`,
  "name": "Ubaid Bin Waris",
  "jobTitle": "Full Stack Developer",
  "url": siteUrl,
  "image": `${siteUrl}/me.jpg`,
  "sameAs": [
    "https://github.com/UbaidBinWaris",
    "https://www.linkedin.com/in/ubaidbinwaris",
    "https://www.upwork.com/freelancers/~01d2f557e6c01a0296"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Islamabad",
    "addressCountry": "PK"
  },
  "knowsAbout": ["Full Stack Development", "React", "Next.js", "Node.js", "MongoDB"],
  "nationality": {
    "@type": "Country",
    "name": "Pakistan"
  }
};

// Blog Posting Schema for individual blog posts - ENHANCED WITH AUTHOR
export const createBlogPostingSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.excerpt,
  "image": `${siteUrl}/og-image.jpg`,
  "datePublished": post.date,
  "dateModified": post.date,
  "author": {
    "@type": "Person",
    "@id": `${siteUrl}#ubaidbinwaris-developer`,
    "name": "Ubaid Bin Waris",
    "givenName": "Ubaid",
    "familyName": "Waris",
    "url": siteUrl,
    "image": `${siteUrl}/me.jpg`,
    "jobTitle": "Full Stack Web Developer",
    "description": "Professional Full Stack Web Developer from Pakistan",
    "sameAs": [
      "https://github.com/UbaidBinWaris",
      "https://www.linkedin.com/in/ubaidbinwaris",
    ]
  },
  "publisher": {
    "@type": "Person",
    "@id": `${siteUrl}#ubaidbinwaris-developer`,
    "name": "Ubaid Bin Waris",
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/me.jpg`,
      "caption": "Ubaid Bin Waris - Full Stack Developer"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": post.url || `${siteUrl}#${post.slug}`
  },
  "keywords": post.tags?.join(", ") || "",
  "articleSection": "Technology",
  "inLanguage": "en-US",
  "copyrightHolder": {
    "@type": "Person",
    "name": "Ubaid Bin Waris"
  },
  "copyrightYear": new Date().getFullYear()
});

// Review/Testimonial Schema
export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Client Reviews",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Client Name"
        },
        "reviewBody": "Excellent work on our project. Delivered on time with great quality.",
        "datePublished": "2024-12-01"
      }
    }
  ]
};

// Work Experience Schema
export const workExperienceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Professional Experience",
  "description": "Work experience and projects of Ubaid Bin Waris",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Organization",
        "name": "Freelance Developer",
        "description": "Full Stack Web Development Services"
      }
    }
  ]
};

// Breadcrumb Schema for navigation
export const createBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Contact Page Schema
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Ubaid Bin Waris",
  "description": "Get in touch with Ubaid Bin Waris for web development projects",
  "url": `${siteUrl}#contact`,
  "mainEntity": {
    "@type": "Person",
    "name": "Ubaid Bin Waris",
    "email": "ubaidwaris34@gmail.com",
    "url": siteUrl
  }
};

// Portfolio/CreativeWork Schema
export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Ubaid Bin Waris Portfolio",
  "description": "Portfolio showcasing web development projects and expertise",
  "author": {
    "@type": "Person",
    "name": "Ubaid Bin Waris"
  },
  "dateCreated": "2024-01-01",
  "dateModified": new Date().toISOString()
};

export default {
  authorSchema,
  faqSchema,
  serviceSchema,
  skillsSchema,
  reviewSchema,
  workExperienceSchema,
  contactPageSchema,
  portfolioSchema,
  createBlogPostingSchema,
  createBreadcrumbSchema
};
