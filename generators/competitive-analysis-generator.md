# Competitive Analysis Generator

> Produces a structured competitor profile using the Researcher intel framework. Covers positioning, product, growth signals, and strategic assessment.

## What You Get
- Detailed competitor profile (positioning, product, pricing, channels, strengths/weaknesses)
- Growth signals analysis (what they're investing in)
- Strategic assessment (threat level, recommended response)
- Landscape summary table comparing multiple competitors

## What You Need First
- [ ] Competitor(s) to analyze (1-5 companies)
- [ ] Your product/company context (for comparison)
- [ ] Your ICP (who you're both competing for)
- [ ] Any specific questions or concerns about these competitors

## Prompt Chain

### Step 1: Load Context
```
Load the Researcher agent: @01_growth-researcher/AGENT.md
Also reference: @01_growth-researcher/competitive-intel-template.md

Competitor(s): [List 1-5 competitors with URLs]

My company/product:
[What you do, who you serve, key differentiators, pricing model]

ICP: [Who you're both competing for]

Specific questions:
[Any specific concerns — "Are they targeting our segment?" / "How are they pricing?" / "What channels are they investing in?"]
```

### Step 2: Profile Each Competitor
```
For each competitor, build a full profile:

COMPETITOR PROFILE
──────────────────
Company:
Website:
One-line positioning: [How they describe themselves]

PRODUCT
- Core offering: [What they sell]
- Key features: [Top 3-5 features]
- Pricing model: [Free tier / Freemium / Trial / Enterprise only]
- Pricing: [Specific plans and prices if available]
- Product strengths: [What they do well]
- Product gaps: [What they're missing or weak on]

POSITIONING
- Target audience: [Who they're going after]
- Core message: [Their primary claim/value prop]
- Differentiation: [How they position vs alternatives]
- Brand voice: [Professional / Playful / Technical / Aspirational]

GROWTH SIGNALS
- Channels: [Where are they spending? Paid, organic, content, influencer, partnerships]
- Content strategy: [Blog topics, content volume, SEO plays]
- Social presence: [Platforms, follower counts, engagement quality]
- Recent moves: [Product launches, pricing changes, fundraising, hiring patterns, partnerships]
- Advertising: [Check Meta Ad Library, Google Ads transparency — what ads are they running?]

STRATEGIC ASSESSMENT
- Threat level: [High / Medium / Low]
- Primary threat: [What specifically threatens our position?]
- Their weakness we can exploit: [Where are they vulnerable?]
- Our weakness they can exploit: [Where are we vulnerable?]
- Recommended response: [Monitor / Defend / Attack / Differentiate]
```

### Step 3: Build Landscape Summary
```
If analyzing multiple competitors, produce a landscape summary table:

| Dimension | Us | Competitor A | Competitor B | Competitor C |
|---|---|---|---|---|
| Positioning | | | | |
| Primary audience | | | | |
| Pricing (entry) | | | | |
| Pricing (enterprise) | | | | |
| Key differentiator | | | | |
| Strongest channel | | | | |
| Biggest weakness | | | | |
| Threat level | — | | | |

Then answer:
1. Where do we have clear positioning advantage?
2. Where are we most vulnerable?
3. Which competitor should we watch most closely and why?
4. Is there an unoccupied position in the market we should claim?
```

### Step 4: Generate Recommendations
```
Based on the analysis, provide actionable recommendations:

1. Messaging: Should we update our positioning to differentiate from these competitors? How?
2. Product: Are there feature gaps we should flag to the product team?
3. Channels: Are competitors investing in channels we're ignoring?
4. Pricing: Is our pricing competitive? Any adjustments to consider?
5. Content: Are there content gaps (keywords, topics) competitors own that we should target?

For each recommendation:
- What to do
- Which agent should act on it
- Priority (High / Medium / Low)
- Timeline (Immediate / This quarter / Next quarter)

Route recommendations to PM for sprint planning.
```

## Example Output (Strategic Assessment)

**Competitor:** Synthesia
**Threat level:** Medium
**Primary threat:** Strong enterprise positioning and brand recognition in AI video. Their "AI avatars" feature is a differentiator we don't match.
**Their weakness:** Pricing is 5-10x higher than ours. Output quality for non-avatar content is behind. No community/creator ecosystem.
**Our weakness:** Lower brand recognition in enterprise. No avatar feature.
**Recommended response:** Differentiate on price-to-quality ratio and creator community. Don't compete on avatars — compete on creative freedom and output quality.

## Tips
- Cap at 5 competitors. More than 5 = you're tracking the market, not analyzing competitors.
- Update quarterly — or immediately when a competitor makes a major move
- File in `01_growth-researcher/competitive-intel/` and share with PM
- Use findings to fuel positioning tests (see competitive-positioning-testing skill in Paid agent)
- Monitor competitors' ad libraries monthly — their spend tells you their strategy
