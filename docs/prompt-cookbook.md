# Prompt Cookbook

> Copy-paste prompts for every common growth task. Each prompt tells you which files to load and gives you the exact words to use.
>
> **How to use:** In Claude Code, the `CLAUDE.md` routing handles file loading automatically — just paste the prompt. In other AI tools, manually attach the referenced AGENT.md file(s) as context.

---

## Research & Strategy

### Build an ICP Profile
```
Files: 01_growth-researcher/AGENT.md + 01_growth-researcher/icp-template.md

Build a complete ICP profile for [describe your target customer]. Use the ICP template.

Here's what I know about them:
- [Any demographics, behaviors, pain points you already know]
- [Any data from interviews, surveys, or analytics]
- [Current channels where you reach them]

Fill in every section. Flag anything you're guessing on vs. have data for.
```

### Competitive Analysis
```
Files: 01_growth-researcher/AGENT.md

Analyze these 3 competitors: [Competitor 1], [Competitor 2], [Competitor 3].

For each, document using the competitor profile format:
- Positioning and messaging (what they say on their homepage/ads)
- Pricing model
- Primary acquisition channels (where are they advertising/showing up?)
- Strengths to respect
- Weaknesses we can exploit

Rate each as Low / Medium / High threat. End with: what gaps can we own that none of them do well?
```

### Behavioral Psychology Audit
```
Files: 01_growth-researcher/AGENT.md

Review our [signup flow / onboarding / pricing page / landing page] through the COM-B lens:
- Capability: Does the user know how to do what we want?
- Opportunity: Does the environment make it easy?
- Motivation: Do they want to?

Then identify which of the 10 mental models from the psychology toolkit apply. Recommend 3 specific changes based on the psychology, tagged with the model name.

Here's the flow: [describe or paste URL/screenshots]
```

### Community Listening Sweep
```
Files: 01_growth-researcher/AGENT.md

Run a community listening sweep for [product/category].

Sources to check:
- Reddit: [relevant subreddits or say "find the right ones"]
- App Store reviews: [your app + 2-3 competitors]
- [Any other communities: Discord, Facebook groups, Twitter/X]

For each source, capture: exact verbatim language, recurring complaints, delight signals, and category conversations. Output as a research brief I can route to Content Writer and CRO.
```

---

## Content & Copy

### Write Meta Ad Copy (3 variants)
```
Files: 02_content-writer/AGENT.md

Write 3 Meta ad copy variants for [product/offer].

Target ICP: [describe]
Goal: [signups / purchases / app installs]
Landing page: [URL or describe]

Use these angles:
- Variant 1: Pain-led
- Variant 2: Proof-led (use this data: [your best stat or case study])
- Variant 3: [identity-led / curiosity-led — pick one]

For each variant, provide: hook (line 1 that works in isolation), body (2-4 sentences), and CTA. Include character counts.
```

### Write a Cold Email Sequence
```
Files: 02_content-writer/AGENT.md

Write a 5-email cold outbound sequence for [product/service].

Target: [job title / role at company type]
Problem we solve: [one sentence]
Best proof point: [case study, metric, or client name]

Use the OPPA framework for Email 1. Follow the 14-day multi-touch structure:
- Day 0: Open the conversation (OPPA)
- Day 3: Add value (no ask)
- Day 7: Social proof
- Day 10: Different angle
- Day 14: Breakup

Subject lines: 3-5 words, lowercase, no punctuation. Keep each email under 100 words.
```

### Write Landing Page Copy
```
Files: 02_content-writer/AGENT.md

Write full landing page copy for [product/offer].

Target ICP: [describe]
Primary CTA: [what you want them to do]
Key proof points: [stats, testimonials, logos]
Tone: [describe brand voice or paste voice guidelines]

Structure it as:
1. Above the fold: Headline (10 words max) + subhead (one sentence) + CTA
2. Agitate the problem (use ICP language)
3. Introduce the solution
4. Proof section (data, users, outcomes)
5. Handle top 2-3 objections
6. Repeat CTA

Run the clarity test: could someone unfamiliar explain what this does in 10 seconds?
```

### Build a Social Content Calendar
```
Files: 02_content-writer/AGENT.md + 02_content-writer/social-content-playbook.md

Build a 2-week social content calendar for [brand/product].

Active platforms: [list platforms]
Content pillars: [list 3-5 or say "recommend based on playbook"]
Posting frequency: [or say "use playbook defaults"]
Brand voice: [describe or say "see playbook"]

For each post: day, platform, pillar, topic/hook, format (static/video/carousel/text), and draft caption. Every post must fit a pillar — no random posting.
```

