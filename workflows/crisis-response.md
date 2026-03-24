# Crisis Response Workflow

> Steady-state workflows assume normal operations. This workflow is for when things break, the market shifts, or you need to move faster than your cadence allows. 20% of growth work happens in crisis mode — have a playbook.

## Crisis Types

### Type 1: Tracking/Data Incident
- Trigger: Pixel stops firing, attribution breaks, analytics data looks wrong, events stop flowing
- Severity: HIGH — every hour without tracking is wasted spend
- Response:
  - STEP 1 (0-1h): Paid pauses all campaigns immediately. No spend without tracking.
  - STEP 2 (0-2h): Ops + Engineer diagnose root cause (platform change? code deploy? vendor outage?)
  - STEP 3 (2-4h): Fix deployed and validated. Analytics confirms data flowing.
  - STEP 4 (4-8h): Paid resumes campaigns. Analytics quantifies data gap (how much was lost, is it recoverable?).
  - STEP 5 (24h): Post-mortem filed using `docs/post-mortem-template.md`. Prevention measure implemented.
- Rules: Never "wait and see" on broken tracking. Pause spend immediately. The money you save in 1 hour of paused campaigns > the revenue from running blind.

### Type 2: Budget Runaway
- Trigger: Daily spend exceeds budget by >25%, campaign auto-scaling hits unexpected volume, billing alert
- Severity: HIGH — financial exposure
- Response:
  - STEP 1 (0-30min): Paid caps daily budgets at the approved amount. Set platform-level spend caps.
  - STEP 2 (0-2h): Investigate cause — audience expansion? bid strategy? platform glitch?
  - STEP 3 (2-4h): PM + Paid decide: intentional scale-up (approve), or unintended (revert and document).
  - STEP 4 (24h): Update budget guardrails. Set alerts at 80% and 100% of daily budget.
- Rules: Platform auto-scaling features should always have a hard cap set. If you're not checking spend daily, you will get burned.

### Type 3: Competitor Response
- Trigger: Major competitor launches product update, slashes pricing, raises a round, or runs aggressive campaign
- Severity: MEDIUM — strategic, not urgent (usually)
- Response:
  - STEP 1 (0-24h): Researcher conducts rapid competitive intel sweep. What launched? What's the positioning? What's the user/market reaction?
  - STEP 2 (24-48h): PM convenes Strategist + Content Writer + Paid. Decision: respond, ignore, or accelerate existing roadmap.
  - STEP 3: If responding:
    - Content Writer: Draft response messaging (differentiation, not attack)
    - Paid: Adjust targeting if competitor is bidding on your keywords/audiences
    - SEO: Check if competitor content is threatening key rankings
    - CRM: Proactive retention messaging to at-risk segments
  - STEP 4 (1 week): Monitor impact on your metrics. If no material impact, archive and move on.
- Decision framework:
  - Competitor launched a feature you have? → Accelerate your messaging. You already won.
  - Competitor launched a feature you don't have? → Don't panic. Monitor adoption. Only respond if user demand is real.
  - Competitor slashed pricing? → Do NOT match. Compete on value. Price wars have no winners at startup stage.
- Rules: Most competitor moves don't require a response. The default action is "monitor and continue." Only respond when your metrics actually move.

### Type 4: Viral Moment / Unexpected Demand
- Trigger: Press mention, viral social post, influencer shoutout, Product Hunt feature — traffic spikes 5x+
- Severity: MEDIUM-HIGH — opportunity cost if you don't capitalize
- Response:
  - STEP 1 (0-2h): Ops confirms infrastructure can handle the load (server capacity, email sends, payment processing)
  - STEP 2 (0-4h): Content Writer drafts social response amplifying the moment (don't let it pass silently)
  - STEP 3 (0-4h): Paid considers budget shift to capitalize (retarget the new visitors)
  - STEP 4 (24h): CRM ensures onboarding emails are firing for the surge of new signups
  - STEP 5 (48h): Analytics reports on cohort quality (are these viral users retaining, or is it empty traffic?)
  - STEP 6 (1 week): PM decides: was this a one-time spike or a repeatable channel? If repeatable, document and add to channel strategy.
- Rules: Viral moments have a 24-48h window. If you don't amplify in that window, it's gone. Have a "viral response" template ready.

### Type 5: Data Integrity / Fraud
- Trigger: Sudden spike in bot signups, affiliate fraud, click fraud, suspicious conversion patterns
- Severity: HIGH — financial and data contamination
- Response:
  - STEP 1 (0-2h): Paid pauses affected campaigns/channels. Ops quarantines suspicious data.
  - STEP 2 (0-4h): Analytics investigates patterns (IP clustering, device fingerprints, conversion timing anomalies)
  - STEP 3 (4-24h): Implement blocks (IP blocking, bot detection, affiliate suspension)
  - STEP 4 (24-48h): Quantify damage (how much spend was wasted, how much data is contaminated)
  - STEP 5: Cleanse data — remove fraudulent conversions from dashboards and cohort analysis
  - STEP 6: Post-mortem with prevention measures
- Rules: If you suspect fraud, pause first, investigate second. A day of paused spend costs less than a month of contaminated data.

## General Crisis Protocol

```
╔══════════════════════════════════════╗
║       CRISIS RESPONSE TEMPLATE       ║
╚══════════════════════════════════════╝

Incident:
Type:           [Tracking | Budget | Competitor | Viral | Fraud]
Severity:       [HIGH | MEDIUM]
Detected by:    [Agent/Person]
Time detected:
Time resolved:
Resolution time:

IMMEDIATE ACTIONS (0-2h)
─────────────────────────
- [ ] Affected campaigns paused (if applicable)
- [ ] Root cause identified
- [ ] Stakeholders notified (PM + Strategist for HIGH severity)

INVESTIGATION (2-24h)
─────────────────────
- [ ] Full scope assessed
- [ ] Financial impact quantified
- [ ] Fix implemented and validated

POST-INCIDENT (24-48h)
──────────────────────
- [ ] Post-mortem filed (docs/post-mortem-template.md)
- [ ] Prevention measure implemented
- [ ] Monitoring/alerts set up to detect recurrence
- [ ] Affected metrics cleaned in dashboards
```

## Escalation Matrix

| Severity | Who Gets Notified | Response SLA |
|---|---|---|
| HIGH | PM + Strategist + affected agents | 1 hour |
| MEDIUM | PM + affected agents | 4 hours |
| LOW | PM only (next standup) | 24 hours |

## Rules

- The default crisis response is PAUSE, then investigate. Never "wait and see" during a crisis.
- Every crisis gets a post-mortem. No exceptions. Even if the fix was simple.
- Crisis mode has a time limit. If an incident isn't resolved in 48h, it becomes a project with a dedicated brief.
- Prevention > response. After every crisis, ask: "What alert would have caught this earlier?"
- Keep a crisis log. If the same type of incident happens 3x, the system has a structural problem.
