import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./detail-pages.css";
import ClarityAnalytics from "./components/ClarityAnalytics";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";
import { aggregateSchemas } from "./lib/seo.config";
import { site } from "./data/site";
import { jsonLd, pageMetadata } from "./lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
// Developer typeface for labels, tags, navigation and code. Body copy stays in Geist.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata = {
  ...pageMetadata(site.role, site.description, "/"),
  metadataBase: new URL(site.url),
  title: {
    default: `${site.role} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  verification: { google: "vN8kWYvZe-GTgsgohr-LWu7PF0wEXlx5CWppxpFHD-I" },
};
export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {site.profiles.map((url) => (
          <link key={url} rel="me" href={url} />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(aggregateSchemas) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {process.env.VERCEL_ENV === "production" && (
          <>
            <ClarityAnalytics />
            <GoogleAnalytics />
          </>
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}
