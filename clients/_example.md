# Client Context: Beacon Analytics

> **THIS IS A FICTIONAL EXAMPLE.** Beacon Analytics is not a real company. This file demonstrates how to fill in a client context file. Copy `_template.md` for your own company.

---

## Strategist Context

- **Business:** Beacon Analytics is a self-serve product analytics tool for early-stage SaaS teams that can't afford Mixpanel or Amplitude.
- **Stage:** Early traction (1,200 users, 85 paying, $14K MRR)
- **North Star metric:** Weekly active analyzers (users who run 3+ queries per week)
- **Growth model:** Content + paid → signup → first query (activation) → weekly habit → upgrade to paid → expand seats
- **Channel portfolio:** 1. Organic search (blog), 2. Meta ads, 3. LinkedIn organic, 4. Product Hunt (upcoming)
- **Budget philosophy:** Conservative — $3K/month paid, rest is sweat equity and content
- **90-day priorities:**
  1. Hit 200 paying customers
  2. Reduce time-to-first-query from 12 minutes to under 4
  3. Launch referral program for power users
- **ICP segments (ordered by priority):**
  - ICP 1: Solo technical founders — building alone, need analytics but won't spend 2 days setting up Mixpanel
  - ICP 2: Early-stage growth leads — first growth hire at a 10-30 person startup, need dashboards for the CEO yesterday
- **Competitive set:** Mixpanel, Amplitude, PostHog, Heap, June.so

---

## Growth PM Context

- **Current sprint focus:** Activation — reducing time-to-first-query
- **Active briefs:** 3 (onboarding email sequence, LP test, Meta ad creative round 1)
- **Sprint cadence:** Weekly (Monday planning, Friday review)
- **Team capacity:** 1 founder (product + eng), 1 freelance designer (10 hrs/week), GrowthOS agents
- **Escalation contact:** Sarah Chen, founder — Slack DM
- **Out of scope for PM:** Product roadmap decisions, pricing changes, hiring

---

## Researcher Context

- **Category:** Product analytics / SaaS tools / developer tools
- **Primary communities to monitor:** r/startups, r/SaaS, r/analytics, Indie Hackers, Lenny's Slack
- **Top competitors:** Mixpanel, PostHog, Amplitude, June.so, Heap
- **Current ICP focus:** Solo technical founders
- **Key research questions:**
  - What language do founders use when they realize they need analytics? ("flying blind", "gut feel", "no idea what's working")
  - What triggers the switch from spreadsheets/GA4 to a real analytics tool?
  - Why do people churn from PostHog or Mixpanel? (complexity, cost, setup time)
- **Review monitoring:** G2, Capterra, Product Hunt — monthly scan

---

## Content Writer Context

**Brand voice:**
- Technical but not intimidating. We talk like a senior engineer friend explaining something over coffee — clear, direct, occasionally funny. Never condescending.
- **Tone:** Confident, plain-spoken, slightly irreverent
- **Never sound like:** Enterprise sales deck, consultant jargon, "we're excited to announce"

**Voice references:** Stripe's clarity, Linear's confidence, Basecamp's directness

**Signature themes:**
- "Analytics shouldn't require a data team"
- "Setup in 5 minutes, not 5 sprints"
- "Built for builders, not analysts"

**Good examples:** (on-brand copy)
- "You shipped a feature. Did anyone use it? Beacon tells you in one click."
- "Mixpanel wants $800/month. You have 200 users. Do the math."

**Never write:** (off-brand copy)
- "Leverage our cutting-edge analytics platform to unlock actionable insights"
- "We're thrilled to partner with innovative teams on their data journey"

**Primary ICP:** Solo technical founders building a SaaS product who need analytics but don't have time or budget for enterprise tools.

**Top converting angles:**
- Pain-led: "You're guessing which features matter. Your competitors aren't."
- Identity-led: "Built for founders who ship fast and measure everything."
- Proof-led: "1,200 teams set up Beacon in under 5 minutes. Average time-to-first-insight: 47 seconds."

---

## SEO Context

- **Domain(s):** beaconanalytics.io, blog.beaconanalytics.io
- **App Store:** N/A (web-only)
- **Category keywords:** product analytics, startup analytics, mixpanel alternative, simple analytics tool, event tracking for SaaS, free analytics tool
- **Competitors to monitor:** posthog.com, mixpanel.com, june.so, amplitude.com, heap.io
- **Current SEO priority:** Build keyword universe, publish first 10 comparison pages (Beacon vs. X)
- **Technical stack:** Next.js + MDX blog on Vercel
- **Rank tracking status:** Baseline set in Ahrefs

---

## Designer Context

- **Brand colors:** Primary #2563EB (blue), Accent #10B981 (green), Background #0F172A (dark), Text #F8FAFC (light)
- **Typography:** Inter (headings), Inter (body)
- **Visual tone:** Dark + technical — think Linear or Vercel. Clean lines, generous whitespace, subtle gradients.
- **Reference brands (visual):** Linear, Vercel, Raycast
- **Current template priority:** Meta ad templates (1080x1080 + 1080x1350)
- **Figma workspace:** Beacon Design / Growth Assets
- **Special format requirements:** All ads need dark and light variants (audience split test)

