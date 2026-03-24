# Campaign Launch Workflow

> The end-to-end chain from brief to live campaign. Every paid campaign follows this sequence. No shortcuts.

---

## Trigger

- PM issues a new campaign brief
- New channel approved by Strategist
- New ICP segment validated by Researcher

---

## Agent Chain

```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: PM → STEP 2: Researcher → STEP 3: Content Writer   │
│  → STEP 4: Designer → STEP 5: Paid → STEP 6: Ops → LAUNCH  │
└─────────────────────────────────────────────────────────────┘
```

### Step 1 — PM: Campaign Brief

- **Input:** Strategic priority, budget, timeline, target ICP
- **Output:** Campaign brief with objective, audience, channels, success metrics, timeline
- **Decision gate:** Strategist approves budget >$1K/month or any new channel
- **Handoff:** Brief → Researcher + Paid
- **Reference:** `00_growth-pm/AGENT.md` — Campaign Brief format

### Step 2 — Researcher: Angle Validation

- **Input:** Campaign brief + ICP segment
- **Output:** 2–3 validated angles with supporting evidence, guardrails (what to avoid), ICP language patterns
- **Decision gate:** None — advisory, not blocking
- **Handoff:** Validated angles → Content Writer
- **Reference:** `01_growth-researcher/AGENT.md` — Angle Validation framework

### Step 3 — Content Writer: Copy Production

- **Input:** Validated angles + brand voice + channel specs
- **Output:** Minimum 3 copy variants per angle (headline / body / CTA with character counts)
- **Rules:**
  - Never write without ICP context loaded
  - Never submit fewer than 3 variants per angle
- **Handoff:** Structured copy variants (headline / subhead / body / CTA) → Designer
- **Handoff:** All variants → `02_content-writer/copy-bank.md`

### Step 4 — Designer: Creative Production

- **Input:** Structured copy + brand guidelines + channel specs
- **Output:** Creative brief with deliverables list; minimum 2 static + 1 motion asset per variant
- **Rules:**
  - Never write own copy — always work from Writer's structured handoff
  - Always spec mobile-first
  - Include all states (default, hover, CTA active)
- **Handoff:** Final assets → `00_shared/assets/[campaign]/`
- **Reference:** `00_shared/briefs/designer-creative-brief-template.md`

### Step 5 — Paid: Media Plan

- **Input:** Campaign brief + creative assets + audience research
- **Output:** Media plan with campaign structure, targeting, UTMs, budget allocation, naming conventions, kill thresholds
- **Rules:**
  - Always start with 70/30 prospecting/retargeting split
  - Always set kill thresholds before launch — no thresholds, no launch
- **Handoff:** Signed media plan → Ops
- **Reference:** `00_shared/briefs/media-buyer-brief-template.md`, `06_growth-paid/media-plan.md`

### Step 6 — Ops: Trafficking QA

- **Input:** Assets, UTMs, media plan, tracking requirements
- **Output:** Signed trafficking checklist confirming pixels, UTMs, naming conventions, assets, and tracking
- **Decision gate:** HARD GATE — nothing launches without Ops sign-off. No exceptions.
- **Handoff:** Approved → Paid (launch) + Analytics (tracking confirmed)
- **Reference:** `09_growth-ops/launch-checklist.md`

### Step 7 — Launch

- Paid activates campaigns in platform
- Analytics confirms data flowing within 4 hours of launch
- PM notified: campaign live

---

## Post-Launch

Transitions to the Experiment Cycle workflow.

- **48h:** Analytics first read — observation only, no decisions
- **Day 7:** Mid-flight check — kill underperformers below kill threshold
- **Day 14+:** Close-out — full results → post-test routing

See `workflows/experiment-cycle.md` for the full measure-and-learn sequence.

---

## Exit Criteria

- [ ] Campaign live in platform
- [ ] Tracking confirmed by Analytics within 4h of launch
- [ ] All UTMs firing correctly
- [ ] Dashboard updated with campaign status
- [ ] Copy bank updated with all variants used

---

## Common Failures

| Failure | Prevention |
|---|---|
| Copy written without ICP context | PM ensures client context file loaded before brief is issued |
| Designer writes own copy | Content Writer always delivers structured handoff format — headline / subhead / body / CTA |
| Launch without Ops sign-off | Ops checklist is a hard gate — no campaign goes live without it |
| No kill thresholds defined | Paid defines thresholds in media plan; Ops blocks launch if missing |
| Tracking not confirmed post-launch | Analytics has 4h SLA to confirm data flowing; flag immediately if not |
