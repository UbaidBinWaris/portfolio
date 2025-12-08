"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock scroll on open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", index: 0 },
    { href: "#experience", label: "Experience", index: 1 },
    { href: "#blog", label: "Blog", index: 2 },
    { href: "#faq", label: "FAQ", index: 3 },
    { href: "#contact", label: "Contact", index: 4 },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A1930] shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between mx-auto px-10 sm:px-6 md:px-20 py-4 text-[#63B8B2]">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-400">
          <Link
            href="#home"
            className={`hover:text-[#63B8B2] transition-colors custom-pointer duration-200 ${
              isScrolled ? "text-[#63B8B2]" : "text-white"
            }`}
          >
            My Portfolio
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#63B8B2] p-2 custom-pointer rounded-md hover:bg-[#1f375c] transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-8 text-lg font-medium ">
            {navLinks.map(({ href, label, index }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                      // Instant scroll to avoid pin issues
                      target.scrollIntoView({ behavior: "instant", block: "start" });
                    }
                  }}
                  className="transition-colors duration-200 custom-pointer"
                >
                  {index}.{" "}
                  <span className="text-gray-200 hover:text-[#63B8B2]">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="ml-8 px-6 py-2 border-2 border-[#63B8B2] custom-pointer rounded-xl text-[#63B8B2] hover:bg-[#63B8B2] hover:text-white transition-all duration-300 hover:scale-105 shadow-md"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {/* Mobile Sidebar with Background Blur */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>

        {/* Sidebar Panel - Slide in from Right */}
        <div
          className={`absolute top-0 right-0 h-full w-[90vw] bg-[#0A1930] shadow-xl p-6 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="text-[#63B8B2] custom-pointer mb-4"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <Image
              src="/me.jpeg"
              width={300}
              height={300}
              alt="Ubaid Bin Waris"
              className="w-[60vw] max-w-[200px] aspect-square rounded-full border-2 border-[#63B8B2] object-cover"
              quality={60}
              sizes="200px"
              loading="lazy"
            />
          </div>

          {/* Name Heading */}
          <div className="flex justify-center items-center gap-x-2 px-4 mb-8">
            <span className="text-[#63B8B2] text-2xl md:text-3xl">&lt;</span>
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold tracking-wide whitespace-nowrap text-white text-center break-words">
              Ubaid Bin Waris
            </h2>
            <span className="text-[#63B8B2] text-2xl md:text-3xl">&gt;</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-6 text-lg font-medium text-start px-4">
            {navLinks.map(({ href, label, index }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                      // Instant scroll to avoid pin issues
                      target.scrollIntoView({ behavior: "instant", block: "start" });
                    }
                    toggleMenu();
                  }}
                  className="text-gray-200 custom-pointer hover:text-[#63B8B2] transition-colors duration-200"
                >
                  <span className="text-[#63B8B2]">{index}.</span> {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <div className="mt-12 px-4">
            <Link
              className="block custom-pointer text-center px-6 py-2 border-2 border-[#63B8B2] rounded-full text-[#63B8B2] hover:bg-[#63B8B2] hover:text-white transition-all duration-300 hover:scale-105 shadow-md"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
