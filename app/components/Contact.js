"use client";
import React from "react";
import { motion } from "framer-motion";
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

/* ─── Direct Contact Information Panel ─── */
function DirectContactPanel() {
  return (
    <div className="bg-[#060e1f] border border-[#1a3a5c] rounded-sm overflow-hidden font-mono">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0f2744] border-b border-[#1a3a5c]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-gray-600 text-xs ml-2">
          ubaid@portfolio:~$ cat contact_info.json
        </span>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <div>
          <p className="text-gray-600 text-xs mb-2">$ status --availability</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f2744] border border-[#63B8B2]/40 rounded-xs text-[#63B8B2] text-xs">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            AVAILABLE FOR FREELANCE & FULL-TIME ROLES
          </div>
        </div>

        <div>
          <p className="text-gray-600 text-xs mb-2">$ direct --email</p>
          <a
            href="mailto:ubaidwaris34@gmail.com"
            className="inline-block text-lg md:text-xl font-bold text-white hover:text-[#63B8B2] transition-colors duration-200"
          >
            ubaidwaris34@gmail.com
          </a>
        </div>

        <div>
          <p className="text-gray-600 text-xs mb-2">$ system --location</p>
          <p className="text-gray-300 text-sm">Islamabad, Pakistan (UTC+5) • Remote Worldwide</p>
        </div>

        <div className="pt-4 border-t border-[#1a3a5c] flex flex-wrap gap-4">
          <a
            href="https://www.upwork.com/freelancers/~01d2f557e6c01a0296"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#63B8B2] text-[#0A1930] font-bold text-sm rounded-sm hover:bg-[#85d1cc] transition-colors duration-200 custom-pointer"
          >
            Hire on Upwork
          </a>
          <a
            href="https://www.fiverr.com/ubaidwaris655"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[#1a3a5c] text-gray-300 text-sm rounded-sm hover:border-[#63B8B2]/60 hover:text-white transition-all duration-200 custom-pointer"
          >
            Hire on Fiverr
          </a>
          <a
            href="mailto:ubaidwaris34@gmail.com"
            className="px-5 py-2.5 border border-[#63B8B2]/40 text-[#63B8B2] text-sm rounded-sm hover:bg-[#63B8B2]/10 transition-all duration-200 custom-pointer"
          >
            Send Direct Email
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Contact links panel ─── */
function LinksPanel() {
  const relevantLinks = contactLinks.filter((l) => l.name !== "Portfolio");

  return (
    <div className="space-y-5">
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
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="text-gray-500 group-hover:text-[#63B8B2] transition-colors duration-200 text-lg">
                  {link.icon}
                </span>
                <div>
                  <p className="text-gray-300 text-sm font-mono group-hover:text-white transition-colors duration-200">
                    {link.name.toLowerCase()}
                  </p>
                </div>
              </div>

              <span className="text-[#63B8B2] text-xs font-mono opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                →
              </span>
            </motion.a>
          ))}
        </div>

        <div className="px-5 py-3 border-t border-[#0f2744] font-mono text-xs space-y-1">
          <p className="text-gray-700">&gt; response_time: ~24h</p>
          <p className="text-gray-700">&gt; preferred: email / upwork</p>
        </div>
      </div>
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
      <div
        className="absolute inset-0 grid-overlay opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(99,184,178,0.04) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
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

          <p className="text-gray-500 font-mono text-sm mt-5">
            # Got a project? Reach out directly via email or social channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-10 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <DirectContactPanel />
          </motion.div>

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
