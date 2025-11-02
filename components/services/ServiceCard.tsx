'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/services/${service.slug}`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream-100 to-beige-100 hover-lift luxury-shadow">
          {/* Image Container */}
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <Image
              src={service.images.thumbnail}
              alt={service.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-xl font-serif text-white mb-2 group-hover:text-rosegold-300 transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-gray-200 line-clamp-2">
                {service.description}
              </p>
            </div>
          </div>

          {/* Info Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-sm font-medium text-gray-800">
                <svg
                  className="w-4 h-4 mr-2 text-rosegold-600"
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

            {/* View Details Link */}
            <div className="flex items-center text-gray-900 group-hover:text-rosegold-700 transition-colors font-semibold">
              <span className="text-sm">View Details</span>
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
  );
};

export default ServiceCard;
