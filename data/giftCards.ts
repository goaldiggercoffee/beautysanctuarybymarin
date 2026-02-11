// Dynamic Gift Card Promotions Configuration
// This file automatically updates gift card promotions and images based on the current month

export interface GiftCardPromo {
  title: string;
  description: string;
  details: string[];
  image: string;
  promoCode: string;
  badge: string;
  discounts: {
    code: string;
    amount: number;
    minPurchase: number;
  }[];
}

// Gift Card Images by Month
const GIFT_CARD_IMAGES: Record<number, string> = {
  1: '/images/Gift Cards/Gift Card Black and Gold.png',  // January - Default
  2: '/images/Gift Cards/Valentines Gift Card.png',      // February - Valentine's
  3: '/images/Gift Cards/Gift Card Black and Gold.png',  // March - Default
  4: '/images/Gift Cards/Gift Card Black and Gold.png',  // April - Default
  5: '/images/Gift Cards/Gift Card Black and Gold.png',  // May - Mother's Day (can be customized)
  6: '/images/Gift Cards/Gift Card Black and Gold.png',  // June - Father's Day (can be customized)
  7: '/images/Gift Cards/Gift Card Black and Gold.png',  // July - Default
  8: '/images/Gift Cards/Gift Card Black and Gold.png',  // August - Default
  9: '/images/Gift Cards/Autumn Gift Card.png',         // September - Autumn
  10: '/images/Gift Cards/Happy Halloween Gift Card.png', // October - Halloween
  11: '/images/Gift Cards/Autumn Gift Card.png',         // November - Autumn
  12: '/images/Gift Cards/Xmas Gift Card.png',           // December - Christmas
};

// Default year-round promotion
const DEFAULT_PROMO: GiftCardPromo = {
  title: 'Gift Card Special',
  description: 'Give the gift of beauty and wellness.',
  details: [
    '$20 OFF gift cards with minimum $150 purchase',
    'Perfect for friends, family, and self-care',
    'Valid for all services and treatments',
    'No expiration date on gift cards',
  ],
  image: '/images/Gift Cards/Gift Card Black and Gold.png',
  promoCode: 'GIFT2026',
  badge: 'YEAR-ROUND',
  discounts: [
    { code: 'GIFT2026', amount: 20, minPurchase: 150 },
  ],
};

// Valentine's Day Promotion (February)
const VALENTINES_PROMO: GiftCardPromo = {
  title: "Valentine's Gift Card Special",
  description: 'Share the love with a gift of beauty and relaxation.',
  details: [
    '$30 OFF gift cards $125-$199 with code VAL30',
    '$50 OFF gift cards over $200 with code VAL50',
    'Perfect gift for your Valentine',
    'Valid for all services and treatments',
  ],
  image: '/images/Gift Cards/Valentines Gift Card.png',
  promoCode: 'VAL30 / VAL50',
  badge: "VALENTINE'S DAY",
  discounts: [
    { code: 'VAL30', amount: 30, minPurchase: 125 },
    { code: 'VAL50', amount: 50, minPurchase: 200 },
  ],
};

// Mother's Day Promotion (May)
const MOTHERS_DAY_PROMO: GiftCardPromo = {
  title: "Mother's Day Gift Card Special",
  description: 'Treat Mom to the gift of relaxation and beauty.',
  details: [
    "$30 OFF gift cards $125-$199 with code MOM30",
    '$50 OFF gift cards over $200 with code MOM50',
    'Perfect gift for Mother\'s Day',
    'Valid for all services and treatments',
  ],
  image: '/images/Gift Cards/Gift Card Black and Gold.png', // Can be updated with a Mother's Day specific image
  promoCode: 'MOM30 / MOM50',
  badge: "MOTHER'S DAY",
  discounts: [
    { code: 'MOM30', amount: 30, minPurchase: 125 },
    { code: 'MOM50', amount: 50, minPurchase: 200 },
  ],
};

// Father's Day Promotion (June)
const FATHERS_DAY_PROMO: GiftCardPromo = {
  title: "Father's Day Gift Card Special",
  description: 'Give Dad the gift of wellness and self-care.',
  details: [
    '$30 OFF gift cards $125-$199 with code DAD30',
    '$50 OFF gift cards over $200 with code DAD50',
    'Perfect gift for Father\'s Day',
    'Valid for all services and treatments',
  ],
  image: '/images/Gift Cards/Gift Card Black and Gold.png', // Can be updated with a Father's Day specific image
  promoCode: 'DAD30 / DAD50',
  badge: "FATHER'S DAY",
  discounts: [
    { code: 'DAD30', amount: 30, minPurchase: 125 },
    { code: 'DAD50', amount: 50, minPurchase: 200 },
  ],
};

// Christmas Promotion (December)
const CHRISTMAS_PROMO: GiftCardPromo = {
  title: 'Holiday Gift Card Special',
  description: 'Give the gift of beauty and wellness this holiday season.',
  details: [
    '$30 OFF gift cards $125-$199 with code XMAS30',
    '$50 OFF gift cards over $200 with code XMAS50',
    'Perfect for friends, family, and self-care',
    'Valid for all services and treatments',
  ],
  image: '/images/Gift Cards/Xmas Gift Card.png',
  promoCode: 'XMAS30 / XMAS50',
  badge: 'HOLIDAY SPECIAL',
  discounts: [
    { code: 'XMAS30', amount: 30, minPurchase: 125 },
    { code: 'XMAS50', amount: 50, minPurchase: 200 },
  ],
};

// Map months to their special promotions
const MONTHLY_PROMOS: Record<number, GiftCardPromo | null> = {
  1: null,                    // January - Default
  2: VALENTINES_PROMO,       // February - Valentine's
  3: null,                    // March - Default
  4: null,                    // April - Default
  5: MOTHERS_DAY_PROMO,      // May - Mother's Day
  6: FATHERS_DAY_PROMO,      // June - Father's Day
  7: null,                    // July - Default
  8: null,                    // August - Default
  9: null,                    // September - Default (Autumn image)
  10: null,                   // October - Default (Halloween image)
  11: null,                   // November - Default (Autumn image)
  12: CHRISTMAS_PROMO,       // December - Christmas
};

/**
 * Gets the current gift card promotion based on the current date
 * @returns GiftCardPromo object for the current month
 */
export const getCurrentGiftCardPromo = (): GiftCardPromo => {
  const today = new Date();
  const month = today.getMonth() + 1; // getMonth() returns 0-11, we need 1-12

  const monthlyPromo = MONTHLY_PROMOS[month];

  if (monthlyPromo) {
    return monthlyPromo;
  }

  // Return default promo with the appropriate seasonal image
  return {
    ...DEFAULT_PROMO,
    image: GIFT_CARD_IMAGES[month] || DEFAULT_PROMO.image,
  };
};

/**
 * Gets the gift card image for the current month
 * @returns Path to the gift card image
 */
export const getCurrentGiftCardImage = (): string => {
  const today = new Date();
  const month = today.getMonth() + 1;
  return GIFT_CARD_IMAGES[month] || DEFAULT_PROMO.image;
};

/**
 * Checks if there's a special promotion active for the current month
 * @returns boolean indicating if a special promo is active
 */
export const hasSpecialPromo = (): boolean => {
  const today = new Date();
  const month = today.getMonth() + 1;
  return MONTHLY_PROMOS[month] !== null;
};
