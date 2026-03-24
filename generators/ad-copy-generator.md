# Ad Copy Generator

> Produces 3-5 ad copy variants per angle across multiple formats (Meta feed, Stories, Google Search, YouTube pre-roll). Uses Content Writer methodology + Researcher ICP data.

## What You Get
- 3-5 headline/body/CTA variants per creative angle
- Formatted for platform character limits
- Variants organized by angle (pain, identity, proof, curiosity, aspirational)

## What You Need First
- [ ] ICP profile (from `clients/[client-name]/researcher/icp-profiles.md` or your own)
- [ ] Product/service description and key value props
- [ ] Target platform(s) and format(s)
- [ ] Any existing copy performance data (optional — helps avoid failed angles)

## Prompt Chain

### Step 1: Load Context
```
Load the Content Writer agent: @02_content-writer/AGENT.md

Here is my ICP:
[Paste ICP profile or describe your target audience — demographics, psychographics, pain points, language they use]

Here is my product:
[Product name, what it does, key value props, pricing if relevant]

Target platforms: [Meta feed / Stories / Google Search / YouTube pre-roll]
```

### Step 2: Generate Angles
```
Using the Ad Copy Framework from your AGENT.md, generate 5 creative angles for this product and ICP:

1. Pain angle — lead with the problem the ICP feels daily
2. Identity angle — make the product a reflection of who the ICP is or wants to be
3. Social proof angle — lead with evidence (numbers, testimonials, results)
4. Curiosity angle — open a loop that can only be closed by clicking
5. Aspirational angle — paint the after-state the ICP wants

For each angle, give me:
- The core message in one sentence
- Why this angle works for this specific ICP
- The emotional trigger it activates
```

### Step 3: Write Variants
```
Now write 3 ad copy variants for each of the top 3 angles (9 variants total).

For each variant, format for [platform]:

Meta Feed:
- Primary text (125 chars above fold, 250 max)
- Headline (40 chars)
- Description (30 chars)
- CTA button: [Shop Now / Learn More / Sign Up / Download]

Stories/Reels:
- Hook text (first 3 seconds — 8 words max)
- Body text overlay (15 words max)
- CTA text (5 words max)

Google Search:
- Headline 1 (30 chars)
- Headline 2 (30 chars)
- Headline 3 (30 chars)
- Description 1 (90 chars)
- Description 2 (90 chars)

Follow the Hierarchy of Copy: Hook → Value prop → Proof → CTA. Every word earns its place.
```

### Step 4: Review & Rank
```
Review all 9 variants against the Copy Editing Checklist:
- Does the hook stop the scroll?
- Does every sentence earn its place?
- Is the CTA specific?
- No jargon the ICP wouldn't use?

Rank the variants by predicted performance (best to worst) and explain your reasoning. Flag which variant you'd test first and why.
```

## Example Output (Meta Feed — Pain Angle)

**Primary text:** You're spending 4 hours a week on video editing that AI can do in 4 minutes. Your competitors already made the switch. The creative bottleneck isn't talent — it's tools.

**Headline:** Edit Videos 60x Faster

**Description:** AI-powered. No learning curve.

**CTA:** Try Free

## Tips
- Run Step 2 again with different ICP segments to generate segment-specific angles
- Feed winning ad copy back into `clients/[client-name]/content-writer/copy-bank.md` for future reference
- After running ads, use the Creative Testing Protocol from Paid agent to structure your A/B test
