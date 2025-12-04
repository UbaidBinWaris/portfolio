import Image from "next/image";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Experience from "./components/Experience";
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FAQSection";
// import { ReviewSection } from "./components/ReviewSection";
import Contact from "./components/Contact";

export const metadata = {
  title: "Ubaid Bin Waris | Full Stack Developer - React & Next.js Expert",
  description: "Ubaid Bin Waris - Professional Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications. Hire now.",
  keywords: [
    "Ubaid Bin Waris", 
    "ubaidbinwaris", 
    "ubaid bin waris", 
    "ubaidbin",
    "uabidbinwaris",
    "uabid bin waris", 
    "uabidbinwaris.dev",
    "Full Stack Developer", 
    "React Developer", 
    "Next.js Developer", 
    "Node.js Developer", 
    "Web Developer", 
    "JavaScript Expert", 
    "MERN Stack Developer", 
    "Frontend Developer", 
    "Backend Developer", 
    "Freelance Developer Pakistan", 
    "Software Engineer", 
    "TypeScript Developer", 
    "MongoDB Expert", 
    "Tailwind CSS Developer", 
    "API Development", 
    "Web Application Development", 
    "Modern Web Development", 
    "Responsive Web Design", 
    "UI/UX Developer",
    "ubaid portfolio",
    "uabid portfolio",
    "ubaid developer pakistan",
    "hire full stack developer"
  ],
  alternates: {
    canonical: 'https://uabidbinwaris.dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'bingbot': 'index, follow',
    'msnbot': 'index, follow',
  },
  openGraph: {
    title: "Ubaid Bin Waris | Full Stack Developer | React & Next.js Expert",
    description: "Professional Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications.",
    url: "https://uabidbinwaris.dev",
    type: "website",
    images: [
      {
        url: "https://uabidbinwaris.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ubaid Bin Waris - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubaid Bin Waris | Full Stack Developer | React & Next.js Expert",
    description: "Professional Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications.",
    images: ["https://uabidbinwaris.dev/og-image.jpg"],
  },
};

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev";
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ubaid Bin Waris Portfolio",
    "alternateName": ["ubaidbinwaris", "uabidbinwaris", "uabidbinwaris.dev"],
    "url": siteUrl,
    "description": "Professional portfolio of Ubaid Bin Waris (ubaidbinwaris, uabidbinwaris, ubaid bin waris, ubaidbin) at uabidbinwaris.dev - Full Stack Developer specializing in React, Next.js, and MERN Stack",
    "author": {
      "@type": "Person",
      "name": "Ubaid Bin Waris",
      "alternateName": ["ubaidbinwaris", "uabidbinwaris", "ubaid bin waris", "uabid bin waris", "ubaidbin", "UbaidBinWaris"],
      "jobTitle": "Full Stack Developer",
      "url": siteUrl,
      "identifier": "uabidbinwaris.dev"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Experience",
        "item": `${siteUrl}#experiences`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": `${siteUrl}#blog`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${siteUrl}#contact`
      }
    ]
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2025-11-17T00:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "mainEntity": {
      "@type": "Person",
      "@id": `${siteUrl}#ubaidbinwaris`,
      "name": "Ubaid Bin Waris",
      "alternateName": [
        "ubaidbinwaris", 
        "ubaid bin waris", 
        "ubaidbin",
        "uabidbinwaris",
        "uabid bin waris", 
        "UbaidBinWaris", 
        "Ubaid Waris",
        "Uabid Waris",
        "Ubaid B Waris",
        "ubaid developer",
        "uabid developer",
        "waris developer",
        "uabidbinwaris.dev"
      ],
      "jobTitle": ["Full Stack Developer", "MERN Stack Developer", "React Developer", "Next.js Developer"],
      "description": "Professional Full Stack Developer (ubaidbinwaris) specializing in React, Next.js, Node.js, MongoDB, and modern web technologies. Expert in building scalable web applications.",
      "url": siteUrl,
      "image": `${siteUrl}/me.jpg`,
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "knowsAbout": [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Express.js",
        "REST API",
        "Web Development",
        "Full Stack Development",
        "MERN Stack",
        "Frontend Development",
        "Backend Development",
        "Database Design",
        "Responsive Web Design",
        "UI/UX Development"
      ],
      "knowsLanguage": ["English", "Urdu"],
      "sameAs": [
        "https://github.com/UbaidBinWaris",
        "https://twitter.com/ubaidbinwaris",
        "https://linkedin.com/in/ubaidbinwaris"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "occupationLocation": {
          "@type": "Country",
          "name": "Pakistan"
        },
        "skills": [
          "React Development",
          "Next.js Development",
          "Node.js Development",
          "MongoDB Database",
          "MERN Stack",
          "JavaScript/TypeScript",
          "API Development",
          "Web Application Development"
        ]
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteSchema, breadcrumbSchema, portfolioSchema]) }}
      />
      <main id="home" className="flex min-h-screen w-full flex-col items-center font-code justify-between relative">
        <div className="relative overflow-hidden w-full min-h-screen">
          <Navbar />
          <Hero />
          <div className="absolute bottom-0 w-full bg-gradient-to-t h-screen from-[#0A1930] to-transparent"></div>
        </div>
        <Experience />
        <BlogSection />
        <FAQSection />
        <Contact />
        {/* <ReviewSection /> */}
      </main>
    </>
  );
}
