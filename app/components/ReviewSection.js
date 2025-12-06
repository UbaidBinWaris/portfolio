"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Cpu,
  Wifi,
  Activity,
  GitBranch,
  Coffee,
  Send,
  Trash2,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

const initialReviews = [
  {
    id: 1,
    name: "root@client1",
    message: "Absolutely loved the work! Delivered before deadline.",
    timestamp: "12/1/2025, 10:30:00 AM",
    status: "verified",
  },
  {
    id: 2,
    name: "guest@developer",
    message: "Code quality was clean and modular. Very impressive.",
    timestamp: "12/2/2025, 2:45:00 PM",
    status: "verified",
  },
  {
    id: 3,
    name: "user@hec",
    message: "Professional communication and great UI/UX sense.",
    timestamp: "12/3/2025, 4:15:00 PM",
    status: "verified",
  },
];

export const ReviewSection = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [step, setStep] = useState("name"); // 'name' or 'message'
  const bottomRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [reviews, step]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step === "name" && inputName.trim()) {
        setStep("message");
      } else if (step === "message" && inputMessage.trim()) {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    if (inputName.trim() && inputMessage.trim()) {
      const newReview = {
        id: Date.now(),
        name: inputName.replace(/\s+/g, "_").toLowerCase() + "@guest",
        message: inputMessage,
        timestamp: new Date().toLocaleString(),
        status: "new",
      };
      setReviews((prev) => [...prev, newReview]);
      setInputName("");
      setInputMessage("");
      setStep("name");
    }
  };

  const handleClear = () => {
    setReviews([]);
    setStep("name");
  };

  return (
    <section className="w-full min-h-screen bg-[#0a1930] text-[#1793d1] py-12 px-8 relative overflow-hidden flex flex-col items-start justify-center">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1793d1_1px,transparent_1px),linear-gradient(to_bottom,#1793d1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.05] pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-[#63B8B2] m-5 will-change-transform md:pl-16"
        style={{ transformOrigin: "center center", position: "relative", width: "100%" }}
      >
        Reviews
      </motion.h2>
      
      <div className="w-full max-w-[1500px] mx-auto pt-8 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* LEFT COLUMN: TERMINAL (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 flex flex-col"
          >
            <div className="bg-[#141414] border border-[#333] rounded-xl shadow-2xl overflow-hidden flex flex-col h-[600px] md:h-[700px] relative font-mono">
              {/* Terminal Header */}
              <div className="bg-[#2b2b2b] px-4 py-2 flex items-center justify-between border-b border-[#1a1a1a]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2 mr-4">
                    <div
                      className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors cursor-pointer"
                      onClick={handleClear}
                    ></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors"></div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Terminal size={12} />
                    <span>guest@archlinux:~</span>
                  </div>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-[#1793d1]/20 scrollbar-track-transparent font-mono text-sm md:text-base bg-[#0f0f0f] text-[#f0f0f0]">
                <div className="mb-6 text-gray-500">
                  <p>Arch Linux 6.8.9-arch1-1 (tty1)</p>
                  <p className="mt-1">Portfolio Interactive Terminal v2.0.5</p>
                  <p>Type your feedback below to initialize connection...</p>
                </div>

                <div className="space-y-4">
                  <AnimatePresence>
                    {reviews.map((review) => (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="group"
                      >
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <span className="text-gray-500">[</span>
                          <span className="text-[#1793d1] font-bold">
                            {review.name}
                          </span>
                          <span className="text-gray-500">@</span>
                          <span className="text-white">portfolio</span>
                          <span className="text-gray-500"> ~]$</span>
                          <span className="text-gray-400 text-xs ml-2">
                            # {review.timestamp}
                          </span>
                        </div>
                        <div className="pl-0 mt-1 text-[#e6e6e6]">
                          {review.message}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Input Area */}
                <div className="mt-6 pt-4 border-t border-[#333]">
                  {step === "name" ? (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">[</span>
                      <span className="text-[#1793d1] font-bold">
                        guest@archlinux
                      </span>
                      <span className="text-gray-500"> ~]$</span>
                      <span className="text-gray-400 mr-2">enter_name:</span>
                      <input
                        type="text"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-600 caret-[#1793d1]"
                        placeholder="John_Doe"
                        autoFocus
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">[</span>
                      <span className="text-[#1793d1] font-bold">
                        {inputName.replace(/\s+/g, "_").toLowerCase()}@archlinux
                      </span>
                      <span className="text-gray-500"> ~]$</span>
                      <span className="text-gray-400 mr-2">message:</span>
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-600 caret-[#1793d1]"
                        placeholder="Type your review..."
                        autoFocus
                      />
                    </div>
                  )}
                </div>
                <div ref={bottomRef} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: SYSTEM STATS (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 space-y-6 hidden lg:block"
          >
            {/* System Status Card */}
            <div className="bg-[#0a1930]/80 backdrop-blur-sm border border-[#63b8b2]/30 rounded-xl p-6 relative overflow-hidden group hover:border-[#63b8b2]/60 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity size={100} className="text-[#63b8b2]" />
              </div>
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Activity size={18} className="text-[#63b8b2]" />
                SYSTEM STATUS
              </h3>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>CPU USAGE</span>
                    <span className="text-[#63b8b2]">12%</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "12%" }}
                      className="h-full bg-[#63b8b2] rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>MEMORY</span>
                    <span className="text-[#63b8b2]">64%</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "64%" }}
                      className="h-full bg-[#63b8b2] rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>COFFEE LEVELS</span>
                    <span className="text-yellow-500">CRITICAL</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "98%" }}
                      className="h-full bg-yellow-500 rounded-full animate-pulse"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Active Modules Card */}
            <div className="bg-[#0a1930]/80 backdrop-blur-sm border border-[#63b8b2]/30 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Cpu size={18} className="text-[#63b8b2]" />
                ACTIVE MODULES
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Tailwind",
                  "TypeScript",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-[#112240] border border-[#233554] rounded px-3 py-2 flex items-center justify-between text-xs group hover:border-[#63b8b2]/50 transition-colors"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {tech}
                    </span>
                    <span className="w-2 h-2 bg-[#63b8b2] rounded-full shadow-[0_0_5px_rgba(99,184,178,0.8)]"></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Card */}
            <div className="bg-[#0a1930]/80 backdrop-blur-sm border border-[#63b8b2]/30 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Wifi size={18} className="text-[#63b8b2]" />
                NETWORK
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/UbaidBinWaris"
                  target="_blank"
                  className="flex items-center justify-between p-3 bg-[#112240] rounded border border-[#233554] hover:border-[#63b8b2]/50 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <GitBranch
                      size={16}
                      className="text-gray-400 group-hover:text-white"
                    />
                    <span className="text-sm text-gray-300 group-hover:text-white">
                      GitHub
                    </span>
                  </div>
                  <span className="text-xs text-[#63b8b2]">Connected</span>
                </a>
                <div className="flex items-center justify-between p-3 bg-[#112240] rounded border border-[#233554]">
                  <div className="flex items-center gap-3">
                    <Shield size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-300">Firewall</span>
                  </div>
                  <span className="text-xs text-[#63b8b2]">Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
