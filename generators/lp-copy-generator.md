# Landing Page Copy Generator

> Produces full landing page copy using one of 5 proven LP structures. Uses Content Writer LP frameworks + CRO audit principles.

## What You Get
- Complete LP copy from headline to final CTA
- Structured in one of 5 proven architectures (PAS, Value-First, Social Proof, Curiosity, Comparison)
- Section-by-section copy ready for Designer handoff

## What You Need First
- [ ] ICP profile (who is landing on this page?)
- [ ] Traffic source (paid ad? organic? email? — determines message match)
- [ ] Product/offer details and pricing
- [ ] Any existing conversion data or LP audit findings (optional)
- [ ] Social proof assets (testimonials, stats, logos, case studies)

## Prompt Chain

### Step 1: Load Context
```
Load the Content Writer agent: @02_content-writer/AGENT.md
Also reference: @02_content-writer/lp-copy-structures.md

Here is my ICP:
[Paste ICP profile]

Here is my product/offer:
[What you're selling, key features, pricing, differentiation]

Traffic source: [Where visitors come from — this determines the opening message match]

Available social proof:
[Testimonials, customer count, results stats, logos, case studies — list what you have]
```

### Step 2: Choose Structure
```
Based on my ICP, product, and traffic source, recommend which of the 5 LP structures from lp-copy-structures.md fits best:

1. PAS (Problem-Agitate-Solution) — best when the ICP has a clear, felt pain
2. Value-First — best when the product benefit is immediately compelling
3. Social Proof-Led — best when trust is the main barrier
4. Curiosity/Discovery — best when the product is novel or category-creating
5. Comparison/Alternative — best when visitors are evaluating competitors

Recommend one structure and explain why it fits. If two structures could work, give me both with trade-offs.
```

### Step 3: Write Full LP Copy
```
Using the [chosen structure], write the complete LP copy section by section.

For each section, provide:
- Section purpose (why this section exists here)
- Headline (H2)
- Body copy
- Supporting elements (bullet points, stats, testimonials to place here)

Sections to include:
1. Hero (above the fold) — headline, subheadline, CTA, hero image direction
2. Problem/context section
3. Solution/product section
4. Features/benefits (3-5, benefit-led not feature-led)
5. Social proof section (testimonials, stats, logos)
6. How it works (3 steps max)
7. FAQ (anticipate 4-5 objections)
8. Final CTA section (restate the value prop, create urgency)

Follow the Hierarchy of Copy throughout. The page should flow as one argument, not disconnected sections.
```

### Step 4: CRO Review
```
Now review this LP copy against the CRO LP Audit Checklist from @05_cro/AGENT.md:

- Does the headline pass the 10-second test? (Can a visitor understand the value prop in 10 seconds?)
- Is the CTA visible above the fold?
- Is social proof specific and believable?
- Are there friction points (too many form fields, unclear next step)?
- Does the mobile above-the-fold experience work?

Flag any issues and rewrite those sections.
```

## Example Output (Hero Section — PAS Structure)

**Headline:** Stop Losing Deals to Slow Video Turnaround

**Subheadline:** Create professional marketing videos in minutes, not weeks. No editing skills required.

**CTA:** Start Creating Free →

**Hero image direction:** Split screen — left side shows a frustrated marketer staring at a timeline editor, right side shows the same person smiling at a finished video with a "Done" badge.

## Tips
- Always match the LP headline to the ad that drives traffic (message match = higher conversion)
- Run the completed copy through the CRO hypothesis format to identify your first A/B test
- Hand off to Designer with the section structure intact — don't let design rearrange the argument flow
