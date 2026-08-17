# Pakistan Info Hub — Maintenance & Scraper Health Operations Guide

This guide describes how to monitor, maintain, update, and deploy Pakistan Info Hub (pakistaninfohub.com).

---

## 1. How to Check Scraper Health (For Non-Developers)

To check if all scrapers and API routes are running properly:

1. Open your web browser and go to:  
   `https://www.pakistaninfohub.com/api/health`
2. You will see a clean status report like this:
   ```json
   {
     "status": "UP",
     "scrapers": {
       "jobsScraper": {
         "status": "healthy",
         "lastSuccessfulRun": "2026-08-16T23:00:00.000Z",
         "totalItemsLoaded": 6
       }
     }
   }
   ```
3. **What to look for**:
   - `"status": "UP"` or `"healthy"` means everything is working normally.
   - If `"status"` shows `"warning"` or `"error"`, the system automatically retained the last verified dataset so visitors never see an empty page.

---

## 2. How to Manually Trigger a Re-Scrape

If you know a new PPSC / FPSC / NTS job advertisement was just published and you want to refresh the site immediately:

1. Visit this URL in your browser:  
   `https://www.pakistaninfohub.com/api/cron/jobs`
2. The page will trigger the jobs fetcher and output a confirmation message:
   ```json
   {
     "status": "healthy",
     "message": "Scraper executed successfully. Updated 6 live job listings."
   }
   ```

---

## 3. Where Government Fee Tables & Checklists Live

If a government agency (NADRA, DGIP Passport, BISE Boards) changes official fees or eligibility rules:

| Content Area | File Location | What to Edit |
| :--- | :--- | :--- |
| **All Education BISE Boards** | [`lib/data/boards.ts`](file:///d:/new%20nadra%20bill%20website/lib/data/boards.ts) | Board names, websites, result URLs, SMS codes |
| **Eligibility Checklists** | [`lib/data/checklists.ts`](file:///d:/new%20nadra%20bill%20website/lib/data/checklists.ts) | BISP 8171, Apni Chhat, HEC scholarship rules |
| **Guide Articles & Fee Tables** | [`lib/data/articles.ts`](file:///d:/new%20nadra%20bill%20website/lib/data/articles.ts) | `feeStructure` arrays, `lastVerified` dates, steps |
| **Live Scraped Jobs** | [`lib/data/scraped-jobs.json`](file:///d:/new%20nadra%20bill%20website/lib/data/scraped-jobs.json) | Backup catalog of live job advertisements |

---

## 4. Debugging & Fixing a Broken Scraper

If an official government source website changes its layout:

1. **Which File to Inspect**:
   - Jobs Scraper: [`lib/scrapers/jobs.ts`](file:///d:/new%20nadra%20bill%20website/lib/scrapers/jobs.ts)
   - LESCO Bill API: [`app/api/bills/lesco/route.ts`](file:///d:/new%20nadra%20bill%20website/app/api/bills/lesco/route.ts)
   - PSCA E-Challan API: [`app/api/traffic/echallan/route.ts`](file:///d:/new%20nadra%20bill%20website/app/api/traffic/echallan/route.ts)
2. **What "Broken" Looks Like**:
   - The `/api/health` URL will report `"status": "warning"` or `"lastError": "Live fetch returned zero jobs"`.
3. **Safety Guarantee**:
   - The built-in data retention guard in `lib/scrapers/jobs.ts` will **never** delete or overwrite good data with empty results.

---

## 5. Deployment Instructions

To deploy code updates or manual data updates to production:

```cmd
git status
git add .
git commit -m "Update fee schedule or scraper logic"
git push
```

Vercel will automatically build and deploy the changes to `pakistaninfohub.com`.
