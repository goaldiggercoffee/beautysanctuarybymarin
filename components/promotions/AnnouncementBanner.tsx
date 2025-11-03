'use client';

import { useState } from 'react';
import Link from 'next/link';
import { currentMonthlySpecial } from '@/data/monthlySpecial';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Don't render if special is not active or banner is dismissed
  if (!currentMonthlySpecial.isActive || !isVisible) {
    return null;
  }

  const themeColors = {
    default: {
      bg: 'bg-gradient-to-r from-rosegold-500 to-sage-500',
      text: 'text-white',
      button: 'bg-white text-rosegold-600 hover:bg-cream-50',
    },
    holiday: {
      bg: 'bg-gradient-to-r from-red-600 to-green-600',
      text: 'text-white',
      button: 'bg-white text-red-600 hover:bg-red-50',
    },
    seasonal: {
      bg: 'bg-gradient-to-r from-amber-500 to-orange-500',
      text: 'text-white',
      button: 'bg-white text-amber-600 hover:bg-amber-50',
    },
  };

  const theme = themeColors[currentMonthlySpecial.theme];

  return (
    <div className={`${theme.bg} ${theme.text} py-3 px-4 relative z-50`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Main Content */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="text-2xl flex-shrink-0">🎉</span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm sm:text-base truncate">
                <span className="font-bold">{currentMonthlySpecial.discount}</span>
                {' - '}
                {currentMonthlySpecial.title}
              </p>
              {currentMonthlySpecial.code && (
                <p className="text-xs sm:text-sm opacity-90 hidden sm:block">
                  Use code: <span className="font-mono font-bold">{currentMonthlySpecial.code}</span>
                  {' | '}
                  Valid until {currentMonthlySpecial.expirationDate}
                </p>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={currentMonthlySpecial.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme.button} px-4 py-2 rounded-full font-semibold text-sm transition-colors flex-shrink-0 hover:scale-105 transition-transform`}
          >
            Book Now
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 hover:opacity-75 transition-opacity"
            aria-label="Close announcement"
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
