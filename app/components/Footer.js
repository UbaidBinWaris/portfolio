'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="py-6 mt-12 w-full max-w-7xl mx-auto px-6 border-t border-[#1a3a5c]/50">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500 font-mono">
        <p>© {year} Ubaid Bin Waris. All rights reserved.</p>
        <p className="text-xs text-gray-600"> Islamabad, Pakistan • Remote Worldwide</p>
      </div>
    </footer>
  );
}
