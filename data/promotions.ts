// Seasonal Promotions Configuration
// Update this file to change active promotions

// Banner Settings - Show promotional banner at top of site
export interface BannerSettings {
  isActive: boolean;
  text: string; // Main message
  ctaText: string; // Button text
  ctaUrl: string; // Where button goes
  code?: string; // Optional promo code to display
}

export const bannerSettings: BannerSettings = {
  isActive: true, // Set to false to hide banner
  text: '🎁 Holiday Specials: Up to $50 OFF Gift Cards & More',
  ctaText: 'View Offers',
  ctaUrl: '/#seasonal-promotions',
  code: 'XMAS30 / XMAS50',
};

export interface Promotion {
  id: string;
  isActive: boolean;
  title: string;
  description: string;
  details: string[]; // Bullet points
  image: string;
  ctaText: string;
  ctaUrl: string;
  promoCode?: string;
  expiresDate?: string;
  badge?: string; // Optional badge text like "NEW CLIENT" or "LIMITED TIME"
}

export const activePromotions: Promotion[] = [
  {
    id: 'new-client-special',
    isActive: true,
    title: 'New Client Special',
    description: 'Welcome to Beauty Sanctuary! Enjoy exclusive savings on your first visit.',
    details: [
      '$30 OFF any service under $200',
      '$50 OFF services $200+',
      'Cannot be combined with other promotions or packages',
      'No code needed - discount applied at checkout',
    ],
    image: '/images/promotions/new-client.jpg',
    ctaText: 'Browse Services',
    ctaUrl: '/#anti-aging-facials',
    badge: 'NEW CLIENT',
  },
  {
    id: 'november-package',
    isActive: true,
    title: 'November Beauty Boost',
    description: 'Get ready for the holidays with radiant, glowing skin.',
    details: [
      '3 Deep Facials for $300',
      '$75 total savings',
      '10% off all facial upgrades',
    ],
    image: '/images/promotions/november-facial.jpg',
    ctaText: 'Book Package',
    ctaUrl: 'https://book.squareup.com/appointments/8wjlenaylebqr2/location/992K09NSXT3W7/services/QUG4XYENNLXHKFEKPMXRKGLC',
    promoCode: 'NOV2025',
    expiresDate: 'November 30, 2025',
    badge: 'LIMITED TIME',
  },
  {
    id: 'gift-card-special',
    isActive: true,
    title: 'Holiday Gift Card Special',
    description: 'Give the gift of beauty and wellness this holiday season.',
    details: [
      '$30 OFF gift cards $125-$200 with code XMAS30',
      '$50 OFF gift cards over $200 with code XMAS50',
      'Perfect for friends, family, and self-care',
      'Valid for all services and treatments',
    ],
    image: '/images/promotions/gift-card-xmas.png',
    ctaText: 'Buy Gift Cards',
    ctaUrl: 'https://app.squareup.com/gift/TYTNS4DBTVQCP/order',
    promoCode: 'XMAS30 / XMAS50',
    expiresDate: 'December 26, 2025',
    badge: 'HOLIDAY SPECIAL',
  },
  {
    id: 'butt-lifting-xmas',
    isActive: true,
    title: 'Butt Lifting Holiday Special',
    description: 'Get ready for the new year with our body contouring special.',
    details: [
      '3 Butt Lifting Sessions for $250',
      'Save over $100 on regular pricing',
      'Lift, tone, and contour naturally',
      'Limited time holiday offer',
    ],
    image: '/images/services/butt-lifting-thumb.jpg',
    ctaText: 'Book Now',
    ctaUrl: 'https://book.squareup.com/appointments/8wjlenaylebqr2/location/992K09NSXT3W7/services/3VTHPWHARBW6XQ2GCNWDDU55',
    expiresDate: 'December 31, 2025',
    badge: 'HOLIDAY DEAL',
  },
  {
    id: 'new-year-slimming-2026',
    isActive: false, // Will auto-activate on January 1, 2026
    title: 'New Year Slimming Special',
    description: 'Start your new year transformation with our exclusive package.',
    details: [
      '4 Body Contouring Sessions for $499',
      'Save over $200 on regular pricing',
      'Target stubborn areas and boost metabolism',
      'Perfect for your New Year goals',
    ],
    image: '/images/specials/body-slimming-special-thumb.jpg',
    ctaText: 'Start Your Journey',
    ctaUrl: 'https://book.squareup.com/appointments/8wjlenaylebqr2/location/992K09NSXT3W7/services', // Update with actual slimming package URL when available
    expiresDate: 'March 31, 2026',
    badge: 'NEW YEAR 2026',
  },
];

// Helper to get only active promotions with date-based activation
export const getActivePromotions = (): Promotion[] => {
  const today = new Date();
  const newYearStart = new Date('2026-01-01');

  return activePromotions.filter(promo => {
    // Auto-deactivate butt-lifting promo on or after Jan 1, 2026
    if (promo.id === 'butt-lifting-xmas' && today >= newYearStart) {
      return false;
    }

    // Auto-activate New Year slimming promo on or after Jan 1, 2026
    if (promo.id === 'new-year-slimming-2026' && today >= newYearStart) {
      return true;
    }

    return promo.isActive;
  });
};
