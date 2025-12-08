import { Geist, Geist_Mono, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import ClarityAnalytics from "./components/ClarityAnalytics";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { aggregateSchemas } from "./lib/seo.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
  adjustFontFallback: true,
});

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ubaid Bin Waris - Full Stack Web Developer from Pakistan | React & Next.js Expert",
    template: "%s | Ubaid Bin Waris - Full Stack Developer"
  },
  description:
    "I am Ubaid Bin Waris, a professional Full Stack Web Developer from Pakistan specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications. Available for hire.",
  keywords: [
    // Brand & Name variations
    "Ubaid Bin Waris",
    "ubaidbinwaris",
    "ubaid bin waris",
    "ubaidbin",
    "uabidbinwaris",
    "uabid bin waris",
    "UbaidBinWaris",
    "Ubaid Waris",
    "ubaid developer",
    "ubaid portfolio",
    "uabidbinwaris.dev",
    
    // Core Expertise
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    
    // Services (High Intent)
    "hire full stack developer",
    "hire react developer",
    "hire nextjs developer",
    "professional web developer for hire",
    "freelance full stack developer",
    "freelance react developer",
    "remote full stack developer for hire",
    "full stack development services",
    "react development services",
    "nextjs development services",
    
    // Problem-Solving Keywords
    "website performance optimization",
    "website redesign services",
    "custom web development",
    "web application development",
    "responsive web development",
    "progressive web app development",
    "API development services",
    "REST API development",
    
    // Industry-Specific
    "ecommerce website developer",
    "saas development services",
    "business website developer",
    "startup web developer",
    "fintech web developer",
    "dashboard developer",
    
    // Technology Stack
    "React Expert",
    "Next.js Expert",
    "Node.js Expert",
    "MongoDB Developer",
    "Tailwind CSS Developer",
    "Express.js Developer",
    "TypeScript Expert",
    "Vercel Deployment Expert",
    
    // Location-Based
    "Pakistan Full Stack Developer",
    "Pakistani Web Developer",
    "Karachi Developer",
    "Remote Developer Pakistan",
    "International Web Developer",
    
    // Competitive
    "top full stack developer",
    "best react developer",
    "experienced nextjs developer",
    "expert web developer",
    "professional website builder",
    
    // Long-Tail (High Conversion)
    "best full stack developer for startup",
    "affordable web development services",
    "fast website development",
    "scalable web application development",
    "modern web development solutions",
    "mern stack developer with typescript",
    "nextjs developer with tailwind css",
    "web developer for small business",
  ],
  authors: [
    { name: "Ubaid Bin Waris", url: siteUrl },
  ],
  creator: "Ubaid Bin Waris",
  publisher: "Ubaid Bin Waris",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': 0, // Disable video indexing for background videos
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'bingbot': 'index, follow',
    'msnbot': 'index, follow',
  },
  openGraph: {
    title: "Ubaid Bin Waris | Full Stack Developer | React & Next.js",
    description:
      "Professional Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications. Available for freelance.",
    url: siteUrl,
    siteName: "Ubaid Bin Waris | Full Stack Developer",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Ubaid Bin Waris - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubaid Bin Waris | Full Stack Developer - React & Next.js",
    description:
      "Professional Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications. Available for freelance.",
    creator: "@ubaidbinwaris",
    site: "@ubaidbinwaris",
    images: [`${siteUrl}/og-image.jpg`],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev";
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ubaid Bin Waris",
    "alternateName": ["ubaidbinwaris", "ubaid bin waris", "ubaidbin", "UbaidBinWaris", "Ubaid"],
    "url": siteUrl,
    "image": `${siteUrl}/me.jpg`,
    "sameAs": [
      "https://github.com/UbaidBinWaris",
      "https://twitter.com/ubaidbinwaris",
      "https://linkedin.com/in/ubaidbinwaris",
      "https://www.upwork.com/freelancers/~01d2f557e6c01a0296",
      "https://www.fiverr.com/ubaidwaris655"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Passionate Full Stack Developer (ubaidbinwaris) specializing in React, Next.js, Node.js, and MongoDB",
    "knowsAbout": [
      "React", "Next.js", "Node.js", "JavaScript", "TypeScript",
      "MongoDB", "Tailwind CSS", "Web Development", "Full Stack Development"
    ],
    "email": "ubaidwaris34@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ubaid Bin Waris | Full Stack Developer",
    "url": siteUrl,
    "description": "Professional Full Stack Developer portfolio showcasing React, Next.js, Node.js projects and services",
    "author": {
      "@type": "Person",
      "name": "Ubaid Bin Waris"
    },
    "inLanguage": "en-US"
  };

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": personSchema,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }]
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:0" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:0" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:0" />
        
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://scripts.clarity.ms" />
        <link rel="dns-prefetch" href="https://c.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Social Profile Links for SEO - Helps search engines verify your identity across platforms */}
        <link rel="me" href="https://github.com/UbaidBinWaris" />
        <link rel="me" href="https://www.linkedin.com/in/ubaidbinwaris" />
        <link rel="me" href="https://twitter.com/ubaidbinwaris" />
        <link rel="me" href="https://www.upwork.com/freelancers/~01d2f557e6c01a0296" />
        <link rel="me" href="https://www.fiverr.com/ubaidwaris655" />
        <link rel="me" href="https://discord.com/users/1194654569578373121" />
        <link rel="me" href="https://uabidbinwaris.dev" />
        <link rel="author" href="mailto:ubaidwaris34@gmail.com" />
        
        <meta name="theme-color" content="#0A1930" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Enhanced Structured Data (JSON-LD) for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchemas) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceCodePro.variable} antialiased scroll-smooth`}
      >
        <ScrollToTop />
        <ServiceWorkerRegistration />
        <ClarityAnalytics />
        <GoogleAnalytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
