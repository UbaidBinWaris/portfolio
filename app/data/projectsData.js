export const projectsData = [
  {
    id: 1,
    title: "AI Voice Qualification & Telephony Platform",
    description:
      "Realtime phone conversation agent with low-latency WebRTC streaming, intent recognition, lead scoring, CRM sync, and automated live call transfer.",
    tech: ["LiveKit", "Vapi", "Deepgram", "Node.js", "Redis", "Docker"],
    status: "LIVE",
    link: "https://ubaidbinwaris.com/#contact",
    github: "https://github.com/UbaidBinWaris",
    command: "deploy --system voice-ai-agent",
  },
  {
    id: 2,
    title: "Enterprise AI Session Manager",
    description:
      "Microservice handling high-throughput socket and voice sessions with Redis distributed locks (Redlock), BullMQ queues, rate limiting, and atomic state handoffs.",
    tech: ["Node.js", "Redis", "BullMQ", "JWT", "Docker"],
    status: "LIVE",
    link: "https://ubaidbinwaris.com/#architecture",
    github: "https://github.com/UbaidBinWaris",
    command: "benchmark --target session-locks",
  },
  {
    id: 3,
    title: "Autonomous Lead Automation Platform",
    description:
      "Self-hosted event processing pipeline capturing webhooks, running AI ICP qualification, updating Postgres/CRMs, and pushing instant team alerts.",
    tech: ["n8n", "Node.js", "Postgres", "Docker", "Webhooks"],
    status: "LIVE",
    link: "https://ubaidbinwaris.com/#architecture",
    github: "https://github.com/UbaidBinWaris",
    command: "orchestrate --pipeline n8n-crm",
  },
  {
    id: 4,
    title: "AI-Driven SEO & Content Clustering Engine",
    description:
      "Autonomous indexing platform analyzing target keywords, generating programmatic structured data, and submitting real-time updates via IndexNow protocol.",
    tech: ["Next.js", "OpenAI API", "IndexNow", "Python", "SEO"],
    status: "LIVE",
    link: "https://ubaidbinwaris.com/#projects",
    github: "https://github.com/UbaidBinWaris",
    command: "execute --task ai-seo-crawl",
  },
  {
    id: 5,
    title: "On-Premise Local LLM Inference Workstation",
    description:
      "Self-hosted Linux workstation hosting quantized open-weights (Qwen / Gemma) with Ollama, isolated Docker environments, and high-RAM execution.",
    tech: ["HP Z840", "96GB RAM", "Linux", "Ollama", "Docker"],
    status: "OPERATIONAL",
    link: "https://ubaidbinwaris.com/#experience",
    github: "https://github.com/UbaidBinWaris",
    command: "ollama run qwen2.5:72b-instruct",
  },
];