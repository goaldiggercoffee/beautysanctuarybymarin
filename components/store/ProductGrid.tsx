'use client';

import { useState } from 'react';
import { Product, getAllCategories } from '@/data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = getAllCategories();
  const categoryLabels: Record<string, string> = {
    'all': 'All Products',
    'cleanser': 'Cleansers',
    'serum': 'Serums',
    'moisturizer': 'Moisturizers',
    'mist': 'Mists',
    'toner': 'Toners',
    'cream': 'Creams',
    'special': 'Special Packs'
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-accent-primary text-dark-bg'
                : 'bg-dark-secondary text-light-secondary hover:bg-dark-hover hover:text-light-primary'
            }`}
          >
            All Products
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-accent-primary text-dark-bg'
                  : 'bg-dark-secondary text-light-secondary hover:bg-dark-hover hover:text-light-primary'
              }`}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Count */}
      <div className="mb-8 text-center">
        <p className="text-light-secondary">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={setSelectedProduct}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-light-secondary text-lg">
            No products found in this category.
          </p>
        </div>
      )}

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductGrid;
