# Brand Kit Template

> **Copy this file to `clients/[client-name]/designer/brand-kit.md` and fill in every field.**
> The Designer agent references this file on every task. Incomplete kits produce inconsistent work.

---

## Why This Matters

Without a completed brand kit, the Designer agent has no source of truth. Every asset becomes a guess — colors get eyeballed, fonts get substituted, logos get stretched. The result: revision cycles that should never have happened. Fill this out once, maintain it when the brand evolves, and every downstream asset ships faster and on-brand.

---

## Logo Assets

```
┌─────────────────────────────────────────────┐
│ LOGO ASSETS                                 │
├─────────────────────────────────────────────┤
│ Primary logo (full color):  [file path/URL] │
│ Primary logo (reversed):    [file path/URL] │
│ Monochrome logo (dark):     [file path/URL] │
│ Monochrome logo (light):    [file path/URL] │
│ Favicon / app icon:         [file path/URL] │
│ Logomark only (no wordmark):[file path/URL] │
│                                             │
│ Min clear space:  [e.g., 1x height of mark] │
│ Min display size: [e.g., 24px / 0.5in]      │
│ File formats available: [SVG, PNG, EPS]      │
└─────────────────────────────────────────────┘
```

**Rules:**
- Never stretch, rotate, or recolor the logo outside approved variants.
- Always use SVG for web, PNG for social, EPS for print.
- Favicon must be tested at 16x16, 32x32, and 180x180.

---

## Color Palette

```
┌─────────────────────────────────────────────┐
│ COLOR PALETTE                               │
├─────────────────────────────────────────────┤
│ PRIMARY                                     │
│   Primary:          [#000000] — [name]      │
│   Primary dark:     [#000000] — [name]      │
│   Primary light:    [#000000] — [name]      │
│                                             │
│ SECONDARY                                   │
│   Secondary:        [#000000] — [name]      │
│   Secondary dark:   [#000000] — [name]      │
│   Secondary light:  [#000000] — [name]      │
│                                             │
│ ACCENT                                      │
│   Accent 1:         [#000000] — [name]      │
│   Accent 2:         [#000000] — [name]      │
│                                             │
│ NEUTRALS                                    │
│   White:            [#FFFFFF]               │
│   Off-white / BG:   [#000000]               │
│   Light gray:       [#000000]               │
│   Mid gray:         [#000000]               │
│   Dark gray:        [#000000]               │
│   Black:            [#000000]               │
│                                             │
│ SEMANTIC                                    │
│   Success:          [#000000]               │
│   Warning:          [#000000]               │
│   Error:            [#000000]               │
│   Info:             [#000000]               │
│                                             │
│ GRADIENT (if used):                         │
│   [from #000000 → to #000000, angle/type]   │
└─────────────────────────────────────────────┘
```

**Rules:**
- Primary color is the dominant brand color. Use it for CTAs and key UI elements.
- Never combine accent colors without a neutral separator.
- All text must meet WCAG AA contrast ratios against its background (4.5:1 for body, 3:1 for large text).

---

## Typography System

```
┌─────────────────────────────────────────────────────────────────┐
│ TYPOGRAPHY                                                      │
├──────────┬──────────────┬────────┬────────┬────────────────────┤
│ Role     │ Font         │ Weight │ Size   │ Line Height        │
├──────────┼──────────────┼────────┼────────┼────────────────────┤
│ H1       │ [font name]  │ [700]  │ [48px] │ [1.1]              │
│ H2       │ [font name]  │ [700]  │ [36px] │ [1.2]              │
│ H3       │ [font name]  │ [600]  │ [28px] │ [1.2]              │
│ H4       │ [font name]  │ [600]  │ [22px] │ [1.3]              │
│ Body     │ [font name]  │ [400]  │ [16px] │ [1.5]              │
│ Body sm  │ [font name]  │ [400]  │ [14px] │ [1.5]              │
│ UI / Btn │ [font name]  │ [600]  │ [14px] │ [1.0]              │
│ Caption  │ [font name]  │ [400]  │ [12px] │ [1.4]              │
├──────────┴──────────────┴────────┴────────┴────────────────────┤
│ Letter spacing (headings):  [e.g., -0.02em]                    │
│ Letter spacing (body):      [e.g., 0]                          │
│ Letter spacing (UI / caps): [e.g., 0.05em]                     │
├────────────────────────────────────────────────────────────────┤
│ Font source: [Google Fonts / Adobe Fonts / self-hosted / URL]  │
│ Fallback stack: [e.g., "Inter", -apple-system, sans-serif]     │
└────────────────────────────────────────────────────────────────┘
```

**Rules:**
- Never use more than 2 font families across the entire brand.
- Ad creative text must be legible at mobile thumbnail size — minimum 24px equivalent in feed.
- Always define the fallback stack. If the font fails to load, the brand should still feel intentional.

---

## Imagery & Illustration Style

