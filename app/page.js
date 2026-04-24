import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import TerminalSection from "./components/TerminalSection";
import ProjectSection from "./components/ProjectSection";

export const metadata = {
  title:
    "Ubaid Bin Waris - Backend Engineer & AI Automation Developer | Next.js & Node.js Expert",
  description:
    "I am Ubaid Bin Waris, a Backend-focused Full Stack Engineer from Islamabad, Pakistan. Specializing in AI Automation, Node.js, Next.js, system architecture, and production deployment. Available for hire.",
  keywords: [
    "Ubaid Bin Waris",
    "Backend Engineer",
    "AI Automation Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "n8n Developer",
    "System Builder",
    "Portfolio",
  ],
  alternates: {
    canonical: "https://uabidbinwaris.dev",
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
    title: "Ubaid Bin Waris | Backend Engineer & AI Automation Developer",
    description:
      "Backend-focused Full Stack Engineer specializing in AI Automation, Node.js, Next.js, and production-ready system architecture.",
    url: "https://uabidbinwaris.dev",
    type: "website",
    images: [
      {
        url: "https://uabidbinwaris.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ubaid Bin Waris - Backend Engineer & AI Automation Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubaid Bin Waris | Backend Engineer & AI Automation Developer",
    description:
      "Backend-focused Full Stack Engineer specializing in AI Automation, Node.js, Next.js, and production-ready system architecture.",
    images: ["https://uabidbinwaris.dev/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center font-code justify-between relative">
        <Navbar />
        <Hero />
        <TerminalSection />
        <About />
        <Services />
        <ProjectSection />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
