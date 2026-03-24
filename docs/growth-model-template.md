# Growth Model Template

> The quantitative story of how the business grows. Inputs → outputs. Updated monthly by the Strategist, validated quarterly against actuals.

## How to Use This Model

1. Fill in current baseline numbers (Column: Baseline)
2. Set targets for 90-day planning horizon (Column: Target)
3. Identify the 2-3 input levers with the highest sensitivity (where a small % improvement yields the biggest output change)
4. Those levers become your experiment priorities for the quarter
5. Update actuals monthly. If actuals diverge >20% from model, revisit assumptions.

---

## Acquisition Model

```
ACQUISITION MODEL
─────────────────
                                    Baseline    Target    Actual    Gap
Monthly unique visitors:            [     ]     [     ]   [     ]   [   ]
  ├─ Organic search:                [     ]     [     ]   [     ]
  ├─ Paid (Meta):                   [     ]     [     ]   [     ]
  ├─ Paid (Google):                 [     ]     [     ]   [     ]
  ├─ Social (organic):              [     ]     [     ]   [     ]
  ├─ Email:                         [     ]     [     ]   [     ]
  ├─ Referral:                      [     ]     [     ]   [     ]
  └─ Direct / other:               [     ]     [     ]   [     ]

LP → Signup conversion rate:        [   %]      [   %]    [   %]
Monthly signups:                    [     ]     [     ]   [     ]
Blended CAC:                        [$    ]     [$    ]   [$    ]
  ├─ Paid CAC:                      [$    ]     [$    ]   [$    ]
  └─ Organic CAC:                   [$    ]     [$    ]   [$    ]
```

## Activation Model

```
ACTIVATION MODEL
────────────────
                                    Baseline    Target    Actual    Gap
Signup → First [key action] rate:   [   %]      [   %]    [   %]   [   ]
Time to first [key action]:         [  hrs]     [  hrs]   [  hrs]
Signup → Onboarding complete rate:  [   %]      [   %]    [   %]
Time to onboarding complete:        [  days]    [  days]  [  days]
Activated users / month:            [     ]     [     ]   [     ]
Activation cost (CAC ÷ activation rate): [$  ]  [$    ]   [$    ]
```

## Retention Model

```
RETENTION MODEL
───────────────
                                    Baseline    Target    Actual    Gap
Day 1 retention:                    [   %]      [   %]    [   %]   [   ]
Day 7 retention:                    [   %]      [   %]    [   %]
Day 30 retention:                   [   %]      [   %]    [   %]
Day 90 retention:                   [   %]      [   %]    [   %]
Monthly active users (MAU):         [     ]     [     ]   [     ]
DAU / MAU ratio:                    [   %]      [   %]    [   %]
Churn rate (monthly):               [   %]      [   %]    [   %]
Average user lifetime (months):     [     ]     [     ]   [     ]
```

## Revenue Model

```
REVENUE MODEL
─────────────
                                    Baseline    Target    Actual    Gap
Free → Paid conversion rate:        [   %]      [   %]    [   %]   [   ]
ARPU (monthly):                     [$    ]     [$    ]   [$    ]
LTV:                                [$    ]     [$    ]   [$    ]
LTV:CAC ratio:                      [   x]     [   x]    [   x]
Monthly recurring revenue (MRR):    [$    ]     [$    ]   [$    ]
Monthly revenue (non-recurring):    [$    ]     [$    ]   [$    ]
Payback period (months):            [     ]     [     ]   [     ]
```

## Referral Model

```
REFERRAL MODEL
──────────────
                                    Baseline    Target    Actual    Gap
% of users who refer:               [   %]      [   %]    [   %]   [   ]
Referrals sent per referrer:        [     ]     [     ]   [     ]
Referral → Signup conversion rate:  [   %]      [   %]    [   %]
Viral coefficient (k):             [     ]     [     ]   [     ]
Referred user LTV vs. average:      [   %]      [   %]    [   %]
```

## The Growth Equation

```
GROWTH EQUATION
───────────────
New users this month =
  (Paid visitors × paid CVR)
+ (Organic visitors × organic CVR)
+ (Existing users × referral rate × referral CVR)
- Churned users

Net growth = New users - Churned users
Target net growth: [     ] / month
Current net growth: [     ] / month
Gap: [     ]
```

## Sensitivity Analysis

Identify which input levers move the output most. Fill in after baseline is set.

| Input Lever | Current | If Improved 10% | Impact on Monthly Signups | Impact on MRR | Priority |
|---|---|---|---|---|---|
| LP conversion rate | | | | | |
| Paid traffic volume | | | | | |
| Activation rate | | | | | |
| Day 30 retention | | | | | |
| Free → Paid conversion | | | | | |
| Referral rate | | | | | |
| ARPU | | | | | |
| Churn rate | | | | | |

**Rule:** The top 2-3 rows by MRR impact become your quarterly experiment priorities. Don't spray effort across all 8. Focus.

## Channel Economics

| Channel | Monthly Spend | Visitors | Signups | CAC | LTV:CAC | Verdict |
|---|---|---|---|---|---|---|
| Meta | | | | | | [Scale / Maintain / Test / Kill] |
| Google Search | | | | | | |
| Google PMax | | | | | | |
| TikTok | | | | | | |
| Organic Search | $0 (content cost: ) | | | | | |
| Email | $0 (tool cost: ) | | | | | |
| Referral | | | | | | |
| Influencer | | | | | | |

**Rule:** LTV:CAC > 3x = scale aggressively. 1-3x = optimize. <1x = fix or kill. Never scale a channel below 1x.

## Quarterly Review Template

```
QUARTERLY MODEL REVIEW
──────────────────────
Quarter:
Reviewed by:
Date:

What the model predicted:
What actually happened:
Biggest variance and why:
Assumptions that were wrong:
Model updates needed:
Next quarter priorities (top 3 levers):
  1.
  2.
  3.
```