### Write a Messaging Matrix
```
Files: 02_content-writer/AGENT.md + 01_growth-researcher/AGENT.md

Build a messaging matrix for [product].

ICP segments:
- Segment 1: [describe]
- Segment 2: [describe]
- Segment 3: [describe]

For each segment, fill in: core tension (verbatim ICP language if possible), primary message, proof point, CTA, and channel fit. This becomes the source of truth for all copy.
```

---

## SEO

### Generate a Keyword Strategy
```
Files: 03_seo/AGENT.md

Build a keyword strategy for [business/product].

Our domain: [URL]
Domain authority: [if known, or say "unknown"]
Current organic traffic: [if known]
Primary topics we want to own: [list 3-5]

Categorize keywords by intent (informational, commercial, transactional). Prioritize using the rules: High = commercial/transactional + KD < 50 + volume > 500/mo. Output as a keyword universe table with volume, difficulty, intent, and priority for each.
```

### Write an SEO Content Brief
```
Files: 03_seo/AGENT.md

Write a content brief for the target keyword: "[keyword]"

Search intent: [informational / commercial / transactional]
Target word count: [or say "recommend based on competitor analysis"]
Current top-ranking content: [describe what's ranking, or list URLs]

Use the SEO content brief format. Include: target and secondary keywords, outline with H2/H3 structure, competitor gaps to exploit, internal linking targets, and the AI search angle.
```

### AI Search (AEO) Audit
```
Files: 03_seo/AGENT.md

Audit [URL or content piece] for AI search optimization.

Check against the 3 AEO pillars:
- Structure: Is content machine-parseable? Direct answers in first sentences? Structured data?
- Authority: Original data? Topical depth? Trusted citations?
- Presence: Entity consistency across platforms? Published where AI engines index?

Run the AI-readiness checklist. Prioritize fixes by impact. Tell me what's missing and exactly what to change.
```

### Programmatic SEO Spec
```
Files: 03_seo/AGENT.md

Design a programmatic SEO strategy for [business/product].

Query pattern I see opportunity in: [e.g., "best [category] in [city]" or "[product] vs [competitor]"]
Estimated search demand: [if known]
Data source available: [describe your dataset]

Use the pSEO spec template. Recommend the best pattern from the playbook menu (comparisons, directories, glossaries, calculators, integration pages, or stats pages). Define the hub-and-spoke linking model and assess data defensibility tier.
```

---

## Paid Ads

### Build a Campaign Brief
```
Files: 06_growth-paid/AGENT.md + 00_shared/briefs/media-buyer-brief-template.md

Build a campaign brief for [describe campaign].

Budget: [amount / month]
Platform: [Meta / Google / TikTok / LinkedIn]
Goal: [CPA target, ROAS target, or awareness KPI]
ICP: [describe target audience]
Landing page: [URL]

Use the media buyer brief template. Include: audience tiers (retargeting, lookalike, interest, broad), creative approach per tier, budget split (default 70/30 prospecting/retargeting), naming convention, UTM structure, and performance rules.
```

### Retargeting Strategy
```
Files: 06_growth-paid/AGENT.md

Design a retargeting strategy for [product/business].

Current monthly traffic: [visitors]
Pixel status: [installed / not installed]
Existing audiences: [email list size, app users, purchasers, etc.]

Segment into the 3 retargeting windows:
- Hot (1-7 days): Cart abandoners, pricing viewers, demo starters
- Warm (7-30 days): Blog readers, feature page visitors, video viewers
- Cold (30-90 days): Bounced visitors, lapsed users

For each segment: recommend budget allocation, creative approach (awareness vs. conversion copy), bid strategy, and frequency caps. Flag if any segment is too small to run.
```

### Creative Testing Plan
```
Files: 06_growth-paid/AGENT.md

Design a creative testing plan for [campaign/product].

Current winning creative: [describe what's working, or say "starting fresh"]
Monthly ad budget: [amount]
Platform: [Meta / Google / TikTok]

Follow the testing priority order: hook/opening frame first, then CTA, then offer framing, then format. Define: what variable to isolate per test, minimum 50 conversions per variant to call a winner, 7-day minimum runtime, and the creative fatigue signals to watch (frequency > 3.5, CTR drop).
```

---

## CRO & Testing

### Landing Page Audit
```
Files: 05_cro/AGENT.md

Audit this landing page: [URL or describe/paste the page]

Current conversion rate: [if known]
Monthly traffic: [if known]
Primary CTA: [what you want visitors to do]

Run the 3-phase LP Audit Protocol:
1. Heuristic evaluation (headline clarity, value prop, CTA, trust signals, mobile)
2. Behavioral data review (scroll depth, click patterns, rage clicks — provide if available)
3. Funnel analysis (highest drop-off step)

Output: top 3 findings with severity, plus ICE-scored hypotheses for each using the hypothesis format.
```

