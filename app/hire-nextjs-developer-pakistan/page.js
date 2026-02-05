import { Navbar } from "../components/Navbar";
import Contact from "../components/Contact";
import Link from "next/link";

export const metadata = {
  title: "Hire Next.js Developer Pakistan | Expert React & Next.js Developer Available",
  description: "Looking to hire a Next.js developer from Pakistan? Ubaid Bin Waris offers expert Next.js development services. 3+ years experience building scalable web apps with React, Next.js, Node.js & MongoDB. Available for hire.",
  keywords: [
    "hire nextjs developer pakistan",
    "nextjs developer for hire",
    "pakistan nextjs developer",
    "react developer pakistan",
    "hire react developer",
    "nextjs expert pakistan",
    "full stack developer pakistan",
    "nextjs freelancer pakistan"
  ],
  alternates: {
    canonical: "https://uabidbinwaris.dev/hire-nextjs-developer-pakistan",
  },
  openGraph: {
    title: "Hire Next.js Developer Pakistan | Ubaid Bin Waris",
    description: "Expert Next.js developer from Pakistan available for hire. Specializing in React, Next.js, Node.js & MongoDB. Build fast, scalable web applications.",
    url: "https://uabidbinwaris.dev/hire-nextjs-developer-pakistan",
    type: "website",
    images: [
      {
        url: "https://uabidbinwaris.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hire Next.js Developer Pakistan - Ubaid Bin Waris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Next.js Developer Pakistan | Ubaid Bin Waris",
    description: "Expert Next.js developer from Pakistan available for hire. Build fast, scalable web applications.",
    images: ["https://uabidbinwaris.dev/og-image.jpg"],
  },
};

export default function HireNextJsDeveloperPakistan() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A1930] text-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#63B8B2]">
              Hire Expert Next.js Developer from Pakistan
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Next.js developer with 3+ years of experience building fast, scalable web applications. Available for remote work worldwide.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#contact"
                className="bg-[#63B8B2] hover:bg-[#4a9490] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Hire Me Now
              </a>
              <Link
                href="/#experience"
                className="border-2 border-[#63B8B2] hover:bg-[#63B8B2] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </header>

          {/* Why Hire Me Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              Why Hire a Next.js Developer from Pakistan?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-3 text-[#63B8B2]">💰 Cost-Effective</h3>
                <p className="text-gray-300">
                  Get world-class Next.js development at competitive rates without compromising on quality. Save 40-60% compared to US/EU developers.
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-3 text-[#63B8B2]">🌍 Global Experience</h3>
                <p className="text-gray-300">
                  Worked with international clients across US, UK, and Europe. Fluent in English with excellent communication skills.
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-3 text-[#63B8B2]">⚡ Fast Delivery</h3>
                <p className="text-gray-300">
                  Efficient project delivery with agile methodology. Clear milestones, regular updates, and on-time completion guaranteed.
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-3 text-[#63B8B2]">🛠️ Full Stack Expertise</h3>
                <p className="text-gray-300">
                  Not just frontend - complete full-stack Next.js solutions with Node.js, MongoDB, PostgreSQL, and modern cloud deployment.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              Next.js Development Services I Offer
            </h2>
            <div className="space-y-6">
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-3">⚙️ Server-Side Rendering (SSR) & Static Site Generation (SSG)</h3>
                <p className="text-gray-300">
                  Build lightning-fast websites with Next.js SSR and SSG for optimal SEO and performance. Perfect for e-commerce, blogs, and marketing sites.
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-3">🎨 Custom Next.js Web Applications</h3>
                <p className="text-gray-300">
                  Full-featured SaaS platforms, admin dashboards, and complex web applications built with Next.js, React, and modern UI frameworks (Tailwind CSS, Material-UI).
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-3">🔗 API Development & Integration</h3>
                <p className="text-gray-300">
                  RESTful and GraphQL APIs with Next.js API routes. Third-party API integrations including payment gateways, social auth, and cloud services.
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-3">🚀 Performance Optimization</h3>
                <p className="text-gray-300">
                  Image optimization, code splitting, lazy loading, and caching strategies to achieve 90+ Lighthouse scores and sub-second load times.
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-3">📱 Responsive & Mobile-First Design</h3>
                <p className="text-gray-300">
                  Pixel-perfect, mobile-responsive designs that work flawlessly across all devices and screen sizes.
                </p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              My Next.js Tech Stack
            </h2>
            <div className="bg-[#0F2744] p-8 rounded-lg border border-[#1a3a5c]">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-[#63B8B2]">Frontend</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Next.js 14/15</li>
                    <li>✓ React 18+</li>
                    <li>✓ TypeScript</li>
                    <li>✓ Tailwind CSS</li>
                    <li>✓ Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-[#63B8B2]">Backend</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Node.js</li>
                    <li>✓ Express.js</li>
                    <li>✓ MongoDB</li>
                    <li>✓ PostgreSQL</li>
                    <li>✓ GraphQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-[#63B8B2]">DevOps</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Vercel</li>
                    <li>✓ AWS</li>
                    <li>✓ Docker</li>
                    <li>✓ GitHub Actions</li>
                    <li>✓ CI/CD Pipelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              How to Hire Me
            </h2>
            <div className="bg-[#0F2744] p-8 rounded-lg border border-[#1a3a5c]">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-3xl font-bold text-[#63B8B2]">1</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Initial Consultation (Free)</h4>
                    <p className="text-gray-300">
                      Let's discuss your project requirements, timeline, and budget. I'll provide a detailed proposal within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl font-bold text-[#63B8B2]">2</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Project Agreement</h4>
                    <p className="text-gray-300">
                      Once we agree on scope and pricing, we'll sign a contract and set up project milestones for transparent progress tracking.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-3xl font-bold text-[#63B8B2]">3</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Development & Delivery</h4>
                    <p className="text-gray-300">
                      Regular updates, weekly demos, and continuous communication throughout development. Final delivery with documentation and training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <summary className="font-semibold cursor-pointer text-lg">
                  What are your rates for Next.js development?
                </summary>
                <p className="mt-4 text-gray-300">
                  My rates vary based on project complexity and duration. Hourly rates start at $25-40/hour for freelance projects. For fixed-price projects, I provide detailed quotes after understanding requirements. Contact me for a custom quote.
                </p>
              </details>
              <details className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <summary className="font-semibold cursor-pointer text-lg">
                  Do you work with clients worldwide?
                </summary>
                <p className="mt-4 text-gray-300">
                  Yes! I work remotely with clients across US, UK, Europe, Middle East, and Asia. I'm flexible with time zones and use tools like Slack, Zoom, and GitHub for seamless collaboration.
                </p>
              </details>
              <details className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <summary className="font-semibold cursor-pointer text-lg">
                  What is the typical timeline for a Next.js project?
                </summary>
                <p className="mt-4 text-gray-300">
                  Timelines depend on scope: Landing pages take 1-2 weeks, medium-complexity apps 4-8 weeks, and large-scale SaaS platforms 12+ weeks. I provide detailed timelines during consultation.
                </p>
              </details>
              <details className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <summary className="font-semibold cursor-pointer text-lg">
                  Do you provide ongoing support after project completion?
                </summary>
                <p className="mt-4 text-gray-300">
                  Absolutely! I offer maintenance packages including bug fixes, feature updates, performance monitoring, and technical support. All projects include 30 days of free post-launch support.
                </p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-[#63B8B2] to-[#4a9490] p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Start Your Next.js Project?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's build something amazing together. Get in touch for a free consultation.
            </p>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-[#0A1930] px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              Contact Me Today
            </a>
          </section>
        </div>

        <Contact />
      </main>
    </>
  );
}
