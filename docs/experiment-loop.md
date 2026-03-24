# The Experiment Loop

The most important process in the system.

## Ownership

| Agent | Role | What They Own |
|---|---|---|
| CRO | Hypothesizes | Generates ICE-scored hypotheses, designs tests |
| PM | Opens | Briefs, schedules, sprint allocation |
| Analytics | Closes | Stat sig analysis, results writeup, learnings log |

## The Flow

```
1. CRO files hypothesis in 05_cro/hypotheses/ with ICE score
2. PM adds to experiment-backlog/, sprint-slots it
3. PM issues brief to relevant execution agents (Content / Designer / Engineer)
4. Engineer instruments the test (variant delivery + event tracking)
5. Ops confirms tracking is clean — signs off on trafficking checklist
6. Test goes live
7. Analytics monitors — does NOT call results early
8. After minimum runtime + sample size met: Analytics closes in experiment-results-log.md
9. Analytics notifies CRO + PM within 24h
10. CRO files follow-up hypothesis or archives the direction
11. PM logs action in growth-roadmap.md
```

## Rules

- **Minimum runtime: 2 weeks** — always, regardless of sample size
- **Statistical significance target: 95%** — never call at 80%
- **Never stop early** — early stopping inflates false positives
- **Document everything** — inconclusive results are valid. File them.
- **One variable per test** — if you change two things, you learn nothing about either

## ICE Scoring

Impact × Confidence × Ease — averaged to 1–10. See CRO AGENT.md for full scoring guide.

## Post-Mortems

When an experiment causes unintended negative effects, run a post-mortem using `docs/post-mortem-template.md`. Not every loss needs a post-mortem — only significant failures that warrant investigation (unintended harm, broken tracking, unexpected metric drops >20%, or budget overruns >25%).
