'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [imageError, setImageError] = useState(false);

  // Prevent body scroll when modal is open
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
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-dark-secondary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 float-right z-10 p-2 bg-dark-bg hover:bg-dark-hover rounded-full transition-colors"
            aria-label="Close modal"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left: Product Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-dark-bg to-dark-hover">
              {!imageError ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg
                      className="w-24 h-24 mx-auto mb-4 text-accent-primary opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-light-secondary">Image Coming Soon</p>
                  </div>
                </div>
              )}
              {product.featured && (
                <div className="absolute top-4 right-4">
                  <div className="bg-accent-primary text-dark-bg px-3 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
              )}
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-dark-hover text-accent-primary text-sm rounded-full mb-4">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif text-light-primary mb-2">
                  {product.name}
                </h2>
                <p className="text-light-secondary mb-4">{product.size}</p>
                <p className="text-2xl text-accent-primary font-semibold mb-6">
                  {product.price}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-light-primary mb-3">
                  Description
                </h3>
                <p className="text-light-secondary leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-light-primary mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-accent-primary mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-light-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <Link
                  href="/#contact"
                  onClick={onClose}
                  className="block w-full px-8 py-4 bg-accent-primary text-dark-bg text-center rounded-lg hover:bg-accent-hover transition-all font-semibold text-lg"
                >
                  Contact to Purchase
                </Link>
                <p className="text-center text-light-secondary text-sm mt-4">
                  Get in touch to learn more about this product
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;
