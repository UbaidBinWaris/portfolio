import React from "react";
import { MotionDiv, MotionProgressBar } from "./AboutMotion";

const About = () => {
  const skills = [
    { name: "React.js & Next.js", level: 95, levelText: "Advanced", years: "3+", category: "Frontend" },
    { name: "Node.js & Express.js", level: 90, levelText: "Advanced", years: "3+", category: "Backend" },
    { name: "MongoDB & SQL", level: 90, levelText: "Advanced", years: "2+", category: "Database" },
    { name: "TypeScript & JavaScript", level: 85, levelText: "Advanced", years: "3+", category: "Language" },
    { name: "Tailwind CSS", level: 95, levelText: "Advanced", years: "3+", category: "Styling" },
    { name: "REST APIs & GraphQL", level: 95, levelText: "Advanced", years: "3+", category: "Backend" },
    { name: "Linux & DevOps", level: 88, levelText: "Intermediate", years: "2+", category: "Infrastructure" },
    { name: "AWS, Hetzner, Hostinger", level: 85, levelText: "Intermediate", years: "2+", category: "Cloud" },
    { name: "Docker & PM2", level: 87, levelText: "Intermediate", years: "2+", category: "DevOps" },
    { name: "Server Configuration", level: 90, levelText: "Advanced", years: "2+", category: "Infrastructure" },
  ];

  const achievements = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Built" },
    { number: "10+", label: "Freelance Clients" },
    { number: "Production", label: "Deployment Ready" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#0A1930] py-20 px-6 md:px-10"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <MotionDiv
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
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Full Stack Developer (Next.js, Node.js, DevOps) — Building Scalable Web Apps & APIs
          </p>
        </MotionDiv>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <MotionDiv
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
                  Hi, I'm{" "}
                  <strong className="text-[#63B8B2]">Ubaid Bin Waris</strong> a 
                  Full Stack Developer and Computer Science student from Islamabad, Pakistan. 
                  I specialize in building modern, scalable web applications that are clean, 
                  responsive, and production-ready.
                </p>
                <p>
                  My programming journey started with{" "}
                  <strong className="text-white">C++ and Data Structures</strong>, 
                  building my foundation in problem-solving. I transitioned into web development 
                  and now create complete systems from responsive UIs to backend architecture, 
                  databases, and RESTful APIs.
                </p>
                <p>
                  I work with the{" "}
                  <strong className="text-white">MERN stack</strong> (MongoDB, 
                  Express.js, React, Node.js),{" "}
                  <strong className="text-white">Next.js</strong>, and{" "}
                  <strong className="text-white">TypeScript</strong>. 
                  Beyond development, I have strong expertise in{" "}
                  <strong className="text-white">DevOps and Infrastructure</strong> — 
                  proficient in{" "}
                  <strong className="text-white">Linux system administration</strong>, 
                  cloud platforms ({" "}
                  <strong className="text-white">AWS, Hetzner, Hostinger</strong>), 
                  server configuration, deployment automation, and Docker containerization.
                </p>
                <p>
                  I gained professional experience at{" "}
                  <strong className="text-white">HEC</strong>, <strong className="text-white">BlueCentric</strong>, <strong className="text-white">HH Tech Hub</strong>, <strong className="text-white">GixiAi</strong>, contributing to web development 
                  and learning how large-scale systems operate in real-world environments.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  <strong className="text-white">What I do:</strong> I help startups and businesses 
                  build fast Next.js websites, secure backend APIs with Node.js and Express, and 
                  deploy production-ready systems on Linux servers using Docker and cloud hosting 
                  (AWS, Hetzner, Hostinger).
                </p>
                <p className="text-[#63B8B2] font-semibold">
                  Fun Fact: I'm a long-time Linux enthusiast experimented with Ubuntu, 
                  Fedora, Zorin, and Arch Linux.
                </p>
              </div>
            </div>

            {/* Work Philosophy */}
            <div className="bg-[#0f2744] border border-[#1a3a5c] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                My Work Philosophy & Approach
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#63B8B2] mr-3 text-xl">✓</span>
                  <span>
                    <strong className="text-white">Quality First:</strong>{" "}
                    Writing clean, maintainable, and scalable code that follows 
                    industry best practices and design patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#63B8B2] mr-3 text-xl">✓</span>
                  <span>
                    <strong className="text-white">Full-Stack Mindset:</strong>{" "}
                    Comfortable working across frontend, backend, databases, 
                    and infrastructure to deliver complete solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#63B8B2] mr-3 text-xl">✓</span>
                  <span>
                    <strong className="text-white">Performance & Security:</strong>{" "}
                    Building applications optimized for speed, scalability, 
                    and secure deployment on production servers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#63B8B2] mr-3 text-xl">✓</span>
                  <span>
                    <strong className="text-white">Continuous Learning:</strong>{" "}
                    Constantly exploring new technologies, DevOps tools, and 
                    system architecture patterns to stay ahead
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#63B8B2] mr-3 text-xl">✓</span>
                  <span>
                    <strong className="text-white">Real-World Impact:</strong>{" "}
                    Building projects that solve actual problems rather than 
                    just coding for practice or grades
                  </span>
                </li>
              </ul>
            </div>
          </MotionDiv>

          {/* Right Column - Skills & Stats */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <MotionDiv
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
                </MotionDiv>
              ))}
            </div>

            {/* Skills */}
            <div className="bg-[#0f2744] border border-[#1a3a5c] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Technical Skills
              </h3>
              
              {/* SEO-friendly skills list (hidden visually, readable by search engines) */}
              <ul className="sr-only">
                <li>React.js - Advanced level, 3+ years experience</li>
                <li>Next.js - Advanced level, 3+ years experience</li>
                <li>Node.js - Advanced level, 3+ years experience</li>
                <li>Express.js - Advanced level, 3+ years experience</li>
                <li>MongoDB - Advanced level, 2+ years experience</li>
                <li>SQL - Advanced level, 2+ years experience</li>
                <li>TypeScript - Advanced level, 3+ years experience</li>
                <li>JavaScript - Advanced level, 3+ years experience</li>
                <li>Tailwind CSS - Advanced level, 3+ years experience</li>
                <li>REST APIs - Advanced level, 3+ years experience</li>
                <li>GraphQL - Advanced level, 3+ years experience</li>
                <li>Linux - Intermediate level, 2+ years experience</li>
                <li>DevOps - Intermediate level, 2+ years experience</li>
                <li>AWS - Intermediate level, 2+ years experience</li>
                <li>Hetzner - Intermediate level, 2+ years experience</li>
                <li>Hostinger - Intermediate level, 2+ years experience</li>
                <li>Docker - Intermediate level, 2+ years experience</li>
                <li>PM2 - Intermediate level, 2+ years experience</li>
                <li>Server Configuration - Advanced level, 2+ years experience</li>
              </ul>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-[#63B8B2] text-sm">
                        {skill.levelText} • {skill.years} years
                      </span>
                    </div>
                    <div 
                      className="w-full bg-[#1a3a5c] rounded-full h-2"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <MotionProgressBar
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
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
