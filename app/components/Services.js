"use client";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "Custom web application development using React, Next.js, Node.js, and MongoDB. Building scalable, performant, and modern web solutions tailored to your business needs.",
      icon: "🚀",
      price: "Starting from $500",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "Database Integration",
        "API Development",
        "Performance Optimization",
      ],
    },
    {
      id: 2,
      title: "React.js Development",
      description:
        "Expert React.js development for building responsive, performant user interfaces with modern best practices and component-based architecture.",
      icon: "⚛️",
      price: "Starting from $400",
      features: [
        "Component Architecture",
        "State Management",
        "React Hooks",
        "Performance Optimization",
        "Responsive UI/UX",
      ],
    },
    {
      id: 3,
      title: "Next.js Development",
      description:
        "Professional Next.js development with SSR, SSG, and ISR for SEO-optimized, fast-loading web applications.",
      icon: "▲",
      price: "Starting from $600",
      features: [
        "Server-Side Rendering",
        "Static Site Generation",
        "SEO Optimization",
        "Image Optimization",
        "API Routes",
      ],
    },
    {
      id: 4,
      title: "Node.js Backend",
      description:
        "Robust backend development with Node.js and Express.js for scalable server-side applications and RESTful APIs.",
      icon: "🟢",
      price: "Starting from $500",
      features: [
        "RESTful APIs",
        "Authentication & Authorization",
        "Database Integration",
        "Server Configuration",
        "Security Implementation",
      ],
    },
    {
      id: 5,
      title: "API Development",
      description:
        "Custom API development and third-party integrations for seamless data exchange and system connectivity.",
      icon: "🔌",
      price: "Starting from $300",
      features: [
        "RESTful API Design",
        "API Documentation",
        "Third-party Integration",
        "Webhook Implementation",
        "API Security",
      ],
    },
    {
      id: 6,
      title: "Database Design",
      description:
        "Professional MongoDB database design and optimization for data integrity, performance, and scalability.",
      icon: "🗄️",
      price: "Starting from $250",
      features: [
        "Schema Design",
        "Query Optimization",
        "Data Modeling",
        "Migration Services",
        "Performance Tuning",
      ],
    },
    {
      id: 7,
      title: "Cloud Deployment",
      description:
        "Professional cloud deployment on AWS, Vercel, and other platforms with CI/CD setup and server configuration.",
      icon: "☁️",
      price: "Starting from $200",
      features: [
        "AWS Deployment",
        "Vercel Deployment",
        "CI/CD Setup",
        "Server Configuration",
        "SSL/HTTPS Setup",
      ],
    },
    {
      id: 8,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and technical support to keep your application running smoothly and securely.",
      icon: "🛠️",
      price: "Starting from $150/month",
      features: [
        "Bug Fixes",
        "Feature Updates",
        "Security Patches",
        "Performance Monitoring",
        "24/7 Support",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="services"
      className="w-full min-h-screen bg-[#0A1930] py-20 px-6 md:px-10"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="text-gray-600">&lt;</span>
            <span className="text-[#63B8B2]">Services</span>
            <span className="text-gray-600">/&gt;</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional web development services to bring your ideas to life.
            From concept to deployment, I deliver high-quality solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#0f2744] border border-[#1a3a5c] rounded-lg p-6 hover:border-[#63B8B2] transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Price */}
              <div className="text-[#63B8B2] font-semibold mb-4">
                {service.price}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-400 text-sm flex items-start"
                  >
                    <span className="text-[#63B8B2] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className="block w-full text-center bg-[#63B8B2] hover:bg-[#52a79d] text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Don't see what you're looking for? Let's discuss your custom
            requirements.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#63B8B2] hover:bg-[#52a79d] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
