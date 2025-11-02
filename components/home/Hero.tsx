'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        {/* LIGHT OVERLAY (30-40% opacity) to maintain visibility of background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/40 z-10" />
        <Image
          src="/images/hero-bg.jpg"
          alt="Beauty Sanctuary Spa"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content - LEFT ALIGNED */}
      <div className="relative z-20 w-full px-8 sm:px-12 lg:px-20 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-accent-primary text-sm sm:text-base font-medium tracking-widest uppercase mb-6"
          >
            Welcome to
          </motion.p>

          {/* Main Heading - LEFT ALIGNED */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-light-primary mb-4 leading-tight"
          >
            Beauty Sanctuary
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-accent-primary mb-8"
          >
            by Carmen Marin
          </motion.p>

          {/* Description - LEFT ALIGNED */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-light-secondary mb-10 max-w-2xl leading-relaxed"
          >
            Experience luxury skincare, advanced body contouring, therapeutic
            massage, and personalized face coaching. Serving local clients and
            offering worldwide virtual consultations.
          </motion.p>

          {/* CTA Buttons - LEFT ALIGNED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link
              href="/#services"
              className="px-8 py-4 bg-accent-primary text-gray-900 rounded-lg hover:bg-accent-hover transition-all hover:shadow-2xl hover:shadow-accent-primary/20 font-semibold text-lg w-fit"
            >
              Explore Services
            </Link>
            <Link
              href="/#services"
              className="px-8 py-4 bg-transparent text-light-primary border-2 border-light-primary rounded-lg hover:bg-light-primary hover:text-dark-bg transition-all font-semibold text-lg w-fit"
            >
              Book Appointment
            </Link>
          </motion.div>

          {/* Features - LEFT ALIGNED ROW */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row gap-8 sm:gap-12"
          >
            <div>
              <h3 className="text-light-primary font-semibold mb-2 text-lg">
                Luxury Treatments
              </h3>
              <p className="text-light-secondary text-sm">
                Premium skincare and body contouring
              </p>
            </div>
            <div>
              <h3 className="text-light-primary font-semibold mb-2 text-lg">
                Worldwide Access
              </h3>
              <p className="text-light-secondary text-sm">
                Virtual face coaching from anywhere
              </p>
            </div>
            <div>
              <h3 className="text-light-primary font-semibold mb-2 text-lg">
                Expert Care
              </h3>
              <p className="text-light-secondary text-sm">
                Professional esthetician services
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-light-secondary"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