---

## CRO Context

- **Primary pages to optimize:** beaconanalytics.io (homepage), beaconanalytics.io/pricing, beaconanalytics.io/signup
- **Current conversion goal:** Free trial signup (no credit card required)
- **Analytics access:** Beacon (own product) + GA4 — both live
- **Heatmap tool:** Microsoft Clarity — installed
- **Known friction points:** Signup form asks for company size (unnecessary friction), pricing page doesn't show free tier prominently, homepage hero is generic
- **ICP psychology notes:** Technical founders trust specificity over hype. They want to see the product, not read about it. Screenshots and live demos convert better than testimonials.
- **Top hypothesis angles:**
  - Remove company size field from signup (reduce friction)
  - Add interactive demo to homepage hero (show, don't tell)
  - Restructure pricing to lead with free tier (anchor to $0)

---

## Paid Context

- **Primary channel:** Meta (Instagram + Facebook)
- **Secondary channel:** LinkedIn (organic only for now — paid later)
- **Conversion goal:** Free trial signup
- **Target CPA:** $18 (current: $27 — need to bring down)
- **Monthly budget:** $3,000
- **Primary ICP for targeting:** Ages 25-40, interests in SaaS, startup tools, product management, software engineering. Lookalike from existing signups.
- **Current campaign status:** Creative testing — Round 1 with 3 angles
- **Lookalike source:** 850 email signups (uploading as seed)
- **Pixel / tracking status:** Meta Pixel live, conversion API configured

---

## Analytics Context

- **Analytics stack:** Beacon (own product), GA4, Meta Ads Manager
- **North Star metric:** Weekly active analyzers (3+ queries/week)
- **Primary KPIs:** Signups/week, activation rate (first query within 24hrs), Day 7 retention, MRR, trial-to-paid conversion rate
- **Attribution model:** Last-touch (moving to multi-touch when volume justifies it)
- **Experiment infrastructure:** Building — using Beacon's own feature flags for A/B tests
- **Dashboard delivery:** Slack #growth-metrics every Monday 9am, Notion page for deep dives

---

## CRM Context

- **CRM / ESP platform:** Customer.io (free tier)
- **Community channels:** Discord (120 members), Twitter/X
- **North Star action (activation):** Run first query within 24 hours of signup
- **Current lifecycle priority:** Onboarding sequence (Day 0-7)
- **Key segments:**
  - New signups Day 0-3 (not yet activated)
  - Activated users (ran first query)
  - Power users (3+ queries/week for 2+ weeks)
  - Churned / inactive (no login in 14+ days)
- **ICP community behavior:** Technical founders share tools they like on Twitter and in Slack groups. They respond to "how I built this" content and benchmarks. They don't engage with promotional content.
- **Referral angle:** "Give your founder friends 3 months free, get 3 months free" — mutual benefit, no cash incentives

---

## Ops Context

- **Active landing pages:** beaconanalytics.io, beaconanalytics.io/pricing, beaconanalytics.io/vs/mixpanel
- **Pixel status:** Meta Pixel live, GA4 live
- **Analytics tool:** Beacon + GA4 — both active
- **UTM format:** `utm_source=[platform]&utm_medium=[type]&utm_campaign=beacon_[channel]_[objective]_[YYYYMM]`
- **Tool stack:** Vercel (hosting), Customer.io (email), Stripe (billing), Beacon (analytics), Figma (design), Slack (comms)
- **Current ops priority:** UTM governance — standardize all campaign links before scaling paid

---

## Engineer Context

- **LP infrastructure:** Next.js on Vercel — all landing pages in the main repo
- **GitHub org / repo:** github.com/beacon-analytics/web
- **Preview URL process:** Vercel preview on every PR — auto-deployed
- **Analytics stack:** Beacon JS SDK, GA4 gtag, Meta Pixel, Customer.io JS
- **A/B test approach:** Edge middleware (Vercel Edge Config) — server-side split
- **Key integrations:** Stripe API (billing), Customer.io API (email triggers), Slack webhooks (alerts)
- **Current build priority:** Interactive demo component for homepage

---

## Influencer / Partnerships Context

- **Category:** SaaS tools / developer tools / startup ecosystem
- **Creator ICP:** Technical founders and indie hackers who share their stack and building journey publicly
- **Priority platforms:** Twitter/X, YouTube, LinkedIn — ordered
- **Creator sweet spot:** 2K-25K followers + actively building in public
- **Communities to source from:** Indie Hackers, r/SaaS, Build in Public hashtag on Twitter, YouTube "day in the life" devs
- **Deal structure:** Gifted (free pro plan) → affiliate (20% recurring for 12 months) → ambassador
- **Affiliate structure:** Unique referral link with 90-day cookie, tracked in Beacon
- **Brand voice for briefs:** Show real workflows. No scripted demos. Authentic > polished.
- **Content angles:**
  - "How I track [metric] for my SaaS" — tutorial style
  - "My startup tool stack" — Beacon as one of 5-10 tools
  - "I replaced Mixpanel with this" — comparison / switch story
- **Red flags:** Creators who only do sponsored content (no organic), anyone with fake engagement patterns, creators who don't actually use developer tools
