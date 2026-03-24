# Experiment Cycle Workflow

> How hypotheses become tests, tests become results, and results become learnings. The compound growth engine.

---

## Trigger

- CRO files a new hypothesis with ICE score ≥ 5
- PM schedules hypothesis into sprint
- Analytics flags an anomaly requiring structured investigation

---

## Agent Chain

```
┌──────────────────────────────────────────────────────────────────────┐
│  STEP 1: CRO → STEP 2: PM → STEP 3: Execution → STEP 4: Ops         │
│  → STEP 5: Live → STEP 6: Analytics → STEP 7: CRO → STEP 8: PM      │
└──────────────────────────────────────────────────────────────────────┘
```

### Step 1 — CRO: Hypothesis Filing

- **Input:** Observation, data point, or pattern suggesting an improvement opportunity
- **Output:** ICE-scored hypothesis filed in `05_cro/cro-hypothesis-log.md`
- **Format:** "If we [change X], then [metric Y] will [improve Z] because [mechanism]"
- **Rules:**
  - One variable per test — never combine changes
  - Always define a primary success metric and at least one guardrail metric before filing
- **Reference:** `05_cro/AGENT.md` — ICE scoring guide

### Step 2 — PM: Scheduling + Briefing

- **Input:** ICE-ranked hypothesis backlog
- **Output:** Sprint-slotted experiment with execution briefs issued to relevant agents
- **Decision gate:** Maximum 2 concurrent experiments per channel at any time
- **Rules:**
  - Never sacrifice test duration for speed — protect the experiment runway
  - Hold 20% sprint buffer; never fill it speculatively
- **Reference:** `00_growth-pm/AGENT.md`, `00_growth-pm/experiment-tracker.md`

### Step 3 — Execution Agents: Build the Test

Each agent builds only their component of the variant:

- **Content Writer** — copy variant (if copy test)
- **Designer** — design variant (if visual test)
- **Engineer** — instruments variant delivery and event tracking

**Rules:**
- Engineer confirms variant assignment logic is clean before launch
- Execution agents do not modify each other's component without CRO approval
- No variant goes to Ops until all components are complete

### Step 4 — Ops: QA + Sign-off

- **Input:** Test setup, tracking plan, variant URLs
- **Output:** Signed trafficking checklist
- **Decision gate:** HARD GATE — CRO confirms variant URLs render correctly before go-live. Ops does not sign off on an untested render.
- **Reference:** `09_growth-ops/launch-checklist.md`

### Step 5 — Test Goes Live

- Analytics monitors data quality — does not call results early under any circumstances
- **Minimum runtime:** 2 weeks, regardless of apparent sample size
- **Statistical significance target:** 95%
- Flag to PM if sample velocity is too low to hit significance within a reasonable window

### Step 6 — Analytics: Close Experiment

- **Input:** Raw data after minimum runtime and sample size thresholds are met
- **Output:** Full result summary — metric lift, statistical significance, confidence interval, secondary metrics, confounds, data quality notes
- **Handoff:** Result → CRO + PM within 24 hours of close
- **Filed in:** `07_growth-analytics/experiment-results-log.md`
- **Reference:** `07_growth-analytics/AGENT.md`

### Step 7 — CRO: File Learning

- **Win:** Document winning pattern. Generate a scale hypothesis. Flag for PM to route to relevant agents.
- **Loss:** Archive direction and document the mechanism that failed. Prevents re-running the same direction.
- **Inconclusive:** Document as-is. Recommend retest with larger sample, longer runtime, or a sharper variable isolation.

### Step 8 — PM: Route Post-Test Actions

- Routes learnings to all agents affected by the result
- Logs follow-up actions in growth roadmap
- See `workflows/post-test-routing.md` for the full routing matrix

---

## Exit Criteria

- [ ] Result filed in `07_growth-analytics/experiment-results-log.md`
- [ ] Learning documented as win, loss, or inconclusive in `05_cro/cro-hypothesis-log.md`
- [ ] Follow-up hypothesis filed (win) or direction archived (loss)
- [ ] All relevant agents notified of result
- [ ] Dashboard updated with final experiment status

---

## Rules

- Never stop a test early — early stopping inflates false positive rates
- Inconclusive results are valid outcomes — always file them
- One variable per test — if two things changed, you learned nothing
- Always set guardrail metrics before launch — a conversion win that tanks retention is not a win
- Never reuse a losing direction without a structural change to the mechanism

---

## Reference

- Full experiment loop detail: `docs/experiment-loop.md`
- ICE scoring and hypothesis format: `05_cro/AGENT.md`
- Hypothesis log: `05_cro/cro-hypothesis-log.md`
- Results log: `07_growth-analytics/experiment-results-log.md`
