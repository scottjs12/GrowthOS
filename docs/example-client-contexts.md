# Example Client Contexts

> Two fully filled examples showing how GrowthOS adapts to different business models. Use these as reference when filling in your own CLIENT CONTEXT blocks.
>
> **These are fictional companies.** They exist to show you what "done" looks like.

---

## How CLIENT CONTEXT Works

Every AGENT.md has a `## CLIENT CONTEXT` section near the bottom. This is the only section that changes per client — everything above it (Universal Skills, protocols, frameworks) stays the same.

When onboarding a new client:
1. Fill in the CLIENT CONTEXT block in each of the 13 files (12 agents + STRATEGIST.md)
2. Or use the Setup Wizard (`setup-wizard.jsx`) to generate all 13 blocks from a single interview

Below are two complete examples — one B2C, one B2B — showing every CLIENT CONTEXT block filled in.

---

## Example A: FitTrack (B2C Consumer SaaS)

**One-liner:** Mobile fitness tracking app that helps casual gym-goers build consistent workout habits through smart logging and social accountability.

**Business model:** Freemium. Free tier (basic tracking). Premium at $9.99/mo (AI coaching, advanced analytics, social challenges).

**Stage:** Early traction — 10,000 users, 500 paying, 5% conversion rate.

---

### Strategist Context

```
CLIENT ONBOARDING — STRATEGIST INTAKE
───────────────────────────────────────
Client name:          FitTrack
Business:             Mobile fitness tracking app — freemium B2C, $9.99/mo premium
Stage:                Early traction (10K users, 500 paid, 5% conversion)
North Star metric:    Weekly active users who log 3+ workouts (WAU-3)
ICP hypothesis:       25-40 year olds who work out 3+/week but struggle with consistency.
                      They've tried apps before and quit. They respond to accountability, not drill-sergeant motivation.
Channel hypothesis:   Meta (IG + FB) for paid acquisition, TikTok organic for brand, email lifecycle for activation/retention, referral for virality
Budget range:         $15K–$25K/mo paid media. $2K/mo creator seeding. $0 for organic (internal effort only).
Timeline / urgency:   Need to hit 25K users and 8% free-to-paid CVR in 90 days to raise Series A
Key constraints:      Small team (3 FTEs + contractors). No dedicated designer on staff. iOS-first, Android 60 days behind.
What success looks like in 90 days:  25K total users, 2,000 paid subscribers, referral loop generating 15% of new signups, D30 retention above 40%
What would make this engagement fail:  Spending on acquisition without fixing activation. Current onboarding completion rate is 34% — if that doesn't improve, paid spend is waste.
Agents needed immediately:  PM, Researcher, Content Writer, Paid, CRM, Analytics, CRO
Agents to defer:      SEO (not enough content yet), Influencer (after paid creative is proven)
First brief for PM:   Fix onboarding flow — get completion rate from 34% to 55% in 30 days. This unlocks everything else.
```

---

### Growth PM Context

```
### Active Client: FitTrack
- Business: Mobile fitness tracking app for casual gym-goers. Freemium B2C, $9.99/mo premium.
- Stage: Early traction (10K users, 500 paid)
- Primary ICP: 25-40 year olds who work out 3+/week but struggle with consistency. Motivated by accountability, not intensity culture.
- Top channels: Meta Ads (IG/FB), TikTok organic, email lifecycle, in-app referral
- Current sprint focus: Fix onboarding completion rate (34% → 55%) before scaling paid acquisition. Secondary: launch first Meta campaign to test 3 creative angles.
- Key integrations: Mixpanel (analytics), Customer.io (lifecycle email + push), Meta Ads Manager, Google Ads, Figma (design), Vercel (LP hosting)
- Operator role: Scott — approves budget changes >20%, new channel launches, ICP pivots. Day-to-day sprint decisions stay with PM.
- Not in scope for PM: Product roadmap (founder-led), app store submission process, investor relations
```

---

### Growth Researcher Context

```
### Active Client: FitTrack
- Category: Consumer fitness / health tracking mobile apps
- Primary communities to monitor:
  - Reddit: r/fitness, r/loseit, r/xxfitness, r/bodyweightfitness, r/getdisciplined
  - App Store reviews: FitTrack + MyFitnessPal, Strong, Hevy, Fitbod (top 4 competitors)
  - Facebook Groups: "Women Who Lift," "Gym Motivation & Accountability," "30-Day Fitness Challenges"
  - TikTok: #gymtok, #fitnesstok, #workoutmotivation — comment sections on viral fitness content
  - Discord: Hybrid Calisthenics server, Fitness AI community
- Top competitors: MyFitnessPal (dominant but bloated), Strong (gym-logging purist), Hevy (social-first gym tracker), Fitbod (AI recommendations), spreadsheets + Apple Health (manual alternatives)
- Current ICP focus: "The Restarter" — 28-38, works out 3-4x/week in bursts but loses momentum after 3-6 weeks. Has downloaded 2-3 fitness apps before and churned. Wants something that keeps them honest without making them feel like a failure when they miss a day.
- Key questions to maintain research on:
  - What language do "restarters" use to describe their frustration with losing momentum? (Exact phrases for ad copy)
  - What triggers a restart — New Year, breakup, health scare, friend influence? (Timing for campaigns)
  - What makes them quit an app — complexity, guilt mechanics, lack of social connection, paywall too early? (Churn prevention)
  - What does "accountability" mean to this ICP — public commitment, a buddy, streaks, coaching? (Feature + messaging direction)
- Review monitoring: App Store (iOS) weekly, Google Play bi-weekly. Track competitor review sentiment monthly.
```

---

### Content Writer Context

