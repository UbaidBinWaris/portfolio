import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ubaid Bin Waris | Full Stack Developer Portfolio",
  description:
    "Explore the professional portfolio of Ubaid Bin Waris, a passionate Full Stack Developer with expertise in modern web technologies including React, Next.js, Node.js, and MongoDB.",
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
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
  },
  authors: [
    { name: "Ubaid Bin Waris", url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}` },
  ],
  creator: "Ubaid Bin Waris",
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
  openGraph: {
    title: "Ubaid Bin Waris | Full Stack Developer",
    description:
      "Discover the work and skills of Ubaid Bin Waris, a creative and results-driven full stack web developer.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
    siteName: "Ubaid Bin Waris Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/me.jpg`,
        width: 1200,
        height: 630,
        alt: "Ubaid Bin Waris Portfolio Preview",
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
    images: [`${process.env.NEXT_PUBLIC_DOMAIN_URL}/og-image.jpg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
