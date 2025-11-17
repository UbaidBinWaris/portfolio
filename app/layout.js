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
    "Explore the professional portfolio of Ubaid Bin Waris, a passionate Full Stack Developer with expertise in modern web technologies including React, Next.js, Node.js, and MongoDB. Available for freelance projects and collaborations.",
  keywords: [
    "Ubaid Bin Waris",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Developer Portfolio",
    "Software Engineer",
    "Web Development Services",
    "Freelance Developer",
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
    title: "Ubaid Bin Waris | Full Stack Developer Portfolio",
    description:
      "Discover the work and skills of Ubaid Bin Waris, a creative and results-driven full stack web developer specializing in React, Next.js, and modern web technologies.",
    url: siteUrl,
    siteName: "Ubaid Bin Waris Portfolio",
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
    title: "Ubaid Bin Waris | Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Ubaid Bin Waris, a full stack developer with expertise in React, Next.js, Node.js, and more.",
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
    "description": "Passionate Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB",
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
        <meta name="theme-color" content="#0A1930" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href={siteUrl} />
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
