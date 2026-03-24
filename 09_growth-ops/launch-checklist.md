# Launch Checklist

> 5-phase framework for launching a new client, channel, or campaign. Work through sequentially — each phase builds on the last. No skipping.

---

## Recommended Tool Stack

Pick tools that minimize setup time and integrate cleanly. Opinionated defaults — swap per client needs.

| Function | Default | Alternative |
|---|---|---|
| Email / automation | Event-driven ESP (Customer.io, Klaviyo, Loops) | Resend (developer-first), ActiveCampaign (SMB) |
| Landing pages | Git-deployed hosting (Vercel, Netlify, Cloudflare Pages) | Webflow, Unbounce (no-code) |
| Ad platform (start) | Meta Ads (broadest reach, visual formats) | Google Ads (high-intent search), LinkedIn (B2B) |
| Social scheduler | Buffer (simple, multi-platform, free tier) | Later (IG-first), Typefully (Twitter-first) |
| Analytics | Event-based (PostHog, Mixpanel, Amplitude) | GA4 (free, universal) |
| Link tracking | Dub.co (UTM management, free tier) | Bitly |
| Design | Canva (fast iteration, brand kits) | Figma (more control, slower) |
| CRM | HubSpot (free tier), Salesforce (enterprise) | Pipedrive (SMB), Close (sales-heavy) |

**Minimum viable stack:** ESP + hosting + one ad platform. Everything else layers on.

---

## Phase 1: Foundation (Week 1)

Get the infrastructure running. No campaigns yet — just the pipes.

### 1.1 Set up email (ESP)

- [ ] Create account on chosen ESP
- [ ] Configure sending domain (DNS records: SPF, DKIM, DMARC)
- [ ] Upload client brand assets (logo, colors, fonts) into ESP template builder
- [ ] Create user properties matching client data schema
- [ ] Set up event tracking integration between client app/site and ESP
- [ ] Import onboarding email templates into ESP as a workflow
- [ ] Wire triggers: signup event → Email 1 (immediate), set delays per sequence doc
- [ ] Send test emails — verify rendering in Gmail, Apple Mail, Outlook
- [ ] Do NOT launch re-engagement or lifecycle emails yet — onboarding first

**Time estimate: 4-6 hours**

### 1.2 Deploy landing pages

