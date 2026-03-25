# Mine Search Terms

> Finds wasteful spend and missing opportunities in Google Ads search term reports. Produces a CSV of recommended negatives and keyword additions with reasoning for every flag.

## Cadence
Weekly — run every Monday as part of the weekly paid review, or ad-hoc when CPA drifts > 20%.

## What You Get
- CSV with columns: Campaign, Ad Group, Keyword, Search Term, Match Type, Impressions, Clicks, Cost, Conversions, CPA, Action (Negate/Add/Watch), Reasoning
- Summary of total waste identified (spend on flagged negatives)
- List of high-potential search terms to add as keywords

## What You Need First
- [ ] Google Ads MCP connected (or exported search term report CSV)
- [ ] Client context loaded (`clients/[client-name]/context.md`)
- [ ] Active campaign names from `clients/[client-name]/paid/media-plan.md`
- [ ] Target CPA or ROAS benchmarks from media plan

## Prompt Chain

### Step 1: Pull Search Term Data

**With MCP:**
```
Query Google Ads for search term performance over the last 14 days across all active Search campaigns.

Use this GAQL query structure:
SELECT
  campaign.name,
  ad_group.name,
  ad_group_criterion.keyword.text,
  ad_group_criterion.keyword.match_type,
  search_term_view.search_term,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions,
  metrics.cost_per_conversion
FROM search_term_view
WHERE segments.date DURING LAST_14_DAYS
  AND metrics.impressions > 0
ORDER BY metrics.cost_micros DESC
```

**Without MCP:**
```
I'm pasting my search term report from Google Ads (last 14 days). Columns are:
[Paste CSV or table]
```

### Step 2: Apply Search Term Methodology

Evaluate every search term using these criteria, in this order:

**Flag as NEGATE if any of these are true:**
1. **High spend, zero conversions:** Cost > 2x target CPA and 0 conversions
2. **Irrelevant intent:** Search term has no semantic relationship to the keyword or product (e.g., keyword is "video editor" but search term is "video player download free")
3. **Wrong funnel stage:** Search term indicates research/browsing intent when campaign objective is conversion (e.g., "what is [product category]" on a conversion campaign)
4. **Competitor brand:** Search term contains a competitor brand name (unless running a competitor campaign intentionally)
5. **Negative ROI pattern:** CPA > 3x target CPA with 3+ clicks — enough data to be a pattern, not noise

**Flag as ADD if all of these are true:**
1. Conversions > 0 with CPA at or below target
2. Not already an exact-match keyword in the ad group
3. Has sufficient volume (5+ clicks in the 14-day window)

**Flag as WATCH if:**
1. New search term with < 5 clicks but relevant intent — not enough data yet
2. CPA between 1x-2x target — borderline, needs more time

**Cross-reference check:**
- Compare the search term to the keyword that triggered it. If the semantic gap is wide (search term meaning differs significantly from keyword intent), flag for negation regardless of performance — it means the match type is too broad.

### Step 3: Produce the Output

Generate a CSV with these columns:
```
Campaign | Ad Group | Keyword | Search Term | Match Type | Impressions | Clicks | Cost | Conversions | CPA | Action | Reasoning
```

Sort by:
1. NEGATE items first, sorted by Cost descending (biggest waste at top)
2. ADD items second, sorted by Conversions descending (best opportunities at top)
3. WATCH items last

### Step 4: Summarize

Provide a summary block:
```
SEARCH TERM MINING SUMMARY
───────────────────────────
Period:              [date range]
Campaigns analyzed:  [count]
Search terms reviewed: [count]
Flagged for negation:  [count] ($[total spend] waste identified)
Flagged for addition:  [count] ([total conversions] at $[avg CPA])
Flagged for watch:     [count]

Top 3 waste drivers:
1. "[search term]" — $X spent, 0 conversions, triggered by "[keyword]"
2. "[search term]" — $X spent, 0 conversions, triggered by "[keyword]"
3. "[search term]" — $X spent, 0 conversions, triggered by "[keyword]"

Top 3 opportunities:
1. "[search term]" — X conversions at $Y CPA (not yet a keyword)
2. "[search term]" — X conversions at $Y CPA (not yet a keyword)
3. "[search term]" — X conversions at $Y CPA (not yet a keyword)
```

### Step 5: Apply (MCP only, requires approval)

If MCP is connected, offer to apply negatives:
```
Ready to add [count] negative keywords. Each mutation requires your explicit approval.

Negative keywords to add:
1. Campaign: [name] → Add negative: "[term]" (exact match)
2. Campaign: [name] → Add negative: "[term]" (phrase match)
...

Approve all / Review one-by-one / Export only?
```

**Rule:** Never apply mutations without explicit approval. Always default to "Export only" if uncertain.

## Output Filing

Save outputs to:
- CSV: `clients/[client-name]/paid/ops/YYYY-MM-DD_search-term-mining.csv`
- Summary: `clients/[client-name]/paid/ops/YYYY-MM-DD_search-term-mining-summary.md`

## Quality Check

Before filing the output:
- [ ] Every flagged term has a reasoning column filled (no blank reasoning)
- [ ] No keyword marked for negation that already has conversions at/below target CPA
- [ ] Cross-reference check was applied (semantic gap between search term and keyword)
- [ ] Summary math is correct (totals match the CSV)
- [ ] Competitor brand terms are flagged correctly (negated unless intentional competitor campaign)
