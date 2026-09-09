export const work = [
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
