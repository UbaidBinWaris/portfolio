import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const disciplines = [
  { number: "01", title: "Product frontend", summary: "Fast, accessible product interfaces with maintainable component systems.", tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"], href: "/hire-nextjs-developer-pakistan" },
  { number: "02", title: "Backend engineering", summary: "APIs, services, queues, authentication, and reliable business logic.", tools: ["NestJS", "Express.js", "Node.js", "Java", "Spring Boot"], href: "/backend-architecture" },
  { number: "03", title: "AI automation", summary: "Useful agents and workflows connected to real tools, data, and approvals.", tools: ["AI Agents", "n8n", "Tool Calling", "RAG", "Webhooks"], href: "/ai-agent-development" },
  { number: "04", title: "Voice AI systems", summary: "Real-time voice agents with telephony, CRM tools, routing, and handoff.", tools: ["LiveKit", "Vapi", "Twilio", "Deepgram", "WebRTC"], href: "/voice-ai-developer" },
  { number: "05", title: "Databases & data", summary: "Practical schemas, queries, migrations, caching, and durable application state.", tools: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "Redis"], href: "/backend-architecture" },
  { number: "06", title: "DevOps & servers", summary: "Repeatable deployments, secure web servers, SSL, and Linux operations.", tools: ["Linux", "Docker", "Nginx", "Apache", "Certbot", "GitHub Actions", "Bash"], href: "/infrastructure-devops" },
];

export default function StackMatrix() {
  return (
    <section id="expertise" className="stack-matrix-section" aria-labelledby="stack-heading">
      <div className="stack-matrix-intro">
        <div>
          <p className="eyebrow">02 / FULL-STACK PRACTICE</p>
          <h2 id="stack-heading">One engineer across<br /><span>the entire delivery path.</span></h2>
        </div>
        <p>I work where product engineering, backend systems, AI, and operations meet—so features are designed with deployment and long-term ownership in mind.</p>
      </div>
      <div className="stack-matrix-grid">
        {disciplines.map((discipline) => (
          <Link href={discipline.href} className="stack-discipline" key={discipline.number}>
            <div className="stack-discipline-top"><span>{discipline.number}</span><ArrowUpRight size={18} aria-hidden="true" /></div>
            <h3>{discipline.title}</h3>
            <p>{discipline.summary}</p>
            <div className="stack-tool-list">{discipline.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
          </Link>
        ))}
      </div>
      <div className="arch-signature">
        <span className="arch-logo" aria-hidden="true">A</span>
        <div>
          <p className="arch-command">$ uname -daily-driver</p>
          <strong>I use Arch, BTW.</strong>
          <span>Permanently running Arch Linux for years—building, deploying, and managing systems from the same environment I trust every day.</span>
        </div>
        <span className="arch-status">● system stable</span>
      </div>
    </section>
  );
}
