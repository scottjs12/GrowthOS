# Client Onboarding — Orchestrator Playbook

> Your complete guide from "I just cloned this repo" to "the system is running and compounding." Whether you're a consultant onboarding a client or an in-house growth lead setting this up for your own company.

---

## Before You Start: Day 1 Prep Checklist

Have these open before you sit down. If you don't have access, getting it is your first task.

```
DAY 1 PREP
──────────
□ Analytics dashboard access (GA4 / Mixpanel / Amplitude / PostHog)
□ Ad platform access + last 30 days performance export (if running ads)
□ Email / ESP access + list of active sequences (if any)
□ Brand guidelines doc, Figma link, or brand asset folder
□ List of active landing pages with URLs
□ Current ICP description (even if it's informal or in someone's head)
□ Budget range and who approves spend
□ Tool stack list (what's live, what's paid, what's unused)
□ Access credentials or invites for: CRM, social accounts, community channels
□ 90-day business goal (revenue target, user target, launch date — whatever matters most)
```

**If you're a consultant:** Request these from the client before the kickoff call. Send this list as a pre-work email.

**If you're in-house:** You probably have half of these already. The gaps tell you who to talk to first.

---

## Stakeholder Interview Guide

You can't fill the client context alone. Other people have the answers. Here's who to talk to and what to ask.

### Founder / CEO / Head of Growth (30 min)
**What they own:** North Star, budget, priorities, ICP hypothesis, competitive positioning

```
QUESTIONS
─────────
1. If you could only track one number to know the business is growing, what is it?
2. Who is your best customer — the one you'd clone 1,000 of? Be specific.
3. What are the 3 most important things to accomplish in the next 90 days?
4. What channels are working right now? What have you tried that didn't work?
5. What's the monthly budget range for growth? Who approves spend?
6. What would make you say "this growth system failed" in 6 months?
7. What are 3 competitors you respect? What do they do better than you?
8. What's the one thing you'd want me to fix first?
```

### Design Lead / Brand Team (20 min)
**What they own:** Brand voice, visual identity, design assets, Figma access

```
QUESTIONS
─────────
1. Show me 3 pieces of content that feel "on brand." What makes them right?
2. Show me something that's off-brand. What's wrong with it?
3. 3 adjectives that describe how we should sound. 3 that describe how we should NOT sound.
4. What brands do you look up to visually? (Not competitors — aspirational references)
5. Where do brand assets live? (Figma, Google Drive, Dropbox, etc.)
6. What are the brand colors (hex codes), fonts, and any hard rules?
7. Are there format requirements I should know about? (Safe zones, logo placement rules, etc.)
```

### Engineering / Technical Lead (20 min)
**What they own:** Tool stack, infrastructure, tracking implementation, repo access

```
QUESTIONS
─────────
1. What's the tech stack? (Framework, hosting, database, CMS)
2. Where does the growth code live? (Repo, branch, deploy process)
3. What analytics tools are installed? Are they firing correctly?
4. What pixels are live? (Meta, Google, LinkedIn, TikTok)
5. How do preview URLs work? (Vercel on PR, staging server, etc.)
6. What's the A/B testing setup? (Edge, server-side, client-side, none)
7. What integrations exist between the app and marketing tools? (ESP events, CRM sync, etc.)
8. What's broken or fragile right now that I should know about?
```

### Sales / CS / Support (20 min)
**What they own:** ICP validation, objections, churn reasons, lead quality signal

```
QUESTIONS
─────────
1. Describe the last 3 customers who bought easily. What did they have in common?
2. Describe the last 3 who churned or ghosted. What pattern do you see?
3. What's the #1 objection you hear? How do you handle it?
4. What language do customers use to describe the problem we solve? (Their words, not ours)
5. Where do leads come from that close best? Where do the worst leads come from?
6. How fast do you follow up on new leads? What's the process?
7. What do customers complain about most in support tickets?
8. What do customers praise most? (Check NPS comments, reviews, testimonials)
```