```
┌─────────────────────────────────────────────────────────────┐
│ IMAGERY DIRECTION                                           │
├─────────────────────────────────────────────────────────────┤
│ Photography style:  [e.g., candid, editorial, product-led]  │
│ Mood / tone:        [e.g., warm, bright, high-contrast]     │
│ Color treatment:    [e.g., desaturated, warm filter, none]  │
│ Subject focus:      [e.g., people-first, product-in-use]    │
│ Stock library:      [e.g., Unsplash, Shutterstock, custom]  │
│ Custom photo drive: [link to image library / folder]        │
├─────────────────────────────────────────────────────────────┤
│ ILLUSTRATION STYLE                                          │
├─────────────────────────────────────────────────────────────┤
│ Style:              [e.g., flat, isometric, line-art, 3D]   │
│ Stroke weight:      [e.g., 2px]                             │
│ Corner radius:      [e.g., rounded, sharp]                  │
│ Color usage:        [e.g., brand palette only, monochrome]  │
│ Illustration lib:   [link or file path]                     │
├─────────────────────────────────────────────────────────────┤
│ ICON SET                                                    │
├─────────────────────────────────────────────────────────────┤
│ Icon library:       [e.g., Phosphor, Heroicons, custom]     │
│ Icon style:         [e.g., outline, solid, duotone]         │
│ Icon weight:        [e.g., regular, bold]                   │
│ Default size:       [e.g., 24px]                            │
│ Icon source:        [URL or file path]                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Component References

```
┌─────────────────────────────────────────────────────────────┐
│ DESIGN SYSTEM REFERENCES                                    │
├─────────────────────────────────────────────────────────────┤
│ Figma file:            [URL]                                │
│ Design system / UI kit:[URL]                                │
│ Component library:     [e.g., Storybook URL, Figma lib]    │
│ Brand guidelines PDF:  [file path / URL]                    │
│ Shared asset folder:   [Google Drive / Dropbox / S3 URL]   │
│ Ad template library:   [Figma / Canva URL]                 │
└─────────────────────────────────────────────────────────────┘
```

---

## Do / Don't Visual Guide

```
┌─────────────────────────────────────────────────────────────┐
│ ON-BRAND (DO)                                               │
├─────────────────────────────────────────────────────────────┤
│ ✓ [Description or reference link — e.g., "Bold headline     │
│    over lifestyle photo, primary CTA in brand blue"]        │
│ ✓ [Description or reference link]                           │
│ ✓ [Description or reference link]                           │
├─────────────────────────────────────────────────────────────┤
│ OFF-BRAND (DON'T)                                           │
├─────────────────────────────────────────────────────────────┤
│ ✗ [Description — e.g., "Busy backgrounds with low-contrast │
│    text overlay, logo crammed into corner"]                 │
│ ✗ [Description — e.g., "Neon accent colors not in palette,  │
│    decorative fonts for body text"]                         │
│ ✗ [Description — e.g., "Stock photos with watermarks or     │
│    generic handshake imagery"]                              │
└─────────────────────────────────────────────────────────────┘
```

**Rules:**
- Add real examples as the brand produces work. Link to actual assets, not abstract descriptions.
- Review and update this section quarterly — what was on-brand at launch may drift.

---

## Platform-Specific Specs

```
┌──────────────────────────────────┬──────────────────────────┐
│ PLATFORM                         │ DIMENSIONS               │
├──────────────────────────────────┼──────────────────────────┤
│ Meta — Feed ad (static)          │ 1080×1350 (4:5)          │
│ Meta — Stories / Reels           │ 1080×1920 (9:16)         │
│ Meta — Carousel card             │ 1080×1080 (1:1)          │
│ Google Display — Leaderboard     │ 728×90                   │
│ Google Display — Medium rect     │ 300×250                  │
│ Google Display — Large rect      │ 336×280                  │
│ Google Display — Skyscraper      │ 160×600                  │
│ LinkedIn — Single image          │ 1200×627                 │
│ LinkedIn — Profile banner        │ 1584×396                 │
│ X (Twitter) — In-feed image      │ 1200×675 (16:9)          │
│ X (Twitter) — Header             │ 1500×500                 │
│ YouTube — Thumbnail              │ 1280×720                 │
│ Email — Header image             │ 600×200 (max width 600)  │
│ Email — Hero image               │ 600×400                  │
│ OG / Social share image          │ 1200×630                 │
│ Favicon                          │ 32×32 / 180×180          │
├──────────────────────────────────┼──────────────────────────┤
│ SOCIAL PROFILES                  │                          │
├──────────────────────────────────┼──────────────────────────┤
│ Profile photo (all platforms)    │ 400×400 (1:1)            │
│ [platform] — Cover / banner      │ [dimensions]             │
│ [platform] — Cover / banner      │ [dimensions]             │
└──────────────────────────────────┴──────────────────────────┘
```

**Rules:**
- Always design at the native size. Never design in one ratio and crop to fit another.
- Export at 2x for retina where applicable (web, email).
- Keep file sizes under 150KB for ads, under 1MB for email images.

---

## Asset File Locations

```
┌─────────────────────────────────────────────────────────────┐
│ ASSET LOCATIONS                                             │
├─────────────────────────────────────────────────────────────┤
│ Logo files:          [path / URL]                           │
│ Font files:          [path / URL]                           │
│ Icon library:        [path / URL]                           │
│ Photo library:       [path / URL]                           │
│ Illustration assets: [path / URL]                           │
│ Ad templates:        [path / URL]                           │
│ LP design specs:     [path / URL]                           │
│ Exported assets:     [path / URL]                           │
│ Brand guidelines:    [path / URL]                           │
└─────────────────────────────────────────────────────────────┘
```

**Rules:**
- Follow the naming conventions defined in `04_growth-designer/asset-naming.md`.
- Never store final assets only on a local machine. Everything lives in the shared location above.
- Keep source files (Figma, AI, PSD) separate from exported assets (PNG, SVG, JPG).

---

## Completion Checklist

Before marking this brand kit as ready:

- [ ] All logo variants uploaded and linked
- [ ] Full color palette with hex codes filled in
- [ ] Typography system complete with font files accessible
- [ ] Imagery direction documented with at least 3 reference examples
- [ ] Component / design system links verified and accessible
- [ ] Do/don't section has at least 2 entries per column
- [ ] Platform specs reviewed against current platform requirements
- [ ] Asset file locations confirmed and accessible to the team
- [ ] Naming conventions align with `asset-naming.md`

---

*Last updated: [date] | Maintained by: Growth Designer*
