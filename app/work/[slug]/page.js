import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { ProjectCTA } from "../../components/ServicePage";
import ServiceVisual from "../../components/ServiceVisual";
import { work, getWork } from "../../data/workData";
import { getService } from "../../data/servicesData";
import { site } from "../../data/site";
import { pageMetadata, jsonLd, breadcrumbSchema } from "../../lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const project = getWork((await params).slug);
  if (!project) notFound();
  return pageMetadata(project.title, project.summary, `/work/${project.slug}`);
}
export default async function WorkPage({ params }) {
  const project = getWork((await params).slug);
  if (!project) notFound();
  const service = getService(project.service);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${site.url}/work/${project.slug}#article`,
        headline: project.title,
        description: project.summary,
        url: `${site.url}/work/${project.slug}`,
        author: { "@id": `${site.url}/#person` },
        mainEntityOfPage: `${site.url}/work/${project.slug}`,
      },
      breadcrumbSchema([
        ["Home", "/"],
        ["Portfolio", "/full-stack-developer-portfolio"],
        [project.title, `/work/${project.slug}`],
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
            <Link href="/full-stack-developer-portfolio">Work</Link>
            <span>/</span>
            <span aria-current="page">{project.category}</span>
          </nav>
          <header className="detail-hero">
            <div className="detail-hero-copy">
              <p className="eyebrow">
                PRIVATE PROJECT / ARCHITECTURE WALKTHROUGH
              </p>
              <h1>{project.title}</h1>
              <p className="hero-description">{project.summary}</p>
              <p className="hero-byline">
                Engineering notes by <Link href="/#about">Ubaid Bin Waris</Link>
              </p>
              <div className="usecase-tags">
                {project.stack.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
            <ServiceVisual service={service} />
          </header>
          <p className="work-note">
            The repository is private or client-owned. This is a high-level
            architecture walkthrough; source code and confidential project
            details are not published.
          </p>
          <article className="work-copy">
            <section>
              <p className="eyebrow">01 / THE PROBLEM</p>
              <h2>What the system needs to solve</h2>
              <p>{project.problem}</p>
            </section>
            <section>
              <p className="eyebrow">02 / THE APPROACH</p>
              <h2>How the pieces fit together</h2>
              <ol>
                {project.approach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
            <section>
              <p className="eyebrow">03 / THE TRADEOFFS</p>
              <h2>Engineering is a set of choices</h2>
              <p>{project.tradeoff}</p>
            </section>
            <section>
              <p className="eyebrow">04 / VALIDATION CONSIDERATIONS</p>
              <h2>What to test before relying on it</h2>
              <p>{project.validation}</p>
            </section>
            <Link className="primary-link" href={`/${service.slug}`}>
              Explore {service.shortTitle} services ↗
            </Link>
          </article>
          <ProjectCTA subject={project.title} />
        </div>
      </main>
    </>
  );
}
