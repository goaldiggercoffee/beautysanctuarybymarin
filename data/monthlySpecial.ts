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
  month: "February",
  year: 2026,
  title: "February Self-Care Special",
  subtitle: "Treat Yourself to Radiant Beauty",
  description: "Embrace self-love this February with our exclusive beauty packages! From deep cleansing facials to body contouring treatments. Show yourself some love with our limited-time offers.",
  discount: "UP TO $75 OFF",
  code: "NOV2025",
  services: [
    "3 Deep Facials for $300 ($75 savings)",
    "10% off all facial upgrades",
    "Body Contouring Packages Available",
  ],
  image: "/images/specials/november-special.jpg",
  bookingUrl: "https://book.squareup.com/appointments/8wjlenaylebqr2/location/992K09NSXT3W7",
  expirationDate: "February 28, 2026",
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
