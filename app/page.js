import Image from "next/image";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Experience from "./components/Experience";
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FAQSection";
import { ReviewSection } from "./components/ReviewSection";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";

export const metadata = {
  title:
    "Ubaid Bin Waris - Full Stack Web Developer | React, Next.js & Node.js Expert from Pakistan",
  description:
    "I am Ubaid Bin Waris, a professional Full Stack Web Developer from Pakistan specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications. Available for hire.",
  keywords: [
    "Ubaid Bin Waris",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Portfolio",
  ],
  alternates: {
    canonical: "https://uabidbinwaris.dev",  // No query parameters allowed
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": 0,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    bingbot: "index, follow",
    msnbot: "index, follow",
  },
  openGraph: {
    title: "Ubaid Bin Waris | Full Stack Developer | React & Next.js Expert",
    description:
      "Professional Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications.",
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
    description:
      "Professional Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Building scalable web applications.",
    images: ["https://uabidbinwaris.dev/og-image.jpg"],
  },
};

export default function Home() {
  const siteUrl =
    process.env.NEXT_PUBLIC_DOMAIN_URL || "https://uabidbinwaris.dev";

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center font-code justify-between relative">
        <div className="relative overflow-hidden w-full min-h-screen">
          <Navbar />
          <Hero />
          <div className="absolute bottom-0 w-full bg-gradient-to-t h-screen from-[#0A1930] to-transparent"></div>
        </div>
        <About />
        <Services />
        <Experience />
        <BlogSection />
        <FAQSection />
        <ReviewSection />
        <Contact />
      </main>
    </>
  );
}
