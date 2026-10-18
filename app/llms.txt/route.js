import { services } from "../data/servicesData";
import { work, isPrivate, projectStatus } from "../data/workData";
import { site } from "../data/site";

export const dynamic = "force-static";
export function GET() {
  const text = [
    `# ${site.name} — ${site.role}`,
    "",
    `> ${site.description}`,
    "",
    `Location: ${site.location} (UTC+5). Remote engagements worldwide.`,
    `Contact: ${site.email}`,
    "",
    "## Services",
    "",
    ...services.map(
      (s) => `- [${s.title}](${site.url}/${s.slug}): ${s.answer}`,
    ),
    "",
    "## Live and open-source projects",
    "",
    ...work
      .filter((p) => !isPrivate(p))
      .map(
        (p) =>
          `- [${p.title}](${site.url}/work/${p.slug}) (${projectStatus(p)}, ${p.period}): ${p.summary} Links: ${p.links.map((l) => l.url).join(", ")}`,
      ),
    "",
    "## Private project walkthroughs",
    "",
    "Private or client-owned work. These pages describe architecture without exposing confidential code or client details.",
    ...work
      .filter((p) => isPrivate(p))
      .map(
        (p) => `- [${p.title}](${site.url}/work/${p.slug}): ${p.summary}`,
      ),
    "",
    "## Profiles",
    "",
    ...site.profiles.map((url) => `- ${url}`),
    "",
  ].join("\n");
  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
