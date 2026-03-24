# Cohort Analysis Template

> Cohort analysis tells the truth that aggregate metrics hide. A growing user base with declining cohort quality is a ticking time bomb. Run this monthly.

## Retention Cohort Table

Track: What percentage of users from each signup cohort are still active in subsequent months?

```
RETENTION COHORT TABLE
──────────────────────
Metric: [Active users | Revenue | Sessions — pick one per table]

         Month 0  Month 1  Month 2  Month 3  Month 4  Month 5  Month 6
Jan '26  100%     42%      28%      22%      19%      17%      16%
Feb '26  100%     45%      31%      25%      21%      18%
Mar '26  100%     48%      33%      27%      23%
Apr '26  100%     51%      35%      29%
May '26  100%     53%      37%
Jun '26  100%     55%
Jul '26  100%
```

### How to Read It
- **Rows** = signup cohorts (when users joined)
- **Columns** = months since signup
- **Diagonal** = same calendar month across cohorts
- **Improving cohorts** = Month 1 retention trending up (42% → 45% → 48% → 51% → 53% → 55%)
- **Declining cohorts** = Month 1 retention trending down — acquisition quality is dropping or product is degrading

### What to Look For
| Pattern | Signal | Action |
|---|---|---|
| Month 1 retention improving over time | Product/onboarding is getting better | Keep iterating on activation |
| Month 1 retention declining over time | Acquisition quality dropping OR product degrading | Investigate: new channels bringing worse users? Onboarding broken? |
| Retention curve flattens at Month 3-4 | You've found your "core" users | Focus on getting more users to Month 3 (activation) |
| Retention curve never flattens | No habit forming | Product problem — not a growth problem |
| Later months are flat but low (5-10%) | Retention floor exists but it's too low | Retention/engagement investments needed |

## Revenue Cohort Table

Track: How much cumulative revenue does each cohort generate over time?

```
REVENUE COHORT TABLE (Cumulative $ per user)
─────────────────────────────────────────────

         Month 0  Month 1  Month 2  Month 3  Month 4  Month 5  Month 6
Jan '26  $0       $12      $22      $30      $36      $41      $45
Feb '26  $0       $14      $25      $34      $40      $45
Mar '26  $0       $15      $27      $37      $43
```

### Key Metrics to Extract
- **LTV at Month 6/12:** Actual observed revenue per user per cohort
- **Payback month:** When cumulative revenue per user exceeds CAC
- **Expansion signal:** If Month 6 revenue per user > Month 1 x 6, users are spending more over time (expansion revenue)
- **Contraction signal:** If later cohorts generate less revenue at the same month mark, pricing or product value is declining

## Engagement Cohort (Optional — for PLG products)

Track: DAU/MAU ratio or sessions per week by cohort.

```
ENGAGEMENT COHORT (Sessions/week per user)
──────────────────────────────────────────

         Week 1  Week 2  Week 3  Week 4  Week 8  Week 12
Jan '26  4.2     2.8     2.1     1.8     1.5     1.3
Feb '26  4.5     3.1     2.4     2.0     1.7
Mar '26  4.8     3.3     2.6     2.2
```

## Cohort Analysis Checklist

- [ ] Retention cohort table updated (monthly)
- [ ] Revenue cohort table updated (monthly)
- [ ] Trends annotated: are newer cohorts better or worse?
- [ ] Payback period calculated per cohort
- [ ] LTV projection updated with latest cohort data
- [ ] Any cohort with Month 1 retention <30% flagged for investigation
- [ ] Board report updated with cohort chart (quarterly)

## Segmentation

Run separate cohort tables for:
- **By channel:** Paid vs. organic vs. referral (which channel produces the best-retaining users?)
- **By plan:** Free vs. paid (are free users converting at a healthy rate?)
- **By ICP segment:** Do different personas retain differently?
- **By geography:** International vs. domestic (if applicable)

Rule: Segmented cohorts reveal where to invest. If referral users retain 2x better than paid users, your referral program is an LTV play, not just an acquisition play.

## Rules
- Never report aggregate retention. Always cohorted. Aggregate hides declining quality behind growing volume.
- Update monthly. Quarterly is too slow — a bad cohort in January isn't visible until April.
- Compare like-for-like: Jan cohort Month 3 vs. Feb cohort Month 3. Not Jan Month 6 vs. Feb Month 2.
- If retention curves never flatten, you have a product problem, not a growth problem. Flag to Strategist.
- The board wants one chart: retention cohort by month with trend arrow. Make it the centerpiece of the quarterly report.
