# Restaurant Onboarding UI - Implementation Guide

## Overview

This is a production-ready, mobile-first onboarding portal for restaurant owners to claim and publish digitized menus extracted from Yelp review photos.

## Project Structure

```
/app
  /onboarding
    page.tsx                 # Main onboarding wizard container
  landing-page.tsx           # Marketing landing page
  page.tsx                   # Home (renders landing page)

/components
  OnboardingLayout.tsx       # Wrapper with header, stepper, footer
  Stepper.tsx               # Progress indicator (mobile + desktop)
  /steps
    Step1Identify.tsx       # Restaurant search/identification
    Step2Sources.tsx        # Yelp image viewer with filters
    Step3ReviewMenu.tsx     # Menu review and editing
    Step4Customize.tsx      # Settings + preview
    Step5Share.tsx          # Success + sharing tools

/lib
  store.ts                  # Zustand state management
  mockApi.ts                # Mock API functions with delays
  mockData.ts               # Sample restaurant/menu data

/types
  onboarding.ts             # TypeScript types
```

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## User Flow

### Step 1: Identify Your Restaurant
- Search by name/city or phone number
- Select from results list
- Continue to sources

### Step 2: Menu Photo Sources
- View Yelp review images (menu + food photos)
- Toggle filters:
  - Hide non-menu photos
  - Blur faces in photos
- Generate draft menu from selected images

### Step 3: Review Menu Draft
- See extracted categories and items
- Review queue for low-confidence items
- Inline editing (name, description, price)
- Approve draft when ready

### Step 4: Customize & Publish
- Set menu URL slug
- Choose theme (light/dark/auto)
- Enable popular items section
- Add online ordering link (optional)
- Mobile preview in real-time
- Publish menu

### Step 5: Share
- Copy menu link
- Download QR code
- Quick guides for:
  - Instagram bio
  - Google Business Profile
  - Printable table tents
- Optional team invites

## State Management

Global state is managed with Zustand (`lib/store.ts`):

```typescript
const { 
  currentStep,           // 1-5
  restaurant,            // Selected restaurant
  images,                // Yelp images
  menuDraft,             // Extracted menu
  settings,              // Menu customization
  // ... actions
} = useOnboardingStore();
```

## Mock Data

All data is mocked for UI development:

- **Restaurant search**: Returns 3 sample restaurants
- **Image fetch**: Returns 6 sample images (4 menu, 2 food)
- **Menu extraction**: Returns 4 categories, 15 items total
- **Review queue**: 4 items flagged for review
- **API delays**: Realistic 400-3000ms delays

## Design System

### Colors
- **Primary**: Indigo 600 (trust, business)
- **Success**: Green 600 (published, live)
- **Warning**: Amber 600 (needs review)
- **Neutrals**: Slate scale

### Typography
- System font stack (clean, readable)
- Font weights: 400 (regular), 600 (semibold), 700 (bold)

### Components
All using shadcn/ui patterns:
- Buttons with hover states
- Cards with borders/shadows
- Inputs with focus rings
- Badges for status indicators
- Toast notifications (ready to add)

### Mobile-First
- Sticky bottom CTA bars on mobile
- Responsive grids (1 col mobile → 2-4 cols desktop)
- Touch-friendly tap targets (44px min)
- Progress bar on mobile, full stepper on desktop

## Key Features

✅ **Trust & Transparency**
- Clear data sources ("From public Yelp reviews")
- Privacy controls (blur faces toggle)
- User approval required before publishing

✅ **Speed & Simplicity**
- 5-step wizard with clear progress
- Smart defaults (auto-generated slug, theme)
- Review queue highlights issues

✅ **Control**
- Inline editing for all menu items
- Category management
- Add/remove items

✅ **Polish**
- Loading states with spinners
- Disabled states with clear messaging
- Success animations
- Error handling placeholders

## Backend Integration Points

When connecting to real backend, replace mock functions in `lib/mockApi.ts`:

### 1. `searchRestaurants(query)`
→ Real Yelp/Google Business API search

### 2. `fetchYelpImages(restaurantId)`
→ Scrape Yelp reviews for menu photos

### 3. `generateMenuDraft(restaurantId, imageIds)`
→ OCR + LLM extraction pipeline

### 4. `saveMenuDraft(draft)`
→ Persist to database

### 5. `publishMenu(draftId, settings)`
→ Generate static menu page + QR code

### 6. `checkSlugAvailability(slug)`
→ Database uniqueness check

### 7. `sendTeamInvites(emails)`
→ Email service integration

## Copy Tone

✅ **Do:**
- "We found your menu photos"
- "You approve before publishing"
- "Update anytime"
- "May help increase orders"

❌ **Don't:**
- "AI-powered extraction" (users don't care)
- "Will boost sales 10x" (overpromising)
- Complex technical jargon
- Pushy upsells

## Testing Checklist

- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)
- [ ] Desktop Chrome
- [ ] Desktop Safari
- [ ] Keyboard navigation
- [ ] Screen reader (basic ARIA)
- [ ] Slow 3G network simulation
- [ ] All 5 steps complete flow
- [ ] Back button behavior
- [ ] Browser refresh handling

## Future Enhancements

- [ ] Photo upload (if no Yelp images)
- [ ] Multi-language menu support
- [ ] Analytics dashboard
- [ ] Menu photo upload
- [ ] Dietary filters (vegan, GF, etc.)
- [ ] Price range indicators
- [ ] Hours of operation display
- [ ] Social proof (review count)

## Questions?

Update this README as you learn what works. This is your onboarding system—make it yours.

---

**Built with:** Next.js 16 · TypeScript · Tailwind CSS · Zustand · Framer Motion · Lucide Icons