```
### Active Client: FitTrack

Brand voice summary:
- Motivating but not preachy. Like a friend who also works out — not a drill sergeant, not a wellness guru. Grounded, honest, a little funny.
- Tone adjectives: encouraging, real, casual, specific, warm
- Never sounds like: corporate wellness program, Instagram fitness influencer flexing, guilt-tripping health app

Voice references: Duolingo's playfulness, Headspace's calm encouragement, Peloton's "we're in this together" energy (without the intensity)

Signature themes (use and reuse, varied phrasing):
- "Consistency beats intensity"
- "Your streak doesn't break — it pauses"
- "The gym doesn't judge. Neither do we."
- "Built for people who've quit before"

Good examples:
- "Missed yesterday? Cool. Today's a new day. Log your first set and keep moving." ✅
- "347 people in your city worked out this morning. Join tomorrow's crew." ✅
- "You've logged 12 workouts this month. That's more than 80% of users. Keep stacking." ✅

Never write:
- "NO EXCUSES. Get after it. 💪🔥" ❌
- "Transform your body in just 30 days!" ❌
- "Are you REALLY going to skip leg day?" ❌
- Anything that implies shame for missing a workout ❌

Primary ICP: 25-40 year old casual gym-goers who want consistency, not perfection. They're frustrated by apps that make them feel bad when they fall off. They want something that meets them where they are.

Top converting angles (update as Analytics reports back):
- Pain-led: "You've downloaded 3 fitness apps and quit all of them. It's not you — it's the app."
- Identity-led: "For people who work out, not people who work out to post about it."
- Proof-led: "FitTrack users who log their first 3 workouts have a 73% chance of still being active at Day 30."
```

---

### SEO Context

```
### Active Client: FitTrack
- Domain(s): fittrack.app (primary), blog.fittrack.app (content hub — not yet live)
- App Store: iOS (primary, live), Android (beta, launching in 60 days)
- Category keywords: workout tracker app, fitness logging app, gym habit tracker, workout accountability app, best app for gym consistency, fitness tracker for beginners, workout log app free, social fitness app
- Competitors to monitor: myfitnesspal.com, strong.app, hevyapp.com, fitbod.me, Apple Fitness (no direct domain, but ASO competitor)
- Current priority: ASO optimization for iOS App Store — title, subtitle, keyword field, screenshot copy. Blog content hub is deferred until Month 3.
- Technical stack: React Native app, Next.js marketing site on Vercel, blog planned on same Next.js instance
- Rank tracking status: Not started — need to set baseline for 15 priority keywords in App Store and web search. Use App Annie or Sensor Tower for ASO, Ahrefs for web.
```

---

### Growth Designer Context

```
### Active Client: FitTrack
- Brand colors: #1B2A4A (deep navy — primary), #4ADE80 (energetic green — accent/CTA), #F8FAFC (off-white — background), #334155 (slate — body text), #FDE047 (gold — streak/achievement highlights)
- Typography: Inter for body and UI. Clash Display for headlines and marketing materials. Monospace (JetBrains Mono) for stats/numbers in dashboards.
- Visual tone: Clean, energetic but not aggressive. Think "modern sports brand meets calm tech" — not neon-and-sweat gym aesthetic. Whitespace-heavy. Photography style: real people mid-workout, not bodybuilders. Lifestyle, not performance.
- Reference brands visually: Strava (data visualization), Headspace (approachable illustration style), Nike Training Club (clean typography), Oura Ring (premium health-tech feel)
- Current template priority: Meta 4:5 static ads (3 variants for first campaign), Instagram Story 9:16 templates, App Store screenshot set (6 frames)
- Active designers / collaborators: No full-time designer. Using Figma for all production. Contract designer on retainer for heavy lifts (LP redesign, App Store assets). Day-to-day ads produced from templates.
- Figma workspace: FitTrack Growth / Creative Assets
- Special format requirements: All Meta ads need dark-mode-friendly versions (dark backgrounds test well with this ICP). App Store screenshots must comply with Apple guidelines — no device bezels, text overlays in safe zones.
```

---

### CRO Context

```
### Active Client: FitTrack
- Primary pages to optimize:
  - fittrack.app (homepage / app download LP)
  - fittrack.app/premium (upgrade page — shown in-app and as standalone LP)
  - App onboarding flow (5-screen sequence: goal → frequency → style → profile → first workout prompt)
- Current conversion goal: Onboarding completion (all 5 screens → first workout logged within 24h). Secondary: free-to-paid upgrade CVR.
- Analytics access: Mixpanel confirmed and firing events. GA4 on marketing site confirmed. Funnel events mapped through onboarding.
- Heatmap tool: Hotjar installed on web LP. FullStory connected to app (session replay active, heatmaps on onboarding screens).
- Known friction points:
  - Onboarding screen 3 (workout style selection) has a 22% drop-off — too many options, unclear labels
  - Premium upgrade page has a 1.8% CVR from free users — no social proof, weak value prop, CTA says "Upgrade" (generic)
  - Users who don't log a workout within 48h of signup have <10% D7 retention
- ICP psychology: This audience has been burned by apps before. Trust signals that work: real user numbers ("10,247 people logged a workout today"), streak-forgiveness mechanics, low-pressure CTAs. Trust killers: aggressive upsells, dark patterns, fake urgency timers, anything that feels like a gym bro sales pitch.
- Top hypothesis angles to explore:
  - Reduce onboarding screen 3 options from 8 to 4 (top categories only) — test impact on completion rate
  - Add social proof ticker to premium page ("X users upgraded this week") — test impact on upgrade CVR
  - Test "Start your first workout" CTA vs. "Log what you did today" (lower friction entry point)
```

---

### Growth Paid Context

