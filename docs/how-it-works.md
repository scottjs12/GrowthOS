# How It Works

## The Three-Tier System

```
TIER 1 — STRATEGIC        Growth Strategist (you)
TIER 2 — OPERATIONAL      Growth PM
TIER 3 — EXECUTION        13 specialist agents
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

Agent folders contain **methodology only** — AGENT.md files, templates, frameworks, playbooks. All client work product lives under `clients/[client-name]/` in agent-specific subdirectories:

```
clients/vantage-energy/
  context.md                    ← client context (loaded with every task)
  researcher/
    icp-profiles.md             ← ICP research for this client
    insight-bank.md             ← research findings for this client
    research-briefs/
  content-writer/
    ad-copy/
    landing-pages/
    copy-bank.md                ← all copy + performance for this client
    messaging-matrix.md         ← ICP → message mapping for this client
  cro/
    hypotheses/
    cro-hypothesis-log.md       ← hypothesis backlog for this client
  paid/
    media-plan.md               ← active campaigns for this client
    creative-testing/
  analytics/
  designer/
  crm/
  ops/
```

The key logs that compound over time (one per client):

| Log File (under `clients/[name]/`) | What It Tracks | Who Updates It | Who Reads It |
|---|---|---|---|
| `researcher/insight-bank.md` | Every research finding | Researcher | All agents (via PM) |
| `content-writer/copy-bank.md` | Every piece of copy + performance | Content Writer | Content Writer, Paid, CRO |
| `content-writer/messaging-matrix.md` | ICP → message → proof → CTA mapping | Content Writer | Content Writer, Paid, Designer |
| `cro/cro-hypothesis-log.md` | Every hypothesis + test result | CRO | CRO, PM, Analytics |
| `paid/media-plan.md` | All active campaigns + budgets | Paid | Paid, PM, Analytics |
| `docs/pattern-library.md` (repo-level) | Cross-client validated patterns | Strategist | All agents |

**Why client-level, not agent-level?** Each client's outputs stay isolated. No mixing. You can archive a client by moving one folder. Cross-client learnings get promoted to `docs/pattern-library.md` — that's the only file that spans clients.

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

---

## Keeping Token Usage Low

GrowthOS files are designed to be loaded selectively — never paste everything at once. Follow these rules to get better output with fewer tokens.

**1. Load 1 AGENT.md per task, not all 13.**
If you're writing ad copy, load `02_content-writer/AGENT.md`. That's it. Don't load the Designer, Paid, and CRO agents "just in case." If the task genuinely spans 2 agents, load 2. Never more than 3.

**2. Only paste the context blocks your agent needs.**
Your `context.md` has 13 sections. The Content Writer needs brand voice + ICP + copy angles. It does not need your analytics stack or engineer context. Paste the relevant 2-3 blocks, not the whole file.

**3. Supplementary files are optional — load only when needed.**
Every agent folder has playbooks and templates alongside the AGENT.md. Only load these when the task specifically calls for that framework. Writing a basic email? Just the AGENT.md. Building a full lifecycle flow? Now load `email-sequences-playbook.md`.

**4. Load the generator first, gather inputs second.**
Generators tell you exactly what inputs they need under "What You Need First." Read that list, gather those specific items, then run the prompt chain. Don't paste your entire client folder and hope the AI figures it out.

**5. Feed prior outputs forward — don't re-describe.**
If you already built ICP profiles, don't re-explain your audience from scratch. Paste the ICP file. If you already have a messaging matrix, paste that instead of re-deriving angles. The compound loop saves tokens too.

**Quick reference — what to load per task type:**

| Task | Load | ~Tokens |
|---|---|---|
| Single-agent task (write ad copy) | 1 AGENT.md + 2-3 context blocks | ~4-6K |
| Two-agent handoff (research → copy) | 2 AGENT.md + context blocks + 1 prior output | ~10-12K |
| Generator (ad copy, email sequence) | Generator file + 2-3 context blocks | ~5-8K |
| Full campaign planning | PM AGENT.md + 2 AGENT.md + context + workflow | ~15-17K |
