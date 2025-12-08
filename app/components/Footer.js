export default function Footer() {
  return (
    <footer className="py-1 mt-12 w-[99%] text-end">
      <div className="text-sm text-white/40">
        <p suppressHydrationWarning>© {new Date().getFullYear()} Ubaid Bin Waris. All rights reserved.</p>
      </div>
    </footer>
  );
}
