# MenuReady UI/UX Flow Map

**For Claude Review:** What to build next + complete user experience

---

## CURRENT STATE (WHAT EXISTS NOW)

### ✅ BUILT & LIVE

**Page 1: Landing Page (`/`)**
- ✅ Hero with revenue positioning
- ✅ Before/After visual proof (6 custom menu photos)
- ✅ Revenue benefits section
- ✅ How it works (3 steps)
- ✅ Final CTA
- ✅ Contact link in nav + footer
- ✅ Deployed: https://menuready-template.vercel.app

**Page 2: Contact (`/contact`)**
- ✅ Contact form (Web3Forms integration)
- ✅ Email submission working
- ✅ Success/error states

**Page 3: Onboarding (Placeholder) (`/onboarding`)**
- ✅ Exists but empty
- ❌ Not built yet (needs to become Preview page)

**Backend:**
- ✅ Data structure defined (`menu.json` format)
- ✅ Example restaurant digitized (Harbor Diner)
- ✅ Tracking spreadsheet template
- ✅ SOP documentation

---

## WHAT NEEDS TO BE BUILT (PRIORITY ORDER)

### 🔴 PRIORITY 1: Preview Page (CRITICAL PATH)

**Why first:** This is what customers see when they click the link. Without this, we can't send any outreach.

**Route:** `/preview/[restaurant-slug]`

**Example:** `/preview/harbor-diner-huntington-beach`

---

### 🔴 PRIORITY 2: Free Publish Flow (CONVERSION PATH)

**Why second:** Once they see the preview, they need a way to publish for free.

**Components:**
- Modal on preview page
- Email input + checkbox
- Database write
- Redirect to confirmation

---

### 🔴 PRIORITY 3: Confirmation Page (COMPLETION)

**Why third:** After publishing, they need their link + QR code.

**Route:** `/published`

---

### 🟡 PRIORITY 4: Paid Upgrade Flow (REVENUE)

**Why fourth:** After free path works, add paid option.

**Components:**
- Stripe checkout
- Webhook handler
- Paid confirmation

---

