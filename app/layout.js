import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ubaid Bin Waris | Full Stack Developer Portfolio",
    template: "%s | Ubaid Bin Waris"
  },
  description:
    "Ubaid Bin Waris (ubaidbinwaris) - Expert Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications with modern technologies. Available for freelance projects.",
  keywords: [
    "Ubaid Bin Waris",
    "ubaidbinwaris",
    "ubaid bin waris",
    "ubaidbin",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "JavaScript Expert",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MongoDB Expert",
    "Tailwind CSS Developer",
    "Freelance Developer",
    "Software Engineer",
    "Web Application Development",
    "API Development",
    "REST API Developer",
    "Modern Web Development",
    "Responsive Web Design",
    "UI/UX Developer",
    "Full Stack Engineer",
    "Pakistan Developer",
    "Pakistani Full Stack Developer",
    "React Native Developer",
    "Express.js Developer",
    "Database Design",
    "Cloud Deployment",
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
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ubaid Bin Waris",
    "alternateName": ["ubaidbinwaris", "ubaid bin waris", "ubaidbin", "UbaidBinWaris", "Ubaid"],
    "url": siteUrl,
    "image": `${siteUrl}/me.jpg`,
    "sameAs": [
      "https://github.com/UbaidBinWaris",
      "https://twitter.com/ubaidbinwaris",
      "https://linkedin.com/in/ubaidbinwaris"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Passionate Full Stack Developer (ubaidbinwaris) specializing in React, Next.js, Node.js, and MongoDB",
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Web Development",
      "Full Stack Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Your University/College Name"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
