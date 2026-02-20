# MenuReady Onboarding UI – v2 (Proactive Yelp-First Flow)

## Core Shift From v1

In v1, the user generated their menu.

In v2, the work is already done.

We proactively:
- Found public Yelp review photos
- Identified menu images
- Extracted menu items
- Built a draft

The onboarding now communicates:
“We already did this for you. Just review and approve.”

Less work from owner.
More done-for-you positioning.
Higher trust.
Higher conversion.

---

## Updated 5-Step Flow

### Step 1 – Discovery

Headline:
Your menu is already on Yelp. We digitized it for you.

Subtext:
We found public Yelp review photos and created a draft menu. Review it and publish in minutes.

CTA:
Find My Restaurant

No login required.

---

### Step 2 – Identify

Search by:
- Restaurant name + city
- OR phone number

Show:
- Restaurant info
- Yelp rating
- Badge: “We found X menu photos”

CTA:
Continue

---

### Step 3 – Sources (Proof & Trust)

Title:
We found these menu photos on public Yelp reviews.

Show:
- Grid of menu images
- Source attribution (public review + date)
- Toggle: Hide non-menu photos
- Toggle: Blur faces

Trust copy:
All images are public. You control what happens next.

CTA:
View My Draft Menu

---

### Step 4 – Review Draft (Core Conversion Step)

Tone:
We did the heavy lifting. You approve.

Layout:
Mobile-first single column
Desktop two-pane

Show:
- Extracted categories and items
- Confidence badges:
  - High
  - Medium
  - Needs Review

Review queue:
Show flagged items clearly at top.
Require resolution OR explicit acknowledgement.

Gating rule:
Cannot publish until review queue is resolved or acknowledged.

Inline editing required.

CTA:
Approve Draft

---

### Step 5 – Customize + Yelp Upload Service (Upsell)

Menu URL slug (auto generated)
Theme selection
Popular items toggle
Online ordering link

NEW:
Yelp Upload Service card

Title:
Let us publish this directly to your Yelp page.

Description:
We handle the formatting and submission so you don’t have to.

Show price (mock for now).

Two paths:
- Publish Menu (DIY)
- Publish + Request Yelp Upload

Mock payment modal (no real Stripe yet).

---

### Step 6 – Success / Share

Celebrate.
Show:
- Live menu link
- Copy link button
- QR code download
- Share guides

Optional:
Invite team.

---

## UX Principles

1. Less friction.
2. Show proof.
3. Require minimal work.
4. Conversion-focused CTAs.
5. Mobile-first.

---

## Design Adjustments

- Cleaner UI.
- Use Yelp photo previews tastefully (blurred hero background optional).
- Add motion (Framer Motion stagger + subtle transitions).
- Sticky mobile CTA bar.
- Confidence indicators visually stronger.
- Upsell card visually distinct but not aggressive.

---

## Conversion Objective

Primary goal:
Menu published.

Secondary goal:
Yelp Upload Service selected.

---

## Technical Direction

Refactor existing onboarding implementation.
Do NOT rebuild from scratch.

Update:
- StepSources
- StepReview (gating + confidence UI)
- StepCustomize (add Yelp upload card)
- Analytics event logging

Maintain mock data structure.
No real backend yet.
