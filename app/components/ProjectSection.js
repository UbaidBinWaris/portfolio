"use client";
import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/app/data/projectsData";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="w-full bg-[#0A1930] py-24 px-6 md:px-10"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center gap-4">
            <p className="text-[#63B8B2] font-mono text-sm tracking-widest shrink-0">03 /</p>
            <h2
              id="projects-heading"
              className="text-white font-bold text-2xl md:text-3xl shrink-0"
            >
              Projects
            </h2>
            <div className="flex-1 h-px bg-[#1a3a5c]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-mono text-sm text-gray-600 mb-10"
        >
          $ ls -la ~/projects
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group bg-[#060e1f] border border-[#1a3a5c] rounded-sm overflow-hidden hover:border-[#63B8B2] transition-all duration-300 hover:glow-teal flex flex-col"
            >
              {/* CI/CD top bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0f2744] border-b border-[#1a3a5c]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-gray-600 font-mono text-xs ml-1">
                    commit/{project.id.toString().padStart(3, "0")}
                  </span>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-xs font-mono border ${
                    project.status === "LIVE"
                      ? "text-green-400 bg-green-400/10 border-green-400/30"
                      : "text-yellow-400 bg-yellow-400/10 border-yellow-400/30"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-status-pulse" />
                  {project.status}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#63B8B2] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-[#1a3a5c]/60 text-[#63B8B2] text-xs font-mono rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-[#1a3a5c] flex items-center justify-between gap-4">
                  <span className="text-gray-700 font-mono text-xs truncate">
                    $ {project.command}
                  </span>
                  <div className="flex items-center gap-4 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#63B8B2] text-xs font-mono transition-colors custom-pointer"
                    >
                      [github]
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#63B8B2] text-xs font-mono hover:text-white transition-colors custom-pointer flex items-center gap-1"
                    >
                      [live]
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" className="w-3 h-3">
                        <path d="M2 10L10 2M10 2H5M10 2V7" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/UbaidBinWaris"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 border border-[#1a3a5c] text-gray-400 font-mono text-sm rounded-sm hover:border-[#63B8B2] hover:text-[#63B8B2] transition-all duration-300 custom-pointer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
