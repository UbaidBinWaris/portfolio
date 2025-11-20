import Image from "next/image";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Experience from "./components/Experience";
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FAQSection";
// import { ReviewSection } from "./components/ReviewSection";
import Contact from "./components/Contact";

export const metadata = {
  title: "Ubaid Bin Waris | Expert Full Stack Developer | React, Next.js & Node.js Specialist",
  description: "Ubaid Bin Waris (ubaidbinwaris) - Professional Full Stack Developer specializing in React, Next.js, Node.js, MongoDB & modern web technologies. Available for freelance projects & collaborations.",
  keywords: ["Ubaid Bin Waris", "ubaidbinwaris", "ubaid bin waris", "ubaidbin", "Full Stack Developer", "React Developer", "Next.js Developer", "Node.js Developer", "Web Developer", "JavaScript Expert", "MERN Stack Developer", "Frontend Developer", "Backend Developer", "Freelance Developer Pakistan", "Software Engineer", "TypeScript Developer", "MongoDB Expert", "Tailwind CSS Developer", "API Development", "Web Application Development", "Modern Web Development", "Responsive Web Design", "UI/UX Developer"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Ubaid Bin Waris | Expert Full Stack Developer | React, Next.js & Node.js Specialist",
    description: "Professional Full Stack Developer specializing in React, Next.js, Node.js, MongoDB & modern web technologies. Available for freelance projects.",
  },
};

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev";
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ubaid Bin Waris Portfolio",
    "alternateName": "ubaidbinwaris",
    "url": siteUrl,
    "description": "Professional portfolio of Ubaid Bin Waris (ubaidbinwaris, ubaid bin waris, ubaidbin), a Full Stack Developer",
    "author": {
      "@type": "Person",
      "name": "Ubaid Bin Waris",
      "alternateName": ["ubaidbinwaris", "ubaid bin waris", "ubaidbin", "UbaidBinWaris"],
      "jobTitle": "Full Stack Developer",
      "url": siteUrl
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
      "name": "Ubaid Bin Waris",
      "alternateName": ["ubaidbinwaris", "ubaid bin waris", "ubaidbin", "UbaidBinWaris", "Ubaid"],
      "jobTitle": "Full Stack Developer",
      "description": "Full Stack Developer (ubaidbinwaris) specializing in React, Next.js, Node.js, and MongoDB",
      "url": siteUrl,
      "image": `${siteUrl}/me.jpg`,
      "sameAs": [
        "https://github.com/UbaidBinWaris",
        "https://twitter.com/ubaidbinwaris",
        "https://linkedin.com/in/ubaidbinwaris"
      ]
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
