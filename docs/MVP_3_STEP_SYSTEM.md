# MenuReady MVP - 3-Step System

**Philosophy:** Speed > Features | Clarity > Complexity | Launch > Perfect

---

## 1. THREE-STEP FLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                         STEP 1: PREVIEW                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ LANDING PAGE (/)                                             │
│                                                              │
│ "We already built your digital menu"                        │
│                                                              │
│ ✓ Revenue positioning                                       │
│ ✓ Before/After visual                                       │
│ ✓ CTA: "Preview My Menu (Free)"                            │
│                                                              │
│                  [ Preview My Menu (Free) ] ←────────────┐  │
└────────────────────────────┬─────────────────────────────┘  │
                             │                                  │
                             ▼                                  │
┌──────────────────────────────────────────────────────────────┐ │
│ PREVIEW SCREEN (/preview/sunrise-diner)                      │ │
│                                                              │ │
│ ┌────────────────────────┐  ┌──────────────────────────┐   │ │
│ │ DIGITIZED MENU         │  │ REVENUE BENEFITS         │   │ │
│ │                        │  │                          │   │ │
│ │ Sunrise Diner          │  │ ✓ Higher order values    │   │ │
│ │ Orange, CA             │  │ ✓ Better reviews         │   │ │
│ │                        │  │ ✓ Boost retention        │   │ │
│ │ [Editable inline]      │  └──────────────────────────┘   │ │
│ │                        │                                  │ │
│ │ Breakfast              │  ┌──────────────────────────┐   │ │
│ │ Classic Pancakes $8.99 │  │  CHOOSE YOUR PATH:       │   │ │
│ │ Sunrise Special $12.99 │  │                          │   │ │
│ │                        │  │  [Publish Free]          │   │ │
│ │ Lunch                  │  │  Instant link + QR       │   │ │
│ │ Classic Burger $13.99  │  │                          │   │ │
│ └────────────────────────┘  │  [Done-For-You $49]      │   │ │
│                             │  We submit to Yelp       │   │ │
│                             └──────────────────────────┘   │ │
└────────────┬─────────────────────────┬──────────────────────┘ │
             │                         │                          │
             │ FREE                    │ PAID                     │
             ▼                         ▼                          │
                                                                  │
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                        STEP 2: GO LIVE                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌────────────────────────┐        ┌──────────────────────────────┐
│ FREE PATH              │        │ PAID PATH                    │
│                        │        │                              │
│ Modal popup:           │        │ Redirect to:                 │
│                        │        │ Stripe Checkout              │
│ 1. Email input         │        │                              │
│    ________________    │        │ Product: $49                 │
│                        │        │ "Done-For-You Yelp Submit"   │
│ 2. Checkbox            │        │                              │
│    ☐ I own/manage      │        │ [Pay with Card]              │
│       this business    │        │                              │
│                        │        │ After payment:               │
│ [Publish Now]          │        │ → Redirect to confirmation   │
│                        │        │ → Webhook: status = "paid"   │
│ Instant:               │        │ → Email notification to Remi │
│ - Generate live URL    │        │                              │
│ - Create QR code       │        │                              │
│ - Show confirmation    │        │                              │
└────────────┬───────────┘        └──────────────┬───────────────┘
             │                                   │
             └───────────────┬───────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    STEP 3: SUPPORT & GROW                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ CONFIRMATION SCREEN (/published)                             │
│                                                              │
│ ✓ You're Live!                                              │
│                                                              │
│ Your menu: menuready.com/sunrise-diner                      │
│ [Copy Link]                                                 │
│                                                              │
│ Download QR Code                                            │
│ [Download High-Res QR]                                      │
│                                                              │
│ Need help?                                                  │
│ [Contact Support]                                           │
│                                                              │
│ {If paid: "We'll submit to Yelp within 48 hours"}         │
└──────────────────────────────────────────────────────────────┘

                    │
                    ▼
        ┌───────────────────────┐
        │ SUPPORT OPTIONS       │
        │                       │
        │ • Contact form        │
        │ • Chat widget         │
        │ • Email support       │
        └───────────────────────┘
