import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import ProductGrid from '@/components/store/ProductGrid';

export const metadata: Metadata = {
  title: 'Store - Premium Skincare Products | Beauty Sanctuary',
  description: 'Shop professional-grade skincare products curated by Carmen Marin. Premium cleansers, serums, moisturizers, and specialty treatments.',
  openGraph: {
    title: 'Store - Premium Skincare Products | Beauty Sanctuary',
    description: 'Shop professional-grade skincare products curated by Carmen Marin.',
    type: 'website',
  },
};

export default function StorePage() {
  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary to-dark-bg opacity-50" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left-aligned content */}
          <div className="max-w-3xl">
            <p className="text-accent-primary text-sm sm:text-base font-medium tracking-widest uppercase mb-6">
              Professional Skincare
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-light-primary mb-6 leading-tight">
              Premium Products
            </h1>
            <p className="text-xl sm:text-2xl text-light-secondary leading-relaxed max-w-2xl">
              Professional-grade skincare products carefully curated by Carmen Marin.
              Transform your skin with our selection of advanced formulations.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-accent-primary/10 to-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif text-light-primary mb-6">
              Need Skincare Advice?
            </h2>
            <p className="text-lg text-light-secondary mb-8">
              Not sure which products are right for your skin? Schedule a consultation
              with Carmen to receive personalized product recommendations.
            </p>
            <a
              href="/#services"
              className="inline-block px-8 py-4 bg-accent-primary text-dark-bg rounded-lg hover:bg-accent-hover transition-all font-semibold text-lg"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
