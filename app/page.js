import Image from "next/image";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center font-code justify-between relative">
      <div className="relative">

      <Navbar />
      <Hero />
      <div className="absolute bottom-0 w-full bg-gradient-to-t h-screen from-[#0A1930] to-transparent"></div>
      </div>

      <div className="bg-[#0A1930] h-screen"></div>
    </main>
  );
}
