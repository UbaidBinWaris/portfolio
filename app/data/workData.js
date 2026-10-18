const gixiai = { name: "Gixiai", url: "https://www.gixiai.com" };
const szabist = {
  name: "SZABIST",
  legalName: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology",
};

// Newest public work first. `links` are verified public URLs; projects without
// links keep the private architecture-walkthrough treatment.
export const work = [
  {
    slug: "proxy-qa-browser",
    title: "Proxy QA Browser",
    seoTitle: "Proxy QA Browser: Open-Source QA Testing App",
    category: "Open-source desktop app",
    service: "hire-nextjs-developer-pakistan",
    status: "Open source",
    featured: true,
    period: "Sep – Oct 2026",
    started: "2026-09",
    license: "Apache-2.0",
    links: [
      {
        label: "Website & download",
        url: "https://proxybrowser.ubaidbinwaris.com",
      },
      {
        label: "Source on GitHub",
        url: "https://github.com/UbaidBinWaris/proxy_browser",
      },
    ],
    summary:
      "A free, open-source desktop app for testing your own website forms across real browsers, 226 emulated devices and US locations, with recorded scenarios and evidence reports.",
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "Playwright",
      "SQLite",
      "Tailwind CSS",
      "Zustand",
      "Vite",
    ],
    problem:
      "Testing a web form across browsers, devices and locations usually means juggling separate tools and reconfiguring proxies by hand for every run. QA teams need repeatable test matrices and evidence they can share, not screenshots collected ad hoc.",
    approach: [
      "Drive real browser engines (Chromium, Firefox, WebKit and installed Chrome, Edge, Brave and Opera) through Playwright from an Electron shell.",
      "Route each session through a location-targeted proxy by country, state, city or ZIP code and verify the exit IP before the test starts.",
      "Record a test scenario once, then run it as a browser × device × location matrix.",
      "Store proxy credentials encrypted on the local machine and give every run an isolated browser profile.",
    ],
    highlights: [
      "226 device presets for mobile, tablet and desktop emulation",
      "Sticky and rotating proxy sessions with automatic location matching",
      "Screenshots, network requests, HTTP responses and form-generated IDs captured as test evidence",
      "Accessibility checks and performance validation inside test runs",
      "Cross-platform builds for Windows, Linux and macOS",
    ],
    results: [
      "Released free and open source under the Apache 2.0 license",
      "Distributed for Windows, Linux and macOS",
    ],
    tradeoff:
      "Real browser processes produce results that match what users see, but they are heavier than headless HTTP checks. Every run carries process lifecycle, proxy session and profile isolation costs that the app has to manage explicitly.",
    validation:
      "Confirm the proxy exit location before each launch, and keep the network log and screenshots with every result so a failure can be reproduced rather than re-described.",
  },
  {
    slug: "orenyx-voice-dispatch",
    title: "Orenyx Voice Dispatch",
    seoTitle: "AI Voice Receptionist & Call Routing Platform",
    category: "Voice AI",
    service: "voice-ai-developer",
    status: "Live",
    featured: true,
    organization: gixiai,
    period: "Sep 2026",
    started: "2026-09",
    links: [
      {
        label: "Live platform",
        url: "https://portal.orenyxvoicedispatch.com",
      },
    ],
    summary:
      "A multi-tenant voice platform combining an AI receptionist, IVR menus, intelligent call routing and live transfers, deployed and tested on real phone calls.",
    stack: [
      "Plivo",
      "ElevenLabs",
      "PostgreSQL",
      "Row-level security",
      "Stripe",
      "2FA",
    ],
    problem:
      "Small teams miss calls, and a voicemail box loses context. A business needs a receptionist that answers from its own knowledge, routes callers by intent and hands live calls to the right person, while each tenant's data stays separate.",
    approach: [
      "Configure an AI voice receptionist per business with its own knowledge base, instructions and ElevenLabs voice.",
      "Build IVR menus and conditional routing rules that end at the AI, a team member or voicemail.",
      "Transfer live calls to team members by phone or browser-based calling over Plivo telephony.",
      "Isolate tenants with PostgreSQL row-level security, encrypted credentials and two-factor authentication.",
    ],
    highlights: [
      "AI receptionist with a customizable knowledge base and voice",
      "IVR menus, conditional call routing and automated voicemail",
      "Real-time call testing and monitoring",
      "Call recordings, activity logs, compliance auditing and CSV exports",
      "Admin dashboard, team management and Stripe subscription billing",
    ],
    results: [
      "Deployed to production and tested with real phone calls, including AI-assisted conversations and live call transfers",
    ],
    tradeoff:
      "Enforcing tenant isolation with database row-level security is stricter than filtering in application code, but every query and migration then depends on the correct tenant context being set.",
    validation:
      "Place real calls through the full path (AI conversation, IVR branch, live transfer and voicemail fallback) and check the recording, activity log and audit trail after each one.",
  },
  {
    slug: "sales-call-intelligence",
    title: "Sales Call Intelligence",
    seoTitle: "Local AI Sales Call Transcription & QA",
    category: "Speech AI",
    service: "voice-ai-developer",
    status: "Public repo",
    featured: true,
    period: "May – Jul 2026",
    started: "2026-05",
    links: [
      {
        label: "Source on GitHub",
        url: "https://github.com/UbaidBinWaris/qa_STT",
      },
    ],
    summary:
      "A fully local, GPU-accelerated platform that transcribes, diarizes and QA-scores sales calls without cloud AI APIs, at about 38× real-time transcription speed.",
    stack: [
      "Python",
      "FastAPI",
      "NVIDIA NeMo",
      "Parakeet TDT",
      "Sortformer",
      "Qwen3 8B",
      "Ollama",
      "CUDA",
      "SQLite",
    ],
    problem:
      "Call centers need every call reviewed for compliance, objections and coaching. Manual QA covers only a small sample, and cloud transcription sends sensitive customer audio outside the organization.",
    approach: [
      "Transcribe with NVIDIA Parakeet TDT v3 for word-level timestamps.",
      "Separate agent and customer with NVIDIA Sortformer diarization, then align every word to its speaker.",
      "Compute conversation metrics: talk ratio, interruptions, dead air, silence and words per minute.",
      "Score each call with Qwen3 8B through Ollama for compliance, sentiment, objections and coaching feedback.",
    ],
    highlights: [
      "Dashboard with synchronized audio playback, searchable transcripts and QA scorecards",
      "Transcript confidence checks and second-pass verification of uncertain segments",
      "Risk tagging for numbers and compliance-related words",
      "Evidence validation that ties AI findings to the transcript",
      "GPU memory monitoring with automatic recovery from CUDA out-of-memory errors",
    ],
    results: [
      "≈38× real-time transcription speed on an NVIDIA RTX 5070 Ti",
      "≈16× real-time sustained end-to-end processing throughput",
      "Customer call audio never leaves the organization's own hardware",
    ],
    tradeoff:
      "Running speech and language models locally keeps call audio in-house and removes per-minute API costs, but throughput is bounded by one GPU's memory. Concurrency and out-of-memory recovery have to be engineered rather than bought.",
    validation:
      "Concurrency tests under load, GPU memory monitoring, and evidence checks that link every AI finding back to a timestamped transcript segment.",
  },
  {
    slug: "orenyx-ai-assistant",
    title: "Orenyx General AI Assistant",
    seoTitle: "AI Research & Document Intelligence Assistant",
    category: "AI agents",
    service: "ai-agent-development",
    status: "Private",
    featured: true,
    organization: gixiai,
    period: "Aug – Sep 2026",
    started: "2026-08",
    summary:
      "A standalone AI assistant for streaming conversations, cited web research, PDF and Word document analysis and voice interaction, built on an isolated, security-first architecture.",
    stack: [
      "LLMs",
      "RAG",
      "Brave Search API",
      "Speech-to-text",
      "Text-to-speech",
    ],
    problem:
      "Teams want one assistant that can research the web, read their documents and respond by voice. Uploaded files and prompts become an attack surface, and answers without sources are hard to trust.",
    approach: [
      "Stream model responses with persistent chat history.",
      "Ground web research in Brave Search results and return source citations with each answer.",
      "Parse PDF, Word and text documents for summarization and information extraction.",
      "Run on a dedicated database and storage layer with access controls and audit logging.",
    ],
    highlights: [
      "Real-time web research with source citations",
      "Document analysis, summarization and information extraction",
      "Voice input, speech-to-text and optional text-to-speech replies",
      "Writing assistance, content rewriting and task planning",
      "Protection against prompt injection, unauthorized access and unsafe document processing",
    ],
    tradeoff:
      "An isolated deployment with its own database and storage costs more to operate than shared platform infrastructure, but it limits what a malicious document or injected prompt can reach.",
    validation:
      "Test with adversarial documents and prompt-injection attempts, and check that cited sources actually support each answer before treating research output as reliable.",
  },
  {
    slug: "scrap-exchange-valuation",
    title: "Scrap EX: AI Scrap Valuation App",
    seoTitle: "Scrap EX: AI Scrap Valuation Android App",
    category: "Mobile & computer vision",
    service: "backend-architecture",
    status: "Private",
    organization: szabist,
    period: "Mar 2026 – present",
    started: "2026-03",
    summary:
      "An Android app that uses computer vision to identify scrap materials, estimate size, weight and market value, and list items for sale on a built-in marketplace.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "TensorFlow Lite",
      "YOLOv8",
    ],
    problem:
      "Most sellers have no reliable way to price scrap: they don't know which material they have, how much of it there is or what it's worth. The app has to turn photos into a credible estimate and a listing buyers can act on.",
    approach: [
      "Identify materials from multiple photos with YOLOv8 and TensorFlow Lite models.",
      "Estimate size and weight, then calculate a market value automatically.",
      "Serve analysis, history and listings from a Node.js and Express API backed by PostgreSQL, Prisma and Redis.",
      "Build the Android client in Kotlin with Jetpack Compose and secure authentication.",
    ],
    highlights: [
      "Multi-image AI analysis",
      "Automated price calculation",
      "Personalized analysis history",
      "Digital marketplace for listing items",
    ],
    tradeoff:
      "Photo-based estimates depend on lighting, angle and scale, so a single image is not enough. Multi-image analysis costs more processing per item but gives the valuation more evidence to work from.",
    validation:
      "Compare estimates against weighed and priced samples across material types and photo conditions before relying on valuations.",
  },
  {
    slug: "letsscall-website",
    title: "LetsScall Lead Generation Website",
    seoTitle: "LetsScall: WordPress Lead Generation Website",
    category: "Web & lead generation",
    service: "hire-nextjs-developer-pakistan",
    status: "Live",
    organization: gixiai,
    period: "Mar – Apr 2026",
    started: "2026-03",
    links: [{ label: "Visit site", url: "https://letsscall.com" }],
    summary:
      "A conversion-focused business website built with WordPress and Elementor Pro, structured to turn visitors into leads with clear calls to action and fast, responsive pages.",
    stack: ["WordPress", "Elementor Pro", "SEO", "Responsive design"],
    problem:
      "The business needed a website that generated inquiries, not just a brochure, and one that non-technical staff could update without a developer.",
    approach: [
      "Structure landing pages around conversion: a clear offer, supporting proof and direct calls to action.",
      "Build fully responsive layouts with Elementor Pro.",
      "Optimize page speed and use an SEO-friendly page structure.",
      "Keep every page editable through WordPress for non-technical users.",
    ],
    tradeoff:
      "WordPress and Elementor let the team edit pages without a developer. The cost is page-builder and plugin weight, so performance has to be managed deliberately.",
    validation:
      "Check page speed on mobile, test every form and call-to-action path, and measure inquiries rather than visits.",
  },
  {
    slug: "telegram-ai-video-automation",
    title: "AI Video Automation from Telegram",
    seoTitle: "n8n AI Video Automation: Telegram to Video",
    category: "Workflow automation",
    service: "ai-automation-n8n",
    status: "Private",
    featured: true,
    organization: gixiai,
    period: "Mar 2026",
    started: "2026-03",
    summary:
      "An n8n pipeline that turns a Telegram voice message into a finished video with AI transcription, generated subtitles, background media and FFmpeg rendering.",
    stack: [
      "n8n",
      "Telegram Bot API",
      "ElevenLabs",
      "FFmpeg",
      "Google Drive",
      "SSH",
    ],
    problem:
      "Turning voice notes into short videos meant transcribing, writing subtitles, choosing background footage and music, and rendering by hand for every clip.",
    approach: [
      "Receive voice or audio input from users through a Telegram bot.",
      "Transcribe speech with the ElevenLabs API and generate SRT subtitles.",
      "Select background video and music dynamically from Google Drive.",
      "Render over SSH with FFmpeg (subtitle overlay and audio mixing), then store and deliver the result.",
    ],
    highlights: [
      "Complete pipeline: input → processing → enhancement → output → delivery",
      "Fallback delivery links when files exceed size limits",
      "Automated file handling and storage in Google Drive",
    ],
    tradeoff:
      "Rendering with FFmpeg on a server over SSH keeps n8n lightweight and the orchestration easy to inspect, but splits state across two systems, so file handoffs and failures need explicit handling.",
    validation:
      "Test oversize files, failed transcriptions and missing media, and confirm every request ends in a delivered video or a clear fallback link.",
  },
  {
    slug: "automated-short-video-generation",
    title: "Automated Short Video Generation",
    seoTitle: "Automated Short Video Generation with n8n",
    category: "Workflow automation",
    service: "ai-automation-n8n",
    status: "Private",
    organization: gixiai,
    period: "Feb 2026",
    started: "2026-02",
    summary:
      "A batch pipeline that builds short videos from Google Sheets data and Drive media with n8n and FFmpeg, then uploads results and writes status back to the sheet.",
    stack: ["n8n", "FFmpeg", "Google Sheets", "Google Drive", "AI APIs"],
    problem:
      "Manual video editing doesn't scale for batch content. Each video needed the right audio and images assembled in order, rendered, named, uploaded and tracked.",
    approach: [
      "Ingest content rows from Google Sheets as the source of truth.",
      "Fetch audio and images from Google Drive and sort them into scene order.",
      "Merge audio and images into videos with FFmpeg in a loop-based batch.",
      "Upload finished videos to Drive and write status, links and metadata back to the sheet.",
    ],
    highlights: [
      "Batch processing with loop-based workflow execution",
      "Error handling and retries for stable runs",
      "Real-time status tracking in Google Sheets",
    ],
    tradeoff:
      "A spreadsheet as the control panel is easy for non-engineers to drive, but it enforces no schema, so input validation has to live in the workflow.",
    validation:
      "Run batches with missing assets and malformed rows, and confirm retries don't create duplicate uploads.",
  },
  {
    slug: "aws-spring-boot-deployment",
    title: "Spring Boot on AWS: EC2, RDS & VPC",
    seoTitle: "Spring Boot App on AWS EC2, RDS and VPC",
    category: "Cloud & DevOps",
    service: "infrastructure-devops",
    status: "Private",
    organization: szabist,
    period: "Oct – Dec 2025",
    started: "2025-10",
    summary:
      "A Spring Boot web application deployed on AWS with EC2, managed PostgreSQL on RDS, a custom VPC, an Apache reverse proxy and HTTPS through Certbot.",
    stack: [
      "Spring Boot",
      "Spring MVC",
      "Thymeleaf",
      "PostgreSQL",
      "AWS EC2",
      "AWS RDS",
      "VPC",
      "Apache",
      "Certbot",
    ],
    problem:
      "Getting an application from a laptop to a secure public URL means designing the network, database and server, not only writing the code.",
    approach: [
      "Build a RESTful Spring Boot backend with Spring MVC and Thymeleaf, including user registration.",
      "Run PostgreSQL on AWS RDS as a managed database.",
      "Design a VPC with subnets, route tables and security groups.",
      "Serve the app from EC2 behind an Apache reverse proxy, with a custom domain and HTTPS through Certbot.",
    ],
    tradeoff:
      "Managed RDS removes database patching and backups from the operating workload, at a higher cost than running PostgreSQL on the application server.",
    validation:
      "Verify security groups expose only public ports, the database accepts connections only from the application tier, and certificates renew automatically.",
  },
  {
    slug: "gixiai-website",
    title: "Gixiai Website & Admin Panel",
    seoTitle: "Gixiai: Next.js Website & Admin Panel",
    category: "Full-stack systems",
    service: "hire-nextjs-developer-pakistan",
    status: "Live",
    featured: true,
    organization: gixiai,
    period: "Aug – Sep 2025",
    started: "2025-08",
    links: [{ label: "Visit site", url: "https://www.gixiai.com" }],
    summary:
      "An SEO-optimized Next.js and PostgreSQL company website with a custom admin panel for managing blogs, portfolio projects, team members and company content.",
    stack: ["Next.js", "React", "PostgreSQL", "REST APIs", "SEO"],
    problem:
      "The company needed a fast, search-friendly website whose content (blogs, portfolio, team) could change every week without a developer in the loop.",
    approach: [
      "Build the frontend in Next.js for performance and SEO.",
      "Model blogs, projects, team members and company content in PostgreSQL.",
      "Give staff a custom admin panel to manage that content.",
      "Render content dynamically through clean API integration and structured routing.",
    ],
    tradeoff:
      "A custom admin panel fits the content model exactly, but unlike an off-the-shelf CMS, every editing feature is code the team owns and maintains.",
    validation:
      "Check that admin edits reach the live site with correct metadata, and that pages stay fast and indexable as content grows.",
  },
  {
    slug: "voice-qualification",
    title: "Voice qualification & telephony",
    category: "Voice AI",
    service: "voice-ai-developer",
    summary:
      "A phone conversation agent connecting speech, lead qualification, CRM context and human handoff.",
    stack: ["LiveKit", "Vapi", "Deepgram", "Node.js", "Redis"],
    problem:
      "Phone automation needs to do more than answer a question. It must respond to interruptions, retrieve relevant business context and route a caller to the right next step.",
    approach: [
      "Connect the telephony input to a real-time conversation runtime.",
      "Separate speech processing from business tools such as CRM lookup and qualification.",
      "Define escalation paths so uncertain or unsupported requests reach a person.",
    ],
    tradeoff:
      "Managed voice orchestration reduces operational work; a more configurable media runtime offers greater control. The right choice depends on the required integrations and hosting constraints.",
    validation:
      "Test caller interruptions, delayed tool responses and unavailable transfer destinations. Measure end-to-end conversation latency under realistic network conditions.",
  },
  {
    slug: "ai-session-manager",
    title: "AI session coordination",
    category: "Backend systems",
    service: "backend-architecture",
    summary:
      "A Node.js service coordinating concurrent AI sessions with Redis, job queues and explicit state transitions.",
    stack: ["Node.js", "Redis", "BullMQ", "JWT", "Docker"],
    problem:
      "Concurrent socket and voice sessions can cause competing updates and repeated jobs. Coordination needs to account for retries, worker crashes and expired ownership.",
    approach: [
      "Validate session access at the gateway before queuing work.",
      "Use explicit job states and idempotent handlers to make retries reviewable.",
      "Coordinate shared resources through Redis while preserving durable business state.",
    ],
    tradeoff:
      "Locks can reduce contention, but cannot replace durable idempotency or recovery logic. Network partitions and expired leases must be considered in the state model.",
    validation:
      "Exercise duplicate events, worker termination, lease expiration and queue replay. Record lock contention and job completion behavior rather than assuming exactly-once delivery.",
  },
  {
    slug: "lead-automation",
    title: "Lead intake & CRM automation",
    category: "Workflow automation",
    service: "ai-automation-n8n",
    summary:
      "An event processing pipeline for webhook intake, AI qualification, database updates and team notifications.",
    stack: ["n8n", "Node.js", "PostgreSQL", "Docker", "Webhooks"],
    problem:
      "Lead information can arrive from several sources with inconsistent payloads. Manual routing makes handoffs difficult to trace and repeated webhook deliveries can create duplicate records.",
    approach: [
      "Normalize and validate incoming payloads before enrichment.",
      "Separate qualification logic from CRM writes and notification delivery.",
      "Make failed steps recoverable through explicit retry and review paths.",
    ],
    tradeoff:
      "A visual workflow is easy to inspect, but complex logic still benefits from small tested functions and clear contracts between steps.",
    validation:
      "Replay duplicate webhook payloads, simulate provider rate limits and verify database and CRM consistency after recovery.",
  },
  {
    slug: "seo-content-engine",
    title: "SEO & content workflow engine",
    category: "Full-stack systems",
    service: "hire-nextjs-developer-pakistan",
    summary:
      "A workflow for organizing content topics, producing structured metadata and managing indexing submissions.",
    stack: ["Next.js", "Model APIs", "IndexNow", "Python"],
    problem:
      "Content operations need a consistent source for page identity, metadata and publishing state. Indexing submissions should reflect published changes rather than every local build.",
    approach: [
      "Organize page topics and metadata into an explicit content model.",
      "Keep generated drafts subject to editorial review before publication.",
      "Submit canonical published URLs separately from build and validation steps.",
    ],
    tradeoff:
      "Automation makes repetitive operations easier, but does not establish factual accuracy or guarantee indexing. Editorial checks and verified source material remain necessary.",
    validation:
      "Check canonical URLs, structured-data consistency and sitemap status before submission. Treat accepted indexing requests as submissions, not confirmed search visibility.",
  },
  {
    slug: "local-llm-workstation",
    title: "Local LLM inference workstation",
    category: "Infrastructure",
    service: "infrastructure-devops",
    summary:
      "A Linux workstation for local model inference using Ollama and isolated service environments.",
    stack: ["HP Z840", "96GB RAM", "Linux", "Ollama", "Docker"],
    problem:
      "Running models on owned hardware introduces memory, model-size and concurrency constraints that managed APIs usually hide.",
    approach: [
      "Select model sizes and quantization settings to fit the available memory.",
      "Isolate supporting services and expose inference through an application boundary.",
      "Document configuration, restart procedures and resource constraints.",
    ],
    tradeoff:
      "Local hosting offers control over deployment and data handling, but hardware limits affect throughput, model choice and operating effort.",
    validation:
      "Evaluate representative prompts, sustained memory use and concurrent requests. Record model and quantization settings alongside any benchmark results.",
  },
];

export const getWork = (slug) => work.find((project) => project.slug === slug);
export const featuredWork = work.filter((project) => project.featured);
export const projectStatus = (project) => project.status ?? "Private";
export const isPrivate = (project) => !project.links?.length;
// Other work under the same service first, then the newest remaining projects.
export const relatedWork = (project, count = 3) =>
  [
    ...work.filter(
      (p) => p.service === project.service && p.slug !== project.slug,
    ),
    ...work.filter(
      (p) => p.service !== project.service && p.slug !== project.slug,
    ),
  ].slice(0, count);
