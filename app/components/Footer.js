import Link from "next/link";
import { services } from "../data/servicesData";
import { site } from "../data/site";
export default function Footer() {
  return (
    <footer className="bg-[#081426] text-[#a9becb] border-t border-[#29404e]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid md:grid-cols-[1.3fr_1fr_1fr] gap-10">
        <div>
          <Link
            href="/"
            className="text-white text-xl font-semibold tracking-tight"
          >
            UBW<span className="text-[#9cddce]">.</span>
          </Link>
          <p className="text-sm leading-7 mt-5 max-w-xs">
            {site.role}. Building useful software with thoughtful interfaces and
            dependable foundations.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block mt-5 text-sm text-[#9cddce] break-all"
          >
            {site.email}
          </a>
        </div>
        <nav aria-label="Services">
          <p className="eyebrow">EXPLORE SERVICES</p>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-white">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Portfolio and profiles">
          <p className="eyebrow">ELSEWHERE</p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/full-stack-developer-portfolio"
                className="hover:text-white"
              >
                Engineering portfolio
              </Link>
            </li>
            {["GitHub", "LinkedIn", "Upwork", "Fiverr"].map((label, i) => (
              <li key={label}>
                <a
                  href={site.profiles[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {label} ↗
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 border-t border-[#29404e] flex flex-wrap justify-between gap-4 text-[10px] font-mono">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Islamabad, Pakistan · Working worldwide</span>
      </div>
    </footer>
  );
}
