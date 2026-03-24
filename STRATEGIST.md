# STRATEGIST.md — Growth Strategist

> **Version:** 1.0 | **Review cycle:** Quarterly
> **This is not an AGENT.md.** This is the operating model for the human at the top of the growth system. It defines your role, your decision rights, your rhythms, and your inputs and outputs. It exists so the system runs correctly around you — and so a senior hire or new client lead can step into this role with full clarity.

---

## ROLE DEFINITION

The Growth Strategist is the only role in the system that cannot be automated. You set direction, make bets, and hold the overall growth model in your head. Every agent executes. Every agent escalates to PM. PM escalates to you only on decisions that require strategic judgment — channel bets, ICP pivots, budget philosophy, experiment prioritization logic, and system health.

**You own:**
- North Star definition and quarterly reset
- Channel portfolio strategy — what to invest in, what to cut, what to test
- ICP strategy — which segments to prioritize now vs. later
- Growth model — the quantitative story of how the business grows (inputs → outputs)
- Experiment philosophy — what kinds of bets to make, acceptable risk level
- Budget philosophy — how to allocate across acquisition vs. retention vs. infrastructure
- Agent system health — quarterly AGENT.md reviews, training log direction, system evolution
- Cross-client pattern recognition — what's working across the portfolio that should be shared
  - **Pattern library:** `docs/pattern-library.md` — log and reuse what works across clients
- Productization decisions — when a system built for one client is ready to package more broadly

**You do NOT own:**
- Sprint management — that's PM
- Channel execution — that's the respective agents
- Day-to-day decisions — that's PM + agents
- Brief writing — that's PM
- Any individual deliverable — that's agents

---

## THE THREE-TIER SYSTEM

```
TIER 1 — STRATEGIC        You
                          North Star, channel bets, ICP strategy,
                          growth model, budget philosophy

TIER 2 — OPERATIONAL      Growth PM
                          Briefs, sprints, experiment scheduling,
                          escalation routing, decision log

TIER 3 — EXECUTION        11 specialist agents
                          Channel execution, creative production,
                          analytics, CRM, engineering, research
```

**The health of this system depends on respecting tier boundaries.** When Tier 1 operates at Tier 3 level (reviewing individual ad copy, approving UTM structures, debugging pixels), the whole system slows down. When Tier 3 makes Tier 1 decisions (choosing which channels to invest in, calling ICP pivots), quality degrades silently.

**Your job is to stay in Tier 1.** PM protects you from Tier 2. Agents protect you from Tier 3. When something from Tier 3 reaches you directly — it's a signal that either PM needs more authority, an agent's AGENT.md is too narrow, or the system has a structural gap.

---

## DECISION RIGHTS

These are the only decisions that should reach you. Everything else should be resolved at PM or agent level.

### Decisions Only You Make
| Decision | Frequency | Input needed |
|---|---|---|
| North Star metric definition or change | Quarterly | Analytics report + PM recommendation |
| Channel portfolio reallocation | Quarterly or triggered | Analytics 90-day channel performance |
| ICP segment prioritization | Quarterly or triggered | Researcher ICP report + Analytics cohort data |
| Budget philosophy (acquisition vs. retention split) | Quarterly | Analytics CAC/LTV by channel + CRM retention data |
| New channel approval | When proposed | PM brief + Researcher validation |
| Experiment risk tolerance | Quarterly | CRO backlog + PM sprint review |
| Productization decisions | When ready | PM brief + client demand signal |
| Senior hire decisions | When needed | PM capacity report + growth model projection |
| Legal / equity / major vendor decisions | When triggered | Ops escalation + legal review |
| Agent system architecture changes | Quarterly | PM AGENT.md review report |

### Decisions You Approve But Don't Make
| Decision | Who proposes | Your action |
|---|---|---|
| Campaign brief (budget-touching) | PM | Approve or redline within 24h |
| Creative direction (major positioning shift) | Content Writer via PM | Approve or redirect |
| New tool category or commitment > $500/mo | Ops via PM | Approve or reject. Tool additions < $500/mo → Ops decides (escalates to PM if > $50/mo) |
| Vendor deal > $500 | Ops via PM | Approve or negotiate |
| Flat fee creator deal > $500 | Influencer via PM | Approve or negotiate |

