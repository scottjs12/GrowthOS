# GrowthOS — Claude Code Instructions

## What This Repo Is

GrowthOS is an AI-native growth operating system with 13 specialist agents. Each agent has an AGENT.md defining its role, skills, and collaboration protocols. Supplementary playbook files provide deeper frameworks.

**Total repo: ~100K tokens. Never load everything at once.**

## Client Context System

Each client has its own folder: `clients/[client-name]/`. The folder contains:
- `context.md` — all 13 context blocks for that client
- Agent-specific output subdirectories (researcher/, content-writer/, cro/, paid/, etc.) where all work product is filed

AGENT.md files contain only universal skills. Templates and frameworks stay in agent folders. All client output goes in the client folder.

**Loading rule:** When working on ANY client task, ALWAYS load `clients/[client-name]/context.md` alongside the relevant AGENT.md(s). Look for folders in `clients/` (excluding `_template.md`, `_example.md`, and `README.md`). If only one client folder exists, load it automatically. If multiple exist, ask which client.

**Output rule:** All work product (copy, research, hypotheses, media plans, etc.) is filed in the client's folder under the appropriate agent subdirectory — never in the agent's top-level folder.

## Agent Routing

When the user gives you a task, identify which agents are relevant and READ ONLY those AGENT.md files + the client context file + supplementary files as needed. Use this routing table:

### Primary Task → Agent Mapping

