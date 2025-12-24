'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/data/services';

interface NetflixCardProps {
  service: Service;
  featured?: boolean;
}

const NetflixCard = ({ service, featured = false }: NetflixCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/services/${service.slug}`}>
      <motion.div
        className={`relative overflow-hidden rounded-lg cursor-pointer group bg-dark-secondary ${
          featured
            ? 'h-[26rem] md:h-[32rem]' // Featured: 416px mobile, 512px desktop
            : 'h-72 md:h-96 lg:h-[28rem]' // Regular: 288px mobile, 384px tablet, 448px desktop
        }`}
        whileHover={{ scale: 1.05, zIndex: 10 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Background Image - Takes up full card */}
        <div className="absolute inset-0">
          {!imageError ? (
            <>
              {/* Image dominates the entire card */}
              <Image
                src={service.images.thumbnail}
                alt={service.name}
                fill
                className={service.imageFit === 'cover' ? 'object-cover' : 'object-contain object-center'}
                sizes={featured ? '500px' : '400px'}
                onError={() => setImageError(true)}
                priority={featured}
              />
            </>
          ) : (
            /* Fallback gradient background if image fails to load */
            <>
              <div className="absolute inset-0 bg-dark-secondary" />
              <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary via-dark-hover to-dark-secondary" />
            </>
          )}

          {/* Subtle hover brightening effect */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-white/5"
            />
          )}
        </div>

        {/* Text Content - Only at bottom, minimal overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
          {/* Service Name - Always visible, no background box */}
          <h3 className={`text-light-primary font-bold mb-2 drop-shadow-lg ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}>
            {service.name}
          </h3>

          {/* Additional Info - Show on hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0,
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden space-y-2"
          >
            {/* Description */}
            <p className="text-light-secondary text-sm md:text-base line-clamp-2 drop-shadow-md">
              {service.description}
            </p>

            {/* Duration, Price, and Package Badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs md:text-sm text-light-primary bg-dark-bg/80 backdrop-blur-sm px-3 py-1 rounded-full border border-accent-rose/20">
                {service.duration}
              </span>
              <span className="text-xs md:text-sm text-light-primary font-bold bg-accent-rose/90 px-3 py-1 rounded-full shadow-lg">
                {service.price}
              </span>
              {service.featured && (
                <span className="text-sm md:text-base text-white font-extrabold bg-gradient-to-r from-accent-rose to-pink-600 px-4 py-1.5 rounded-full shadow-xl border-2 border-white/30">
                  PACKAGE
                </span>
              )}
            </div>

            {/* View Details Button */}
            <button
              className="w-full bg-accent-rose text-dark-bg font-semibold py-3 rounded-lg hover:bg-accent-rose/90 transition-colors shadow-xl mt-2"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/services/${service.slug}`;
              }}
            >
              View Details
            </button>
          </motion.div>

          {/* Minimal info when not hovering - duration and price badges */}
          {!isHovered && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-light-primary/90 bg-dark-bg/70 backdrop-blur-sm px-2.5 py-1 rounded-md font-medium">
                {service.duration}
              </span>
              <span className="text-xs text-light-primary font-bold bg-accent-rose/90 px-2.5 py-1 rounded-md shadow-lg">
                {service.price}
              </span>
              {service.featured && (
                <span className="text-sm text-white font-extrabold bg-gradient-to-r from-accent-rose to-pink-600 px-3 py-1 rounded-md shadow-xl border-2 border-white/40">
                  PACKAGE
                </span>
              )}
            </div>
          )}
        </div>

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full pointer-events-none"
          animate={{
            translateX: isHovered ? '200%' : '-100%',
          }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </Link>
  );
};

export default NetflixCard;
