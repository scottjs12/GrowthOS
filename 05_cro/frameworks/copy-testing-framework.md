# Copy Testing Framework — CRO

> How to systematically test copy angles on landing pages and ads. Use this alongside `05_cro/cro-hypothesis-log.md` and the ICE scoring guide in AGENT.md.

---

## The 5 Primary Copy Angles

| Angle | Core Mechanism | Trigger Phrase Pattern |
|---|---|---|
| **Pain** | Surface the problem the user already feels | "Tired of..." / "Stop wasting..." / "Still dealing with..." |
| **Desire** | Sell the aspirational outcome, not the product | "Imagine..." / "What if you could..." / "Finally..." |
| **Fear** | Activate loss aversion — what happens if they don't act | "Every day you wait..." / "While you're doing X, competitors are..." |
| **Social proof** | Reduce decision anxiety by showing what others did | "Join 10,000+ teams who..." / "How [Company] did X in Y days" |
| **Curiosity** | Open an information gap the user must close | "The one thing most [ICP] get wrong about..." / "Why X doesn't work anymore" |

---

## When to Use Each Angle

**Pain** — Use for cold audiences who are actively aware of their problem. Works best when the pain is daily, specific, and emotionally charged. Do not use for aspirational or luxury products — pain framing cheapens the brand.

**Desire** — Use for aspirational products where the outcome is more motivating than the problem. Works for products where the user is already sold on the category — they just need to choose you.

**Fear** — Use for high-stakes decisions where inaction has real consequences (security, compliance, churn, competitive risk). Use sparingly — fear fatigue is real and overuse destroys credibility.

**Social proof** — Use for crowded markets where the ICP has seen many competing claims and trusts peer evidence more than brand claims. Works at all funnel stages. Always the strongest angle for warm retargeting.

**Curiosity** — Use for low-awareness audiences who don't yet recognize the problem. Works well for content-first funnels and top-of-funnel paid. Does not work for high-intent bottom-funnel pages — the user already knows what they want.

---

## Test Structure

Always test angle first, then execution within the winning angle. Testing execution before confirming the angle wastes budget.

**Round 1 — Angle test**
Test 3 angles head-to-head with equal traffic splits. Hold visual design constant. Change headline and subheadline only. Run until 100 conversions per variant minimum.

Example: Pain headline vs. Curiosity headline vs. Social proof headline — same page design, same CTA, same form.

**Round 2 — Execution test**
Take the winning angle from Round 1. Test 3 executions: different hook phrasing, different specificity, different emotional intensity. Same angle, different expression.

Example: Winning angle is Pain. Test: "Tired of losing deals to follow-up?" vs. "Most sales reps lose 30% of deals in follow-up. Here's why." vs. "You're not losing deals because of your product."

**Round 3 — CTA test**
Take the winning execution from Round 2. Test 2 CTA variants against each other. Smaller change, smaller lift — but compounds with previous wins.

---

## Measurement

**Primary metric:** Conversion rate (form submit, button click, trial start — whatever is the page goal).

**Guardrail metric:** Bounce rate. High conversion rate paired with high bounce rate means the copy is misleading — attracting clicks from the wrong audience or overpromising. Flag this immediately. A misleading win is worse than a loss.

**Secondary signals:** Time on page, scroll depth. These validate whether the copy is holding attention, even if the conversion signal hasn't reached significance yet.

**Minimum sample before calling:** 100 conversions per variant. Do not call a test early because one variant looks like it's winning. Refer to the sample size table in AGENT.md for exact requirements.

---

## Hypothesis Template for Copy Tests

```
COPY TEST HYPOTHESIS
────────────────────
Current angle:    [What angle the control uses]
Proposed angle:   [What angle the variant will test]
Observation:      [What data or signal suggests this angle might outperform]
Hypothesis:       If we change the headline angle from [current] to [new angle],
                  then [conversion rate] will [increase] because [mechanism —
                  specifically what the ICP psychology response is]
Control copy:
  Headline:
  Subheadline:
Variant copy:
  Headline:
  Subheadline:
Primary metric:   Conversion rate
Guardrail metric: Bounce rate (must not increase by more than 5pp)
Min. conversions: 100 per variant
ICE Score:        [From cro-hypothesis-log.md]
```

---

## Rules

Never test copy and design simultaneously. If the headline and the hero image change at the same time, you cannot attribute the result to either. The learning is worthless.

Never test more than one copy element per round. Headline and CTA are two separate tests.

Always document the "why" behind the angle selection. The mechanism is the learning — not the result. A win with no understanding of why it won produces no replicable insight. A loss with a clear mechanism tells you more than a win without one.

Use ICP research from `01_growth-researcher/ICP-profiles.md` to select which angle to test first. If the ICP is problem-aware and actively searching, start with Pain. If the ICP is solution-aware and comparing options, start with Social proof. Don't test randomly — use what you know about the audience to make an informed first bet.
