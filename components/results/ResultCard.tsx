'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Result } from '@/data/results';

interface ResultCardProps {
  result: Result;
  onViewFullSize: (result: Result) => void;
}

const ResultCard = ({ result, onViewFullSize }: ResultCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => onViewFullSize(result)}
    >
      <div className="bg-dark-secondary rounded-xl overflow-hidden transition-all duration-300 hover:bg-dark-hover hover:scale-105">
        {/* Combined Before/After Image */}
        <div className="relative h-64 bg-gradient-to-br from-dark-bg to-dark-secondary">
          {!imageError ? (
            <Image
              src={result.image}
              alt={`${result.treatment} - Before & After`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-light-secondary text-sm">Image Coming Soon</p>
            </div>
          )}
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-dark-bg/80 text-light-primary px-3 py-1.5 rounded text-xs font-semibold">
              Before & After
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <p className="text-light-primary font-semibold mb-2">View Full Size</p>
              <svg
                className="w-8 h-8 mx-auto text-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Result Info */}
        <div className="p-4">
          <h3 className="text-base font-semibold text-light-primary mb-1 group-hover:text-accent-primary transition-colors">
            {result.treatment}
          </h3>
          {result.sessions && (
            <p className="text-sm text-light-secondary mb-2">
              {result.sessions} {result.sessions === 1 ? 'Session' : 'Sessions'}
            </p>
          )}
          {result.description && (
            <p className="text-xs text-light-secondary line-clamp-2">
              {result.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;
