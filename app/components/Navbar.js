"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", index: 0 },
    { href: "#about", label: "About", index: 1 },
    { href: "#projects", label: "Projects", index: 2 },
    { href: "#contact", label: "Contact", index: 3 },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A1930] shadow-lg" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10 text-[#63B8B2]">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-100">
      <Link
        href="#home"
        className={`hover:text-[#63B8B2] transition-colors duration-200 ${
          isScrolled ? "text-white" : "text-[#63B8B2]"
        }`}
        aria-label="Home"
      >
        My Portfolio
      </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#63B8B2] p-2 rounded-md hover:bg-[#1f375c] transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-8 text-lg font-medium">
            {navLinks.map(({ href, label, index }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  {index}. <span className="text-gray-200">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/resume.pdf"
            className="ml-8 px-6 py-2 border-2 border-[#63B8B2] rounded-xl text-[#63B8B2] hover:bg-[#63B8B2] hover:text-white transition-all duration-300 hover:scale-105 shadow-md"
            aria-label="Download Resume"
            download
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1930] shadow-lg px-6 py-4">
          <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
            {navLinks.map(({ href, label, index }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-200 hover:text-[#63B8B2] transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {index}. {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                className="mt-2 px-6 py-2 border-2 border-[#63B8B2] rounded-full text-[#63B8B2] hover:bg-[#63B8B2] hover:text-white transition-all duration-300 hover:scale-105 shadow-md"
                onClick={toggleMenu}
                download
                aria-label="Download Resume"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
