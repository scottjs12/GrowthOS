# Paid Ops Skills — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add three operational automation skills to GrowthOS's Paid agent — search term mining, budget optimization, and weekly paid review — inspired by Austin's Google Ads MCP plugin pattern. These skills turn the Paid agent from a strategy advisor into an operational copilot that can execute recurring account management workflows.

**Architecture:** Each skill is a structured prompt file in `06_growth-paid/skills/` that assumes a Google Ads MCP connection is available. Skills follow the existing generator pattern (prerequisites → prompt chain → output format → review step) but are operational rather than creative — they query live data, apply evaluation criteria, and produce actionable outputs (CSVs, recommendations, mutation instructions). The Paid AGENT.md gets updated to reference these skills, and CLAUDE.md routing table gets updated to route to them.

**Tech Stack:** Markdown files, GrowthOS generator pattern, Google Ads Query Language (GAQL) examples

---

### Task 1: Create the skills directory structure

**Files:**
- Create: `06_growth-paid/skills/` directory
- Create: `06_growth-paid/skills/README.md`

**Step 1: Create the directory**

```bash
mkdir -p 06_growth-paid/skills
```

**Step 2: Write the skills README**

Create `06_growth-paid/skills/README.md`:

```markdown
# Paid Ops Skills

> Operational automation skills for the Paid agent. Each skill is a structured workflow that queries ad platform data (via MCP), applies evaluation criteria, and produces actionable outputs.

## Prerequisites

These skills assume a Google Ads MCP server is connected to your Claude Code session. Without it, the skills still work as manual checklists — you paste data instead of querying live.

## Available Skills

| Skill | What It Does | Cadence |
|---|---|---|
| [mine-search-terms.md](mine-search-terms.md) | Finds wasteful/missing search terms, produces negatives + additions CSV | Weekly |
| [budget-optimizer.md](budget-optimizer.md) | Analyzes spend vs. performance, recommends reallocations | Weekly |
| [weekly-paid-review.md](weekly-paid-review.md) | Full account health check with structured diagnosis | Weekly (Monday) |

## How They Work

1. **With MCP connected:** Claude queries the ad platform directly using GAQL, applies the skill's evaluation criteria, and produces structured output (CSV, recommendations, or mutation instructions)
2. **Without MCP:** You paste exported data from the platform. The skill still applies the same evaluation logic — you just provide the data manually.

## Output

All skill outputs file to `clients/[client-name]/paid/ops/` with date-prefixed filenames per the filing convention.
```

**Step 3: Commit**

```bash
git add 06_growth-paid/skills/README.md
git commit -m "feat: add paid ops skills directory and README"
```

---

### Task 2: Create the Search Term Mining skill

**Files:**
- Create: `06_growth-paid/skills/mine-search-terms.md`

**Step 1: Write the skill file**

Create `06_growth-paid/skills/mine-search-terms.md`:

```markdown
# Mine Search Terms

> Finds wasteful spend and missing opportunities in Google Ads search term reports. Produces a CSV of recommended negatives and keyword additions with reasoning for every flag.

## Cadence
Weekly — run every Monday as part of the weekly paid review, or ad-hoc when CPA drifts > 20%.

## What You Get
- CSV with columns: Campaign, Ad Group, Keyword, Search Term, Match Type, Impressions, Clicks, Cost, Conversions, CPA, Action (Negate/Add/Watch), Reasoning
- Summary of total waste identified (spend on flagged negatives)
- List of high-potential search terms to add as keywords

## What You Need First
- [ ] Google Ads MCP connected (or exported search term report CSV)
- [ ] Client context loaded (`clients/[client-name]/context.md`)
- [ ] Active campaign names from `clients/[client-name]/paid/media-plan.md`
- [ ] Target CPA or ROAS benchmarks from media plan

## Prompt Chain

### Step 1: Pull Search Term Data

**With MCP:**
```
Query Google Ads for search term performance over the last 14 days across all active Search campaigns.

Use this GAQL query structure:
SELECT
  campaign.name,
  ad_group.name,
  ad_group_criterion.keyword.text,
  ad_group_criterion.keyword.match_type,
  search_term_view.search_term,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions,
  metrics.cost_per_conversion
