import Link from "next/link";
import { services } from "../data/servicesData";
import { site } from "../data/site";
import contactLinks from "../data/contactLinks";

const profiles = contactLinks.filter((l) =>
  ["GitHub", "LinkedIn", "Upwork", "Fiverr"].includes(l.name),
);
export default function Footer() {
  return (
    <footer className="bg-background text-fg-muted border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid md:grid-cols-[1.3fr_1fr_1fr] gap-10">
        <div>
          <Link
            href="/"
            className="text-fg font-mono text-lg font-semibold tracking-tight"
          >
            UBW<span className="text-accent-fg">.</span>
          </Link>
          <p className="text-sm leading-7 mt-5 max-w-xs">
            {site.role}. Building useful software with thoughtful interfaces and
            dependable foundations.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block mt-5 text-sm text-accent-fg break-all"
          >
            {site.email}
          </a>
        </div>
        <nav aria-label="Services">
          <p className="eyebrow">EXPLORE SERVICES</p>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-fg">
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
                className="hover:text-fg"
              >
                Engineering portfolio
              </Link>
            </li>
            {profiles.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--brand": link.color }}
                  className="group inline-flex items-center gap-2 hover:text-fg"
                >
                  <span
                    className="text-fg-subtle group-hover:text-(--brand) group-focus-visible:text-(--brand) transition-colors"
                    aria-hidden="true"
                  >
                    {link.icon}
                  </span>
                  {link.name} ↗
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fg"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 border-t border-line flex flex-wrap justify-between gap-4 text-xs font-mono">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Islamabad, Pakistan · Working worldwide</span>
      </div>
    </footer>
  );
}
