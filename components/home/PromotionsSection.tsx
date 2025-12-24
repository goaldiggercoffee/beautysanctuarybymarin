'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceCategory } from '@/data/services';

interface PromotionsSectionProps {
  category: ServiceCategory;
}

const PromotionsSection = ({ category }: PromotionsSectionProps) => {
  const services = category.services;

  return (
    <section id={category.slug} className="py-16 lg:py-20 bg-gradient-to-r from-rosegold-50 via-sage-50 to-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-rosegold-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            {category.icon} SPECIAL OFFERS
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            {category.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {category.description}
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/services/${service.slug}`}>
                <div className="relative bg-white rounded-2xl overflow-hidden luxury-shadow hover-lift h-full flex flex-col">
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ PACKAGE
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <Image
                      src={service.images.thumbnail}
                      alt={service.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-rosegold-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                      {service.description}
                    </p>

                    {/* Duration Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2 text-rosegold-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {service.duration}
                      </div>
                      <div className="text-sm font-semibold text-rosegold-600">
                        {service.price}
                      </div>
                    </div>

                    {/* Benefits Preview */}
                    <div className="mb-4 pt-4 border-t border-beige-200">
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-xs text-gray-700">
                            <svg
                              className="w-4 h-4 text-sage-600 mr-1 flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Details Link */}
                    <div className="flex items-center text-rosegold-600 group-hover:text-rosegold-700 transition-colors font-medium text-sm">
                      <span>View Package Details</span>
                      <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
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
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 text-lg mb-4">
            Save more with our exclusive packages. Book multiple sessions and see amazing results!
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-white text-rosegold-600 rounded-full hover:bg-rosegold-50 transition-all font-medium shadow-lg hover:shadow-xl"
          >
            Questions? Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PromotionsSection;
