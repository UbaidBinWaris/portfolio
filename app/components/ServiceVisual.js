// CSS/HTML system illustration: accessible text, no bitmap downloads or client runtime.
export default function ServiceVisual({ service }) {
  return (
    <figure
      className={`system-visual visual-${service.visual}`}
      aria-label={`${service.shortTitle} workflow illustration`}
    >
      <div className="visual-topline">
        <span>
          <i /> SYSTEM BLUEPRINT
        </span>
        <span>FIG. {service.number}</span>
      </div>
      <div className="visual-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-core" aria-hidden="true">
        <span className="core-mark">
          {service.visual === "voice"
            ? "◉"
            : service.visual === "web"
              ? "</>"
              : "⌘"}
        </span>
        <div className="signal-bars">
          {Array.from({ length: 25 }, (_, i) => (
            <span
              key={i}
              style={{
                height: `${12 + ((i * 37 + 11) % 61)}px`,
                animationDelay: `${i * 0.09}s`,
              }}
            />
          ))}
        </div>
        <span className="core-label">{service.shortTitle}</span>
      </div>
      <ol className="visual-flow">
        {service.flow.map((step, i) => (
          <li key={step}>
            <span>0{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>
      <figcaption>
        <span>DESIGNED AROUND YOUR WORKFLOW</span>
        <span>INPUT → OUTCOME</span>
      </figcaption>
    </figure>
  );
}
