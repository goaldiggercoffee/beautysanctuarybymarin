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

  // Generate location-optimized title and description
  const locationKeywords = 'Euless TX | Arlington | Irving | DFW';
  const serviceType = service.category.includes('facial') ? 'Facial' :
                      service.category.includes('body') ? 'Body Contouring' :
                      service.category.includes('massage') ? 'Massage' : 'Spa Service';

  return {
    title: `${service.name} in ${locationKeywords} | Beauty Sanctuary`,
    description: `${service.longDescription.substring(0, 140)}... Professional ${serviceType} serving Euless, Arlington, Irving, Grand Prairie, Fort Worth, Dallas & DFW metroplex. Book your appointment with licensed esthetician Carmen Marin today!`,
    keywords: `${service.name}, ${serviceType} Euless TX, ${serviceType} Arlington, ${serviceType} Irving, ${serviceType} DFW, beauty spa Euless, Carmen Marin esthetician`,
    openGraph: {
      title: `${service.name} | Euless, TX & DFW Metroplex`,
      description: `${service.description} - Serving Euless and the entire DFW area.`,
      images: [service.images.hero],
      type: 'website',
    },
    alternates: {
      canonical: `https://beautysanctuarybycm.com/services/${service.slug}`,
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
