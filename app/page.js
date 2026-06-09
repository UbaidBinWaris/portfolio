import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import TerminalSection from "./components/TerminalSection";
import ProjectSection from "./components/ProjectSection";
import FAQSection from "./components/FAQSection";

export const metadata = {
  title: "Full Stack Developer in Pakistan | React & Next.js Expert",
  description:
    "Hire a Full Stack Developer from Pakistan. Expert in React, Next.js, Node.js & AI automation. Building scalable web apps and APIs. Available for freelance.",
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
    canonical: "https://ubaidbinwaris.com",
  },
  openGraph: {
    title: "Ubaid Bin Waris | Backend Engineer & AI Automation Developer",
    description:
      "Backend-focused Full Stack Engineer specializing in AI Automation, Node.js, Next.js, and production-ready system architecture.",
    url: "https://ubaidbinwaris.com",
    type: "website",
    images: [
      {
        url: "https://ubaidbinwaris.com/og-image.jpg",
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
    images: ["https://ubaidbinwaris.com/og-image.jpg"],
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
        <FAQSection />
        <Contact />
      </main>
    </>
  );
}
