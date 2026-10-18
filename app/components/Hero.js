import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { work, projectStatus } from "../data/workData";

const deliveryPath = [
  { code: "01", title: "Interface", tools: "Next.js · React" },
  { code: "02", title: "Application", tools: "NestJS · Express · Spring Boot" },
  { code: "03", title: "Data", tools: "PostgreSQL · MongoDB · MySQL" },
  { code: "04", title: "Runtime", tools: "Linux · Nginx · CI/CD" },
];
// Evidence, not a fourth list of tools: counts derive from the case studies.
const count = (status) =>
  work.filter((p) => status.includes(projectStatus(p))).length;
const proof = [
  [work.length, "case studies"],
  [count(["Live"]), "live in production"],
  [count(["Open source", "Public repo"]), "public on GitHub"],
  ["24h", "typical reply"],
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div>
          <p className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span>Available for new projects</span>
          </p>
          <p className="hero-overline">UBAID BIN WARIS / FULL-STACK DEVELOPER</p>
          <h1 id="hero-heading">
            I engineer the <span>whole product.</span>
          </h1>
          <p className="hero-lede">
            From polished React interfaces to production APIs, AI automation,
            voice agents, databases, deployment pipelines, and the Linux servers
            that keep everything running.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start a project <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href="#projects" className="btn-secondary">
              View my work <ArrowDownRight size={16} aria-hidden="true" />
            </a>
          </div>
          <dl className="hero-proof" aria-label="At a glance">
            {proof.map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="system-map" aria-label="Full-stack delivery architecture">
          <div className="system-map-head">
            <span>production / delivery-path</span>
            <span>
              <span className="status-dot" aria-hidden="true" /> online
            </span>
          </div>
          <ol className="system-map-body">
            {deliveryPath.map((layer, index) => (
              <li className="system-map-layer" key={layer.code}>
                <span className="system-map-index">{layer.code}</span>
                <div>
                  <strong>{layer.title}</strong>
                  <span>{layer.tools}</span>
                </div>
                <span className="system-map-signal" aria-hidden="true">
                  {index === deliveryPath.length - 1 ? "●" : "↓"}
                </span>
              </li>
            ))}
          </ol>
          <div className="system-map-console">
            <span>$ deploy --env production</span>
            <span>✓ build passed</span>
          </div>
          <div className="system-map-tags">
            {["Arch Linux", "GitHub Actions", "Nginx", "Docker"].map((tool) => (
              <span className="tag" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
