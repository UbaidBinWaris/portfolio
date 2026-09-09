import { notFound } from "next/navigation";
import { services, getService } from "../data/servicesData";
import { pageMetadata } from "../lib/metadata";
import ServicePage from "../components/ServicePage";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return pageMetadata(
    service.title,
    service.description,
    `/${service.slug}`,
    `/${service.slug}/opengraph-image`,
  );
}
export default async function Page({ params }) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
