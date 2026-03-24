# Landing Page Test Workflow

> From hypothesis to instrumented test to validated learning. The CRO engine.

## Trigger
- CRO files LP hypothesis with ICE score >=5
- Analytics flags conversion rate drop >15% week-over-week
- Post-test routing identifies LP as next optimization lever

## Agent Chain

STEP 1: CRO — Hypothesis + Test Spec
- Input: LP performance data, user behavior analysis, funnel drop-off data
- Output: Hypothesis ("If we [change X], then [metric Y] will [improve Z] because [reason]"), test spec (element, control, variant, primary metric, guardrail metrics, minimum sample size)
- Rules: One variable per test. Define guardrail metrics (a CVR win that tanks time-on-site may not be a real win). Calculate required sample size before starting.
- Reference: `05_cro/cro-hypothesis-log.md`

STEP 2: PM — Brief + Schedule
- Input: ICE-ranked hypothesis
- Output: Sprint-slotted test with briefs to execution agents
- Rules: Max 1 LP test per page at a time. Don't starve the test of traffic — if <500 visitors/week, consider testing elsewhere first.

STEP 3: Content Writer — Copy Variant (if copy test)
- Input: Test spec with control copy and variant direction
- Output: Variant copy only — matching the exact spec, no extras
- Rules: Don't improve the whole page. Only change what the hypothesis specifies.

STEP 4: Designer — Design Variant (if visual test)
- Input: Test spec with control design and variant direction
- Output: Design variant matching spec — annotated with what changed and what didn't
- Rules: Same constraint — only change what the hypothesis specifies

STEP 5: Engineer — Instrumentation
- Input: Variant copy/design + test spec (traffic split, conversion event, duration)
- Output: Instrumented test with variant assignment, event tracking, and preview URLs
- Rules: Confirm variant assignment is random and sticky (same user sees same variant). Verify conversion events fire on both control and variant.
- Handoff: Preview URLs -> CRO for visual QA

STEP 6: CRO — Pre-Launch QA
- Input: Preview URLs for both variants
- Output: Sign-off that variants render correctly and match spec
- Decision gate: HARD GATE — CRO confirms before go-live
- Rules: Check mobile + desktop. Verify CTAs work. Confirm tracking fires in debug view.

STEP 7: Ops — Tracking Validation
- Input: Test setup confirmation
- Output: Tracking verified — events appearing in analytics
- Handoff: Go-live approval

STEP 8: Test Live -> Analytics Monitors
- Minimum runtime: 2 weeks
- Stat sig target: 95%
- Analytics monitors — never calls early
- Handoff: Results -> CRO + PM (see `workflows/experiment-cycle.md` Steps 6-8)

## Exit Criteria
- [ ] Result filed in experiment-results-log
- [ ] Winning variant deployed as new default (if win) or control maintained (if loss)
- [ ] Learning documented in hypothesis log
- [ ] Follow-up hypothesis filed or direction archived
- [ ] Pattern library updated if transferable insight

## Reference
- Experiment loop: `docs/experiment-loop.md`
- CRO hypothesis log: `05_cro/cro-hypothesis-log.md`
- CRO frameworks: `05_cro/frameworks/`
