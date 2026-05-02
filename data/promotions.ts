// Seasonal Promotions Configuration
// Update this file to change active promotions

import { getCurrentGiftCardPromo, hasSpecialPromo } from './giftCards';

// Dynamic facials package — Mother's Day in May, Membership Deal all other months
const getCurrentFacialsPromo = (): Promotion => {
  const month = new Date().getMonth() + 1;

  if (month === 5) {
    return {
      id: 'facials-package',
      isActive: true,
      title: "Mother's Day Special: 3 Deep Facials",
      description: "A beautiful gift for Mom — or treat yourself to some self-love. Three luxurious deep facials at a special Mother's Day price.",
      details: [
        '3 Deep Facials for $300',
        'Saving $75 — Happy Mother\'s Day!',
        'Perfect Mother\'s Day gift or self-care treat',
        '10% off all facial upgrades',
      ],
      image: '/images/promotions/november-facial.jpg',
      ctaText: 'Book Package',
      ctaUrl: 'https://book.squareup.com/appointments/8wjlenaylebqr2/location/992K09NSXT3W7/services/QUG4XYENNLXHKFEKPMXRKGLC',
      badge: "MOTHER'S DAY",
    };
  }

  return {
    id: 'facials-package',
    isActive: true,
    title: 'Facial Membership Deal',
    description: 'Commit to your glow with our exclusive membership package. Three deep facials bundled for lasting results at an unbeatable members-only value.',
    details: [
      '3 Deep Facials for $300',
      'Save $75 — membership pricing',
      'Invest in your skin all year long',
    ],
    image: '/images/promotions/november-facial.jpg',
    ctaText: 'Book Package',
    ctaUrl: 'https://book.squareup.com/appointments/8wjlenaylebqr2/location/992K09NSXT3W7/services/QUG4XYENNLXHKFEKPMXRKGLC',
    badge: 'MEMBERSHIP DEAL',
  };
};

// Banner Settings - Show promotional banner at top of site
export interface BannerSettings {
  isActive: boolean;
  text: string; // Main message
  ctaText: string; // Button text
  ctaUrl: string; // Where button goes
  code?: string; // Optional promo code to display
}

// Dynamic banner settings based on current gift card promotion
export const getBannerSettings = (): BannerSettings => {
  const giftCardPromo = getCurrentGiftCardPromo();
  const isSpecialMonth = hasSpecialPromo();

  if (isSpecialMonth) {
    return {
      isActive: true,
      text: `🎁 ${giftCardPromo.badge}: ${giftCardPromo.title}`,
      ctaText: 'View Offers',
      ctaUrl: '/#seasonal-promotions',
      code: giftCardPromo.promoCode,
    };
  }

  // Default banner for non-special months
  return {
    isActive: true,
    text: '✨ Year-Round Specials: Gift Cards & Exclusive Offers',
    ctaText: 'View Offers',
    ctaUrl: '/#seasonal-promotions',
    code: giftCardPromo.promoCode,
  };
};

// Legacy export for backwards compatibility
export const bannerSettings: BannerSettings = getBannerSettings();

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
  // Facials package is now dynamically added by getActivePromotions() based on current month
  // Gift card promotion is now dynamically added by getActivePromotions() based on current month
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
];

// Helper to get only active promotions with date-based activation
export const getActivePromotions = (): Promotion[] => {
  const today = new Date();
  const newYearStart = new Date('2026-01-01');

  // Get dynamic gift card promotion
  const giftCardPromo = getCurrentGiftCardPromo();
  const giftCardPromotionItem: Promotion = {
    id: 'gift-card-special',
    isActive: true,
    title: giftCardPromo.title,
    description: giftCardPromo.description,
    details: giftCardPromo.details,
    image: giftCardPromo.image,
    ctaText: 'Buy Gift Cards',
    ctaUrl: 'https://app.squareup.com/gift/TYTNS4DBTVQCP/order',
    promoCode: giftCardPromo.promoCode,
    badge: giftCardPromo.badge,
  };

  const filteredPromotions = activePromotions.filter(promo => {
    // Auto-deactivate butt-lifting promo on or after Jan 1, 2026
    if (promo.id === 'butt-lifting-xmas' && today >= newYearStart) {
      return false;
    }

    return promo.isActive;
  });

  // Order: new-client → facials deal (dynamic) → gift card (dynamic) → remaining
  return [
    filteredPromotions[0],   // new-client-special
    getCurrentFacialsPromo(),
    giftCardPromotionItem,
    ...filteredPromotions.slice(1),
  ].filter(Boolean);
};
