# Pakistan Info Hub — Exact Design System Specifications (2026)

This document establishes the exact, non-negotiable Design Tokens and UI guidelines for **Pakistan Info Hub**, delivering a consistent, editorial civic fintech aesthetic.

---

## 🎨 1. Exact Color System

```css
--color-navy-950: #0B1120;   /* darkest — hero & footer background */
--color-navy-900: #111827;   /* section background variant & disclaimer bar */
--color-navy-800: #1E2A3F;   /* card backgrounds on dark sections, borders */
--color-cream-50:  #FAF9F6;  /* the ONLY light background color — ALL light sections & cards */
--color-cream-100: #F3F1EC;  /* category icon circular background tint */
--color-gold-600:  #B8860B;  /* primary accent — solid CTA buttons, badges, "2026" tag */
--color-gold-500:  #D4A017;  /* primary accent hover/lighter variant */
--color-emerald-600: #0F9D6D; /* SINGLE color for all verified/trust checkmark indicators */
--color-red-600:   #C0362C;  /* RESERVED ONLY for disclaimer bar left accent & genuine errors */
--color-slate-600: #475569;  /* body text on light backgrounds */
--color-slate-300: #CBD5E1;  /* body text on dark backgrounds */
--color-slate-100: #F1F5F9;  /* borders on light backgrounds */
```

### Color Rules
1. **Light Sections**: Every light-background section and card on the entire site uses `#FAF9F6` (`--color-cream-50`). No separate `#FFFFFF` or beige backgrounds.
2. **Dark Sections**: Hero and Footer ONLY use `#0B1120` (`--color-navy-950`).
3. **Category Pills/Tags**: Clean uppercase text in `#475569` (`--color-slate-600`) with letter-spacing. No colored dots.
4. **Verified Indicators**: Quiet `#0F9D6D` (`--color-emerald-600`) checkmark (16px) followed by plain text in `#475569` (`--color-slate-600`), no pill container.
5. **Disclaimer Bar**: `#111827` (`--color-navy-900`) background with a 4px `#C0362C` (`--color-red-600`) left border accent.
6. **Primary CTAs**: Solid `#B8860B` (`--color-gold-600`) background with white text, `#D4A017` on hover.

---

## 🔤 2. Exact Typography

1. **Headings (H1–H4)**: `"Fraunces", serif` (Google Font).
   - Weight: `600` for H1/H2, `500` for H3/H4.
2. **Body Text, UI, Buttons, Labels**: `"Public Sans", sans-serif` (Google Font).
   - Weight: `400` for body, `500` for emphasis, `600` for buttons and labels.
3. **Urdu & RTL**: `Noto Nastaliq Urdu` & `Noto Sans Arabic` (system fallback + client loader).
4. **Type Scale**:
   - **H1**: `48px` desktop / `32px` mobile, line-height `1.1`, weight `600`
   - **H2**: `32px` desktop / `24px` mobile, line-height `1.2`, weight `600`
   - **H3**: `22px` desktop / `18px` mobile, line-height `1.3`, weight `500`
   - **Body**: `16px`, line-height `1.6`, weight `400`
   - **Small/Caption**: `13px`, line-height `1.5`, letter-spacing `0.02em`

---

## 📐 3. Exact Spacing & Card Styling

1. **Card Border Radius**: `12px` (`rounded-[12px]`). Buttons: `8px` (`rounded-[8px]`). Badges: `999px` (`rounded-full`).
2. **Card Shadow**: `box-shadow: 0 1px 2px rgba(11,17,32,0.04), 0 4px 12px rgba(11,17,32,0.06);`
3. **Card Hover**: `box-shadow: 0 4px 8px rgba(11,17,32,0.08), 0 8px 24px rgba(11,17,32,0.10); transform: translateY(-2px); transition: 200ms ease;`
4. **Section Vertical Separation**: `96px` desktop / `48px` mobile (`space-y-12 sm:space-y-24`).
5. **Card Internal Padding**: `32px` desktop / `20px` mobile (`p-5 sm:p-8`).
6. **Grid Gaps**: `24px` (`gap-6`).

---

## ⚡ 4. Component Standards

1. **Category Grid Icons**: `56px` (`w-14 h-14`) circular container with `#F3F1EC` (`--color-cream-100`) background, icon in `#1E2A3F` (`--color-navy-800`) sized at `28px` (`w-7 h-7`).
2. **"8+ Guides" Badge**: Text in `#0F9D6D` (`--color-emerald-600`), transparent background, 1px border in `#0F9D6D`, fully rounded (`rounded-full`), small checkmark icon.
3. **Article Card Tags**: Plain `#475569` (`--color-slate-600`) uppercase text with `0.05em` letter-spacing, no colored background.