```

---

## 2. SIMPLIFIED PAGE STRUCTURE

### 4 Pages Total

**Page 1: Landing (`/`)**
- Hero with revenue positioning
- Before/After visual
- Revenue benefits
- How it works (3 steps)
- CTA: "Preview My Menu (Free)"

**Page 2: Preview (`/preview/[restaurant-slug]`)**
- Restaurant menu (editable inline)
- Revenue benefits sidebar
- Two CTAs: Publish Free | Done-For-You $49
- No login required

**Page 3: Confirmation (`/published`)**
- "You're Live" message
- Live link + copy button
- QR code download
- Contact support button
- {If paid: Yelp submission timeline}

**Page 4: Contact (`/contact`)**
- Contact form
- Chat widget
- FAQ (optional)

**REMOVED:**
- Dashboard page
- Multi-step wizard
- Account creation flow
- Complex onboarding

---

## 3. CLEAN PUBLISH LOGIC

### Free Path Flow

```javascript
// User clicks "Publish Free" button

1. Show modal with:
   - Email input field
   - "I own/manage this business" checkbox
   
2. On submit:
   - Validate email
   - Validate checkbox checked
   
3. Backend:
   - Create restaurant record in database
   - Generate unique slug
   - Set status = "published_free"
   - Generate QR code
   - Store email for follow-up
   
4. Redirect to /published with:
   - Live URL
   - QR code download link
   - Support CTA
```

### Paid Path Flow

```javascript
// User clicks "Done-For-You $49" button

1. Redirect to Stripe Checkout:
   - Product: "Done-For-You Yelp Submission"
   - Price: $49
   - Success URL: /published?session_id={CHECKOUT_SESSION_ID}
   - Cancel URL: /preview/[slug]
   
2. After payment:
   - Stripe webhook triggers
   - Update database: status = "paid"
   - Send email to Remi: "New paid customer - Yelp submission needed"
   - Store payment info
   
3. Redirect to /published with:
   - Live URL
   - QR code download
   - "We'll submit to Yelp within 48 hours" message
