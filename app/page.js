import Image from "next/image";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Experience from "./components/Experience";
import { ReviewSection } from "./components/ReviewSection";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center font-code justify-between relative">
      <div className="relative overflow-hidden w-full h-screen">

      <Navbar />
      <Hero />
      <div className="absolute bottom-0 w-full bg-gradient-to-t h-screen from-[#0A1930] to-transparent"></div>
      </div>
      <Experience />
      <ReviewSection />
      {/* Add more components like Projects, Contact, etc. */}
      
    </main>
  );
}
