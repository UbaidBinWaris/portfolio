import Image from "next/image";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Experience from "./components/Experience";
// import { ReviewSection } from "./components/ReviewSection";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main id="home" className="flex min-h-screen w-full flex-col items-center font-code justify-between relative">
      <div className="relative overflow-hidden w-full min-h-screen">
        <Navbar />
        <Hero />
        <div className="absolute bottom-0 w-full bg-gradient-to-t h-screen from-[#0A1930] to-transparent"></div>
      </div>
      <Experience />
      <Contact />
      {/* <ReviewSection /> */}
      {/* Add more components like Projects, Contact, etc. */}
    </main>
  );
}
