import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import FAQSection from "./components/FAQSection";
import ArchitectureSection from "./components/ArchitectureSection";
import CurrentlyBuilding from "./components/CurrentlyBuilding";

export const metadata = {
  title: "AI Systems Engineer & Backend Infrastructure Specialist | Ubaid Bin Waris",
  description:
    "Hire Ubaid Bin Waris - AI Systems & Backend Infrastructure Engineer. Specializing in AI Agents, Voice AI, LiveKit/Vapi, n8n Automation, Node.js, Redis distributed locks, and Linux cloud infrastructure.",
  keywords: [
    "Ubaid Bin Waris",
    "AI Systems Engineer",
    "AI Automation Engineer",
    "Backend Infrastructure Engineer",
    "Voice AI Developer",
    "LiveKit",
    "Vapi Telephony",
    "n8n Automation",
    "Node.js",
    "Redis Distributed Locks",
    "Ollama Local LLMs",
    "Linux Systems",
  ],
  alternates: {
    canonical: "https://ubaidbinwaris.com",
  },
  openGraph: {
    title: "Ubaid Bin Waris | AI Systems Engineer & Infrastructure Specialist",
    description:
      "Production AI Systems Engineer specializing in Voice AI, autonomous AI agents, high-concurrency Redis session managers, and Linux cloud infrastructure.",
    url: "https://ubaidbinwaris.com",
    type: "website",
    images: [
      {
        url: "https://ubaidbinwaris.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ubaid Bin Waris - AI Systems Engineer & Infrastructure Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubaid Bin Waris | AI Systems Engineer & Infrastructure Specialist",
    description:
      "Production AI Systems Engineer specializing in Voice AI, autonomous AI agents, high-concurrency Redis session managers, and Linux cloud infrastructure.",
    images: ["https://ubaidbinwaris.com/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center font-code justify-between relative">
        <Navbar />
        <Hero />
        <CurrentlyBuilding />
        <Services />
        <ArchitectureSection />
        <ProjectSection />
        <About />
        <Experience />
        <FAQSection />
        <Contact />
      </main>
    </>
  );
}
