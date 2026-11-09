import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { publishedArticles, formatDate } from "../data/articlesData";
import { site } from "../data/site";
import { pageMetadata, jsonLd, breadcrumbSchema } from "../lib/metadata";

const base = pageMetadata(
  "Engineering Articles",
  "Articles by Ubaid Bin Waris on cloud costs, AI engineering, backend systems and shipping software to production.",
  "/articles",
);
export const metadata = {
  ...base,
  alternates: { ...base.alternates, types: { "application/rss+xml": `${site.url}/feed.xml` } },
};

export default function ArticlesIndex() {
  // No published articles yet: no thin, empty index page.
  if (!publishedArticles.length) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${site.url}/articles#blog`,
        url: `${site.url}/articles`,
        name: "Engineering Articles by Ubaid Bin Waris",
        author: { "@id": `${site.url}/#person` },
        blogPost: publishedArticles.map((a) => ({
          "@type": "BlogPosting",
          headline: a.title,
          url: `${site.url}/articles/${a.slug}`,
          datePublished: a.published,
        })),
      },
      breadcrumbSchema([
        ["Home", "/"],
        ["Articles", "/articles"],
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
            <span aria-current="page">Articles</span>
          </nav>
          <header className="portfolio-hero">
            <p className="eyebrow">ARTICLES / ENGINEERING NOTES</p>
            <h1>
              Notes from
              <br />
              <span>shipping software.</span>
            </h1>
            <p>
              What I learn building and running production systems: cloud costs,
              AI engineering, backends and the decisions behind them.
            </p>
          </header>
          <section className="work-grid" aria-label="Articles">
            {publishedArticles.map((a) => (
              <article className="work-card" key={a.slug}>
                <p className="eyebrow">
                  {formatDate(a.published)} · {a.minutes} min read
                </p>
                <h2>{a.title}</h2>
                <p>{a.description}</p>
                <div className="usecase-tags">
                  {a.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <Link className="quiet-link" href={`/articles/${a.slug}`}>
                  Read the article <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
