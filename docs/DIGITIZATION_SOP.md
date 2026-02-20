# MenuReady Digitization SOP (MVP)

**Goal:** Repeatable process to digitize 10-20 restaurant menus manually  
**Time per restaurant:** 15-20 minutes  
**Roles:** Can be done by one person OR split across team

---

## OVERVIEW

5-step pipeline:
1. **Identify** - Find target restaurants
2. **Collect** - Download menu photos from Yelp
3. **Structure** - Convert photos to JSON
4. **QA** - Quick 5-min quality check
5. **Outreach** - Send preview link

**Track everything in spreadsheet** (template below)

---

## STEP 1: IDENTIFY TARGET RESTAURANTS

### Criteria:
- Orange County, CA (or your target area)
- Yelp rating <4.2 stars (pain point visible)
- Has menu photos in reviews
- Active business (reviews in last 30 days)

### Process:
1. Search Yelp: "restaurants orange county"
2. Filter by rating (3.0-4.1 stars)
3. Click each listing
4. Check "Menu" tab - if no structured menu → GOOD
5. Check reviews for menu photo uploads → If yes → ADD TO SPREADSHEET

### Output:
Add to spreadsheet:
- Restaurant name
- Yelp URL
- City
- Status = "Identified"

**Time:** 5 minutes per restaurant

---

## STEP 2: COLLECT MENU PHOTOS

### What to collect:
- **ONLY** photos of physical menus
- **NO** food photos
- **NO** interior/exterior photos
- **NO** people

### Process:
1. Go to Yelp listing
2. Click "See all photos"
3. Look for user-uploaded menu photos in reviews
4. Download 3-6 menu photos that show:
   - Breakfast section
   - Lunch section
   - Dinner section (if applicable)
   - Different angles/lighting

### Storage:
Create folder structure:
```
/data/restaurants/[restaurant-slug]/
  - photos/
    - menu1.jpg
    - menu2.jpg
    - menu3.jpg
```

Example:
```
/data/restaurants/sunrise-diner-orange-ca/
  - photos/
    - menu1.jpg (breakfast section)
    - menu2.jpg (lunch section)
    - menu3.jpg (full menu)
```

**Time:** 3-5 minutes per restaurant

---

## STEP 3: STRUCTURE MENU DATA

### Tools:
- ChatGPT / Claude (AI text extraction)
- Manual cleanup

### Process:

**A) Upload photos to ChatGPT/Claude**

**Prompt:**
```
Extract the menu from these photos and format as JSON:

{
  "restaurant": "Restaurant Name",
  "location": "City, State",
  "categories": [
    {
      "name": "Breakfast",
      "items": [
        {
          "name": "Classic Pancakes",
          "description": "Three fluffy buttermilk pancakes",
          "price": "8.99"
        }
      ]
    }
  ]
}

Rules:
- Extract ALL items
- Include descriptions if visible
- Prices without $ symbol
- Group by category (Breakfast, Lunch, Dinner, etc.)
```

**B) Copy JSON output**

**C) Save to file:**
```
/data/restaurants/[restaurant-slug]/menu.json
```

**Time:** 5-7 minutes per restaurant

---

## STEP 4: QUALITY ASSURANCE

### Quick 5-minute checklist:

**Check:**
- [ ] All prices correct? (no typos like 8.9 instead of 8.99)
- [ ] No duplicate items?
- [ ] Spelling correct? (pancakes not panakes)
- [ ] Categories make sense? (Breakfast, Lunch, not random)
- [ ] Descriptions accurate?

### Common fixes:
- Missing decimal points in prices
- Duplicate items from multiple photos
- Misspelled words
- Wrong category placement

**Fix in JSON file directly**

**Time:** 5 minutes per restaurant

---

## STEP 5: OUTREACH

### Generate preview link:
Store in database with unique slug:
```
https://menuready-template.vercel.app/preview/[restaurant-slug]
```

Example:
```
https://menuready-template.vercel.app/preview/sunrise-diner-orange-ca
```

### Outreach Method (Choose based on availability):

**OPTION 1: Yelp Message (PREFERRED)**
- Go to restaurant's Yelp page
- Click "Message the Business"
- Use template below

**OPTION 2: Instagram DM**
- Find restaurant's Instagram (@username on Yelp or Google)
- Send DM with template below

**OPTION 3: Contact Form**
- Use website contact form if available

---

### Yelp Message Template:

```
Hi! 👋

I came across your Yelp page and noticed you could benefit from a structured digital menu.

I went ahead and built one for you using your existing menu photos.

Preview it here (free, no signup):
[PREVIEW LINK]

If you like it:
✓ Publish instantly (FREE)
✓ Upgrade to Done-For-You ($49 - I'll submit it to Yelp for you)

Let me know if you have questions!

- [Your Name]
MenuReady
```

---

### Instagram DM Template:

```
Hey [Restaurant Name]! 👋

Saw your page and built you a free digital menu using your existing menu photos from Yelp.

Check it out: [PREVIEW LINK]

You can publish it instantly (free) or I can handle Yelp submission for you ($49).

No strings attached - just want to help local restaurants!

Let me know if you want to see it live 🙌
```

---

### Send method priority:
1. **Yelp message** (best response rate, they check daily)
2. **Instagram DM** (good for younger/modern restaurants)
3. **Contact form** (fallback if above unavailable)

