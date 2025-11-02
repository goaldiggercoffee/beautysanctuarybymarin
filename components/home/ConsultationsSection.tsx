'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BookingButton from '@/components/ui/BookingButton';
import { ServiceCategory } from '@/data/services';

interface ConsultationsSectionProps {
  category: ServiceCategory;
}

const ConsultationsSection = ({ category }: ConsultationsSectionProps) => {
  const services = category.services;

  return (
    <section id={category.slug} className="py-16 lg:py-24 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Book Your Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            {category.description}
          </p>
          <p className="text-lg text-rosegold-600 font-medium">
            Choose the option that works best for you
          </p>
        </motion.div>

        {/* Two Options Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden luxury-shadow hover-lift h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.images.thumbnail}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-rosegold-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {index === 0 ? 'In-Person' : 'Virtual'}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl lg:text-3xl font-serif text-gray-900 mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <svg
                            className="w-5 h-5 text-sage-600 mr-2 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Info Bar */}
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-beige-200">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-gray-700 text-sm font-medium">
                        <svg
                          className="w-5 h-5 mr-2 text-rosegold-600"
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
                      <div className="text-base font-bold text-rosegold-700">
                        {service.price}
                      </div>
                    </div>
                    {index === 1 && (
                      <div className="flex items-center text-sage-700 text-sm font-semibold">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Worldwide
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <BookingButton
                    serviceSlug={service.slug}
                    serviceName={service.name}
                    size="lg"
                    fullWidth
                    variant={index === 0 ? 'primary' : 'secondary'}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            Not sure which option is right for you?{' '}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/#contact" className="text-rosegold-600 hover:text-rosegold-700 font-medium underline">
              Contact us
            </a>{' '}
            and we&apos;ll help you choose.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationsSection;