### Marketing Team / Media Buyer (20 min, if applicable)
**What they own:** Active campaigns, creative performance, audience data, spend history

```
QUESTIONS
─────────
1. What campaigns are running right now? What's performing?
2. What audiences have you tested? What worked, what didn't?
3. What's the current CPA / CAC? What's the target?
4. What creative formats perform best? (Static, video, carousel, UGC)
5. What angles have you tested in copy? What resonated?
6. What's the UTM naming convention? (If none: we'll set one up)
7. What retargeting audiences exist?
8. What's been tried and killed? (So we don't repeat it)
```

### Time Budget: 2 hours of conversations gets you 80% of the context you need.

---

## Existing Asset Audit

If you already have things running, map them to the system before building new.

```
EXISTING ASSET AUDIT
────────────────────
Date:
Auditor:

ACQUISITION
  Landing pages:
    □ List all active URLs: _______________
    □ Which ones get traffic? Monthly visits per page: _______________
    □ Conversion rates (if known): _______________
    □ Tracking confirmed? (Pixels firing, UTMs passing): Y / N / Unknown

  Paid campaigns:
    □ Platforms active: _______________
    □ Monthly spend: $_______________
    □ Current CPA: $_______________
    □ Number of active campaigns: _______________
    □ Last creative refresh: _______________
    □ Naming convention in place: Y / N

  Organic / SEO:
    □ Blog or content hub: Y / N — URL: _______________
    □ Keyword tracking: Y / N — Tool: _______________
    □ Monthly organic sessions: _______________
    □ Top 5 ranking keywords: _______________

  Social:
    □ Active platforms: _______________
    □ Posting frequency: _______________
    □ Follower counts: _______________
    □ Engagement rate: _______________

ACTIVATION & RETENTION
  Email sequences:
    □ ESP: _______________
    □ Onboarding sequence: Y / N — # emails: _______________
    □ Re-engagement sequence: Y / N — # emails: _______________
    □ Lifecycle / milestone emails: Y / N
    □ Newsletter / broadcast: Y / N — frequency: _______________

  Community:
    □ Channels: _______________
    □ Active members: _______________
    □ Moderation: Manual / Bot / None

  Referral program:
    □ Exists: Y / N
    □ Incentive structure: _______________
    □ Participation rate: _______________

ANALYTICS & TRACKING
  □ Analytics tool: _______________
  □ Events being tracked: _______________
  □ Dashboard exists: Y / N — Tool: _______________
  □ Attribution model: _______________
  □ Experiment infrastructure: Y / N

GAPS IDENTIFIED
  □ _______________
  □ _______________
  □ _______________
  □ _______________
```

**After the audit:** The gaps become your first sprint backlog. The things already running get documented in your client context file so agents know what exists.

---

## The Orchestrator Journey

### Day 1: Foundation (2-3 hours)

**Hour 1 — Orient**
- [ ] Read `QUICKSTART.md` (10 min)
- [ ] Read `docs/how-it-works.md` (5 min)
- [ ] Skim `STRATEGIST.md` — understand your role and rhythms (10 min)
- [ ] Copy `clients/_template.md` to `clients/[your-company].md`
- [ ] Fill the **minimum viable context** — just these 5 fields:
  1. North Star metric
  2. ICP (one sentence — who, what they want, what frustrates them)
  3. Brand voice (3 words yes, 3 words no)
  4. Active channels
  5. 90-day goal

**Hour 2 — First Output**
- [ ] Run your first agent task — use the Researcher to build an ICP profile:
  ```
  Read 01_growth-researcher/AGENT.md and 01_growth-researcher/icp-template.md.
  Load clients/[your-company].md for context.

  Build a complete ICP profile for [your primary customer segment].
  Here's what I know: [paste whatever you have — informal notes, data, intuition].
  ```
- [ ] Review the output. Refine. This is your ICP v1.
- [ ] Save the ICP profile to `01_growth-researcher/ICP-profiles.md`

