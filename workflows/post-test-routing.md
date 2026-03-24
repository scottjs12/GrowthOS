# Post-Test Routing Workflow

> Every experiment produces learnings. This workflow ensures those learnings reach every agent that needs them. The compound effect comes from routing, not just testing.

## Trigger
- Analytics closes an experiment (win, loss, or inconclusive)
- Campaign performance review surfaces a clear pattern
- Monthly review identifies a transferable insight

## Agent Chain

STEP 1: Analytics — Result Summary
- Input: Raw experiment data
- Output: Full result summary filed in `experiment-results-log.md`
- Format: Primary metric result, stat sig, secondary metrics, confounds, cohort analysis if relevant
- Handoff: Result -> PM + CRO within 24h

STEP 2: PM — Routing Decision
- Input: Experiment result
- Output: Routing memo — which agents need this learning and what action each should take
- Rules: Route to ALL agents that could benefit, not just the ones who executed the test

## Routing Matrix

Based on result type, PM routes to:

### Copy/Messaging Win
| Agent | Action |
|---|---|
| Content Writer | Update copy-bank with winning angle. Write scale variants (V4, V5, etc.) |
| Designer | Note which visual approach paired with winning copy |
| Paid | Scale winning variant budget. Apply angle to other audiences |
| Strategist | Log pattern in pattern library if transferable |

### Creative/Visual Win
| Agent | Action |
|---|---|
| Designer | Absorb winning visual pattern into templates. Iterate for next variants |
| Content Writer | Note which copy paired with winning creative |
| Paid | Scale winning creative. Note fatigue timeline expectation |

### Audience/Targeting Win
| Agent | Action |
|---|---|
| Researcher | Update ICP profile with validated targeting data |
| Paid | Scale winning audience. Build LAL from converters |
| CRM | Segment converters for lifecycle nurture |
| Content Writer | Adapt messaging for validated audience |

### Conversion/LP Win
| Agent | Action |
|---|---|
| CRO | File follow-up hypothesis (push the winning direction further) |
| Engineer | Deploy winning variant as default |
| Designer | Update LP template library |
| Content Writer | Update LP copy in copy-bank |

### Loss or Inconclusive
| Agent | Action |
|---|---|
| CRO | Archive direction. Document why it failed. |
| Researcher | Flag if assumption about ICP was wrong |
| All relevant | "Don't repeat this" — negative knowledge is knowledge |

## Exit Criteria
- [ ] Every relevant agent has received their routing memo
- [ ] Actions have deadlines assigned
- [ ] Copy-bank updated (if copy test)
- [ ] Pattern library updated (if transferable insight)
- [ ] Next sprint queue updated with follow-up actions

## Rules
- Route within 24h of experiment close — learnings decay fast
- Always route to Strategist for pattern-level wins — that's how the system compounds across clients
- Inconclusive is not a failure — file the learning, recommend larger sample or different approach
- Never route without specific actions — "FYI" routing is waste

## Reference
- Experiment loop: `docs/experiment-loop.md`
