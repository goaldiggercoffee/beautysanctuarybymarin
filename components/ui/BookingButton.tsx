'use client';

import { motion } from 'framer-motion';

interface BookingButtonProps {
  bookingUrl: string;
  serviceName: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const BookingButton = ({
  bookingUrl,
  serviceName,
  label,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
}: BookingButtonProps) => {
  // Free consultations use a tel: link, which must be a real anchor —
  // window.open() on a tel: URL leaves a blank tab behind on desktop.
  const isPhone = bookingUrl.startsWith('tel:');

  const track = () => {
    // Track booking click if analytics is set up
    if (typeof window !== 'undefined') {
      console.log(`Booking clicked: ${serviceName}`);
    }
  };

  const handleClick = () => {
    track();
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
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
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  const icon = isPhone ? (
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ) : (
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  const content = (
    <>
      <span>{label ?? (isPhone ? 'Call to Book' : 'Book Now')}</span>
      {icon}
    </>
  );

  if (isPhone) {
    return (
      <motion.a
        href={bookingUrl}
        onClick={track}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
};

export default BookingButton;
