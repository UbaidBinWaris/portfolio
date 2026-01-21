'use client';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="py-1 mt-12 w-[99%] text-end">
      <div className="text-sm text-white/40">
        <p>© {year} Ubaid Bin Waris. All rights reserved.</p>
      </div>
    </footer>
  );
}
