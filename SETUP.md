# SETUP.md — Client Onboarding Guide

> **The fastest way to set up: use the AI Setup Wizard.**
> It asks you 10 questions and generates all 13 agent context blocks automatically.

---

## Option A — AI Setup Wizard (Recommended)

Open `setup-wizard.jsx` in your browser or Claude artifact viewer.

The wizard will:
1. Ask you 10 conversational questions about your business (~5 minutes)
2. Generate complete CLIENT CONTEXT blocks for all 13 agent files
3. Show you the activation order — which agents to turn on first

Once generated, use the Claude Code prompt below to apply the output to your repo automatically.

**Claude Code prompt to apply wizard output:**
```
I've completed the growth repo setup wizard and have 13 CLIENT CONTEXT blocks.
For each block, find the corresponding AGENT.md file and replace the existing
CLIENT CONTEXT section with the generated version. Here are the blocks:

[paste wizard output here]
```

---

## Option B — Manual Setup

If you prefer to fill in the context yourself, follow Steps 1–13 below.

Have this ready before starting:

```
CLIENT INTAKE CHECKLIST
────────────────────────
□ Business name and one-sentence description
□ Stage: Pre-launch / Early / Growth / Scale
□ Primary ICP — who is the core customer?
□ Top 2–3 acquisition channels (or hypotheses)
□ Brand voice — adjectives, reference brands, good/bad examples
□ Primary conversion goal (what action = a converted user?)
□ Current tool stack
□ Team contacts
□ Budget range for paid channels
□ Any hard constraints
```

---

### Step 1 — STRATEGIST.md (10 min)

Complete the **Client Onboarding — Strategist Intake** section:

```markdown
CLIENT ONBOARDING — STRATEGIST INTAKE
───────────────────────────────────────
Client name:
Business:
Stage:
North Star metric (proposed):
ICP hypothesis:
Channel hypothesis:
Budget range:
Timeline / urgency:
Key constraints:
What success looks like in 90 days:
What would make this engagement fail:
Agents needed immediately:
Agents to defer:
First brief for PM:
```

---

### Step 2 — Growth PM

```markdown
### Active Client: [Name]
- Business:
- Stage:
- Primary ICP:
- Top channels:
- Current sprint focus:
- Key integrations:
- Escalation contact:
- Not in scope for PM:
```

---

### Step 3 — Growth Researcher

```markdown
### Active Client: [Name]
- Category:
- Primary communities to monitor:
- Top competitors:
- Current ICP focus:
- Key questions:
- Review monitoring cadence:
```

---

### Step 4 — Content Writer

```markdown
### Active Client: [Name]

**Brand voice summary:**

**Voice references:**

**Signature themes:**
- "..."
- "..."

**Good examples:**
- "..." ✅

**Never write:**
- "..." ❌

**Primary ICP:**

**Top converting angles:**
- Pain-led:
- Identity-led:
- Proof-led:
```

---

### Step 5 — SEO Agent

```markdown
### Active Client: [Name]
- Domain(s):
- App Store: [iOS / Android / Both / N/A]
- Category keywords:
- Competitors to monitor:
- Current priority:
- Technical stack:
- Rank tracking status:
```

---

### Step 6 — Growth Designer

```markdown
### Active Client: [Name]
- Brand colors:
- Typography:
- Visual tone:
- Reference brands:
- Current template priority:
- Active designers / collaborators:
- Figma workspace:
- Special format requirements:
```

---

### Step 7 — CRO Agent

```markdown
### Active Client: [Name]
- Primary pages to optimize:
- Current conversion goal:
- Analytics access:
- Heatmap tool:
- Known friction points:
- ICP psychology notes:
- Top hypothesis angles:
```

---

### Step 8 — Growth Paid

```markdown
### Active Client: [Name]
- Primary channel:
- Secondary channel:
- Conversion goal:
- Target CPA:
- Budget:
- Primary ICP for targeting:
- Current campaign status:
- Lookalike source:
- Pixel / tracking status:
```

---

### Step 9 — Growth Analytics

```markdown
### Active Client: [Name]
- Analytics stack:
- North Star metric:
- Primary KPIs:
- Attribution model:
- Experiment infrastructure:
- Dashboard delivery method:
```

---

### Step 10 — Growth CRM

```markdown
### Active Client: [Name]
- CRM platform:
- Community channels:
- North Star action:
- Current lifecycle priority:
- Key segments to build first:
- ICP community behavior:
- Referral angle:
```

---

### Step 11 — Growth Ops

```markdown
### Active Client: [Name]
- Active landing pages:
- Pixel status:
- Analytics tool:
- UTM format:
- Tool stack:
- Current ops priority:
```

---

### Step 12 — Growth Engineer

```markdown
### Active Client: [Name]
- LP infrastructure:
- GitHub org / repo:
- Preview URL process:
- Analytics stack:
- A/B test approach:
- Key integrations:
- Current build priority:
```

---

### Step 13 — Influencer / Partnerships

```markdown
### Active Client: [Name]
- Category:
- Creator ICP:
- Priority platforms:
- Creator sweet spot:
- Top communities to source from:
- Deal structure preference:
- Affiliate structure:
- Brand voice for creator briefs:
- Content angles that will resonate:
- Red flags for this category:
```

---

## Activation Order

Don't activate everything on day one. Recommended sequence:

```
WEEK 1–2
□ STRATEGIST.md — complete the intake
□ Growth Researcher — build ICP profile and first insight bank entry
□ Growth PM — set up first sprint

WEEK 3–4
□ Content Writer — first messaging matrix and copy variants
□ Growth Designer — first ad templates
□ Growth Ops — pixel setup, UTM system, tool stack

MONTH 2
□ Growth Paid — first campaign
□ Growth Analytics — baseline dashboard and KPI definitions
□ SEO Agent — keyword universe and ASO baseline

MONTH 3+
□ CRO Agent — once LP traffic is sufficient (500+ uniques/page/month)
□ Growth CRM — once acquisition is generating users to retain
□ Growth Engineer — once LP build volume justifies it
□ Influencer / Partnerships — once brand and ICP are validated
```

---

## Maintaining the System

**Monthly:** Researcher updates insight-bank.md · Agents update CLIENT CONTEXT if anything changed · Analytics publishes monthly report

**Quarterly:** Review every AGENT.md for scope accuracy · Update training logs · Revisit STRATEGIST.md North Star · Add or retire agents

---

*Built by [Scott Schmidt](https://linkedin.com/in/scottschmidt).*
