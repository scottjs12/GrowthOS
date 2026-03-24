# Client Context & Output Files

Each subfolder in this directory represents one client. All work product lives under the client folder, not in agent folders.

## Folder Structure

```
clients/
  _template.md                    ← Copy this to start a new client
  _example.md                     ← Filled-in example (Beacon Analytics)
  README.md                       ← This file
  [client-name]/
    context.md                    ← Client context (loaded with every agent)
    README.md                     ← Start here — folder map + task routing
    setup-checklist.md            ← 4-phase onboarding checklist
    status.md                     ← Weekly dashboard across all agents
    strategist/                   ← Goals, growth model, competitive landscape, decisions log
      goals.md                   ← 90-day OKRs + North Star metric
      growth-model.md            ← Funnel math, unit economics, channel economics
      competitive-landscape.md   ← Strategic competitive overview
      decisions-log.md           ← Strategic decision log
    growth-pm/                    ← Experiment tracker, briefs
      experiment-tracker.md
      decision-log.md
      briefs/
    researcher/                   ← ICP profiles, insight bank, research briefs
      icp-profiles.md            ← Complete ICP segments (from icp-template.md)
      insight-bank.md
      research-briefs/
    content-writer/               ← Ad copy, landing pages, email, copy bank, messaging matrix, brand voice
      brand-voice.md             ← Tone, voice, language rules (from brand-voice-template.md)
      messaging-matrix.md        ← ICP × pain × value prop × proof (from messaging-matrix-template.md)
      copy-bank.md
      ad-copy/
      landing-pages/
      email/
    seo/                          ← Keyword universe, keyword research, content briefs
      keyword-universe.md
      keyword-research/
      content-briefs/
    designer/                     ← Assets, brand kit
      brand-kit.md               ← Colors, fonts, logos, imagery (from brand-kit-template.md)
      assets/
    cro/                          ← Hypotheses, LP audits, hypothesis log
      cro-hypothesis-log.md
      hypotheses/
      lp-audits/
    paid/                         ← Media plan, creative testing
      media-plan.md
      creative-testing/
    analytics/                    ← Tracking plan
      tracking-plan.md
    crm/                          ← Email sequences
      email-sequences/
    ops/                          ← Launch checklist
      launch-checklist.md
    growth-engineer/              ← LP builds, tracking implementations
      tracking-implementations.md
      lp-builds/
    influencer-partnerships/      ← Partnership pipeline, creator files
      pipeline.md
      creators/
```

## How It Works

1. Create a folder: `clients/[client-name]/`
2. Copy `_template.md` into it as `context.md` and fill in every section
3. Create the folder structure above (or copy from an existing client)
4. Fill in `goals.md` and `growth-model.md` first — these drive everything else
5. Use `setup-checklist.md` to track your onboarding progress
6. When working on a client, Claude loads `context.md` alongside whichever agent you're using
7. All agent output goes into the client's subfolder — agent folders keep only methodology

## What Lives Where

| Location | Contains |
|---|---|
| **Client-level files** | |
| `clients/[client-name]/context.md` | Business context, ICP definitions, brand voice, channel config |
| `clients/[client-name]/README.md` | Folder map, activation order, task routing for this client |
| `clients/[client-name]/setup-checklist.md` | 4-phase onboarding checklist |
| `clients/[client-name]/status.md` | Weekly dashboard — status of all 13 agents |
| **Strategist files** | |
| `clients/[client-name]/strategist/goals.md` | 90-day OKRs, North Star metric, quarterly targets |
| `clients/[client-name]/strategist/growth-model.md` | Funnel math, unit economics, channel economics |
| `clients/[client-name]/strategist/competitive-landscape.md` | Competitor profiles, strategic positioning |
| `clients/[client-name]/strategist/decisions-log.md` | Strategic decision log |
| **Brand foundations (fill during onboarding)** | |
| `clients/[client-name]/designer/brand-kit.md` | Visual identity — colors, fonts, logos, imagery, design system refs |
| `clients/[client-name]/content-writer/brand-voice.md` | Voice & tone — personality, language rules, do/don't examples |
| `clients/[client-name]/content-writer/messaging-matrix.md` | Positioning — ICP × pain points × value props × proof × angles |
| `clients/[client-name]/researcher/icp-profiles.md` | ICP segments — demographics, psychographics, behaviors, pain points |
| **Agent work product** | |
| `clients/[client-name]/[agent]/` | All work product for that client |
| **Methodology (public repo)** | |
| `[agent-folder]/AGENT.md` | Universal methodology, skills, frameworks |
| `[agent-folder]/*.md` | Templates, playbooks, supplementary frameworks |
| `generators/` | Prompt chains that produce outputs (recipes) |
| `workflows/` | Step-by-step processes (campaign launch, etc.) |
| `docs/` | How-to guides, reference docs, frameworks |
| `[agent-folder]/example-*` | Onboarding demos (not client-specific) |

## For In-House Teams

You'll have one folder here — your company. That's it.

## For Consultants / Agencies

One folder per client. When switching clients, just tell Claude which client you're working on.

## Naming

Use lowercase, hyphens for spaces: `acme-corp/`, `fittrack/`, `dealflow/`