| Task Keywords / Intent | Primary Agent(s) to Load | Supplementary Files |
|---|---|---|
| **Strategy, planning, North Star, growth model, priorities** | `STRATEGIST.md` + `00_growth-pm/AGENT.md` | `docs/how-it-works.md` |
| **Brief, sprint, prioritization, experiment backlog, coordination** | `00_growth-pm/AGENT.md` | `00_growth-pm/experiment-tracker.md`, `00_growth-pm/campaign-brief-template.md` |
| **ICP, persona, audience research, competitive intel, market research** | `01_growth-researcher/AGENT.md` | `01_growth-researcher/icp-template.md`, `01_growth-researcher/competitive-intel-template.md`, + client's `researcher/` |
| **Copy, email copy, ad copy, landing page copy, messaging** | `02_content-writer/AGENT.md` | `02_content-writer/lp-copy-structures.md`, + client's `content-writer/copy-bank.md`, `content-writer/messaging-matrix.md`, `content-writer/brand-voice.md` |
| **Cold email, outbound, prospecting email** | `02_content-writer/AGENT.md` | (cold email framework is in AGENT.md) |
| **Social media, content calendar, social strategy, video scripts** | `02_content-writer/AGENT.md` | `02_content-writer/social-content-playbook.md` |
| **SEO, keywords, content briefs, technical SEO, ASO** | `03_seo/AGENT.md` | `03_seo/keyword-research/`, `03_seo/content-briefs/`, `03_seo/technical-seo-checklist.md` |
| **AI search, AEO, AI overviews, programmatic SEO** | `03_seo/AGENT.md` | (AEO + pSEO sections are in AGENT.md) |
| **Design, creative, ad templates, landing page design** | `04_growth-designer/AGENT.md` | `00_shared/briefs/designer-creative-brief-template.md`, + client's `designer/brand-kit.md` |
| **Ad creative, angles, creative testing** | `04_growth-designer/AGENT.md` + `06_growth-paid/AGENT.md` | |
| **CRO, A/B test, hypothesis, landing page audit, conversion** | `05_cro/AGENT.md` | `05_cro/frameworks/` |
| **Paid ads, Meta, Google Ads, budget, audience, retargeting** | `06_growth-paid/AGENT.md` | `06_growth-paid/media-plan.md`, `06_growth-paid/campaign-structure-template.md`, `00_shared/briefs/media-buyer-brief-template.md` |
| **Video ads, video structure** | `06_growth-paid/AGENT.md` + `04_growth-designer/AGENT.md` | |
| **Analytics, KPIs, dashboards, attribution, tracking, events** | `07_growth-analytics/AGENT.md` | `07_growth-analytics/tracking-plan-template.md`, `07_growth-analytics/kpi-definitions.md`, `07_growth-analytics/cohort-analysis-template.md` |
| **Reporting, dashboard, weekly review, monthly review** | `07_growth-analytics/AGENT.md` + `00_growth-pm/AGENT.md` | `00_shared/reporting/weekly-dashboard-template.md`, `00_shared/reporting/monthly-review-template.md` |
| **CRM, lifecycle email, segmentation, referral, community** | `08_growth-crm/AGENT.md` | `08_growth-crm/email-sequences-playbook.md` |
| **Email sequences, onboarding emails, win-back, re-engagement** | `08_growth-crm/AGENT.md` | `08_growth-crm/email-sequences-playbook.md` |
| **Referral program, referral loop, ambassador** | `08_growth-crm/AGENT.md` + `11_influencer-partnerships/AGENT.md` | |
| **Ops, trafficking, UTMs, pixels, tags, QA, tool stack** | `09_growth-ops/AGENT.md` | `09_growth-ops/tool-stack.md` |
| **RevOps, lead scoring, MQL, SQL, lead routing** | `09_growth-ops/AGENT.md` | `09_growth-ops/revops-playbook.md` |
| **Launch, new client, new channel, go-live** | `09_growth-ops/AGENT.md` | `09_growth-ops/launch-checklist.md`, `09_growth-ops/weekly-runbook.md` |
| **Engineering, LP build, tracking code, HTML ads, A/B instrumentation** | `10_growth-engineer/AGENT.md` | |
| **Influencer, creator, UGC, partnerships, affiliate** | `11_influencer-partnerships/AGENT.md` | `11_influencer-partnerships/creator-scorecard.md`, `11_influencer-partnerships/creator-brief-template.md` |
| **Client onboarding, setup** | `SETUP.md` + `00_growth-pm/AGENT.md` | `docs/client-onboarding.md` |
| **Brand kit, brand assets, visual identity setup** | `04_growth-designer/AGENT.md` | `04_growth-designer/brand-kit-template.md` |
| **Brand voice, tone of voice, writing style setup** | `02_content-writer/AGENT.md` | `02_content-writer/brand-voice-template.md` |
| **Messaging matrix, positioning, value props** | `02_content-writer/AGENT.md` | `02_content-writer/messaging-matrix-template.md` |
| **File naming, folder structure, logging, indexing** | `00_growth-pm/AGENT.md` | `docs/filing-convention.md` |
| **Pattern, cross-client, what works, reusable** | `STRATEGIST.md` | `docs/pattern-library.md` |
| **Post-mortem, failure, incident, what went wrong** | `05_cro/AGENT.md` + `00_growth-pm/AGENT.md` | `docs/post-mortem-template.md`, `docs/experiment-loop.md` |
| **Workflow, process, how do we run X** | `00_growth-pm/AGENT.md` | `workflows/README.md` + relevant workflow file |
| **Campaign launch process, end-to-end** | `00_growth-pm/AGENT.md` | `workflows/campaign-launch.md` |
| **Experiment, test process, A/B test workflow** | `05_cro/AGENT.md` + `00_growth-pm/AGENT.md` | `workflows/experiment-cycle.md`, `workflows/lp-test.md` |
| **Creative fatigue, ad refresh** | `06_growth-paid/AGENT.md` + `04_growth-designer/AGENT.md` | `workflows/creative-refresh.md` |
| **Weekly cadence, operating rhythm** | `00_growth-pm/AGENT.md` | `workflows/weekly-rhythm.md` |
| **Monthly review, monthly report** | `07_growth-analytics/AGENT.md` + `00_growth-pm/AGENT.md` | `workflows/monthly-review.md` |
| **Privacy, compliance, GDPR, CCPA, cookies** | `09_growth-ops/AGENT.md` | `docs/privacy-compliance-checklist.md` |
| **Retention, churn, win-back, reactivation** | `08_growth-crm/AGENT.md` | `08_growth-crm/retention-playbook.md` |
| **LP copy, page structure, landing page copy** | `02_content-writer/AGENT.md` | `02_content-writer/lp-copy-structures.md` |
| **Creator vetting, influencer scoring** | `11_influencer-partnerships/AGENT.md` | `11_influencer-partnerships/creator-scorecard.md` |
| **CRO frameworks, form optimization, LP audit** | `05_cro/AGENT.md` | `05_cro/frameworks/` |
| **Unit economics, LTV, CAC, payback, burn** | `07_growth-analytics/AGENT.md` + `STRATEGIST.md` | `docs/unit-economics-framework.md` |
| **PLG, product-led growth, freemium, self-serve, PQL** | `STRATEGIST.md` + `08_growth-crm/AGENT.md` | `docs/plg-playbook.md` |
| **Enterprise, sales-assisted, land-and-expand, PQL scoring** | `STRATEGIST.md` | `docs/enterprise-growth-playbook.md` |
| **Board report, quarterly report, investor update** | `07_growth-analytics/AGENT.md` + `00_growth-pm/AGENT.md` | `00_shared/reporting/board-report-template.md` |
| **Crisis, incident, tracking broke, budget runaway** | `09_growth-ops/AGENT.md` + `00_growth-pm/AGENT.md` | `workflows/crisis-response.md` |
| **Competitor, competitive response, market shift** | `01_growth-researcher/AGENT.md` + `00_growth-pm/AGENT.md` | `workflows/competitive-response.md` |
| **Hiring, team structure, scaling, org design** | `STRATEGIST.md` | `docs/team-scaling-guide.md` |
| **Agent conflict, disagreement, SEO vs CRO** | `00_growth-pm/AGENT.md` | `docs/conflict-resolution-framework.md` |
| **Pricing, monetization, tier optimization, willingness to pay** | `05_cro/AGENT.md` + `STRATEGIST.md` | `docs/unit-economics-framework.md` |
| **Onboarding, activation, time-to-value, aha moment** | `05_cro/AGENT.md` + `08_growth-crm/AGENT.md` | |
| **PQL, product-qualified lead, sales routing, speed-to-lead** | `09_growth-ops/AGENT.md` | `09_growth-ops/revops-playbook.md` |
| **NRR, expansion revenue, upsell, tier upgrade** | `07_growth-analytics/AGENT.md` + `08_growth-crm/AGENT.md` | |
| **Incrementality, holdout test, marketing mix, causal measurement** | `07_growth-analytics/AGENT.md` | |
| **Case study, customer story, testimonial** | `02_content-writer/AGENT.md` | |
| **Viral, virality, K-factor, shareability, network effects** | `08_growth-crm/AGENT.md` | |
| **Community growth, creator flywheel, UGC pipeline** | `11_influencer-partnerships/AGENT.md` | |
| **Positioning test, claim testing, competitive messaging** | `06_growth-paid/AGENT.md` + `01_growth-researcher/AGENT.md` | |
| **Product launch, feature announcement, product-to-messaging** | `01_growth-researcher/AGENT.md` + `02_content-writer/AGENT.md` | |
| **Generate ad copy, write ads, create variants** | `02_content-writer/AGENT.md` | `generators/ad-copy-generator.md` |
| **Generate LP copy, write landing page** | `02_content-writer/AGENT.md` | `generators/lp-copy-generator.md` |
| **Generate email sequence, build lifecycle flow** | `08_growth-crm/AGENT.md` | `generators/email-sequence-generator.md` |
| **Generate cold email, outbound sequence** | `02_content-writer/AGENT.md` | `generators/cold-outbound-generator.md` |
| **Generate video script, write script** | `02_content-writer/AGENT.md` + `04_growth-designer/AGENT.md` | `generators/video-script-generator.md` |
| **Generate SEO brief, content brief** | `03_seo/AGENT.md` | `generators/seo-content-brief-generator.md` |
| **Generate social posts, content batch, weekly posts** | `02_content-writer/AGENT.md` | `generators/social-content-batch-generator.md` |
| **Generate hypothesis, audit landing page, CRO ideas** | `05_cro/AGENT.md` | `generators/cro-hypothesis-generator.md` |
| **Generate campaign brief, plan campaign** | `00_growth-pm/AGENT.md` | `generators/campaign-brief-generator.md` |
| **Generate competitive analysis, analyze competitors** | `01_growth-researcher/AGENT.md` | `generators/competitive-analysis-generator.md` |
| **Search term mining, negative keywords, search terms** | `06_growth-paid/AGENT.md` | `06_growth-paid/skills/mine-search-terms.md` |
| **Budget optimization, budget pacing, spend reallocation** | `06_growth-paid/AGENT.md` | `06_growth-paid/skills/budget-optimizer.md` |
| **Weekly paid review, Monday paid check, account health** | `06_growth-paid/AGENT.md` | `06_growth-paid/skills/weekly-paid-review.md` |

