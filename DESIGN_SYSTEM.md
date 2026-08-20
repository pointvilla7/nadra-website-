# Pakistan Info Hub — Design System Specifications (2026)

This document establishes the official Design Tokens and UI guidelines for **Pakistan Info Hub**, delivering an authoritative, government-adjacent aesthetic that exceeds international digital-governance and civic fintech benchmarks while maintaining sub-second performance on mobile 3G/4G connections.

---

## 🎨 1. Color Palette & Semantic Roles

### Sovereign Authority & Base Palette
*   **Deep Sovereign Navy (`#1B2A4A`)**: Primary brand color. Conveys constitutional authority, trust, and legal precision. Used for hero headers, primary cards, active navigation items, and dark UI surfaces.
*   **Deep Sovereign Dark (`#12192B`, `#0E1729`)**: Core canvas background for Dark Mode and hero gradients.
*   **Parchment Paper (`#F7F4EC`)**: Light mode canvas background. Warm, non-glare editorial paper texture.
*   **Pure Card Surface (`#FFFFFF`)**: Crisp foreground card surface for maximum readability and physical depth.

### Accent & Metallic Trims
*   **Gazette Brass / Antique Gold (`#B08D57`)**: The official seal and accent color. Used for verified badges, borders, icons, focus rings, and high-trust highlights.
*   **Gold Gradient (`from-[#B08D57] to-[#D97706]`)**: High-contrast, non-red CTA buttons, 2026 year badges, and primary search buttons.

### Slate Neutral Scale
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `slate-50` | `#F8FAFC` | Ultra-light card tint |
| `slate-100` | `#F1F5F9` | Divider lines & badge backgrounds |
| `slate-200` | `#E2E8F0` | Default card borders |
| `slate-400` | `#94A3B8` | Subtitle text & inactive icons |
| `slate-500` | `#64748B` | Secondary captions & timestamps |
| `slate-700` | `#334155` | High-contrast body copy |
| `slate-800` | `#1E293B` | Dark mode card surface |
| `slate-900` | `#0F172A` | Deep contrast container |

### Semantic Colors
*   **Success Emerald (`#059669`)**: Official Gazette verification checkmarks and active status tags.
*   **Warning Amber (`#D97706`)**: Important notices and non-breaking information badges.
*   **Danger Ruby (`#DC2626`)**: **Strictly reserved for genuine fraud warnings, disclaimer banners, and danger alerts.** Never used for general buttons or category styling.

---

## 🔤 2. Typography Hierarchy

### Font Families
1.  **Display & Headings**: `Lora` (Serif, weights 600/700/800) — authoritative gazette document feel.
2.  **Body & UI Text**: `Inter` (Sans-Serif, weights 400/500/600/700) — maximum legibility on mobile screens.
3.  **Data & Codes**: `IBM Plex Mono` (Monospace, weights 600/700) — reference numbers, CNIC inputs, and tracking IDs.
4.  **Urdu & RTL**: `Noto Nastaliq Urdu` & `Noto Sans Arabic` — authentic calligraphic Urdu display with `dir="rtl"` logical alignment.

### Type Scale Tokens
*   **Hero H1 (`--text-h1`)**: `text-3xl sm:text-5xl font-serif font-extrabold tracking-tight leading-tight`
*   **Section H2 (`--text-h2`)**: `text-2xl sm:text-3xl font-serif font-bold tracking-tight text-doc-ink dark:text-white`
*   **Card / Subsection H3 (`--text-h3`)**: `text-lg sm:text-xl font-serif font-bold text-doc-ink dark:text-slate-100`
*   **Body Regular (`--text-body`)**: `text-sm sm:text-base font-sans text-slate-700 dark:text-slate-300 leading-relaxed`
*   **Small / Meta (`--text-small`)**: `text-xs sm:text-sm font-sans text-slate-500 dark:text-slate-400`
*   **Caption / Data Pill (`--text-caption`)**: `text-[11px] font-mono font-bold uppercase tracking-wider`

---

## 📐 3. Spacing, Radii & Physical Elevation

### Spacing Scale (8px Grid)
*   **Micro Spacing**: `gap-1.5` (6px), `gap-2` (8px), `gap-3` (12px)
*   **Component Padding**: `p-4` (16px), `p-6` (24px), `p-8` (32px)
*   **Section Vertical Separation**: `space-y-16 md:space-y-24` (64px to 96px)

### Border Radius Hierarchy
*   **Small (`rounded-lg` / 8px)**: Badges, chip tags, micro-buttons.
*   **Medium (`rounded-xl` / 12px)**: Interactive inputs, action buttons, category pills.
*   **Large (`rounded-2xl` / 16px)**: Standard content cards, FAQ containers, direct answer boxes.
*   **Display (`rounded-3xl` / 24px)**: Hero section container, verified stamp modals.

### Shadow & Elevation Depth
*   **Resting Card (`shadow-doc-card`)**: `0 2px 12px -1px rgba(27, 42, 74, 0.06), 0 1px 3px rgba(27, 42, 74, 0.04)`
*   **Hover Lift (`shadow-doc-hover`)**: `0 12px 28px -4px rgba(27, 42, 74, 0.12), 0 4px 8px -2px rgba(27, 42, 74, 0.04)` with `-2px` translateY.
*   **Floating Tool Overlay (`shadow-2xl`)**: `0 20px 40px -12px rgba(0, 0, 0, 0.35)`

---

## ⚡ 4. Standardized Component System

### 1. Unified Badge Component
*   **Stamp Variant**: Double-ring gold circular seal (`2026 GAZETTE VERIFIED`).
*   **Pill Variant**: `px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5`.
*   **Status Tints**: Navy (`bg-doc-ink text-white`), Emerald (`bg-emerald-500/10 text-emerald-700 border-emerald-500/30`), Gold (`bg-doc-brass/15 text-amber-900 border-doc-brass/40`).

### 2. Category Card Architecture
*   **Icon Container**: Soft colored tinted square with `border border-current/20` and 24px icon.
*   **Count Badge**: Distinct `8+ Verified Guides` monospace badge in top-right.
*   **CTA Button**: High-trust Deep Navy + Gold trim button with smooth hover arrow motion.

### 3. Redirect Tool Container (Honest Pattern)
*   **Structure**:
    1.  **Direct Answer / In Short Box**: Highlighted quick summary.
    2.  **What You Need Box**: Checklist of reference numbers / CNIC requirements.
    3.  **Step Wizard**: 3-step numbered validation flow.
    4.  **Verified Official Portal Button**: Large high-contrast link with external lock icon and security notice.

---

## ♿ 5. Accessibility & Motion Rules

1.  **Fast Transitions**: Duration `160ms–240ms` using `cubic-bezier(0.16, 1, 0.3, 1)`.
2.  **Focus Rings**: Clear 2px Antique Gold outline (`focus-visible:outline-[#B08D57]`) with 2px offset.
3.  **Reduced Motion**: All CSS keyframe animations and transitions set to 0.01ms under `prefers-reduced-motion: reduce`.
4.  **RTL Mirroring**: Full mirroring support using CSS logical properties (`start`/`end`, `margin-inline`, `text-start`).