FROM search_term_view
WHERE segments.date DURING LAST_14_DAYS
  AND metrics.impressions > 0
ORDER BY metrics.cost_micros DESC
```

**Without MCP:**
```
I'm pasting my search term report from Google Ads (last 14 days). Columns are:
[Paste CSV or table]
```

### Step 2: Apply Search Term Methodology

Evaluate every search term using these criteria, in this order:

**Flag as NEGATE if any of these are true:**
1. **High spend, zero conversions:** Cost > 2x target CPA and 0 conversions
2. **Irrelevant intent:** Search term has no semantic relationship to the keyword or product (e.g., keyword is "video editor" but search term is "video player download free")
3. **Wrong funnel stage:** Search term indicates research/browsing intent when campaign objective is conversion (e.g., "what is [product category]" on a conversion campaign)
4. **Competitor brand:** Search term contains a competitor brand name (unless running a competitor campaign intentionally)
5. **Negative ROI pattern:** CPA > 3x target CPA with 3+ clicks — enough data to be a pattern, not noise

**Flag as ADD if all of these are true:**
1. Conversions > 0 with CPA at or below target
2. Not already an exact-match keyword in the ad group
3. Has sufficient volume (5+ clicks in the 14-day window)

**Flag as WATCH if:**
1. New search term with < 5 clicks but relevant intent — not enough data yet
2. CPA between 1x-2x target — borderline, needs more time

**Cross-reference check:**
- Compare the search term to the keyword that triggered it. If the semantic gap is wide (search term meaning differs significantly from keyword intent), flag for negation regardless of performance — it means the match type is too broad.

### Step 3: Produce the Output

Generate a CSV with these columns:
```
Campaign | Ad Group | Keyword | Search Term | Match Type | Impressions | Clicks | Cost | Conversions | CPA | Action | Reasoning
```

Sort by:
1. NEGATE items first, sorted by Cost descending (biggest waste at top)
2. ADD items second, sorted by Conversions descending (best opportunities at top)
3. WATCH items last

### Step 4: Summarize

Provide a summary block:
```
SEARCH TERM MINING SUMMARY
───────────────────────────
Period:              [date range]
Campaigns analyzed:  [count]
Search terms reviewed: [count]
Flagged for negation:  [count] ($[total spend] waste identified)
Flagged for addition:  [count] ([total conversions] at $[avg CPA])
Flagged for watch:     [count]

Top 3 waste drivers:
1. "[search term]" — $X spent, 0 conversions, triggered by "[keyword]"
2. "[search term]" — $X spent, 0 conversions, triggered by "[keyword]"
3. "[search term]" — $X spent, 0 conversions, triggered by "[keyword]"

Top 3 opportunities:
1. "[search term]" — X conversions at $Y CPA (not yet a keyword)
2. "[search term]" — X conversions at $Y CPA (not yet a keyword)
3. "[search term]" — X conversions at $Y CPA (not yet a keyword)
```

### Step 5: Apply (MCP only, requires approval)

If MCP is connected, offer to apply negatives:
```
Ready to add [count] negative keywords. Each mutation requires your explicit approval.

Negative keywords to add:
1. Campaign: [name] → Add negative: "[term]" (exact match)
2. Campaign: [name] → Add negative: "[term]" (phrase match)
...

Approve all / Review one-by-one / Export only?
```

**Rule:** Never apply mutations without explicit approval. Always default to "Export only" if uncertain.

## Output Filing

Save outputs to:
- CSV: `clients/[client-name]/paid/ops/YYYY-MM-DD_search-term-mining.csv`
- Summary: `clients/[client-name]/paid/ops/YYYY-MM-DD_search-term-mining-summary.md`

## Quality Check

Before filing the output:
- [ ] Every flagged term has a reasoning column filled (no blank reasoning)
- [ ] No keyword marked for negation that already has conversions at/below target CPA
- [ ] Cross-reference check was applied (semantic gap between search term and keyword)
- [ ] Summary math is correct (totals match the CSV)
- [ ] Competitor brand terms are flagged correctly (negated unless intentional competitor campaign)
```

**Step 2: Commit**

```bash
git add 06_growth-paid/skills/mine-search-terms.md
git commit -m "feat: add search term mining skill for Paid agent"
```

