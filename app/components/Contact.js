import { ArrowUpRight, Mail } from "lucide-react";
import contactLinks from "@/app/data/contactLinks";
import { site } from "../data/site";

const channels = contactLinks.filter((l) => l.name !== "Portfolio");

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-background py-24 px-6 md:px-10"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow">07 / CONTACT</p>
        <h2
          id="contact-heading"
          className="text-fg text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Got a project? Let&apos;s talk.
        </h2>
        <p className="text-fg-muted text-base leading-7 mt-4 mb-12 max-w-2xl">
          Send your goals, existing systems and target date. I reply within
          about 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-6 xl:gap-8">
          <div className="bg-surface border border-line rounded-card p-6 md:p-8 space-y-8">
            <p className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>Available for freelance & full-time roles</span>
            </p>

            <div>
              <p className="font-mono text-xs text-fg-subtle mb-2">email</p>
              <a
                href={`mailto:${site.email}`}
                className="inline-block text-xl md:text-2xl font-semibold text-fg hover:underline underline-offset-4 break-all"
              >
                {site.email}
              </a>
            </div>

            <div>
              <p className="font-mono text-xs text-fg-subtle mb-2">location</p>
              <p className="text-fg-muted text-sm">
                Islamabad, Pakistan (UTC+5) · Remote worldwide
              </p>
            </div>

            <div className="pt-6 border-t border-line flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn-primary">
                <Mail size={16} aria-hidden="true" /> Send an email
              </a>
              <a
                href={site.profiles[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Hire on Upwork
              </a>
              <a
                href={site.profiles[3]}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Hire on Fiverr
              </a>
            </div>
          </div>

          <div className="bg-surface border border-line rounded-card overflow-hidden">
            <p className="px-6 py-4 border-b border-line font-mono text-xs text-fg-subtle">
              channels
            </p>
            <ul className="divide-y divide-line">
              {channels.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ "--brand": link.color }}
                    className="group flex items-center justify-between gap-4 px-6 min-h-14 hover:bg-raised focus-visible:bg-raised transition-colors"
                  >
                    <span className="flex items-center gap-4 text-sm text-fg-muted group-hover:text-fg transition-colors">
                      <span
                        className="text-lg text-fg-subtle group-hover:text-(--brand) group-focus-visible:text-(--brand) transition-colors"
                        aria-hidden="true"
                      >
                        {link.icon}
                      </span>
                      {link.name}
                    </span>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="text-fg-subtle group-hover:text-accent-fg transition-colors"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="px-6 py-4 border-t border-line font-mono text-xs text-fg-subtle">
              response time ~24h · preferred: email / upwork
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
