import { Metadata } from 'next';
import { results } from '@/data/results';
import ResultsGallery from '@/components/results/ResultsGallery';

export const metadata: Metadata = {
  title: 'Results Gallery - Real Transformations | Beauty Sanctuary',
  description: 'View stunning before and after results from our body contouring, facial, and anti-aging treatments. Real transformations by Carmen Marin.',
  openGraph: {
    title: 'Results Gallery - Real Transformations | Beauty Sanctuary',
    description: 'View stunning before and after results from our treatments.',
    type: 'website',
  },
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary to-dark-bg opacity-50" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left-aligned content */}
          <div className="max-w-3xl">
            <p className="text-accent-primary text-sm sm:text-base font-medium tracking-widest uppercase mb-6">
              Client Transformations
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-light-primary mb-6 leading-tight">
              Real Results
            </h1>
            <p className="text-xl sm:text-2xl text-light-secondary leading-relaxed max-w-2xl">
              Witness the stunning transformations achieved through our professional
              treatments. Every result tells a story of confidence and beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Results Gallery Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ResultsGallery results={results} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-accent-primary/10 to-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-light-primary mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg text-light-secondary mb-8">
              Join our satisfied clients and experience the transformative power of
              professional beauty treatments. Book your appointment today.
            </p>
            <a
              href="/#services"
              className="inline-block px-8 py-4 bg-accent-primary text-dark-bg rounded-lg hover:bg-accent-hover transition-all font-semibold text-lg"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