---

### Task 3: Create the Budget Optimizer skill

**Files:**
- Create: `06_growth-paid/skills/budget-optimizer.md`

**Step 1: Write the skill file**

Create `06_growth-paid/skills/budget-optimizer.md`:

```markdown
# Budget Optimizer

> Analyzes spend vs. performance across campaigns, identifies over/under-spending, and recommends reallocations to maximize conversions within the existing budget.

## Cadence
Weekly — run every Monday. Also run ad-hoc when total account CPA drifts > 20% from target for 3+ days.

## What You Get
- Campaign-level performance table with efficiency scores
- Reallocation recommendations with dollar amounts and expected impact
- Pacing check: on-track, underpaced, or overpaced vs. monthly budget

## What You Need First
- [ ] Google Ads MCP connected (or campaign performance export)
- [ ] Client context loaded (`clients/[client-name]/context.md`)
- [ ] Active media plan from `clients/[client-name]/paid/media-plan.md`
- [ ] Monthly budget targets and CPA/ROAS goals

## Prompt Chain

### Step 1: Pull Campaign Performance Data

**With MCP:**
```
Query Google Ads for campaign-level performance over the last 7 days and last 30 days.

GAQL for 7-day:
SELECT
  campaign.name,
  campaign.status,
  campaign_budget.amount_micros,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions,
  metrics.cost_per_conversion,
  metrics.conversions_value
FROM campaign
WHERE segments.date DURING LAST_7_DAYS
  AND campaign.status = 'ENABLED'
ORDER BY metrics.cost_micros DESC

Run the same query with LAST_30_DAYS for trend comparison.
```

**Without MCP:**
```
I'm pasting my campaign performance data. Include: campaign name, 7-day spend, 7-day conversions, 7-day CPA, 30-day spend, 30-day conversions, 30-day CPA, daily budget, monthly budget target.
```

### Step 2: Score Campaign Efficiency

For each campaign, calculate:

1. **CPA Index:** Campaign CPA ÷ Target CPA
   - < 0.8 = Outperforming (scale candidate)
   - 0.8-1.2 = On target (maintain)
   - 1.2-2.0 = Underperforming (optimize or reduce)
   - > 2.0 = Critical (pause or restructure)

2. **Trend Direction:** Compare 7-day CPA to 30-day CPA
   - Improving (7d CPA < 30d CPA): trending better
   - Stable (within 10%): holding
   - Degrading (7d CPA > 30d CPA by 10%+): trending worse

3. **Volume Score:** Conversions per day
   - High: > 5/day (statistical confidence)
   - Medium: 2-5/day (directional)
   - Low: < 2/day (insufficient data for decisions)

4. **Pacing Status:** (Cost to date ÷ Expected cost to date) × 100
   - 90-110% = On pace
   - < 90% = Underpaced (leaving budget on the table)
   - > 110% = Overpaced (will exhaust budget early)

### Step 3: Generate Reallocation Recommendations

Apply these rules:

**INCREASE budget (up to +20%) if:**
- CPA Index < 0.8 AND Trend is Improving or Stable AND Volume is Medium+
- Campaign is underpaced AND performing well

**DECREASE budget (up to -20%) if:**
- CPA Index > 1.5 AND Trend is Degrading
- Campaign is overpaced AND underperforming

**PAUSE if:**
- CPA Index > 2.0 for 14+ days with no improvement trend
- Zero conversions in last 7 days with meaningful spend (> $500)

**HOLD if:**
- Volume Score is Low — not enough data to decide
- CPA Index is 0.8-1.2 regardless of trend

**Rule:** Never recommend a budget change > 20% in a single adjustment — per AGENT.md, changes > 20% require a new campaign or operator escalation.

### Step 4: Produce the Output

```
BUDGET OPTIMIZATION SUMMARY
────────────────────────────
Period:           [date range]
Total budget:     $[monthly] / month ($[daily] / day)
Spend to date:    $[amount] ([X]% of monthly target)
Pacing status:    [On pace / Underpaced by X% / Overpaced by X%]
Account CPA:      $[actual] vs $[target] target ([X]% of target)

