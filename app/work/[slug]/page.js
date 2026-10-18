import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { ProjectCTA } from "../../components/ServicePage";
import ServiceVisual from "../../components/ServiceVisual";
import {
  work,
  getWork,
  isPrivate,
  projectStatus,
  relatedWork,
} from "../../data/workData";
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
  return pageMetadata(
    project.seoTitle ?? project.title,
    project.summary,
    `/work/${project.slug}`,
    `/work/${project.slug}/opengraph-image`,
  );
}

const pad = (n) => String(n).padStart(2, "0");

// The thing the case study is about: source code, a live product, or nothing public.
function projectEntity(project) {
  const repo = project.links?.find((l) => l.url.includes("github.com"));
  const live = project.links?.find((l) => !l.url.includes("github.com"));
  if (!repo && !live) return undefined;
  return {
    "@type": repo ? "SoftwareSourceCode" : "CreativeWork",
    name: project.title,
    url: (live ?? repo).url,
    ...(repo && { codeRepository: repo.url }),
    ...(project.license && {
      license: `https://spdx.org/licenses/${project.license}.html`,
    }),
    ...(project.started && { dateCreated: project.started }),
    keywords: project.stack.join(", "),
    creator: { "@id": `${site.url}/#person` },
    ...(project.organization && {
      sourceOrganization: { "@type": "Organization", ...project.organization },
    }),
  };
}

export default async function WorkPage({ params }) {
  const project = getWork((await params).slug);
  if (!project) notFound();
  const service = getService(project.service);
  const url = `${site.url}/work/${project.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: project.seoTitle ?? project.title,
        description: project.summary,
        url,
        image: `${url}/opengraph-image`,
        keywords: project.stack.join(", "),
        author: { "@id": `${site.url}/#person` },
        mainEntityOfPage: url,
        about: projectEntity(project),
      },
      breadcrumbSchema([
        ["Home", "/"],
        ["Portfolio", "/full-stack-developer-portfolio"],
        [project.title, `/work/${project.slug}`],
      ]),
    ],
  };
  const sections = [
    {
      label: "The problem",
      heading: "What the system needs to solve",
      text: project.problem,
    },
    {
      label: "The approach",
      heading: "How the pieces fit together",
      steps: project.approach,
    },
    project.highlights && {
      label: "Key features",
      heading: "What it does",
      items: project.highlights,
    },
    project.results && {
      label: "Results",
      heading: "What it delivered",
      items: project.results,
    },
    {
      label: "The tradeoffs",
      heading: "Engineering is a set of choices",
      text: project.tradeoff,
    },
    {
      label: "Validation considerations",
      heading: "What to test before relying on it",
      text: project.validation,
    },
  ].filter(Boolean);
  const meta = [project.period, project.organization?.name].filter(Boolean);
  const related = relatedWork(project);
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
                {isPrivate(project)
                  ? "PRIVATE PROJECT / ARCHITECTURE WALKTHROUGH"
                  : `${projectStatus(project)} / CASE STUDY`}
              </p>
              <h1>{project.title}</h1>
              <p className="hero-description">{project.summary}</p>
              <p className="hero-byline">
                {meta.length > 0 && `${meta.join(" · ")} · `}
                Built by <Link href="/#about">Ubaid Bin Waris</Link>
              </p>
              {project.links && (
                <div className="work-links">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      className="quiet-link"
                      href={link.url}
                      target="_blank"
                      rel="noopener"
                    >
                      {link.label} <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
              <div className="usecase-tags">
                {project.stack.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
            <ServiceVisual service={service} />
          </header>
          {isPrivate(project) && (
            <p className="work-note">
              The repository is private or client-owned. This is a high-level
              architecture walkthrough; source code and confidential project
              details are not published.
            </p>
          )}
          <article className="work-copy">
            {sections.map((section, i) => (
              <section key={section.label}>
                <p className="eyebrow">
                  {pad(i + 1)} / {section.label}
                </p>
                <h2>{section.heading}</h2>
                {section.text && <p>{section.text}</p>}
                {section.steps && (
                  <ol>
                    {section.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                )}
                {section.items && (
                  <ul className="work-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <Link className="primary-link" href={`/${service.slug}`}>
              Explore {service.shortTitle} services ↗
            </Link>
          </article>
          <ProjectCTA subject={project.title} />
          <section className="related-section" aria-label="More work">
            <div className="related-heading">
              <p className="eyebrow">MORE WORK</p>
              <Link href="/full-stack-developer-portfolio">
                All projects <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <Link key={item.slug} href={`/work/${item.slug}`}>
                  <span>
                    {item.category} / {projectStatus(item)}
                  </span>
                  <h3>
                    {item.title}
                    <ArrowUpRight size={22} />
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
