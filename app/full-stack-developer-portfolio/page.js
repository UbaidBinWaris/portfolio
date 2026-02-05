import { Navbar } from "../components/Navbar";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Link from "next/link";

export const metadata = {
  title: "Full Stack Developer Portfolio | MERN Stack Expert - Ubaid Bin Waris",
  description: "View the full stack developer portfolio of Ubaid Bin Waris. Showcasing real-world MERN stack projects, React & Next.js applications, and scalable web solutions. 3+ years of professional experience.",
  keywords: [
    "full stack developer portfolio",
    "mern stack portfolio",
    "react developer portfolio",
    "nextjs portfolio",
    "full stack projects",
    "web developer portfolio",
    "pakistan developer portfolio",
    "hire full stack developer"
  ],
  alternates: {
    canonical: "https://uabidbinwaris.dev/full-stack-developer-portfolio",
  },
  openGraph: {
    title: "Full Stack Developer Portfolio | Ubaid Bin Waris",
    description: "Professional full stack developer portfolio showcasing MERN stack projects, React & Next.js applications, and real-world web solutions.",
    url: "https://uabidbinwaris.dev/full-stack-developer-portfolio",
    type: "website",
    images: [
      {
        url: "https://uabidbinwaris.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Full Stack Developer Portfolio - Ubaid Bin Waris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer Portfolio | Ubaid Bin Waris",
    description: "Professional full stack developer portfolio showcasing MERN stack projects and real-world web solutions.",
    images: ["https://uabidbinwaris.dev/og-image.jpg"],
  },
};

export default function FullStackDeveloperPortfolio() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A1930] text-white pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#63B8B2]">
              Full Stack Developer Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Building Scalable Web Applications with Modern Technologies
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Specializing in MERN Stack, Next.js, React, Node.js & Cloud Deployment
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="#projects"
                className="bg-[#63B8B2] hover:bg-[#4a9490] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Projects
              </Link>
              <a
                href="#contact"
                className="border-2 border-[#63B8B2] hover:bg-[#63B8B2] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Hire Me
              </a>
            </div>
          </header>

          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              About This Portfolio
            </h2>
            <div className="bg-[#0F2744] p-8 rounded-lg border border-[#1a3a5c]">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm <strong className="text-white">Ubaid Bin Waris</strong>, a Full Stack Developer from Pakistan with 3+ years of experience building production-ready web applications. This portfolio showcases my expertise in modern web development, from responsive frontends to scalable backend systems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in the <strong className="text-[#63B8B2]">MERN stack</strong> (MongoDB, Express.js, React, Node.js) and <strong className="text-[#63B8B2]">Next.js</strong> framework, creating everything from e-commerce platforms to SaaS applications. My projects demonstrate real-world problem-solving, clean code architecture, and performance optimization.
              </p>
            </div>
          </section>

          {/* Skills Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              Technical Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-4 text-[#63B8B2]">Frontend Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ React.js & Next.js</li>
                  <li>✓ TypeScript & JavaScript (ES6+)</li>
                  <li>✓ Tailwind CSS & CSS-in-JS</li>
                  <li>✓ Responsive & Mobile-First Design</li>
                  <li>✓ State Management (Redux, Zustand)</li>
                  <li>✓ Framer Motion & Animations</li>
                </ul>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-4 text-[#63B8B2]">Backend Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Node.js & Express.js</li>
                  <li>✓ RESTful APIs & GraphQL</li>
                  <li>✓ MongoDB & Mongoose</li>
                  <li>✓ PostgreSQL & Prisma</li>
                  <li>✓ Authentication (JWT, OAuth)</li>
                  <li>✓ Real-time Features (Socket.io)</li>
                </ul>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <h3 className="text-xl font-semibold mb-4 text-[#63B8B2]">DevOps & Tools</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Git & GitHub</li>
                  <li>✓ Vercel & AWS Deployment</li>
                  <li>✓ Docker & Containerization</li>
                  <li>✓ CI/CD Pipelines</li>
                  <li>✓ Performance Optimization</li>
                  <li>✓ SEO & Web Analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Project Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              Types of Projects I Build
            </h2>
            <div className="space-y-6">
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c] hover:border-[#63B8B2] transition-colors">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🛒</span> E-Commerce Platforms
                </h3>
                <p className="text-gray-300">
                  Full-featured online stores with product catalogs, shopping carts, payment integration (Stripe, PayPal), order management, and admin dashboards.
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c] hover:border-[#63B8B2] transition-colors">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">💼</span> SaaS Applications
                </h3>
                <p className="text-gray-300">
                  Multi-tenant SaaS platforms with user authentication, role-based access control, subscription management, and analytics dashboards.
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c] hover:border-[#63B8B2] transition-colors">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎨</span> Portfolio & Marketing Sites
                </h3>
                <p className="text-gray-300">
                  SEO-optimized, high-performance websites with modern UI/UX, animations, contact forms, and content management systems (CMS integration).
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c] hover:border-[#63B8B2] transition-colors">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📱</span> Social Media & Community Platforms
                </h3>
                <p className="text-gray-300">
                  Social networking features including user profiles, posts, comments, likes, real-time messaging, and notification systems.
                </p>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c] hover:border-[#63B8B2] transition-colors">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📊</span> Admin Dashboards & Analytics
                </h3>
                <p className="text-gray-300">
                  Data visualization dashboards with charts, tables, filters, and real-time data updates. Custom admin panels for content and user management.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Showcase */}
          <section id="projects" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              Featured Projects
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Below are some of my recent projects demonstrating full-stack development skills:
            </p>
            <Experience />
            <div className="text-center mt-8">
              <Link
                href="/#experience"
                className="inline-block bg-[#63B8B2] hover:bg-[#4a9490] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </section>

          {/* Development Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              My Development Process
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#63B8B2]">1</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Requirements & Planning</h4>
                    <p className="text-gray-300">
                      Understanding project goals, defining technical requirements, creating architecture diagrams, and planning sprints.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#63B8B2]">2</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Design & Prototyping</h4>
                    <p className="text-gray-300">
                      Creating wireframes, mockups, and interactive prototypes to visualize the final product before development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#63B8B2]">3</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Development & Testing</h4>
                    <p className="text-gray-300">
                      Writing clean, maintainable code following best practices. Unit testing, integration testing, and code reviews.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0F2744] p-6 rounded-lg border border-[#1a3a5c]">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#63B8B2]">4</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Deployment & Maintenance</h4>
                    <p className="text-gray-300">
                      CI/CD pipeline setup, cloud deployment, performance monitoring, and ongoing support with regular updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Makes Me Different */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#63B8B2]">
              What Sets My Portfolio Apart
            </h2>
            <div className="bg-[#0F2744] p-8 rounded-lg border border-[#1a3a5c]">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-[#63B8B2]">✨ Production-Ready Code</h4>
                  <p className="text-gray-300">
                    All projects are built with scalability, security, and maintainability in mind. Not just demo projects - real applications handling actual users and data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-[#63B8B2]">⚡ Performance Optimized</h4>
                  <p className="text-gray-300">
                    Achieving 90+ Lighthouse scores through image optimization, code splitting, lazy loading, caching, and CDN integration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-[#63B8B2]">🔍 SEO & Accessibility</h4>
                  <p className="text-gray-300">
                    Built with SEO best practices from the ground up. Semantic HTML, meta tags, structured data, and WCAG accessibility standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-[#63B8B2]">📱 Responsive Design</h4>
                  <p className="text-gray-300">
                    Mobile-first approach ensuring perfect user experience across all devices - from smartphones to 4K displays.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-[#63B8B2] to-[#4a9490] p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Impressed by My Work?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how I can help bring your project to life with the same quality and attention to detail.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#contact"
                className="bg-white hover:bg-gray-100 text-[#0A1930] px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
              >
                Hire Me for Your Project
              </a>
              <Link
                href="/"
                className="border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
              >
                Back to Homepage
              </Link>
            </div>
          </section>
        </div>

        <Contact />
      </main>
    </>
  );
}
