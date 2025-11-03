'use client';

import { useState } from 'react';
import Link from 'next/link';
import { bannerSettings } from '@/data/promotions';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Don't render if banner is not active or dismissed
  if (!bannerSettings.isActive || !isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-accent-primary to-accent-secondary text-dark-bg fixed top-0 left-0 right-0 z-[100]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Main Content */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm sm:text-base">
                {bannerSettings.text}
                {bannerSettings.code && (
                  <span className="ml-2 font-mono text-xs sm:text-sm opacity-90">
                    Code: {bannerSettings.code}
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={bannerSettings.ctaUrl}
            {...(bannerSettings.ctaUrl.startsWith('http') && {
              target: '_blank',
              rel: 'noopener noreferrer'
            })}
            className="bg-dark-bg text-accent-primary px-4 py-2 rounded-full font-semibold text-sm transition-all hover:bg-dark-secondary hover:scale-105 flex-shrink-0 shadow-lg"
          >
            {bannerSettings.ctaText}
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 hover:opacity-75 transition-opacity ml-2"
            aria-label="Close banner"
          >
            <svg
              className="w-5 h-5"
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
      </div>
    </div>
  );
}