### Loading Rules

1. **Always load the PM** (`00_growth-pm/AGENT.md`) when the task involves coordination between 2+ agents
2. **Max 3 AGENT.md files per task.** If a task touches more than 3, break it into subtasks.
3. **Load supplementary files only when the task specifically needs that framework.** Don't pre-load playbooks.
4. **For broad/strategic questions**, load `STRATEGIST.md` — it provides the system overview without agent-level detail.
5. **For "how does this system work" questions**, load `docs/how-it-works.md` + `docs/experiment-loop.md`.

### Token Budget per Task Type

| Task Type | Files to Load | ~Tokens |
|---|---|---|
| Single-agent task (e.g., "write ad copy") | 1 AGENT.md + client context | ~6K |
| Two-agent handoff (e.g., "research ICP then write messaging") | 2 AGENT.md + client context + 1 supplementary | ~12K |
| Cross-functional campaign (e.g., "plan a launch") | PM + 2 AGENT.md + client context + launch checklist | ~17K |
| Strategic planning | STRATEGIST.md + PM + client context | ~10K |
| Client onboarding | SETUP.md + PM + Researcher + `clients/_template.md` | ~14K |
| Multi-agent workflow (e.g., "run a campaign launch") | PM + workflow file + 2 AGENT.md + client context | ~15K |

## Style & Tone

- Match existing GrowthOS tone: direct, opinionated, practitioner-level
- Templates use triple-backtick blocks with ASCII box-drawing headers
- Rules stated as imperatives ("Never..." / "Always..." / "Flag...")
- Checklists use `- [ ]` format
- All content must be client-agnostic unless working within a specific client context

## Key Structural Rules

- **Never modify UNIVERSAL SKILLS** sections without explicit instruction — these are the craft knowledge layer
- **Client context lives in `clients/`** — never put client-specific details in AGENT.md files
- **TRAINING LOG** must be updated whenever an AGENT.md is modified
- Every supplementary file must be referenced in its parent agent's AGENT.md
- No file should reference another file that doesn't exist
