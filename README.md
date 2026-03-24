# GrowthOS — AI-Native Growth Operating System

**13 specialist agents. 97 skills. 12 workflows. 10 generators. One system that runs your entire growth function.**

Built by [Scott Schmidt](https://linkedin.com/in/scottschmidt12).

---

## What This Is

Most AI marketing tools are prompt libraries. You paste a prompt, get output, start over.

GrowthOS is an operating system. 13 AI agents with defined roles, documented skills, cross-agent handoff protocols, and a client context layer you can swap for any business. The output of one agent becomes the input for the next. Results compound.

---

## Quick Start

**Want output in 5 minutes?** Go straight to `generators/` — pick a generator (ad copy, email sequences, landing pages, etc.), plug in your context, follow the prompt chain.

**Want to set up the full system?** See `QUICKSTART.md` for a 30-minute guide, or `SETUP.md` for the detailed onboarding with an AI Setup Wizard.

```bash
git clone https://github.com/scottjs12/GrowthOS.git
cd GrowthOS
```

Works best with [Claude Code](https://claude.ai/code) (the `CLAUDE.md` auto-routing handles agent selection), but every file works with any AI tool — just load the relevant AGENT.md + your `clients/[company]/context.md` file as context, then paste the prompt. See `clients/_example.md` for a fully filled-in example.

---

## What's Inside

### 13 Agents

| Agent | Folder | What It Does |
|---|---|---|
| **Strategist** | `STRATEGIST.md` | North Star, growth model, budget philosophy, decision rights |
| **Growth PM** | `00_growth-pm/` | Orchestration — briefs, sprints, experiment scheduling, handoff protocol |
| **Researcher** | `01_growth-researcher/` | ICP profiling, competitive intel, community listening, psychology toolkit |
| **Content Writer** | `02_content-writer/` | Ad copy, LP copy, email copy, cold outbound, social content, case studies |
| **SEO** | `03_seo/` | Keywords, content briefs, technical SEO, ASO, AI search (AEO), programmatic SEO |
| **Designer** | `04_growth-designer/` | Ad creative, modular templates, creative angles, video storyboards |
| **CRO** | `05_cro/` | Hypotheses, LP audits, A/B test design, pricing experiments, onboarding optimization |
| **Paid Media** | `06_growth-paid/` | Meta/Google Ads, audiences, retargeting, budget scaling, positioning testing |
| **Analytics** | `07_growth-analytics/` | KPIs, dashboards, experiment results, cohort analysis, NRR, incrementality |
| **CRM** | `08_growth-crm/` | Lifecycle email, retention, referral programs, viral loops, expansion triggers |
| **Ops** | `09_growth-ops/` | Trafficking QA, UTMs, pixels, RevOps, PQL scoring, launch checklists |
| **Growth Engineer** | `10_growth-engineer/` | LP builds, A/B instrumentation, tracking, Playwright testing, Figma-to-code |
| **Influencer** | `11_influencer-partnerships/` | Creator outreach, UGC, affiliate, ambassador programs, community-as-acquisition |

Each agent has: universal skills (craft knowledge), decision rights, quality criteria, and collaboration protocols with every other agent.

### 12 Workflows

Multi-agent chains with triggers, decision gates, and exit criteria:

| Workflow | When to Use |
|---|---|
| Campaign Launch | New campaign or channel launch |
| Experiment Cycle | Any A/B test or experiment |
| Content Production | Content sprints and batch production |
| Lifecycle Flow Build | New email lifecycle flow |
| Creative Refresh | Ad creative fatigue response |
| Channel Expansion | Adding a new acquisition channel |
| LP Test | Landing page A/B test |
| Post-Test Routing | After any experiment closes |
| Crisis Response | Tracking breaks, budget runaway, competitor move, fraud |
| Competitive Response | Competitor launches product or targets your users |
| Weekly Rhythm | Mon-Fri operating cadence |
| Monthly Review | Trend analysis and course correction |

### 10 Generators

Ready-to-run prompt chains that produce real output in minutes:

| Generator | What It Produces |
|---|---|
| Ad Copy | 3-5 variants per angle, platform-formatted |
| Landing Page Copy | Full LP using 5 proven structures |
| Email Sequence | 5-email lifecycle flow with triggers and branching |
| Cold Outbound | 5-touch OPPA sequence |
| Video Script | 15/30/60s scripts with hook-body-CTA |
| SEO Content Brief | Full brief with keyword validation and AEO angle |
| Social Content Batch | Week of posts across platforms |
| CRO Hypothesis | ICE-scored hypotheses from LP audit |
| Campaign Brief | Full brief with agent assignments |
| Competitive Analysis | Competitor profiles with strategic assessment |

### Strategic Playbooks

| Playbook | What It Covers |
|---|---|
| Unit Economics | CAC, LTV, payback period, Magic Number, burn multiple |
| PLG Playbook | 6-stage funnel, PQL signals, free-to-paid benchmarks |
| Enterprise Growth | Land-and-expand, PQL scoring, champion enablement |
| Team Scaling | Solo operator to 20+ org — hire order, org charts, what breaks |
| Conflict Resolution | Agent disagreements, 4-step protocol, decision principles |
| Board Reporting | 9-section quarterly template, preparation checklist |
| Crisis Response | 5 crisis types with step-by-step protocols |
| Competitive Response | Severity assessment, 5-step agent chain |

---

## The Architecture

```
STRATEGIST (you)
    | sets direction
GROWTH PM (orchestrator)
    | briefs + prioritizes
13 SPECIALIST AGENTS (execute)
    | produce deliverables
ANALYTICS (measures)
    | results feed back to strategist
```

**Two-layer agent design:**
- **Universal Skills** — craft knowledge that works for any business (how to write ad copy, run experiments, do keyword research). Never changes between clients.
- **Client Context** — your business specifics (ICP, brand voice, channels, metrics). Stored in `clients/[your-company]/`. Swap this for each new client.

Train the agents once. Deploy across clients by updating only the context.

### Client Folder Structure

Each client gets a complete workspace with 13 agent subfolders. All work product compounds here — agent folders hold only methodology.

```
clients/[your-company]/
  context.md                    ← Business context (loaded with every agent)
  setup-checklist.md            ← Track your onboarding progress
  status.md                     ← Weekly dashboard across all agents
  strategist/goals.md           ← North Star, 90-day OKRs
  designer/brand-kit.md         ← Colors, fonts, logos, imagery
  content-writer/brand-voice.md ← Tone, voice, language rules
  content-writer/messaging-matrix.md ← ICP × pain × value prop × proof
  researcher/icp-profiles.md    ← Full ICP segments
  ... + 13 agent output folders
```

**4 brand foundation templates** are included — copy them into your client folder during onboarding. Without these, downstream agents guess instead of executing.

---

## How to Get Started

### 1. Clone the repo
```bash
git clone https://github.com/scottjs12/GrowthOS.git
cd GrowthOS
```

### 2. Get output immediately
Go to `generators/` and run any generator — no setup required.

### 3. Set up your client context
Create `clients/[your-company]/` and copy `clients/_template.md` into it as `context.md`. Fill in your business details. Or use the AI Setup Wizard in `SETUP.md` — answer 10 questions and it generates everything. See `clients/_example.md` for a fully filled-in example.

### 4. Fill in brand foundations
Copy 4 templates into your client folder and complete them — these are what the agents actually reference:

| Template | Copy To | What It Does |
|---|---|---|
| `04_growth-designer/brand-kit-template.md` | `designer/brand-kit.md` | Colors, fonts, logos, imagery, design system |
| `02_content-writer/brand-voice-template.md` | `content-writer/brand-voice.md` | Tone, voice, language rules, do/don't examples |
| `02_content-writer/messaging-matrix-template.md` | `content-writer/messaging-matrix.md` | ICP × pain points × value props × proof points |
| `01_growth-researcher/icp-template.md` | `researcher/icp-profiles.md` | Full ICP segment profiles |

### 5. Start with 2-3 agents
Don't activate everything at once:

| Week | Activate | Focus |
|---|---|---|
| **Week 1-2** | Strategist + Researcher + PM | Define ICPs, set North Star, build first briefs |
| **Week 3-4** | Content Writer + Designer + Ops | Create content, set up tracking, establish ops cadence |
| **Month 2** | Paid + Analytics + SEO | Launch campaigns, build dashboards, start keyword strategy |
| **Month 3+** | CRO + CRM + Engineer + Influencer | Optimize conversions, build lifecycle email, scale what works |

---

## Who It's For

- **Solo founders** who need a growth function without the headcount
- **Growth leads** who want a system, not a collection of prompts
- **Agencies** managing multiple clients who need a repeatable operating system
- **Early-stage startups** deploying the agents they need, skipping the ones they don't

---

## Contributing

This is an open-source growth operating system. Contributions welcome.

- **Found a gap?** Open an issue describing what's missing and which agent it affects.
- **Built something on top of this?** Share it — open a PR.
- **Want to add a new agent?** Follow the AGENT.md template structure (see any existing agent for the format).

Keep it practitioner-level. No fluff. No theory without frameworks.

---

## Built With

- [Claude](https://claude.ai) by Anthropic
- [Claude Code](https://claude.ai/code)

## Acknowledgments

- Several frameworks (RevOps, AEO, cold email, programmatic SEO, marketing psychology) were adapted from [marketingskills](https://github.com/coreyhaines31/marketingskills) by [Corey Haines](https://corey.co), licensed under MIT.

---

*If this helped you build something, tag [@scottschmidt12](https://linkedin.com/in/scottschmidt12) on LinkedIn.*
