// Monthly Special Configuration
// Update this file at the beginning of each month

export interface MonthlySpecial {
  isActive: boolean; // Set to false to hide the special
  month: string; // e.g., "November", "December"
  year: number;
  title: string; // Main headline
  subtitle: string; // Secondary text
  description: string; // Full description for the detailed section
  discount: string; // e.g., "20% OFF", "$50 OFF"
  code?: string; // Optional promo code
  services: string[]; // Which services are included
  image: string; // Path to promotional image
  bookingUrl: string; // Direct booking link
  expirationDate: string; // e.g., "November 30, 2024"
  theme: 'default' | 'holiday' | 'seasonal'; // Visual theme
}

export const currentMonthlySpecial: MonthlySpecial = {
  isActive: true,
  month: "November",
  year: 2024,
  title: "November Beauty Boost",
  subtitle: "Get Ready for the Holidays",
  description: "Prepare your skin for the holiday season with our exclusive November special! Get 20% off all body contouring and anti-aging facial treatments. Look and feel your absolute best for all your holiday gatherings.",
  discount: "20% OFF",
  code: "NOV2024",
  services: [
    "All Body Contouring Treatments",
    "Anti-Aging Facials",
    "Cryotherapy Treatments",
  ],
  image: "/images/specials/november-special.jpg", // Add this image to public/images/specials/
  bookingUrl: "https://www.vagaro.com/beautysanctuary",
  expirationDate: "November 30, 2024",
  theme: "default",
};

// Example for December (Holiday Special)
// export const currentMonthlySpecial: MonthlySpecial = {
//   isActive: true,
//   month: "December",
//   year: 2024,
//   title: "Holiday Glow Special",
//   subtitle: "Gift Yourself or Someone You Love",
//   description: "Celebrate the season with our exclusive holiday package! Perfect for gifting or treating yourself. Get 25% off all facial treatments plus a complimentary holiday skincare gift set with any service over $150.",
//   discount: "25% OFF + FREE GIFT",
//   code: "HOLIDAY2024",
//   services: [
//     "All Facial Treatments",
//     "Gift Certificates Available",
//     "Complimentary Holiday Gift Set",
//   ],
//   image: "/images/specials/december-special.jpg",
//   bookingUrl: "https://www.vagaro.com/beautysanctuary",
//   expirationDate: "December 31, 2024",
//   theme: "holiday",
// };
