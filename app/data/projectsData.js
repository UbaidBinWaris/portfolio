import { work } from "./workData";
// Client repositories remain private; every public link leads to a real walkthrough.
export const projectsData = work.map((project, i) => ({
  id: i + 1,
  title: project.title,
  description: project.summary,
  tech: project.stack,
  category: project.category,
  status: "PRIVATE",
  link: `/work/${project.slug}`,
}));
