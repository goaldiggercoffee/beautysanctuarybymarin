import { notFound } from 'next/navigation';
import { getAllServices, getServiceBySlug } from '@/data/services';
import ServiceDetailClient from './ServiceDetailClient';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  // Google truncates titles around 60 chars and descriptions around 155. The old
  // template stacked four cities into the title and appended a 177-char boilerplate
  // tail to the description, so the local keywords were always cut off before they
  // rendered — we paid the duplicate-boilerplate cost and got none of the benefit.
  // One city, and the useful text first.
  // Keep the whole title under ~60 chars so Google shows it intact. Long service
  // names drop the brand suffix rather than getting truncated mid-phrase.
  const withBrand = `${service.name} | Euless, TX | Beauty Sanctuary`;
  const title = withBrand.length <= 60 ? withBrand : `${service.name} | Euless, TX`;

  const description = `${service.description} Book with licensed esthetician Carmen Marin in Euless, TX.`
    .replace(/\s+/g, ' ')
    .trim();

  return {
    title,
    description: description.length > 155 ? `${description.slice(0, 152).trimEnd()}...` : description,
    openGraph: {
      title: `${service.name} | Beauty Sanctuary, Euless TX`,
      description: service.description,
      images: [service.images.hero],
      type: 'website',
    },
    alternates: {
      canonical: `https://beautysanctuarybymarin.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
