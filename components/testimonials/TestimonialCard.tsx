import { Testimonial } from '@/data/testimonials';
import StarRating from './StarRating';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured';
}

const TestimonialCard = ({ testimonial, variant = 'default' }: TestimonialCardProps) => {
  // Get initials for avatar
  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return parts[0][0] + parts[1][0];
    }
    return name[0];
  };

  const initials = getInitials(testimonial.name);

  return (
    <div
      className={`
        bg-dark-secondary rounded-lg p-6 md:p-8 border border-accent-rose/10
        transition-all duration-300 hover:border-accent-rose/30 hover:scale-[1.02]
        flex flex-col h-full
        ${variant === 'featured' ? 'shadow-lg shadow-accent-rose/5' : ''}
      `}
    >
      {/* Star Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} size="md" />
      </div>

      {/* Review Text */}
      <blockquote className="text-light-secondary leading-relaxed mb-6 flex-grow">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Client Info */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-accent-rose/10">
        {/* Avatar with initials */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-rose/20 flex items-center justify-center">
          <span className="text-accent-rose font-semibold text-sm">
            {initials}
          </span>
        </div>

        {/* Name, Service, Date */}
        <div className="flex-grow">
          <p className="text-light-primary font-semibold">
            {testimonial.name}
          </p>
          <p className="text-light-secondary text-sm">
            {testimonial.service}
          </p>
          <p className="text-light-secondary/60 text-xs mt-1">
            {testimonial.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
