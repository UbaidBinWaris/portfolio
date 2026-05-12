"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "Backend Engineer",
  "AI Automation Developer",
  "Full Stack Engineer",
  "System Builder",
  "n8n Workflow Architect",
];

const STACK_ITEMS = [
  { label: "NODE", value: "v20.x", color: "#63B8B2" },
  { label: "NEXT", value: "16.x", color: "#63B8B2" },
  { label: "DOCKER", value: "running", color: "#22c55e" },
  { label: "LINUX", value: "arch", color: "#63B8B2" },
  { label: "AI", value: "active", color: "#22c55e" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [uptime, setUptime] = useState("00:00:00");

  // Uptime clock
  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");
      const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
      const s = String(elapsed % 60).padStart(2, "0");
      setUptime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 65);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    setDisplayText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >
      {/* Background video */}
      <video
        src="/hero-background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        tabIndex="-1"
        aria-hidden="true"
        preload="none"
      />

      {/* Heavy overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(10,25,48,0.96) 0%, rgba(10,25,48,0.88) 60%, rgba(10,25,48,0.96) 100%)", zIndex: 1 }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 grid-overlay opacity-60"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      />

      {/* Teal accent glow — top-right */}
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,184,178,0.08) 0%, transparent 70%)",
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        style={{ zIndex: 3 }}
      >
        {/* ── LEFT: Identity block ── */}
        <div className="flex-1 min-w-0">
          {/* Topline */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-block w-6 h-px bg-[#63B8B2]" />
            <span className="text-[#63B8B2] font-mono text-sm tracking-widest">
              &gt; Ubaid Bin Waris
            </span>
            <span className="w-2 h-3 bg-[#63B8B2] inline-block cursor-blink" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            id="hero-heading"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[0.9] tracking-tight text-white mb-8"
          >
            <span className="sr-only">Ubaid Bin Waris, Full Stack Developer in Pakistan — </span>
            BACKEND.
            <br />
            <span className="text-[#63B8B2]">AI.</span>
            <br />
            SYSTEMS.
          </motion.h1>

          {/* Role typing */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-8"
          >
            <p className="text-gray-400 text-sm font-mono mb-1">// current_role</p>
            <p className="text-white text-xl md:text-2xl font-medium min-h-[2rem] flex items-center gap-2">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-[#63B8B2] animate-[cursor-blink_1s_step-end_infinite]" />
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-gray-400 text-base max-w-md leading-relaxed mb-10"
          >
            Building production-ready systems — from REST APIs and databases to
            AI automation pipelines and Linux-deployed infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group flex items-center gap-2 px-7 py-3 bg-[#63B8B2] text-[#0A1930] font-bold text-sm rounded-sm hover:bg-[#85d1cc] transition-all duration-300 custom-pointer"
            >
              <span className="font-mono">&gt;_</span>
              View Projects
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path d="M8 1L15 8L8 15M15 8H1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 px-7 py-3 border border-[#63B8B2] text-[#63B8B2] font-mono text-sm rounded-sm hover:bg-[#63B8B2]/10 transition-all duration-300 custom-pointer"
            >
              ./hire_me.sh
            </button>
          </motion.div>

          {/* Social quick links */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-6 mt-10"
          >
            {[
              { href: "https://github.com/UbaidBinWaris", label: "GitHub" },
              { href: "https://linkedin.com/in/ubaidbinwaris", label: "LinkedIn" },
              { href: "https://www.upwork.com/freelancers/~01d2f557e6c01a0296", label: "Upwork" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#63B8B2] text-xs font-mono transition-colors duration-200 custom-pointer"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: System status terminal card ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[380px] xl:w-[420px] shrink-0"
        >
          <div className="bg-[#060e1f]/90 border border-[#1a3a5c] rounded-sm overflow-hidden glow-teal">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0f2744] border-b border-[#1a3a5c]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="ml-2 text-gray-500 text-xs font-mono">
                ubaid@portfolio:~$ status
              </span>
            </div>

            {/* Status body */}
            <div className="p-5 font-mono text-sm space-y-4">
              {/* Online status */}
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-status-pulse shrink-0" />
                <span className="text-gray-500">STATUS</span>
                <span className="text-green-400 ml-auto">ONLINE</span>
              </div>

              <div className="h-px bg-[#1a3a5c]" />

              {/* Role */}
              <div>
                <p className="text-gray-600 text-xs mb-1"># role</p>
                <p className="text-[#63B8B2]">Full Stack Dev @ GixiAI</p>
              </div>

              {/* Location */}
              <div>
                <p className="text-gray-600 text-xs mb-1"># location</p>
                <p className="text-gray-300">Islamabad, Pakistan</p>
              </div>

              {/* Stack items */}
              <div>
                <p className="text-gray-600 text-xs mb-2"># stack_processes</p>
                <div className="space-y-1">
                  {STACK_ITEMS.map(({ label, value, color }) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                      <span className="text-gray-400 w-14 text-xs">{label}</span>
                      <span className="text-xs" style={{ color }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[#1a3a5c]" />

              {/* Uptime */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-xs">uptime</span>
                <span className="text-[#63B8B2] text-xs ml-auto" suppressHydrationWarning>
                  {uptime}
                </span>
              </div>

              {/* Availability */}
              <div className="bg-[#63B8B2]/8 border border-[#63B8B2]/20 rounded-sm px-3 py-2">
                <p className="text-[#63B8B2] text-xs">
                  &gt; Available for freelance &amp; full-time roles
                </p>
              </div>

              {/* Prompt */}
              <div className="flex items-center gap-1 text-gray-600 text-xs">
                <span>ubaid@portfolio:~$</span>
                <span className="w-2 h-3 bg-[#63B8B2] animate-[cursor-blink_1s_step-end_infinite] opacity-80" />
              </div>
            </div>
          </div>

          {/* Stats strip below card */}
          <div className="grid grid-cols-3 gap-px mt-px bg-[#1a3a5c]">
            {[
              { n: "3+", label: "Years" },
              { n: "20+", label: "Projects" },
              { n: "10+", label: "Clients" },
            ].map(({ n, label }) => (
              <div
                key={label}
                className="bg-[#0A1930] py-3 text-center"
              >
                <p className="text-[#63B8B2] font-bold text-lg">{n}</p>
                <p className="text-gray-600 text-xs font-mono">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      >
        <p className="text-gray-600 text-xs font-mono tracking-widest">SCROLL</p>
        <div className="w-px h-12 bg-gradient-to-b from-[#63B8B2] to-transparent animate-float" />
      </motion.div>
    </section>
  );
};

export default Hero;