## COMPLETE USER FLOW (WITH SCREENSHOTS NEEDED)

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  STEP 1: DISCOVERY (Email/Yelp Message/Instagram)             │
│                                                                │
│  Restaurant owner receives:                                   │
│  "I built your digital menu. Preview it free: [LINK]"        │
│                                                                │
└────────────┬───────────────────────────────────────────────────┘
             │
             │ CLICKS LINK
             ▼
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  PAGE 1: LANDING PAGE (/)                          ✅ BUILT   │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │ Header: MenuReady logo | Need help? (contact link)      │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │ Trust Bar: 847 menus | 91% publish | Built from Yelp   │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │ Hero:                                                    │ │
│  │ "We already built your digital menu"                   │ │
│  │ "Your menu is already built. Just review it and make   │ │
│  │  it live — free."                                       │ │
│  │                                                          │ │
│  │ [Preview My Menu (Free)] ← PRIMARY CTA                 │ │
│  │ No credit card. Takes seconds.                          │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │ Before/After Visual (6 menu photos vs clean digital)    │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │ Revenue Benefits (6 cards)                              │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │ How It Works (3 steps)                                  │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │ Final CTA: "See My Menu Draft (Free)"                  │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │ Footer: Contact | Privacy | Terms                       │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  CTA DESTINATION: /preview/[restaurant-slug] (NOT BUILT YET)  │
│                                                                │
└────────────┬───────────────────────────────────────────────────┘
             │
             │ CLICKS "Preview My Menu (Free)"
             ▼
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  PAGE 2: PREVIEW PAGE                          ❌ NOT BUILT   │
│  /preview/harbor-diner-huntington-beach                       │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │ Header: MenuReady logo | [Back to Home]                 │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │ Restaurant Info Bar:                                     │ │
│  │ "Harbor Diner - Huntington Beach, CA"                   │ │
│  │ "Preview your digital menu built from Yelp photos"      │ │
│  │                                                          │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │ LEFT: LIVE MENU PREVIEW                RIGHT: ACTIONS   │ │
│  │ ┌────────────────────┐  ┌──────────────────────────┐   │ │
│  │ │ Harbor Diner       │  │ REVENUE BENEFITS        │   │ │
│  │ │ Huntington Beach   │  │                          │   │ │
│  │ │                    │  │ ✓ Higher order values    │   │ │
│  │ │ BREAKFAST          │  │ ✓ Better reviews         │   │ │
│  │ │                    │  │ ✓ Boost retention        │   │ │
│  │ │ Classic Breakfast  │  └──────────────────────────┘   │ │
│  │ │ $11.99             │                                  │ │
│  │ │ Two eggs, bacon... │  ┌──────────────────────────┐   │ │
│  │ │                    │  │ CHOOSE YOUR PATH:        │   │ │
│  │ │ Pancake Stack      │  │                          │   │ │
│  │ │ $9.99              │  │ [Publish Free]           │   │ │
│  │ │ Three fluffy...    │  │ Get link + QR instantly  │   │ │
│  │ │                    │  │                          │   │ │
│  │ │ LUNCH              │  │ [Done-For-You $49]       │   │ │
│  │ │                    │  │ We submit to Yelp        │   │ │
│  │ │ Classic Burger     │  └──────────────────────────┘   │ │
│  │ │ $13.99             │                                  │ │
│  │ │ Half-pound beef... │  Source:                        │ │
│  │ └────────────────────┘  6 Yelp photos • 19 items       │ │
│  │                                                          │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  FEATURES NEEDED:                                             │
│  - Fetch menu.json from database                             │
│  - Display all categories + items                            │
│  - Mobile responsive (menu scrolls, sidebar sticky)          │
│  - Two CTA buttons (Free vs Paid)                            │
│                                                                │
└────────────┬───────────────────────────────────────────────────┘
             │
             │ CLICKS "Publish Free"
             ▼
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  MODAL: FREE PUBLISH                           ❌ NOT BUILT   │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │                                                          │ │
│  │  Publish Your Menu (Free)                               │ │
│  │                                                          │ │
│  │  Email:                                                  │ │
│  │  [____________________]                                 │ │
│  │                                                          │ │
│  │  ☐ I own or manage Harbor Diner                        │ │
│  │                                                          │ │
│  │  [Cancel]  [Publish Now]                                │ │
│  │                                                          │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  BACKEND LOGIC NEEDED:                                        │
│  - Validate email format                                      │
│  - Validate checkbox checked                                  │
│  - Create record in database:                                │
│    - restaurant_id                                            │
│    - email                                                     │
│    - slug                                                      │
│    - status = "published_free"                               │
│  - Generate live URL: menuready.com/[slug]                   │
│  - Generate QR code                                           │
│  - Redirect to /published?slug=[slug]                        │
│                                                                │
└────────────┬───────────────────────────────────────────────────┘
             │
             │ SUBMITS FORM
             ▼
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  PAGE 3: CONFIRMATION                          ❌ NOT BUILT   │
│  /published?slug=harbor-diner-huntington-beach                │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │ Header: MenuReady logo                                   │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │  ✓ You're Live!                                         │ │
│  │                                                          │ │
│  │  Your menu is now published and ready to share.         │ │
│  │                                                          │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │  Your Live Link:                                         │ │
│  │  menuready.com/harbor-diner-huntington-beach            │ │
│  │  [Copy Link]                                            │ │
│  │                                                          │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │  Download QR Code:                                       │ │
│  │  ┌──────────┐                                           │ │
│  │  │  QR CODE │                                           │ │
│  │  │  [IMAGE] │                                           │ │
│  │  └──────────┘                                           │ │
│  │  [Download High-Res QR]                                 │ │
│  │                                                          │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │  What's Next?                                            │ │
│  │  • Share your link on social media                      │ │
│  │  • Print QR code for tables                             │ │
│  │  • Add to Google Business Profile                       │ │
│  │                                                          │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │  Need Help?                                              │ │
│  │  [Contact Support]                                       │ │
│  │                                                          │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  FEATURES NEEDED:                                             │
│  - Fetch restaurant data from database                       │
│  - Display live URL                                           │
│  - Generate QR code (qrcode.react library)                   │
│  - Copy to clipboard button                                   │
│  - QR code download (as PNG)                                 │
│  - Link to contact page                                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘


┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ALTERNATE PATH: PAID UPGRADE                  ❌ NOT BUILT   │
│                                                                │
└────────────────────────────────────────────────────────────────┘

If user clicks "Done-For-You $49" on Preview page:

┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  REDIRECT: STRIPE CHECKOUT                     ❌ NOT BUILT   │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │ Stripe Hosted Checkout                                   │ │
│  │                                                          │ │
│  │ MenuReady - Done-For-You Yelp Submission                │ │
│  │ $49.00                                                   │ │
│  │                                                          │ │
│  │ We'll digitize your menu and submit it to Yelp within   │ │
│  │ 48 hours. You'll get your live link + QR code           │ │
│  │ immediately.                                             │ │
│  │                                                          │ │
│  │ [Pay with Card]                                         │ │
│  │                                                          │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  BACKEND LOGIC NEEDED:                                        │
│  - API route: /api/create-checkout                           │
│  - Create Stripe checkout session                            │
│  - Pass restaurant_slug in metadata                          │
│  - Success URL: /published?slug=[slug]&paid=true            │
│  - Cancel URL: /preview/[slug]                               │
│                                                                │
└────────────┬───────────────────────────────────────────────────┘
             │
             │ COMPLETES PAYMENT
             ▼
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  WEBHOOK: STRIPE PAYMENT SUCCESS               ❌ NOT BUILT   │
│                                                                │
│  BACKEND LOGIC:                                               │
│  - API route: /api/stripe-webhook                            │
│  - Listen for checkout.session.completed                     │
│  - Extract restaurant_slug from metadata                     │
│  - Update database: status = "paid"                          │
│  - Store stripe_session_id                                   │
│  - Send email to Remi: "New paid customer - [slug]"         │
│  - Generate live URL + QR code                               │
│                                                                │
└────────────┬───────────────────────────────────────────────────┘
             │
             │ REDIRECT TO CONFIRMATION
             ▼
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  PAGE 3: PAID CONFIRMATION                     ❌ NOT BUILT   │
│  /published?slug=harbor-diner&paid=true                       │
│                                                                │
│  (Same as free confirmation, but with additional message)     │
│                                                                │
│  ✓ You're Live!                                               │
│                                                                │
│  Your menu is published. We'll submit it to Yelp within       │
│  48 hours.                                                     │
│                                                                │
│  [Live Link + QR Code same as free path]                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## TECHNICAL COMPONENTS NEEDED

### 1. DATABASE (Supabase)

**Table: `restaurants`**
```sql
CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  menu_json JSONB NOT NULL,
  contact_email TEXT,
  status TEXT NOT NULL, -- 'preview', 'published_free', 'paid'
  stripe_session_id TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  published_at TIMESTAMP
);
```

**Seed data:**
- Harbor Diner (already have menu.json)

---

### 2. API ROUTES

**`/api/restaurants/[slug]`** (GET)
- Fetch restaurant by slug
- Return menu_json + metadata
- Public route (no auth)

**`/api/publish-free`** (POST)
- Input: { email, slug, confirm_ownership }
- Validate inputs
- Update restaurant status
- Generate QR code
- Return: { success, live_url, qr_code }

**`/api/create-checkout`** (POST)
- Input: { slug }
- Create Stripe checkout session
- Set metadata: { restaurant_slug }
- Return: { checkout_url }

**`/api/stripe-webhook`** (POST)
- Handle checkout.session.completed
- Update database status = 'paid'
- Send notification email
- Return 200 OK

---

### 3. PAGES TO BUILD