CAMPAIGN PERFORMANCE
| Campaign | 7d Spend | 7d Conv | 7d CPA | CPA Index | Trend | Volume | Pacing | Action |
|---|---|---|---|---|---|---|---|---|
| [name] | $X | X | $X | 0.75 | Improving | High | On pace | INCREASE +15% |
| [name] | $X | X | $X | 1.85 | Degrading | Medium | Overpaced | DECREASE -20% |
...

RECOMMENDED REALLOCATIONS
| Campaign | Current Daily | Recommended Daily | Change | Expected Impact |
|---|---|---|---|---|
| [name] | $X | $X | +$X (+15%) | ~X additional conversions/week at $Y CPA |
| [name] | $X | $X | -$X (-20%) | Save $X/week, reduce waste conversions |
...

Net impact: [+/- $X reallocation], estimated [+X conversions/week] improvement

ESCALATION FLAGS
- [Any campaigns requiring > 20% change → escalate to operator]
- [Any campaigns recommended for pause → escalate to PM]
```

### Step 5: Apply (MCP only, requires approval)

If MCP is connected, offer to apply budget changes:
```
Ready to adjust [count] campaign budgets. Each change requires your explicit approval.

Budget changes:
1. [Campaign name]: $X/day → $Y/day (+15%)
2. [Campaign name]: $X/day → $Y/day (-20%)
...

Approve all / Review one-by-one / Export only?
```

**Rule:** Default to "Export only." Budget changes are high-stakes — never auto-apply.

## Output Filing

Save to: `clients/[client-name]/paid/ops/YYYY-MM-DD_budget-optimization.md`

## Quality Check

Before filing:
- [ ] No single recommendation exceeds 20% change
- [ ] Campaigns with Low volume are marked HOLD, not changed
- [ ] Pacing math is correct (spend-to-date vs expected for this point in month)
- [ ] Escalation flags are present for any recommended pauses or > 20% aggregate changes
- [ ] Reallocation is budget-neutral (increases = decreases within existing budget)
```

**Step 2: Commit**

```bash
git add 06_growth-paid/skills/budget-optimizer.md
git commit -m "feat: add budget optimizer skill for Paid agent"
```

---

### Task 4: Create the Weekly Paid Review skill

**Files:**
- Create: `06_growth-paid/skills/weekly-paid-review.md`

**Step 1: Write the skill file**

Create `06_growth-paid/skills/weekly-paid-review.md`:

```markdown
# Weekly Paid Review

> Full account health check that runs every Monday. Combines search term mining, budget optimization, creative fatigue detection, and audience performance into a single structured review.

## Cadence
Every Monday — this is the Paid agent's contribution to the weekly operating rhythm (`workflows/weekly-rhythm.md`).

## What You Get
- Account-level health scorecard (Green/Yellow/Red per metric)
- Top 3 actions for the week, prioritized by impact
- Outputs from search term mining and budget optimization (runs both skills inline)
- Creative fatigue alerts with refresh recommendations
- Audience performance breakdown with scaling/cutting recommendations

## What You Need First
- [ ] Google Ads MCP connected (or platform exports for last 7 days)
- [ ] Client context loaded (`clients/[client-name]/context.md`)
- [ ] Last week's review (if exists) from `clients/[client-name]/paid/ops/`
- [ ] Active media plan from `clients/[client-name]/paid/media-plan.md`

## Prompt Chain

### Step 1: Account Health Scorecard

Pull account-level metrics for last 7 days vs. prior 7 days:

| Metric | This Week | Last Week | Change | Status |
|---|---|---|---|---|
| Total Spend | $X | $X | +X% | G/Y/R |
| Conversions | X | X | +X% | G/Y/R |
| CPA | $X | $X | +X% | G/Y/R |
| ROAS | X.Xx | X.Xx | +X% | G/Y/R |
| CTR | X.X% | X.X% | +X% | G/Y/R |
| Impression Share | X% | X% | +X% | G/Y/R |

**Status rules:**
- Green: Metric within 10% of target or improving
- Yellow: Metric 10-25% off target or degrading
- Red: Metric > 25% off target or degrading for 2+ weeks

### Step 2: Run Search Term Mining

Execute the full `mine-search-terms.md` skill inline. Include the summary in this review, file the detailed CSV separately.

### Step 3: Run Budget Optimization

Execute the full `budget-optimizer.md` skill inline. Include the summary in this review, file the detailed recommendations separately.

### Step 4: Creative Fatigue Check

For each active ad, check these signals:

| Signal | Threshold | Action |
|---|---|---|
| Frequency | > 3.5 in 7 days | Flag for creative refresh |
| CTR trend | Declining 3+ days while CPM holds | Flag for creative refresh |
| CPA trend | Increasing 3+ days while CTR declining | Flag for creative refresh |

```
CREATIVE FATIGUE REPORT
───────────────────────
Ads showing fatigue signals:
1. [Ad name] in [Campaign] — Frequency: X.X, CTR: X.X% (↓ from X.X%), CPM: $X (→ flat)
   → Recommendation: Request fresh variants from Designer. Angle "[angle]" is exhausted for this audience.
