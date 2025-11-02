import type { Metadata } from 'next';
import Link from 'next/link';
import TestimonialGrid from '@/components/testimonials/TestimonialGrid';
import StarRating from '@/components/testimonials/StarRating';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | Beauty Sanctuary by Carmen Marin',
  description: '70+ five-star reviews from satisfied clients. Read real testimonials about body contouring, facial treatments, massage therapy, and more at Beauty Sanctuary in Euless, TX.',
  keywords: 'beauty sanctuary reviews, Carmen Marin testimonials, Euless esthetician reviews, body contouring results, facial treatment reviews, client testimonials',
  openGraph: {
    title: 'Client Reviews & Testimonials | Beauty Sanctuary',
    description: '70+ five-star reviews from satisfied clients. Real results, real transformations.',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  // Calculate average rating
  const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
  const averageRating = (totalRating / testimonials.length).toFixed(1);

  return (
    <div className="bg-dark-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-dark-bg py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-light-primary mb-6">
              Client Transformations & Reviews
            </h1>
            <p className="text-xl md:text-2xl text-light-secondary mb-8">
              See what our clients are saying about their experience at Beauty Sanctuary
            </p>

            {/* Overall Rating Display */}
            <div className="flex items-center gap-6 bg-dark-secondary p-6 rounded-lg border border-accent-rose/20 inline-flex">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-5xl font-bold text-accent-rose">
                    {averageRating}
                  </span>
                  <div>
                    <StarRating rating={5} size="lg" />
                    <p className="text-light-secondary text-sm mt-1">
                      from {testimonials.length}+ happy clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid with Filtering */}
      <section className="py-16 md:py-24 bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <TestimonialGrid />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-light-primary mb-6">
              Ready to Experience It Yourself?
            </h2>
            <p className="text-lg text-light-secondary mb-8 max-w-2xl mx-auto">
              Join the hundreds of satisfied clients who have trusted Beauty Sanctuary
              for their beauty and wellness transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.vagaro.com/beautysanctuarybycarmenmarin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-rose text-dark-bg px-8 py-4 rounded-full font-semibold hover:bg-accent-rose/90 transition-all hover:scale-105 shadow-lg shadow-accent-rose/20"
              >
                Book Your Consultation
              </Link>
              <Link
                href="/#services"
                className="inline-block border-2 border-accent-rose text-accent-rose px-8 py-4 rounded-full font-semibold hover:bg-accent-rose hover:text-dark-bg transition-all hover:scale-105"
              >
                View Our Services
              </Link>
            </div>

            <div className="mt-8 text-light-secondary">
              <p className="mb-2">Serving Euless, Texas and surrounding areas</p>
              <p className="text-sm">Bilingual services available in English & Spanish</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
