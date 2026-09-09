import { site } from "../data/site";

export const absoluteUrl = (path = "") => new URL(path || "/", site.url).href;
export const jsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

export function pageMetadata(
  title,
  description,
  path,
  image = "/og-image.jpg",
) {
  const branded = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: branded,
      description,
      url: absoluteUrl(path),
      type: "website",
      siteName: site.name,
      locale: "en_US",
      images: [
        { url: absoluteUrl(image), width: 1200, height: 630, alt: branded },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}
