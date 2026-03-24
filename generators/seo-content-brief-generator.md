# SEO Content Brief Generator

> Produces a complete SEO content brief ready for a writer to execute. Uses SEO agent keyword methodology + Researcher ICP data.

## What You Get
- Full content brief with target keyword, outline, competitor analysis
- H2/H3 structure with content guidance per section
- Internal linking targets and CTA placement
- AI search (AEO) optimization angle

## What You Need First
- [ ] Target keyword or topic area
- [ ] ICP profile (who will read this content?)
- [ ] Your website URL (for internal linking)
- [ ] Product/service context (for CTA relevance)
- [ ] Competitor URLs ranking for this keyword (optional — can research in prompt)

## Prompt Chain

### Step 1: Load Context
```
Load the SEO agent: @03_seo/AGENT.md
Also reference: @03_seo/content-briefs/content-brief-template.md

Target keyword or topic: [Your keyword or topic area]
Website: [Your URL]
ICP:
[Paste ICP profile or describe who will read this]

Product/service: [What you sell — for CTA relevance]
```

### Step 2: Keyword Validation
```
Before writing the brief, validate the keyword:

1. Confirm search intent: Is this informational, commercial, transactional, or navigational?
2. Assess keyword difficulty: Can we realistically rank for this? (Consider domain authority)
3. Identify 3-5 secondary keywords that should appear naturally in the content
4. Check: Is this keyword already targeted by an existing page? (Avoid cannibalization)

Use the Keyword Research Framework from SEO AGENT.md. Present as:

Target keyword: [keyword]
Monthly volume: [estimate]
Difficulty: [Low / Medium / High]
Intent: [Informational / Commercial / Transactional]
Secondary keywords: [list]
Cannibalization risk: [Yes/No — which existing page?]
Recommendation: [Proceed / Adjust keyword / Merge with existing page]
```

### Step 3: Competitor Analysis
```
Analyze the top 3-5 pages currently ranking for this keyword:

For each competitor page:
- URL
- Word count
- H2/H3 structure (main sections they cover)
- Strengths (what they do well)
- Gaps (what they miss that we can cover better)

Then identify:
- The minimum word count to be competitive
- Sections every competitor covers (table stakes — we must include)
- Sections NO competitor covers (our differentiation opportunity)
- The angle that would make our piece the definitive resource
```

### Step 4: Write the Brief
```
Now produce the full SEO content brief:

SEO CONTENT BRIEF
─────────────────
Target keyword:
Secondary keywords:
Search intent:
Target word count:
Recommended title tag: [50-60 chars, keyword near front]
Meta description: [150-160 chars, includes keyword, includes CTA]

Outline:
  H1: [Main headline — keyword present]
  H2: [Section 1]
    H3: [Subsection — include secondary keyword if natural]
  H2: [Section 2]
    H3: [Subsection]
  [Continue for all sections]

For each H2 section, provide:
- Content guidance (what to cover, what angle to take)
- Key points to include
- Any data/stats to reference
- Internal links to include in this section

Competitor URLs to beat: [URLs + specific gaps to exploit]
Internal links to include: [3-5 relevant pages on our site]
CTA placement: [Where in the article and what the CTA should be]

AI search angle: [How to structure this content so AI engines can parse and cite it — direct answer sentences, structured data, FAQ schema]
```

### Step 5: Review
```
Review the brief against SEO quality criteria:

1. Does the outline have more depth than current top competitors?
2. Is the keyword naturally present in H1 and at least 2 H2s?
3. Are internal links identified and relevant?
4. Is the word count based on competitor analysis (not arbitrary)?
5. Is there an AI search angle that positions us for citation?
6. Would a freelance writer be able to execute this brief without asking questions?

Fix any gaps.
```

## Example Output (Brief Excerpt)

**Target keyword:** AI video editing tools
**Secondary keywords:** best AI video editor, AI video generation, automated video editing
**Intent:** Commercial
**Word count:** 2,500-3,000

**H1:** The Best AI Video Editing Tools in 2026 (Tested and Compared)

**H2: What Makes an AI Video Editor Worth Using**
- Content: Define evaluation criteria before reviewing tools. Establishes authority.
- Key points: Speed, output quality, ease of use, pricing, integration with existing workflows
- AI angle: Open with a direct definition sentence for AI parsing

**H2: The Top 7 AI Video Editing Tools**
- Content: Individual reviews. Our product gets an honest review alongside competitors.
- For each tool: What it does best, pricing, limitations, who it's for
- Internal link: Link to our product page from our review section

## Tips
- Hand the completed brief to Content Writer (via PM) — SEO writes the brief, Content Writer writes the content
- SEO reviews the draft for keyword placement and structure before publishing
- After publishing, add the page to `03_seo/rank-tracker.md` and monitor for 90 days
- Update the content every 6 months if ranking — freshness is a ranking signal
