# Email Sequences Playbook

> Lifecycle email frameworks for Growth CRM. Every sequence here is a starting template — adapt triggers, timing, and copy to the client's product and ICP.

## Activation / Onboarding Sequence

**Trigger:** User signs up
**Goal:** Drive first [key action] within 24 hours, complete onboarding within 7 days
**Exit condition:** User completes onboarding milestone OR enters win-back sequence after 14 days of inactivity

| # | Timing | Subject Framework | Purpose | Send Condition |
|---|---|---|---|---|
| 1 | Immediate | Welcome + quick-start | Orient, set expectations, drive first action | All new signups |
| 2 | +24h | Nudge toward first action | Overcome inertia, show easiest path | Has NOT completed first key action |
| 3 | +48h | Social proof / success story | Build confidence through peer examples | Has NOT completed first key action |
| 4 | +24h after first action | Congrats + next step | Celebrate, introduce next milestone | Completed first key action |
| 5 | +7d | Check-in + value reinforcement | Reinforce habit, surface advanced features | Completed onboarding |

**Branching logic:**
- If user completes first key action before Email 2 → skip to Email 4
- If user completes onboarding before Email 5 → skip to Email 5
- If no engagement after Email 3 → wait 7 days, then enter Win-Back sequence

**Design rules:**
- One CTA per email. No exceptions.
- Keep body under 150 words. Mobile-first.
- Use the user's name and any known context (signup source, stated goal)
- Test subject lines: direct benefit vs. curiosity — run A/B on Email 1 and 2

---

## Win-Back / Re-Engagement Sequence

**Trigger:** User inactive for 7+ days (no login, no key action)
**Goal:** Reactivate within 30 days
**Exit condition:** User performs any key action OR reaches end of sequence

| # | Timing | Subject Framework | Purpose | Approach |
|---|---|---|---|---|
| 1 | Day 0 (trigger) | "We noticed you've been away" | Soft re-engagement, highlight what's new | Gentle, no pressure |
| 2 | +5 days | Value re-frame | Remind them why they signed up | Restate core value prop |
| 3 | +7 days | Social proof | Show what peers are achieving | Peer comparison / FOMO |
| 4 | +7 days | Incentive (if applicable) | Offer discount, extended trial, or exclusive | Only if business model supports it |
| 5 | +7 days | Final check-in / breakup | Last touch, offer feedback survey | Honest, respectful close |

**Rules:**
- Suppress win-back emails if user is receiving any active campaign emails
- If user reactivates at any point → exit sequence immediately, re-enter lifecycle
- After Email 5 with no reactivation → move to "dormant" segment. Do not email again for 90 days.
- Never send more than 1 win-back email per week

---

## Milestone / Lifecycle Sequence

**Trigger:** User hits a defined milestone (usage-based, value-based, or time-based)
**Goal:** Celebrate progress, deepen engagement, prompt referral

**Milestone trigger examples (customize per client):**
- First [key action] completed
- 10th / 50th / 100th [key action]
- [Value threshold] reached (e.g., $100 saved, 1,000 units tracked)
- 30-day active streak
- Account anniversary (1 month, 6 months, 1 year)

**Milestone email framework:**

```
MILESTONE EMAIL
───────────────
Subject:         [Celebrate the specific achievement]
Opening:         Acknowledge what they did (specific number/stat)
Body:            Context — what this means, how they compare to peers (if applicable)
Next step:       Suggest the next milestone or feature to try
Social prompt:   "Share your [achievement]" with pre-written share text + link
Referral prompt: "Know someone who'd benefit?" (only after 2+ milestones)
```

**Weekly digest framework (optional, for high-engagement products):**

```
WEEKLY DIGEST
─────────────
Subject:         "[Name]'s week in review" or "Your weekly [product] update"
Section 1:       Activity summary (key metrics from the past 7 days)
Section 2:       Highlight (best result, biggest change, new record)
Section 3:       Tip or feature spotlight (rotate weekly)
Section 4:       Community highlight (if applicable — top post, trending topic)
CTA:             One action — "Continue where you left off" or "Try [feature]"
```

**Rules:**
- Milestone emails are high-performers — never skip them. They have 2-3x open rates vs. standard lifecycle.
- Include a referral prompt after the 2nd milestone, not the 1st. Let users build confidence before asking.
- Weekly digests require a data feed. Route implementation to Engineer, strategy to CRM.
- Suppress digest if user has been inactive >14 days — switch to win-back instead.

---

## General Sequence Rules

1. **One sequence at a time.** A user should never be in both onboarding and win-back simultaneously. Priority: Onboarding > Win-back > Milestone.
2. **Suppression windows:** No more than 1 lifecycle email per 24 hours. No lifecycle + campaign email on the same day.
3. **Exit conditions are mandatory.** Every sequence must define when a user exits. Open-ended sequences create spam.
4. **Test everything.** A/B test subject lines on the first 2 emails of every sequence. Test send times quarterly.
5. **Performance thresholds:** Open rate <10% → rewrite subject. Click rate <1% → rewrite body or kill the email. Unsubscribe rate >0.5% on any single email → investigate immediately.
6. **Handoff to Ops:** CRM defines the strategy, writes the copy, and reviews performance. Ops configures the ESP, sets up triggers, and manages the technical plumbing.