```
### Active Client: FitTrack
- Primary channel: Meta (Instagram + Facebook) — acquisition focus
- Secondary channel: Google Ads (Search — branded + category terms). TikTok paid deferred until organic content proves creative angles.
- Conversion goal: App install (iOS) → onboarding completion (optimization event once volume supports)
- Target CPA: $4.50 per install target. $18 per completed onboarding (4:1 ratio). TBD for paid conversion — establish in first 30 days.
- Budget: $18K/mo total. $14K Meta, $4K Google Search. Revisit split at Day 30 based on CPA by channel.
- Primary ICP for targeting:
  - Core: 25-40, interest in fitness + gym + workout apps, exclude bodybuilding/powerlifting interests (wrong ICP)
  - Behavioral: Recently downloaded health/fitness apps (Meta), gym membership holders (interest), Apple Watch owners
  - Lookalike: 1% LAL from users who completed onboarding (seed = 3,400 users, sufficient for Meta)
  - Retargeting: Website visitors 7-day (hot), app installers who haven't completed onboarding 3-day (activation push)
- Current campaign status: Creative testing phase. Three angles in testing: pain-led ("You've quit 3 apps"), identity-led ("For people who actually go to the gym"), proof-led ("73% still active at Day 30"). Two static variants + one UGC-style video per angle.
- Lookalike source: Mixpanel cohort of users who completed onboarding + logged 3+ workouts in first 14 days. Exported to Meta via Customer.io integration.
- Pixel / tracking: Meta Pixel confirmed live on fittrack.app. App Events SDK integrated — Install, CompleteRegistration, StartTrial events firing. Deep links configured for app install campaigns. GA4 confirmed on marketing site.
```

---

### Growth Analytics Context

```
### Active Client: FitTrack
- Analytics stack: Mixpanel (primary product analytics — events, funnels, retention, cohorts), GA4 (marketing site + campaign attribution), Meta Pixel (ad conversion tracking), Customer.io (email engagement metrics)
- North Star metric: Weekly Active Users who log 3+ workouts (WAU-3). Defined as: distinct users who fire the `workout_logged` event 3+ times in a rolling 7-day window.
- Primary KPIs:
  - Onboarding completion rate (target: 55% — currently 34%)
  - D7 retention (target: 45%)
  - D30 retention (target: 30%)
  - Free-to-paid conversion rate (target: 8% — currently 5%)
  - CAC by channel (target: <$18 blended per activated user)
- Attribution: Last non-direct click (default). First-touch reported alongside for channel discovery credit. UTM required on all paid links — Ops enforces.
- Experiment infrastructure: Building. Mixpanel feature flags available for in-app tests. Vercel Edge Middleware for web A/B tests. First experiment (onboarding screen 3 simplification) is the pilot. Target: run 2 experiments/month by Month 3.
- Dashboard delivery: Weekly dashboard published to `00_shared/reporting/` every Monday. Slack notification in #fittrack-growth channel on publish. Founder receives a 3-bullet summary via email (PM writes, Analytics provides data).
```

---

### Growth CRM Context

```
### Active Client: FitTrack
- CRM platform: Customer.io (email + push notifications). In-app messaging via native app layer (Engineer builds triggers, CRM owns strategy).
- Community channels: Discord server (800 members, moderately active — "FitTrack Community"). Instagram comments (monitored but not community-managed). No Facebook group yet — evaluate at Month 3.
- North Star action (activation): Log first workout within 24 hours of completing onboarding. Users who do this have 4.2x higher D30 retention than those who don't.
- Current lifecycle priority: Onboarding-to-activation sequence. Get users from signup → onboarding complete → first workout logged in <24h. This is the single highest-leverage flow.
- Key segments to build first:
  - New signups Day 0-1 (onboarding incomplete — nudge sequence)
  - Onboarded but no workout logged Day 1-3 (activation push — "Log your first workout")
  - Activated users Day 3-14 (habit building — streak encouragement, social features intro)
  - Power users Day 14+ with 3+/week frequency (referral prompt, premium upsell)
  - Lapsed users 7+ days inactive (win-back — "Your streak pauses, it doesn't break")
  - Premium subscribers (exclusive content, advanced feature education, NPS survey at Day 30)
- ICP community behavior: This audience shares workout screenshots and PRs in Stories. They respond to challenges ("7-day consistency challenge"). They lurk in fitness communities more than they post. They're motivated by quiet social proof — seeing others like them show up consistently — not leaderboards or competitive rankings.
- Referral angle: Two-sided reward — referrer gets 1 free month of Premium, referred friend gets 14-day Premium trial (instead of standard 7-day). Prompt referral after user logs their 10th workout (proven engagement milestone). Framing: "Know someone who'd actually stick with it this time? Give them 2 free weeks." Intrinsic motivation: identity signal ("I use FitTrack" = "I'm consistent").
```

---

### Growth Ops Context

```
### Active Client: FitTrack
- Active landing pages: fittrack.app (homepage/download LP), fittrack.app/premium (upgrade LP), fittrack.app/invite (referral landing page — in development)
- Pixel status: Meta Pixel live and confirmed on all web pages. App Events SDK live (Install, CompleteRegistration, StartTrial, Purchase events confirmed). GA4 live on marketing site. Customer.io tracking snippet live.
- Analytics tool: Mixpanel (product), GA4 (marketing), Customer.io (email/push engagement)
- UTM format: utm_source=[platform]&utm_medium=[type]&utm_campaign=FT_[CHANNEL]_[objective]_[audience-tier]_[date]&utm_content=[creative-variant]
  - Example: utm_source=facebook&utm_medium=cpc&utm_campaign=FT_META_INSTALL_T2-LAL_20260315&utm_content=Static_Pain_v1
- Tool stack: Mixpanel, Customer.io, Meta Ads Manager, Google Ads, Figma, Vercel, GitHub, Hotjar (web), FullStory (app), Slack, Notion (internal docs)
- Current ops priority: Validate full tracking pipeline end-to-end before first paid campaign scales. Confirm: Meta Pixel fires on LP visit + app install deep link → Mixpanel receives onboarding events → Customer.io triggers lifecycle emails on signup event. Secondary: build UTM tracking sheet for all active campaigns.
```

---

### Growth Engineer Context

