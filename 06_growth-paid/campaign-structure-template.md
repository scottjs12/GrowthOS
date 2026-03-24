# Campaign Structure Template

> Fill this out before touching the ad platform. Every campaign follows this structure. No improvising in-platform.

## Campaign Setup

```
CAMPAIGN STRUCTURE
──────────────────
Campaign name:    [client]_[channel]_[objective]_[audience]_[date]
                  Example: acme_meta_conversions_casual-hobbyist_2026-Q2
Objective:        [Awareness | Traffic | Conversions | App Installs | Lead Gen]
Platform:         [Meta | Google | LinkedIn | TikTok | YouTube]
Flight dates:     Start: _____ End: _____
Daily budget:     $_____ (total campaign budget: $_____)
Bid strategy:     [Lowest cost | Cost cap | Bid cap | Target CPA]
```

## Audience Structure

```
AUDIENCE TIERS
──────────────
Tier 1 — Prospecting (Cold)
  Audience name:    _____
  Targeting:        [Interests | Behaviors | Lookalike source + %]
  Size estimate:    _____
  Budget split:     ___% of total

Tier 2 — Warm (Engaged)
  Audience name:    _____
  Targeting:        [Site visitors | Engagers | Video viewers | Email list]
  Lookback window:  [7d | 14d | 30d | 60d | 90d | 180d]
  Budget split:     ___% of total

Tier 3 — Hot (Retargeting)
  Audience name:    _____
  Targeting:        [Cart abandoners | Trial users | Pricing page visitors]
  Lookback window:  [7d | 14d | 30d]
  Budget split:     ___% of total
```

Rule: Default split is 70% prospecting / 30% retargeting. Adjust only when retargeting ROAS exceeds 3x prospecting.

## Ad Set Structure

| Ad Set | Audience | Placement | Creative | Budget |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

## Creative Assignments

| Creative Name | Format | Copy Variant | Visual Variant | Status |
|---|---|---|---|---|
| | Static / Video / Carousel | V1 / V2 / V3 | A / B / C | Draft / Live / Paused |
| | | | | |
| | | | | |

## UTM Parameters

```
UTM BUILDER
────────────
utm_source:     [meta | google | linkedin | tiktok]
utm_medium:     [paid-social | paid-search | display | video]
utm_campaign:   [campaign-name — match campaign name above]
utm_content:    [ad-set-name or creative-name]
utm_term:       [keyword — search only]

Full URL example:
https://yoursite.com/lp?utm_source=meta&utm_medium=paid-social&utm_campaign=acme_meta_conversions_casual-hobbyist_2026-Q2&utm_content=hidden-gems-v1
```

Rules: All lowercase. Hyphens, not underscores or spaces. No PII in UTMs.

## Performance Thresholds (set before launch)

| Metric | Target | Kill Threshold | Scale Threshold |
|---|---|---|---|
| CPA | $_____ | >$_____ for 3+ days | <$_____ for 5+ days |
| CTR | _____% | <_____% after 48h | >_____% sustained |
| ROAS | _____x | <_____x after 7 days | >_____x sustained |
| Frequency | <3.5 / 7 days | >3.5 = creative fatigue | — |
| CPM | $_____ (benchmark) | >2x benchmark = audience saturation | — |

Rule: Set these BEFORE launch. Never decide kill/scale thresholds after seeing data — that's how bias enters.

## Pre-Launch Checklist

- [ ] Campaign name follows naming convention
- [ ] Audiences built and sized in platform
- [ ] Budget and bid strategy configured
- [ ] Creative uploaded with correct specs
- [ ] UTMs built and tested (click through, verify in analytics)
- [ ] Pixel/conversion event confirmed firing
- [ ] Performance thresholds documented above
- [ ] Ops trafficking checklist signed off
- [ ] Analytics notified — dashboard ready to receive data

## Post-Launch Monitoring Schedule

| Timeframe | Action |
|---|---|
| 4 hours | Confirm data flowing in analytics. Check for delivery issues. |
| 24 hours | First CPM/CTR read. No decisions yet. |
| 48 hours | First CPA read. Kill any creative with CTR <1%. |
| Day 7 | Mid-flight review. Kill underperformers. Shift budget to winners. |
| Day 14+ | Full performance review. Scale or close per thresholds above. |
