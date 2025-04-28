'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full px-8 py-6 flex items-center justify-between bg-gray-800"
    >
      <div className="text-2xl font-bold tracking-tight">
        portfolio
      </div>
      <nav className="flex gap-6">
        <a href="#about" className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
          About
        </a>
        <a href="#work" className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
          Work
        </a>
        <a href="#contact" className="px-4 py-2 rounded-md hover:bg-gray-700 transition">
          Contact
        </a>
        <a href="/resume.pdf" target="_blank" className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-gray-900 transition">
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
