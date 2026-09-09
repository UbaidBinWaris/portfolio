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
  knowsAbout: [
    "AI agents",
    "Voice AI",
    "Workflow automation",
    "Node.js",
    "Next.js",
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
