"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import terminalCommands from "@/app/data/terminalCommands";

const BOOT_LINES = [
  { text: "Initializing ubaid-portfolio v2.0...", delay: 0 },
  { text: "Loading system modules... [OK]", delay: 300 },
  { text: "Mounting /home/ubaid... [OK]", delay: 600 },
  { text: 'Type "help" to see available commands.', delay: 900 },
];

const SUGGESTIONS = Object.keys(terminalCommands);

export const TerminalSection = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const [bootLines, setBootLines] = useState([]);
  const [suggestion, setSuggestion] = useState("");
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const sectionRef = useRef(null);

  // Boot sequence
  useEffect(() => {
    let timers = BOOT_LINES.map(({ text, delay }) =>
      setTimeout(() => {
        setBootLines((prev) => [...prev, text]);
      }, delay + 200)
    );
    const bootTimer = setTimeout(() => setBooted(true), 1400);
    return () => { timers.forEach(clearTimeout); clearTimeout(bootTimer); };
  }, []);

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, bootLines]);

  // Focus input when clicking anywhere on the terminal
  const focusInput = () => inputRef.current?.focus();

  // Auto suggestion
  const handleInputChange = (e) => {
    const val = e.target.value;
    setInput(val);
    if (val.trim()) {
      const match = SUGGESTIONS.find(
        (cmd) => cmd.startsWith(val.toLowerCase()) && cmd !== val.toLowerCase()
      );
      setSuggestion(match || "");
    } else {
      setSuggestion("");
    }
  };

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    setSuggestion("");

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    const output = terminalCommands[trimmed];
    const entry = { cmd, output: output || null, unknown: !output };

    if (output?.action === "scroll-contact") {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    setHistory((prev) => [...prev, entry]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.trim()) runCommand(input);
      setInput("");
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (suggestion) {
        setInput(suggestion);
        setSuggestion("");
      }
    }
  };

  const renderOutput = (entry) => {
    if (entry.unknown) {
      return (
        <p className="text-red-400 text-sm">
          command not found: <span className="text-red-300">{entry.cmd}</span>
          {" — try "}
          <button
            onClick={() => { setInput("help"); setTimeout(() => runCommand("help"), 0); setInput(""); }}
            className="text-[#63B8B2] underline cursor-pointer"
          >
            help
          </button>
        </p>
      );
    }
    const { output } = entry;
    if (!output) return null;

    if (output.type === "list") {
      return (
        <div className="text-sm">
          <p className="text-[#63B8B2] mb-1">{output.label}:</p>
          {output.items.map((item, i) => (
            <p key={i} className="text-gray-300 pl-2">{item}</p>
          ))}
        </div>
      );
    }
    if (output.type === "multiline" || output.type === "action") {
      return (
        <div className="text-sm space-y-0.5">
          {output.lines.map((line, i) => (
            <p key={i} className="text-gray-300">{line}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id="terminal"
      ref={sectionRef}
      className="w-full py-20 px-6 md:px-10 bg-[#060e1f]"
      aria-labelledby="terminal-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <p className="text-[#63B8B2] font-mono text-sm tracking-widest">03 /</p>
          <h2
            id="terminal-heading"
            className="text-white font-bold text-2xl md:text-3xl"
          >
            Interactive Terminal
          </h2>
          <div className="flex-1 h-px bg-[#1a3a5c]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 font-mono text-sm mb-8"
        >
          // Type a command and press Enter. Try: <span className="text-[#63B8B2]">whoami</span>, <span className="text-[#63B8B2]">ls projects</span>, <span className="text-[#63B8B2]">cat skills.txt</span>
        </motion.p>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="border border-[#1a3a5c] rounded-sm overflow-hidden glow-teal"
          onClick={focusInput}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0f2744] border-b border-[#1a3a5c]">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="ml-2 text-gray-500 text-xs font-mono flex-1 text-center">
              ubaid@portfolio:~
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); setHistory([]); }}
              className="text-gray-600 hover:text-[#63B8B2] text-xs font-mono transition-colors custom-pointer"
              aria-label="Clear terminal"
            >
              [clear]
            </button>
          </div>

          {/* Output area */}
          <div className="bg-[#060e1f] p-4 md:p-6 font-mono text-sm min-h-[320px] max-h-[480px] overflow-y-auto space-y-3">
            {/* Boot lines */}
            {bootLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-600 text-xs"
              >
                {line}
              </motion.p>
            ))}

            {booted && (
              <>
                <div className="h-px bg-[#1a3a5c] my-2" />

                {/* History entries */}
                <AnimatePresence initial={false}>
                  {history.map((entry, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5"
                    >
                      {/* Command line */}
                      <div className="flex items-center gap-2">
                        <span className="text-[#63B8B2] shrink-0">ubaid@portfolio:~$</span>
                        <span className="text-white">{entry.cmd}</span>
                      </div>
                      {/* Output */}
                      <div className="pl-4 border-l border-[#1a3a5c]">
                        {renderOutput(entry)}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Input line */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#63B8B2] shrink-0">ubaid@portfolio:~$</span>
                  <div className="flex-1 relative">
                    {/* Ghost suggestion */}
                    {suggestion && (
                      <span className="absolute inset-0 flex items-center pointer-events-none">
                        <span className="text-transparent">{input}</span>
                        <span className="text-gray-700">{suggestion.slice(input.length)}</span>
                      </span>
                    )}
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      className="w-full bg-transparent text-white outline-none caret-[#63B8B2] text-sm"
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="off"
                      spellCheck={false}
                      aria-label="Terminal input"
                    />
                  </div>
                  {!input && (
                    <span className="w-2 h-4 bg-[#63B8B2] animate-[cursor-blink_1s_step-end_infinite]" />
                  )}
                </div>

                <div ref={bottomRef} />
              </>
            )}
          </div>

          {/* Help strip */}
          <div className="bg-[#0a1525] border-t border-[#1a3a5c] px-4 py-2 flex flex-wrap gap-4 overflow-x-auto">
            {["help", "whoami", "ls projects", "cat skills.txt", "ping contact"].map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => { e.stopPropagation(); setInput(cmd); setTimeout(() => { runCommand(cmd); setInput(""); }, 0); }}
                className="text-xs text-gray-600 hover:text-[#63B8B2] font-mono transition-colors custom-pointer whitespace-nowrap"
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
