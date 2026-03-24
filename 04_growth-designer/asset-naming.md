# Asset Naming — Growth Designer

> Referenced by `04_growth-designer/AGENT.md`. Enforced on all assets before they leave the designer's hands.

---

## File Naming Convention

```
[client]-[campaign]-[angle]-[size]-[version].[ext]
```

**Example:** `acme-spring-launch-pain-1080x1080-v2.png`

**Rules:**
- All lowercase. Hyphens only — no spaces, no underscores, no special characters.
- Client slug must match the exact slug used in `clients/[client-name].md`.
- Campaign slug maps to the campaign name in the experiment tracker.
- Angle must be one of the 8 approved angles: `pain`, `identity`, `social-proof`, `before-after`, `comparison`, `demo`, `ugc`, `contrarian`.
- Size is always `WxH` in pixels.
- Version increments from `v1`. Never overwrite. Always increment.

---

## Platform Dimension Reference

| Platform | Format | Dimensions |
|---|---|---|
| Meta Feed | Square | 1080 × 1080 |
| Meta Feed | Portrait (recommended) | 1080 × 1350 |
| Meta Story / Reels | Vertical | 1080 × 1920 |
| Google Display | Medium Rectangle | 300 × 250 |
| Google Display | Leaderboard | 728 × 90 |
| Google Display | Wide Skyscraper | 160 × 600 |
| LinkedIn | Sponsored Content | 1200 × 627 |
| TikTok | In-Feed Video | 1080 × 1920 |
| YouTube | Thumbnail | 1280 × 720 |
| Email | Header Banner | 600 × 200 |

Never design in one ratio and crop to fit another. Design natively in the target ratio.

---

## Export Format Rules

| Use Case | Format | Notes |
|---|---|---|
| Static ads with transparency | PNG | Logos, overlays, badges |
| Photos, lifestyle imagery | JPG | Quality 85–90% — balance file size |
| Video ads | MP4 | H.264, AAC audio, max bitrate per platform |
| Simple motion (looping) | GIF | Only if MP4 is not accepted — GIF file sizes bloat fast |
| Icons, logos | SVG | Vector only. Never rasterize a logo for an SVG context. |

**File size limits:**
- Meta image: < 4MB
- Meta video: < 30MB (recommended < 4GB hard limit)
- Google Display: < 150KB for static HTML, < 2.5MB for image
- LinkedIn: < 5MB image
- TikTok video: < 500MB

---

## Version Control Rules

- Start every new asset at `v1`. Never assume a version exists — check the folder first.
- Increment to `v2`, `v3`, etc. for every iteration — even minor copy changes.
- Never overwrite an existing file. The original may be needed if a running campaign references it.
- Keep all versions in the active folder until the campaign closes, then archive.

---

## Folder Structure

```
00_shared/assets/
└── [campaign-name]/
    ├── meta/
    ├── google/
    ├── linkedin/
    ├── tiktok/
    ├── email/
    └── _archive/
```

Working files stay in `04_growth-designer/static-ads/` or `04_growth-designer/ad-templates/` until approved. Only approved, final assets move to `00_shared/assets/`. Moving to `00_shared/` triggers Ops trafficking.

---

## Figma Naming Conventions

**Frame names** must match the intended export filename exactly (minus the extension). Figma's export will use the frame name — if the frame name is wrong, the export name is wrong.

**Auto-layout** is required on all ad frames. No freeform positioning.

**Component naming:** `[category]/[element]/[state]`

Examples:
- `buttons/primary/default`
- `buttons/primary/hover`
- `typography/headline/large`
- `social-proof/badge/with-logo`
- `cta-bar/standard/dark-bg`

Never name a component `Button 1` or `Rectangle 47`. If a component doesn't have a clean name, it isn't a real component — merge or extract properly.

---

## Archive Rules

- Move deprecated assets to `_archive/` within the campaign folder — never delete.
- Campaigns may need historical assets for re-launches, legal review, or competitive reference.
- Archive at campaign close or when a new version replaces an asset in active rotation.
- Label archived assets clearly — do not rename them. The existing filename is the archive record.

---

## QA Checklist Before Handoff

- [ ] Dimensions match the platform spec in the reference table above
- [ ] File format matches the export rules above
- [ ] File size is within platform limits
- [ ] Text is within safe zones (keep critical content 5% inset from all edges)
- [ ] CTA is legible at thumbnail size (50% zoom test)
- [ ] Logo is present and uses exact hex brand color — not eyedropped
- [ ] Dark mode tested if the asset will appear in environments with dark mode (email, app)
- [ ] Filename matches convention: `[client]-[campaign]-[angle]-[size]-[version].[ext]`
- [ ] Version is correct — not overwriting an existing file
- [ ] Filed in the correct `00_shared/assets/[campaign]/[platform]/` subfolder
