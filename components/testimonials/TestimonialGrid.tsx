'use client';

import { useState } from 'react';
import { testimonials, testimonialCategories, Testimonial } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';

const TestimonialGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayCount, setDisplayCount] = useState(12);

  // Filter testimonials by category
  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  // Get testimonials to display (with pagination)
  const displayedTestimonials = filteredTestimonials.slice(0, displayCount);
  const hasMore = displayCount < filteredTestimonials.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 12);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setDisplayCount(12); // Reset display count when changing category
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {testimonialCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleCategoryChange(category.slug)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300
                ${
                  activeCategory === category.slug
                    ? 'bg-accent-rose text-dark-bg shadow-lg shadow-accent-rose/20'
                    : 'bg-dark-secondary text-light-secondary hover:bg-dark-hover hover:text-light-primary border border-accent-rose/20'
                }
              `}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {displayedTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="px-8 py-4 bg-accent-rose text-dark-bg rounded-full font-semibold hover:bg-accent-rose/90 transition-all hover:scale-105 shadow-lg shadow-accent-rose/20"
          >
            Load More Reviews
          </button>
        </div>
      )}

      {/* No Results Message */}
      {filteredTestimonials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-light-secondary text-lg">
            No reviews found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default TestimonialGrid;
