# Top 3 Prospects - Verification Checklist

**Status:** Cannot auto-verify (no web search/browser access)  
**Required:** Manual verification before building menus

---

## TOP 3 TO BUILD

### 1. EL MESTIZO ⭐ BEST PROSPECT

**Current data:**
- Name: El Mestizo
- Location: 3317 W 1st St, Santa Ana
- Rating: 4.0 stars
- Reviews: 337
- Phone: (714) 554-0905
- Yelp: yelp.com/biz/el-mestizo-santa-ana-santa-ana
- Tier: 2
- Photos: 447
- Notes: Unclaimed listing, Oaxacan Mexican, no website

**VERIFY:**
- [ ] Phone number works: (714) 554-0905
- [ ] No website exists (Google search: "El Mestizo Santa Ana website")
- [ ] No digital menu on Yelp listing
- [ ] No QR code menu mentioned in recent reviews
- [ ] Still active (check most recent review date)
- [ ] Count actual menu photos (not just food photos)
- [ ] Categories visible in photos (Appetizers, Entrees, etc.)

**If verified → BUILD MENU:**
- Slug: `el-mestizo-santa-ana`
- Location: `data/restaurants/el-mestizo-santa-ana/`

---

### 2. SARINANA'S TAMALE FACTORY

**Current data:**
- Name: Sarinana's Tamale Factory
- Location: 2218 W 5th St, Santa Ana
- Rating: 3.7 stars
- Reviews: 458
- Phone: NEEDS VERIFICATION
- Yelp: yelp.com/biz/sarinanas-tamale-factory-santa-ana-4
- Tier: 2
- Photos: 398
- Notes: Cash only, claimed listing

**VERIFY:**
- [ ] Get phone number from Yelp
- [ ] No website (Google: "Sarinana's Tamale Factory Santa Ana")
- [ ] No digital menu on Yelp
- [ ] Still active
- [ ] Count menu photos
- [ ] Menu structure (Tamales, Tacos, Burritos, etc.)

**If verified → BUILD MENU:**
- Slug: `sarinanas-tamale-factory-santa-ana`
- Location: `data/restaurants/sarinanas-tamale-factory-santa-ana/`

---

### 3. ALBERTACO'S MEXICAN FOOD

**Current data:**
- Name: Albertaco's Mexican Food
- Location: Santa Ana (need full address)
- Rating: 3.3 stars (TIER 1 - Rating recovery angle)
- Reviews: 1,300
- Phone: NEEDS VERIFICATION
- Yelp: yelp.com/biz/albertacos-mexican-food-santa-ana (verify URL)
- Tier: 1
- Photos: TBD
- Notes: High volume, rating recovery pitch

**VERIFY:**
- [ ] Full address
- [ ] Phone number
- [ ] No website
- [ ] No digital menu
- [ ] Still active
- [ ] Count menu photos
- [ ] Recent negative reviews mentioning appearance/professionalism
- [ ] Menu categories

**If verified → BUILD MENU:**
- Slug: `albertacos-mexican-food-santa-ana`
- Location: `data/restaurants/albertacos-mexican-food-santa-ana/`

---

## VERIFICATION WORKFLOW

For each restaurant:

1. **Visit Yelp URL**
2. **Get phone number** - Click "Call" button or check business info
3. **Check for website** - Look in business info section
4. **Google search** - "{Restaurant Name} {City} menu" - See if digital menu exists
5. **Check reviews** - Search for "QR code" "online menu" "website"
6. **Count menu photos** - Photos tab → Filter by "Menu" tag
7. **Check activity** - Most recent review date
8. **Note menu structure** - What categories visible in photos?

---

## WHAT DISQUALIFIES A PROSPECT

❌ **SKIP IF:**
- Website with digital menu exists
- Toast/Square/OpenTable integration visible
- QR code menu mentioned in reviews
- Last review >6 months ago
- Closed/permanently shuttered
- No menu photos visible
- Menu photos too blurry/unreadable

---

## AFTER VERIFICATION

**Return this format:**

```
VERIFIED PROSPECTS - READY TO BUILD

1. El Mestizo
   Phone: (714) 554-0905 ✓
   No digital menu: CONFIRMED ✓
   Menu photos: 23 clear photos
   Categories: Appetizers, Sopas, Entrees, Postres, Bebidas
   Status: READY TO BUILD

2. Sarinana's Tamale Factory
   Phone: (714) xxx-xxxx ✓
   No digital menu: CONFIRMED ✓
   Menu photos: 18 clear photos
   Categories: Tamales, Tacos, Burritos, Sides, Drinks
   Status: READY TO BUILD

3. Albertaco's Mexican Food
   [verification results]
```

---

## I CANNOT DO THIS AUTOMATICALLY

**Missing tools:**
- ❌ No web search API
- ❌ No browser control

**You must verify manually or:**
1. Configure Brave Search API: `openclaw configure --section web`
2. Start browser control: `openclaw gateway restart`

Then I can auto-verify all details.

---

**Once verified, I can:**
- Build menu.json files
- Create preview URLs
- Generate QR codes
- Write outreach messages

**But verification must happen first.** 🔍