2. ...

Ads with healthy creative life:
- [Ad name] — Frequency: X.X, CTR stable, launched [X days ago]
...

Creative refresh requests to file:
- [ ] [Campaign/Ad set]: Need [count] new [format] variants by [date]
```

**Rule:** When fatigue is detected, route to Designer + Content Writer immediately — per AGENT.md, do not wait for the scheduled creative review.

### Step 5: Audience Performance

Break down performance by audience tier:

```
AUDIENCE PERFORMANCE
────────────────────
| Tier | Audience | Spend | Conv | CPA | CPA vs Target | Trend | Action |
|---|---|---|---|---|---|---|---|
| T1 Retarget | [name] | $X | X | $X | X% | → | HOLD |
| T2 Lookalike | [name] | $X | X | $X | X% | ↑ | SCALE |
| T3 Interest | [name] | $X | X | $X | X% | ↓ | CUT |
| T4 Broad | [name] | $X | X | $X | X% | → | TEST |

Audience actions:
- SCALE: [audience] — Increase budget 15%, CPA is 30% below target and trending down
- CUT: [audience] — Reduce budget 20%, CPA is 50% above target for 2 weeks
- TEST: [audience] — New audience in learning phase, review again next week
```

### Step 6: Weekly Actions

Synthesize everything into 3-5 prioritized actions:

```
TOP ACTIONS THIS WEEK
─────────────────────
1. [URGENT] Negate X search terms wasting $X/week → run mine-search-terms apply step
2. [HIGH] Reallocate $X from [campaign] to [campaign] → budget-optimizer recommendations
3. [HIGH] Request creative refresh for [campaign] — fatigue detected → file brief to Designer
4. [MEDIUM] Scale [audience] — outperforming, room to grow
5. [LOW] Add X new keywords from search term mining

Escalation items (require operator approval):
- [Item requiring > 20% budget change or strategic decision]
```

## Output Filing

Save to: `clients/[client-name]/paid/ops/YYYY-MM-DD_weekly-paid-review.md`

Sub-outputs filed separately:
- `clients/[client-name]/paid/ops/YYYY-MM-DD_search-term-mining.csv`
- `clients/[client-name]/paid/ops/YYYY-MM-DD_search-term-mining-summary.md`
- `clients/[client-name]/paid/ops/YYYY-MM-DD_budget-optimization.md`

## Quality Check

Before filing:
- [ ] All 5 sections completed (scorecard, search terms, budget, creative, audience)
- [ ] Status colors (G/Y/R) match the defined thresholds
- [ ] Actions are prioritized by impact, not just listed
- [ ] Escalation items are flagged — nothing requiring > 20% budget change is buried in the actions list
- [ ] Previous week's review was referenced for trend context (if exists)
- [ ] Creative fatigue flags have been routed to Designer + Content Writer
```

**Step 2: Commit**

```bash
git add 06_growth-paid/skills/weekly-paid-review.md
git commit -m "feat: add weekly paid review skill for Paid agent"
```

---

### Task 5: Create `ops/` subdirectory in client template

**Files:**
- Modify: `clients/_template.md` (if it references folder structure)
- Create: client folder structure note

**Step 1: Check if client template references paid folder structure**

```bash
grep -n "paid" clients/_template.md
```

