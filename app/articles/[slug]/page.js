import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { ProjectCTA } from "../../components/ServicePage";
import { ArticleBody } from "../../lib/articleBody";
import { publishedArticles, getArticle, formatDate } from "../../data/articlesData";
import { site } from "../../data/site";
import { pageMetadata, jsonLd, breadcrumbSchema } from "../../lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return publishedArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const meta = pageMetadata(
    article.seoTitle ?? article.title,
    article.description,
    `/articles/${article.slug}`,
    `/articles/${article.slug}/opengraph-image`,
  );
  return {
    ...meta,
    alternates: { ...meta.alternates, types: { "application/rss+xml": `${site.url}/feed.xml` } },
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: article.published,
      ...(article.updated && { modifiedTime: article.updated }),
      authors: [site.url],
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const url = `${site.url}/articles/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description,
        url,
        mainEntityOfPage: url,
        image: `${url}/opengraph-image`,
        datePublished: article.published,
        dateModified: article.updated ?? article.published,
        keywords: article.tags.join(", "),
        wordCount: article.body.trim().split(/\s+/).length,
        author: { "@id": `${site.url}/#person` },
        publisher: { "@id": `${site.url}/#person` },
        isPartOf: { "@id": `${site.url}/articles#blog` },
      },
      breadcrumbSchema([
        ["Home", "/"],
        ["Articles", "/articles"],
        [article.title, `/articles/${article.slug}`],
      ]),
    ],
  };
  const more = publishedArticles.filter((a) => a.slug !== article.slug).slice(0, 3);
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
            <Link href="/articles">Articles</Link>
            <span>/</span>
            <span aria-current="page">{article.tags[0]}</span>
          </nav>
          <article className="article">
            <header className="article-header">
              <p className="eyebrow">
                <time dateTime={article.published}>{formatDate(article.published)}</time>
                {" · "}
                {article.minutes} min read
              </p>
              <h1>{article.title}</h1>
              <p className="hero-description">{article.description}</p>
              <p className="hero-byline">
                Written by <Link href="/#about">Ubaid Bin Waris</Link>
              </p>
            </header>
            <div className="work-copy article-body">
              <ArticleBody source={article.body} />
            </div>
            {article.linkedin && (
              <p className="article-discuss">
                Join the discussion on{" "}
                <a href={article.linkedin} target="_blank" rel="noopener">
                  LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </p>
            )}
          </article>
          <ProjectCTA subject={article.title} />
          {more.length > 0 && (
            <section className="related-section" aria-label="More articles">
              <div className="related-heading">
                <p className="eyebrow">MORE ARTICLES</p>
                <Link href="/articles">
                  All articles <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="related-grid">
                {more.map((a) => (
                  <Link key={a.slug} href={`/articles/${a.slug}`}>
                    <span>{formatDate(a.published)}</span>
                    <h3>
                      {a.title}
                      <ArrowUpRight size={22} />
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
