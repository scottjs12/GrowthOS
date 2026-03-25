# Weekly Paid Review

> Full account health check that runs every Monday. Combines search term mining, budget optimization, creative fatigue detection, and audience performance into a single structured review.

## Cadence
Every Monday — this is the Paid agent's contribution to the weekly operating rhythm (`workflows/weekly-rhythm.md`).

## What You Get
- Account-level health scorecard (Green/Yellow/Red per metric)
- Top 3 actions for the week, prioritized by impact
- Outputs from search term mining and budget optimization (runs both skills inline)
- Creative fatigue alerts with refresh recommendations
- Audience performance breakdown with scaling/cutting recommendations

## What You Need First
- [ ] Google Ads MCP connected (or platform exports for last 7 days)
- [ ] Client context loaded (`clients/[client-name]/context.md`)
- [ ] Last week's review (if exists) from `clients/[client-name]/paid/ops/`
- [ ] Active media plan from `clients/[client-name]/paid/media-plan.md`

## Prompt Chain

### Step 1: Account Health Scorecard

Pull account-level metrics for last 7 days vs. prior 7 days:

| Metric | This Week | Last Week | Change | Status |
|---|---|---|---|---|
| Total Spend | $X | $X | +X% | G/Y/R |
| Conversions | X | X | +X% | G/Y/R |
| CPA | $X | $X | +X% | G/Y/R |
| ROAS | X.Xx | X.Xx | +X% | G/Y/R |
| CTR | X.X% | X.X% | +X% | G/Y/R |
| Impression Share | X% | X% | +X% | G/Y/R |

**Status rules:**
- Green: Metric within 10% of target or improving
- Yellow: Metric 10-25% off target or degrading
- Red: Metric > 25% off target or degrading for 2+ weeks

### Step 2: Run Search Term Mining

Execute the full `mine-search-terms.md` skill inline. Include the summary in this review, file the detailed CSV separately.

### Step 3: Run Budget Optimization

Execute the full `budget-optimizer.md` skill inline. Include the summary in this review, file the detailed recommendations separately.

### Step 4: Creative Fatigue Check

For each active ad, check these signals:

| Signal | Threshold | Action |
|---|---|---|
| Frequency | > 3.5 in 7 days | Flag for creative refresh |
| CTR trend | Declining 3+ days while CPM holds | Flag for creative refresh |
| CPA trend | Increasing 3+ days while CTR declining | Flag for creative refresh |

```
CREATIVE FATIGUE REPORT
───────────────────────
Ads showing fatigue signals:
1. [Ad name] in [Campaign] — Frequency: X.X, CTR: X.X% (down from X.X%), CPM: $X (flat)
   → Recommendation: Request fresh variants from Designer. Angle "[angle]" is exhausted for this audience.
2. ...

Ads with healthy creative life:
- [Ad name] — Frequency: X.X, CTR stable, launched [X days ago]
...

Creative refresh requests to file:
- [ ] [Campaign/Ad set]: Need [count] new [format] variants by [date]
```

**Rule:** When fatigue is detected, route to Designer + Content Writer immediately — per AGENT.md, do not wait for the scheduled creative review.

### Step 5: Audience Performance

Break down performance by audience tier:

```
AUDIENCE PERFORMANCE
────────────────────
| Tier | Audience | Spend | Conv | CPA | CPA vs Target | Trend | Action |
|---|---|---|---|---|---|---|---|
| T1 Retarget | [name] | $X | X | $X | X% | → | HOLD |
| T2 Lookalike | [name] | $X | X | $X | X% | ↑ | SCALE |
| T3 Interest | [name] | $X | X | $X | X% | ↓ | CUT |
| T4 Broad | [name] | $X | X | $X | X% | → | TEST |

Audience actions:
- SCALE: [audience] — Increase budget 15%, CPA is 30% below target and trending down
- CUT: [audience] — Reduce budget 20%, CPA is 50% above target for 2 weeks
- TEST: [audience] — New audience in learning phase, review again next week
```

### Step 6: Weekly Actions

Synthesize everything into 3-5 prioritized actions:

```
TOP ACTIONS THIS WEEK
─────────────────────
1. [URGENT] Negate X search terms wasting $X/week → run mine-search-terms apply step
2. [HIGH] Reallocate $X from [campaign] to [campaign] → budget-optimizer recommendations
3. [HIGH] Request creative refresh for [campaign] — fatigue detected → file brief to Designer
4. [MEDIUM] Scale [audience] — outperforming, room to grow
5. [LOW] Add X new keywords from search term mining

Escalation items (require operator approval):
- [Item requiring > 20% budget change or strategic decision]
```

## Output Filing

Save to: `clients/[client-name]/paid/ops/YYYY-MM-DD_weekly-paid-review.md`

Sub-outputs filed separately:
- `clients/[client-name]/paid/ops/YYYY-MM-DD_search-term-mining.csv`
- `clients/[client-name]/paid/ops/YYYY-MM-DD_search-term-mining-summary.md`
- `clients/[client-name]/paid/ops/YYYY-MM-DD_budget-optimization.md`

## Quality Check

Before filing:
- [ ] All 5 sections completed (scorecard, search terms, budget, creative, audience)
- [ ] Status colors (G/Y/R) match the defined thresholds
- [ ] Actions are prioritized by impact, not just listed
- [ ] Escalation items are flagged — nothing requiring > 20% budget change is buried in the actions list
- [ ] Previous week's review was referenced for trend context (if exists)
- [ ] Creative fatigue flags have been routed to Designer + Content Writer
