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
  month: "Winter",
  year: 2025,
  title: "Winter Specials",
  subtitle: "Celebrate the Season with Exclusive Offers",
  description: "Embrace the beauty of winter with our special holiday promotions! From rejuvenating facials to body contouring packages, plus exclusive gift card deals. Treat yourself or someone special this season.",
  discount: "UP TO $50 OFF",
  code: "XMAS30",
  services: [
    "Holiday Gift Cards (Up to $50 OFF)",
    "3 Deep Facials for $300",
    "Butt Lifting 3 Sessions - $250",
  ],
  image: "/images/specials/november-special.jpg", // Using existing winter-appropriate image
  bookingUrl: "https://book.squareup.com/appointments/8wjlenaylebqr2/location/992K09NSXT3W7",
  expirationDate: "December 31, 2025",
  theme: "holiday",
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
