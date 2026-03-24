# How It Works

## The Three-Tier System

```
TIER 1 — STRATEGIC        Growth Strategist (you)
TIER 2 — OPERATIONAL      Growth PM
TIER 3 — EXECUTION        12 specialist agents
```

Work flows down. Escalations flow up — only when a decision requires the tier above.

## The Two-Layer Agent Architecture

Every AGENT.md has:
- **Universal skills** — craft knowledge, frameworks, quality standards. Never changes between clients.
- **Client context** — business, ICP, channels, brand voice, tools. Swap this per client.

## The Experiment Loop

```
CRO (hypothesis) → PM (schedules) → Agents (execute) → Analytics (measures) → CRO + PM (learns)
```

- CRO generates hypotheses with ICE scores
- PM opens experiments — briefs, sprint allocation
- Analytics closes experiments — stat sig, results writeup
- No agent calls a test early

## The Handoff System

Every agent-to-agent relationship has:
- A work kickoff trigger (exact condition that starts the collaboration)
- A required artifact (what must exist before the receiving agent starts)
- An SLA (how fast)
- A send-back rule (agents return incomplete handoffs immediately)

See each AGENT.md's COLLABORATION PROTOCOLS section for full details.

## The Output Filing System

Every agent produces artifacts. Every artifact gets filed in a specific location. This is how the system compounds — outputs don't disappear after a conversation. They become inputs for the next task.

### Why Filing Matters

A prompt library gives you output once. GrowthOS gives you output that builds on itself:

- **Ad copy** that failed → logged in `copy-bank.md` → next time Content Writer checks before writing → never repeats a dead angle
- **ICP research** → filed in `ICP-research/` → Paid uses it for targeting, Content Writer uses it for messaging, CRO uses it for hypotheses → one research effort fuels three agents
- **Experiment results** → logged in `cro-hypothesis-log.md` → CRO generates follow-up hypothesis → PM schedules it → the system learns from every test
- **Pattern library** → cross-client wins logged in `docs/pattern-library.md` → Strategist applies proven patterns to new clients → intelligence transfers

Without filing, every task starts from zero. With filing, every task starts from everything you've already learned.

### Where Outputs Live

Each agent has its own output directories defined in the OUTPUT SPEC section of their AGENT.md. The key shared logs that compound over time:

| Log File | What It Tracks | Who Updates It | Who Reads It |
|---|---|---|---|
| `01_growth-researcher/insight-bank.md` | Every research finding | Researcher | All agents (via PM) |
| `02_content-writer/copy-bank.md` | Every piece of copy + performance | Content Writer | Content Writer, Paid, CRO |
| `02_content-writer/messaging-matrix.md` | ICP → message → proof → CTA mapping | Content Writer | Content Writer, Paid, Designer |
| `05_cro/cro-hypothesis-log.md` | Every hypothesis + test result | CRO | CRO, PM, Analytics |
| `06_growth-paid/media-plan.md` | All active campaigns + budgets | Paid | Paid, PM, Analytics |
| `docs/pattern-library.md` | Cross-client validated patterns | Strategist | All agents |

### The Compound Loop

```
Task produces output
    → Output gets filed in the right location
        → Next task reads prior outputs before starting
            → New output builds on what came before
                → Quality improves with every cycle
```

**Example:** You run an ad campaign.
1. Researcher files ICP profile → Content Writer reads it, writes ad copy
2. Content Writer files copy in `copy-bank.md` → Paid runs it, gets results
3. Paid files creative test results → Content Writer reads what won, writes better V2
4. CRO files LP hypothesis from the traffic data → next LP test is informed by real performance
5. Strategist logs the winning pattern in `pattern-library.md` → applies it to the next client

After 3 months, every agent is working from a rich history of validated learnings — not guessing.

### How to Use the Example Outputs

The `example-` prefixed files in the repo show what this looks like in practice. They follow the full chain for a fictional B2B energy company:

```
ICP profiles (Researcher)
    → Research brief (Researcher → routes to Content Writer, Paid, CRO, Designer)
        → Messaging matrix entries (Content Writer)
        → LP copy (Content Writer)
        → Ad copy variants (Content Writer)
            → Copy bank entries with performance tracking (Content Writer)
        → Media plan with campaign structure (Paid)
        → CRO hypotheses with optimization roadmap (CRO)
```

Every output references where it came from (brief ref) and where it's going (routing). Nothing exists in isolation.
