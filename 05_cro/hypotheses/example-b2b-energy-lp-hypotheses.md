# CRO Hypotheses: B2B Energy Management LP

> **Example output.** These hypotheses were generated as a GrowthOS demo for a fictional B2B energy management company targeting manufacturers.

---

## HYPOTHESIS #1 — Guarantee Badge Above the Fold

```
HYPOTHESIS #1
─────────────
Observation:    ICP research shows "burned by vendor promises" is the #1 objection.
                No trust signal appears above the fold on current LP.
Source:         ICP research brief — verbatim: "Last vendor promised 20% savings, delivered 4%"
Hypothesis:     If we add a "Guaranteed savings or you don't pay" badge next to the
                CTA, then form submission rate will increase because it neutralizes
                the #1 purchase objection at the decision moment.
Test type:      A/B
Primary metric: Form submission rate
Secondary metrics: CTA click rate, scroll depth
Guardrail metric:    Lead quality score
Guardrail threshold: SQL rate must not drop below 15%
Minimum duration: 2 weeks
Minimum sample:   3,000 per variant (est. 5% baseline CVR, 20% MDE)
ICE Score:
  Impact (1–10):     8
  Confidence (1–10): 7
  Ease (1–10):       9
  ICE Total:         8.0
Status: backlog
Result:
Learning:
```

---

## HYPOTHESIS #2 — Dashboard Screenshot Replaces Generic Hero

```
HYPOTHESIS #2
─────────────
Observation:    Manufacturing buyers distrust stock imagery and want to see the product.
                Current hero is a generic factory photo that communicates nothing specific.
Source:         ICP research — "Show me the ROI or don't bother scheduling a call"
Hypothesis:     If we replace the hero image with an annotated product dashboard showing
                real savings data, then engagement and conversion will increase because it
                proves the product is real and shows the outcome immediately.
Test type:      A/B
Primary metric: Form submission rate
Secondary metrics: Scroll depth past fold, time on page
Guardrail metric:    Bounce rate
Guardrail threshold: Bounce rate stays within ±5% of control
Minimum duration: 2 weeks
Minimum sample:   3,000 per variant
ICE Score:
  Impact (1–10):     7
  Confidence (1–10): 8
  Ease (1–10):       7
  ICE Total:         7.3
Status: backlog
Result:
Learning:
```

---

## HYPOTHESIS #3 — Reduce Form from 6 Fields to 3

```
HYPOTHESIS #3
─────────────
Observation:    B2B forms with >5 fields see 15-25% higher abandonment per additional field.
                Current form asks: name, email, phone, company, plant count, revenue.
Source:         CRO best practice + form optimization framework
Hypothesis:     If we reduce the form to 3 fields (name, email, company), then form
                completion rate will increase because we remove friction at the commitment
                moment. Sales can qualify on the follow-up call.
Test type:      A/B
Primary metric: Form completion rate
Secondary metrics: Form start rate, time to complete
Guardrail metric:    SQL rate
Guardrail threshold: SQL rate must not drop below 12% (currently ~18%)
Minimum duration: 2 weeks
Minimum sample:   3,000 per variant
ICE Score:
  Impact (1–10):     7
  Confidence (1–10): 8
  Ease (1–10):       9
  ICE Total:         8.0
Status: backlog
Result:
Learning:
```

---

## HYPOTHESIS #4 — "48-Hour Audit Delivery" Timestamp

```
HYPOTHESIS #4
─────────────
Observation:    Manufacturers value speed — they're used to vendors taking weeks.
                No timeline is stated on the current LP for when the audit arrives.
Source:         ICP research — manufacturing decision-makers penalize ambiguity
Hypothesis:     If we add "Your audit delivered in 48 hours" next to the CTA, then
                conversion will increase because it sets a concrete expectation and
                reduces perceived commitment.
Test type:      A/B
Primary metric: Form submission rate
Secondary metrics: CTA click rate
Guardrail metric:    Lead quality score
Guardrail threshold: SQL rate stays within ±3%
Minimum duration: 2 weeks
Minimum sample:   3,000 per variant
ICE Score:
  Impact (1–10):     6
  Confidence (1–10): 7
  Ease (1–10):       10
  ICE Total:         7.7
Status: backlog
Result:
Learning:
```

---

## HYPOTHESIS #5 — Industry-Specific Social Proof

```
HYPOTHESIS #5
─────────────
Observation:    Current testimonial is generic ("a manufacturer"). Manufacturers trust
                peers in their specific vertical — automotive trusts automotive, not food & bev.
Source:         ICP research — peer referral is the #1 evaluation method for this ICP
Hypothesis:     If we show testimonials tagged by industry (automotive, food & bev,
                industrial) with a filter, then conversion will increase because
                visitors see proof from someone in their specific context.
Test type:      A/B
Primary metric: Form submission rate
Secondary metrics: Time on page, testimonial section scroll engagement
Guardrail metric:    Bounce rate
Guardrail threshold: Bounce rate stays within ±5%
Minimum duration: 3 weeks (need more time for segment-level analysis)
Minimum sample:   5,000 per variant
ICE Score:
  Impact (1–10):     6
  Confidence (1–10): 6
  Ease (1–10):       5
  ICE Total:         5.7
Status: backlog
Result:
Learning:
```

---

## Optimization Roadmap

| Phase | Timeline | Hypotheses | Dependency |
|---|---|---|---|
| Quick wins | Week 1-2 | #1 (guarantee badge) + #4 (48-hr timestamp) | Copy-only changes, no engineering |
| Form test | Week 3-4 | #3 (form reduction) | Form rebuild, A/B instrumentation |
| Hero test | Month 2 | #2 (dashboard hero) | Design + screenshot creation |
| Proof segmentation | Month 3 | #5 (industry-specific proof) | Engineering for filter + 3-4 testimonials sourced |
