'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ServiceCategory } from '@/data/services';
import NetflixCard from './NetflixCard';

interface NetflixRowProps {
  category: ServiceCategory;
}

const NetflixRow = ({ category }: NetflixRowProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    const targetScroll =
      direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 bg-dark-bg">
      {/* Section Header */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light-primary mb-2">
          {category.name}
        </h2>
        {category.description && (
          <p className="text-light-secondary text-sm md:text-base max-w-3xl">
            {category.description}
          </p>
        )}
      </div>

      {/* Scrolling Container with Arrows */}
      <div
        className="relative group/row"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Left Arrow */}
        {showLeftArrow && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-0 bottom-0 z-20 items-center justify-center w-16 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent hover:from-dark-bg transition-all"
            aria-label="Scroll left"
          >
            <svg
              className="w-10 h-10 text-light-primary drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-0 bottom-0 z-20 items-center justify-center w-16 bg-gradient-to-l from-dark-bg via-dark-bg/80 to-transparent hover:from-dark-bg transition-all"
            aria-label="Scroll right"
          >
            <svg
              className="w-10 h-10 text-light-primary drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        )}

        {/* Horizontal Scrolling Container - Larger cards with better spacing */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-5 lg:gap-6 pb-4 snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {category.services.map((service) => (
            <div
              key={service.id}
              className="flex-none w-72 md:w-96 lg:w-[28rem] xl:w-[32rem] snap-start"
            >
              <NetflixCard
                service={service}
                featured={service.featured}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default NetflixRow;