### Design an A/B Test
```
Files: 05_cro/AGENT.md

Design an A/B test for [describe what you want to test].

Current baseline: [conversion rate or metric]
Monthly traffic to this page/flow: [number]
Hypothesis: [what you think will happen and why — or say "help me form one"]

Use the hypothesis template with a specific mechanism (not just "this will improve conversions"). Calculate feasibility against the sample size table. Define: primary metric, guardrail metric + threshold, test duration, and traffic split. Flag if traffic is too low for the test to reach significance in a reasonable timeframe.
```

### Post-Test Learning Synthesis
```
Files: 05_cro/AGENT.md

Write up the results of this A/B test:

Test name: [name]
Hypothesis: [what we tested and why]
Result: [Win / Loss / Inconclusive]
Primary metric lift: [% change + stat sig]
Guardrail metrics: [any movement]

Use the test result summary format. Explain the mechanism — why did it win/lose? What does this tell us about the ICP? What follow-up hypothesis does this generate? File the learning so we never repeat a failed test without a new mechanism.
```

---

## CRM & Lifecycle

### Build an Onboarding Email Sequence
```
Files: 08_growth-crm/AGENT.md + 08_growth-crm/email-sequences-playbook.md

Build a 5-email onboarding sequence for [product].

Trigger: [signup / free trial start / purchase]
Key activation action: [what the user needs to do to get value]
Average time to activation: [if known]
ESP: [Customer.io / Klaviyo / HubSpot / etc.]

Use the activation sequence framework. For each email: timing, subject line (6-10 words, specific), preview text, body copy (one idea, 3 paragraphs max), CTA, and the success/failure exit condition. Include branching logic — what happens if they activate early vs. don't engage?
```

### Design a Referral Program
```
Files: 08_growth-crm/AGENT.md + 11_influencer-partnerships/AGENT.md

Design a referral program for [product].

Business model: [B2C / B2B / marketplace]
Current user base: [size]
Average LTV: [if known]
What motivates this ICP: [status / savings / community / money]

Recommend: incentive structure (both sides), timing triggers (when to ask — after activation, not before), referral loop mechanics, and a 30-day launch plan. Apply the reciprocity and identity signaling psychology models — people refer products that say something about who they are.
```

### Win-Back Campaign
```
Files: 08_growth-crm/AGENT.md + 08_growth-crm/email-sequences-playbook.md

Design a win-back sequence for [product].

Churn definition: [days of inactivity that = churned]
Known churn reasons: [list if available, or say "unknown — help me diagnose"]
What they'd lose by leaving: [accumulated data, progress, connections, etc.]

Build a 3-email re-engagement sequence. Lead with loss aversion (what they'll lose), not gain framing. Include a final suppression rule — when to stop emailing and mark as churned.
```

---

## Analytics & Tracking

### Set Up a Tracking Plan
```
Files: 07_growth-analytics/AGENT.md + 07_growth-analytics/tracking-plan-template.md

Build a tracking plan for [product/website].

Analytics tool: [Mixpanel / Amplitude / GA4 / PostHog]
Key conversion events: [list the important user actions]
Paid platforms running: [Meta / Google / TikTok — need pixel events]
Attribution preference: [last-touch / first-touch / multi-touch]

Use the tracking plan template. Define: UTM conventions, core funnel events (with exact event names and properties), pixel checklist for each ad platform, and alert thresholds for key metrics.
```

### Define KPIs for a Business
```
Files: 07_growth-analytics/AGENT.md + 07_growth-analytics/kpi-definitions.md

Define KPIs for [business/product].

Business model: [SaaS / ecommerce / marketplace / app]
Stage: [pre-launch / early traction / scaling / established]
North Star metric: [if defined, or say "recommend one"]

Use the KPI definition format for each metric. Define: North Star, 3-5 primary metrics that predict the North Star, secondary/guardrail metrics, and alert thresholds. Flag any vanity metrics the team is currently tracking that should be removed.
```

---

## Design

### Creative Brief for Ads
```
Files: 04_growth-designer/AGENT.md + 00_shared/briefs/designer-creative-brief-template.md

Create a creative brief for [campaign/ad set].

Platform: [Meta / Google / TikTok]
Format: [static / video / carousel]
Angle: [pain / identity / social proof / before-after / demo / UGC / comparison / curiosity]
ICP: [describe target]
Key message: [one sentence]
Copy: [paste the approved copy from Content Writer, or say "pending"]

Use the designer creative brief template. Include: exact dimensions per placement (4:5 feed, 9:16 stories, etc.), visual direction notes, copy to include with character counts, and the 3-second rule test — does the core message land before they scroll past?
```

---

## Operations & Launch

