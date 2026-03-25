# Budget Optimizer

> Analyzes spend vs. performance across campaigns, identifies over/under-spending, and recommends reallocations to maximize conversions within the existing budget.

## Cadence
Weekly — run every Monday. Also run ad-hoc when total account CPA drifts > 20% from target for 3+ days.

## What You Get
- Campaign-level performance table with efficiency scores
- Reallocation recommendations with dollar amounts and expected impact
- Pacing check: on-track, underpaced, or overpaced vs. monthly budget

## What You Need First
- [ ] Google Ads MCP connected (or campaign performance export)
- [ ] Client context loaded (`clients/[client-name]/context.md`)
- [ ] Active media plan from `clients/[client-name]/paid/media-plan.md`
- [ ] Monthly budget targets and CPA/ROAS goals

## Prompt Chain

### Step 1: Pull Campaign Performance Data

**With MCP:**
```
Query Google Ads for campaign-level performance over the last 7 days and last 30 days.

GAQL for 7-day:
SELECT
  campaign.name,
  campaign.status,
  campaign_budget.amount_micros,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions,
  metrics.cost_per_conversion,
  metrics.conversions_value
FROM campaign
WHERE segments.date DURING LAST_7_DAYS
  AND campaign.status = 'ENABLED'
ORDER BY metrics.cost_micros DESC

Run the same query with LAST_30_DAYS for trend comparison.
```

**Without MCP:**
```
I'm pasting my campaign performance data. Include: campaign name, 7-day spend, 7-day conversions, 7-day CPA, 30-day spend, 30-day conversions, 30-day CPA, daily budget, monthly budget target.
```

### Step 2: Score Campaign Efficiency

For each campaign, calculate:

1. **CPA Index:** Campaign CPA / Target CPA
   - < 0.8 = Outperforming (scale candidate)
   - 0.8-1.2 = On target (maintain)
   - 1.2-2.0 = Underperforming (optimize or reduce)
   - > 2.0 = Critical (pause or restructure)

2. **Trend Direction:** Compare 7-day CPA to 30-day CPA
   - Improving (7d CPA < 30d CPA): trending better
   - Stable (within 10%): holding
   - Degrading (7d CPA > 30d CPA by 10%+): trending worse

3. **Volume Score:** Conversions per day
   - High: > 5/day (statistical confidence)
   - Medium: 2-5/day (directional)
   - Low: < 2/day (insufficient data for decisions)

4. **Pacing Status:** (Cost to date / Expected cost to date) x 100
   - 90-110% = On pace
   - < 90% = Underpaced (leaving budget on the table)
   - > 110% = Overpaced (will exhaust budget early)

### Step 3: Generate Reallocation Recommendations

Apply these rules:

**INCREASE budget (up to +20%) if:**
- CPA Index < 0.8 AND Trend is Improving or Stable AND Volume is Medium+
- Campaign is underpaced AND performing well

**DECREASE budget (up to -20%) if:**
- CPA Index > 1.5 AND Trend is Degrading
- Campaign is overpaced AND underperforming

**PAUSE if:**
- CPA Index > 2.0 for 14+ days with no improvement trend
- Zero conversions in last 7 days with meaningful spend (> $500)

**HOLD if:**
- Volume Score is Low — not enough data to decide
- CPA Index is 0.8-1.2 regardless of trend

**Rule:** Never recommend a budget change > 20% in a single adjustment — per AGENT.md, changes > 20% require a new campaign or operator escalation.

### Step 4: Produce the Output

```
BUDGET OPTIMIZATION SUMMARY
────────────────────────────
Period:           [date range]
Total budget:     $[monthly] / month ($[daily] / day)
Spend to date:    $[amount] ([X]% of monthly target)
Pacing status:    [On pace / Underpaced by X% / Overpaced by X%]
Account CPA:      $[actual] vs $[target] target ([X]% of target)

CAMPAIGN PERFORMANCE
| Campaign | 7d Spend | 7d Conv | 7d CPA | CPA Index | Trend | Volume | Pacing | Action |
|---|---|---|---|---|---|---|---|---|
| [name] | $X | X | $X | 0.75 | Improving | High | On pace | INCREASE +15% |
| [name] | $X | X | $X | 1.85 | Degrading | Medium | Overpaced | DECREASE -20% |
...

RECOMMENDED REALLOCATIONS
| Campaign | Current Daily | Recommended Daily | Change | Expected Impact |
|---|---|---|---|---|
| [name] | $X | $X | +$X (+15%) | ~X additional conversions/week at $Y CPA |
| [name] | $X | $X | -$X (-20%) | Save $X/week, reduce waste conversions |
...

Net impact: [+/- $X reallocation], estimated [+X conversions/week] improvement

ESCALATION FLAGS
- [Any campaigns requiring > 20% change — escalate to operator]
- [Any campaigns recommended for pause — escalate to PM]
```

### Step 5: Apply (MCP only, requires approval)

If MCP is connected, offer to apply budget changes:
```
Ready to adjust [count] campaign budgets. Each change requires your explicit approval.

Budget changes:
1. [Campaign name]: $X/day → $Y/day (+15%)
2. [Campaign name]: $X/day → $Y/day (-20%)
...

Approve all / Review one-by-one / Export only?
```

**Rule:** Default to "Export only." Budget changes are high-stakes — never auto-apply.

## Output Filing

Save to: `clients/[client-name]/paid/ops/YYYY-MM-DD_budget-optimization.md`

## Quality Check

Before filing:
- [ ] No single recommendation exceeds 20% change
- [ ] Campaigns with Low volume are marked HOLD, not changed
- [ ] Pacing math is correct (spend-to-date vs expected for this point in month)
- [ ] Escalation flags are present for any recommended pauses or > 20% aggregate changes
- [ ] Reallocation is budget-neutral (increases = decreases within existing budget)
