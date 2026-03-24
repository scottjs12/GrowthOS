# RevOps Playbook

> Lead management framework for Growth Ops. Score, route, and follow up — no lead left behind.

## 7-Stage Lead Lifecycle

```
LEAD LIFECYCLE
──────────────
Stage 1: Anonymous     → Known visitor, no identity captured
Stage 2: Known         → Identity captured (email, form fill, signup)
Stage 3: Engaged       → 2+ meaningful interactions in 14 days
Stage 4: MQL           → Meets scoring threshold (fit + engagement)
Stage 5: SQL           → Sales-accepted, qualified via conversation
Stage 6: Opportunity   → Active deal, pipeline stage assigned
Stage 7: Customer      → Closed-won, enters onboarding/retention
```

**Rule:** Every lead must have a current lifecycle stage. If you can't tell what stage a lead is in, your CRM is broken.

## MQL / SQL Definitions

**Marketing Qualified Lead (MQL):**
- Lead score meets or exceeds threshold (default: 50 points)
- At least one fit criterion met (right industry, role, or company size)
- At least one engagement signal (content download, demo request, pricing page visit, webinar attendance)
- No disqualifiers present (competitor domain, student email, spam)

**Sales Qualified Lead (SQL):**
- MQL criteria met
- Sales has accepted the lead (not just received it)
- Budget, authority, need, or timeline confirmed via conversation
- Documented in CRM with notes from qualifying call

## Lead Scoring Model

**Fit Score (0-40 points):**

| Signal | Points |
|---|---|
| Target industry | +15 |
| Decision-maker title | +15 |
| Company size in ICP range | +10 |
| Non-target industry | -10 |
| Student/personal email | -20 |

**Engagement Score (0-60 points):**

| Signal | Points |
|---|---|
| Demo request / free trial signup | +25 |
| Pricing page visit | +15 |
| Content download (gated) | +10 |
| Webinar attendance | +10 |
| Email open (3+ in 7 days) | +5 |
| Blog visit | +3 |
| Unsubscribe | -30 |

**Negative Signals:**

| Signal | Points |
|---|---|
| Competitor domain | -50 (auto-disqualify) |
| Bounced email | -40 |
| No engagement in 30 days | -15 |
| Generic/role email (info@, admin@) | -10 |

**Threshold:** MQL at 50+ points. Adjust per client based on volume and conversion data.

## Speed-to-Lead Benchmarks

| Response Time | Relative Qualification Rate |
|---|---|
| < 5 minutes | 21x baseline |
| 5-10 minutes | 10x baseline |
| 10-30 minutes | 4x baseline |
| 30-60 minutes | 1x baseline (reference) |
| > 60 minutes | 0.3x baseline |

**Rule:** Automate the first response. A human doesn't need to call in 5 minutes — but an automated email, SMS, or in-app message must fire immediately.

## Lead Routing Methods

**Round-robin:** Default for equal-capacity teams. Rotate leads evenly.
**Territory-based:** Route by geography, industry, or company size. Use when reps specialize.
**Score-based:** Highest-scored leads go to top closers. Use sparingly — creates sandbagging incentives.
**Hybrid:** Territory first, then round-robin within territory. Most common in practice.

**Rule:** Never route a lead without context. The routing assignment must include: lead score, lifecycle stage, key engagement events, and any notes from marketing.

## Handoff Checklist

Before any MQL → SQL handoff:
- [ ] Lead score above threshold
- [ ] Lifecycle stage updated to MQL in CRM
- [ ] Key engagement events documented (which content, which pages, how recently)
- [ ] Contact info verified (valid email, phone if available)
- [ ] Routing assignment made (which rep, which territory)
- [ ] Context notes attached (what they downloaded, what they viewed, any chat transcripts)
- [ ] SLA timer started (sales must respond within defined window)
- [ ] Notification sent to assigned rep via CRM + Slack/email

## SLA Framework

| Handoff | SLA | Escalation |
|---|---|---|
| MQL → SQL first contact | 4 hours (business hours) | Auto-escalate to manager |
| SQL → Opportunity stage update | 48 hours | Flag in weekly pipeline review |
| Opportunity → Proposal sent | 5 business days | Ops follow-up |
| Lost deal → Post-mortem logged | 3 business days | Required before new leads assigned |
