'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="py-4 mt-12 w-[99%]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/40">
        <div className="flex gap-4">
          <Link href="/full-stack-developer-portfolio" className="hover:text-white/70 transition-colors duration-200 font-mono text-xs">
            Full Stack Developer Portfolio
          </Link>
          <Link href="/hire-nextjs-developer-pakistan" className="hover:text-white/70 transition-colors duration-200 font-mono text-xs">
            Hire Next.js Developer in Pakistan
          </Link>
        </div>
        <p>© {year} Ubaid Bin Waris. All rights reserved.</p>
      </div>
    </footer>
  );
}
