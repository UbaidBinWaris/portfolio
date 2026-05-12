"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    method: "POST",
    endpoint: "/full-stack-development",
    title: "Full Stack Web Development",
    description: "Custom web apps using React, Next.js, Node.js, and MongoDB. Scalable, performant, production-ready.",
    params: ["Custom Web Apps", "Responsive Design", "Database Integration", "API Development"],
    price: "from $500",
    status: 200,
  },
  {
    method: "GET",
    endpoint: "/react-nextjs-frontend",
    title: "React & Next.js Development",
    description: "Expert interfaces with SSR, SSG, and ISR. SEO-optimized, fast-loading, component-driven architecture.",
    params: ["Component Architecture", "State Management", "SSR / SSG / ISR", "SEO Optimization"],
    price: "from $400",
    status: 200,
  },
  {
    method: "POST",
    endpoint: "/node-backend-api",
    title: "Node.js Backend & APIs",
    description: "Robust server-side applications and RESTful APIs with Express.js, authentication, and scalable architecture.",
    params: ["REST APIs", "Auth & Authorization", "Database Integration", "Security Implementation"],
    price: "from $500",
    status: 200,
  },
  {
    method: "PUT",
    endpoint: "/cloud-deployment",
    title: "Cloud Deployment & DevOps",
    description: "Professional deployment on AWS, Hetzner, Hostinger with CI/CD, Docker, PM2, and server configuration.",
    params: ["Linux Server Setup", "Docker & PM2", "CI/CD Pipeline", "SSL & HTTPS"],
    price: "from $200",
    status: 201,
  },
  {
    method: "POST",
    endpoint: "/ai-automation",
    title: "AI Automation & Workflows",
    description: "AI-powered workflows and process automation. Connecting APIs, building intelligent pipelines and triggers.",
    params: ["AI Workflow Design", "API Orchestration", "Process Automation", "System Integration"],
    price: "from $350",
    status: 200,
  },
  {
    method: "GET",
    endpoint: "/maintenance-support",
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and technical support to keep your application running smoothly.",
    params: ["Bug Fixes", "Feature Updates", "Performance Monitoring", "Security Patches"],
    price: "from $150/mo",
    status: 200,
  },
];

const methodColor = {
  GET: "text-green-400 bg-green-400/10 border-green-400/30",
  POST: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  PUT: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
};

const statusColor = {
  200: "text-green-400",
  201: "text-blue-400",
};

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      className="w-full bg-[#060e1f] py-24 px-6 md:px-10"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4">
            <p className="text-[#63B8B2] font-mono text-sm tracking-widest shrink-0">02 /</p>
            <h2
              id="services-heading"
              className="text-white font-bold text-2xl md:text-3xl shrink-0"
            >
              Full Stack Development Services
            </h2>
            <div className="flex-1 h-px bg-[#1a3a5c]" />
          </div>
        </motion.div>

        {/* API registry header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm mb-10 flex items-center gap-3 text-gray-600"
        >
          <span className="text-[#63B8B2]">GET</span>
          <span>/api/services</span>
          <span className="text-green-400">200 OK</span>
          <span className="ml-auto hidden md:block text-xs">
            {services.length} endpoints available
          </span>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            let borderClass;
            if (hovered === i) {
              borderClass = "border-[#63B8B2] glow-teal";
            } else if (hovered === null) {
              borderClass = "border-[#1a3a5c]";
            } else {
              borderClass = "border-[#1a3a5c] opacity-60";
            }
            return (
            <motion.div
              key={service.endpoint}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative bg-[#0A1930] border rounded-sm p-5 flex flex-col gap-4 transition-all duration-300 cursor-default ${borderClass}`}
            >
              {/* Card top row */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-1 min-w-0">
                  {/* Method + endpoint */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-block px-2 py-0.5 text-xs font-mono border rounded-sm font-bold shrink-0 ${methodColor[service.method]}`}
                    >
                      {service.method}
                    </span>
                    <span className="text-gray-500 font-mono text-xs truncate">
                      {service.endpoint}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="text-white font-semibold text-sm mt-1 leading-snug">
                    {service.title}
                  </h3>
                </div>
                {/* Status */}
                <div className="shrink-0 text-right font-mono text-xs">
                  <span className={statusColor[service.status]}>
                    {service.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-xs leading-relaxed">
                {service.description}
              </p>

              {/* Params / features */}
              <div className="flex-1">
                <p className="text-gray-700 text-xs font-mono mb-2">{"// query_params"}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.params.map((param) => (
                    <span
                      key={param}
                      className="inline-block px-2 py-0.5 bg-[#1a3a5c]/60 text-gray-400 text-xs font-mono rounded-sm"
                    >
                      {param}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-[#1a3a5c] mt-auto">
                <span className="text-[#63B8B2] font-mono text-xs">{service.price}</span>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs font-mono text-gray-600 group-hover:text-[#63B8B2] transition-colors custom-pointer"
                >
                  &gt;_ initiate →
                </a>
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-gray-600 font-mono text-sm mb-4">
            {"// Need something custom? Let's talk."}
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#63B8B2] text-[#63B8B2] font-mono text-sm rounded-sm hover:bg-[#63B8B2]/10 transition-all duration-300 custom-pointer"
          >
            $ ./contact.sh
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
