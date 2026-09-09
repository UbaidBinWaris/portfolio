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
import { pageMetadata, jsonLd } from "./lib/metadata";
import { site } from "./data/site";

export const metadata = {
  ...pageMetadata(site.role, site.description, "/"),
  title: { absolute: `${site.role} | ${site.name}` },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": `${site.url}/#profile`,
            url: site.url,
            name: site.name,
            mainEntity: { "@id": `${site.url}/#person` },
          }),
        }}
      />
      <main
        id="main-content"
        className="flex min-h-screen w-full flex-col items-center font-code justify-between relative"
      >
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
