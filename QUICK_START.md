# Quick Start Guide

Get your Beauty Sanctuary website up and running in minutes!

## Step 1: Install Dependencies ✅

You've already done this! Dependencies are installed.

## Step 2: Start Development Server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Step 3: Add Images (Critical!)

The site won't display properly without images. You have two options:

### Option A: Quick Placeholder Setup (Fastest)
1. Visit [Unsplash](https://unsplash.com)
2. Download spa/beauty related images
3. Follow the checklist in `IMAGE_GUIDE.md`
4. Place images in `public/images/` folders

### Option B: Use Real Photos
1. Gather your actual service photos
2. Optimize them (compress to reduce file size)
3. Follow naming convention in `IMAGE_GUIDE.md`

**Minimum Required Images to See Something:**
- `public/images/hero-bg.jpg` - Homepage background
- At least one service thumbnail and hero image

## Step 4: Update Booking URLs

1. Open `config/booking.ts`
2. Update the `baseUrl` to your actual Gloss Genius URL
3. Update individual service paths to match your Gloss Genius setup

```typescript
export const BOOKING_CONFIG = {
  baseUrl: 'https://book.glossgenius.com/YOUR-ACTUAL-URL',
  services: {
    'butt-lift': 'your-service-path',
    // ... update others
  },
};
```

## Step 5: Customize Content

### Update Service Details
Edit `data/services.ts` to:
- Modify service descriptions
- Update pricing
- Change duration times
- Add/remove services
- Update benefits

### Update Contact Info
Edit `components/layout/Footer.tsx` to:
- Add real social media links
- Update contact information

### Customize Colors (Optional)
Edit `tailwind.config.ts` to change:
- Brand colors
- Accent colors
- Font families

## Step 6: Test Everything

✅ Check all pages load:
- Homepage: http://localhost:3000
- Service details: Click on any service card
- Navigation: Test all header links

✅ Test booking buttons:
- Click "Book Now" on any service
- Verify it opens correct Gloss Genius page

✅ Test responsive design:
- Open Chrome DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test mobile, tablet, and desktop views

## Step 7: Deploy to Vercel

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR-GITHUB-REPO-URL
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Custom Domain:**
   - In Vercel dashboard, go to Settings → Domains
   - Add `beautysanctuarybycm.com`
   - Follow DNS configuration instructions

## Common Issues & Solutions

### Images not showing?
- Check file paths are correct
- Ensure images are in `public/images/`
- Restart dev server: `Ctrl+C` then `npm run dev`

### Booking buttons not working?
- Verify URLs in `config/booking.ts`
- Check browser console for errors
- Test Gloss Genius URL directly

### Styles look broken?
- Clear browser cache
- Run `npm run build` to check for errors
- Ensure Tailwind is configured correctly

### Page not found (404)?
- Check service slugs match in `data/services.ts`
- Ensure dynamic route is created at `app/services/[slug]/`

## What's Included

✅ Netflix-style homepage with horizontal scrolling
✅ 4 service categories (Body Contouring, Facials, Massages, Face Coaching)
✅ 13 pre-configured services
✅ Dynamic service detail pages
✅ Interactive before/after image slider
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth Framer Motion animations
✅ Luxury color palette and design
✅ SEO-optimized pages
✅ Centralized booking configuration

## Next Steps

1. **Add Real Content:**
   - Replace placeholder text
   - Add actual pricing
   - Upload real photos

2. **Complete Missing Sections:**
   - About Carmen section
   - Results gallery
   - Testimonials
   - Contact form

3. **Setup Analytics:**
   - Google Analytics
   - Facebook Pixel
   - Conversion tracking

4. **SEO & Marketing:**
   - Submit sitemap to Google
   - Create social media content
   - Set up email marketing

## Need Help?

Check out:
- `README.md` - Full documentation
- `IMAGE_GUIDE.md` - Detailed image instructions
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**You're all set! 🎉 Start the dev server and see your beautiful site come to life!**