```
### Active Client: FitTrack
- LP infrastructure: Next.js 14 on Vercel (marketing site). React Native app (Expo) for iOS/Android.
- GitHub org / repo: github.com/fittrack-app/growth (marketing site + LP variants) and github.com/fittrack-app/mobile (app — Engineer has read access for tracking implementation, app team owns builds)
- Preview URL process: Vercel auto-generates preview URLs on every PR to the growth repo. Share preview link in Slack for QA before merging.
- Analytics stack: GA4 (web — gtag.js), Meta Pixel (web — standard events), Mixpanel (app — SDK integrated), Customer.io (app — SDK for event-triggered messaging)
- A/B test approach: Web: Vercel Edge Middleware (cookie-based variant assignment, no client-side flicker). App: Mixpanel feature flags for in-app experiments. Server-side variant logging to Mixpanel for analysis.
- Key integrations: Supabase (database — user profiles, workout logs), Mixpanel (event pipeline), Customer.io (lifecycle triggers from Supabase events via webhook), RevenueCat (subscription management + paywall), Apple App Store Connect (release management)
- Current build priority: 1) Instrument onboarding funnel events in Mixpanel (screen_viewed, onboarding_step_completed, onboarding_completed). 2) Build simplified onboarding screen 3 variant for CRO test. 3) Set up Vercel Edge Middleware for web LP A/B testing framework.
```

---

### Influencer / Partnerships Context

```
### Active Client: FitTrack
- Category: Consumer fitness / workout tracking
- Creator ICP: "Consistent gym-goer" creators — not bodybuilders or fitness models. Think: the person who posts real workouts, gym humor, "day in my life" content that happens to include the gym. Relatable over aspirational. Authentic phone-shot content over produced studio content.
- Priority platforms: TikTok (primary — highest organic reach for fitness content), Instagram Reels (secondary — same content repurposed), YouTube Shorts (tertiary — test with 2-3 creators first)
- Creator sweet spot: Micro 5K-50K followers. High comment engagement (>3% engagement rate). Audience is 25-40 and actually goes to the gym (not teens watching transformation content). Creators who post 3-5x/week consistently — they model the behavior FitTrack promotes.
- Top communities to source from: TikTok #gymtok and #fitnesstok hashtags (scout from comment sections), Instagram fitness meme accounts (followers are the ICP), Reddit r/fitness and r/xxfitness (users who post progress updates are potential micro-creators), YouTube "gym vlog" creators under 20K subs
- Deal structure preference: Gifted (free Premium lifetime account) → affiliate ($3/install via unique link) → ambassador retainer ($500/mo for 4 posts/mo) for top performers. Start gifted-only for first 20 creators to test content quality before investing.
- Affiliate structure: Unique referral links tracked via Branch.io deep links. Creator gets $3 per confirmed install (user must complete onboarding). Monthly payout via PayPal. Dashboard access for creators to see their stats.
- Brand voice for creator briefs: Show your real workout. Log it in FitTrack. Talk about why you keep showing up — not how much you lift. No hard sells, no "use code FITTRACK20" energy. Just: "This is how I stay consistent." Let the app appear naturally in the content.
- Content angles that will resonate:
  - "I've been tracking my workouts for 30 days — here's what changed" (consistency story)
  - "The app that doesn't guilt-trip you for missing a day" (differentiation from competitors)
  - "My gym buddy moved away so I found this instead" (social accountability angle)
- Red flags for this category: Creators who promote supplements or "transformation" programs. Creators with fake engagement (bought followers). Anyone whose content is primarily shirtless posing or extreme dieting. Creators who review every sponsored product — audience trust is already low.
```

---
---

## Example B: DealFlow (B2B SaaS)

**One-liner:** CRM built specifically for real estate teams — pipeline tracking, deal management, and team coordination designed for how brokerages actually work.

**Business model:** B2B SaaS, $49/seat/month. Minimum 3 seats. Annual discount (20% off).

**Stage:** Post-PMF, scaling — 200 teams, 1,400 seats, ~$68K MRR.

---

### Strategist Context

```
CLIENT ONBOARDING — STRATEGIST INTAKE
───────────────────────────────────────
Client name:          DealFlow
Business:             CRM for real estate teams — B2B SaaS, $49/seat/mo
Stage:                Post-PMF, scaling (200 teams, 1,400 seats, ~$68K MRR)
North Star metric:    Teams with 3+ active users who close a deal tracked in DealFlow within 60 days of onboarding
ICP hypothesis:       Real estate team leads (5-20 agents) doing $10M+/year in volume, currently using spreadsheets
                      or a generic CRM (HubSpot, Salesforce) that doesn't understand real estate workflows.
Channel hypothesis:   Google Search (high-intent "real estate CRM" queries), LinkedIn (team leads are active),
                      content/SEO (long-tail real estate operations content), email nurture, partnerships with RE coaches
Budget range:         $40K/mo paid media. $5K/mo content production. $3K/mo partnerships/sponsorships.
Timeline / urgency:   Board wants to hit 500 teams and $150K MRR within 6 months. Need to prove scalable acquisition channel.
Key constraints:      Long sales cycle (14-45 days from first touch to team signup). Decision-maker is team lead, but agents
                      must adopt for value to stick. Product requires onboarding call for teams >10 seats.
What success looks like in 90 days:  50 new teams/month acquisition rate, CAC < $800/team, 80% of new teams have 3+ active users by Day 30, content driving 30% of demo requests
What would make this engagement fail:  Acquiring teams that churn because agents don't adopt. Team lead signs up but agents never log in — that's a retention problem masked as an acquisition win.
Agents needed immediately:  PM, Researcher, Content Writer, SEO, Paid, Analytics, CRM, CRO
Agents to defer:      Influencer (partnerships first, creator content later), Designer (templates from existing brand guide)
First brief for PM:   Launch Google Search campaign for high-intent keywords + build 2 comparison landing pages (DealFlow vs. spreadsheets, DealFlow vs. generic CRMs). This captures existing demand while content/SEO builds future demand.
```

---

### Growth PM Context