**Hour 3 — Strategist Intake**
- [ ] Complete the Strategist Intake in `STRATEGIST.md`
- [ ] Draft your growth model using `docs/growth-model-template.md` (even rough numbers)
- [ ] Identify which agents to activate first (default: Researcher + PM + Content Writer)

**Day 1 checkpoint:** Client context file started, ICP v1 done, Strategist Intake filed.

---

### Week 1: Gather Context + First Briefs

| Day | Activity | Time |
|---|---|---|
| **Day 1** | Foundation (above) | 2-3 hrs |
| **Day 2** | Stakeholder interviews: Founder + Design lead | 1 hr |
| **Day 3** | Stakeholder interviews: Engineering + Sales/CS | 1 hr |
| **Day 4** | Fill remaining client context blocks from interview notes | 1-2 hrs |
| **Day 5** | Existing asset audit + first PM brief | 1-2 hrs |

**Tasks for the week:**
- [ ] Client context file: 10+ of 13 blocks filled (not perfect — just filled)
- [ ] ICP profile v1 reviewed with founder/sales for accuracy
- [ ] Existing asset audit completed
- [ ] First brief filed through PM:
  ```
  Read 00_growth-pm/AGENT.md. Load clients/[your-company].md.

  Create a campaign brief for [your most urgent priority].
  Here's the goal: [describe what you need to accomplish first].
  ```
- [ ] Growth model v1 drafted (rough numbers are fine)

**Week 1 checkpoint:** Context is loaded. You know what exists, what's missing, and what to build first.

---

### Week 2: First Real Outputs

**Activate:** Content Writer + Designer + Ops

| Day | Activity | Time |
|---|---|---|
| **Mon** | Calibrate brand voice with Content Writer agent | 1 hr |
| **Tue** | Ops setup: confirm pixels, set UTM convention, validate tracking | 2 hrs |
| **Wed** | First content output: ad copy or landing page copy via Content Writer | 1 hr |
| **Thu** | Designer: first creative brief or template request | 1 hr |
| **Fri** | Review all outputs, refine, prepare for Week 3 | 1 hr |