### Update spreadsheet:
- Status = "Contacted"
- Method = "Yelp" or "Instagram" or "Contact Form"
- Date sent

**Time:** 3 minutes per restaurant

---

## ROLE BREAKDOWN

### Option A: Solo (One Person Does All)
**Time:** 15-20 min per restaurant

**Daily capacity:** 3-4 restaurants/day (1 hour total)

---

### Option B: Team Split

**Role 1: Sourcing (Tim)**
- Identify targets
- Download photos
- Time: 8-10 min per restaurant

**Role 2: Structuring (Remi)**
- AI extraction
- JSON cleanup
- QA
- Time: 10-12 min per restaurant

**Role 3: Outreach (Tim or Remi)**
- Generate links
- Send emails
- Track responses
- Time: 3 min per restaurant

**Daily capacity:** 6-8 restaurants/day (team)

---

## TRACKING SPREADSHEET

### Required columns:

| Restaurant | Yelp URL | City | Status | Preview Link | Contacted | Viewed | Published | Paid | Revenue | Notes |
|------------|----------|------|--------|--------------|-----------|--------|-----------|------|---------|-------|
| Sunrise Diner | yelp.com/... | Orange | Paid | menuready.com/preview/sunrise... | 2/20 | Yes | Yes | Yes | $49 | Submitted to Yelp 2/22 |
| Joe's Cafe | yelp.com/... | Irvine | Published | menuready.com/preview/joes... | 2/20 | Yes | Yes | No | $0 | Using free plan |
| Main St Grill | yelp.com/... | Costa Mesa | Contacted | menuready.com/preview/main... | 2/21 | No | No | No | $0 | Follow up 2/24 |

### Status values:
- **Identified** - Found, photos downloaded
- **Structured** - JSON created
- **QA Complete** - Checked and cleaned
- **Contacted** - Email sent
- **Viewed** - They clicked preview link
- **Published (Free)** - Published without payment
- **Paid** - Paid for Done-For-You ($49)

---

## METRICS TO TRACK

### Pipeline velocity:
- Restaurants identified per day
- Menus digitized per day
- Emails sent per day

### Conversion rates:
- Email open rate
- Preview view rate (clicked link)
- Free publish rate
- Paid upgrade rate

### Weekly goals (MVP):
- 10 restaurants identified
- 10 menus digitized
- 10 emails sent
- 2-3 previews viewed
- 1 paid customer ($49)

---

## TOOLS NEEDED

**Free:**
- ChatGPT or Claude (menu extraction)
- Google Sheets (tracking)
- Gmail (outreach)

**Paid (optional):**
- Supabase (database for preview links) - $0-25/mo
- Web3Forms (contact form) - FREE

**Total cost:** $0-25/month

---

## QUALITY STANDARDS

**Good menu data:**
- All items captured
- Prices accurate (within $0.50)
- Descriptions match photo
- Categories logical
- No duplicates

**Acceptable errors:**
- Minor spelling variations
- Missing descriptions (if not visible in photo)
- Approximate prices (if blurry)

**Reject if:**
- >50% of menu missing
- >10% prices wrong
- Illegible photos

---

## TIME ESTIMATES (Per Restaurant)

| Step | Time |
|------|------|
| Identify | 5 min |
| Collect photos | 3-5 min |
| Structure (AI) | 5-7 min |
| QA | 5 min |
| Outreach | 3 min |
| **TOTAL** | **15-20 min** |

**10 restaurants = 2.5-3 hours total**

---

## LAUNCH CHECKLIST

**Before processing first restaurant:**
- [ ] Spreadsheet template created
- [ ] Folder structure ready (`/data/restaurants/`)
- [ ] ChatGPT/Claude access confirmed
- [ ] Email template ready
- [ ] Preview link generation working

**After first restaurant:**
- [ ] Time actual process (adjust estimates)
- [ ] Refine email template based on response
- [ ] Document any issues encountered

---

## IMPROVEMENT OVER TIME

**After 10 restaurants:**
- Identify bottlenecks
- Streamline slowest steps
- Collect feedback from restaurant owners

**After 20 restaurants:**
- Consider automation:
  - Photo collection (web scraper)
  - AI extraction (batch processing)
  - Email sends (automated sequence)

**For now: Keep it manual.** 

Speed comes from repetition, not automation.

---

## COMMON ISSUES & FIXES

**Issue: Menu photos blurry**
- **Fix:** Request higher-res from restaurant OR skip

**Issue: Multiple menu versions in photos**
- **Fix:** Use most recent (check photo date)

**Issue: Prices crossed out/updated**
- **Fix:** Use newer visible price

**Issue: Menu in multiple languages**
- **Fix:** Extract English only (or both if time permits)

**Issue: No contact info for restaurant**
- **Fix:** Use Yelp message OR skip for now

---

## SUCCESS CRITERIA (Week 1)

**Process goals:**
- 10 menus digitized
- 10 emails sent
- <20 min per restaurant average

**Business goals:**
- 3+ preview views
- 1+ free publish
- 1 paid customer ($49)

**Quality goals:**
- <3 customer complaints about accuracy
- >80% menu completeness
- 0 critical errors (wrong prices, missing items)

---

**Last Updated:** 2026-02-20  
**Owner:** Remi + Tim  
**Next Review:** After first 10 restaurants
