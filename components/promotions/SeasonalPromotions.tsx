'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getActivePromotions } from '@/data/promotions';

export default function SeasonalPromotions() {
  const promotions = getActivePromotions();

  if (promotions.length === 0) {
    return null;
  }

  return (
    <section id="seasonal-promotions" className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 bg-dark-bg">
      {/* Section Header */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light-primary mb-2">
          Seasonal Promotions
        </h2>
        <p className="text-light-secondary text-sm md:text-base max-w-3xl">
          Exclusive limited-time offers crafted just for you
        </p>
      </div>

      {/* Promotions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {promotions.map((promo, index) => (
          <motion.div
            key={promo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-dark-secondary rounded-lg overflow-hidden hover:bg-dark-hover transition-colors group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
              {/* Image Side - Takes 2 columns on desktop */}
              <div className="relative h-80 lg:h-auto lg:col-span-2">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Badge Overlay */}
                {promo.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block bg-accent-primary text-dark-bg px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                      {promo.badge}
                    </span>
                  </div>
                )}

                {/* Gradient Overlay for mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary/80 to-transparent lg:hidden" />
              </div>

              {/* Content Side - Takes 3 columns on desktop */}
              <div className="p-6 md:p-8 lg:col-span-3 flex flex-col justify-between">
                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-light-primary mb-3">
                    {promo.title}
                  </h3>
                  <p className="text-light-secondary mb-6 leading-relaxed">
                    {promo.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3 mb-6">
                    {promo.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-accent-primary flex-shrink-0 mr-3 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-light-primary text-sm md:text-base">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Section - Code & CTA */}
                <div>
                  {/* Promo Code */}
                  {promo.promoCode && (
                    <div className="bg-dark-bg rounded-lg p-4 mb-4">
                      <p className="text-light-secondary text-xs mb-1 uppercase tracking-wide">
                        Promo Code
                      </p>
                      <p className="font-mono text-accent-primary text-lg font-bold">
                        {promo.promoCode}
                      </p>
                      {promo.expiresDate && (
                        <p className="text-light-muted text-xs mt-2">
                          Expires {promo.expiresDate}
                        </p>
                      )}
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href={promo.ctaUrl}
                    {...(promo.ctaUrl.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                    className="block w-full bg-accent-primary hover:bg-accent-hover text-dark-bg font-semibold py-3 px-6 rounded-lg text-center transition-all transform hover:scale-105"
                  >
                    {promo.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