```

### Database Schema (Minimal)

```sql
-- Single table for MVP
CREATE TABLE restaurants (
  id UUID PRIMARY KEY,
  slug TEXT UNIQUE,
  name TEXT,
  location TEXT,
  menu_json JSONB,
  contact_email TEXT,
  status TEXT, -- "preview", "published_free", "paid"
  stripe_session_id TEXT,
  created_at TIMESTAMP,
  published_at TIMESTAMP
);
```

### Status Flow

```
preview → published_free → [manual update to paid if upgraded]
preview → paid → [Remi handles Yelp submission]
```

---

## 4. REDUCED TECHNICAL ROADMAP

### Day 1-2: Core Pages

**Build:**
1. `/preview/[slug]` page
   - Fetch menu from database
   - Display menu (editable inline)
   - Two CTA buttons
   
2. `/published` confirmation page
   - Display live link
   - QR code generation
   - Copy button
   - Support CTA

3. `/contact` page
   - Simple form
   - Chat widget embed

**Tech:**
- Next.js 15 (current)
- Supabase (database)
- QR code library (qrcode.react)

---

### Day 3: Publish Flows

**Free Path:**
1. Modal component with email + checkbox
2. API route: `POST /api/publish-free`
   - Validate input
   - Update database
   - Generate QR code
   - Return live URL

**Paid Path:**
1. Stripe Checkout integration
2. API route: `POST /api/create-checkout`
   - Create Stripe session
   - Return checkout URL
3. Webhook handler: `POST /api/stripe-webhook`
   - Handle payment success
   - Update database
   - Send notification email

---

### Day 4: Support Setup

**Implement:**
1. Contact form API: `POST /api/contact`
   - Send email to support@menuready.com
   
2. Chat widget (Crisp or Tawk)
   - Embed on all pages
   - Configure offline messages

3. Email notifications
   - New free publish → Remi
   - New paid customer → Remi
   - Contact form submission → Remi

---

### Day 5: Testing & Polish

**Test:**
1. Free publish flow end-to-end
2. Paid flow (Stripe test mode)
3. QR code generation
4. Email notifications
5. Contact form
6. Mobile responsiveness

**Polish:**
1. Error handling
2. Loading states
3. Success messages
4. Email templates

---

## 5. UPDATED LAUNCH CHECKLIST

### Pre-Launch (Day 1-5)

**Technical:**
- [ ] Supabase database set up
- [ ] `/preview/[slug]` page functional
- [ ] Free publish modal working
- [ ] Stripe checkout integration complete
- [ ] QR code generation working
- [ ] `/published` confirmation page live
- [ ] Contact form sending emails
- [ ] Chat widget embedded
- [ ] Webhook handler for Stripe working
- [ ] Email notifications configured

**Content:**
- [ ] 10 restaurant menus digitized
- [ ] Menu JSON stored in database
- [ ] Preview links generated
- [ ] Outreach email template ready

**Operations:**
- [ ] `support@menuready.com` forwarding to Remi
- [ ] Stripe account configured (live mode)
- [ ] Spreadsheet tracker created
- [ ] Chat widget monitored

---

### Launch Day (Day 6)

**Morning:**
- [ ] Final smoke test (free + paid flows)
- [ ] Verify email notifications working
- [ ] Send 10 outreach emails with preview links

**Throughout Day:**
- [ ] Monitor chat widget
- [ ] Check support inbox every 2 hours
- [ ] Track clicks in spreadsheet
- [ ] Respond to inquiries within 2 hours

**Evening:**
- [ ] Review metrics:
  - Emails sent: __
  - Preview views: __
  - Free publishes: __
  - Paid upgrades: __
- [ ] Document any issues
- [ ] Plan next day

---

### Week 1 Post-Launch (Day 7-13)

**Daily Tasks:**
- [ ] Check support inbox AM & PM
- [ ] Monitor Stripe dashboard
- [ ] Process Yelp submissions (paid customers)
- [ ] Send 2-3 new outreach emails
- [ ] Update tracking spreadsheet

**End of Week:**
- [ ] Calculate conversion rates:
  - Preview view rate
  - Free publish rate
  - Paid upgrade rate
- [ ] Collect customer feedback
- [ ] Identify quick improvements
- [ ] Plan next 10 restaurants

---

## SUCCESS METRICS (Week 1)

**Primary Goal:**
- **1 paid upgrade = $49 revenue**

**Secondary Goals:**
- 10 preview views
- 2-3 free publishes
- 0 critical bugs
- <24h support response time

**Minimum Viable Success:**
- 1 free publish
- 1 paid customer
- No major issues

---

## BACKEND OPERATIONS (Manual)

### Spreadsheet Tracker

| Restaurant | Email Sent | Preview Viewed | Status | Revenue | Notes |
|------------|-----------|----------------|--------|---------|-------|
| Sunrise Diner | 2/20 | Yes | Paid | $49 | Yelp submitted 2/22 |
| Joe's Cafe | 2/20 | Yes | Free | $0 | Published 2/21 |
| Main Street Grill | 2/20 | No | Lead | $0 | Follow up 2/23 |

**Status tags:**
- Lead
- Preview sent
- Published (Free)
- Paid
- Support

---

## TECH STACK (Final)

**Frontend:**
- Next.js 15
- Tailwind CSS
- Framer Motion
- Remix Icons

**Backend:**
- Supabase (database)
- Stripe (payments)
- Resend or SendGrid (email)

**Support:**
- Crisp or Tawk (chat)
- Contact form → email

**Hosting:**
- Vercel (frontend)

**Total Monthly Cost:** ~$50

---

## WHAT WE'RE NOT BUILDING

❌ User dashboard  
❌ Account management  
❌ Password reset flow  
❌ Menu editing portal  
❌ Analytics dashboard  
❌ CRM integration  
❌ Automated email sequences  
❌ Complex admin panel  

**Why?** Not needed for 10-20 customer pilot.

---

## WHEN TO ADD FEATURES

**After 20 customers:**
- User dashboard (if requested)
- Menu editing interface

**After 50 customers:**
- Automated Yelp submissions (if API available)
- Email sequences

**After 100 customers:**
- Full CRM
- Advanced analytics

---

## LAUNCH READINESS

**Ready to build when:**
- [ ] This spec approved by Tim
- [ ] Database choice confirmed (Supabase vs Airtable)
- [ ] Chat widget choice confirmed (Crisp vs Tawk)
- [ ] Email service confirmed (Resend vs SendGrid)

**Can launch in:** 5 days after approval

---

**Last Updated:** 2026-02-20  
**Owner:** Remi  
**Status:** Awaiting approval
