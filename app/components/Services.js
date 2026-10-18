import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/servicesData";
export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-background px-6 md:px-10 py-24 border-b border-line"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <div>
            <p className="eyebrow">03 / ENGINEERING SERVICES</p>
            <h2
              id="services-heading"
              className="text-fg text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
            >
              From the interface
              <br />
              <span className="text-fg-muted">to the infrastructure.</span>
            </h2>
          </div>
          <p className="text-fg-muted text-sm leading-7 max-w-sm">
            One engineer. Connected capabilities. Explore the approach,
            deliverables and tools behind each service.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group p-6 rounded-card border border-line bg-surface hover:border-line-strong transition-colors flex flex-col"
            >
              <div className="flex justify-between text-fg-subtle group-hover:text-accent-fg transition-colors mb-8">
                <span className="text-xs tracking-wide font-mono">
                  {service.number} / {service.category.toUpperCase()}
                </span>
                <ArrowUpRight size={18} className="shrink-0" />
              </div>
              <h3 className="text-fg text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-fg-muted text-sm leading-7 mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto border-t border-line pt-5">
                {service.stack.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="text-fg-muted text-xs font-mono"
                  >
                    {tool} ·{" "}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
