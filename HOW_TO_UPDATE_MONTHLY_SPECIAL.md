# How to Update Monthly Specials

This guide shows you how to update the monthly special promotion that appears on your website.

## What You Need to Update Each Month

### 1. Update the Special Details

Open the file: `data/monthlySpecial.ts`

Update these fields:

```typescript
export const currentMonthlySpecial: MonthlySpecial = {
  isActive: true,              // Set to false to hide the special
  month: "November",           // Current month
  year: 2024,                  // Current year
  title: "November Beauty Boost",  // Main headline
  subtitle: "Get Ready for the Holidays",  // Secondary text
  description: "Full description here...",  // Detailed description
  discount: "20% OFF",         // Discount amount
  code: "NOV2024",            // Promo code (optional)
  services: [                  // List of included services
    "All Body Contouring Treatments",
    "Anti-Aging Facials",
  ],
  image: "/images/specials/november-special.jpg",  // Image path
  bookingUrl: "https://www.vagaro.com/beautysanctuary",
  expirationDate: "November 30, 2024",
  theme: "default",  // Options: "default", "holiday", "seasonal"
};
```

### 2. Add Your Special Image

1. Create an image for your monthly special (recommended size: 1200x800px)
2. Save it to: `public/images/specials/`
3. Name it descriptively (e.g., `november-special.jpg`, `december-holiday.jpg`)
4. Update the `image` field in `data/monthlySpecial.ts` to match your filename

### 3. Theme Options

Choose a theme that matches your promotion:

- **`default`** - Rose gold/sage gradient (general promotions)
- **`holiday`** - Red/green gradient (Christmas, Valentine's Day)
- **`seasonal`** - Amber/orange gradient (Fall, Spring specials)

### 4. Test Locally

Before publishing:

```bash
npm run dev
```

Visit http://localhost:3000 to see your changes.

### 5. Publish to Website

Ask Claude Code or run:
```bash
git add .
git commit -m "Update monthly special for [Month]"
git push
```

Netlify will automatically deploy your changes in 2-5 minutes.

## Example Monthly Specials

### November (Thanksgiving)
```typescript
{
  title: "Thanksgiving Glow Special",
  discount: "20% OFF",
  theme: "seasonal",
  // ...
}
```

### December (Holiday)
```typescript
{
  title: "Holiday Gift Packages",
  discount: "25% OFF + FREE GIFT",
  theme: "holiday",
  // ...
}
```

### January (New Year)
```typescript
{
  title: "New Year, New You",
  discount: "30% OFF",
  theme: "default",
  // ...
}
```

### February (Valentine's Day)
```typescript
{
  title: "Valentine's Day Pampering",
  discount: "2 for 1 Couples Package",
  theme: "holiday",
  // ...
}
```

## Tips

- Update on the 1st of each month
- Create urgency with expiration dates
- Use high-quality, relevant images
- Keep descriptions clear and benefit-focused
- Test the promo code before publishing
- Share the promo code on social media

## Need Help?

Ask Claude Code:
- "Update the monthly special for December"
- "Change the special image"
- "Turn off the special temporarily"
