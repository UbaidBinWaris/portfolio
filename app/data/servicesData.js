// One source for homepage cards, /slug pages, metadata, FAQs and discovery files.
export const services = [
  {
    slug: "ai-agent-development",
    number: "01",
    category: "Agent engineering",
    visual: "agents",
    title: "Custom AI Agent Development",
    shortTitle: "AI agents",
    headline: "Intelligence that",
    accent: "gets things done.",
    description:
      "Custom AI agents with tool calling, retrieval and human approval. Built by Ubaid Bin Waris for your workflows, APIs and business data.",
    intro:
      "Give your software the ability to reason, retrieve context and take useful action. I build AI agents around your systems, with explicit permissions and a clear path back to a human.",
    answer:
      "I develop custom AI agents that connect language models to your documents, APIs and workflows. Engagements cover retrieval, tool execution, evaluation and deployment, with human approval for sensitive actions.",
    stack: ["Node.js", "Tool calling", "RAG", "Ollama", "Vector search"],
    flow: [
      "Your knowledge",
      "Agent + context",
      "Tools & approvals",
      "Useful action",
    ],
    capabilities: [
      {
        title: "Answers grounded in your data",
        text: "Retrieval pipelines that bring relevant documents into the conversation and preserve source references for review.",
      },
      {
        title: "Tools with boundaries",
        text: "API integrations with input validation, scoped access and approval steps for actions that change important records.",
      },
      {
        title: "Evaluation before expansion",
        text: "A representative task set, observable tool traces and explicit fallback behavior to test what the agent can actually handle.",
      },
    ],
    deliverables: [
      "Agent workflow and tool contracts",
      "Retrieval and context pipeline",
      "Evaluation scenarios and failure handling",
      "Deployment notes and operational handover",
    ],
    useCases: [
      "Internal knowledge assistants",
      "Document intake and classification",
      "Customer operations copilots",
    ],
    project: "orenyx-ai-assistant",
    faqs: [
      {
        question: "What is the difference between a chatbot and an AI agent?",
        answer:
          "A chatbot primarily responds to messages. An agent can also call tools, retrieve business data and complete a sequence of tasks. I define which actions it may perform and where human approval is required.",
      },
      {
        question: "Can an agent use private company documents?",
        answer:
          "Yes. A retrieval pipeline can search authorized documents and provide relevant passages to the model. Access controls, hosting requirements and retention rules are agreed before implementation.",
      },
      {
        question: "Can you work with locally hosted models?",
        answer:
          "Yes. I work with Ollama and local model hosting. Model selection depends on available hardware, task accuracy and response-time requirements; I assess those constraints before proposing a deployment.",
      },
      {
        question: "How do you measure whether an agent works?",
        answer:
          "We define representative tasks and expected outcomes, then test answer quality, tool correctness and failure handling. An evaluation set and reviewable traces are more useful than a generic accuracy promise.",
      },
    ],
  },
  {
    slug: "voice-ai-developer",
    number: "02",
    category: "Voice & telephony",
    visual: "voice",
    title: "Voice AI & LiveKit Developer",
    shortTitle: "Voice AI",
    headline: "A better conversation.",
    accent: "Built into your business.",
    description:
      "Voice AI development with LiveKit, Vapi and Twilio. Call routing, CRM integration and human handoff by Ubaid Bin Waris. Available worldwide.",
    intro:
      "Turn phone calls into useful conversations. I connect real-time voice agents to the systems behind your business, from the first greeting to a booking, a CRM update or a human handoff.",
    answer:
      "I build voice AI agents using LiveKit, Vapi and telephony integrations. A project can include speech processing, business tools, call routing, interruption handling and transfer to your team.",
    stack: ["LiveKit", "Vapi", "Twilio", "Deepgram", "Node.js"],
    flow: ["Incoming call", "Voice agent", "CRM & scheduling", "Human handoff"],
    capabilities: [
      {
        title: "Conversations that can act",
        text: "Connect a caller to account lookups, appointment availability and CRM updates through validated business tools.",
      },
      {
        title: "Designed for interruptions",
        text: "Tune turn detection, speech streaming and interruption handling around representative callers and network conditions.",
      },
      {
        title: "A clear route to your team",
        text: "Define transfer rules, escalation context and failure fallbacks so the agent knows when to hand the conversation over.",
      },
    ],
    deliverables: [
      "Conversation flow and escalation rules",
      "Voice agent and telephony integration",
      "CRM or scheduling tool connections",
      "Call test scenarios and deployment handover",
    ],
    useCases: [
      "Inbound inquiry qualification",
      "Appointment booking",
      "Support triage and routing",
    ],
    project: "orenyx-voice-dispatch",
    faqs: [
      {
        question: "Do you build with LiveKit or Vapi?",
        answer:
          "I work with both. LiveKit is useful when the application needs control over its real-time media and agent runtime. Vapi provides managed voice orchestration. I select an approach based on your integrations, hosting preferences and operational needs.",
      },
      {
        question: "What response latency can you guarantee?",
        answer:
          "There is no universal latency guarantee. Telephony, speech providers, model choice, tools and network conditions all contribute. We agree on a target and test the complete conversation path before launch.",
      },
      {
        question: "Can the voice agent transfer a call to a person?",
        answer:
          "Yes, when supported by the chosen telephony setup. We define when to transfer, the destination and what context to pass to the receiving team, then test fallback behavior if that destination is unavailable.",
      },
      {
        question: "Are call recordings and provider fees included?",
        answer:
          "Recording is an explicit project decision, with consent and retention requirements agreed before launch. Telephony, model and speech-provider fees are separate from implementation unless the proposal states otherwise.",
      },
    ],
  },
  {
    slug: "ai-automation-n8n",
    number: "03",
    category: "Workflow automation",
    visual: "automation",
    title: "n8n Automation Consultant",
    shortTitle: "n8n automation",
    headline: "Less busywork.",
    accent: "More forward motion.",
    description:
      "n8n automation consulting for CRMs, webhooks and AI workflows. Self-hosted deployments, retries and handover by Ubaid Bin Waris.",
    intro:
      "Connect the tools you already use. I turn repetitive operations into observable workflows, with validation, retries and a human checkpoint wherever your process needs one.",
    answer:
      "I design and implement n8n workflows for lead intake, document processing, API integrations and CRM synchronization. I also configure self-hosted deployments and failure recovery for workflows your team relies on.",
    stack: ["n8n", "Webhooks", "PostgreSQL", "Docker", "JavaScript"],
    flow: [
      "Business event",
      "Validate & enrich",
      "Sync your systems",
      "Notify your team",
    ],
    capabilities: [
      {
        title: "Connect the disconnected",
        text: "Bring forms, CRMs, databases and notifications into a defined process with consistent payloads and clear ownership.",
      },
      {
        title: "Make failure recoverable",
        text: "Design idempotent steps, retry policies and error queues so a temporary provider outage does not silently lose work.",
      },
      {
        title: "Own your automation",
        text: "Self-hosted Docker deployments with PostgreSQL, credential handling, backup procedures and operating documentation.",
      },
    ],
    deliverables: [
      "Workflow map and integration inventory",
      "Documented n8n workflow exports",
      "Error alerts, retries and replay guidance",
      "Hosting setup and maintenance handover",
    ],
    useCases: [
      "Lead intake and CRM routing",
      "Document processing",
      "Internal operations alerts",
    ],
    project: "telegram-ai-video-automation",
    faqs: [
      {
        question: "Can you self-host n8n?",
        answer:
          "Yes. I can set up n8n using Docker and PostgreSQL on a suitable server. Queue workers, backups and monitoring are scoped to the expected workload and the current n8n licensing terms.",
      },
      {
        question: "What happens when an API fails?",
        answer:
          "The workflow should validate responses, retry suitable failures and send persistent errors to a reviewable queue or alert channel. I also design replay behavior to avoid duplicate CRM records or notifications.",
      },
      {
        question: "Can you improve an existing n8n workflow?",
        answer:
          "Yes. I review the existing workflow, execution history, credentials and integration constraints, then propose specific reliability or maintenance improvements before changing the process.",
      },
      {
        question: "Will my team be able to maintain the workflows?",
        answer:
          "The handover includes workflow exports, configuration notes and recovery instructions. Ongoing maintenance can be scoped separately when your team wants help with provider changes or new integrations.",
      },
    ],
  },
  {
    slug: "backend-architecture",
    number: "04",
    category: "Backend systems",
    visual: "backend",
    title: "Node.js Backend & API Developer",
    shortTitle: "Backend systems",
    headline: "Strong foundations.",
    accent: "Room to grow.",
    description:
      "Node.js backend and API development with PostgreSQL, Redis and queues. System architecture and integration by Ubaid Bin Waris.",
    intro:
      "The best infrastructure is the kind your team can trust and understand. I build APIs, worker systems and data flows with clear contracts, observable behavior and deliberate failure handling.",
    answer:
      "I build Node.js APIs, asynchronous workers and database integrations. Projects cover authentication, queue processing, Redis coordination, data modeling and deployment, based on the workload you actually need to support.",
    stack: ["Node.js", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    flow: [
      "Client request",
      "Authenticated API",
      "Queue & workers",
      "Persistent state",
    ],
    capabilities: [
      {
        title: "APIs with clear contracts",
        text: "Typed payloads, input validation and consistent errors make your backend easier to integrate, evolve and debug.",
      },
      {
        title: "Work beyond the request",
        text: "Move expensive jobs into queues with deliberate retry behavior, idempotency and progress your application can observe.",
      },
      {
        title: "Data under control",
        text: "Design database access and Redis coordination around consistency requirements, contention and recovery behavior.",
      },
    ],
    deliverables: [
      "API and data-model documentation",
      "Authentication and validated endpoints",
      "Worker and retry implementation",
      "Load-test plan and operational handover",
    ],
    useCases: [
      "SaaS application backends",
      "AI session coordination",
      "API integration services",
    ],
    project: "sales-call-intelligence",
    faqs: [
      {
        question: "Can you scale my existing Node.js API?",
        answer:
          "I start by identifying the actual bottleneck through logs, database queries and representative load tests. The solution may involve queries, caching, queues or concurrency limits rather than adding more services.",
      },
      {
        question: "Do you use Redis for persistent business data?",
        answer:
          "I typically use PostgreSQL or MongoDB as the durable source of truth and Redis for caching or coordination where appropriate. Persistence and recovery requirements determine the final design.",
      },
      {
        question: "How do you handle duplicate background jobs?",
        answer:
          "I design job handlers around idempotency keys, durable state transitions and explicit retry semantics. Distributed locks alone are not a guarantee of exactly-once execution.",
      },
      {
        question: "Can you work alongside an existing frontend team?",
        answer:
          "Yes. I can define API contracts, integration examples and error behavior with your frontend team and deliver the backend in reviewable increments.",
      },
    ],
  },
  {
    slug: "infrastructure-devops",
    number: "05",
    category: "Cloud & infrastructure",
    visual: "infrastructure",
    title: "Linux & Cloud Infrastructure Engineer",
    shortTitle: "Infrastructure",
    headline: "From local build",
    accent: "to dependable deployment.",
    description:
      "Linux, Docker and cloud deployment by Ubaid Bin Waris. Server setup, reverse proxies, backups and local LLM hosting with documented handover.",
    intro:
      "Give your application a home that is easy to operate. I configure Linux servers, containerized services and deployment workflows, with the documentation your next engineer will appreciate.",
    answer:
      "I configure Linux infrastructure for web applications, workers and local model workloads. Services include Docker deployment, reverse proxies, backups, monitoring setup and operational documentation.",
    stack: ["Linux", "Docker", "Nginx", "Hetzner / AWS", "Ollama"],
    flow: [
      "Application build",
      "Container runtime",
      "Proxy & network",
      "Monitor & recover",
    ],
    capabilities: [
      {
        title: "Repeatable deployments",
        text: "Container definitions and environment documentation that turn a one-off server setup into a process your team can repeat.",
      },
      {
        title: "Operational visibility",
        text: "Useful logs, health checks and backup procedures, with practical recovery instructions instead of assumptions.",
      },
      {
        title: "Local inference foundations",
        text: "Assess memory, model size and workload before configuring Ollama and service isolation on your own hardware.",
      },
    ],
    deliverables: [
      "Server and container configuration",
      "Reverse proxy and TLS setup",
      "Backup and recovery procedures",
      "Deployment runbook and handover",
    ],
    useCases: [
      "Application and worker hosting",
      "Self-hosted automation",
      "Private model inference",
    ],
    project: "aws-spring-boot-deployment",
    faqs: [
      {
        question: "Which hosting providers do you work with?",
        answer:
          "I work with Linux-based hosting, including Hetzner and AWS. The choice depends on region, workload, managed-service needs and the budget agreed during scoping.",
      },
      {
        question: "Can you deploy a local language model?",
        answer:
          "Yes. I can configure Ollama and containerized services on suitable hardware. Model size, quantization, memory and expected concurrency determine whether the hardware is a practical fit.",
      },
      {
        question: "Do you offer ongoing server maintenance?",
        answer:
          "Maintenance can be agreed separately from setup. The scope should identify update ownership, backup checks, monitoring and response expectations; round-the-clock support is not assumed.",
      },
      {
        question: "How are secrets handed over?",
        answer:
          "Credentials stay outside source control and are transferred through an agreed secure channel. The runbook records where configuration belongs and who owns rotation, without embedding secret values.",
      },
    ],
  },
  {
    slug: "hire-nextjs-developer-pakistan",
    number: "06",
    category: "Full-stack development",
    visual: "web",
    title: "Next.js Developer in Pakistan",
    shortTitle: "Next.js development",
    headline: "Thoughtful interfaces.",
    accent: "Solid engineering underneath.",
    description:
      "Hire Ubaid Bin Waris, a Next.js developer in Islamabad, Pakistan. App Router websites, SaaS interfaces and backend integration for remote teams.",
    intro:
      "A great web experience should feel effortless. I build Next.js applications with useful interfaces, accessible interactions and the backend foundations to support what comes next.",
    answer:
      "I am a Next.js and full-stack developer based in Islamabad, Pakistan, working remotely with international teams. I build App Router websites, application interfaces and backend integrations, and help improve existing React applications.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    flow: [
      "User intent",
      "Accessible interface",
      "Server & API",
      "Business outcome",
    ],
    capabilities: [
      {
        title: "Interfaces with intention",
        text: "Responsive layouts and keyboard-accessible interactions, designed around the decisions your visitors need to make.",
      },
      {
        title: "Rendering that fits",
        text: "Server Components and appropriate caching keep content available to visitors and crawlers without shipping unnecessary client code.",
      },
      {
        title: "Connected from end to end",
        text: "Integrate forms, business APIs and data storage with validation, error states and an understandable handover.",
      },
    ],
    deliverables: [
      "Responsive Next.js implementation",
      "Metadata, sitemap and canonical setup",
      "Backend or third-party integrations",
      "Performance checks and deployment notes",
    ],
    useCases: [
      "Business and portfolio websites",
      "SaaS application interfaces",
      "React to Next.js migrations",
    ],
    project: "gixiai-website",
    faqs: [
      {
        question: "Where are you based and do you work remotely?",
        answer:
          "I am based in Islamabad, Pakistan (UTC+5), and work remotely with international teams. We agree on communication channels and overlapping working hours before the engagement starts.",
      },
      {
        question: "Can you migrate a React application to Next.js?",
        answer:
          "Yes. I review routes, data fetching, authentication and hosting constraints, then plan a staged migration. Existing functionality is checked as routes move into the App Router.",
      },
      {
        question: "How much does a Next.js project cost?",
        answer:
          "Pricing depends on the scope, integrations and delivery requirements. Share your goals, existing application and target date, and I can provide a scoped proposal with deliverables and exclusions.",
      },
      {
        question: "Does building with Next.js guarantee search rankings?",
        answer:
          "No framework guarantees rankings. I implement the technical foundations: indexable content, correct metadata, canonical URLs and a working sitemap. Visibility also depends on content quality, relevance and external recognition.",
      },
    ],
  },
];

export const getService = (slug) =>
  services.find((service) => service.slug === slug);
