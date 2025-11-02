/**
 * Store Products Data
 *
 * All skincare products available for purchase.
 * Images should be placed in: public/images/store/
 */

export interface Product {
  id: string;
  name: string;
  size: string;
  category: 'cleanser' | 'serum' | 'moisturizer' | 'mist' | 'toner' | 'cream' | 'special';
  description: string;
  benefits: string[];
  price: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'phyto-oxygen',
    name: 'Phyto Oxygen',
    size: 'Professional Formula',
    category: 'cream',
    description: 'A botanical-rich oxygenating treatment that revitalizes tired skin and promotes a healthy, luminous complexion.',
    benefits: [
      'Botanical oxygenating complex',
      'Revitalizes tired, dull skin',
      'Promotes healthy radiance',
      'Improves skin vitality',
      'Natural, plant-based ingredients'
    ],
    price: '$125',
    image: '/images/store/03-phyto-nature-oxygen-cream.jpg',
    slug: 'phyto-oxygen',
    featured: true
  },
  {
    id: 'antioxidant-hydramist',
    name: 'Antioxidant HydraMist',
    size: '5.1 oz',
    category: 'mist',
    description: 'A refreshing antioxidant-rich facial mist that hydrates and protects skin from environmental damage while providing a luminous, dewy finish.',
    benefits: [
      'Provides instant hydration',
      'Rich in antioxidants',
      'Protects against environmental stressors',
      'Creates a luminous, dewy glow',
      'Perfect for setting makeup or refreshing throughout the day'
    ],
    price: '$45',
    image: '/images/store/AntioxidantHydramist5.1oz.jpg',
    slug: 'antioxidant-hydramist',
    featured: true
  },
  {
    id: 'biolumin-c-eye-serum',
    name: 'BioLumin-C Eye Serum',
    size: '0.5 oz',
    category: 'serum',
    description: 'An advanced vitamin C eye serum that brightens and firms the delicate eye area while reducing the appearance of fine lines and dark circles.',
    benefits: [
      'Brightens dark circles',
      'Reduces fine lines and wrinkles',
      'Firms delicate eye area',
      'Contains powerful vitamin C',
      'Lightweight, fast-absorbing formula'
    ],
    price: '$70',
    image: '/images/store/BioLumin-CEyeSerum.5oz.jpg',
    slug: 'biolumin-c-eye-serum',
    featured: true
  },
  {
    id: 'circular-hydration-serum',
    name: 'Circular Hydration Serum',
    size: 'Professional Formula',
    category: 'serum',
    description: 'A revolutionary circular hydration serum that works around the clock to maintain optimal skin moisture levels and promote a healthy skin barrier.',
    benefits: [
      '24-hour hydration',
      'Strengthens skin barrier',
      'Improves skin texture',
      'Reduces appearance of fine lines',
      'Suitable for all skin types'
    ],
    price: '$65',
    image: '/images/store/circular-hydration-serum.jpg',
    slug: 'circular-hydration-serum',
    featured: true
  },
  {
    id: 'daily-glycolic-cleanser',
    name: 'Daily Glycolic Cleanser',
    size: '10 oz',
    category: 'cleanser',
    description: 'A gentle yet effective daily cleanser with glycolic acid that exfoliates, brightens, and prepares skin for optimal product absorption.',
    benefits: [
      'Gently exfoliates dead skin cells',
      'Brightens complexion',
      'Unclogs pores',
      'Improves skin texture',
      'Prepares skin for treatment products'
    ],
    price: '$55',
    image: '/images/store/daily-glycolic-cleanser.jpg',
    slug: 'daily-glycolic-cleanser'
  },
  {
    id: 'hyaluronic-ceramide-mist',
    name: 'Hyaluronic Ceramide Mist',
    size: '5.1 oz',
    category: 'mist',
    description: 'A powerful hydrating mist combining hyaluronic acid and ceramides to lock in moisture and strengthen the skin barrier for long-lasting hydration.',
    benefits: [
      'Deep hydration with hyaluronic acid',
      'Strengthens skin barrier with ceramides',
      'Locks in moisture',
      'Plumps and smooths skin',
      'Ideal for layering throughout the day'
    ],
    price: '$45',
    image: '/images/store/hyaluronic-ceramide-mist.jpg',
    slug: 'hyaluronic-ceramide-mist'
  },
  {
    id: 'intensive-moisture-balance',
    name: 'Intensive Moisture Balance',
    size: '1.7 oz',
    category: 'moisturizer',
    description: 'A rich, intensive moisturizer that restores optimal hydration levels while smoothing texture and improving skin resilience.',
    benefits: [
      'Deep, long-lasting hydration',
      'Restores moisture balance',
      'Smooths skin texture',
      'Strengthens skin resilience',
      'Perfect for dry or dehydrated skin'
    ],
    price: '$45',
    image: '/images/store/intensive-moisture_1.7oz.jpg',
    slug: 'intensive-moisture-balance'
  },
  {
    id: 'multi-active-toner',
    name: 'Multi-Active Toner',
    size: '8.4 oz',
    category: 'toner',
    description: 'A multi-functional toner that balances pH, refines pores, and preps skin for optimal absorption of serums and moisturizers.',
    benefits: [
      'Balances skin pH',
      'Refines pores',
      'Removes residual impurities',
      'Prepares skin for better product absorption',
      'Refreshes and revitalizes'
    ],
    price: '$40',
    image: '/images/store/multi-active-toner.jpg',
    slug: 'multi-active-toner'
  },
  {
    id: 'skin-resurfacing-cleanser',
    name: 'Skin Resurfacing Cleanser',
    size: '5.1 oz',
    category: 'cleanser',
    description: 'A professional-grade resurfacing cleanser that gently removes impurities while promoting cell turnover for smoother, brighter skin.',
    benefits: [
      'Promotes cell turnover',
      'Smooths skin texture',
      'Brightens complexion',
      'Deep cleans without stripping',
      'Professional resurfacing results'
    ],
    price: '$25',
    image: '/images/store/skin-resurfacing-cleanser.jpg',
    slug: 'skin-resurfacing-cleanser'
  },
  {
    id: 'skin-smoothing-cream',
    name: 'Skin Smoothing Cream',
    size: '1.7 oz',
    category: 'cream',
    description: 'A luxurious smoothing cream that refines skin texture, minimizes the appearance of fine lines, and leaves skin silky soft.',
    benefits: [
      'Refines skin texture',
      'Minimizes fine lines',
      'Creates silky-soft finish',
      'Long-lasting smoothness',
      'Ideal for mature or textured skin'
    ],
    price: '$45',
    image: '/images/store/skin-smoothing-cream_1.7oz.jpg',
    slug: 'skin-smoothing-cream'
  },
  {
    id: 'circular-serum-moisturizer-combo',
    name: 'Circular Serum and Intensive Moisturizer',
    size: 'Combo Pack',
    category: 'special',
    description: 'The perfect duo for optimal hydration. Combine the power of Circular Serum with our Intensive Moisture Balance for maximum skin nourishment.',
    benefits: [
      'Complete hydration system',
      'Enhanced effectiveness when used together',
      'Value combo package',
      'Morning and evening routine covered',
      'Professional-grade skincare duo'
    ],
    price: '$102',
    image: '/images/store/circular-serum-moisturizer-combo.jpg',
    slug: 'circular-serum-moisturizer-combo'
  },
  {
    id: 'half-pack-6-special',
    name: 'Half Pack 6 SPECIAL',
    size: 'Value Pack',
    category: 'special',
    description: 'An exclusive value pack featuring six essential skincare products curated for optimal results. Perfect for starting your professional skincare journey.',
    benefits: [
      'Curated selection of essentials',
      'Special value pricing',
      'Complete skincare regimen',
      'Professional-grade products',
      'Perfect for gifting or personal use'
    ],
    price: '$575',
    image: '/images/store/half-pack-6-special.jpg',
    slug: 'half-pack-6-special'
  },
  {
    id: 'oxigenating-cream',
    name: 'Oxigenating Cream',
    size: 'Professional Formula',
    category: 'cream',
    description: 'An innovative oxygenating cream that energizes skin cells, promotes radiance, and creates a fresh, healthy glow.',
    benefits: [
      'Energizes skin cells',
      'Promotes healthy circulation',
      'Creates radiant glow',
      'Revitalizes dull skin',
      'Lightweight yet nourishing'
    ],
    price: 'Contact for pricing',
    image: '/images/store/oxigenating-cream.jpg',
    slug: 'oxigenating-cream'
  }
];

// Helper functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getAllCategories = (): Product['category'][] => {
  return Array.from(new Set(products.map(product => product.category)));
};
