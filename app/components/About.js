import Image from "next/image";
import { MapPin, Cpu, Globe } from "lucide-react";
import { site } from "../data/site";

const storyBlocks = [
  {
    tag: "who_i_am",
    text: "I am Ubaid Bin Waris, a full-stack developer and backend engineer based in Islamabad, Pakistan. I build complete products across React interfaces, APIs, databases, AI systems, deployment pipelines, and Linux infrastructure.",
  },
  {
    tag: "what_i_do",
    text: "My backend work spans Node.js, NestJS, Express.js, Java and Spring Boot. I also build production AI automation, LiveKit and Vapi voice agents, Redis-backed services, and n8n workflows.",
  },
  {
    tag: "hardware",
    text: "I use Arch, BTW. Arch Linux has been my permanent daily driver for years. I also run a dedicated HP Z840 dual-Xeon workstation with 96GB RAM for local LLM experiments and self-hosted system testing.",
  },
  {
    tag: "philosophy",
    text: "Design for scale and resiliency. Use distributed locks for concurrent workers, persistent queues for webhook retries, and strict isolation for production agent environments.",
  },
];

const capabilities = [
  { area: "AI Agents", items: ["OpenAI & Claude APIs", "Tool Calling & MCP", "Ollama Local LLMs", "RAG & Vector Search"] },
  { area: "Voice AI", items: ["LiveKit WebRTC", "Vapi & Twilio", "Deepgram STT", "Cartesia Realtime TTS"] },
  { area: "Backend Systems", items: ["Node.js, NestJS & Express", "Java & Spring Boot", "BullMQ & RabbitMQ", "REST & WebSockets"] },
  { area: "Automation", items: ["n8n Workflows", "Trigger.dev", "Webhook Pipelines", "Lead Qualification"] },
  { area: "Infrastructure", items: ["Arch Linux & Server Admin", "Docker & Compose", "Nginx, Apache & Certbot", "CI/CD & GitHub Actions"] },
  { area: "Product & Data", items: ["Next.js & React", "PostgreSQL & Supabase", "MongoDB & MySQL", "TypeScript & Tailwind"] },
];

const philosophy = [
  { key: "ai_systems", desc: "Building tool-calling AI agents with memory, evaluations and explicit permissions." },
  { key: "concurrency", desc: "Distributed coordination, idempotent jobs and queues to manage concurrency." },
  { key: "production_devops", desc: "Dockerized deployments on Linux servers with monitoring and SSL proxies." },
  { key: "business_impact", desc: "Automating core sales, qualification, and data processes for high ROI." },
];

const facts = [
  [MapPin, "Islamabad, PK"],
  [Cpu, "Systems Engineer"],
  [Globe, "Node / Next.js / AI"],
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-background py-24 px-6 md:px-10 border-b border-line"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow">04 / ABOUT</p>
        <h2
          id="about-heading"
          className="text-fg text-3xl md:text-4xl font-semibold tracking-tight mb-12"
        >
          The engineer behind the work.{" "}
          <span className="sr-only">About Ubaid Bin Waris</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
          <div className="space-y-6 min-w-0">
            <div className="bg-surface border border-line rounded-card p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative shrink-0 w-28 h-28 rounded-lg overflow-hidden border border-line">
                <Image
                  src="/me.jpeg"
                  alt="Ubaid Bin Waris"
                  fill
                  sizes="112px"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-fg text-lg font-semibold">Ubaid Bin Waris</h3>
                <p className="text-accent-fg font-mono text-xs mt-1">
                  Senior Full Stack & AI Systems Engineer
                </p>
                <ul className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                  {facts.map(([Icon, label]) => (
                    <li key={label} className="tag flex items-center gap-1.5">
                      <Icon size={12} aria-hidden="true" /> {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <dl className="bg-surface border border-line rounded-card divide-y divide-line">
              {storyBlocks.map((block) => (
                <div key={block.tag} className="p-6">
                  <dt className="font-mono text-xs text-fg-subtle mb-2">
                    {`// ${block.tag}`}
                  </dt>
                  <dd className="text-fg-muted text-sm leading-7">{block.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-6 min-w-0">
            <div className="bg-surface border border-line rounded-card p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-fg text-base font-semibold">Capabilities</h3>
                <span className="font-mono text-xs text-fg-subtle">6 domains</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap) => (
                  <div key={cap.area}>
                    <p className="font-mono text-xs text-accent-fg uppercase tracking-wide mb-2">
                      {cap.area}
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {cap.items.map((item) => (
                        <li key={item} className="tag">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <ul className="bg-surface border border-line rounded-card p-6 space-y-4">
              {philosophy.map((item) => (
                <li key={item.key} className="flex gap-3 text-sm leading-6">
                  <span className="text-success shrink-0" aria-hidden="true">
                    ✓
                  </span>
                  <p>
                    <span className="font-mono text-xs text-accent-fg">
                      {item.key}
                    </span>
                    <span className="block text-fg-muted">{item.desc}</span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="bg-surface border border-line rounded-card p-6">
              <p className="status-pill">
                <span className="status-dot" aria-hidden="true" />
                <span>Available for hire</span>
              </p>
              <p className="text-fg-muted text-sm leading-7 mt-4 mb-6">
                Open to freelance contracts and full-time roles. Let&apos;s build
                something that&apos;s worth building.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={site.profiles[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Hire on Upwork
                </a>
                <a
                  href={site.profiles[3]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Hire on Fiverr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
