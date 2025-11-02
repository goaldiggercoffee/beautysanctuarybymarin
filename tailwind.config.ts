import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors (Netflix-style)
        dark: {
          bg: '#0F0F0F',           // Primary background
          secondary: '#1A1A1A',    // Secondary background (cards/sections)
          hover: '#2A2A2A',        // Card hover state
          border: '#333333',       // Subtle borders
        },
        light: {
          primary: '#FFFFFF',      // Primary text
          secondary: '#B3B3B3',    // Secondary text
          muted: '#808080',        // Muted text
        },
        accent: {
          primary: '#E8B298',      // Rose gold/salmon (primary buttons)
          secondary: '#8B9A7E',    // Sage green (subtle highlights)
          hover: '#F0C4AE',        // Lighter rose gold for hover
        },
        // Legacy colors for backward compatibility (now dark-themed)
        cream: {
          50: '#2A2A2A',
          100: '#252525',
          200: '#202020',
          300: '#1A1A1A',
          400: '#151515',
          500: '#0F0F0F',
          600: '#0A0A0A',
          700: '#050505',
          800: '#000000',
          900: '#000000',
        },
        beige: {
          50: '#2A2A2A',
          100: '#252525',
          200: '#202020',
          300: '#1A1A1A',
          400: '#151515',
          500: '#0F0F0F',
          600: '#0A0A0A',
          700: '#050505',
          800: '#000000',
          900: '#000000',
        },
        rosegold: {
          50: '#FDF6F4',
          100: '#F9DDD3',
          200: '#F5C4B8',
          300: '#F0AB9D',
          400: '#ECB1A2',
          500: '#E8B298',           // Primary accent color
          600: '#D98366',
          700: '#C7613B',
          800: '#9D4D2E',
          900: '#733921',
        },
        sage: {
          50: '#C5D0C1',
          100: '#B5C3B1',
          200: '#A5B6A1',
          300: '#95A991',
          400: '#909E8A',
          500: '#8B9A7E',           // Secondary accent color
          600: '#7A9A7A',
          700: '#5A8559',
          800: '#486B47',
          900: '#365135',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
