import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/servicesData";
export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-[#081426] px-6 md:px-10 py-24"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <div>
            <p className="eyebrow">01 / ENGINEERING SERVICES</p>
            <h2
              id="services-heading"
              className="text-white text-3xl md:text-4xl tracking-tight leading-tight"
            >
              From the interface
              <br />
              <span className="text-[#9bb5c2]">to the infrastructure.</span>
            </h2>
          </div>
          <p className="text-[#a7bcc9] text-sm leading-7 max-w-sm">
            One engineer. Connected capabilities. Explore the approach,
            deliverables and tools behind each service.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group p-7 rounded-lg border border-[#2c4754] bg-gradient-to-br from-[#102635] to-[#091729] hover:border-[#76b8a8] transition-colors flex flex-col"
            >
              <div className="flex justify-between text-[#91cbbb] mb-9">
                <span className="text-[10px] tracking-widest font-mono">
                  {service.number} / {service.category.toUpperCase()}
                </span>
                <ArrowUpRight size={18} className="shrink-0" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-[#a7bcc9] text-sm leading-7 mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto border-t border-[#29404e] pt-5">
                {service.stack.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="text-[#9dc0c4] text-[10px] font-mono"
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
