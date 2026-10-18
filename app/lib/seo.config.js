import { site } from "../data/site";
export const personSchema = {
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  description: site.description,
  image: `${site.url}/me.jpeg`,
  sameAs: site.profiles,
  email: site.email,
  homeLocation: { "@type": "Place", name: site.location },
  worksFor: {
    "@type": "Organization",
    name: "Gixiai",
    url: "https://www.gixiai.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology",
    alternateName: "SZABIST",
  },
  knowsAbout: [
    "AI agents",
    "Voice AI",
    "Speech-to-text",
    "Call center software",
    "Retrieval-augmented generation",
    "Workflow automation",
    "n8n",
    "Node.js",
    "Next.js",
    "React",
    "Electron",
    "Playwright",
    "Spring Boot",
    "AWS",
    "Linux infrastructure",
  ],
};
export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: "en",
  publisher: { "@id": `${site.url}/#person` },
};
export const aggregateSchemas = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema],
};
