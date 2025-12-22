"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight, Code2, Layers } from "lucide-react";
import { projectsData } from "../data/projectsData";

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);

  // Mouse position for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Transform mouse position to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Parallax effect for internal elements
  const translateZTitle = useTransform(mouseYSpring, [-0.5, 0.5], ["20px", "40px"]);
  const translateZImage = useTransform(mouseYSpring, [-0.5, 0.5], ["30px", "60px"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[520px] w-full rounded-2xl bg-[#112240]/80 backdrop-blur-sm border border-[#233554] hover:border-[#63b8b2]/40 transition-colors duration-500 perspective-1000"
    >
      {/* Spotlight Gradient */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 184, 178, 0.06), transparent 40%)`
        }}
      />

      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex flex-col p-6 h-full z-10"
      >
        {/* Header: Folder Icon & Links */}
        <div className="flex justify-between items-center mb-6">
            <div className="p-2 rounded-full bg-[#63b8b2]/10 text-[#63b8b2]">
                <Layers size={24} />
            </div>
            <div className="flex gap-4 z-20" style={{ transform: "translateZ(20px)" }}>
                {project.github && (
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#a8b2d1] hover:text-[#63b8b2] transition-colors hover:scale-110 transform duration-200"
                        aria-label="GitHub Repo"
                    >
                        <Github size={20} />
                    </a>
                )}
                {project.link && (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#a8b2d1] hover:text-[#63b8b2] transition-colors hover:scale-110 transform duration-200"
                        aria-label="Live Demo"
                    >
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>
        </div>

        {/* Project Title & Description */}
        <motion.div style={{ transform: "translateZ(40px)" }} className="mb-4">
            <h3 className="text-2xl font-bold text-[#ccd6f6] group-hover:text-[#63b8b2] transition-colors duration-300 mb-2">
                {project.title}
            </h3>
            <div className="h-1 w-12 bg-[#63b8b2] rounded-full mb-4 opacity-50 group-hover:w-20 transition-all duration-300" />
            <p className="text-[#8892b0] text-sm leading-relaxed line-clamp-3">
                {project.description}
            </p>
        </motion.div>

        {/* Image Preview (Floating) */}
        <motion.div 
            className="relative w-full h-40 mt-auto mb-6 rounded-lg overflow-hidden shadow-2xl border border-[#233554] group-hover:border-[#63b8b2]/30 transition-colors duration-300"
            style={{ transform: "translateZ(50px)" }}
        >
            <div className="absolute inset-0 bg-[#0a1930]/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
        </motion.div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-[#233554]/50" style={{ transform: "translateZ(20px)" }}>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-[#8892b0]">
                {project.tech.map((tech, i) => (
                    <li key={i} className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#63b8b2]"></span>
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="relative py-32 bg-[#0a1930] overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
         <div className="absolute top-20 left-[-10%] w-[600px] h-[600px] bg-[#63b8b2]/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-20 right-[-10%] w-[600px] h-[600px] bg-[#112240] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-20"
        >
          <div className="flex items-center gap-4">
            <span className="text-[#63b8b2] font-mono text-xl">03.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#ccd6f6] tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div className="h-[1px] bg-[#233554] flex-grow hidden md:block ml-6 opacity-50"></div>
          <p className="text-[#8892b0] max-w-md text-sm md:text-right mt-4 md:mt-0">
            A showcase of my technical explorations, side projects, and production-ready applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-2000">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-24 text-center"
        >
            <a 
                href="https://github.com/UbaidBinWaris" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-[#63b8b2] text-[#63b8b2] font-mono text-sm rounded hover:bg-[#63b8b2]/10 transition-all duration-300"
            >
                <span>View Full Project Archive</span>
                <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
