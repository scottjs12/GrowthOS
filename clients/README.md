# Client Context & Output Files

Each subfolder in this directory represents one client. All work product lives under the client folder, not in agent folders.

## Folder Structure

```
clients/
  _template.md              ← Copy this to start a new client
  [client-name]/
    context.md              ← Client context (loaded with every agent)
    researcher/             ← ICP profiles, insight bank, research briefs
    content-writer/         ← Ad copy, landing pages, email, copy bank, messaging matrix
    cro/                    ← Hypotheses, LP audits, hypothesis log
    paid/                   ← Media plan, creative testing
    analytics/              ← Tracking plan
    designer/               ← Assets
    crm/                    ← Email sequences
    ops/                    ← Launch checklist
```

## How It Works

1. Create a folder: `clients/[client-name]/`
2. Copy `_template.md` into it as `context.md` and fill in every section
3. Create output subdirectories (see structure above) or use the setup command
4. When working on a client, Claude loads `context.md` alongside whichever agent you're using
5. All agent output goes into the client's subfolder — agent folders keep only methodology

## What Lives Where

| Location | Contains |
|---|---|
| `clients/[client-name]/context.md` | Business context, ICP definitions, brand voice, channel config |
| `clients/[client-name]/[agent]/` | All work product for that client |
| `[agent-folder]/AGENT.md` | Universal methodology, skills, frameworks |
| `[agent-folder]/*.md` | Templates, playbooks, supplementary frameworks |
| `[agent-folder]/example-*` | Onboarding demos (not client-specific) |

## For In-House Teams

You'll have one folder here — your company. That's it.

## For Consultants / Agencies

One folder per client. When switching clients, just tell Claude which client you're working on.

## Naming

Use lowercase, hyphens for spaces: `acme-corp/`, `fittrack/`, `dealflow/`
