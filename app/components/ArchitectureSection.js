import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { work } from "../data/workData";
import { getService } from "../data/servicesData";
export default function ArchitectureSection() {
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-heading"
      className="w-full bg-background px-6 md:px-10 py-24 border-b border-line"
    >
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow">03 / SYSTEMS ARCHITECTURE</p>
        <h2
          id="architecture-heading"
          className="text-fg text-3xl md:text-4xl font-semibold mb-5"
        >
          How the pieces fit together.
        </h2>
        <p className="text-fg-muted text-sm leading-7 max-w-2xl mb-10">
          A look at the decisions behind recent systems. Expand each blueprint
          to explore the approach.
        </p>
        <div className="space-y-4">
          {work.slice(0, 3).map((project, i) => (
            <details
              key={project.slug}
              className="rounded-card bg-surface border border-line p-6 md:p-8"
              open={i === 0}
            >
              <summary className="text-fg cursor-pointer text-lg font-medium">
                {project.title}
                <span className="block text-xs text-fg-muted mt-2 font-normal">
                  {project.category} · Architecture walkthrough
                </span>
              </summary>
              <div className="grid lg:grid-cols-2 gap-8 mt-7">
                <div>
                  <p className="text-sm leading-7 text-fg-muted">
                    {project.problem}
                  </p>
                  <ul className="space-y-3 mt-5">
                    {project.approach.map((step) => (
                      <li
                        key={step}
                        className="text-sm text-fg-muted leading-7 flex gap-3"
                      >
                        <span className="text-accent-fg">→</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="quiet-link mt-6"
                    href={`/work/${project.slug}`}
                  >
                    Read decisions and tradeoffs <ArrowUpRight size={16} />
                  </Link>
                </div>
                <ol className="list-none space-y-3">
                  {getService(project.service).flow.map((step, index) => (
                    <li
                      key={step}
                      className="border border-line bg-background px-5 py-4 rounded-md text-sm text-fg-muted flex items-center gap-4"
                    >
                      <span className="text-accent-fg font-mono text-xs">
                        0{index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
