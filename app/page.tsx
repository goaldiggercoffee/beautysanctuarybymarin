import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import NetflixRow from '@/components/netflix/NetflixRow';
import ServiceAreas from '@/components/home/ServiceAreas';
import ContactSection from '@/components/contact/ContactSection';
import { serviceCategories } from '@/data/services';

export const metadata: Metadata = {
  title: 'Beauty Sanctuary | Best Facials, Body Contouring & Massage in Euless, TX',
  description: 'Top-rated beauty spa in Euless offering professional facials, body contouring, slimming treatments & massage therapy. Serving Arlington, Irving, Grand Prairie, Fort Worth, Dallas & all of DFW. Expert esthetician Carmen Marin. Virtual consultations available worldwide. Book your appointment today!',
  keywords: 'beauty spa Euless TX, facials near me, body contouring Euless, massage therapy DFW, anti-aging facial treatments, slimming treatments Arlington TX, cryotherapy facial Irving, body sculpting Grand Prairie, licensed esthetician Euless, beauty salon Fort Worth',
  openGraph: {
    title: 'Beauty Sanctuary | Premier Spa Services in Euless, TX & DFW',
    description: 'Experience luxury beauty treatments in Euless. Facials, body contouring, massage & more. Serving all of DFW metroplex.',
    images: ['/images/hero-bg.jpg'],
  },
  alternates: {
    canonical: 'https://beautysanctuarybymarin.com',
  },
};

export default function Home() {
  // Get categories by their specific slugs in the desired order
  const consultations = serviceCategories.find(cat => cat.slug === 'consultations');
  const promotions = serviceCategories.find(cat => cat.slug === 'promotions-packages');
  const antiAging = serviceCategories.find(cat => cat.slug === 'anti-aging-facials');
  const advancedFacials = serviceCategories.find(cat => cat.slug === 'advanced-facials');
  const classicFacials = serviceCategories.find(cat => cat.slug === 'classic-facials');
  const specializedBody = serviceCategories.find(cat => cat.slug === 'specialized-body-treatments');
  const bodyContouring = serviceCategories.find(cat => cat.slug === 'body-contouring-sculpting');
  const massage = serviceCategories.find(cat => cat.slug === 'massage-therapy');
  const faceCoaching = serviceCategories.find(cat => cat.slug === 'virtual-face-coaching');

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Netflix-style Service Rows - DARK THEME */}
      <div id="services" className="bg-dark-bg">
        {/* 1. CONSULTATIONS */}
        {consultations && <NetflixRow category={consultations} />}

        {/* 2. PROMOTIONS & PACKAGES */}
        {promotions && <NetflixRow category={promotions} />}

        {/* 3. ANTI-AGING FACIALS */}
        {antiAging && <NetflixRow category={antiAging} />}

        {/* 4. ADVANCED FACIALS */}
        {advancedFacials && <NetflixRow category={advancedFacials} />}

        {/* 5. CLASSIC FACIALS */}
        {classicFacials && <NetflixRow category={classicFacials} />}

        {/* 6. SPECIALIZED BODY TREATMENTS */}
        {specializedBody && <NetflixRow category={specializedBody} />}

        {/* 7. BODY CONTOURING & SCULPTING */}
        {bodyContouring && <NetflixRow category={bodyContouring} />}

        {/* 8. MASSAGE THERAPY */}
        {massage && <NetflixRow category={massage} />}

        {/* 9. VIRTUAL FACE COACHING */}
        {faceCoaching && <NetflixRow category={faceCoaching} />}
      </div>

      {/* Service Areas Section - SEO for DFW coverage */}
      <ServiceAreas />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