- [ ] Connect repo or upload HTML files to hosting platform
- [ ] Deploy primary ICP landing page
- [ ] Set up custom domain or subdomain
- [ ] Verify tracking: UTM parameters pass through to analytics
- [ ] Verify all CTAs and destination links work correctly
- [ ] Test on mobile — pages must render correctly on phones
- [ ] Install pixels (Meta, Google, LinkedIn — whichever channels you'll run)

**Time estimate: 1-2 hours**

### 1.3 Set up tracking

- [ ] Verify analytics tool is receiving events from client app/site
- [ ] Confirm UTM parameters are captured on landing page visits
- [ ] Set up conversion goals:
  - Landing page visit → signup/lead (primary)
  - Signup → activation event (secondary)
- [ ] Create baseline dashboard (spend, signups, CPA, activation rate)
- [ ] Confirm pixel fires in platform debug tools (Meta Events Manager, GA4 DebugView)

**Time estimate: 2-3 hours**

### Phase 1 total: ~1 day of focused work

---

## Phase 2: First Campaign (Week 2)

Launch one paid campaign to validate the funnel end-to-end.

### 2.1 Create ad creative

- [ ] Pick ONE ICP to start (broadest audience, highest volume potential)
- [ ] Pick ONE channel (default: Meta for B2C, LinkedIn or Google for B2B)
- [ ] Create ad assets:
  - 1 static image ad (1080x1080)
  - 1 short video ad (9:16, 15 seconds) — screen recording, demo, or motion graphic
- [ ] Write 3 ad copy variants (different hooks, same CTA)
- [ ] Export assets and copy for upload

**Time estimate: 2-3 hours**

### 2.2 Launch first campaign

- [ ] Create ad account (if not done)
- [ ] Confirm pixel installed on landing pages
- [ ] Create campaign:
  - Objective: Conversions (optimize for signups/leads)
  - Audience: Per ICP targeting spec
  - Placements: Automatic (let platform optimize)
  - Budget: $20-50/day to start
- [ ] Upload 2 ad creatives x 3 copy variants = 6 ad variants
- [ ] Point all ads to primary landing page with UTMs
- [ ] Set calendar reminder: review performance at 48 hours

**Time estimate: 1-2 hours**

### 2.3 Validate the full funnel

- [ ] After 48 hours, check:
  - Are ads getting impressions and clicks? (If CTR < 1%, revisit creative)
  - Are landing page visits converting? (Target: >5% for B2B, >8% for B2C)
  - Are new leads/signups entering the ESP? (Check delivery)
  - Are new users hitting the activation event? (Check product analytics)
- [ ] Kill underperforming ad variants (bottom 50%)
- [ ] Increase budget on winners by 25-50%

**Time estimate: 1 hour review**

### Phase 2 total: ~1 day of focused work + 48-hour wait

---

## Phase 3: Expand (Weeks 3-4)

Funnel works. Expand methodically.

### 3.1 Add second ICP or channel

- [ ] Launch second ICP campaign on same channel OR same ICP on second channel
- [ ] Point to dedicated landing page for new ICP (if applicable)
- [ ] **Rule: never launch more than one new campaign per week**

### 3.2 Activate email sequences

- [ ] Import re-engagement email templates into ESP
- [ ] Wire triggers: inactivity event → re-engagement sequence
- [ ] Set delays and suppression rules
- [ ] Import lifecycle/milestone email templates
- [ ] Wire triggers to behavioral events (usage milestones, purchase events)
- [ ] Send test emails, verify rendering

### 3.3 Start social (one platform)

- [ ] Pick ONE platform (highest organic reach for the audience)
- [ ] Set up account with client branding
- [ ] Batch-produce 5-7 posts/videos in one session
- [ ] Schedule for the week using social scheduler
- [ ] Commit to 4 weeks before evaluating — organic takes time

### Phase 3 total: spread across 2 weeks, ~2 hours/day

---

## Phase 4: Optimize (Weeks 5-8)

Everything is running. Now make it better.

### 4.1 Landing page A/B tests

- [ ] Deploy a second landing page variant for best-performing ICP
- [ ] Test a different headline angle (pain-point-led, benefit-led, social-proof-led)
- [ ] Split traffic 50/50 (use hosting edge config or ad platform split)
- [ ] Run for 7 days minimum or until statistical significance
- [ ] Kill the loser, keep the winner, test a new variant

### 4.2 Email optimization

- [ ] Review onboarding sequence open rates and click rates
- [ ] A/B test subject lines on lowest-performing email
- [ ] Check activation rates for users who complete onboarding vs. those who don't
- [ ] Review re-engagement sequence — are lapsed users coming back?

### 4.3 Ad creative refresh

- [ ] Refresh ad creative every 2-3 weeks to combat fatigue
- [ ] Test new angles from the ad brief library
- [ ] Test video vs. static image performance
- [ ] Expand to next ICP or channel based on budget and results

### 4.4 Expand social

- [ ] Add a second platform
- [ ] Repurpose content across formats (Reels, Shorts, Stories)
- [ ] Begin weekly content calendar cadence

---

## Phase 5: Scale (Months 3+)

- [ ] Deploy landing pages for all ICPs
- [ ] Run campaigns across 3+ channels
- [ ] All email sequences running with full automation
- [ ] Social posting on 3+ platforms with scheduling
- [ ] Launch referral program (if applicable)
- [ ] Begin SEO content production (programmatic or editorial)
- [ ] Explore creator partnerships and co-marketing

---

## Quick Reference: What Launches When

| Asset | Phase | Status |
|---|---|---|
| Onboarding emails | Phase 1 | Set up in ESP, runs forever |
| Primary landing page | Phase 1 | Deploy once, iterate later |
| Tracking + analytics | Phase 1 | Confirm before any spend |
| First paid campaign (1 ICP, 1 channel) | Phase 2 | First live campaign |
| Re-engagement emails | Phase 3 | Set up in ESP, runs forever |
| Lifecycle/milestone emails | Phase 3 | Set up in ESP, runs forever |
| Second campaign (new ICP or channel) | Phase 3 | Expand after funnel validated |
| Social — 1 platform | Phase 3 | Ongoing, timebox weekly |
| Landing page A/B tests | Phase 4 | Ongoing optimization |
| Ad creative refresh | Phase 4 | Every 2-3 weeks |
| Social — multi-platform | Phase 4 | Expand after proving one |
| All ICPs, all channels | Phase 5 | Full scale operation |
