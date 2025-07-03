import Image from "next/image";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center font-code justify-between">
      <Navbar />
      <Hero />
    </main>
  );
}
