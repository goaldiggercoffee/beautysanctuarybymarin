/**
 * Booking Configuration
 *
 * This file centralizes all booking URLs for easy management.
 * Using Vagaro as the booking platform with service-specific direct links.
 */

export const BOOKING_CONFIG = {
  // Vagaro embedded widget script URL (for general booking if needed)
  widgetScriptUrl: 'https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqC3OtDZOcT3qmV35y6JuPlXiz3avV34mC2PeFJ4mC30m9dSycvCu7gCmjZcoapOUc9CvdfQOW?v=neTpJbuSRER2JrrGrauRgbU2Lohz5sMQHx5b0WpKa7Y#',

  // General booking page (fallback for services without specific URLs)
  generalBooking: 'https://www.vagaro.com/beautysanctuarybycarmenmarin',
};

/**
 * Service-specific booking URLs
 * Each service slug maps to its unique Vagaro booking link
 */
export const SERVICE_BOOKING_URLS: Record<string, string> = {
  // CONSULTATIONS
  'in-person-consultation': 'https://www.vagaro.com/cl/f02tadZOccfhisNRmGh3TXGIbP30csmj6jWcR0BUprU=',
  'virtual-consultation': 'https://www.vagaro.com/cl/f02tadZOccfhisNRmGh3TXGIbP30csmj6jWcR0BUprU=', // Using same URL as in-person

  // PROMOTIONS & PACKAGES
  '8-sessions-slimming': 'https://www.vagaro.com/cl/KpGjR-JwOJV~ZD7n~8OXkbUOtWpLWMlcmUe9RpBLTOw=',
  'body-treatment-pack-4': 'https://www.vagaro.com/cl/wzs-DuoF2IHPXMkuHFNb0MOhj-ofitFMlE7lyey3Jro=',
  'butt-lifting-6-sessions': 'https://www.vagaro.com/cl/UCfWkC5qKlBYgngqc4FaEhtMrovPd3TuMyeDYB-V3Fg=',
  'butt-lifting-8-sessions': 'https://www.vagaro.com/cl/3GTSn-EmMn~hW3KVsDnjv5GOPLYNaKdUeCzzzeSyR5E=',
  'cryo-led-series-5': 'https://www.vagaro.com/cl/GvRSeIeHd3gDZzIaGUAWRhfYoAjSrEcZgEdTIiUG~fg=',
  'cryo-rf-chin-5-sessions': 'https://www.vagaro.com/cl/0ZK4Z4sv4GXqRwsqiKj7oPUE-xXAU2JYtRrnxxqoyJU=',

  // ANTI-AGING FACIALS
  'cryo-face-eyes-lifting': 'https://www.vagaro.com/cl/dBlZCrqt6jFXLH2V-xOZW7aJEF7t7-HKO7UANbZG52w=',
  'cryo-led-therapy': 'https://www.vagaro.com/cl/met0DzyO7f8~rnpLF4b4yioRLO~rOCuJFZICNRs4OXo=',
  'cryotherapy-facial': 'https://www.vagaro.com/cl/~bC3D61KDm-FPlAUUezaxi0KgWu-dQ6wKImDMM3rrSY=',
  'crystal-healing-facial': 'https://www.vagaro.com/cl/8EmgygDftFM6nAKdH83bjzS99X1W12rjfal82-RcZ2g=',

  // ADVANCED FACIALS
  'circadia-enzyme-peel-led': 'https://www.vagaro.com/cl/RrOjDGn94DUgqXQDTdzEbSYBwVghOBZr0AVp7oaaOYQ=',
  'microdermabrasion-facial': 'https://www.vagaro.com/cl/Uzup333X6sAA-~49hAW-QTnXdvfZhF-0r5ip4mMTAFc=',
  'micropeel-facial': 'https://www.vagaro.com/cl/g~j5FeuEuRrlS-QQbJMeM8FaKv7s5p6hrXzt2FFHIgU=',
  'nano-infusion-facial': 'https://www.vagaro.com/cl/9eCCYEQCfIWNoPGBSAUAmNYyZtgy28LTI9IkpFJKVlg=',
  'led-peel-skinscript': 'https://www.vagaro.com/cl/HM9Ig3B-v6XH9Pe4d-J7R-YiTbdAMhJLR97mFia~YNQ=',
  'micro-nano-exo-booster-dermalogica': 'https://www.vagaro.com/cl/LEkpWiMuTS5epfYU5xQUEHm3WGN-LBePH0cQqP926EY=',
  'micro-nano-vitamins': 'https://www.vagaro.com/cl/cyQOlNENAFj3wi3SyRcQZN~mHWOCELgwWCDkzIrgiaU=',

  // CLASSIC FACIALS
  'deep-facial': 'https://www.vagaro.com/cl/A0ryg7sFPjVrU5pqfwY~oXVDz5YRZJiucofefdazUcE=',
  'peeling-facial': 'https://www.vagaro.com/cl/-GYTOAOvZo5cTF7emgeaC7wRkLxR9UnWOCzYsSEuySE=',
  'teenager-facial': 'https://www.vagaro.com/cl/SkDgZBXgL30CdWHzfO5OSqMh5VG1gruYJuT97FjavwI=',

  // SPECIALIZED BODY TREATMENTS
  'bacial-enzymes': 'https://www.vagaro.com/cl/pRsVxhRjxQmIJsNj74GQYUHSQfKLkti2PaooOPrSOr8=',
  'neck-chest-cryo': 'https://www.vagaro.com/cl/MesQ6CSnx6cahlc0rT9ygmbRRn4Mrs5Fz6wvYsvVul0=',
  'back-facial': 'https://www.vagaro.com/cl/GA0qHOstLt6aLeoYmTlSPmenZxD2C9ptpL6DJwToWNA=',

  // SPECIALIZED FACIAL TREATMENTS
  'rf-chin-toning': 'https://www.vagaro.com/cl/pynOCHfkjniXS-NoQWUBGRhuiFEIedqVV0jpUCTHd1k=',
  'cryotherapy-rf-chin': 'https://www.vagaro.com/cl/B~NB~9tKt~gDs5pnpjcZEpsb9jZnES9qk7uRW0gGkdc=',
  'cryo-rf-face': 'https://www.vagaro.com/cl/rNsZgsvgGrRIaZAlrALDgfGcBC6mY8i8w4XORJD5VNE=',

  // BODY CONTOURING & SCULPTING
  'body-contouring': 'https://www.vagaro.com/cl/xNMcK0YHQAKv-nQxjRXtJd2hRfT2vhEwsGxE5gPw1W8=',
  'butt-lifting': 'https://www.vagaro.com/cl/y3kfn12suUFiWlnHyg7izAlpF77O3Imz3WZlq0VE2vo=',
  'cryo-body': 'https://www.vagaro.com/cl/cWAwON7rxi6wgcbowqzY6Vv1NMuMvjfsInWMuQXxtqM=',

  // MASSAGE THERAPY
  'massage-eleni-1h': 'https://www.vagaro.com/cl/ziqEm3mkA~4RDh1OdYXzOrcQqZh68NTILMVOsYJ8Kzc=',

  // VIRTUAL FACE COACHING
  'face-coaching': BOOKING_CONFIG.generalBooking, // Using general booking for virtual coaching
};

/**
 * Get the full booking URL for a service
 *
 * @param serviceSlug - The slug of the service
 * @returns Full Vagaro booking URL for the specific service
 */
export const getBookingUrl = (serviceSlug: string): string => {
  // Return service-specific URL if available, otherwise fallback to general booking
  return SERVICE_BOOKING_URLS[serviceSlug] || BOOKING_CONFIG.generalBooking;
};

/**
 * Track booking link clicks (placeholder for analytics)
 * @param serviceSlug - The slug of the service
 * @param serviceName - The name of the service
 */
export const trackBookingClick = (serviceSlug: string, serviceName: string): void => {
  // This is a placeholder for future analytics integration
  // You can integrate Google Analytics, Mixpanel, or other analytics services here

  if (typeof window !== 'undefined') {
    console.log(`Booking clicked: ${serviceName} (${serviceSlug})`);

    // Example: Google Analytics 4 event tracking
    // window.gtag?.('event', 'booking_click', {
    //   service_slug: serviceSlug,
    //   service_name: serviceName,
    // });

    // Example: Facebook Pixel tracking
    // window.fbq?.('track', 'Schedule', {
    //   content_name: serviceName,
    //   content_category: serviceSlug,
    // });
  }
};