### New Client / Channel Launch
```
Files: 09_growth-ops/AGENT.md + 09_growth-ops/launch-checklist.md

Walk me through the launch checklist for [new client / new channel].

Business: [describe]
Stage: [starting from zero / adding a channel / scaling existing]
Tools already in place: [list current tool stack]
Timeline: [when do we need to be live]

Go through the checklist phase by phase. Tell me exactly what to set up and in what order. Flag any blockers — tools that need to be configured, pixels that need to be installed, access that needs to be granted — before we can go live.
```

### Weekly Ops Review
```
Files: 09_growth-ops/AGENT.md + 09_growth-ops/weekly-runbook.md + 00_shared/reporting/weekly-dashboard-template.md

It's Monday. Run the weekly review.

Here are this week's numbers:
[Paste metrics or describe performance]

Follow the Monday runbook: review each metric against target, flag red/yellow items, identify what changed and why, recommend budget or priority adjustments, and set this week's top 3 action items.
```

---

## Multi-Agent Tasks

### Full Campaign Plan (Strategy + Paid + Content + Design)
```
Files: 00_growth-pm/AGENT.md + 06_growth-paid/AGENT.md

Plan a full campaign for [describe goal].

Budget: [amount]
Timeline: [start and end dates]
Channels: [platforms]
ICP: [describe target audience]
Offer: [what we're promoting]

Build the plan in layers:
1. Campaign brief (goal, audience, budget split, success metrics)
2. Audience strategy — tiers with targeting for each (Paid)
3. Copy direction — angles per tier, variant count needed (Content Writer brief)
4. Creative brief — formats, dimensions, visual direction per placement (Designer brief)
5. Ops checklist — what needs to be set up before launch

Use the brief templates for each handoff so every agent knows exactly what to produce.
```

### Quarterly Growth Review
```
Files: STRATEGIST.md + docs/growth-model-template.md + 00_shared/reporting/monthly-review-template.md

Run a quarterly growth review.

Here's the last 3 months of data:
[Paste metrics by month, or describe trends]

Update the growth model with actuals vs. projections. Run a sensitivity analysis on the top 3 levers. For each channel: what worked, what didn't, what to change. End with a prioritized list of bets for next quarter, ranked by expected impact.
```

### Research-to-Campaign Pipeline
```
Files: 01_growth-researcher/AGENT.md + 02_content-writer/AGENT.md

We're entering a new market / targeting a new segment: [describe].

Step 1 — Research: Build the ICP profile using the template. Run community listening across [relevant sources]. Identify verbatim language, pain points, objections, and switching triggers.

Step 2 — Messaging: Using the research output, build a messaging matrix. Map each ICP tension to a primary message, proof point, and CTA. Recommend which angles to test first on paid.

Output both the ICP profile and the messaging matrix so I can hand them to Paid and Designer.
```

### Post-Mortem on a Failed Campaign
```
Files: 05_cro/AGENT.md + 00_growth-pm/AGENT.md

Run a post-mortem on [campaign/experiment name].

What happened: [describe what you launched]
Expected result: [what you thought would happen]
Actual result: [what actually happened]
Data available: [paste metrics, screenshots, or describe]

Diagnose: Was it the audience, the creative, the offer, or the landing page? Use the hypothesis format to document the mechanism of failure. Generate 2-3 follow-up hypotheses we should test next based on what we learned. File this so we never repeat the same mistake.
```

---

## Quick Reference: Which Agent Handles What

| Task | Primary Agent | Key Supplementary File |
|---|---|---|
| ICP research, competitive intel | Growth Researcher | `icp-template.md` |
| Ad copy, email copy, LP copy | Content Writer | `messaging-matrix.md`, `copy-bank.md` |
| Cold outbound sequences | Content Writer | (framework in AGENT.md) |
| Social content | Content Writer | `social-content-playbook.md` |
| Keyword strategy, content briefs | SEO | `content-briefs/` |
| AI search optimization | SEO | (AEO section in AGENT.md) |
| Ad creative, templates | Growth Designer | `designer-creative-brief-template.md` |
| A/B tests, LP audits | CRO | `cro-hypothesis-log.md` |
| Campaign strategy, budgets | Growth Paid | `media-buyer-brief-template.md` |
| Dashboards, KPIs, attribution | Growth Analytics | `tracking-plan-template.md`, `kpi-definitions.md` |
| Lifecycle emails, referrals | Growth CRM | `email-sequences-playbook.md` |
| QA, trafficking, tool setup | Growth Ops | `launch-checklist.md`, `weekly-runbook.md` |
| Cross-agent coordination | Growth PM | `experiment-tracker.md` |
| Big-picture strategy | Strategist | `growth-model-template.md` |
