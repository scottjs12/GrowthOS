# CRO Hypothesis Generator

> Produces ICE-scored, testable hypotheses from a landing page URL or conversion data. Uses CRO agent methodology.

## What You Get
- 3-5 ICE-scored hypotheses ready for experiment backlog
- Each hypothesis has a mechanism, primary metric, guardrail, and sample size estimate
- Prioritized by ICE score — highest priority first

## What You Need First
- [ ] Landing page URL or description of the page/funnel
- [ ] Current conversion rate (or best estimate)
- [ ] Monthly traffic to the page
- [ ] Any existing data: heatmaps, session recordings, funnel drop-off data (optional but valuable)
- [ ] Prior test results for this page (don't repeat failed tests)

## Prompt Chain

### Step 1: Load Context
```
Load the CRO agent: @05_cro/AGENT.md
Also reference: @05_cro/frameworks/lp-audit-checklist.md

Landing page: [URL or detailed description of the page]
Current conversion rate: [X%]
Monthly traffic: [X visitors]
Conversion event: [What counts as a conversion — signup, purchase, demo request]

Available data:
- Heatmap findings: [Summary or "none"]
- Session recording insights: [Summary or "none"]
- Funnel drop-off data: [Where users drop off, or "none"]
- Prior test results: [What's been tested before and what happened]
```

### Step 2: Run the LP Audit
```
Run the LP Audit Protocol from CRO AGENT.md:

Step 1 — Heuristic evaluation:
- Above the fold: Is the headline clear? 10-second test?
- Value prop: Specific or generic?
- CTA: Visible? Specific? Friction (form fields)?
- Trust signals: Present? Believable?
- Mobile: Above-the-fold experience work?

Step 2 — Behavioral data review (if available):
- Scroll depth: Where do people drop off?
- Click patterns: Clicking what you expect?
- Rage clicks: Where are people frustrated?

Step 3 — Funnel analysis:
- Highest drop-off step
- Value of fixing it: (current CVR - benchmark CVR) x volume x LTV estimate

Present your top 3 audit findings ranked by severity.
```

### Step 3: Generate Hypotheses
```
From your audit findings, generate 3-5 hypotheses using the CRO hypothesis format:

For each hypothesis:

HYPOTHESIS
──────────
Observation:     [What you noticed — backed by data or heuristic finding]
Source:          [Audit step / heatmap / session recording / funnel data]
Hypothesis:      If we [change X], then [metric Y] will [increase/decrease] because [mechanism Z]
Test type:       [A/B / Multivariate / Split URL]
Primary metric:  [One KPI]
Secondary metrics: [1-2 supporting signals]
Guardrail metric:  [Metric that must NOT degrade]
Guardrail threshold: [Acceptable range]
Minimum duration:  [Days — minimum 2 weeks]
Minimum sample:    [Users per variant for 95% confidence — reference the sample size table in AGENT.md]
ICE Score:
  Impact (1-10):
  Confidence (1-10):
  Ease (1-10):
  ICE Total:

Rules:
- Every hypothesis must have a mechanism. "Adding social proof will increase conversions" is not a hypothesis.
- ICE scores must be honest — no inflation. Use the scoring guide in AGENT.md.
- Never repeat a previously failed hypothesis without a new mechanism.
- One variable per test.
```

### Step 4: Prioritize & Plan
```
Rank all hypotheses by ICE score (highest first).

For the #1 hypothesis, provide:
1. Exactly what changes between control and variant
2. Estimated timeline to build and launch
3. Which agents need to be involved (Content Writer for copy? Designer for visual? Engineer for build?)
4. What the PM brief should say

For hypotheses #2-5, provide a one-line summary and ICE score only — they go in the backlog.

Present the final output as a prioritized backlog ready to file in cro-hypothesis-log.md.
```

## Example Output (Hypothesis #1)

**Observation:** CTA button says "Get Started" — generic, doesn't tell the user what happens next. Scroll depth data shows 60% of users reach the CTA but only 3% click.

**Source:** Heuristic evaluation + scroll depth data

**Hypothesis:** If we change the CTA from "Get Started" to "Create Your First Video Free," then CTA click rate will increase because specific CTAs reduce uncertainty about what happens after clicking.

**Test type:** A/B
**Primary metric:** CTA click rate
**Secondary:** Signup completion rate
**Guardrail:** Bounce rate (must stay within ±5%)
**Duration:** 2 weeks
**Sample:** ~30,000 per variant (at 5% baseline CVR, 20% MDE)
**ICE:** Impact 7 / Confidence 8 / Ease 10 / **Total: 8.3**

## Tips
- Run this generator quarterly on every high-traffic page
- File output in `clients/[client-name]/cro/hypotheses/` and update `cro-hypothesis-log.md`
- Route the #1 hypothesis to PM for scheduling — don't sit on it
- After the test closes, use the Learning Synthesis Format in CRO AGENT.md to file results
