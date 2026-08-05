"use client";
import React from "react";
import { motion } from "framer-motion";

const activeRoadmap = [
  {
    title: "Enterprise AI Session Manager",
    tech: "Node.js • Redis • BullMQ • Redlock",
    status: "BUILDING",
    progress: "85%",
    detail: "Stateless API gateway with distributed lock release & event queues for horizontal worker scaling.",
  },
  {
    title: "Realtime Voice AI Telephony Agent",
    tech: "LiveKit • Vapi • Deepgram • Cartesia",
    status: "TESTING",
    progress: "90%",
    detail: "Inbound phone call qualification engine with VAD audio streaming and live human transfer.",
  },
  {
    title: "Autonomous AI SEO & Indexing Platform",
    tech: "Next.js • OpenAI • IndexNow • Python",
    status: "DEPLOYED",
    progress: "100%",
    detail: "Automated content generation, programmatic metadata clustering, and instant search engine index submission.",
  },
  {
    title: "On-Premise Local LLM Workstation Cluster",
    tech: "HP Z840 • 96GB RAM • Ollama • Docker",
    status: "OPERATIONAL",
    progress: "100%",
    detail: "Self-hosted Qwen/Gemma inference workstation with custom REST wrappers and security isolation.",
  },
];

export default function CurrentlyBuilding() {
  const [showAll, setShowAll] = React.useState(false);

  return (
    <div className="w-full bg-[#060e1f] border-y border-[#1a3a5c] py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
            <h3 className="text-white text-sm font-bold font-mono uppercase tracking-wider">
              Currently Building &amp; Benchmarking
            </h3>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#63B8B2] font-mono text-xs hover:underline custom-pointer"
          >
            {showAll ? "[ Hide Roadmap ]" : "[ Expand Roadmap (4) ]"}
          </button>
        </div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2"
          >
            {activeRoadmap.map((item, i) => (
              <div
                key={item.title}
                className="bg-[#0A1930] border border-[#1a3a5c] p-4 rounded-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[#63B8B2] text-[10px] font-mono border border-[#63B8B2]/30 px-1.5 py-0.5 rounded">
                    {item.status}
                  </span>
                  <span className="text-gray-400 text-xs font-mono">{item.progress}</span>
                </div>
                <h4 className="text-white text-xs font-bold mb-1 truncate">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-[11px] mb-2 line-clamp-2 leading-relaxed">
                  {item.detail}
                </p>
                <div className="text-[10px] font-mono text-[#63B8B2]/80 border-t border-[#1a3a5c]/60 pt-1.5 truncate">
                  {item.tech}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
