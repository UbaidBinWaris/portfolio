import Link from "next/link";
export default function CurrentlyBuilding() {
  return (
    <aside className="w-full bg-[#0d2330] border-y border-[#2b4851] px-6 md:px-10 py-5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-[#bcd3d8]">
          <span className="text-[#9cddce]">Current focus</span> · Voice agents,
          workflow automation & backend systems
        </p>
        <Link
          href="/full-stack-developer-portfolio"
          className="text-xs text-[#bce8d9] font-mono"
        >
          Explore the work ↗
        </Link>
      </div>
    </aside>
  );
}
