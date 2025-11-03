'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { currentMonthlySpecial } from '@/data/monthlySpecial';

export default function MonthlySpecialSection() {
  // Don't render if special is not active
  if (!currentMonthlySpecial.isActive) {
    return null;
  }

  const themeStyles = {
    default: {
      gradient: 'from-rosegold-50 to-sage-50',
      badge: 'bg-rosegold-500',
      button: 'bg-gradient-to-r from-rosegold-500 to-sage-500 hover:from-rosegold-600 hover:to-sage-600',
      accent: 'text-rosegold-600',
    },
    holiday: {
      gradient: 'from-red-50 to-green-50',
      badge: 'bg-red-600',
      button: 'bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700',
      accent: 'text-red-600',
    },
    seasonal: {
      gradient: 'from-amber-50 to-orange-50',
      badge: 'bg-amber-500',
      button: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
      accent: 'text-amber-600',
    },
  };

  const theme = themeStyles[currentMonthlySpecial.theme];

  return (
    <section className={`py-16 lg:py-20 bg-gradient-to-b ${theme.gradient}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Badge */}
          <div className="text-center mb-8">
            <span className={`inline-block ${theme.badge} text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide`}>
              {currentMonthlySpecial.month} Special Offer
            </span>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl overflow-hidden luxury-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Image */}
              <div className="relative h-64 lg:h-auto min-h-[400px]">
                <Image
                  src={currentMonthlySpecial.image}
                  alt={currentMonthlySpecial.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Discount Badge Overlay */}
                <div className={`absolute top-6 right-6 ${theme.badge} text-white px-6 py-3 rounded-2xl shadow-lg`}>
                  <p className="text-3xl font-bold">{currentMonthlySpecial.discount}</p>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                  {currentMonthlySpecial.title}
                </h2>
                <p className={`text-xl ${theme.accent} font-semibold mb-6`}>
                  {currentMonthlySpecial.subtitle}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {currentMonthlySpecial.description}
                </p>

                {/* Services Included */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Services Included:
                  </h3>
                  <ul className="space-y-3">
                    {currentMonthlySpecial.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className={`w-6 h-6 ${theme.accent} flex-shrink-0 mr-3 mt-0.5`}
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
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Promo Code */}
                {currentMonthlySpecial.code && (
                  <div className="bg-beige-50 rounded-xl p-6 mb-8">
                    <p className="text-sm text-gray-600 mb-2">Use Promo Code:</p>
                    <p className="text-2xl font-mono font-bold text-gray-900">
                      {currentMonthlySpecial.code}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Valid until {currentMonthlySpecial.expirationDate}
                    </p>
                  </div>
                )}

                {/* CTA Button */}
                <Link
                  href={currentMonthlySpecial.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.button} text-white px-8 py-4 rounded-full font-semibold text-lg text-center transition-all hover:shadow-xl hover:scale-105 inline-block`}
                >
                  Book Your Appointment Now
                </Link>

                {/* Expiration Notice */}
                <p className="text-sm text-gray-500 text-center mt-4">
                  ⏰ Offer expires {currentMonthlySpecial.expirationDate}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