**`/preview/[slug].tsx`**
- Dynamic route
- Fetch menu from API
- Display menu preview
- Two CTA buttons
- Mobile responsive

**`/published.tsx`**
- Query params: ?slug=xxx&paid=true
- Fetch restaurant data
- Generate QR code
- Copy link button
- Download QR button

---

### 4. COMPONENTS

**`<MenuPreview />`**
- Display categories + items
- Clean typography
- Mobile-first layout

**`<PublishFreeModal />`**
- Email input
- Checkbox validation
- Submit handler
- Loading state

**`<QRCodeDisplay />`**
- Generate QR from URL
- Download as PNG
- High-res (300 DPI)

---

## BUILD ORDER (STEP-BY-STEP)

### WEEK 1: CORE FUNCTIONALITY

**Day 1: Database + API**
- [ ] Set up Supabase project
- [ ] Create `restaurants` table
- [ ] Seed Harbor Diner data
- [ ] Build `/api/restaurants/[slug]` endpoint
- [ ] Test API with Postman

**Day 2: Preview Page**
- [ ] Create `/preview/[slug].tsx`
- [ ] Fetch data from API
- [ ] Build `<MenuPreview />` component
- [ ] Style mobile-first
- [ ] Add two CTA buttons (no functionality yet)

**Day 3: Free Publish Flow**
- [ ] Build `<PublishFreeModal />` component
- [ ] Create `/api/publish-free` endpoint
- [ ] Connect modal to API
- [ ] Handle success/error states
- [ ] Test end-to-end

**Day 4: Confirmation Page**
- [ ] Create `/published.tsx`
- [ ] Build `<QRCodeDisplay />` component
- [ ] Add copy link button
- [ ] Add download QR button
- [ ] Test with Harbor Diner

**Day 5: Testing & Polish**
- [ ] Test full free flow end-to-end
- [ ] Mobile testing
- [ ] Error handling
- [ ] Loading states
- [ ] Deploy to Vercel

---

### WEEK 2: PAID FLOW

**Day 6: Stripe Setup**
- [ ] Create Stripe account
- [ ] Create product ($49)
- [ ] Get API keys
- [ ] Install Stripe SDK

**Day 7: Checkout Integration**
- [ ] Build `/api/create-checkout`
- [ ] Connect "Done-For-You" button
- [ ] Test in Stripe test mode

**Day 8: Webhook Handler**
- [ ] Build `/api/stripe-webhook`
- [ ] Set up webhook URL in Stripe
- [ ] Test payment success flow
- [ ] Email notification to Remi

**Day 9: Paid Confirmation**
- [ ] Update `/published.tsx` for paid
- [ ] Add Yelp submission message
- [ ] Test complete paid flow

**Day 10: Launch**
- [ ] Switch Stripe to live mode
- [ ] Final testing
- [ ] Deploy to production
- [ ] Send first outreach

---

## SUCCESS METRICS

**Week 1 (Free Flow):**
- [ ] 1 preview viewed
- [ ] 1 free publish completed
- [ ] QR code downloaded

**Week 2 (Paid Flow):**
- [ ] 1 paid customer ($49)
- [ ] Yelp submission completed
- [ ] Customer satisfied

---

## DEPENDENCIES

**Must have:**
- Supabase account (database)
- Stripe account (payments)
- Web3Forms access key (contact form) ✅ DONE

**Nice to have:**
- Custom domain (menuready.com)
- SendGrid/Resend (email notifications)

---

## FILES TO REFERENCE

**Current code:**
- `app/landing-page.tsx` (hero + CTAs)
- `app/contact/page.tsx` (form example)
- `data/restaurants/harbor-diner-huntington-beach/menu.json` (data structure)

**Documentation:**
- `/docs/MVP_3_STEP_SYSTEM.md` (system design)
- `/docs/DIGITIZATION_SOP.md` (backend process)

---

**Last Updated:** 2026-02-20  
**Status:** Ready for build  
**Owner:** Remi + Tim
