import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "../data/projectsData";
export default function ProjectSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full bg-[#0a1930] py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow">SELECTED WORK</p>
        <h2
          id="projects-heading"
          className="text-white text-3xl md:text-4xl font-semibold mb-4"
        >
          Engineering behind the experience.
        </h2>
        <p className="text-[#acc0cb] text-sm leading-7 max-w-2xl mb-10">
          Private and client-owned projects. Explore the approach and
          architecture; repositories and confidential details remain private.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="rounded-lg bg-[#081426] border border-[#2a4553] p-7 flex flex-col"
            >
              <div className="flex justify-between gap-4 text-[10px] font-mono text-[#acd8ce] mb-7">
                <span>
                  0{project.id} / {project.category}
                </span>
                <span>PRIVATE PROJECT</span>
              </div>
              <h3 className="text-white font-medium text-xl mb-4">
                {project.title}
              </h3>
              <p className="text-[#acc0cb] text-sm leading-7 mb-7">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs text-[#b0cec9] border border-[#2a4553] px-2 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <Link href={project.link} className="quiet-link mt-5">
                Read the walkthrough <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        <Link
          href="/full-stack-developer-portfolio"
          className="quiet-link mt-8"
        >
          Explore the engineering portfolio <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
