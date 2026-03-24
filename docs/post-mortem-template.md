# Post-Mortem Template

> For significant failures — experiments that went wrong, campaigns that damaged metrics, launches that broke things. Not for routine test losses (those go in experiment-results-log.md). Use this when something unexpected happened that the team needs to learn from.

## When to Use This Template

- An experiment caused unintended negative effects (e.g., increased churn, damaged brand perception)
- A campaign overspent budget by >25% without corresponding results
- A launch broke tracking, attribution, or core functionality
- A metric dropped >20% unexpectedly and the cause was traced to a team action
- Any incident where the root cause wasn't obvious and required investigation

---

```
POST-MORTEM
───────────
Title:
Date of incident:
Date of post-mortem:
Severity:            [P0-Critical / P1-High / P2-Medium]
Led by:
Participants:
```

## Timeline

| Time | Event |
|---|---|
| [When it started] | |
| [When detected] | |
| [First response] | |
| [Resolution] | |
| [Confirmed resolved] | |

**Time to detect:** [hours/days]
**Time to resolve:** [hours/days]

## What Happened

[2-3 paragraphs. Be specific. What was the intended action, what actually happened, and what was the impact.]

## Impact

| Metric | Before | During | After Recovery | Permanent Impact |
|---|---|---|---|---|
| | | | | |
| | | | | |

**Users affected:**
**Revenue impact:**
**Brand/reputation impact:**

## Root Cause

[One paragraph. The actual cause, not the symptom. Use "5 Whys" if needed.]

1. Why? →
2. Why? →
3. Why? →
4. Why? →
5. Why? → [Root cause]

## What Went Well

- [What caught the problem or limited the damage]
-

## What Went Wrong

- [What caused or worsened the problem]
-

## Action Items

| Action | Owner | Deadline | Status |
|---|---|---|---|
| [Immediate fix] | | | [ ] |
| [Process change to prevent recurrence] | | | [ ] |
| [Monitoring/alerting improvement] | | | [ ] |
| | | | [ ] |

## Lessons Learned

**For the pattern library:** [Is there a cross-client anti-pattern here? If yes, add to `docs/pattern-library.md`]

**For agent training:** [Should any AGENT.md training log be updated with this learning?]

**Process change:** [Does any SOP, checklist, or protocol need updating?]

---

*Filed in: `00_shared/reporting/post-mortems/`*
*Reviewed by: [Strategist sign-off]*
