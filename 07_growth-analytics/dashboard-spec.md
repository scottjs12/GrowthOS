# Dashboard Specification

> How to build your growth dashboards. This spec defines 5 interconnected dashboards — build them in your preferred tool (Looker Studio, Metabase, Mixpanel, or custom).

## Overview

| Dashboard | Refresh | Audience | Purpose |
|---|---|---|---|
| Executive Summary | Weekly | Strategist, PM | Single-page health check |
| Channel Performance | Daily | Paid, PM | Channel-level spend, CAC, ROAS |
| Landing Page Performance | Daily | CRO, Designer, Engineer | Page-level conversion rates |
| ICP Deep Dive | Weekly | Researcher, Content, Paid | Segment-level behavior and conversion |
| Experiment Tracker | Daily | CRO, PM, Analytics | Active test status and results |

---

## Dashboard 1: Executive Summary

**Purpose:** The Monday morning report. One page, everything that matters.

**Metrics:**

| Section | Metrics | Source |
|---|---|---|
| North Star | [North Star metric] — current, WoW change, vs. target | Product analytics |
| Acquisition | Visitors, signups, blended CAC, paid spend | GA4 + ad platforms |
| Activation | Signup → [key action] rate, time to activate | Product analytics |
| Retention | D7, D30 retention, DAU/MAU | Product analytics |
| Revenue | MRR/revenue, ARPU, LTV:CAC | Billing + analytics |
| Channels | Top 3 channels by volume + CAC | Ad platforms + GA4 |

**Visualizations:**
- KPI cards with WoW trend arrows (green up, red down)
- Funnel chart: Visitors → Signups → Activated → Retained → Paying
- Channel performance bar chart (spend vs. conversions)
- Mini sparklines for 8-week trend on each KPI

**Filters:** Date range, ICP segment

---

## Dashboard 2: Channel Performance

**Purpose:** Daily optimization. Where is money going, and what's it producing?

**Metrics:**

| Metric | Breakdown | Source |
|---|---|---|
| Spend | By channel, campaign, ad set | Ad platforms |
| Impressions | By channel | Ad platforms |
| Clicks / CTR | By channel, campaign | Ad platforms |
| CPC | By channel | Ad platforms |
| Conversions (signups) | By channel, campaign | Ad platforms + GA4 |
| CAC | By channel | Calculated |
| ROAS | By channel | Calculated |
| Activation rate | By channel | Product analytics |

**Visualizations:**
- Channel comparison table (sortable by spend, CAC, ROAS)
- Spend vs. conversions scatter plot by campaign
- Daily spend trend line (last 30 days)
- CAC trend by channel (last 30 days)

**Filters:** Date range, channel, campaign, ICP segment

---

## Dashboard 3: Landing Page Performance

**Purpose:** Page-level conversion intelligence. Which pages convert, which leak.

**Metrics:**

| Metric | Breakdown | Source |
|---|---|---|
| Page views | By page, source | GA4 |
| Unique visitors | By page | GA4 |
| Scroll depth | 25/50/75/100% by page | GA4 custom events |
| Time on page | Average, by page | GA4 |
| CTA click rate | By page, CTA location | GA4 custom events |
| Signup rate | Page view → signup | GA4 + product analytics |
| Bounce rate | By page, source | GA4 |

**Visualizations:**
- Page comparison table (sortable by views, conversion rate)
- Funnel: Page view → Scroll 50% → CTA click → Signup (by page)
- Heatmap-style grid: pages x sources, colored by conversion rate
- A/B test variant comparison (when tests are running)

**Filters:** Date range, page, traffic source, ICP segment

---

## Dashboard 4: ICP Deep Dive

**Purpose:** Segment-level understanding. Which ICPs convert, retain, and monetize best?

**Metrics:**

| Metric | Breakdown | Source |
|---|---|---|
| Signups | By ICP segment | Product analytics |
| Activation rate | By ICP | Product analytics |
| D7/D30 retention | By ICP | Product analytics |
| LTV | By ICP | Billing + analytics |
| CAC | By ICP | Ad platforms |
| LTV:CAC | By ICP | Calculated |
| Top channels per ICP | By ICP x channel | Ad platforms + GA4 |
| Top content angles per ICP | By ICP x creative angle | Ad platforms |

**Visualizations:**
- ICP comparison table (all key metrics side by side)
- Retention curves by ICP (D1 → D90)
- LTV:CAC ratio by ICP (bar chart with 3x threshold line)
- Channel x ICP matrix (colored by ROAS)

**Filters:** Date range, ICP segment, channel

---

## Dashboard 5: Experiment Tracker

**Purpose:** Active test status and historical results. What's running, what's winning.

**Metrics:**

| Metric | Detail | Source |
|---|---|---|
| Active experiments | Name, hypothesis, start date, status | Manual / experiment tracker |
| Sample size progress | Current vs. required per variant | Analytics tool |
| Primary metric | Control vs. variant, current lift | Analytics tool |
| Statistical significance | Current confidence level | Analytics tool / calculated |
| Guardrail metrics | Status (within range / flagged) | Analytics tool |

**Visualizations:**
- Active experiment cards (name, days running, sample %, preliminary result)
- Completed experiment log (last 10, with win/loss/inconclusive tag)
- Win rate trend (monthly rolling)
- Cumulative impact chart (sum of winning test lifts over time)

**Filters:** Status (active/completed/killed), agent owner, date range

---

## Implementation Guide

### Step 1: Choose Your Tool

| Tool | Best For | Cost |
|---|---|---|
| Looker Studio | Google ecosystem, free, good for GA4 | Free |
| Metabase | Self-hosted, SQL-friendly, open source | Free (self-hosted) |
| Mixpanel/Amplitude | Product analytics native dashboards | Included in plan |
| Custom (Retool, Streamlit) | Full control, API integrations | Varies |

### Step 2: Build in Priority Order

1. **Executive Summary** — build first, use from week 1
2. **Channel Performance** — build when paid campaigns launch
3. **Landing Page Performance** — build when 2+ pages are live
4. **Experiment Tracker** — build when first A/B test starts
5. **ICP Deep Dive** — build when 2+ ICP segments have data

### Step 3: Connect Data Sources

| Source | Connection Method |
|---|---|
| GA4 | Native connector (Looker Studio) or GA4 Data API |
| Meta Ads | Marketing API or manual CSV export |
| Google Ads | Native connector (Looker Studio) or API |
| Product analytics | API or native dashboards |
| Billing | Stripe API or manual export |
| Manual data | Google Sheets or CSV import |

### Step 4: Set Up Refresh Cadence

- **Automated:** GA4, ad platform connectors refresh automatically
- **Semi-automated:** Product analytics — set up scheduled exports or API pulls
- **Manual:** Email metrics, experiment status, ICP deep dive annotations — update weekly (Friday, 15 min)

### Data Schema Templates

CSV templates for standardized data exports live in `07_growth-analytics/data-schemas/`:
- `weekly-performance.csv` — Campaign-level weekly metrics
- `funnel-weekly.csv` — Funnel conversion by segment and channel
- `cohort-monthly.csv` — Cohort retention analysis

Use these schemas when exporting data from ad platforms or analytics tools to ensure consistency.
