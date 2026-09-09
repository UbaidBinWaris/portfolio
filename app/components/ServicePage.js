import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, Plus } from "lucide-react";
import { Navbar } from "./Navbar";
import ServiceVisual from "./ServiceVisual";
import { services } from "../data/servicesData";
import { getWork } from "../data/workData";
import { site } from "../data/site";
import { absoluteUrl, breadcrumbSchema, jsonLd } from "../lib/metadata";

export function ProjectCTA({ subject = "a project" }) {
  return (
    <section id="contact" className="detail-cta">
      <div>
        <p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p>
        <h2>
          Your next idea.
          <br />
          <span>Let’s make it work.</span>
        </h2>
        <p>
          Tell me what you’re building, what’s getting in the way, and where you
          want to go.
        </p>
      </div>
      <div className="cta-actions">
        <a
          className="primary-link"
          href={`mailto:${site.email}?subject=${encodeURIComponent(`Let's discuss ${subject}`)}`}
        >
          Start a conversation <ArrowUpRight size={18} />
        </a>
        <a
          className="quiet-link"
          href={site.profiles[2]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Prefer Upwork? Find me there <ArrowUpRight size={14} />
        </a>
        <span className="availability">
          <i /> Islamabad, PK · Working worldwide
        </span>
      </div>
    </section>
  );
}

export default function ServicePage({ service }) {
  const project = getWork(service.project);
  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);
  const url = absoluteUrl(`/${service.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: service.title,
        description: service.description,
        isPartOf: { "@id": `${site.url}/#website` },
        mainEntity: { "@id": `${url}#service` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        description: service.answer,
        url,
        serviceType: service.category,
        provider: { "@id": `${site.url}/#person` },
        areaServed: "Worldwide",
      },
      breadcrumbSchema([
        ["Home", "/"],
        ["Services", "/#services"],
        [service.shortTitle, `/${service.slug}`],
      ]),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <Navbar />
      <main id="main-content" className="detail-page">
        <div className="detail-container">
          <nav className="detail-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#services">Services</Link>
            <span>/</span>
            <span aria-current="page">{service.shortTitle}</span>
          </nav>
          <header className="detail-hero">
            <div className="detail-hero-copy">
              <p className="eyebrow">
                <span className="status-dot" /> {service.number} /{" "}
                {service.category}
              </p>
              <h1>
                <span className="service-heading-label">{service.title}</span>
                {service.headline}
                <br />
                <em>{service.accent}</em>
              </h1>
              <p className="hero-description">{service.intro}</p>
              <div className="hero-actions">
                <a className="primary-link" href="#contact">
                  Discuss your project <ArrowUpRight size={18} />
                </a>
                <a className="quiet-link" href="#capabilities">
                  Explore the service <ArrowRight size={16} />
                </a>
              </div>
              <p className="hero-byline">
                Built with care by <Link href="/#about">Ubaid Bin Waris</Link>
                <span>Islamabad → Worldwide</span>
              </p>
            </div>
            <ServiceVisual service={service} />
          </header>
          <div className="stack-strip">
            <span>THE TOOLKIT</span>
            <ul>
              {service.stack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <section id="capabilities" className="detail-section">
            <div className="section-intro">
              <p className="eyebrow">01 / THE CAPABILITIES</p>
              <h2>
                Built for the way
                <br />
                <span>your business works.</span>
              </h2>
              <p>{service.answer}</p>
            </div>
            <div className="capability-grid">
              {service.capabilities.map((capability, i) => (
                <article key={capability.title} className="capability-card">
                  <span className="card-number">
                    0{i + 1}
                    <ArrowUpRight size={20} />
                  </span>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="scope-section">
            <div>
              <p className="eyebrow">02 / THE SCOPE</p>
              <h2>
                A clear scope.
                <br />
                <span>A useful handover.</span>
              </h2>
              <p>
                Every engagement starts with your constraints. We agree on the
                integrations, delivery milestones and operational ownership
                before the build.
              </p>
              <div className="usecase-tags">
                {service.useCases.map((useCase) => (
                  <span key={useCase}>{useCase}</span>
                ))}
              </div>
            </div>
            <div className="deliverables">
              <p className="eyebrow">WHAT YOU CAN EXPECT</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="scope-note">
                Scope-based proposal · Provider and hosting costs agreed
                separately
              </p>
            </div>
          </section>
          <section className="detail-section process-section">
            <div className="section-intro">
              <p className="eyebrow">03 / HOW WE WORK</p>
              <h2>
                From first conversation
                <br />
                <span>to a working system.</span>
              </h2>
            </div>
            <ol className="process-grid">
              {[
                [
                  "Understand",
                  "Map the workflow, constraints and what success should look like.",
                ],
                [
                  "Design",
                  "Agree on the architecture, scope and the decisions worth testing early.",
                ],
                [
                  "Build & validate",
                  "Deliver in reviewable increments and test the failure paths too.",
                ],
                [
                  "Launch & hand over",
                  "Deploy, document and agree on ongoing operational ownership.",
                ],
              ].map(([title, text], i) => (
                <li key={title}>
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </section>
          {project && (
            <section className="project-feature">
              <div className="project-art" aria-hidden="true">
                <span>ENGINEERING NOTES</span>
                <div>
                  {service.flow.slice(0, 3).map((step, i) => (
                    <div key={step}>
                      <b>0{i + 1}</b>
                      <span>{step}</span>
                      <ArrowRight size={18} />
                    </div>
                  ))}
                </div>
                <span>ARCHITECTURE / DECISIONS / TRADEOFFS</span>
              </div>
              <div className="project-feature-copy">
                <p className="eyebrow">04 / RELATED WORK</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <p className="privacy-note">
                  Private project · Source code is not publicly available
                </p>
                <Link className="quiet-link" href={`/work/${project.slug}`}>
                  Read the architecture walkthrough <ArrowUpRight size={18} />
                </Link>
              </div>
            </section>
          )}
          <section id="faq" className="detail-section faq-layout">
            <div className="section-intro">
              <p className="eyebrow">05 / A LITTLE CLARITY</p>
              <h2>
                Good questions.
                <br />
                <span>Straight answers.</span>
              </h2>
              <p>A few things you might want to know before we start.</p>
            </div>
            <div className="detail-faq">
              {service.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <Plus size={18} />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
          <ProjectCTA subject={service.shortTitle} />
          <section className="related-section">
            <div className="related-heading">
              <p className="eyebrow">CONNECTED CAPABILITIES</p>
              <Link href="/#services">
                All services <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  <span>
                    {item.number} / {item.category}
                  </span>
                  <h3>
                    {item.shortTitle}
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
