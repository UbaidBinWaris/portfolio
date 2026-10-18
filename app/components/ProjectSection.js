import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "../data/projectsData";
import { work } from "../data/workData";
export default function ProjectSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full bg-background py-24 px-6 md:px-10 border-b border-line"
    >
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow">01 / SELECTED WORK</p>
        <h2
          id="projects-heading"
          className="text-fg text-3xl md:text-4xl font-semibold mb-4"
        >
          Engineering behind the experience.
        </h2>
        <p className="text-fg-muted text-sm leading-7 max-w-2xl mb-10">
          Live products, open-source tools and private client systems. Each
          one links to the product, the code or an architecture walkthrough.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-card bg-surface border border-line p-6 hover:border-line-strong transition-colors flex flex-col has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-fg"
            >
              <div className="flex justify-between gap-4 text-xs font-mono text-fg-subtle mb-6">
                <span>
                  {String(project.id).padStart(2, "0")} / {project.category}
                </span>
                <span>{project.status.toUpperCase()}</span>
              </div>
              <h3 className="text-fg font-semibold text-lg mb-2">
                {/* Stretched link: the ::after covers the card, so the whole card is clickable. */}
                <Link
                  href={project.link}
                  className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="text-fg-muted text-sm leading-7 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tool) => (
                  <span
                    key={tool}
                    className="tag"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <span
                className="quiet-link mt-4 group-hover:underline underline-offset-4"
                aria-hidden="true"
              >
                Read the case study <ArrowUpRight size={16} />
              </span>
            </article>
          ))}
        </div>
        <Link
          href="/full-stack-developer-portfolio"
          className="quiet-link mt-8"
        >
          See all {work.length} projects <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
