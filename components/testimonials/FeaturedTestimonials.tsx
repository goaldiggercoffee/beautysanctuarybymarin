import Link from 'next/link';
import { getFeaturedTestimonials, testimonials } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';

const FeaturedTestimonials = () => {
  const featured = getFeaturedTestimonials();

  return (
    <section className="py-16 md:py-24 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-light-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-light-secondary text-lg max-w-3xl">
            Real results from real clients. See why over 70 clients have trusted
            Beauty Sanctuary for their beauty and wellness journey.
          </p>
        </div>

        {/* Featured Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              variant="featured"
            />
          ))}
        </div>

        {/* CTA to Full Testimonials Page */}
        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-block bg-accent-rose text-dark-bg px-8 py-4 rounded-full font-semibold hover:bg-accent-rose/90 transition-all hover:scale-105 shadow-lg shadow-accent-rose/20"
          >
            Read All {testimonials.length}+ Client Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;
