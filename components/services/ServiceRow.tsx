'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { ServiceCategory } from '@/data/services';

interface ServiceRowProps {
  category: ServiceCategory;
}

const ServiceRow = ({ category }: ServiceRowProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const layoutType = category.layoutType || 'horizontal-scroll';

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  // Grid Layout (for Facials and other categories)
  if (layoutType === 'grid') {
    return (
      <section id={category.slug} className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center mb-2">
              <span className="text-4xl mr-3">{category.icon}</span>
              <h2 className="text-3xl lg:text-4xl font-serif text-gray-900">
                {category.name}
              </h2>
            </div>
            <p className="text-gray-600 text-lg">{category.description}</p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {category.services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Horizontal Scroll Layout (for Body Contouring and special categories)
  return (
    <section id={category.slug} className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center mb-2">
            <span className="text-4xl mr-3">{category.icon}</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-gray-900">
              {category.name}
            </h2>
          </div>
          <p className="text-gray-600 text-lg">{category.description}</p>
        </motion.div>

        {/* Scrollable Services Container */}
        <div className="relative group/row">
          {/* Left Scroll Button */}
          {category.services.length > 1 && (
            <button
              onClick={() => scroll('left')}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover/row:opacity-100 transition-all duration-300 -translate-x-6 hover:scale-110"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Services Scroll */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {category.services.map((service, index) => (
              <div
                key={service.id}
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          {category.services.length > 1 && (
            <button
              onClick={() => scroll('right')}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover/row:opacity-100 transition-all duration-300 translate-x-6 hover:scale-110"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceRow;
