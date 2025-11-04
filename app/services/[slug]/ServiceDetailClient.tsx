'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/data/services';
import SimpleImageGallery from '@/components/services/SimpleImageGallery';
import BookingButton from '@/components/ui/BookingButton';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

interface ServiceDetailClientProps {
  service: Service;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  return (
    <>
      {/* Service Schema Markup */}
      <SchemaMarkup type="Service" data={service} />

      <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
        <Image
          src={service.images.hero}
          alt={service.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 h-full flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Back to Services
              </Link>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-4">
                {service.name}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-serif text-gray-900 mb-6">
                  Overview
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.longDescription}
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-serif text-gray-900 mb-6">
                  Benefits
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <svg
                        className="w-6 h-6 text-rosegold-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Before/After Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-serif text-gray-900 mb-6">
                  Real Results
                </h2>
                {service.images.beforeAfter.length > 0 ? (
                  <>
                    <SimpleImageGallery images={service.images.beforeAfter} treatment={service.name} />
                    <div className="mt-6 text-center">
                      <Link
                        href="/results"
                        className="inline-flex items-center text-rosegold-600 hover:text-rosegold-700 font-medium transition-colors"
                      >
                        View All Transformation Results
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="text-center bg-beige-50 rounded-xl p-10">
                    <p className="text-xl font-semibold text-gray-900 mb-6">
                      See stunning transformations from our clients
                    </p>
                    <Link
                      href="/results"
                      className="inline-flex items-center justify-center px-8 py-4 bg-rosegold-500 text-white rounded-full hover:bg-rosegold-600 transition-colors font-semibold text-lg shadow-lg"
                    >
                      View All Transformation Results
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24"
              >
                <div className="bg-white rounded-2xl luxury-shadow p-8">
                  <h3 className="text-2xl font-serif text-gray-900 mb-6">
                    Book This Service
                  </h3>

                  {/* Service Info */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between pb-4 border-b border-beige-200">
                      <div className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 mr-3 text-rosegold-500"
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
                        Duration
                      </div>
                      <span className="font-semibold text-gray-900">
                        {service.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-4 border-b border-beige-200">
                      <div className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 mr-3 text-rosegold-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Price
                      </div>
                      <span className="font-semibold text-gray-900">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Booking Button */}
                  <BookingButton
                    bookingUrl={service.bookingUrl}
                    serviceName={service.name}
                    size="lg"
                    fullWidth
                    className="mb-6"
                  />

                  {/* Additional Info */}
                  <div className="bg-beige-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What to Expect
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 mr-2 text-sage-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Professional consultation
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 mr-2 text-sage-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Personalized treatment plan
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 mr-2 text-sage-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Relaxing spa environment
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 mr-2 text-sage-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Follow-up care guidance
                      </li>
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      Questions about this service?
                    </p>
                    <Link
                      href="/#contact"
                      className="text-rosegold-600 hover:text-rosegold-700 font-medium text-sm"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rosegold-500 to-sage-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">
              Ready to Transform Your Beauty?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book your appointment today and experience the luxury of Beauty
              Sanctuary.
            </p>
            <BookingButton
              bookingUrl={service.bookingUrl}
              serviceName={service.name}
              variant="outline"
              size="lg"
              className="bg-white text-rosegold-600 hover:bg-cream-50 border-white"
            />
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