**Tasks for the week:**
- [ ] Brand voice calibrated — run 3 copy variants, confirm which sounds right
- [ ] Ops tracking confirmed: pixels firing, UTMs structured, analytics receiving events
- [ ] First copy delivered (ad copy, email copy, or LP copy — whatever's most urgent)
- [ ] Creative brief filed for Designer (if visual assets needed)
- [ ] Start `weekly-runbook.md` cadence — even a lightweight version

**Week 2 checkpoint:** Tracking is live. First content exists. You can start spending.

---

### Week 3-4: First Campaign Live

**Activate:** Paid + Analytics

| Week 3 | Activity |
|---|---|
| **Mon** | Launch first paid campaign (follow `launch-checklist.md` Phase 2) |
| **Tue-Wed** | Build baseline dashboard using `07_growth-analytics/dashboard-setup-guide.md` |
| **Thu** | 48-hour campaign review — kill losers, note winners |
| **Fri** | First weekly performance snapshot using `weekly-runbook.md` Friday template |

| Week 4 | Activity |
|---|---|
| **Mon** | First full Monday planning session from weekly runbook |
| **Tue** | First content production batch (Tuesday creation block) |
| **Thu** | Mid-week pulse check |
| **Fri** | Second weekly snapshot — now you have WoW comparison |

**Tasks for the weeks:**
- [ ] First paid campaign live with proper tracking
- [ ] Full funnel validated: ad → landing page → signup → activation event
- [ ] Baseline dashboard built (at minimum: Executive Summary dashboard)
- [ ] 2 weekly snapshots completed — trend data begins
- [ ] Weekly runbook cadence established (4.5 hrs/week)

**Week 3-4 checkpoint:** Money is flowing. You can see what's working. The operating rhythm exists.

---

### Month 2: Optimization

**Activate:** SEO + CRO

**New cadence additions:**
- [ ] Bi-weekly experiment review (30 min — from STRATEGIST.md rhythms)
- [ ] CRO runs first LP audit using `05_cro/AGENT.md` audit protocol
- [ ] SEO builds keyword universe and first content brief
- [ ] First A/B test designed and launched
- [ ] Email sequences built or audited using `08_growth-crm/email-sequences-playbook.md`
- [ ] Monthly review using `00_shared/reporting/monthly-review-template.md`

**Month 2 checkpoint:** You're not just running — you're optimizing. Experiment backlog has 3+ hypotheses. You have 30 days of data.

---

### Month 3+: Scale + Compound

**Activate (as needed):** CRM + Engineer + Influencer

**What changes:**
- Lifecycle email flows running on autopilot
- Referral program designed and soft-launched
- Second paid channel or ICP expansion
- Content production at steady cadence
- Quarterly strategic review from STRATEGIST.md rhythms
- Pattern library started — logging what works in `docs/pattern-library.md`

**Month 3 checkpoint:** The system compounds. Weekly ops is 4.5 hrs. Monthly review catches drift. Experiments produce learnings that improve the next experiment.

---

## Working With a Team

If you have real humans (designers, engineers, writers, media buyers), here's how they interact with the OS.

### How to hand agent output to a real person

The agents produce briefs. Real people execute them. The handoff:

1. **Run the agent** to generate the brief (campaign brief, creative brief, copy brief)
2. **Review the brief yourself** — the agent is your thinking partner, not the final authority
3. **Send the brief to your team member** — the templates in `00_shared/briefs/` are designed to be readable by anyone, not just AI
4. **Collect the output** and feed results back into the system (performance data, creative assets, copy)

### What your team needs to know

| Team Member | What to Share With Them |
|---|---|
| Designer | `00_shared/briefs/designer-creative-brief-template.md` — "This is how briefs will come to you" |
| Writer / Copywriter | Copy brief from Content Writer agent — angle, tone, format, examples |
| Media Buyer | `00_shared/briefs/media-buyer-brief-template.md` — campaign specs, targeting, budget |
| Engineer | Tracking spec from Analytics agent, LP requirements from PM brief |
| Freelancers | Relevant brief template + client context excerpt (brand voice, ICP, constraints) |

### What your team does NOT need to know

They don't need to understand the agent system, read AGENT.md files, or use Claude. The briefs are the interface. The OS is your operating layer — it makes you faster and more consistent. Your team just sees better briefs arriving on time.

---

## Setting Up Your Infrastructure

GrowthOS produces briefs, dashboards, and reports as markdown files. To share with a team, track work, and connect to live data, you'll want tools around it. Here are opinionated recommendations by need.

### Live Dashboard (share performance with the team)

| Option | Best For | Cost | Setup Time |
|---|---|---|---|
| **Looker Studio** | Teams already on GA4. Connects directly to GA4, Google Sheets, BigQuery. Shareable public link. | Free | 2-3 hours |
| **Notion dashboard** | Small teams who live in Notion. Manual or API-updated. Clean, editable. | Free / $10/mo | 1-2 hours |
| **Google Sheets** | Simplest option. Paste weekly numbers from the Friday snapshot. Share link with team. | Free | 30 min |
| **PostHog / Mixpanel** | Product-focused teams. Built-in dashboards from event data. Best for activation + retention. | Free tier | 3-4 hours |

**Starting from scratch?** Start with Google Sheets. Paste your Friday snapshot numbers weekly. Upgrade to Looker Studio when you want auto-connected GA4 data.

**Already have analytics?** Connect Looker Studio to your existing GA4. Use the `07_growth-analytics/dashboard-spec.md` 5-dashboard framework as your layout guide.

### Work Tracking (what's in progress, blocked, done)

| Option | Best For | Cost | Setup Time |
|---|---|---|---|
| **GitHub Projects** | Solo operators or dev-heavy teams. Kanban + table views. Lives with the repo. Automatable via Actions. | Free | 1 hour |
| **Linear** | Teams that want best-in-class sprint tracking. Fast, clean, has API. | Free / $8/mo | 1-2 hours |
| **Notion board** | Teams already in Notion. Flexible views (kanban, table, calendar). | Free / $10/mo | 1 hour |
| **Trello** | Simplest kanban. Good for non-technical teams or freelancer coordination. | Free | 30 min |
| **Google Sheets** | Zero-tool option. Create tabs for Backlog, In Progress, Done. Filter by agent. | Free | 30 min |

**Starting from scratch?** Use GitHub Projects if you're technical, Notion if you're not. Both are free and handle the PM agent's workflow (briefs → in progress → review → done).

**Suggested columns for any board:**

```
WORK TRACKING BOARD
───────────────────
Columns:  Backlog → Briefed → In Progress → Review → Done
Fields:   Task name, Agent owner, Priority (P1/P2/P3), Due date, Brief link, Status
Views:    Kanban (default), Table (for filtering), Calendar (for deadlines)
```

### Platform Integrations (auto-upload assets, connect to ad platforms)

This is optional and advanced. GrowthOS briefs are designed to be human-executable — you don't need automation to use the system. But when you're ready:

| Integration | How | Complexity |
|---|---|---|
| **Meta Ads** | Meta Marketing API or third-party tools (Revealbot, Smartly) | Medium — API setup required |
| **Google Ads** | Google Ads API or Google Ads Editor (bulk upload from briefs) | Medium |
| **ESP (email)** | Most ESPs have APIs (Customer.io, Klaviyo, Loops) — import sequences programmatically | Low-Medium |
| **Vercel (landing pages)** | Already git-deployed — push HTML to repo, auto-deploys | Low — already built in |
| **Slack (notifications)** | Slack webhook — post dashboard summaries, alerts, brief notifications | Low |
| **Canva (creative)** | Canva MCP integration — generate designs directly from Claude Code | Low — MCP available |

**Starting from scratch?** Don't set up integrations until Month 2. Run the manual workflow first. When you notice yourself doing the same upload/copy-paste 10+ times, that's the integration worth building.

**Already have integrations?** Document them in your client context file (Ops Context → Tool stack) so every agent knows what's connected.

---

## Common Mistakes in the First 30 Days

| Mistake | What to Do Instead |
|---|---|
| Trying to fill all 13 context blocks perfectly on Day 1 | Fill 5 minimum viable fields. Refine over 2 weeks. |
| Activating all 12 agents at once | Follow the activation schedule. 3 agents max in Week 1. |
| Skipping the existing asset audit | You'll duplicate work or miss what's already running. 30 min saves hours. |
| Writing copy yourself instead of briefing Content Writer | The agent produces better variants faster. Brief it, review the output, iterate. |
| Launching ads before tracking is confirmed live | Ops confirms pixels fire → then you spend. Never the other way around. |
| Ignoring the weekly runbook | The 4.5 hrs/week cadence is what makes this compound. Skip it and you're just prompting randomly. |
| Not feeding results back into the system | Performance data makes every agent smarter. Log wins, losses, and learnings. |
| Doing stakeholder interviews after filling context | Talk to people first. The template is easier to fill with their words fresh in your head. |

---

## Quick Reference: What to Use When

| I need to... | Go here |
|---|---|
| Understand the system | `docs/how-it-works.md` |
| Fill in my client context | `clients/_template.md` + `docs/example-client-contexts.md` |
| Find the right prompt | `docs/prompt-cookbook.md` |
| Launch my first campaign | `09_growth-ops/launch-checklist.md` |
| Run weekly ops | `09_growth-ops/weekly-runbook.md` |
| Build a growth model | `docs/growth-model-template.md` |
| Run a post-mortem | `docs/post-mortem-template.md` |
| Adapt for B2B vs B2C | `docs/b2b-b2c-guide.md` |
| Learn from past wins | `docs/pattern-library.md` |
| Brief a designer | `00_shared/briefs/designer-creative-brief-template.md` |
| Brief a media buyer | `00_shared/briefs/media-buyer-brief-template.md` |
| Set up dashboards | `07_growth-analytics/dashboard-setup-guide.md` |
| Design email sequences | `08_growth-crm/email-sequences-playbook.md` |