```
### Active Client: DealFlow
- Business: CRM for real estate teams. B2B SaaS, $49/seat/mo. Helps brokerages manage pipeline, track deals, and coordinate agents.
- Stage: Post-PMF, scaling (200 teams, 1,400 seats)
- Primary ICP: Real estate team leads managing 5-20 agents, doing $10M+/year in volume. Currently duct-taping deals together with spreadsheets, generic CRMs, or a combination of both.
- Top channels: Google Search (high-intent), LinkedIn (team lead targeting), SEO/content (long-tail real estate ops queries), email nurture, partnerships with real estate coaches and training platforms
- Current sprint focus: Launch Google Search campaign on "real estate CRM" cluster + build 2 comparison LPs. Secondary: content brief for first 5 SEO articles targeting "real estate team management" long-tail keywords.
- Key integrations: HubSpot (marketing CRM + email), Segment (event pipeline), Google Ads, LinkedIn Ads, Webflow (marketing site), Intercom (product messaging + support chat), Stripe (billing)
- Operator role: Scott — approves budget changes >20%, new channel launches, pricing/packaging changes. VP Marketing (internal) handles day-to-day campaign approvals.
- Not in scope for PM: Product roadmap, enterprise sales process (separate sales team), customer success post-onboarding (separate CS team handles retention beyond Day 60)
```

---

### Growth Researcher Context

```
### Active Client: DealFlow
- Category: Real estate technology / CRM for real estate teams
- Primary communities to monitor:
  - Reddit: r/realtors, r/RealEstate, r/realestateinvesting, r/REBubble (market sentiment)
  - Facebook Groups: "Real Estate Team Builders," "Lab Coat Agents," "Real Estate Rockstars," "Team Leaders & Brokers"
  - YouTube: Tom Ferry channel comments, Katie Lance social media training, real estate coaching content comment sections
  - LinkedIn: Real estate thought leaders, brokerage owner posts, "Real Estate Technology" group
  - Podcasts: Monitor reviews and social mentions of "Real Estate Rockstars Podcast," "Tom Ferry Show"
- Top competitors: Follow Up Boss (direct — RE-specific CRM), kvCORE (enterprise RE platform), LionDesk (budget RE CRM), HubSpot (generic CRM teams hack for RE), spreadsheets/Google Sheets (manual alternative), Salesforce (enterprise, over-engineered for small teams)
- Current ICP focus: "The Scaling Team Lead" — 35-50, built a team of 5-20 agents, doing $10M-$50M/year. They've outgrown spreadsheets but Salesforce is overkill and expensive. They need something that speaks real estate — not generic "contacts" and "deals" but "listings," "buyers," "closings," and "commission splits." They make the buying decision, but their agents must adopt for it to stick.
- Key questions to maintain research on:
  - What specific workflow breaks when a team outgrows spreadsheets? (Pain language for ads + LP copy)
  - What makes team leads evaluate a new CRM — what's the trigger event? (Timing for outbound + content)
  - Why do agents resist adopting new tools the team lead buys? (Onboarding design + retention)
  - What do team leads wish their current CRM understood about real estate? (Differentiation messaging)
  - Which real estate coaches and training programs have the most influence on tool adoption? (Partnership targets)
- Review monitoring: G2 and Capterra reviews for Follow Up Boss, kvCORE, LionDesk — monthly. LinkedIn posts mentioning "real estate CRM" — weekly scan.
```

---

### Content Writer Context

```
### Active Client: DealFlow

Brand voice summary:
- Professional but not corporate. Industry insider who's been in the room with a team lead trying to manage 15 agents on a spreadsheet. Direct, specific to real estate, zero tolerance for vague SaaS speak.
- Tone adjectives: knowledgeable, direct, practical, industry-fluent, confident
- Never sounds like: generic SaaS marketing ("streamline your workflow"), corporate enterprise ("leverage synergies"), or condescending ("you're probably still using spreadsheets")

Voice references: HubSpot's educational clarity, Stripe's technical confidence, Close.com's sales-practitioner voice (written by people who've actually sold)

Signature themes (use and reuse, varied phrasing):
- "Built for real estate, not adapted from something else"
- "Your agents actually use this one"
- "See every deal. Know every stage. Close more."
- "The CRM that speaks real estate"

Good examples:
- "Your agents shouldn't need a training course to update a deal. DealFlow works how they already think — by listing, by buyer, by closing date." ✅
- "3 of your 12 agents are actually updating the CRM. The other 9 text you updates. DealFlow fixes that." ✅
- "Follow Up Boss charges per user. Salesforce charges per user plus your sanity. DealFlow: $49/seat, everything included." ✅

Never write:
- "Revolutionize your real estate business with our cutting-edge platform" ❌
- "Empower your team to achieve operational excellence" ❌
- "DealFlow leverages AI to transform your pipeline management" ❌
- Anything that sounds like it was written by someone who has never sold a house ❌

Primary ICP: Real estate team leads managing 5-20 agents who are frustrated that their current CRM doesn't understand real estate workflows. They want their whole team to actually use the tool — not just log in once and go back to texting updates.

Top converting angles (update as Analytics reports back):
- Pain-led: "Half your team isn't updating the CRM because the CRM wasn't built for them."
- Identity-led: "Built by a team that's closed real estate deals, not a team that's closed Series B rounds."
- Proof-led: "200 real estate teams manage $2.3B in active pipeline on DealFlow. Average team adoption: 94%."
```

---

### SEO Context

