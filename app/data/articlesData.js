// Articles hosted on ubaidbinwaris.com first, then shared elsewhere with a canonical
// URL pointing here. `body` uses a small Markdown subset (see lib/articleBody.js).
// An article with an empty body is a draft: no page, no sitemap entry, no nav link.
export const articles = [
  {
    slug: "aws-services-you-actually-need",
    title: "The AWS Services You Actually Need (And the Ones Draining Your Budget)",
    seoTitle: "The AWS Services Startups Actually Need",
    description:
      "After auditing the AWS bills of 20+ startups, here is where the money leaks and which services a typical SaaS or e-commerce team actually needs.",
    published: "2025-12-09",
    tags: ["AWS", "Cloud cost", "DevOps", "Startups"],
    linkedin:
      "https://www.linkedin.com/posts/ubaidbinwaris_the-aws-services-you-actually-need-and-the-activity-7403884078317338624-fwNG",
    body: ``,
  },
  {
    slug: "ai-coding-agents-developer-judgment",
    title: "AI Coding Agents Are Making Developers Faster. Are They Making Them Better?",
    seoTitle: "AI Coding Agents and Engineering Judgment",
    description:
      "AI agents can write more code than ever. The real question is how much engineering judgment the humans reviewing it keep.",
    // TODO: set to the LinkedIn publish date when the text is added.
    published: "",
    tags: ["AI", "Software engineering", "Developer tools"],
    linkedin: "",
    body: ``,
  },
];

const words = (text) => text.trim().split(/\s+/).filter(Boolean).length;

export const publishedArticles = articles
  .filter((a) => a.body.trim() && a.published)
  .map((a) => ({ ...a, minutes: Math.max(1, Math.round(words(a.body) / 220)) }))
  .sort((a, b) => b.published.localeCompare(a.published));

export const getArticle = (slug) => publishedArticles.find((a) => a.slug === slug);

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