### Decisions That Should Never Reach You
- Individual ad copy review
- UTM structure or naming convention
- Creative variant selection
- Campaign naming
- Brief formatting
- Tool configuration
- Trafficking QA
- Social scheduling
- Email subject line selection

If these are reaching you, the system is broken at PM or agent level. Fix the source, not the symptom.

---

## YOUR RHYTHMS

### Weekly — 30 Minutes Max
**Input:** PM's weekly sync summary (async, filed in `00_growth-pm/reviews/weekly/`)
**What you look for:**
- Is anything off-track vs. the quarterly goal?
- Is PM blocked on anything that requires a strategic call?
- Are any metrics outside the alert threshold in the Analytics dashboard?

**Your output:** Any strategic decisions triggered by the above, logged in `growth-roadmap.md`. If nothing is triggered — no output required. The system is running.

### Bi-Weekly — 30 Minutes
**Input:** Experiment review summary from PM + CRO + Analytics
**What you look for:**
- Are we learning fast enough? (Experiments closing with clear verdicts)
- Are learnings being actioned? (PM tracks "insights actioned" metric)
- Is the experiment backlog healthy? (5+ ICE-scored hypotheses queued)

**Your output:** Experiment philosophy calibration if needed. Reprioritization of backlog if strategic direction has shifted.

### Monthly — 60 Minutes
**Input:** Researcher insight dump + Analytics monthly report + CRM cohort data
**What you look for:**
- What's the Researcher surfacing that changes how we think about the ICP?
- What's the channel performance story over 30 days?
- What's the retention and activation story — are we keeping what we acquire?
- Is the growth model tracking? (Inputs → outputs — see Growth Model section)

**Your output:** Strategic direction note filed in `00_growth-pm/reviews/monthly/` — what shifts, what holds, what to double down on.

### Quarterly — Half Day
**Input:** Full system review — all agent AGENT.md files, training logs, decision log, quarterly Analytics report
**What you look for:**
- Is the North Star still the right metric?
- Is the channel portfolio right for where we are?
- Are agents operating within their defined scope?
- What universal skills need updating across the agent system?
- Is the client context layer current for all active clients?
- What did we learn this quarter that should change the system?

**Your output:**
- Updated `growth-roadmap.md` with next quarter direction
- AGENT.md updates filed (or delegated to PM)
- Training log entries for any agents whose skills were updated
- Productization review — what's ready to package?

---

## THE GROWTH MODEL

The growth model is the quantitative story of how the business grows. You own it. It answers: if we do X, we get Y.

**Build it as a simple input → output model:**

```
GROWTH MODEL — [Client] — [Quarter]
─────────────────────────────────────
North Star metric:    [e.g. Monthly Active Collectors]
Current baseline:     [Current value]
Quarterly target:     [Target value]
Required growth:      [% or absolute]

ACQUISITION INPUTS
Channel:          [Meta Paid]
Monthly budget:   [$X]
Target CPA:       [$Y]
Expected installs:[Z/month]

Channel:          [SEO / Organic]
Content velocity: [X pieces/month]
Expected traffic: [Y sessions/month]
Conversion rate:  [Z%]
Expected installs:[N/month]

Channel:          [Influencer]
Creators active:  [X]
Expected reach:   [Y]
Expected installs:[Z/month]

RETENTION INPUTS
Activation rate:  [% who complete North Star action]
D7 retention:     [%]
D30 retention:    [%]

OUTPUT
Total installs/month:    [Sum of channels]
Activated users/month:   [Installs × activation rate]
Retained MAU:            [Cumulative activated × retention curve]
```

Update monthly. When actuals diverge from model by > 20%, trigger a strategic review — either the model was wrong (update assumptions) or execution is broken (fix at agent level).

- **Template:** `docs/growth-model-template.md` — fill in during onboarding, update monthly

---

## CROSS-CLIENT OPERATING MODEL

> *If you run multiple clients simultaneously, this section applies. If single-client, skip to the next section.*

When running multiple clients simultaneously, the strategist role requires one additional layer: **pattern recognition across the portfolio**.

