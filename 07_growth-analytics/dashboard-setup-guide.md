# Dashboard Setup & Weekly Fill-In Guide

> How to set up and maintain your growth dashboards. 15 minutes on Friday keeps the system running.

## Initial Setup (One-Time, ~2 hours)

### 1. Build the Executive Summary Dashboard
Follow the spec in `dashboard-spec.md`. Start with the Executive Summary — it's the only dashboard you need from day one.

### 2. Connect Your Data Sources
- [ ] GA4 connected (page views, events, sessions by source)
- [ ] Ad platform(s) connected or export process established
- [ ] Product analytics accessible (activation, retention metrics)
- [ ] Billing data accessible (revenue, ARPU, LTV)

### 3. Define Your KPI Slots
Map these generic slots to your specific metrics:

| Slot | Your Metric | Source | How to Pull |
|---|---|---|---|
| North Star | | | |
| Signups | | | |
| Activation rate | | | |
| Retention (D7) | | | |
| Retention (D30) | | | |
| Blended CAC | | | |
| MRR / Revenue | | | |
| LTV:CAC | | | |

### 4. Set Up Conditional Formatting
- **Green:** On or above target
- **Yellow:** 5-20% below target
- **Red:** >20% below target
- **Trend arrows:** ↑ (>5% WoW improvement), → (flat ±5%), ↓ (>5% WoW decline)

---

## Weekly Fill-In Process (Every Friday, 15 min)

### Automated Data (just verify)
These should pull automatically if connected:
- [ ] Page views and sessions (GA4)
- [ ] CTA clicks and scroll depth (GA4 custom events)
- [ ] Traffic by source/medium (GA4)

### Semi-Automated Data (pull from platforms)
- [ ] Ad spend by channel (Meta/Google/TikTok dashboards)
- [ ] Signups by source (product analytics or CRM)
- [ ] Campaign-level metrics (export or screenshot)

### Manual Data (fill in yourself)
- [ ] Email performance (open rates, click rates by sequence)
- [ ] Experiment status updates (running, completed, results)
- [ ] ICP breakdown (if not automated)
- [ ] This week's wins (1-3 bullets)
- [ ] Next week's priorities (1-3 bullets)
- [ ] Notes and flags for Strategist review

### Review & Share
- [ ] Scan for red/yellow status — these drive Monday priorities
- [ ] Share via agreed channel (Slack, Notion, email, or repo)
- [ ] Archive snapshot (save as `00_shared/reporting/weekly-snapshots/week-YYYY-MM-DD.md`)

---

## Monthly Deep Dive (First Friday of Month, 30 min)

In addition to the weekly fill-in:
- [ ] Pull cohort retention data (`cohort-monthly.csv` schema)
- [ ] Update growth model actuals (`docs/growth-model-template.md`)
- [ ] Fill in the monthly review template (`00_shared/reporting/monthly-review-template.md`)
- [ ] Review channel economics (LTV:CAC by channel — kill anything <1x)
- [ ] Update ICP deep dive dashboard with latest segment data

---

## Troubleshooting

| Problem | Fix |
|---|---|
| GA4 data not updating | Check connector permissions, verify tracking events are firing |
| Ad spend numbers don't match | Compare date ranges and attribution windows across platforms |
| Conversion numbers inconsistent | Verify event definitions match between analytics and ad platforms |
| Dashboard loads slowly | Reduce date range, pre-aggregate data, limit real-time queries |
| Missing data for a metric | Check if the event is instrumented — route to Engineer if not |
