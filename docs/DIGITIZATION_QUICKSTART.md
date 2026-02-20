# Digitization Quickstart (MVP)

**Get 10 menus done in 3 hours**

---

## SETUP (5 minutes)

1. **Copy spreadsheet template**
   - Import `/docs/SPREADSHEET_TEMPLATE.csv` to Google Sheets
   - Or create new sheet with these columns:
     - Restaurant | Yelp URL | City | Status | Preview Link | Contacted | Viewed | Published | Paid | Revenue | Notes

2. **Create folder structure**
   ```
   /data/restaurants/
   ```

3. **Prep email template** (save in drafts or Notes)

**Done.** Ready to process.

---

## 5-STEP PROCESS (15 min per restaurant)

### STEP 1: IDENTIFY (5 min)
- Search Yelp: "restaurants [city]"
- Filter <4.2 stars
- Check for menu photos in reviews
- Add to spreadsheet
- Status = "Identified"

### STEP 2: COLLECT PHOTOS (3 min)
- Download 3-6 menu photos from Yelp reviews
- Save to `/data/restaurants/[slug]/photos/`
- ONLY menu photos (no food, no interior)

### STEP 3: STRUCTURE (7 min)
- Upload photos to ChatGPT
- Use prompt:
  ```
  Extract menu as JSON with restaurant name, location, categories, items (name, description, price).
  ```
- Save output to `/data/restaurants/[slug]/menu.json`
- Status = "Structured"

### STEP 4: QA (5 min)
- Check prices (no typos)
- Remove duplicates
- Fix spelling
- Verify categories
- Status = "QA Complete"

### STEP 5: OUTREACH (3 min)
- Generate preview link
- Send email with preview
- Update spreadsheet
- Status = "Contacted"

**TOTAL: 15-20 minutes per restaurant**

---

## ROLE SPLIT (Optional)

**Solo:**
- Do all 5 steps yourself
- 3-4 restaurants per day

**Team:**
- **Person A:** Steps 1-2 (Sourcing)
- **Person B:** Steps 3-4 (Structuring)
- **Person C:** Step 5 (Outreach)
- 6-8 restaurants per day

---

## TRACKING STATUS

| Status | Meaning |
|--------|---------|
| Identified | Found on Yelp, photos downloaded |
| Structured | JSON created from photos |
| QA Complete | Checked, cleaned, ready |
| Contacted | Email sent with preview link |
| Viewed | They clicked preview |
| Published | They published (free) |
| Paid | Paid for Done-For-You ($49) |

---

## WEEK 1 GOALS

- **10 restaurants** identified
- **10 menus** digitized
- **10 emails** sent
- **1 paid customer** ($49)

**Time investment:** 2.5-3 hours total

---

## QUICK TIPS

**Faster sourcing:**
- Focus on one city at a time
- Use Yelp "Sort by Rating" (low to high)
- Skip if no menu photos visible

**Faster structuring:**
- Batch upload photos to ChatGPT (3 at once)
- Save ChatGPT prompts as templates
- Don't over-perfect - 80% accuracy is fine

**Better outreach:**
- Personalize first line only
- Send during business hours (10 AM - 3 PM)
- Follow up after 3 days if no response

---

## TOOLS

**Free:**
- ChatGPT (menu extraction)
- Google Sheets (tracking)
- Gmail (outreach)

**Total cost:** $0

---

**Full SOP:** See `/docs/DIGITIZATION_SOP.md`

**Questions?** Hit me up.

---

**Created:** 2026-02-20  
**Owner:** Remi
