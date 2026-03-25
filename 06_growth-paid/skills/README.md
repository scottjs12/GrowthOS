# Paid Ops Skills

> Operational automation skills for the Paid agent. Each skill is a structured workflow that queries ad platform data (via MCP), applies evaluation criteria, and produces actionable outputs.

## Prerequisites

These skills assume a Google Ads MCP server is connected to your Claude Code session. Without it, the skills still work as manual checklists — you paste data instead of querying live.

## Available Skills

| Skill | What It Does | Cadence |
|---|---|---|
| [mine-search-terms.md](mine-search-terms.md) | Finds wasteful/missing search terms, produces negatives + additions CSV | Weekly |
| [budget-optimizer.md](budget-optimizer.md) | Analyzes spend vs. performance, recommends reallocations | Weekly |
| [weekly-paid-review.md](weekly-paid-review.md) | Full account health check with structured diagnosis | Weekly (Monday) |

## How They Work

1. **With MCP connected:** Claude queries the ad platform directly using GAQL, applies the skill's evaluation criteria, and produces structured output (CSV, recommendations, or mutation instructions)
2. **Without MCP:** You paste exported data from the platform. The skill still applies the same evaluation logic — you just provide the data manually.

## Output

All skill outputs file to `clients/[client-name]/paid/ops/` with date-prefixed filenames per the filing convention.
