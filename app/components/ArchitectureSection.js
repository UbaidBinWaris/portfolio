"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: "session-manager",
    title: "High-Concurrency AI Session Manager",
    badge: "BACKEND ARCHITECTURE",
    metrics: "100k+ concurrent sessions / <15ms lock latency",
    problem:
      "High-throughput AI agent platforms suffer from race conditions, memory leaks, and out-of-order state updates when thousands of concurrent socket/voice sessions hit LLM worker pools.",
    architecture: [
      "Node.js Stateless Gateway -> Distributed Lock Manager (Redis Redlock)",
      "BullMQ Task Queues with Exponential Backoff & Dead Letter Exchanges",
      "Worker Pool with Dynamic Memory Trimming & Token Bucket Rate Limiting",
      "JWT Session Validation with Ephemeral Cache in Redis Cluster",
    ],
    challenges: "Handling thread safety across horizontal worker nodes during network partition events.",
    solution: "Implemented Redis distributed mutex locks paired with atomic lua script execution for atomic session handoffs.",
    result: "Achieved 99.99% uptime, zero duplicate tool execution, and 98% faster lock release speeds under stress.",
    diagram: `
  [Client WebSockets / Voice Audio]
                 │
                 ▼
     ┌──────────────────────┐
     │  Fastify API Gateway │
     └──────────┬───────────┘
                │ (JWT Auth & Lock)
                ▼
     ┌──────────────────────┐        ┌───────────────────────┐
     │ Redis Cluster (Locks)├───────►│ BullMQ Task Queue     │
     └──────────────────────┘        └──────────┬────────────┘
                                                │
                                                ▼
                                    ┌───────────────────────┐
                                    │ AI Worker Pool        │
                                    │ (OpenAI / Local LLMs) │
                                    └───────────────────────┘
    `,
  },
  {
    id: "voice-ai",
    title: "Realtime Telephony AI Qualification Engine",
    badge: "VOICE AI & TELEPHONY",
    metrics: "Low Latency Audio (<450ms turnaround)",
    problem:
      "Traditional inbound call centers lose 40% of leads due to wait times, while standard chatbots lack human-like natural conversation, intent recognition, and immediate phone transfer capabilities.",
    architecture: [
      "Twilio / SIP Telephony Trunking -> WebRTC Streaming Server (LiveKit)",
      "Deepgram Nova-2 STT (Streaming WebSocket input with VAD)",
      "LLM Agent Core (Tool calling, Lead Scoring Matrix, Objection Handling)",
      "ElevenLabs / Cartesia Ultra-Low Latency Speech Synthesis",
      "Live Transfer Trigger via SIP REFER when Lead Score > 85",
    ],
    challenges: "Audio stuttering, latency spikes over cellular networks, and mid-sentence user interruptions.",
    solution: "Configured custom Voice Activity Detection (VAD) buffer windows and bidirectional WebRTC streams with interruption handling.",
    result: "Scaled inbound lead qualification to 5,000+ calls/day with a 4.2x improvement in sales transfer rate.",
    diagram: `
  [Phone Caller] ──(Twilio SIP)──► [LiveKit WebRTC Media Server]
                                           │
                        ┌──────────────────┴──────────────────┐
                        ▼                                     ▼
             [Deepgram Streaming STT]             [Cartesia Realtime TTS]
                        │                                     ▲
                        ▼                                     │
             ┌────────────────────────────────────────────────┴┐
             │ AI Conversation Agent (Tool Calling + Scoring)  │
             └────────────────────────┬────────────────────────┘
                                      │ (If Score > 85)
                                      ▼
                        [SIP Transfer to Sales Representative]
    `,
  },
  {
    id: "n8n-automation",
    title: "Autonomous Lead Qualification & CRM Pipeline",
    badge: "WORKFLOW AUTOMATION",
    metrics: "10,000+ leads processed / 100% automated CRM sync",
    problem:
      "Manual lead processing created a 4-hour delay between form submission and sales outreach, causing critical drop-off in high-intent prospects.",
    architecture: [
      "Inbound Webhooks -> Event Validation & Payload Normalization",
      "n8n Self-Hosted Orchestrator (Docker on Ubuntu VPS)",
      "AI Lead Enrichment (GPT-4o mini company research & ICP matching)",
      "Postgres Data Warehouse + Realtime Slack/WhatsApp Notifications",
    ],
    challenges: "Handling rate limits across third-party enrichment APIs and webhook retry spikes.",
    solution: "Constructed an idempotent queue retry pipeline with dead-letter queue fallbacks in Postgres.",
    result: "Reduced lead processing speed from 4 hours to under 8 seconds with automatic CRM routing.",
    diagram: `
  [Web Forms / Meta Ads] ──(Webhook)──► [n8n Automation Engine]
                                                │
                       ┌────────────────────────┼────────────────────────┐
                       ▼                        ▼                        ▼
             [AI ICP Classifier]      [Postgres Data Store]    [CRM Auto-Creation]
                       │                                                 │
                       └──────────────────┬──────────────────────────────┘
                                          ▼
                               [Instant Sales Notification]
    `,
  },
];

