'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Result } from '@/data/results';

interface LightboxProps {
  result: Result;
  allResults: Result[];
  onClose: () => void;
  onNavigate: (result: Result) => void;
}

const Lightbox = ({ result, allResults, onClose, onNavigate }: LightboxProps) => {
  const [imageError, setImageError] = useState(false);

  const currentIndex = allResults.findIndex(r => r.id === result.id);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < allResults.length - 1;

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrevious) onNavigate(allResults[currentIndex - 1]);
      if (e.key === 'ArrowRight' && hasNext) onNavigate(allResults[currentIndex + 1]);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose, onNavigate, allResults, currentIndex, hasPrevious, hasNext]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col p-4 lg:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-serif text-light-primary">
                {result.treatment}
              </h2>
              {result.sessions && (
                <p className="text-light-secondary mt-1">
                  {result.sessions} {result.sessions === 1 ? 'Session' : 'Sessions'}
                </p>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 bg-dark-secondary hover:bg-dark-hover rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <svg
                className="w-6 h-6 text-light-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Image Container */}
          <div className="flex-1 flex items-center justify-center relative">
            {/* Previous Button */}
            {hasPrevious && (
              <button
                onClick={() => onNavigate(allResults[currentIndex - 1])}
                className="absolute left-0 z-20 p-3 bg-dark-secondary hover:bg-dark-hover rounded-full transition-colors"
                aria-label="Previous result"
              >
                <svg
                  className="w-6 h-6 text-light-primary"
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

            {/* Image Display */}
            <div className="relative w-full max-w-5xl h-full max-h-[70vh]">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-dark-secondary">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    {!imageError ? (
                      <Image
                        src={result.image}
                        alt={`${result.treatment} - Before & After`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-light-secondary">Image Coming Soon</p>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-dark-bg/80 text-light-primary px-4 py-2 rounded-lg text-sm font-semibold">
                        Before & After
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Next Button */}
            {hasNext && (
              <button
                onClick={() => onNavigate(allResults[currentIndex + 1])}
                className="absolute right-0 z-20 p-3 bg-dark-secondary hover:bg-dark-hover rounded-full transition-colors"
                aria-label="Next result"
              >
                <svg
                  className="w-6 h-6 text-light-primary"
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

          {/* Description */}
          {result.description && (
            <div className="mt-4 text-center">
              <p className="text-light-secondary max-w-2xl mx-auto">
                {result.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Lightbox;
