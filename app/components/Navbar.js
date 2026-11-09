"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { publishedArticles } from "../data/articlesData";
// Same order as the homepage sections.
const links = [
  ["/#projects", "Work"],
  ["/#expertise", "Expertise"],
  ["/#services", "Services"],
  ["/#about", "About"],
  ["/#experience", "Experience"],
  // Shown once at least one article is published.
  ...(publishedArticles.length ? [["/articles", "Articles"]] : []),
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    const el = dialog.current;
    if (isOpen && !el.open) el.showModal();
    if (!isOpen && el.open) el.close();
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);
  const close = () => {
    setIsOpen(false);
    trigger.current?.focus();
  };
  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-xl border-b border-line/70"
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="text-fg font-mono font-semibold text-lg tracking-tight"
          >
            {/* Accessible name starts with the visible "UBW." for voice-control users. */}
            UBW<span className="text-accent-fg">.</span>
            <span className="sr-only"> Ubaid Bin Waris, home</span>
          </Link>
          <ul className="hidden md:flex gap-8 font-mono text-[13px] text-fg-muted">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={href === pathname ? "page" : undefined}
                  className="hover:text-fg transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="hidden md:inline-flex items-center gap-2 min-h-10 text-sm font-medium text-fg border border-line-strong rounded-lg px-4 hover:bg-raised transition-colors"
            href="/#contact"
          >
            Let’s talk <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <button
            ref={trigger}
            type="button"
            className="md:hidden text-fg p-3 border border-line rounded-lg"
            aria-label="Open navigation"
            aria-expanded={isOpen}
            aria-controls="navigation-dialog"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>
      <dialog
        ref={dialog}
        id="navigation-dialog"
        aria-label="Navigation menu"
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="fixed inset-0 m-auto w-[calc(100%-32px)] max-w-sm bg-surface text-fg border border-line rounded-xl p-6 backdrop:bg-background/90"
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-mono text-xs text-accent-fg">
            EXPLORE / UBW
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close navigation"
            className="p-3"
          >
            <X size={20} />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          <ul className="space-y-2">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  className="flex items-center justify-between py-4 border-b border-line"
                >
                  {label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/#contact" onClick={close} className="btn-primary w-full mt-6">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center min-h-11 mt-2 text-fg-muted text-sm hover:text-fg"
        >
          Download resume ↗
        </a>
      </dialog>
    </>
  );
}
export default Navbar;