export default function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState("session-manager");
  const [expanded, setExpanded] = useState(false);

  const current = caseStudies.find((c) => c.id === activeTab) || caseStudies[0];

  return (
    <section
      id="architecture"
      className="w-full bg-[#0A1930] py-20 px-6 md:px-10 border-t border-[#1a3a5c]"
      aria-labelledby="architecture-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4">
            <p className="text-[#63B8B2] font-mono text-sm tracking-widest shrink-0">01 /</p>
            <h2
              id="architecture-heading"
              className="text-white font-bold text-2xl md:text-3xl shrink-0"
            >
              System Architecture &amp; Case Studies
            </h2>
            <div className="flex-1 h-px bg-[#1a3a5c]" />
          </div>
          <p className="text-gray-400 text-sm mt-2 font-mono">
            // Real-world engineering patterns, distributed locks, and production AI blueprints
          </p>
        </motion.div>

        {/* Tab selection */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-[#1a3a5c] pb-4">
          <div className="flex flex-wrap gap-2">
            {caseStudies.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 font-mono text-xs rounded-sm transition-all duration-200 custom-pointer ${
                  activeTab === item.id
                    ? "bg-[#63B8B2] text-[#0A1930] font-bold shadow-md"
                    : "bg-[#060e1f] text-gray-400 hover:text-white border border-[#1a3a5c]"
                }`}
              >
                $ view --arch={item.id}
              </button>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 font-mono text-xs text-[#63B8B2] hover:underline custom-pointer"
          >
            <span>{expanded ? "[ - Collapse Details ]" : "[ + Expand Blueprint Diagram ]"}</span>
          </button>
        </div>

        {/* Display Card */}
        <div className="bg-[#060e1f] border border-[#1a3a5c] rounded-sm overflow-hidden glow-teal">
          {/* Card Header */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-[#0f2744] border-b border-[#1a3a5c] gap-4">
            <div>
              <span className="text-[#63B8B2] text-xs font-mono tracking-wider font-semibold mr-3">
                [{current.badge}]
              </span>
              <h3 className="text-white font-bold text-lg inline-block">
                {current.title}
              </h3>
            </div>
            <span className="text-green-400 font-mono text-xs bg-green-400/10 px-3 py-1 rounded border border-green-400/30">
              ⚡ {current.metrics}
            </span>
          </div>

          {/* Compact Overview */}
          <div className="px-6 py-4 border-b border-[#1a3a5c]/60 flex flex-col md:flex-row md:items-center justify-between gap-4 font-sans">
            <p className="text-gray-300 text-sm max-w-3xl leading-relaxed">
              <span className="text-[#63B8B2] font-mono text-xs mr-2 font-semibold">// Problem:</span>
              {current.problem}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="shrink-0 bg-[#1a3a5c]/60 hover:bg-[#63B8B2]/20 text-[#63B8B2] px-4 py-2 text-xs font-mono rounded border border-[#63B8B2]/30 transition-colors custom-pointer"
            >
              {expanded ? "Hide Diagram & Specs" : "View Architecture Diagram"}
            </button>
          </div>

          {/* Expandable Technical Deep-Dive & ASCII Diagram */}
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-[#1a3a5c]"
            >
              {/* Left Col */}
              <div className="space-y-6 font-sans">
                <div>
                  <h4 className="text-[#63B8B2] font-mono text-xs uppercase tracking-wider mb-2">
                    // Key Architectural Components
                  </h4>
                  <ul className="space-y-1.5 font-mono text-xs text-gray-300">
                    {current.architecture.map((archLine, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#63B8B2] shrink-0">►</span>
                        <span>{archLine}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#0A1930] p-4 rounded border border-[#1a3a5c]">
                    <h5 className="text-yellow-400 font-mono text-xs mb-1">Challenge</h5>
                    <p className="text-gray-400 text-xs">{current.challenges}</p>
                  </div>
                  <div className="bg-[#0A1930] p-4 rounded border border-[#1a3a5c]">
                    <h5 className="text-green-400 font-mono text-xs mb-1">Outcome</h5>
                    <p className="text-gray-300 text-xs">{current.result}</p>
                  </div>
                </div>
              </div>

              {/* Right Col: ASCII Diagram */}
              <div className="bg-[#030914] border border-[#1a3a5c] p-6 rounded font-mono text-xs text-[#63B8B2] overflow-x-auto flex flex-col justify-center">
                <div className="text-gray-500 text-[11px] mb-3 pb-2 border-b border-[#1a3a5c]">
                  // System Sequence Diagram
                </div>
                <pre className="leading-tight text-gray-300">
                  {current.diagram}
                </pre>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