```
### Active Client: DealFlow
- Domain(s): dealflow.com (primary), dealflow.com/blog (content hub — live, 12 articles published), dealflow.com/compare (comparison pages — planned)
- App Store: N/A (web-based SaaS with responsive mobile web app, no native app)
- Category keywords: real estate CRM, CRM for real estate teams, real estate team management software, real estate pipeline tracker, best CRM for realtors, real estate deal tracking, brokerage CRM, real estate agent management tool, follow up boss alternative, real estate team tools
- Competitors to monitor: followupboss.com, kvcore.com, liondesk.com, hubspot.com/industries/real-estate, close.com (indirect — sales CRM positioning reference)
- Current priority: 1) Build keyword universe around "real estate CRM" and "real estate team management" clusters. 2) Publish 5 comparison pages (DealFlow vs. each competitor + vs. spreadsheets). 3) Launch blog content calendar targeting long-tail "how to manage a real estate team" queries. 4) Technical SEO audit of existing site — check indexing, page speed, schema markup.
- Technical stack: Webflow (marketing site + blog). Good for SEO basics (meta tags, sitemap auto-generation, responsive). Limited for advanced technical SEO (custom schema, dynamic rendering). May need Engineer support for structured data.
- Rank tracking status: Baseline set. Tracking 45 keywords in Ahrefs. Currently ranking page 1 for "real estate team CRM" (position 7) and "CRM for real estate agents" (position 12). Not ranking for head term "real estate CRM" (Follow Up Boss and kvCORE dominate).
```

---

### Growth Designer Context

```
### Active Client: DealFlow
- Brand colors: #0F172A (dark navy — primary), #3B82F6 (bright blue — accent/CTA), #F1F5F9 (light gray — background), #1E293B (charcoal — body text), #10B981 (green — success/positive metrics), #F59E0B (amber — warnings/attention)
- Typography: Inter for body and UI (consistent with the product). Cal Sans for marketing headlines. System monospace for data tables and metrics.
- Visual tone: Professional, clean, data-forward. Think "modern fintech meets real estate" — not the typical cheesy real estate stock photography (no handshakes, no house keys, no "SOLD" signs). Show product UI, show data, show team dashboards. When using photography, use candid office/meeting shots — real people working, not posed.
- Reference brands visually: Linear (clean product screenshots), Notion (warm professional), Close.com (sales-tool aesthetic), Ramp (fintech credibility)
- Current template priority: Google Responsive Search Ad assets (headlines + descriptions), LinkedIn single-image ads (1200x627), comparison page layout templates, product screenshot treatment template (browser chrome + subtle shadow)
- Active designers / collaborators: In-house brand designer (handles product UI). Growth creative produced from Figma template library. Contract designer for major LP builds.
- Figma workspace: DealFlow / Marketing & Growth
- Special format requirements: LinkedIn ads must include product UI screenshots — stock photography underperforms by 40% in this B2B audience. All product screenshots must use real (anonymized) data, not empty-state mockups. Google Display ads not a priority — Search and LinkedIn are primary.
```

---

### CRO Context

```
### Active Client: DealFlow
- Primary pages to optimize:
  - dealflow.com (homepage — primary entry point from organic + direct)
  - dealflow.com/pricing (pricing page — 12% of all sessions, 2.1% demo request CVR)
  - dealflow.com/demo (demo request form — 3-field form, 34% completion rate from pricing page visits)
  - dealflow.com/compare/[competitor] (comparison pages — planned, no baseline yet)
  - dealflow.com/blog/[article] → CTA to demo (blog-to-demo conversion path)
- Current conversion goal: Demo request (primary). Secondary: free trial signup (self-serve path for smaller teams <5 seats).
- Analytics access: GA4 confirmed. Segment piping events to HubSpot + Mixpanel. Full funnel: page_viewed → cta_clicked → demo_requested → demo_completed → trial_started → subscription_started.
- Heatmap tool: Microsoft Clarity installed on all marketing pages. Session recordings active. Heatmaps generating on pricing page and homepage.
- Known friction points:
  - Homepage hero does not mention "real estate" above the fold — visitors from Google Search for "real estate CRM" bounce at 62% (they're not sure they're in the right place)
  - Pricing page shows per-seat pricing but doesn't show total team cost — team leads want to see "$49/seat x 10 agents = $490/mo" not just "$49/seat"
  - Demo form asks for "Company size" as a dropdown — this field has the highest abandonment (real estate teams don't think in "company size," they think in "number of agents")
- ICP psychology: Team leads are pragmatic buyers. They've been burned by tools that promised "easy" and delivered "another thing to manage." Credibility signals: real estate-specific language (not generic SaaS), customer logos from recognizable brokerages, specific adoption metrics ("94% team adoption rate"). Trust killers: vague product descriptions, no industry-specific proof, enterprise-y language that signals "this wasn't built for me."
- Top hypothesis angles to explore:
  - Add "for Real Estate Teams" to homepage H1 and test impact on bounce rate for paid search traffic
  - Add team cost calculator to pricing page (interactive: "How many agents?" slider → shows monthly cost) — test impact on pricing-to-demo CVR
  - Replace "Company size" field on demo form with "How many agents on your team?" — test impact on form completion rate
```

---

### Growth Paid Context

```
### Active Client: DealFlow
- Primary channel: Google Ads (Search) — capturing high-intent "real estate CRM" demand
- Secondary channel: LinkedIn Ads — targeting real estate team leads by job title + industry. Meta deferred (ICP isn't on Meta in buying mode for B2B software).
- Conversion goal: Demo request (primary). Free trial signup (secondary, self-serve path).
- Target CPA: $120 per demo request. $45 per free trial signup. Target CAC: $800 per team (assumes 15% demo-to-close rate, 30-day sales cycle).
- Budget: $40K/mo total. $28K Google Search, $12K LinkedIn. Revisit allocation monthly based on CPA by channel.
- Primary ICP for targeting:
  - Google Search: High-intent keywords — [real estate CRM], [CRM for real estate teams], [follow up boss alternative], [real estate pipeline software]. Negative keywords: [free], [open source], [single agent], [residential property management]
  - LinkedIn: Job titles — Team Lead, Broker, Managing Broker, VP of Sales at real estate companies. Company size 10-500. Industry: Real Estate. Layer with "recently changed jobs" signal (new team leads often reevaluate tools).
  - Retargeting: Pricing page visitors (7-day window — hot). Blog readers who viewed 2+ articles (30-day window — warm). Demo page visitors who didn't complete (3-day window — cart abandon equivalent).
- Current campaign status: Scaling. Google Search campaigns live for 6 weeks, CPA at $135 (above target — optimizing). LinkedIn in creative testing — 3 ad variants running against team lead audience.
- Lookalike source: HubSpot export of closed-won deals (180 teams) uploaded to LinkedIn as Matched Audience + 1% expansion. Google Customer Match from same list for RLSA layering.
- Pixel / tracking: GA4 confirmed on all pages. LinkedIn Insight Tag live. Google Ads conversion tracking firing on demo_requested event via Segment. HubSpot attribution connected — can see ad click → demo → close in one view.
```

