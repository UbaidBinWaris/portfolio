import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { ProjectCTA } from "../components/ServicePage";
import { work } from "../data/workData";
import { site } from "../data/site";
import { pageMetadata, jsonLd, breadcrumbSchema } from "../lib/metadata";
export const metadata = pageMetadata(
  "Full-Stack Engineering Portfolio",
  "Explore Ubaid Bin Waris’s private project architecture: voice AI, backend systems, n8n automation and local model infrastructure.",
  "/full-stack-developer-portfolio",
);
export default function Portfolio() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${site.url}/full-stack-developer-portfolio#webpage`,
        url: `${site.url}/full-stack-developer-portfolio`,
        name: "Full-Stack Engineering Portfolio",
        author: { "@id": `${site.url}/#person` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: work.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.title,
            url: `${site.url}/work/${item.slug}`,
          })),
        },
      },
      breadcrumbSchema([
        ["Home", "/"],
        ["Portfolio", "/full-stack-developer-portfolio"],
      ]),
    ],
  };
  return (
    <>
      <Navbar />
      <main id="main-content" className="detail-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
        />
        <div className="detail-container">
          <nav className="detail-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Selected work</span>
          </nav>
          <header className="portfolio-hero">
            <p className="eyebrow">SELECTED WORK / ENGINEERING NOTES</p>
            <h1>
              Behind the interface.
              <br />
              <span>Inside the system.</span>
            </h1>
            <p>
              A closer look at the systems I work on: the problems, the
              architecture and the decisions that connect an idea to useful
              software.
            </p>
          </header>
          <p className="work-note">
            These projects include private repositories and client-owned work.
            The walkthroughs explain the architecture without publishing source
            code, client identities or confidential implementation details.
          </p>
          <section className="work-grid" aria-label="Project walkthroughs">
            {work.map((project, i) => (
              <article className="work-card" key={project.slug}>
                <p className="eyebrow">
                  0{i + 1} / {project.category}
                </p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="usecase-tags">
                  {project.stack.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <Link className="quiet-link" href={`/work/${project.slug}`}>
                  Explore the architecture <ArrowUpRight size={18} />
                </Link>
              </article>
            ))}
          </section>
          <ProjectCTA subject="an engineering project" />
        </div>
      </main>
    </>
  );
}
