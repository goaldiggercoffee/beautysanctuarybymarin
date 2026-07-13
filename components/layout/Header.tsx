'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PHONE_TEL, PHONE_DISPLAY } from '@/data/contact';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Results', href: '/results' },
    { name: 'Store', href: '/store' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-[52px] left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/95 backdrop-blur-md border-b border-dark-border shadow-2xl'
          : 'bg-dark-bg/80 backdrop-blur-sm'
      }`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - LEFT */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Not an <h1>: this renders on every page, and each page needs its
                  own single h1 describing that page, not the brand name. */}
              <span className="block text-xl lg:text-2xl font-serif text-accent-primary group-hover:text-accent-hover transition-colors">
                Beauty Sanctuary
              </span>
              <p className="text-xs lg:text-sm text-light-secondary -mt-1">
                by Carmen Marin
              </p>
            </motion.div>
          </Link>

          {/* Desktop Navigation - TO THE RIGHT OF LOGO */}
          <div className="hidden lg:flex items-center ml-12">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-light-secondary hover:text-light-primary transition-colors relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer to push Book Now to the right */}
          <div className="flex-1 hidden lg:block" />

          {/* Call + Browse Services - FAR RIGHT */}
          <div className="hidden lg:flex items-center flex-shrink-0 gap-5">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 text-sm font-medium text-light-secondary hover:text-accent-primary transition-colors whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/#services"
              className="px-6 py-2.5 bg-accent-primary text-gray-900 rounded-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent-primary/20 font-semibold"
            >
              Browse Services
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-dark-hover transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-light-primary transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-light-primary transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-light-primary transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-dark-border"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-light-secondary hover:bg-dark-hover hover:text-light-primary rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mx-4 mt-4 px-6 py-3 bg-accent-primary text-gray-900 text-center rounded-lg hover:bg-accent-hover transition-colors font-semibold"
                >
                  Browse Services
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
