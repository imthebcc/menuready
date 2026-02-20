# MenuReady - Product Vision Prompt

## Core Concept

Build a web app that helps local restaurants (who don't have digital menus) get one in under 5 minutes, completely free.

**The insight:** Half of local restaurants have menu photos scattered across Yelp reviews from customers. We find those photos, extract the menu using OCR/LLM, and give the owner a polished digital menu they can share immediately.

**The magic:** The owner doesn't upload anything. We've already done the work. They just claim it, verify it, and publish.

## Target User

**Restaurant owner, age 40-60, 2-3 person crew, non-technical**

- Busy, skeptical of tech solutions
- Has a physical menu but no digital presence
- Knows they "should" have online ordering/digital menus but hasn't prioritized it
- Already has a Yelp page with review photos
- Values control and simplicity over features

**User Mindset:**
- "I don't have time for this"
- "Will this actually work?"
- "Can I trust you with my menu?"
- "What if it's wrong?"

## App Experience (5-Minute Flow)

### 1. Discovery (30 seconds)
Landing page message: **"Your menu is already on Yelp. We'll digitize it for free."**

Simple promise:
- We found menu photos from your Yelp reviews
- We extracted your menu items automatically
- Check it, fix anything, publish it
- Get a shareable link + QR codes

**CTA:** "Find My Restaurant" (not "Sign up" - no account yet)

### 2. Identify (1 minute)
**Search by:**
- Restaurant name + city
- OR phone number (fast verify)

**Show results:**
- Restaurant name, address, cuisine type
- "Select this one" → Continue

**No login yet.** Reduce friction. Trust comes later.

### 3. Sources (1 minute)
**Show them the evidence:**
- "We found 6 menu photos from public Yelp reviews"
- Grid of images with dates
- Label: "Menu photo" vs "Food photo"

**Filters:**
- Hide food photos (show only menu)
- Blur faces (privacy respect)

**Trust builder:** "All images are from public reviews. You control what happens next."

**CTA:** "Generate My Menu Draft" (loading: 2-3 seconds)

### 4. Review Menu (2 minutes - most important)
**Two-pane layout:**
- **Left:** Extracted menu (categories, items, prices, descriptions)
- **Right:** Confidence signals + review queue

**Show confidence:**
- ✅ High confidence items (clean, good)
- ⚠️ Medium confidence (minor issues)
- ❌ Low confidence (needs review)

**Review queue (top priority):**
- "4 items need your attention"
- Show: Item name, issue, suggestion
- Quick fix: inline editing or "Mark as fixed"

**Inline editing:**
- Click item → edit name, description, price
- Add/remove items
- Drag to reorder (optional)

**Cannot proceed until:** Review queue is resolved (or acknowledged)

**Tone:** "You're in control. We did the heavy lifting, you approve."

### 5. Customize (1 minute)
**Settings:**
- **Menu URL slug:** `menuready.app/m/[your-restaurant-name]`
  - Auto-generated from restaurant name
  - Check availability (green check / red X)
- **Theme:** Light / Dark / Auto
- **Popular items section:** Checkbox (on by default)
- **Online ordering link:** Optional URL input

**Live mobile preview:**
- Show exactly what customers will see
- Updates in real-time as they change settings
- Phone mockup (realistic, not flashy)

**CTA:** "Publish Menu" (not "Save draft")

### 6. Share (Success!)
**Celebrate:** "Your menu is live! 🎉"

**Give them tools:**
1. **Menu link** (big, copyable, prominent)
   - "Copy Link" button
   - "View Live Menu" button
2. **QR code** (visual, downloadable)
   - "Download QR Code" button
   - "Print Table Tents" guide
3. **Quick share guides:**
   - Instagram bio (step-by-step)
   - Google Business Profile (step-by-step)
   - Table tents (printable template)

**Optional:** "Invite your team" (email inputs, send access)

**Next CTA:** "View Dashboard" (analytics, update menu)

## Design Principles

### 1. Trust Through Transparency
- Always show where data came from ("From public Yelp reviews on [date]")
- Explain what you did ("We extracted 27 items from 6 photos")
- Give control ("You can edit anything before publishing")

### 2. Speed Through Smart Defaults
- Auto-generate slug from restaurant name
- Pre-select sensible settings (theme: auto, popular items: on)
- Don't ask questions unless necessary
- One path, clear steps, no branches

### 3. No Jargon, No Hype
- "Menu photos" not "training data"
- "Review and fix" not "validate extraction accuracy"
- "Publish" not "deploy to production"
- Avoid: AI, ML, OCR, algorithm, platform, ecosystem

### 4. Mobile-First (70% of users are on phones)
- Every screen must be thumb-friendly
- Sticky bottom CTAs on mobile
- Large tap targets (44px minimum)
- One-column layouts on small screens

### 5. Respect Their Time
- Progress indicator (know how far they are)
- Autosave (never lose work)
- Skip optional steps
- Clear "What's next?" at each step

## Key Metrics to Track

**Completion rate:**
- % who start → % who publish
- Where do they drop off?

**Time to publish:**
- Target: <5 minutes
- Current: measure per step

**Review queue engagement:**
- % who fix all items
- % who skip/ignore

**Share actions:**
- Link copied?
- QR downloaded?
- Team invited?

## What This Is NOT

❌ **NOT a menu management SaaS**
- No monthly subscription
- No login required upfront
- No dashboard features initially
- No analytics (yet)

❌ **NOT a complex design tool**
- No custom fonts, colors, layouts
- No page builder
- No drag-and-drop menu editor (keep it simple)

❌ **NOT branded as "AI-powered"**
- Users don't care about the tech
- They care: "Does it work? Can I trust it?"

## Success = Speed + Trust + Control

**Speed:** 5 minutes from landing → published menu
**Trust:** Show sources, explain process, no hidden steps
**Control:** They approve everything before it goes live

---

**This is the experience. Build everything to serve this flow.**
