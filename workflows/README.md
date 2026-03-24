# Workflows

> Reusable multi-agent chains. Each workflow defines the trigger, agent sequence, decision gates, and exit criteria for a common growth operation.

## Cross-Functional Workflows

| Workflow | Agents | When to Use |
|---|---|---|
| [campaign-launch.md](campaign-launch.md) | PM → Researcher → Content → Designer → Paid → Ops → Analytics | New campaign or channel launch |
| [experiment-cycle.md](experiment-cycle.md) | CRO → PM → Execution agents → Ops → Analytics → CRO | Any A/B test or experiment |
| [content-production.md](content-production.md) | Varies by type (SEO, Social, Email, Ad refresh) | Content sprints and batch production |
| [lifecycle-flow-build.md](lifecycle-flow-build.md) | CRM → Content → Designer → Ops → Analytics | New email lifecycle flow |
| [creative-refresh.md](creative-refresh.md) | Paid → Content → Designer → Ops → Paid | Ad creative fatigue response |
| [channel-expansion.md](channel-expansion.md) | PM → Researcher → Content → Designer → Paid → Ops → Analytics | Adding a new acquisition channel |
| [lp-test.md](lp-test.md) | CRO → PM → Content/Designer → Engineer → Ops → Analytics | Landing page A/B test |
| [post-test-routing.md](post-test-routing.md) | Analytics → PM → All relevant agents | After any experiment closes |
| [crisis-response.md](crisis-response.md) | Varies by crisis type | Tracking breaks, budget runaway, competitor move, viral moment, fraud |
| [competitive-response.md](competitive-response.md) | Researcher → PM → Content → Paid/SEO → Analytics | Competitor launches product, slashes pricing, or targets your users |

## Recurring Cadences

| Workflow | Frequency | Purpose |
|---|---|---|
| [weekly-rhythm.md](weekly-rhythm.md) | Every week (Mon-Fri) | The operating heartbeat — review, create, ship, analyze, close |
| [monthly-review.md](monthly-review.md) | Last Friday of month | Trend analysis, strategy validation, course correction |

## How Workflows Connect

```
campaign-launch.md ──→ experiment-cycle.md ──→ post-test-routing.md
                                                      ↓
                                              Routes to agents
                                                      ↓
                                    creative-refresh.md (if fatigue)
                                    content-production.md (if new variants)
                                    lp-test.md (if LP hypothesis)
                                    lifecycle-flow-build.md (if CRM action)

weekly-rhythm.md ───→ Surfaces issues that trigger other workflows
monthly-review.md ──→ May trigger channel-expansion.md or strategy shifts

crisis-response.md ─→ Triggered by anomalies from any workflow
competitive-response.md → Triggered by Researcher intel or market shifts
```

## Strategic Playbooks (referenced by workflows)

| Playbook | Location | When to Load |
|---|---|---|
| Unit Economics | `docs/unit-economics-framework.md` | Board reporting, budget decisions, channel evaluation |
| PLG Playbook | `docs/plg-playbook.md` | Product-led growth strategy, activation, conversion optimization |
| Enterprise Growth | `docs/enterprise-growth-playbook.md` | Sales-assisted motion, PQL scoring, land-and-expand |
| Team Scaling | `docs/team-scaling-guide.md` | Hiring decisions, org design, role evolution |
| Conflict Resolution | `docs/conflict-resolution-framework.md` | Agent disagreements, cross-functional tensions |
