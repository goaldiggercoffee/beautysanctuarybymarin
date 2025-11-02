'use client';

import { motion } from 'framer-motion';
import { getBookingUrl, trackBookingClick } from '@/config/booking';

interface BookingButtonProps {
  serviceSlug: string;
  serviceName: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const BookingButton = ({
  serviceSlug,
  serviceName,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
}: BookingButtonProps) => {
  const handleClick = () => {
    trackBookingClick(serviceSlug, serviceName);
    window.open(getBookingUrl(serviceSlug), '_blank', 'noopener,noreferrer');
  };

  const baseStyles = 'font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-rosegold-500 text-white hover:bg-rosegold-600 hover:shadow-lg',
    secondary: 'bg-sage-500 text-white hover:bg-sage-600 hover:shadow-lg',
    outline: 'border-2 border-rosegold-500 text-rosegold-600 hover:bg-rosegold-500 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
    >
      <span>Book Now</span>
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
    </motion.button>
  );
};

export default BookingButton;