---

### Growth Analytics Context

```
### Active Client: DealFlow
- Analytics stack: GA4 (web traffic + campaign attribution), Segment (event pipeline — routes to all tools), Mixpanel (product analytics — feature usage, activation, retention), HubSpot (marketing attribution + CRM pipeline tracking), LinkedIn Insight Tag, Google Ads conversion tracking
- North Star metric: Teams with 3+ active users who close a deal tracked in DealFlow within 60 days. Defined as: team where >= 3 distinct users fire `session_started` event in any 7-day window AND team has at least one `deal_closed` event within 60 days of `team_signup_completed`.
- Primary KPIs:
  - Demo requests per week (target: 40/week)
  - Demo-to-trial conversion rate (target: 35%)
  - Trial-to-paid conversion rate (target: 25%)
  - Team activation rate: % of new teams with 3+ active users by Day 30 (target: 80%)
  - CAC by channel (target: <$800/team blended)
  - Net revenue retention (target: >110% — seat expansion within existing teams)
- Attribution: Last non-direct click (default). First-touch reported alongside — critical for content/SEO attribution since many buyers read 3-4 blog posts before requesting a demo. HubSpot multi-touch attribution report run monthly for strategic channel decisions.
- Experiment infrastructure: Active. Webflow native A/B testing for marketing pages (limited but functional). Mixpanel feature flags for in-product experiments. Running 3-4 experiments/month. First priority: homepage and pricing page tests (CRO hypotheses queued).
- Dashboard delivery: Weekly dashboard published to `00_shared/reporting/` every Monday. Slack notification in #dealflow-growth. Monthly board-ready metrics summary (MRR, team count, CAC, NRR) co-produced with Finance.
```

---

### Growth CRM Context

```
### Active Client: DealFlow
- CRM platform: HubSpot (marketing automation + lifecycle email). Intercom (in-product messaging, onboarding tooltips, support chat). Segment routes events to both.
- Community channels: LinkedIn Group: "DealFlow Users — Real Estate CRM Community" (320 members, low engagement — needs activation). Webinar series (monthly "Real Estate Ops" webinar — 80-120 registrants, 40% attendance). No Discord or Slack (ICP doesn't live there — they're on Facebook and LinkedIn).
- North Star action (activation): Team has 3+ users who have each logged in and updated at least one deal within 14 days of team signup. This is the "team activation" moment — once a team hits this, D90 retention is 89%.
- Current lifecycle priority: Post-demo nurture sequence for prospects who attended a demo but haven't started a trial. Current gap: 65% of demo attendees don't convert to trial — no follow-up sequence exists. Secondary: team onboarding sequence to drive agent adoption after team lead signs up.
- Key segments to build first:
  - Demo attended, no trial started (Day 1-14 post-demo — nurture to trial)
  - Trial started, <3 active users (Day 1-7 — "invite your agents" push)
  - Trial active, 3+ users, no deal created (Day 7-14 — activation push to first deal)
  - Paid team, <50% agent adoption (ongoing — expansion/adoption campaign)
  - Paid team, high adoption, no referral yet (Day 30+ — referral + case study ask)
  - Churned trial (Day 15+ — win-back sequence with objection handling)
- ICP community behavior: Team leads are advice-seekers — they join groups to learn how other team leads manage operations. They share wins publicly ("just closed our biggest month"). They respond well to peer benchmarks ("teams your size typically..."). They don't engage with generic "tips and tricks" content — it has to be specific to real estate team operations. Best engagement driver: case studies from similar-sized teams.
- Referral angle: Extrinsic — 1 month free for referrer per team referred (up to 3 months). Referred team gets extended 30-day trial (instead of 14-day). Prompt after team hits "3+ active users who closed a deal" milestone. Framing: "Know another team lead drowning in spreadsheets? Give them 30 days free." Partner referral track: real estate coaches get $200/team referred as a partnership incentive, separate from user referral.
```

---

### Growth Ops Context

```
### Active Client: DealFlow
- Active landing pages: dealflow.com (homepage), dealflow.com/pricing, dealflow.com/demo, dealflow.com/compare/follow-up-boss (live), dealflow.com/compare/spreadsheets (in development), dealflow.com/webinar (monthly event registration)
- Pixel status: GA4 live on all pages. LinkedIn Insight Tag live. Google Ads global site tag + conversion actions configured (demo_requested, trial_started). HubSpot tracking code live. All confirmed firing via Tag Assistant and LinkedIn Insight Tag Helper.
- Analytics tool: GA4 (web), Segment (event routing hub), Mixpanel (product), HubSpot (marketing attribution + pipeline)
- UTM format: utm_source=[platform]&utm_medium=[type]&utm_campaign=DF_[CHANNEL]_[objective]_[audience]_[date]&utm_content=[creative-variant]&utm_term=[keyword]
  - Example: utm_source=google&utm_medium=cpc&utm_campaign=DF_GSEARCH_DEMO_branded_20260301&utm_content=RSA_v2&utm_term=real+estate+crm
  - Example: utm_source=linkedin&utm_medium=cpc&utm_campaign=DF_LI_DEMO_teamleads_20260315&utm_content=ProductUI_Pain_v1
- Tool stack: HubSpot (marketing CRM), Segment (CDP), Mixpanel (product analytics), Google Ads, LinkedIn Ads, Webflow (marketing site), Intercom (in-product messaging), Stripe (billing), Slack, Notion, GitHub, Figma
- Current ops priority: 1) QA comparison page tracking before launch (UTMs, GA4 events, HubSpot form attribution). 2) Build automated reporting pipeline: Segment → Mixpanel → weekly dashboard auto-pull. 3) Audit HubSpot lifecycle stage automation — confirm that demo_requested → trial_started → subscription_started events correctly advance contacts through pipeline stages.
```

