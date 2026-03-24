# Monthly Review Workflow

> Zoom out. Weekly dashboards show snapshots. Monthly reviews show trends. This is where strategy gets validated or adjusted.

## Trigger
- Last Friday of each month (or first Monday of new month)
- Also triggered ad hoc by: major metric shift, strategic pivot, new client quarter

## Agent Chain

STEP 1: Analytics — Monthly Report
- Input: 4 weeks of dashboard data, experiment results, channel performance
- Output: Monthly review using `00_shared/reporting/monthly-review-template.md`
- Includes: KPI trends (4-week view), channel deep dive, experiment summary, cohort analysis
- Rules: Trends over snapshots. Compare MoM, not just WoW. Flag any metric that moved >20% in either direction.
- Timeline: Draft ready by Thursday before review

STEP 2: PM — Review + Synthesis
- Input: Monthly report + experiment results + agent status updates
- Output: Strategic synthesis — what's working, what's not, what changes next month
- Format:
  - 3 wins (what worked and why)
  - 3 concerns (what's at risk and proposed response)
  - 3 priorities for next month (ranked)
  - Resource/budget adjustment recommendations

STEP 3: Strategist — Strategic Decisions
- Input: PM synthesis
- Output: Strategic direction for next month
- Decision types:
  - Channel allocation changes (shift budget between channels)
  - ICP priority shifts (focus on different segment)
  - Experiment philosophy (more aggressive vs. consolidate)
  - New channel approval (see `workflows/channel-expansion.md`)
  - Growth model update (revise targets based on actuals)

STEP 4: PM — Route Decisions to Agents
- Input: Strategist decisions
- Output: Updated briefs/priorities for each affected agent
- Rules: Every agent gets clear direction for next month. No ambiguity.

## Monthly Report Sections

### Required
- [ ] Executive summary (3 bullets max)
- [ ] KPI trends (4-week table with MoM change and vs. target)
- [ ] Channel performance (what scaled, what got killed, what's testing next)
- [ ] Experiment summary (tests run, win rate, key learnings)
- [ ] Next month priorities (3, ranked)

### Optional (include when relevant)
- [ ] Cohort analysis (if retention/activation is a focus)
- [ ] Competitive movement (if Researcher flagged something)
- [ ] Budget reallocation recommendation
- [ ] New channel or ICP recommendation

## Exit Criteria
- [ ] Monthly report filed to `00_shared/reporting/monthly-reviews/`
- [ ] Strategic decisions documented
- [ ] Next month priorities communicated to all agents
- [ ] Growth model updated if targets changed
- [ ] Pattern library updated with any transferable monthly learnings

## Rules
- Monthly review is not optional — even if "nothing changed," the review confirms that
- Never adjust strategy based on 1 week of data — monthly review forces the 4-week view
- Always compare actuals to the growth model — divergence is signal
- If win rate on experiments is >80%, hypotheses are too safe. Push harder.
- If win rate is <20%, hypotheses are too speculative. Ground them in data.

## Reference
- Monthly review template: `00_shared/reporting/monthly-review-template.md`
- Growth model: Defined in client context file (`clients/[client].md`)
- Pattern library: `docs/pattern-library.md`
