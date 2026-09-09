"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  ["/#services", "Services"],
  ["/#architecture", "Architecture"],
  ["/full-stack-developer-portfolio", "Work"],
  ["/#experience", "Experience"],
  ["/#contact", "Contact"],
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
        className="fixed top-0 inset-x-0 z-50 bg-[#081426]/95 backdrop-blur-xl border-b border-[#29404e]/60"
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Ubaid Bin Waris home"
            className="text-white font-semibold text-xl tracking-tight"
          >
            UBW<span className="text-[#9cddce]">.</span>
          </Link>
          <ul className="hidden md:flex gap-7 text-xs text-[#afc1cd]">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={href === pathname ? "page" : undefined}
                  className="hover:text-[#a4e1ce]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            className="hidden md:inline-flex items-center gap-3 text-xs text-[#bce7da] border border-[#4b746c] rounded px-4 py-2.5 hover:bg-[#173735]"
            href="mailto:ubaidwaris34@gmail.com"
          >
            Let’s talk <ArrowUpRight size={14} />
          </a>
          <button
            ref={trigger}
            type="button"
            className="md:hidden text-[#bce7da] p-3 border border-[#345453] rounded"
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
        className="fixed inset-0 m-auto w-[calc(100%-32px)] max-w-sm bg-[#0d2230] text-white border border-[#375b60] rounded-xl p-7 backdrop:bg-[#020811]/85"
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-mono text-xs text-[#bce7da]">
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
                  className="flex items-center justify-between py-4 border-b border-[#375b60]"
                >
                  {label}
                  <ArrowUpRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-7 text-[#bce7da] text-sm"
        >
          Download resume ↗
        </a>
      </dialog>
    </>
  );
}
export default Navbar;