---

### Growth Engineer Context

```
### Active Client: DealFlow
- LP infrastructure: Webflow (marketing site, blog, comparison pages). Custom sections requiring dynamic content (pricing calculator, ROI tool) built as embedded React components hosted on Vercel, loaded via Webflow embed blocks.
- GitHub org / repo: github.com/dealflow-crm/marketing (embedded components, tracking scripts, A/B test logic) and github.com/dealflow-crm/app (product repo — Engineer has read access for event schema reference)
- Preview URL process: Webflow staging site for page changes. Vercel preview URLs for embedded component PRs. Both require QA sign-off from Ops before publishing to production.
- Analytics stack: GA4 (gtag.js on all pages), LinkedIn Insight Tag, Google Ads global site tag, Segment analytics.js (event pipeline to Mixpanel + HubSpot), Intercom Messenger (in-product)
- A/B test approach: Webflow native A/B testing for simple page variants (headline, CTA, layout). For more complex tests (pricing calculator, multi-step forms), Vercel Edge Functions serve variants via embedded components. Variant assignment logged to Segment → Mixpanel for analysis.
- Key integrations: Webflow API (CMS for blog content), HubSpot API (form submissions, contact creation), Segment (event tracking), Stripe (subscription events for revenue attribution), Intercom (product messaging triggers), Calendly (embedded on demo page for scheduling)
- Current build priority: 1) Build interactive team cost calculator for pricing page (React component, embed in Webflow). 2) Set up Webflow A/B test for homepage H1 variant. 3) Implement Calendly embed on demo page with Segment event tracking (calendly_meeting_scheduled event). 4) Build comparison page template in Webflow CMS for scalable competitor page production.
```

---

### Influencer / Partnerships Context

```
### Active Client: DealFlow
- Category: Real estate technology / B2B SaaS for real estate teams
- Creator ICP: Real estate educators and coaches — people who teach team leads how to build and run teams. Not "real estate influencers" who post house tours. The ICP follows people who talk about operations, hiring, systems, and scaling. Also: real estate podcast hosts and newsletter operators who cover the business side of real estate.
- Priority platforms: YouTube (primary — real estate coaching content has long shelf life and high intent), LinkedIn (secondary — team leads are active, thought leadership posts perform well), Podcast sponsorships (tertiary — test with 2-3 RE operations podcasts)
- Creator sweet spot: Mid-tier 10K-200K followers. Must be recognized in the real estate team-building niche — not general real estate content. Credibility > reach. Ideal: former team leads or brokers who now teach/coach. High comment engagement on "how to run a team" style content.
- Top communities to source from: YouTube channels covering real estate team building and operations, LinkedIn real estate thought leaders (search "real estate team lead" + "brokerage operations"), Facebook Group admins for large RE communities, speakers at Inman Connect, NAR conferences, and Tom Ferry events
- Deal structure preference: Partnership (co-branded webinar or content piece) → affiliate ($200/team signup via unique link) → sponsored content ($2K-$5K for dedicated video or post). Avoid flat-fee sponsorships with no performance component. Start with 3 partnerships to validate content quality and audience fit.
- Affiliate structure: Unique tracking links via HubSpot. Partner gets $200 per team that starts a paid subscription (not just trial — must convert). 90-day cookie window (long B2B sales cycle). Monthly reporting and payout via ACH. Partners with 5+ referrals/quarter get "DealFlow Certified Partner" badge and early feature access.
- Brand voice for creator briefs: Talk about the problem you solve — team coordination, deal visibility, agent accountability — not the features. Show the product in context of running a real team. No hard CTA — "If you're managing a team on spreadsheets, check out DealFlow" is better than "Use code DEALFLOW for 20% off." Let the creator frame it in their expertise area.
- Content angles that will resonate:
  - "How I track 47 active deals across 12 agents without a single spreadsheet" (operations efficiency)
  - "The real reason your agents won't use the CRM you bought" (team adoption pain point)
  - "I switched from [competitor] to DealFlow — here's what actually changed" (comparison/switching story)
- Red flags for this category: Creators who primarily sell courses and use every sponsor as a "tool I recommend" (audience is fatigued). Generic "luxury real estate" content creators (wrong ICP — they sell aspiration, not operations). Anyone not currently or recently in real estate team management — credibility is mandatory in this niche.
```

---

## Key Takeaways

A few things to notice across both examples:

1. **Every field is specific.** No "TBD" or "fill in later" on critical fields. If something genuinely isn't known yet, it says so with a plan to establish it ("establish in first 30 days").

2. **The same system, different inputs.** The agent structure is identical — what changes is the content. FitTrack's Paid agent runs Meta campaigns with app install goals. DealFlow's Paid agent runs Google Search with demo request goals. Same agent, same protocols, different context.

3. **Cross-references are consistent.** FitTrack's CRM context references Customer.io because that's in the tool stack. DealFlow's references HubSpot. Every agent's context aligns with the tools and channels listed in other agents' contexts.

4. **ICP language shows up everywhere.** The Researcher's findings flow into Content Writer's voice, Paid's targeting, CRO's psychology notes, and CRM's segmentation. This is the system working as designed — research informs everything downstream.

5. **Priorities reflect the stage.** FitTrack (early traction) focuses on fixing onboarding before scaling acquisition. DealFlow (post-PMF) focuses on scaling acquisition and improving conversion of existing demand. The system doesn't prescribe what to work on — the client context does.
