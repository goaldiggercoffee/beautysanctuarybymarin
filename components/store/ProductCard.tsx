'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => onViewDetails(product)}
    >
      <div className="bg-dark-secondary rounded-xl overflow-hidden transition-all duration-300 hover:bg-dark-hover hover:scale-105 h-full flex flex-col">
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-dark-bg to-dark-secondary">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-6">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-accent-primary opacity-50"
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
                <p className="text-light-secondary text-sm">Image Coming Soon</p>
              </div>
            </div>
          )}
          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-accent-primary text-dark-bg px-3 py-1 rounded-full text-xs font-semibold">
                Featured
              </div>
            </div>
          )}
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-accent-primary text-dark-bg rounded-lg font-semibold"
            >
              View Details
            </motion.button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold text-light-primary mb-2 group-hover:text-accent-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-light-secondary mb-4">
            {product.size}
          </p>
          <p className="text-sm text-light-secondary mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>
          <div className="mt-auto">
            <p className="text-accent-primary font-semibold">
              {product.price}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
