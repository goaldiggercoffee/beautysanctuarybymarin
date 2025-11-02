# Beauty Sanctuary by Carmen Marin

A luxury Netflix-style web application for an upscale esthetician and body contouring spa.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel (recommended)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
beauty-sanctuary/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── not-found.tsx            # 404 page
│   └── services/
│       └── [slug]/              # Dynamic service detail pages
│           ├── page.tsx
│           └── ServiceDetailClient.tsx
├── components/
│   ├── home/
│   │   └── Hero.tsx             # Homepage hero section
│   ├── layout/
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Site footer
│   ├── services/
│   │   ├── ServiceCard.tsx      # Service card component
│   │   ├── ServiceRow.tsx       # Netflix-style horizontal row
│   │   └── BeforeAfterSlider.tsx # Interactive before/after comparison
│   └── ui/
│       └── BookingButton.tsx    # Reusable booking CTA button
├── config/
│   └── booking.ts               # Centralized booking URLs
├── data/
│   └── services.ts              # All service data and categories
└── public/
    └── images/                  # Image assets (you need to add these)
```

## Adding Images

### Required Image Directories

Create these directories in the `public/images/` folder:

```bash
public/
└── images/
    ├── hero-bg.jpg              # Homepage hero background
    ├── services/                # Service thumbnails and hero images
    │   ├── butt-lift-thumb.jpg
    │   ├── butt-lift-hero.jpg
    │   ├── tummy-sculpting-thumb.jpg
    │   ├── tummy-sculpting-hero.jpg
    │   └── ... (all other services)
    └── results/                 # Before/after images
        ├── butt-lift-before-1.jpg
        ├── butt-lift-after-1.jpg
        └── ... (all other results)
```

### Image Guidelines

- **Hero Background:** 1920x1080px (or higher), high-quality spa/treatment room photo
- **Service Thumbnails:** 600x400px, showcasing the treatment or results
- **Service Heroes:** 1200x600px, beautiful header images for detail pages
- **Before/After:** 800x800px (square), clear before/after photos

### Placeholder Images

For development, you can use placeholder images from:
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- Your actual client photos (recommended for production)

## Managing Booking Links

### Updating Gloss Genius URLs

All booking URLs are centralized in `config/booking.ts`. To update:

1. Open `config/booking.ts`
2. Update the `baseUrl` if your Gloss Genius URL changes
3. Update individual service paths in the `services` object

Example:
```typescript
export const BOOKING_CONFIG = {
  baseUrl: 'https://book.glossgenius.com/beautysanctuarybycm',
  services: {
    'butt-lift': 'butt-lift',  // Update the path here
    // ...
  },
};
```

### Analytics Integration

The `trackBookingClick` function in `config/booking.ts` is ready for analytics integration. Uncomment and configure for:
- Google Analytics 4
- Facebook Pixel
- Other tracking services

## Adding/Editing Services

All service data is in `data/services.ts`. To add a new service:

1. Find the appropriate category in `serviceCategories`
2. Add a new service object to the `services` array
3. Update the corresponding booking URL in `config/booking.ts`
4. Add the service images to `public/images/`

Example:
```typescript
{
  id: 'new-service',
  name: 'New Service',
  slug: 'new-service',
  category: 'facials',
  description: 'Short description',
  longDescription: 'Detailed description',
  duration: '60 minutes',
  price: '$150',
  benefits: ['Benefit 1', 'Benefit 2'],
  images: {
    thumbnail: '/images/services/new-service-thumb.jpg',
    hero: '/images/services/new-service-hero.jpg',
    beforeAfter: [],
  },
  bookingUrl: 'new-service',
}
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- `cream` - Neutral cream tones
- `beige` - Warm beige tones
- `rosegold` - Rose gold accents
- `sage` - Calming sage green

### Fonts

The site uses:
- **Headers:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

Change fonts in `app/globals.css` and `tailwind.config.ts`.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure settings
4. Deploy!

### Environment Variables

Create a `.env.local` file for any API keys or secrets:

```bash
# Add any environment variables here
# NEXT_PUBLIC_GA_ID=your-google-analytics-id
# NEXT_PUBLIC_FB_PIXEL_ID=your-facebook-pixel-id
```

## Domain Setup

When ready to connect `beautysanctuarybycm.com`:

1. Transfer domain from Square to a domain registrar (Namecheap, GoDaddy, etc.)
2. Point DNS to Vercel:
   - Add A record: `76.76.21.21`
   - Add CNAME record: `cname.vercel-dns.com`
3. Add domain in Vercel dashboard

## Features to Add Later

- [ ] About Carmen section with bio and photo
- [ ] About Sister (massage therapist) section
- [ ] Results gallery page
- [ ] Client testimonials slider
- [ ] Contact form
- [ ] Location map integration
- [ ] Instagram feed widget
- [ ] FAQ accordion section
- [ ] Newsletter signup
- [ ] Blog/articles section

## Support

For questions or issues:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Consult [Framer Motion docs](https://www.framer.com/motion/)

## License

Private project for Beauty Sanctuary by Carmen Marin.

---

**Built with ❤️ for Beauty Sanctuary**
