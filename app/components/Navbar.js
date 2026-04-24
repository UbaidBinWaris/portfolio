"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "home", index: "00" },
  { href: "#about", label: "about", index: "01" },
  { href: "#skills", label: "skills", index: "02" },
  { href: "#projects", label: "projects", index: "03" },
  { href: "#experience", label: "experience", index: "04" },
  { href: "#contact", label: "contact", index: "05" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  // Lock scroll when panel open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMenu();
  };

  return (
    <>
      {/* ── Minimal top bar ── */}
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A1930]/90 backdrop-blur-md border-b border-[#1a3a5c]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-4">
          {/* Logo mark */}
          <Link
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="group flex items-center gap-1 custom-pointer"
            aria-label="Go to top"
          >
            <span className="text-[#63B8B2] text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity">&lt;</span>
            <span className="text-white font-bold text-sm tracking-[0.15em] group-hover:text-[#63B8B2] transition-colors duration-300">
              UBW
            </span>
            <span className="text-[#63B8B2] text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity">/&gt;</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label, index }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className="group flex items-center gap-1.5 text-sm custom-pointer transition-colors duration-200"
                >
                  <span className="text-[#63B8B2] text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                    {index}.
                  </span>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Resume + Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-[#63B8B2] text-[#63B8B2] text-sm rounded-sm hover:bg-[#63B8B2]/10 hover:glow-teal transition-all duration-300 custom-pointer"
            >
              <span className="font-mono text-xs opacity-70">$</span> resume.pdf
            </Link>

            {/* Hamburger — always visible on mobile, visible on desktop only when scrolled */}
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className={`relative flex flex-col justify-center items-center w-9 h-9 rounded-sm border custom-pointer transition-all duration-300 ${
                isOpen
                  ? "border-[#63B8B2] bg-[#63B8B2]/10"
                  : "border-[#1a3a5c] hover:border-[#63B8B2]"
              } md:flex`}
            >
              <span
                className={`block w-4 h-px bg-[#63B8B2] transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`block w-4 h-px bg-[#63B8B2] transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-4 h-px bg-[#63B8B2] transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Right-side slide panel overlay ── */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Panel */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute top-0 right-0 h-full w-[min(85vw,380px)] bg-[#060e1f] border-l border-[#1a3a5c] shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel top bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a3a5c]">
            <div className="font-mono text-xs text-gray-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-status-pulse inline-block" />
              /nav/menu
            </div>
            <button
              onClick={closeMenu}
              className="text-gray-500 hover:text-[#63B8B2] transition-colors custom-pointer w-7 h-7 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center gap-4 pt-10 pb-8 px-6 border-b border-[#1a3a5c]">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-2 border-[#63B8B2] overflow-hidden">
                <Image
                  src="/me.jpeg"
                  alt="Ubaid Bin Waris"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  quality={70}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#060e1f]" />
            </div>
            <div className="text-center">
              <p className="text-white font-semibold tracking-wide">Ubaid Bin Waris</p>
              <p className="text-[#63B8B2] text-xs font-mono mt-1">Backend · AI · Systems</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-6 py-8" aria-label="Slide panel navigation">
            <ul className="space-y-1">
              {navLinks.map(({ href, label, index }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="group w-full flex items-center gap-4 px-4 py-3 text-left rounded-sm hover:bg-[#1a3a5c]/50 transition-all duration-200 custom-pointer"
                  >
                    <span className="text-[#63B8B2] font-mono text-xs w-6 text-right shrink-0">
                      {index}
                    </span>
                    <span className="w-px h-4 bg-[#1a3a5c] group-hover:bg-[#63B8B2] transition-colors" />
                    <span className="text-gray-300 group-hover:text-white text-sm tracking-wide transition-colors">
                      {label}
                    </span>
                    <span className="ml-auto text-[#63B8B2] opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 pb-8 space-y-3 border-t border-[#1a3a5c] pt-6">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#63B8B2]/10 border border-[#63B8B2] text-[#63B8B2] text-sm rounded-sm hover:bg-[#63B8B2] hover:text-[#0A1930] transition-all duration-300 font-mono custom-pointer"
            >
              $ cat resume.pdf
            </Link>
            <p className="text-center text-gray-700 text-xs font-mono">
              © 2025 Ubaid Bin Waris
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
