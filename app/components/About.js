"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ─── Data ─── */
const storyBlocks = [
  {
    tag: "// who_i_am",
    label: "Background",
    text: "Ubaid Bin Waris — Backend-focused Full Stack Engineer and CS student from Islamabad, Pakistan. I build production-ready systems that are clean, scalable, and deployed.",
  },
  {
    tag: "// what_i_do",
    label: "Focus",
    text: "Backend architecture, REST API design, AI automation pipelines, and full-stack delivery. I handle everything from database schema to cloud deployment.",
  },
  {
    tag: "// how_i_think",
    label: "Approach",
    text: "Start with constraints. Design for scale. Ship with confidence. Every system decision is deliberate — I don't add complexity without reason.",
  },
  {
    tag: "// what_matters",
    label: "Priority",
    text: "Systems that work under load. Code that the next engineer can read. Infrastructure that doesn't require babysitting at 2AM.",
  },
];

const capabilities = [
  { area: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL"] },
  { area: "Automation", items: ["n8n Workflows", "AI Pipelines", "Webhooks", "Schedulers"] },
  { area: "Infrastructure", items: ["Linux Admin", "Docker", "PM2", "Nginx"] },
  { area: "Cloud", items: ["AWS", "Hetzner", "Hostinger", "CI/CD"] },
  { area: "Database", items: ["MongoDB", "PostgreSQL", "Redis", "Schema Design"] },
  { area: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind"] },
];

const philosophy = [
  { key: "QUALITY_FIRST", desc: "Clean, maintainable, scalable code following industry best practices." },
  { key: "FULL_STACK", desc: "Frontend, backend, databases, and infrastructure — complete solutions." },
  { key: "PERF_SECURITY", desc: "Apps optimized for speed, scalability, and secure deployment." },
  { key: "REAL_IMPACT", desc: "Building projects that solve actual problems, not just practice code." },
];

/* ─── Staggered reveal hook ─── */
const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function StaggerBlock({ children, index = 0, className = "" }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated progress bar ─── */
function ProgressBar({ level, delay = 0 }) {
  return (
    <div
      className="w-full bg-[#1a3a5c] h-[3px] rounded-none"
      role="progressbar"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: "easeOut" }}
        className="bg-[#63B8B2] h-[3px]"
      />
    </div>
  );
}

/* ─── Section header (consistent with site pattern) ─── */
function SectionHeader() {
  return (
    <StaggerBlock index={0} className="mb-16">
      <div className="flex items-center gap-4">
        <p className="text-[#63B8B2] font-mono text-sm tracking-widest shrink-0">01 /</p>
        <h2
          id="about-heading"
          className="text-white font-bold text-2xl md:text-3xl shrink-0"
        >
          About
        </h2>
        <div className="flex-1 h-px bg-[#1a3a5c]" />
        <p className="text-gray-600 font-mono text-xs shrink-0 hidden md:block">
          ~/ubaid/about.md
        </p>
      </div>
    </StaggerBlock>
  );
}

/* ─── Left column: Story blocks + philosophy ─── */
function StoryColumn() {
  return (
    <div className="space-y-5">
      {/* Code-file wrapper */}
      <StaggerBlock index={1}>
        <div className="bg-[#060e1f] border border-[#1a3a5c] rounded-sm overflow-hidden">
          {/* Titlebar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0f2744] border-b border-[#1a3a5c]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <span className="text-gray-600 text-xs font-mono ml-2">about.md</span>
          </div>

          {/* Story blocks with line numbers */}
          <div className="font-mono text-sm">
            {storyBlocks.map((block, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className={`flex gap-0 ${i !== storyBlocks.length - 1 ? "border-b border-[#0f2744]" : ""}`}
              >
                {/* Line number gutter */}
                <div className="w-9 shrink-0 py-4 text-right pr-3 text-[#1a3a5c] text-xs select-none border-r border-[#0f2744]">
                  {(i * 5 + 1).toString().padStart(2, "0")}
                </div>
                {/* Content */}
                <div className="flex-1 px-4 py-4">
                  <p className="text-[#63B8B2]/60 text-xs mb-1.5">{block.tag}</p>
                  <p className="text-gray-300 leading-relaxed text-sm">{block.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </StaggerBlock>

      {/* Philosophy / process log */}
      <StaggerBlock index={2}>
        <div className="bg-[#060e1f] border border-[#1a3a5c] rounded-sm overflow-hidden">
          <div className="px-4 py-2.5 bg-[#0f2744] border-b border-[#1a3a5c]">
            <p className="text-gray-600 text-xs font-mono">$ cat work_philosophy.log</p>
          </div>
          <div className="p-5 space-y-3 font-mono text-xs">
            {philosophy.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <span className="text-green-500 shrink-0 mt-px">✓</span>
                <div>
                  <span className="text-[#63B8B2]">[{item.key}]</span>
                  <span className="text-gray-400 ml-2">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </StaggerBlock>
    </div>
  );
}

/* ─── Right column: Capability grid + hire CTA ─── */
function SystemColumn() {
  return (
    <div className="space-y-5">
      {/* Capability grid */}
      <StaggerBlock index={1}>
        <div className="bg-[#060e1f] border border-[#1a3a5c] rounded-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f2744] border-b border-[#1a3a5c]">
            <p className="text-gray-600 text-xs font-mono">$ ls -la /proc/capabilities/</p>
            <span className="text-[#63B8B2] text-xs font-mono">6 domains</span>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-[#1a3a5c] p-3 hover:border-[#63B8B2]/40 transition-colors duration-300 group"
              >
                <p className="text-[#63B8B2] text-[10px] font-mono tracking-widest mb-2 uppercase">
                  {cap.area}
                </p>
                <div className="flex flex-wrap gap-1">
                  {cap.items.map((item) => (
                    <span
                      key={item}
                      className="text-gray-400 text-[11px] font-mono bg-[#0f2744] px-1.5 py-0.5 group-hover:text-gray-300 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Uptime-style footer */}
          <div className="px-4 py-2 border-t border-[#0f2744] flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-status-pulse shrink-0" />
            <span className="text-gray-600 text-xs font-mono">all systems operational</span>
            <span className="ml-auto text-[#63B8B2] text-xs font-mono">3+ years production</span>
          </div>
        </div>
      </StaggerBlock>

      {/* Hire CTA */}
      <StaggerBlock index={2}>
        <div className="bg-[#060e1f] border border-[#63B8B2]/40 rounded-sm p-6 relative overflow-hidden glow-teal">
          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
            style={{ background: "radial-gradient(circle at top right, rgba(99,184,178,0.08) 0%, transparent 70%)" }}
          />

          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-status-pulse" />
            <p className="text-white font-bold text-base font-mono">AVAILABLE_FOR_HIRE</p>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-5 font-mono">
            Open to freelance contracts and full-time roles.<br />
            Let&apos;s build something that&apos;s worth building.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.upwork.com/freelancers/~01d2f557e6c01a0296"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#63B8B2] text-[#0A1930] font-bold text-sm font-mono rounded-sm hover:bg-[#85d1cc] transition-colors duration-200 custom-pointer"
            >
              Hire on Upwork
            </a>
            <a
              href="https://www.fiverr.com/ubaidwaris655"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#1a3a5c] text-gray-300 text-sm font-mono rounded-sm hover:border-[#63B8B2]/60 hover:text-white transition-all duration-200 custom-pointer"
            >
              Hire on Fiverr
            </a>
          </div>
        </div>
      </StaggerBlock>
    </div>
  );
}

/* ─── Main component ─── */
const About = () => {
  const sectionRef = useRef(null);

  // Subtle background shift as user scrolls through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Shift background from #0A1930 → #081528 → #0A1930 (dark-only, no harsh jumps)
  const bgLightness = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [
    "hsl(218,66%,11%)",
    "hsl(218,66%,9%)",
    "hsl(218,66%,8%)",
    "hsl(218,66%,11%)",
  ]);

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="w-full py-24 px-6 md:px-10"
      style={{ backgroundColor: bgLightness }}
      aria-labelledby="about-heading"
    >
      {/* SEO-friendly hidden capabilities list */}
      <ul className="sr-only">
        {capabilities.flatMap((cap) =>
          cap.items.map((item) => <li key={item}>{item} — {cap.area}</li>)
        )}
      </ul>

      <div className="max-w-7xl mx-auto">
        <SectionHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <StoryColumn />
          </motion.div>

          {/* Right: System */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <SystemColumn />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
