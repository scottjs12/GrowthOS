# Product-Led Growth Playbook

> In PLG, the product is the sales team. Users try before they buy. The growth team's job is to remove friction, accelerate time-to-value, and design upgrade triggers that feel natural, not pushy.

## When PLG Applies
- Self-serve signup (no sales call required for first use)
- Value is experienced before payment
- Individual users adopt, then bring teams/orgs
- Usage-based or freemium pricing model
- Product has a natural "aha moment" that happens within the first session

## The PLG Funnel

```
AWARENESS → SIGNUP → ACTIVATION → ENGAGEMENT → CONVERSION → EXPANSION → ADVOCACY
    ↓           ↓          ↓            ↓            ↓            ↓           ↓
  Content    Friction   Time-to-    Habit       Upgrade      Seat        Referral
  + Paid     removal    value       loops       triggers     expansion   program
```

### Stage 1: Signup
- Goal: Minimize friction to first use
- Tactics:
  - Social login (Google, GitHub, Apple)
  - No credit card required for free tier
  - Skip onboarding — let them use the product immediately, guide contextually
  - Progressive profiling — collect data as they use, not on a form
- Metrics: Visitor → signup rate, signup completion rate, time to first action
- Rules: Every field you add to signup loses 10-15% of users. Prove you need it before adding it.

### Stage 2: Activation
- Goal: Get users to the "aha moment" as fast as possible
- Define your aha moment: The single action that, when completed, predicts long-term retention
  - Examples: Slack = send 2,000 messages. Dropbox = save 1 file. Zoom = complete 1 call.
  - How to find it: Cohort analysis — which Day 1 actions correlate with D30 retention?
- Tactics:
  - Onboarding checklist (3-5 steps max, show progress)
  - Pre-populated workspace (don't show empty states — show sample content)
  - Interactive tutorial (guide them through the aha moment, don't just tell them)
  - Immediate value: If possible, show output within 60 seconds of signup
- Metrics: First action rate (1h, 24h), onboarding completion rate, time-to-value
- Rules: If time-to-value exceeds 5 minutes, you will lose 50%+ of signups. Optimize ruthlessly.

### Stage 3: Engagement
- Goal: Build the habit. Daily or weekly active use.
- Tactics:
  - Feature discovery (introduce one new capability per week via tooltip/email)
  - Variable rewards (unexpected value — new templates, AI improvements, community features)
  - Social features (sharing, collaboration, commenting — social ties increase retention 2-3x)
  - Usage milestones ("You've created 10 projects!" — celebrate progress)
  - Weekly digest email (activity summary + prompt to return)
- Metrics: DAU/MAU ratio, feature adoption rate, session frequency, session duration
- Rules: DAU/MAU > 40% = strong habit. 20-40% = decent. < 20% = product-market fit issue, not a growth issue.

### Stage 4: Conversion (Free → Paid)
- Goal: Upgrade when users hit natural limits, not artificial gates
- Upgrade trigger design:
  - Usage limits (storage, exports, team members, API calls)
  - Feature gates (advanced features behind paywall)
  - Quality gates (higher resolution, faster processing, priority access)
  - Collaboration gates (sharing, team features, permissions)
- Rules:
  - The free tier must deliver real value. If free users don't love the product, paid users won't either.
  - Gate based on power-user behavior, not basic functionality. If you gate too early, users never reach the aha moment.
  - Show the paywall at the moment of highest intent — when they're trying to do something, not when they're browsing.
  - Pricing page should be value-framed ("Unlock X"), not restriction-framed ("You've hit your limit")
- Metrics: Free → paid conversion rate, time to conversion, upgrade trigger analysis (which gate converts best)
- Benchmarks: Free → paid conversion: 2-5% is typical, 5-10% is strong, >10% is exceptional

### Stage 5: Expansion
- Goal: Grow revenue from existing customers (seats, usage, tier upgrades)
- Tactics:
  - Seat-based expansion: Individual adopts → invites team → team adopts → org buys
  - Usage-based expansion: As usage grows, spend naturally increases
  - Tier upgrades: Pro → Business → Enterprise (driven by feature needs or compliance requirements)
  - Champion enablement: Give your internal champion the tools to sell internally (ROI calculators, admin dashboards, usage reports)
- Metrics: Net revenue retention (NRR), expansion MRR, seats per account over time
- Rules: NRR > 120% means your existing customers are growing faster than churn. This is the PLG holy grail. If NRR < 100%, you have a retention problem that no amount of acquisition will fix.

### Stage 6: Advocacy
- Goal: Users become acquisition channels
- Tactics:
  - Built-in sharing (exported content has watermark/attribution)
  - Referral program (give value, not discounts — extra storage, credits, features)
  - Community (forums, Discord, user groups)
  - User-generated content (templates, tutorials, showcases)
  - Case studies (turn power users into stories)
- Metrics: Viral coefficient (invites per user × conversion rate), referral CAC, NPS
- Rules: The best referral program feels like a feature, not marketing. "Share your project" > "Refer a friend for $10 off."

## PLG + Sales-Assisted (Hybrid Model)

For products that serve prosumers AND enterprise:

```
SELF-SERVE (PLG)                    SALES-ASSISTED
─────────────────                   ──────────────
Individual signup                   Individual signup
  ↓                                   ↓
Free tier / trial                   Free tier / trial
  ↓                                   ↓
Self-serve upgrade                  Usage signals trigger sales outreach
  ↓                                   ↓
Pro plan ($X/mo)                    Sales qualifies: team size, usage, intent
                                      ↓
                                    Enterprise plan (custom pricing)
                                      ↓
                                    Implementation + onboarding support
```

### Product-Qualified Lead (PQL) Signals
- Define PQLs based on product behavior, not form fills:
  - High usage (top 10% by actions/week)
  - Team collaboration (invited 3+ team members)
  - Feature exploration (tried advanced features)
  - Export/integration activity (connecting to workflow)
  - Repeated visits to pricing page
- Route PQLs to sales within 24h. Speed matters — the buying intent window is short.
- Rule: PQLs convert 5-8x better than MQLs. If you have a PLG product, PQLs should be your primary sales pipeline.

## PLG Metrics Dashboard

| Metric | Frequency | Owner |
|---|---|---|
| Visitor → Signup | Daily | Analytics |
| Signup → Activated | Daily | Analytics + CRM |
| Time-to-value | Weekly | PM + Engineer |
| Free → Paid conversion | Weekly | Analytics |
| DAU/MAU | Weekly | Analytics |
| NRR | Monthly | Analytics + CRM |
| Viral coefficient | Monthly | CRM |
| PQL → SQL conversion | Weekly | Analytics + Sales |

## Rules
- PLG does not mean "no marketing." It means the product does the heavy lifting, and marketing amplifies.
- Free tiers are not charity — they're your top-of-funnel. Treat free users as prospects in an activation funnel.
- Never gate the aha moment behind a paywall. Users must experience value before they're asked to pay.
- PLG metrics are different from traditional SaaS metrics. DAU/MAU matters more than MQLs. Activation rate matters more than lead volume.
- If your product requires a demo to understand, PLG is not your primary motion (but it can be secondary).
