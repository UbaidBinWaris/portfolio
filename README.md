# Ubaid Bin Waris - Professional Portfolio

<div align="center">

**Full Stack Developer | React | Next.js | Node.js | MongoDB**

[![Website](https://img.shields.io/badge/Website-ubaidbinwaris.dev-blue?style=for-the-badge&logo=vercel)](https://ubaidbinwaris.dev)
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
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

This is my personal portfolio website built with modern web technologies. It showcases my skills, experience, projects, and provides a way for potential clients and employers to connect with me. The site is designed with performance, SEO, and user experience in mind.

**Live Site**: [https://ubaidbinwaris.dev](https://ubaidbinwaris.dev)

---

## Tech Stack

### Core Technologies
- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[React 18+](https://react.dev/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

### Tools & Libraries
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Next Sitemap** - Automatic sitemap generation
- **Service Worker** - PWA capabilities and offline support
- **Vercel** - Deployment platform

### Features
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **PWA Ready** - Service worker, manifest, offline support
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Image optimization, lazy loading
- **Analytics Ready** - Google Analytics integration

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
│   │   ├── Hero.js              # Landing section with intro
│   │   ├── Navbar.js            # Navigation bar
│   │   └── ServiceWorkerRegistration.js  # PWA service worker
│   ├── data/                    # Static data
│   │   ├── blogPosts.js         # Blog post content
│   │   ├── contactLinks.js      # Social media links
│   │   ├── experienceData.js    # Work history
│   │   └── faqData.js           # FAQ content
│   ├── lib/                     # Utility functions
│   │   └── analytics.js         # Google Analytics setup
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
│   └── sw.js                    # Service worker file
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
- **Modern UI** - Clean, professional design with smooth animations
- **Responsive Layout** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Dark Theme** - Eye-friendly color scheme
- **Smooth Animations** - Subtle transitions and effects

### SEO & Discoverability
- **Meta Tags** - Comprehensive meta descriptions and keywords
- **Open Graph** - Social media preview cards
- **Twitter Cards** - Enhanced Twitter sharing
- **Structured Data** - JSON-LD for search engines
- **Sitemap** - Automatic XML sitemap generation
- **Robots.txt** - Search engine crawling instructions

### Performance
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic code splitting for faster loads
- **Lazy Loading** - Components load on demand
- **Service Worker** - Caching for faster repeat visits

### Progressive Web App (PWA)
- **Installable** - Can be installed on devices
- **Offline Support** - Works without internet connection
- **App Manifest** - Native app-like experience

### Analytics
- **Google Analytics** - Track visitor behavior and site performance
- **Custom Events** - Monitor user interactions

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
Start the development server:

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

### Analytics Setup
To enable Google Analytics:
1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Update `app/lib/analytics.js` with your Measurement ID
3. Add the ID to your environment variables or directly in the code

### SEO Configuration
Update meta tags in `app/layout.js`:
```javascript
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your description',
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
The sitemap is automatically generated on build. Configure in `next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: 'https://ubaidbinwaris.dev',
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

**Ubaid Bin Waris** - *Full Stack Developer*

- Website: [ubaidbinwaris.dev](https://ubaidbinwaris.dev)
- LinkedIn: [linkedin.com/in/ubaidbinwaris](https://linkedin.com/in/ubaidbinwaris)
- GitHub: [@UbaidBinWaris](https://github.com/UbaidBinWaris)
- Twitter: [@ubaidbinwaris](https://twitter.com/ubaidbinwaris)

---

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment Platform
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [React](https://react.dev/) - UI Library

---

<div align="center">

**If you find this project helpful, please give it a star!**

Made with love by [Ubaid Bin Waris](https://ubaidbinwaris.dev)

</div>
