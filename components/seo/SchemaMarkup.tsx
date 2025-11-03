'use client';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface SchemaData {
  items?: BreadcrumbItem[];
  faqs?: FAQ[];
  [key: string]: unknown;
}

interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'Service' | 'Organization' | 'BreadcrumbList' | 'FAQPage';
  data: SchemaData;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  let schema: Record<string, unknown> = {};

  switch (type) {
    case 'LocalBusiness':
      schema = {
        '@context': 'https://schema.org',
        '@type': ['BeautySalon', 'HealthAndBeautyBusiness', 'LocalBusiness'],
        '@id': 'https://beautysanctuarybymarin.com/#business',
        name: 'Beauty Sanctuary by Carmen Marin',
        alternateName: 'Beauty Sanctuary',
        description: 'Premier beauty sanctuary offering advanced facials, body contouring, massage therapy, and anti-aging treatments in Euless, TX. Serving the entire DFW metroplex including Arlington, Irving, Grand Prairie, Fort Worth, Dallas, Plano, Frisco, and surrounding areas.',
        image: 'https://beautysanctuarybymarin.com/images/hero-bg.jpg',
        url: 'https://beautysanctuarybymarin.com',
        telephone: '+14696649996',
        priceRange: '$$-$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1321 Chisholm Trail, Suite 200, Spa Room 2',
          addressLocality: 'Euless',
          addressRegion: 'TX',
          postalCode: '76039',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '32.8370',
          longitude: '-97.0822',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Euless',
            '@id': 'https://en.wikipedia.org/wiki/Euless,_Texas',
          },
          {
            '@type': 'City',
            name: 'Arlington',
          },
          {
            '@type': 'City',
            name: 'Irving',
          },
          {
            '@type': 'City',
            name: 'Grand Prairie',
          },
          {
            '@type': 'City',
            name: 'Mansfield',
          },
          {
            '@type': 'City',
            name: 'Frisco',
          },
          {
            '@type': 'City',
            name: 'Plano',
          },
          {
            '@type': 'City',
            name: 'McKinney',
          },
          {
            '@type': 'City',
            name: 'Coppell',
          },
          {
            '@type': 'City',
            name: 'Fort Worth',
          },
          {
            '@type': 'City',
            name: 'Dallas',
          },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '16:00',
          },
        ],
        sameAs: [
          'https://www.instagram.com/beauty_sanctuary_by_cm/',
          'https://www.facebook.com/BHbyCarmenMarin/',
        ],
        founder: {
          '@type': 'Person',
          name: 'Carmen Marin',
          jobTitle: 'Licensed Esthetician',
          description: 'Licensed esthetician with 6+ years of experience specializing in advanced body contouring, facial rejuvenation, and personalized beauty treatments.',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Beauty & Spa Services',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Facials',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Anti-Aging Facials',
                    description: 'Advanced cryotherapy and LED treatments for facial rejuvenation',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Advanced Facials',
                    description: 'Cutting-edge facial treatments with advanced technology',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Classic Facials',
                    description: 'Traditional facial treatments for healthy, glowing skin',
                  },
                },
              ],
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Body Contouring & Sculpting',
                description: 'Non-invasive body contouring and sculpting treatments for transformative results',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Massage Therapy',
                description: 'Professional therapeutic massage for relaxation and wellness',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Slimming Treatments',
                description: 'Comprehensive slimming and body sculpting packages',
              },
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '54',
          bestRating: '5',
          worstRating: '1',
        },
      };
      break;

    case 'Service':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: data.name,
        provider: {
          '@type': 'BeautySalon',
          name: 'Beauty Sanctuary by Carmen Marin',
          '@id': 'https://beautysanctuarybymarin.com/#business',
        },
        description: data.longDescription || data.description,
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '32.8370',
            longitude: '-97.0822',
          },
          geoRadius: '50000', // 50km radius covering DFW
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          url: `https://beautysanctuarybymarin.com/services/${data.slug}`,
        },
      };
      break;

    case 'Organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://beautysanctuarybymarin.com/#organization',
        name: 'Beauty Sanctuary by Carmen Marin',
        url: 'https://beautysanctuarybymarin.com',
        logo: 'https://beautysanctuarybymarin.com/images/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-469-664-9996',
          contactType: 'Customer Service',
          areaServed: 'US',
          availableLanguage: ['English', 'Spanish'],
        },
        sameAs: [
          'https://www.instagram.com/beauty_sanctuary_by_cm/',
          'https://www.facebook.com/BHbyCarmenMarin/',
        ],
      };
      break;

    case 'BreadcrumbList':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.items?.map((item, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
      break;

    case 'FAQPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faqs?.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
