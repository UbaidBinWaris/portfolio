"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const skills = [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Next.js", level: 95, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "MongoDB", level: 90, category: "Database" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "Tailwind CSS", level: 95, category: "Styling" },
    { name: "Express.js", level: 90, category: "Backend" },
    { name: "REST APIs", level: 95, category: "Backend" },
  ];

  const achievements = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#0A1930] py-20 px-6 md:px-10"
      aria-labelledby="about-heading"
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
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="text-gray-600">&lt;</span>
            <span className="text-[#63B8B2]">About Me</span>
            <span className="text-gray-600">/&gt;</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate Full Stack Developer building scalable web solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-[#0f2744] border border-[#1a3a5c] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Who is Ubaid Bin Waris?
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm{" "}
                  <strong className="text-[#63B8B2]">Ubaid Bin Waris</strong>, a
                  professional Full Stack Web Developer from Pakistan with over
                  5 years of experience in building modern, scalable web
                  applications.
                </p>
                <p>
                  My expertise lies in the{" "}
                  <strong className="text-white">MERN stack</strong> (MongoDB,
                  Express.js, React, Node.js), with a strong focus on creating
                  performant, user-friendly applications that solve real-world
                  problems.
                </p>
                <p>
                  I specialize in{" "}
                  <strong className="text-white">React and Next.js</strong> for
                  frontend development, building responsive and interactive user
                  interfaces. On the backend, I work with{" "}
                  <strong className="text-white">Node.js and Express.js</strong>{" "}
                  to create robust APIs and server-side logic.
                </p>
                <p>
                  Throughout my career, I've worked with clients worldwide,
                  delivering projects ranging from simple landing pages to
                  complex full-stack applications. I'm passionate about clean
                  code, best practices, and staying updated with the latest web
                  technologies.
                </p>
              </div>
            </div>

            {/* Work Philosophy */}
            <div className="bg-[#0f2744] border border-[#1a3a5c] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                My Work Philosophy
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#63B8B2] mr-3 text-xl">✓</span>
                  <span>
                    <strong className="text-white">Quality First:</strong>{" "}
                    Writing clean, maintainable code that stands the test of
                    time
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#63B8B2] mr-3 text-xl">✓</span>
                  <span>
                    <strong className="text-white">Client-Focused:</strong>{" "}
                    Understanding business needs and delivering solutions that
                    exceed expectations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#63B8B2] mr-3 text-xl">✓</span>
                  <span>
                    <strong className="text-white">Continuous Learning:</strong>{" "}
                    Staying updated with latest technologies and best practices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#63B8B2] mr-3 text-xl">✓</span>
                  <span>
                    <strong className="text-white">Timely Delivery:</strong>{" "}
                    Meeting deadlines without compromising on quality
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#0f2744] border border-[#1a3a5c] rounded-lg p-6 text-center hover:border-[#63B8B2] transition-colors duration-300"
                >
                  <div className="text-4xl font-bold text-[#63B8B2] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div className="bg-[#0f2744] border border-[#1a3a5c] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-[#63B8B2] text-sm">
                        {skill.category}
                      </span>
                    </div>
                    <div className="w-full bg-[#1a3a5c] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-[#63B8B2] h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#0f2744] border border-[#63B8B2] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Available for Hire
              </h3>
              <p className="text-gray-300 mb-6">
                I'm currently available for freelance projects and full-time
                opportunities. Let's work together to build something amazing!
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.upwork.com/freelancers/~01d2f557e6c01a0296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#63B8B2] hover:bg-[#52a79d] text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
                >
                  Hire on Upwork
                </a>
                <a
                  href="https://www.fiverr.com/ubaidwaris655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a3a5c] hover:bg-[#2a4a6c] text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
                >
                  Hire on Fiverr
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