**Step 2: Add `ops/` to the paid subdirectory structure**

In whatever file defines the client folder structure, add `ops/` under `paid/`:

```
paid/
  creative-testing/
  ops/              ← NEW: search term mining, budget optimization, weekly reviews
```

**Step 3: Commit**

```bash
git add -A clients/
git commit -m "feat: add ops/ subdirectory to client paid folder structure"
```

---

### Task 6: Update Paid AGENT.md to reference skills

**Files:**
- Modify: `06_growth-paid/AGENT.md`

**Step 1: Add skills reference section**

Add after the `## OUTPUT SPEC` section (before `## QUALITY CRITERIA`):

```markdown
---

## OPERATIONAL SKILLS

> Structured workflows for recurring account management. Run these weekly or ad-hoc. See `06_growth-paid/skills/README.md` for details.

| Skill | File | Cadence | What It Does |
|---|---|---|---|
| Mine Search Terms | `skills/mine-search-terms.md` | Weekly | Finds wasteful search terms, produces negatives + additions CSV |
| Budget Optimizer | `skills/budget-optimizer.md` | Weekly | Analyzes spend vs. performance, recommends reallocations |
| Weekly Paid Review | `skills/weekly-paid-review.md` | Every Monday | Full account health check combining all operational skills |

**MCP requirement:** These skills work best with a Google Ads MCP server connected. Without it, paste exported data manually — the evaluation logic is the same.

**Output location:** All skill outputs file to `clients/[client-name]/paid/ops/` with date-prefixed filenames.
```

**Step 2: Update the TRAINING LOG**

Add a new row:

```markdown
| 2026-03-25 | Added operational skills: mine-search-terms, budget-optimizer, weekly-paid-review | Inspired by Austin's Google Ads MCP plugin pattern — turns Paid agent from strategy advisor to operational copilot |
```

**Step 3: Commit**

```bash
git add 06_growth-paid/AGENT.md
git commit -m "feat: update Paid AGENT.md with operational skills reference"
```

---

### Task 7: Update CLAUDE.md routing table

**Files:**
- Modify: `CLAUDE.md`

**Step 1: Add routing entries for the new skills**

Add these rows to the routing table in `CLAUDE.md`:

```markdown
| **Search term mining, negative keywords, search terms** | `06_growth-paid/AGENT.md` | `06_growth-paid/skills/mine-search-terms.md` |
| **Budget optimization, budget pacing, spend reallocation** | `06_growth-paid/AGENT.md` | `06_growth-paid/skills/budget-optimizer.md` |
| **Weekly paid review, Monday paid check, account health** | `06_growth-paid/AGENT.md` | `06_growth-paid/skills/weekly-paid-review.md` |
```

**Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "feat: add paid ops skills to CLAUDE.md routing table"
```

---

### Task 8: Update weekly rhythm workflow

**Files:**
- Modify: `workflows/weekly-rhythm.md`

**Step 1: Update the Monday Paid section**

In the Monday Quick Actions section, update the Paid line from:

```markdown
- Paid: Adjust budgets based on last week's performance (+25% winners, pause losers)
```

to:

```markdown
- Paid: Run `06_growth-paid/skills/weekly-paid-review.md` — covers search terms, budgets, creative fatigue, and audience performance in one pass
```

**Step 2: Commit**

```bash
git add workflows/weekly-rhythm.md
git commit -m "feat: reference weekly paid review skill in operating rhythm"
```

---

## Summary

| Task | Files | Description |
|---|---|---|
| 1 | `skills/README.md` | Skills directory + index |
| 2 | `skills/mine-search-terms.md` | Search term mining with GAQL + evaluation criteria |
| 3 | `skills/budget-optimizer.md` | Budget analysis with efficiency scoring + reallocation logic |
| 4 | `skills/weekly-paid-review.md` | Monday health check combining all three skills |
| 5 | Client template | Add `ops/` subdirectory |
| 6 | `AGENT.md` | Reference skills in Paid agent |
| 7 | `CLAUDE.md` | Add routing entries |
| 8 | `workflows/weekly-rhythm.md` | Wire into weekly cadence |

**Total files created:** 4 new
**Total files modified:** 3 existing
**Estimated tokens added:** ~4K across new files
