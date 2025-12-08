// Optional: Using next-seo DefaultSeo component
// This is an ALTERNATIVE approach if you want to use next-seo's components
// Currently, your app uses Next.js 15's built-in metadata API (which is preferred)

import { DefaultSeo } from 'next-seo';
import { defaultSEOConfig } from './seo.config';

/**
 * USAGE:
 * Import this component in your root layout and render it before your content
 * 
 * Example in app/layout.js:
 * import SEOComponent from './lib/SEOComponent';
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <SEOComponent />
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 */

export default function SEOComponent() {
  return <DefaultSeo {...defaultSEOConfig} />;
}

// For individual pages, you can use NextSeo component:
// import { NextSeo } from 'next-seo';
// 
// export default function AboutPage() {
//   return (
//     <>
//       <NextSeo
//         title="About Me"
//         description="Learn more about Ubaid Bin Waris"
//         canonical="https://uabidbinwaris.dev/about"
//       />
//       <main>Your content</main>
//     </>
//   );
// }

// For blog posts with article-specific metadata:
// import { ArticleJsonLd, NextSeo } from 'next-seo';
//
// export default function BlogPost({ post }) {
//   return (
//     <>
//       <NextSeo
//         title={post.title}
//         description={post.excerpt}
//         canonical={post.url}
//         openGraph={{
//           type: 'article',
//           article: {
//             publishedTime: post.date,
//             authors: [post.author],
//             tags: post.tags,
//           },
//           images: [
//             {
//               url: post.image,
//               width: 1200,
//               height: 630,
//               alt: post.title,
//             },
//           ],
//         }}
//       />
//       <ArticleJsonLd
//         type="BlogPosting"
//         url={post.url}
//         title={post.title}
//         images={[post.image]}
//         datePublished={post.date}
//         authorName={post.author}
//         description={post.excerpt}
//       />
//       <article>{/* Your post content */}</article>
//     </>
//   );
// }

/**
 * NOTE: Next.js 15 recommends using the built-in Metadata API over next-seo
 * Your current implementation with metadata export is the preferred approach
 * This file is provided as a reference if you need next-seo features
 * 
 * Benefits of built-in Metadata API:
 * - Better TypeScript support
 * - Smaller bundle size
 * - Automatic optimization
 * - Native to Next.js
 * 
 * Benefits of next-seo:
 * - More familiar API for some developers
 * - Additional helper components
 * - Extensive documentation
 * - Community support
 */
