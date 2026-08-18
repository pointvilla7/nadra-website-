# Architecture & Infrastructure Notes: Pakistani Utility Bill Checking

## Root Cause of Server-Side Bill Checker Failures

### 1. Cloud Datacenter IP Blocking
- **Portals Affected**: PITC (`bill.pitc.com.pk`), LESCO, IESCO, FESCO, MEPCO, GEPCO, HESCO, SEPCO, PESCO, QESCO, TESCO, K-Electric (`ke.com.pk`), SNGPL (`sngpl.com.pk`), and SSGC (`ssgc.com.pk`).
- **Mechanism**: The government hosting infrastructure (PITC / PTCL / National Data Center) maintains automated firewall rules that block or drop incoming traffic originating from cloud datacenter ASN ranges (AWS EC2 / Lambda, GCP Cloud Run / Functions, Vercel Serverless IP blocks).
- **Verification**: 
  - Requests sent from local / residential IP addresses execute successfully with HTTP 200 responses in <1.2 seconds.
  - The exact identical HTTP request, headers, cookies, and ASP.NET `__VIEWSTATE` payloads sent from Vercel production serverless environments consistently result in timeouts (ETIMEDOUT) or connection resets (ECONNRESET).
  - This is an infrastructure IP-reputation block, not an application code defect.

---

## Architectural Decision: Honest Guided Portal Navigation

Rather than maintaining unreliable server-side fetch attempts that fail with misleading "Server Busy" errors or returning fake placeholder data, Pakistan Info Hub uses an **honest, client-side guided navigation architecture**:

1. **Client-Side Reference Validation**:
   - Immediate format checking (14 digits for DISCOs, 13 digits for K-Electric, 11 digits for SNGPL, 10 digits for SSGC, etc.).
   - Specific sub-division / batch prefix hints (e.g., LESCO 01–15, IESCO 14, FESCO 13, MEPCO 15, KE 04).
   - Zero user data sent to our servers — 100% private and ephemeral.

2. **One-Click Clipboard Copy**:
   - Copies clean digits to user clipboard with visual confirmation.
   - Allows instant pasting onto the official utility search form without re-typing.

3. **Direct Deep-Linking to Specific Bill Query Portals**:
   - Deep-links directly to each provider's dedicated duplicate bill query page (e.g., `http://bill.pitc.com.pk/lescobill/`, `https://viewbill.ssgc.com.pk/`, `https://www.ke.com.pk/customer-services/billls-and-e-payments/`, `https://www.sngpl.com.pk/web/bill`) rather than generic corporate homepages.

4. **Contextual Civic Guidance**:
   - Visual reference number location diagram for paper bills.
   - Billing cycle and typical due-date windows.
   - Direct clickable official helplines (118, 1199, 1334).

---

## Future Live Scraping Options (If Proxy Budget Becomes Available)

If live server-side bill fetching is revisited in the future, it cannot run directly from Vercel serverless functions. It requires a proxy intermediary layer:

1. **Residential Rotating Proxy Pool**:
   - Service providers: Bright Data, Oxylabs, Smartproxy, or Webshare.
   - Configuration: Country-targeted (Pakistan `PK`) residential proxy gateway with sticky sessions (30s lifetime for 2-step ASP.NET `__VIEWSTATE` form POSTs).
   - Estimated Cost: ~$50 – $200 / month depending on query volume.

2. **Self-Hosted Pakistani ISP Proxy**:
   - A lightweight Node.js/Go proxy hosted on a residential or local Pakistani VPS (e.g. Nayatel, Cybernet, PTCL business connection).
   - Serverless functions route outbound PITC queries through this proxy.

Until a funded proxy layer is provisioned, all `/api/bill-check/*` and `/api/bills/*` routes are intentionally disabled in favor of the guided official flow.
