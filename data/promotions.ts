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
  text: '🎉 Limited Time: November Beauty Boost - 3 Facials for $300',
  ctaText: 'View Offers',
  ctaUrl: '/#seasonal-promotions',
  code: 'NOV2025',
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
];

// Helper to get only active promotions
export const getActivePromotions = (): Promotion[] => {
  return activePromotions.filter(promo => promo.isActive);
};
