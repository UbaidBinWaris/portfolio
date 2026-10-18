import experienceData from "../data/experienceData";
export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full bg-background py-24 px-6 md:px-10 border-b border-line"
    >
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow">05 / EXPERIENCE</p>
        <h2
          id="experience-heading"
          className="text-fg text-3xl md:text-4xl font-semibold mb-12"
        >
          Built through doing.
        </h2>
        <ol className="list-none">
          {experienceData.map((item) => (
            <li
              key={item.id}
              className="grid md:grid-cols-[240px_1fr] gap-4 md:gap-8 py-8 border-t border-line"
            >
              <div>
                <p className="text-fg-subtle text-xs font-mono">
                  {item.duration}
                </p>
                <p className="text-fg-muted text-sm mt-3">{item.company}</p>
              </div>
              <div>
                <h3 className="text-fg text-xl font-medium mb-4">
                  {item.title}
                </h3>
                <p className="text-fg-muted text-sm leading-7 max-w-2xl">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
