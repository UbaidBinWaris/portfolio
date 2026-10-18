import { featuredWork, projectStatus } from "./workData";
// Homepage cards: featured work only. The full list lives on the portfolio page.
export const projectsData = featuredWork.map((project, i) => ({
  id: i + 1,
  title: project.title,
  description: project.summary,
  tech: project.stack.slice(0, 6),
  category: project.category,
  status: projectStatus(project),
  link: `/work/${project.slug}`,
}));
