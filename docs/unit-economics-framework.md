# Unit Economics Framework

> Every growth decision is a capital allocation decision. If you don't know your unit economics, you're guessing with someone else's money.

## Core Metrics

### Customer Acquisition Cost (CAC)
- Formula: Total sales + marketing spend / New customers acquired (in period)
- Blended CAC: All channels combined
- Channel CAC: Per-channel (paid, organic, referral, sales-assisted)
- Fully-loaded CAC: Include salaries, tools, overhead — not just ad spend
- Rule: Always report both blended and channel CAC. Blended hides channel problems.

### Lifetime Value (LTV)
- Simple: Average revenue per user × Average lifespan (months)
- Better: Average revenue per user × Gross margin × (1 / Monthly churn rate)
- Best: Cohorted LTV — track actual revenue per cohort over 3/6/12/24 months
- Rule: Never use projected LTV to justify spend. Use observed LTV at your current retention rate. Aspirational LTV is not LTV.

### LTV:CAC Ratio
- Target: >3:1 for sustainable growth
- 1:1 = breaking even (losing money after overhead)
- 2:1 = viable but tight — optimize before scaling
- 3:1 = healthy — scale spend
- 5:1+ = under-investing in growth — spend more or competitors will
- Rule: Calculate by segment. A 4:1 blended ratio can hide a 1:1 segment that's burning cash.

### CAC Payback Period
- Formula: CAC / (Monthly revenue per customer × Gross margin)
- Target by stage:
  - Seed/Series A: <18 months (you have runway, not profit)
  - Series B: <12 months
  - Series C+: <6 months (efficiency matters now)
  - Public: <3 months (Wall Street watches this)
- Rule: If payback > runway remaining, you are literally spending yourself to death. This is the most important metric at Series A.

### Gross Margin
- Formula: (Revenue - COGS) / Revenue
- For SaaS: hosting, support, infrastructure
- For marketplace: payment processing, fraud, fulfillment
- Rule: Growth spend should be measured against gross margin dollars, not revenue. A $100 customer at 80% margin gives you $80 to work with, not $100.

## Unit Economics Template

```
UNIT ECONOMICS SNAPSHOT
───────────────────────
Period:           [Month/Quarter]
Prepared by:      [Growth Analytics]

ACQUISITION
───────────
Blended CAC:              $___
  Paid CAC:               $___
  Organic CAC:            $___
  Referral CAC:           $___
  Sales-assisted CAC:     $___
New customers:            ___
Total acquisition spend:  $___

MONETIZATION
────────────
ARPU (monthly):           $___
Gross margin:             ___%
Revenue (period):         $___
MRR / ARR:                $___

RETENTION
─────────
Monthly churn rate:       ___%
Net revenue retention:    ___%
  (>100% = expansion revenue exceeds churn)
Average customer lifespan: ___ months

UNIT ECONOMICS
──────────────
LTV (observed, 12-month): $___
LTV (projected):          $___
LTV:CAC ratio:            ___:1
CAC payback (months):     ___
Gross margin payback:     ___

EFFICIENCY
──────────
Magic Number:             ___
  (Net new ARR / Prior quarter S&M spend)
  >1.0 = efficient, scale aggressively
  0.5-1.0 = optimize, then scale
  <0.5 = fix fundamentals before spending more

Burn multiple:            ___
  (Net burn / Net new ARR)
  <1 = excellent efficiency
  1-2 = acceptable at Series A/B
  >2 = inefficient — investigate
```

## Segment Economics
- Always calculate unit economics by:
  - Plan tier (free, pro, enterprise)
  - Acquisition channel (paid, organic, referral, sales)
  - ICP segment (each persona)
  - Geography (if international)
- Rule: A healthy blended number can mask a segment that's underwater. Segment economics reveal where to double down and where to cut.

## Board Reporting Cadence
- Monthly: CAC, LTV:CAC, payback period, MRR, churn (in growth dashboard)
- Quarterly: Full unit economics snapshot, cohort analysis, segment economics, efficiency metrics
- Rule: Never surprise the board. If unit economics are trending wrong, flag it in the monthly update with a plan — don't wait for quarterly.

## Decision Framework
| Scenario | Signal | Action |
|---|---|---|
| LTV:CAC > 5:1 | Under-investing | Increase spend 25-50%. Test new channels. |
| LTV:CAC 3-5:1 | Healthy | Scale winning channels. Maintain efficiency. |
| LTV:CAC 2-3:1 | Caution | Optimize before scaling. Focus on retention to increase LTV. |
| LTV:CAC < 2:1 | Danger | Pause new channel tests. Fix retention or reduce CAC. |
| Payback > 12 months | Cash risk | Shift to lower-CAC channels. Consider pricing increase. |
| Churn > 5% monthly | Leaky bucket | Pause acquisition scaling. Fix retention first. |
| Net revenue retention > 120% | Expansion engine | Growth can be retention-led. Reduce acquisition pressure. |
| Magic Number < 0.5 | Inefficient | Audit channel mix. Cut underperforming spend. |

## Rules
- Report observed LTV, not projected. Projected LTV is a fantasy until you have 12+ months of cohort data.
- Always include gross margin in payback calculations. Revenue-based payback is a lie.
- Segment everything. Blended metrics hide problems and opportunities.
- If you can't calculate LTV because you're too early, use 90-day revenue per user as a proxy. Don't skip the math.
- Update unit economics monthly. Quarterly is too slow — by the time you see the problem, you've burned 3 months of cash.