**Cross-client rhythm — Monthly:**
- What worked on one client that should be tested on another?
- What failed on one client that saves another from wasting budget?
- What systems or agents are ready to productize as a repeatable offering?
- What is the shared insight bank across all clients? (Researcher outputs that transcend individual clients)

**Client prioritization framework:**
When time is constrained, prioritize client attention by:
1. Which client has the highest-leverage decision pending?
2. Which client is at the most critical growth inflection point?
3. Which client has a system gap that could compound into a problem?

**The productization decision:**
A system is ready to productize when:
- It has been tested on at least 2 clients
- It produces a measurable, repeatable outcome
- It can be documented well enough to hand off
- The client context layer is the only customization required

---

## ONBOARDING A NEW CLIENT — STRATEGIST CHECKLIST

When taking on a new client, the Strategist completes this before handing to PM:

```
CLIENT ONBOARDING — STRATEGIST INTAKE
───────────────────────────────────────
Client name:
Business:
Stage: [Pre-launch / Early / Growth / Scale]
North Star metric (proposed):
ICP hypothesis (to be validated by Researcher):
Channel hypothesis (where the customer likely is):
Budget range:
Timeline / urgency:
Key constraints: [Technical, legal, brand, team]
What success looks like in 90 days:
What would make this engagement fail:
Agents needed immediately: [Which agents to activate first]
Agents to defer: [Which agents aren't needed yet]
First brief for PM: [The single most important thing to start]
```

Once this is filed, PM takes over sprint planning. You step back to Tier 1.

---

## SYSTEM HEALTH SIGNALS

These are the signals that tell you the system is healthy or broken — without reading every brief and every deliverable.

### Green — System is Running Well
- PM sync summaries are filed consistently without escalations
- Experiment backlog has 5+ hypotheses queued at all times
- Analytics dashboard is published every Monday without prompting
- Insights from Researcher are being actioned (PM tracks this metric)
- AGENT.md files were updated in the last quarter
- Creator scorecard shows at least one active campaign per quarter

### Yellow — Worth Checking
- Two or more agents blocked in the same sprint
- Experiment backlog drops below 3 hypotheses
- Analytics dashboard missed a Monday
- A channel CPA has drifted > 20% for 3+ weeks
- No new research brief from Researcher in > 6 weeks
- PM is attending to execution decisions (operating below their tier)

### Red — System is Broken
- You are reviewing individual deliverables regularly
- Agents are going directly to you instead of PM
- Experiments are being called early without Analytics sign-off
- Briefs are being written retroactively
- Insights are filed but never actioned
- An agent's AGENT.md hasn't been updated in > 6 months
- A channel has been running without performance review for > 4 weeks

---

## PRODUCTIZATION TRACKER

Track which systems are ready to package as repeatable offerings:

| System | Tested on | Status | Ready to productize? |
|---|---|---|---|
| Growth repo + AGENT.md architecture | [Your clients] | Active | Ready to use |
| Paid creative pipeline (modular templates) | [Your clients] | Building | Once Designer templates are built |
| LP pipeline | [Your clients] | Building | Once Engineer + Ops are configured |
| Experiment operating system | [Your clients] | Building | After first 5 tests close |
| Influencer / partnerships playbook | [Your clients] | New | 180 days |
| AI growth marketing system (4 modules) | [Your clients] | Planned | Building |

---

## TRAINING LOG

> This log tracks evolution of the strategic layer — changes to the operating model, growth philosophy, and system architecture.

| Date | Update | Reason |
|---|---|---|
| 2026-03-18 | v1.0 created | Initial setup — formalizing the strategist role above the 11-agent system |
| 2026-03-20 | Added growth model template | Created `docs/growth-model-template.md` — full-funnel quantitative model (acquisition, activation, retention, revenue, referral) with sensitivity analysis, channel economics, and quarterly review |
| 2026-03-20 | Added pattern library + post-mortem template | Created `docs/pattern-library.md` for cross-client pattern recognition and `docs/post-mortem-template.md` for significant failure investigation |
| 2026-03-22 | Clarified tool escalation thresholds | Aligned with Ops: tool additions < $500/mo are Ops decisions (escalate to PM if > $50/mo). Strategist only involved for new tool categories or commitments > $500/mo |
