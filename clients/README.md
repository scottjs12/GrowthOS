# Client Context Files

Each `.md` file in this directory represents one client's context — the business-specific details that personalize every GrowthOS agent.

## How It Works

1. Copy `_template.md` to `[client-name].md`
2. Fill in every section
3. When working on that client, Claude loads the context file alongside whichever agent you're using

## For In-House Teams

You'll have one file here — your company. That's it.

## For Consultants / Agencies

One file per client. When switching clients, just tell Claude which client you're working on.

## File Naming

Use lowercase, hyphens for spaces: `acme-corp.md`, `fittrack.md`, `dealflow.md`
