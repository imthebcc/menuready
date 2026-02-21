# Yelp Prospect Search Guide

**Goal:** Find 10 restaurants with good menu photos but no digital menu

---

## SEARCH CRITERIA

**Rating:** 3.5 - 4.1 stars  
**Reviews:** 50-300  
**Categories:** Diner, Mexican, Chinese, BBQ, Deli, Breakfast, Salvadoran, Vietnamese  
**Locations:** Santa Ana, CA & Huntington Beach, CA  
**Active:** Last review within 6 months  
**No digital menu:** No menu link on Yelp listing  
**No major POS:** No Toast/Square/OpenTable visible  

---

## SEARCH URLS

### Santa Ana, CA

**Diners:**
https://www.yelp.com/search?find_desc=diners&find_loc=Santa+Ana,+CA&sortby=rating

**Mexican:**
https://www.yelp.com/search?find_desc=mexican+restaurants&find_loc=Santa+Ana,+CA&sortby=rating

**Chinese:**
https://www.yelp.com/search?find_desc=chinese+restaurants&find_loc=Santa+Ana,+CA&sortby=rating

**BBQ:**
https://www.yelp.com/search?find_desc=bbq&find_loc=Santa+Ana,+CA&sortby=rating

**Breakfast/Brunch:**
https://www.yelp.com/search?find_desc=breakfast+brunch&find_loc=Santa+Ana,+CA&sortby=rating

**Salvadoran:**
https://www.yelp.com/search?find_desc=salvadoran&find_loc=Santa+Ana,+CA&sortby=rating

**Vietnamese:**
https://www.yelp.com/search?find_desc=vietnamese&find_loc=Santa+Ana,+CA&sortby=rating

---

### Huntington Beach, CA

**Diners:**
https://www.yelp.com/search?find_desc=diners&find_loc=Huntington+Beach,+CA&sortby=rating

**Mexican:**
https://www.yelp.com/search?find_desc=mexican+restaurants&find_loc=Huntington+Beach,+CA&sortby=rating

**Chinese:**
https://www.yelp.com/search?find_desc=chinese+restaurants&find_loc=Huntington+Beach,+CA&sortby=rating

**BBQ:**
https://www.yelp.com/search?find_desc=bbq&find_loc=Huntington+Beach,+CA&sortby=rating

**Breakfast/Brunch:**
https://www.yelp.com/search?find_desc=breakfast+brunch&find_loc=Huntington+Beach,+CA&sortby=rating

---

## HOW TO QUALIFY

For each restaurant, check:

### ✅ YES (Good Prospect)
- 3.5-4.1 stars
- 50-300 reviews
- Last review within 6 months
- NO menu link on Yelp
- 5+ menu photos in reviews
- No mention of QR codes/online ordering
- Phone number listed
- Looks family-owned/independent

### ❌ NO (Skip)
- Too high (>4.1) or too low (<3.5) stars
- Too few (<50) or too many (>300) reviews
- Last review >6 months ago
- Already has digital menu
- Toast/Square/OpenTable visible
- Chain restaurant
- Closed/no longer active

---

## DATA TO COLLECT

For each qualified restaurant:

1. **Restaurant Name** - Copy exactly from Yelp
2. **Yelp URL** - Full URL
3. **Phone Number** - From "Call" button
4. **Star Rating** - Exact (e.g., 3.8)
5. **Review Count** - Total reviews
6. **Most Recent Review Date** - Scroll to reviews, check top one
7. **Menu Photo Count** - Count photos tagged "Menu" in photos section
8. **Website** - If listed (or "None")
9. **Notes** - Cash only? Family owned? Years in business? Anything relevant

---

## WORKFLOW

1. Open search URL
2. Filter by star rating (3.5-4.1)
3. Click each restaurant
4. Quick check: Reviews 50-300? Active? No digital menu?
5. If YES → Click "Photos" → Count "Menu" tag
6. Collect all data
7. Paste into `PROSPECT_LIST_TEMPLATE.csv`

---

## SORTING

After collecting 10-20 prospects:
- **Sort by Menu Photo Count (descending)**
- Most photos at top = easiest to build from
- Keep top 10

---

## EXAMPLE ENTRY

```
El Pollo Norteño,https://www.yelp.com/biz/el-pollo-norteño-santa-ana,714-555-1234,3.9,127,2024-02-15,12,None,Cash only • Family owned since 1985 • Salvadoran/Mexican
```

---

## TIME ESTIMATE

- 5-10 minutes per restaurant
- 10 restaurants = 1-2 hours total

---

**Save results to:** `/Users/Remi/.openclaw/workspace/menuready-template/data/PROSPECT_LIST.csv`
