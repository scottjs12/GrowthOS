# Quick Start Guide

> Clone to first task in 30 minutes. No fluff.

---

## Minute 0-3: Understand the System

GrowthOS is 12 AI specialist agents that work together as a growth team. Each agent has:
- **Universal skills** — craft knowledge that works for any client (how to write ad copy, run A/B tests, do keyword research)
- **Client context** — the specific details about YOUR business (ICP, brand voice, channels, metrics)

You customize the client context. The skills stay the same.

```
STRATEGIST (you)
    | sets direction
GROWTH PM (orchestrator)
    | briefs + prioritizes
12 SPECIALIST AGENTS (execute)
    | produce deliverables
ANALYTICS (measures)
    | results feed back to strategist
```

**Key files to know:**
| File | What It Does |
|---|---|
| `STRATEGIST.md` | Your operating model — decisions, rhythms, growth model |
| `00_growth-pm/AGENT.md` | The orchestrator — briefs, sprints, coordination |
| `[01-11]_*/AGENT.md` | Specialist agents — one per growth discipline |
| `CLAUDE.md` | Auto-routing — tells Claude which agents to load per task |
| `SETUP.md` | Full onboarding guide (detailed version of this quick start) |

## Minute 3-15: Set Up Your Client Context

**Option A: Use the Setup Wizard (recommended)**
1. Open Claude Code in this repo directory
2. Paste the contents of `setup-wizard.jsx` into a new conversation
3. Answer 10 questions about your business
4. The wizard generates your client context — save it as `clients/[your-company].md`

**Option B: Manual Setup (if you prefer control)**
1. Copy `clients/_template.md` to `clients/[your-company].md`
2. Open `docs/example-client-contexts.md` — see what "done" looks like for B2C and B2B
3. Fill in every section of your client context file (all 13 blocks are in one file)
4. See `SETUP.md` for detailed guidance on each section

**Minimum viable context (just get these 5 fields right):**
1. **North Star metric** — the one number that means the business is growing
2. **ICP** — who your best customer is, specifically
3. **Brand voice** — 3 words that describe how you sound (and 3 that describe how you don't)
4. **Active channels** — where you're spending money and attention right now
5. **90-day goal** — one number you're trying to hit

## Minute 15-25: Run Your First Task

Open Claude Code in this repo. The `CLAUDE.md` file auto-loads and handles routing — just describe what you need.

**Try one of these starter prompts:**

**If you need ICP research:**
```
Read 01_growth-researcher/AGENT.md and 01_growth-researcher/icp-template.md.

Using the ICP template, build a complete profile for [describe your primary customer segment]. Base it on [any data you have — interviews, analytics, surveys, or your best knowledge].
```

**If you need ad copy:**
```
Read 02_content-writer/AGENT.md.

Write 3 Meta ad variants for [your product]. Target: [your ICP]. Goal: [signups/purchases/downloads]. Use the pain angle and the social proof angle. Include headline, primary text, and CTA for each.
```

**If you need a campaign plan:**
```
Read 00_growth-pm/AGENT.md and 06_growth-paid/AGENT.md.

Create a campaign brief for [describe what you want to launch]. Include targeting, budget recommendation, creative approach, and success metrics. Use the brief template from the PM agent.
```

**If you need a landing page audit:**
```
Read 05_cro/AGENT.md.

Audit [URL or describe the page]. Use the LP Audit Protocol. Identify top 3 conversion issues and generate hypotheses for each using the hypothesis format.
```

**If you're launching from scratch:**
```
Read 09_growth-ops/AGENT.md and 09_growth-ops/launch-checklist.md.

Walk me through Phase 1 (Foundation) of the launch checklist for [your business]. Tell me what to set up first and in what order.
```

## Minute 25-30: Plan Your First Week

**Activation schedule — don't try to use all 12 agents at once:**

| Week | Activate | Focus |
|---|---|---|
| **Week 1-2** | Strategist + Researcher + PM | Define ICPs, set North Star, build first briefs |
| **Week 3-4** | Content Writer + Designer + Ops | Create first content, set up tracking, establish ops cadence |
| **Month 2** | Paid + Analytics + SEO | Launch paid campaigns, build dashboards, start keyword strategy |
| **Month 3+** | CRO + CRM + Engineer + Influencer | Optimize conversions, build lifecycle email, scale what works |

**Your first week checklist:**
- [ ] CLIENT CONTEXT filled for Strategist + Researcher + PM (minimum)
- [ ] ICP profile completed using `01_growth-researcher/icp-template.md`
- [ ] Growth model started using `docs/growth-model-template.md`
- [ ] First brief created using PM's brief template
- [ ] Weekly runbook reviewed (`09_growth-ops/weekly-runbook.md`)

---

## What's Next

| When You Want To... | Go Here |
|---|---|
| Understand the full system | `docs/how-it-works.md` |
| See the experiment process | `docs/experiment-loop.md` |
| Full orchestrator playbook (Day 1 → Month 3) | `docs/client-onboarding.md` |
| Fill in client context (13 blocks) | `SETUP.md` |
| See filled B2C and B2B examples | `docs/example-client-contexts.md` |
| Find the right prompt for a task | `docs/prompt-cookbook.md` |
| Adapt for B2B vs B2C | `docs/b2b-b2c-guide.md` |
| Learn from cross-client patterns | `docs/pattern-library.md` |
| Run a post-mortem | `docs/post-mortem-template.md` |

---

## Common Questions

**"Do I need Claude Code specifically?"**
GrowthOS is optimized for Claude Code (the CLAUDE.md auto-routing makes it seamless), but the AGENT.md files work with any AI tool. Copy the AGENT.md into any LLM conversation as a system prompt.

**"What if I only need 3-4 agents?"**
Use only what you need. The agents are independent. A solo founder might use just Researcher + Content Writer + Paid. A larger team might use all 12.

**"How is this different from a prompt library?"**
Prompt libraries are one-shot. GrowthOS agents have memory (client context), protocols (how to collaborate with other agents), and frameworks (reusable skill sets). The output compounds over time as you fill in more context and log learnings.

**"Can I modify the universal skills?"**
Yes — that's what the TRAINING LOG is for. When you learn something that makes an agent better, add it. The system is designed to evolve.
