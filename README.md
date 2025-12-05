# Ubaid Bin Waris - Professional Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**Full Stack Engineer | React & Next.js Specialist | DevOps & Cloud (AWS) | AI & n8n Automation**

[![Website](https://img.shields.io/badge/Website-uabidbinwaris.dev-blue?style=for-the-badge&logo=vercel)](https://uabidbinwaris.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ubaidbinwaris)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/UbaidBinWaris)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/ubaidbinwaris)

</div>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [How I Built This](#how-i-built-this)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone & Run Locally](#clone--run-locally)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [SEO & Performance](#seo--performance)
- [IndexNow Integration](#indexnow-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

A high-performance, SEO-optimized portfolio website built with the latest web technologies. This portfolio showcases my expertise in full-stack development, cloud architecture, DevOps practices, and modern web technologies. Designed with a focus on performance, accessibility, and user experience.

**Key Highlights:**
- Built with Next.js 15.3 + React 19.2 + Tailwind CSS 4
- Turbopack-powered development for lightning-fast builds
- Advanced animations with Framer Motion & GSAP
- Integrated analytics (Microsoft Clarity + Google Analytics)
- SEO-optimized with IndexNow real-time indexing
- Progressive Web App (PWA) ready
- WCAG 2.1 accessibility compliant
- Deployed on Vercel with edge optimization

**Live Site**: [https://uabidbinwaris.dev](https://uabidbinwaris.dev)

---

## Tech Stack

### Core Technologies
- **[Next.js 15.3+](https://nextjs.org/)** - React framework with App Router, Server Components, and Turbopack
- **[React 19.2+](https://react.dev/)** - Latest React with concurrent features and improved server components
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Next-gen utility-first CSS framework with native CSS support
- **JavaScript (ES6+)** - Modern JavaScript with latest ECMAScript features
- **TypeScript Ready** - Type definitions and JSDoc for enhanced IDE support

### Animation & UI Libraries
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library with layout animations
- **[GSAP](https://gsap.com/)** - Professional-grade animation platform for complex timelines
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit (1000+ icons)
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library with multiple icon families
- **[React Terminal](https://www.npmjs.com/package/react-terminal)** - Interactive terminal component
- **Custom CSS Animations** - Hardware-accelerated custom animations

### Tools & Configuration
- **ESLint** - Code linting with Next.js config
- **PostCSS** - CSS processing with Tailwind
- **Next Sitemap** - Automatic sitemap generation
- **IndexNow** - Real-time search engine indexing
- **Service Worker** - PWA capabilities and offline support
- **Vercel** - Deployment platform

### Analytics & Monitoring
- **[Microsoft Clarity](https://clarity.microsoft.com/)** - Advanced user behavior analytics with AI-powered insights
  - Session recordings and heatmaps
  - Clarity Copilot for AI-driven analysis
  - Real-time user monitoring
  - Free forever with unlimited recordings
- **[Google Analytics 4](https://analytics.google.com/)** - Comprehensive traffic and conversion tracking
- **Custom Event Tracking** - User interaction analytics

### Key Features
- **SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards, structured data (JSON-LD), IndexNow real-time indexing
- **PWA Ready** - Service worker with offline support, installable app, app manifest
- **Fully Responsive** - Mobile-first design optimized for all devices and screen sizes
- **Performance First** - Next.js Image optimization, lazy loading, code splitting, edge caching
- **Advanced Analytics** - Microsoft Clarity with AI insights + Google Analytics 4
- **User Behavior Tracking** - Heatmaps, session recordings, conversion funnels, user journey analysis
- **Security Hardened** - CSP, HSTS, XSS protection, secure headers
- **Accessibility** - WCAG 2.1 AA compliant, keyboard navigation, screen reader optimized
- **Developer Experience** - Turbopack for 10x faster builds, hot reload, organized code structure

---

## Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── components/              # React components
│   │   ├── BlogSection.js       # Blog posts display
│   │   ├── Contact.js           # Contact form & social links
│   │   ├── Experience.js        # Work experience timeline
│   │   ├── FAQSection.js        # Frequently asked questions
│   │   ├── Hero.js              # Landing section with video background
│   │   ├── Navbar.js            # Navigation bar
│   │   ├── ReviewSection.js     # Client reviews/testimonials
│   │   ├── ServiceWorkerRegistration.js  # PWA service worker
│   │   └── ClarityAnalytics.js  # Microsoft Clarity analytics
│   ├── data/                    # Static data
│   │   ├── blogPosts.js         # Blog post content
│   │   ├── contactLinks.js      # Social media links
│   │   ├── experienceData.js    # Work history
│   │   └── faqData.js           # FAQ content
│   ├── lib/                     # Utility functions
│   │   ├── analytics.js         # Google Analytics setup
│   │   ├── clarity.js           # Microsoft Clarity API utilities
│   │   └── indexnow.js          # IndexNow utility functions
│   ├── api/                     # API routes
│   │   ├── clarity/
│   │   │   └── stats/
│   │   │       └── route.js     # Clarity stats endpoint
│   │   └── indexnow/
│   │       └── route.js         # IndexNow submission endpoint
│   ├── animations.css           # Custom animations
│   ├── globals.css              # Global styles
│   ├── layout.js                # Root layout component
│   ├── page.js                  # Homepage
│   ├── robots.js                # Robots.txt generation
│   ├── sitemap.js               # Sitemap generation
│   └── serviceWorkerRegistration.js  # SW registration
├── public/                      # Static assets
│   ├── humans.txt               # Credits file
│   ├── manifest.json            # PWA manifest
│   ├── robots.txt               # Search engine instructions
│   ├── sitemap.xml              # XML sitemap
│   ├── sw.js                    # Service worker file
│   └── 34010ce9592af026867e6c742c168f94.txt  # IndexNow API key
├── scripts/                     # Build scripts
│   └── submit-indexnow.js       # Auto-submit URLs to IndexNow
├── eslint.config.mjs            # ESLint configuration
├── jsconfig.json                # JavaScript config
├── next-sitemap.config.js       # Sitemap generation config
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies
├── postcss.config.mjs           # PostCSS configuration
└── README.md                    # This file
```

---

## Features

### Design & UX
- **Modern UI** - Clean, professional design with advanced animations
- **Responsive Layout** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Dark Theme** - Eye-friendly color scheme
- **Advanced Animations** - Powered by Framer Motion and GSAP for smooth, professional transitions
- **Custom Fonts** - Geist Sans and Geist Mono for modern typography
- **Video Background** - Dynamic hero section with video background

### SEO & Discoverability
- **Meta Tags** - Comprehensive meta descriptions and keywords
- **Open Graph** - Social media preview cards
- **Twitter Cards** - Enhanced Twitter sharing
- **Structured Data** - JSON-LD for search engines
- **Sitemap** - Automatic XML sitemap generation
- **Robots.txt** - Search engine crawling instructions
- **IndexNow** - Real-time URL submission to search engines (Bing, Yandex)

### Performance
- **Image Optimization** - Next.js automatic image optimization with AVIF/WebP formats
- **Turbopack** - Next-generation bundler for faster development builds
- **Code Splitting** - Automatic code splitting for faster loads
- **Lazy Loading** - Components load on demand
- **Service Worker** - Caching for faster repeat visits
- **Optimized Animations** - Hardware-accelerated animations with Framer Motion and GSAP
- **Security Headers** - Comprehensive security headers including HSTS, CSP, and XSS protection

### Progressive Web App (PWA)
- **Installable** - Can be installed on devices
- **Offline Support** - Works without internet connection
- **App Manifest** - Native app-like experience

### Analytics & Insights
- **Microsoft Clarity** - User behavior analytics with heatmaps and session recordings
- **Google Analytics** - Track visitor behavior and site performance
- **Custom Events** - Monitor user interactions
- **Real-time Monitoring** - Live user activity tracking

---

## How I Built This

### 1. **Project Setup**
I started by creating a Next.js project with the App Router:
```bash
npx create-next-app@latest portfolio
```

### 2. **Design & Layout**
- Designed the layout with a mobile-first approach
- Created reusable React components for each section
- Implemented Tailwind CSS for rapid styling
- Added custom animations in `animations.css`

### 3. **Component Development**
Built modular components for different sections:
- **Hero**: Landing section with personal introduction
- **Experience**: Timeline of work history
- **BlogSection**: Display recent blog posts
- **Contact**: Social links and contact information
- **FAQSection**: Common questions and answers
- **Navbar**: Responsive navigation menu

### 4. **Data Management**
Separated content from code using data files in `app/data/`:
- Allows easy content updates without touching component code
- Makes the project more maintainable
- Enables future CMS integration if needed

### 5. **SEO Implementation**
- Added meta tags in `layout.js`
- Configured `next-sitemap` for automatic sitemap generation
- Created dynamic `robots.txt` using Next.js API routes
- Added structured data for better search engine understanding

### 6. **PWA Features**
- Created `manifest.json` for app metadata
- Implemented service worker for offline functionality
- Added service worker registration in the app

### 7. **Performance Optimization**
- Used Next.js Image component for optimized images
- Implemented lazy loading for components
- Minimized CSS and JavaScript bundles
- Configured PostCSS for CSS optimization

### 8. **Analytics Integration**
- Integrated Google Analytics using `gtag.js`
- Created utility functions in `app/lib/analytics.js`
- Added event tracking for user interactions

### 9. **Testing & Refinement**
- Tested on multiple devices and browsers
- Optimized for Core Web Vitals
- Fixed accessibility issues
- Refined animations and transitions

### 10. **Deployment**
- Deployed to Vercel for optimal Next.js performance
- Configured custom domain
- Set up automatic deployments from GitHub

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** or **pnpm** or **bun** - Package manager
- **Git** - [Download here](https://git-scm.com/)

Check your Node.js version:
```bash
node --version
```

### Clone & Run Locally

Follow these steps to get a local copy up and running:

#### 1. Clone the Repository
```bash
git clone https://github.com/UbaidBinWaris/portfolio.git
```

#### 2. Navigate to Project Directory
```bash
cd portfolio
```

#### 3. Install Dependencies
Choose your preferred package manager:

**Using npm:**
```bash
npm install
```

**Using yarn:**
```bash
yarn install
```

**Using pnpm:**
```bash
pnpm install
```

**Using bun:**
```bash
bun install
```

#### 4. Run Development Server
Start the development server with Turbopack for faster builds:

**Using npm:**
```bash
npm run dev
```

**Using yarn:**
```bash
yarn dev
```

**Using pnpm:**
```bash
pnpm dev
```

**Using bun:**
```bash
bun dev
```

> Note: The dev script uses `--turbopack` flag for faster compilation.

#### 5. Open in Browser
Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

The page will automatically reload when you make changes to the code.

---

## Configuration

### Customizing Content

#### Personal Information
Update your personal details in the component files:
- `app/components/Hero.js` - Name, title, bio
- `app/components/Contact.js` - Contact information

#### Experience Data
Edit `app/data/experienceData.js` to add/modify work experience:
```javascript
export const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Start Date - End Date",
    description: "Job description..."
  }
];
```

#### Blog Posts
Update `app/data/blogPosts.js` to add blog entries.

#### FAQ Content
Modify `app/data/faqData.js` to change FAQ items.

#### Social Links
Edit `app/data/contactLinks.js` to update social media links.

### Environment Variables
Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_DOMAIN_URL=https://yourdomain.com

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-project-id
CLARITY_API_TOKEN=your-api-token
```

**Important:** Never commit `.env.local` to version control!

### Analytics Setup

#### Microsoft Clarity (Enabled ✅)
Microsoft Clarity is integrated using the official NPM package and provides:
- **Heatmaps** - See where users click, scroll, and interact
- **Session Recordings** - Watch real user sessions
- **Insights** - Understand user behavior patterns
- **Clarity Copilot** - AI-powered insights and summaries
- **Free Forever** - No cost, unlimited recordings

**Implementation:**
```bash
npm install @microsoft/clarity
```

The Clarity component (`app/components/ClarityAnalytics.js`) automatically initializes on page load.

**Access your dashboard:** [clarity.microsoft.com](https://clarity.microsoft.com)  
**Project ID:** `ugh4m36u47`

**Customize tracking:**
```javascript
// In ClarityAnalytics.js
Clarity.setTag("user-type", "premium");
Clarity.identify("user-123", "session-456", "page-789", "John Doe");
Clarity.event("button-click");
```

**Data Export API:**
Clarity provides a Data Export API for programmatic access to analytics data.

```javascript
// Fetch Clarity stats via API route
const response = await fetch('/api/clarity/stats');
const stats = await response.json();

// Or use the utility directly
import { getClarityStats } from '@/app/lib/clarity';
const stats = await getClarityStats();
```

**API Rate Limits:**
- 10 API calls per project per day
- Data updates every few hours

**Available Endpoints:**
- `GET /api/clarity/stats` - Get analytics summary

#### Google Analytics (Optional)
To enable Google Analytics:
1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Update `app/lib/analytics.js` with your Measurement ID
3. Add the ID to your environment variables or directly in the code

### SEO Configuration
Update meta tags in `app/layout.js`:
```javascript
export const metadata = {
  metadataBase: new URL('https://uabidbinwaris.dev'),
  title: {
    default: 'Your Name | Full Stack Developer Portfolio',
    template: '%s | Your Name'
  },
  description: 'Your professional description',
  keywords: ['Your Name', 'Full Stack Developer', ...],
  // ... other meta tags
};
```

---

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app:

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

Vercel automatically detects Next.js and configures everything.

**Using Vercel CLI:**
```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

This Next.js app can also be deployed to:
- **Netlify** - [Guide](https://docs.netlify.com/frameworks/next-js/)
- **AWS Amplify** - [Guide](https://docs.amplify.aws/guides/hosting/nextjs/)
- **Digital Ocean** - [Guide](https://docs.digitalocean.com/products/app-platform/languages-frameworks/nextjs/)

### Build for Production

To create a production build:
```bash
npm run build
npm start
```

---

## SEO & Performance

### Sitemap Generation
The sitemap is automatically generated on build using the `postbuild` script. Configure in `next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: 'https://uabidbinwaris.dev',
  generateRobotsTxt: true,
};
```

### Performance Optimization Tips
- Images are automatically optimized by Next.js
- Use the `<Image>` component for all images
- Lazy load components that are below the fold
- Minimize third-party scripts

### Testing Performance
Test your site with:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## IndexNow Integration

This portfolio implements **IndexNow** for real-time URL submission to search engines, ensuring your content gets indexed faster by Bing, Yandex, and other participating search engines.

### What is IndexNow?

IndexNow is a protocol that allows websites to instantly notify search engines about content changes (new, updated, or deleted pages) without waiting for crawlers. This results in:
- **Faster indexing** - Your changes appear in search results quickly
- **Reduced server load** - Less crawling needed
- **Better control** - You decide what and when to submit

### Implementation Details

#### 1. **API Key Setup**
A unique API key is hosted at:
```
https://uabidbinwaris.dev/34010ce9592af026867e6c742c168f94.txt
```

#### 2. **Automatic Submission**
After every production build, all sitemap URLs are automatically submitted to IndexNow:
```bash
npm run build  # Automatically triggers IndexNow submission
```

The `postbuild` script runs:
1. `next-sitemap` - Generates sitemap
2. `submit-indexnow.js` - Submits all URLs to IndexNow

#### 3. **Manual Submission**
You can manually submit URLs anytime:
```bash
npm run indexnow
```

#### 4. **API Endpoint**
The portfolio includes an API route for programmatic submissions:
```javascript
// POST to /api/indexnow
{
  "urls": [
    "https://uabidbinwaris.dev/",
    "https://uabidbinwaris.dev/page"
  ]
}
```

### Using the IndexNow Utility

```javascript
import { 
  submitUrlToIndexNow, 
  submitUrlsToIndexNow,
  submitSitemapToIndexNow 
} from './app/lib/indexnow';

// Submit a single URL
await submitUrlToIndexNow('https://uabidbinwaris.dev/new-page');

// Submit multiple URLs
await submitUrlsToIndexNow([
  'https://uabidbinwaris.dev/page1',
  'https://uabidbinwaris.dev/page2'
]);

// Submit entire sitemap
await submitSitemapToIndexNow();
```

### Verifying Submissions

1. Visit [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Go to **IndexNow** section
3. Check your submission history
4. Monitor indexing status

### Supported Search Engines

IndexNow submissions are shared across:
- **Microsoft Bing** 
- **Yandex** 
- **Seznam.cz** 
- **Naver** 

### Files Added

```
app/
├── api/
│   └── indexnow/
│       └── route.js              # API endpoint for submissions
└── lib/
    └── indexnow.js               # Utility functions

scripts/
└── submit-indexnow.js            # Auto-submission script

public/
└── 34010ce9592af026867e6c742c168f94.txt  # API key file
```

### Response Codes

- **200 OK** - URLs submitted successfully
- **202 Accepted** - URLs received and will be processed (Most common success response)
- **400 Bad Request** - Invalid format
- **403 Forbidden** - Invalid API key
- **422 Unprocessable Entity** - URLs don't match host
- **429 Too Many Requests** - Rate limited (potential spam)

> **Note:** Both 200 and 202 are success responses. IndexNow typically returns 202 to acknowledge receipt.

### Best Practices

1. **Submit immediately** after content changes
2. **Don't spam** - Only submit when content actually changes
3. **Batch submissions** - Submit multiple URLs together when possible
4. **Monitor results** - Use Bing Webmaster Tools to track performance

---

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/UbaidBinWaris/portfolio/issues).

### How to Contribute
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

**Ubaid Bin Waris** - *Full Stack Engineer (Next.js) @Gixiai*

**Specializing in:**
- Full Stack Development (React, Next.js, Node.js)
- DevOps & Cloud Architecture (AWS)
- AI Integration & n8n Automation
- SEO & Performance Optimization
- Turning Ideas into Scalable Businesses

**Let's Connect:**
- Website: [uabidbinwaris.dev](https://uabidbinwaris.dev)
- LinkedIn: [linkedin.com/in/ubaidbinwaris](https://linkedin.com/in/ubaidbinwaris)
- GitHub: [@UbaidBinWaris](https://github.com/UbaidBinWaris)
- Twitter: [@ubaidbinwaris](https://twitter.com/ubaidbinwaris)
- Email: Available on website

---

## Tech Stack Summary

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19.2, Next.js 15.3, Tailwind CSS 4, Framer Motion, GSAP |
| **Build Tools** | Turbopack, PostCSS, ESLint, Next Sitemap |
| **Analytics** | Microsoft Clarity, Google Analytics 4 |
| **SEO** | IndexNow, Open Graph, JSON-LD, Sitemap |
| **Deployment** | Vercel, Edge Functions, CDN |
| **Performance** | Image Optimization, Code Splitting, Lazy Loading |
| **PWA** | Service Worker, Web App Manifest, Offline Support |
| **Icons** | Lucide React, React Icons |

</div>

---

## Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/UbaidBinWaris/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/UbaidBinWaris/portfolio?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/UbaidBinWaris/portfolio?style=social)

![GitHub repo size](https://img.shields.io/github/repo-size/UbaidBinWaris/portfolio)
![GitHub language count](https://img.shields.io/github/languages/count/UbaidBinWaris/portfolio)
![GitHub top language](https://img.shields.io/github/languages/top/UbaidBinWaris/portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/UbaidBinWaris/portfolio)

</div>

---

## Acknowledgments

Special thanks to these amazing open-source projects:

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Vercel](https://vercel.com/) - Best-in-class Deployment Platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [React](https://react.dev/) - JavaScript Library for Building User Interfaces
- [Framer Motion](https://www.framer.com/motion/) - Animation Library for React
- [GSAP](https://gsap.com/) - Professional-grade JavaScript Animation
- [Microsoft Clarity](https://clarity.microsoft.com/) - Free User Behavior Analytics
- [Lucide](https://lucide.dev/) - Beautiful & Consistent Icon Toolkit

---

<div align="center">

### If you find this project helpful, please give it a star!

**Built with passion by [Ubaid Bin Waris](https://uabidbinwaris.dev)**

*Transforming ideas into scalable digital solutions*

[![Portfolio](https://img.shields.io/badge/View-Portfolio-blue?style=for-the-badge)](https://uabidbinwaris.dev)
[![LinkedIn](https://img.shields.io/badge/Connect-LinkedIn-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ubaidbinwaris)
[![Hire Me](https://img.shields.io/badge/Available_for-Hire-success?style=for-the-badge)](https://uabidbinwaris.dev)

</div>
