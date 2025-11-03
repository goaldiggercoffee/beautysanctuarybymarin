# How to Update Seasonal Promotions

This guide shows you how to update the promotional cards that appear after your hero section.

## What You Need to Update

### 1. Edit Promotions Data

Open the file: `data/promotions.ts`

You'll see an array of promotions. Each promotion has these fields:

```typescript
{
  id: 'unique-id',              // Unique identifier (lowercase, dashes)
  isActive: true,               // Set to false to hide this promotion
  title: 'Promotion Title',     // Main headline
  description: '...',           // Short description
  details: [                    // Bullet points (what's included)
    'Detail point 1',
    'Detail point 2',
    'Detail point 3',
  ],
  image: '/images/promotions/promo-image.jpg',  // Image path
  ctaText: 'Book Now',         // Button text
  ctaUrl: 'https://...',       // Booking link
  promoCode: 'CODE123',        // Optional: promo code
  expiresDate: 'Dec 31, 2024', // Optional: expiration date
  badge: 'LIMITED TIME',        // Optional: badge text
}
```

### 2. Add Promotion Images

1. Create/choose a high-quality image (recommended size: 800x600px or 1200x900px)
2. Save it to: `public/images/promotions/`
3. Name it descriptively (e.g., `december-special.jpg`, `new-client.jpg`)
4. Update the `image` field in `data/promotions.ts`

### 3. Badge Options

Use badges to highlight special offers:
- `"NEW CLIENT"` - For first-time visitor offers
- `"LIMITED TIME"` - For time-sensitive deals
- `"EXCLUSIVE"` - For VIP or special offers
- `"HOLIDAY SPECIAL"` - For seasonal promotions
- Or leave undefined for no badge

## Example Promotions

### New Year Special
```typescript
{
  id: 'new-year-2025',
  isActive: true,
  title: 'New Year, New You',
  description: 'Start 2025 with refreshed, radiant skin.',
  details: [
    '30% off all facial packages',
    'Free consultation included',
    'Valid for first 50 bookings',
  ],
  image: '/images/promotions/new-year.jpg',
  ctaText: 'Claim Your Discount',
  ctaUrl: 'https://www.vagaro.com/beautysanctuary',
  promoCode: 'NEWYEAR2025',
  expiresDate: 'January 31, 2025',
  badge: 'LIMITED TIME',
}
```

### Valentine's Day
```typescript
{
  id: 'valentines-2025',
  isActive: true,
  title: 'Valentine\'s Day Couples Package',
  description: 'Share the love with someone special.',
  details: [
    '2 Relaxing Facials for $200',
    'Complimentary champagne',
    'Side-by-side treatment rooms',
  ],
  image: '/images/promotions/valentines.jpg',
  ctaText: 'Book for Two',
  ctaUrl: 'https://www.vagaro.com/beautysanctuary',
  promoCode: 'LOVE2025',
  expiresDate: 'February 14, 2025',
  badge: 'COUPLES SPECIAL',
}
```

### Birthday Month
```typescript
{
  id: 'birthday-special',
  isActive: true,
  title: 'Birthday Month Treat',
  description: 'Celebrate your special day with us!',
  details: [
    '25% off any service',
    'Complimentary add-on upgrade',
    'Valid all month long',
  ],
  image: '/images/promotions/birthday.jpg',
  ctaText: 'Book Your Birthday Treatment',
  ctaUrl: 'https://www.vagaro.com/beautysanctuary',
  badge: 'BIRTHDAY SPECIAL',
}
```

## Managing Multiple Promotions

You can have multiple promotions active at once! They'll appear as cards in a grid:
- **1 promotion** = Full width card
- **2 promotions** = Two cards side-by-side (on desktop)
- **3+ promotions** = Grid layout

To hide a promotion without deleting it:
```typescript
isActive: false,  // Promotion won't show on site
```

## Test Before Publishing

1. Start your development server:
```bash
npm run dev
```

2. Visit http://localhost:3000
3. Check that:
   - Images load correctly
   - Text is clear and professional
   - Links work properly
   - Layout looks good on mobile and desktop

## Publish Changes

When you're ready to go live, ask Claude Code or run:
```bash
git add .
git commit -m "Update seasonal promotions"
git push
```

Changes will be live on your site in 2-5 minutes!

## Tips for Great Promotions

✅ **DO:**
- Use high-quality, professional images
- Keep descriptions short and benefit-focused
- Create urgency with expiration dates
- Test promo codes before publishing
- Update promotions seasonally

❌ **DON'T:**
- Use blurry or low-quality images
- Write long paragraphs
- Forget to update expiration dates
- Leave inactive promotions set to `isActive: true`

## Need Help?

Ask Claude Code:
- "Update the promotions for December"
- "Add a new Valentine's Day promotion"
- "Change the promotion images"
- "Turn off the November special"
