"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import contactLinks from "@/app/data/contactLinks";

/* ─── Animation variants ─── */
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Terminal prompt line ─── */
function PromptLine({ label, children }) {
  return (
    <div className="flex items-start gap-0">
      <span className="text-[#63B8B2] font-mono text-sm select-none shrink-0 mt-px">
        {label}&nbsp;
      </span>
      {children}
    </div>
  );
}

/* ─── Terminal-style contact form ─── */
function TerminalForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [activeField, setActiveField] = useState("name");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef(null);

  // Auto-focus first field on mount
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const fields = [
    { key: "name", label: "name:", type: "text", placeholder: "your name", ref: nameRef },
    { key: "email", label: "email:", type: "email", placeholder: "your@email.com" },
    { key: "message", label: "message:", type: "textarea", placeholder: "what's on your mind..." },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-Token": "portfolio-csrf-secure"
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setStatus({ type: "success", message: "" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Transmission failed. Try again.",
        });
      }
    } catch {
      setStatus({ type: "error", message: "Connection error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#060e1f] border border-[#1a3a5c] rounded-sm overflow-hidden">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0f2744] border-b border-[#1a3a5c]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-gray-600 text-xs font-mono ml-2">
          ubaid@portfolio:~$ compose --message
        </span>
      </div>

      <div className="p-6 font-mono">
        {/* Static header lines */}
        <div className="space-y-1 mb-5 text-xs">
          <p className="text-gray-600">
            <span className="text-[#63B8B2]">$</span> init contact_channel
          </p>
          <p className="text-gray-700">
            # Fill in the fields below. I respond within 24h.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            /* ── Success state ── */
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="py-8 space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <p className="text-green-400 text-sm">MESSAGE_SENT: Packet delivered successfully.</p>
              </div>
              <p className="text-gray-600 text-xs pl-5">
                &gt; Expected response window: ~24 hours
              </p>
              <p className="text-gray-600 text-xs pl-5">
                &gt; Channel: ubaidwaris34@gmail.com
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-[#63B8B2] text-xs hover:underline focus:outline-none custom-pointer"
              >
                &gt; Send another message
              </button>
            </motion.div>
          ) : (
            /* ── Form state ── */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {fields.map(({ key, label, type, placeholder, ref }) => (
                <div key={key} className="space-y-1">
                  <PromptLine label={label}>
                    {type === "textarea" ? (
                      <textarea
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        onFocus={() => setActiveField(key)}
                        onBlur={() => setActiveField(null)}
                        required
                        rows={4}
                        placeholder={placeholder}
                        className={`
                          w-full bg-transparent text-gray-200 text-sm font-mono
                          placeholder-gray-700 resize-none
                          border-b focus:outline-none transition-colors duration-200
                          ${activeField === key ? "border-[#63B8B2]" : "border-[#1a3a5c]"}
                          pt-0 pb-1
                        `}
                      />
                    ) : (
                      <input
                        ref={ref}
                        type={type}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        onFocus={() => setActiveField(key)}
                        onBlur={() => setActiveField(null)}
                        required
                        placeholder={placeholder}
                        className={`
                          w-full bg-transparent text-gray-200 text-sm font-mono
                          placeholder-gray-700
                          border-b focus:outline-none transition-colors duration-200
                          ${activeField === key ? "border-[#63B8B2]" : "border-[#1a3a5c]"}
                          pb-1
                        `}
                      />
                    )}
                  </PromptLine>
                </div>
              ))}

              {/* Error message */}
              {status.type === "error" && (
                <motion.p
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-400 text-xs border-l-2 border-red-500 pl-3 py-1"
                >
                  ERR: {status.message}
                </motion.p>
              )}

              {/* Submit */}
              <div className="pt-2">
                <PromptLine label="$">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      group flex items-center gap-2 text-sm
                      text-[#63B8B2] hover:text-white
                      transition-colors duration-200 focus:outline-none
                      disabled:opacity-50 custom-pointer
                    "
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">transmitting</span>
                        <span className="w-1.5 h-3 bg-[#63B8B2] animate-[cursor-blink_1s_step-end_infinite]" />
                      </>
                    ) : (
                      <>
                        <span>send_message</span>
                        <span className="w-1.5 h-3 bg-[#63B8B2] group-hover:bg-white animate-[cursor-blink_1s_step-end_infinite] transition-colors" />
                      </>
                    )}
                  </button>
                </PromptLine>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Contact links panel ─── */
function LinksPanel() {
  // Only show the most relevant links (exclude Portfolio self-link)
  const relevantLinks = contactLinks.filter((l) => l.name !== "Portfolio");

  return (
    <div className="space-y-5">
      {/* Section label */}
      <div className="bg-[#060e1f] border border-[#1a3a5c] rounded-sm overflow-hidden">
        <div className="px-4 py-2.5 bg-[#0f2744] border-b border-[#1a3a5c]">
          <p className="text-gray-600 text-xs font-mono">$ netstat -active-channels</p>
        </div>

        <div className="divide-y divide-[#0f2744]">
          {relevantLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                group flex items-center justify-between px-5 py-3.5
                hover:bg-[#0f2744] transition-colors duration-200
                custom-pointer
              "
            >
              <div className="flex items-center gap-4">
                {/* Status dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <span className="text-gray-500 group-hover:text-[#63B8B2] transition-colors duration-200 text-lg">
                  {link.icon}
                </span>

                {/* Label */}
                <div>
                  <p className="text-gray-300 text-sm font-mono group-hover:text-white transition-colors duration-200">
                    {link.name.toLowerCase()}
                  </p>
                </div>
              </div>

              {/* Arrow — slides in on hover */}
              <span className="text-[#63B8B2] text-xs font-mono opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer note */}
        <div className="px-5 py-3 border-t border-[#0f2744] font-mono text-xs space-y-1">
          <p className="text-gray-700">&gt; response_time: ~24h</p>
          <p className="text-gray-700">&gt; preferred: email / upwork</p>
        </div>
      </div>

      {/* Direct email CTA */}
      <motion.a
        href="mailto:ubaidwaris34@gmail.com"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.3 }}
        className="
          group flex items-center justify-between
          bg-[#060e1f] border border-[#63B8B2]/30 hover:border-[#63B8B2]/70
          px-5 py-4 rounded-sm glow-teal
          transition-all duration-300 custom-pointer
        "
      >
        <div className="font-mono">
          <p className="text-[#63B8B2] text-xs tracking-widest mb-0.5">DIRECT_MAIL</p>
          <p className="text-gray-300 text-sm">ubaidwaris34@gmail.com</p>
        </div>
        <span className="text-[#63B8B2] text-sm -translate-x-1 group-hover:translate-x-0 opacity-60 group-hover:opacity-100 transition-all duration-200">
          →
        </span>
      </motion.a>
    </div>
  );
}

/* ─── Main component ─── */
const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#0A1930] py-24 px-6 md:px-10 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Subtle grid — same pattern as Hero */}
      <div
        className="absolute inset-0 grid-overlay opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Soft radial accent — bottom center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(99,184,178,0.04) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <p className="text-[#63B8B2] font-mono text-sm tracking-widest shrink-0">06 /</p>
            <h2
              id="contact-heading"
              className="text-white font-bold text-2xl md:text-3xl shrink-0"
            >
              Contact
            </h2>
            <div className="flex-1 h-px bg-[#1a3a5c]" />
            <p className="text-gray-600 font-mono text-xs shrink-0 hidden md:block">
              ~/ubaid/contact.sh
            </p>
          </div>

          {/* Sub-label */}
          <p className="text-gray-500 font-mono text-sm mt-5">
            # Got a project? Let&apos;s talk.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-10 xl:gap-16">
          {/* Left: Terminal form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <TerminalForm />
          </motion.div>

          {/* Right: Links */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <LinksPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
