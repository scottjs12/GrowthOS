# Media Buyer Brief Template

> Handoff template from Growth PM / Paid Agent to an external or internal media buyer. Self-contained — the recipient should not need repo access.

---

## Campaign Overview

```
MEDIA BUYER BRIEF
─────────────────
Campaign name:
Client:
Date:
Prepared by:
Brief version:
```

### Objective
- **Goal:** [Awareness / Traffic / Leads / Conversions / App Installs]
- **Primary KPI:** [CPA / ROAS / CTR / CPM / Installs]
- **Target:** [e.g., CPA < $X, ROAS > X:1]
- **Budget:** [Total budget and daily cap]
- **Flight dates:** [Start — End]

### Target Audience

**ICP segment:** [Reference ICP profile name]

| Parameter | Detail |
|---|---|
| Age range | |
| Gender | |
| Location | |
| Interests | |
| Behaviors | |
| Lookalike seed | [Event or audience to base LAL on] |
| Exclusions | [Existing customers, competitors, etc.] |

**Audience tiers to run:**
- [ ] Tier 1 — Retargeting (specify windows: hot/warm/cold)
- [ ] Tier 2 — Lookalike (specify % and seed)
- [ ] Tier 3 — Interest + Behavioral
- [ ] Tier 4 — Broad

### Creative Assets

| Asset Name | Format | Dimensions | File Location |
|---|---|---|---|
| | Static / Video / Carousel / HTML | | |
| | | | |
| | | | |

**Ad copy variants:**

| Variant | Headline | Primary Text | CTA |
|---|---|---|---|
| A | | | |
| B | | | |
| C | | | |

### Landing Page
- **URL:**
- **UTM parameters:** Follow UTM conventions (see below)
- **Tracking confirmed:** [ ] Pixel installed [ ] Events firing [ ] UTMs passing

### Campaign Structure

**Platform:** [Meta / Google / TikTok / LinkedIn / Other]

**Recommended structure:**
```
Campaign: [Campaign name]
├── Ad Set 1: [Audience tier + segment]
│   ├── Ad 1: [Creative A + Copy A]
│   ├── Ad 2: [Creative A + Copy B]
│   └── Ad 3: [Creative B + Copy A]
├── Ad Set 2: [Audience tier + segment]
│   └── ...
```

**Bid strategy:** [Lowest cost / Cost cap / Bid cap / Target ROAS]
**Budget allocation:** [Per ad set or CBO]
**Optimization event:** [Purchase / Lead / Add to cart / Page view]

### UTM Convention

```
utm_source=[platform]
utm_medium=[cpc|paid-social]
utm_campaign=[icp]_[angle]_[version]_[date]
utm_content=[creative-type]_[hook-id]
utm_term=[keyword or audience segment]
```

### Performance Rules

| Condition | Action |
|---|---|
| CTR < 1% after 48h | Kill ad, test new creative |
| CTR > 2% | Scale budget +25% |
| CPA > [target × 1.5] | Review targeting + creative |
| CPA < [target × 0.75] | Scale budget +50% |
| Frequency > 3.0 | Refresh creative |
| Spend > $50 with 0 conversions | Pause and investigate |

### Reporting Cadence

- **Daily:** Spend, impressions, CTR, CPA (automated dashboard or spreadsheet)
- **Weekly:** Performance summary with recommendations (shared in [channel])
- **Monthly:** Full report with learnings, next month plan

### Handoff Checklist

- [ ] Brief reviewed by Growth PM
- [ ] Creative assets delivered and approved
- [ ] Landing page live and tracking verified
- [ ] UTM parameters confirmed
- [ ] Pixel/conversion events tested
- [ ] Budget approved
- [ ] Performance rules understood
- [ ] Reporting cadence agreed
- [ ] Escalation contact identified: [Name / Slack / Email]
