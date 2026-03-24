# LP Audit Checklist — CRO

> Systematic evaluation framework for any landing page. Run on every new LP and quarterly for high-traffic pages. Outputs feed directly into the hypothesis backlog in `05_cro/cro-hypothesis-log.md`.

---

## How to Use This

Score each section 1–5 using the criteria below. Total score is out of 35.

| Score Range | Action |
|---|---|
| < 20 | Major rebuild needed — audit is a formality, escalate to PM + Scott |
| 20–27 | Meaningful optimization opportunities — generate hypotheses for top findings |
| 28–35 | Page is solid — test specific elements, don't redesign |

Run each section in order. Do not skip sections because you assume it's fine.

---

## Section 1 — Above the Fold (Score: __ / 5)

- [ ] Headline communicates a specific outcome, not a feature or category
- [ ] Value prop is visible without scrolling on both desktop and mobile
- [ ] Primary CTA is visible above the fold — not buried
- [ ] Page loads in < 3 seconds on mobile (test via PageSpeed Insights)
- [ ] Hero image or visual reinforces the headline — does not contradict or distract from it

**Score 5:** All five pass. **Score 3:** Three pass. **Score 1:** Fewer than two pass.

---

## Section 2 — Message Match (Score: __ / 5)

- [ ] Ad headline and LP headline use the same language or direct continuation
- [ ] The keyword or angle that brought the visitor is reflected in the LP copy
- [ ] The promise made in the ad (offer, claim, specific benefit) is fulfilled on the LP
- [ ] No bait-and-switch: what the ad showed and what the LP delivers are the same thing
- [ ] Segment-specific pages exist for high-volume audience splits (where traffic warrants it)

**Flag:** Any mismatch between ad copy and LP headline is a guaranteed conversion killer. Fix before testing anything else.

---

## Section 3 — Trust Signals (Score: __ / 5)

- [ ] Social proof is present above the fold or within first scroll
- [ ] Social proof uses specific numbers, not vague claims ("10,000 customers" not "thousands of happy users")
- [ ] Logo bar, testimonials, or case study callouts are present and credible
- [ ] Security badges or certifications present if the page asks for payment or sensitive data
- [ ] Testimonials name real people with real context (name, company, role) — not anonymous quotes

**Rule:** Specific always beats vague. "We reduced churn by 34% in 90 days — Lena T., Head of Growth at Recurly" beats "Great product!" every time.

---

## Section 4 — CTA (Score: __ / 5)

- [ ] Single primary CTA — no competing calls to action
- [ ] CTA uses an action verb that describes the outcome, not the mechanics ("Get my free audit" not "Submit")
- [ ] CTA button is a high-contrast color that stands out from the surrounding design
- [ ] CTA is repeated at logical scroll intervals (typically: above fold, post-proof, end of page)
- [ ] Friction words removed: never use "Submit", "Register", "Sign up". Use "Start", "Get started", "Try free", "See results", "Get [specific thing]"

---

## Section 5 — Form (Score: __ / 5)

- [ ] Field count is at the absolute minimum required for the offer
- [ ] Multi-step format used if > 4 fields are required
- [ ] Progress indicator is visible on multi-step forms
- [ ] Autofill is enabled on all fields (correct `autocomplete` attribute set)
- [ ] Inline validation — errors appear next to the field, not summarized at the top of the form

**Benchmark:** Every additional field reduces conversion rate by approximately 7–11%. Justify each field or remove it.

---

## Section 6 — Page Speed (Score: __ / 5)

Measure via [PageSpeed Insights](https://pagespeed.web.dev/) or Lighthouse. Use mobile scores — that is the benchmark.

- [ ] LCP (Largest Contentful Paint) < 2.5 seconds
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] FID (First Input Delay) / INP < 100ms
- [ ] Hero image is optimized (WebP format, correct dimensions, no oversized files)
- [ ] Below-fold images use lazy loading

**Rule:** Page speed is a conversion variable, not just an engineering concern. A 1-second delay in mobile load time reduces conversions by up to 20%. Flag speed issues as high-priority audit findings.

---

## Section 7 — Mobile (Score: __ / 5)

More than half of paid traffic lands on mobile. Design and audit mobile-first.

- [ ] All tap targets are ≥ 44 × 44px (Apple HIG minimum)
- [ ] No horizontal scroll at any viewport width
- [ ] Body font is ≥ 16px (smaller than 16px triggers zoom on iOS, which breaks layout)
- [ ] CTA is in the thumb zone (bottom third of screen on mobile) or sticky
- [ ] Above-the-fold experience on mobile passes the same headline/CTA visibility check as desktop

---

## Audit Output

File a completed audit using the summary format from AGENT.md:

```
LP AUDIT SUMMARY
────────────────
Page URL:
Audit date:
Traffic/month:
Current conversion rate:
Audit scores:
  Above the fold:  __ / 5
  Message match:   __ / 5
  Trust signals:   __ / 5
  CTA:             __ / 5
  Form:            __ / 5
  Page speed:      __ / 5
  Mobile:          __ / 5
  TOTAL:           __ / 35
Top 3 findings:
  1. [Finding] — [Severity: High/Med/Low] — [Hypothesized fix]
  2.
  3.
Hypotheses generated: [Link to entries in cro-hypothesis-log.md]
```

File completed audits in `05_cro/lp-audits/` and route findings to PM for scheduling.
