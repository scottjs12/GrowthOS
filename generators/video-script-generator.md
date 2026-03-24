# Video Script Generator

> Produces 15/30/60-second video ad scripts with hook-body-CTA structure. Uses Content Writer copy + Designer storyboard methodology.

## What You Get
- Complete scripts in 15s, 30s, and 60s formats
- Hook-body-CTA structure with timing breakdowns
- Visual direction notes for each scene
- 3 variants per duration (different angles)

## What You Need First
- [ ] ICP profile (who is watching?)
- [ ] Product/service and key value prop
- [ ] Platform (TikTok / Instagram Reels / YouTube pre-roll / Meta feed)
- [ ] Style: UGC / talking head / product demo / motion graphics / mixed
- [ ] Any brand guidelines or visual constraints

## Prompt Chain

### Step 1: Load Context
```
Load the Content Writer agent: @02_content-writer/AGENT.md
Also reference the Designer agent: @04_growth-designer/AGENT.md (Video Storyboard Format section)

ICP:
[Paste ICP profile]

Product: [What it does, key features, differentiator]
Platform: [TikTok / Reels / YouTube / Meta]
Style: [UGC / talking head / product demo / motion graphics]
Duration: [15s / 30s / 60s — or all three]
```

### Step 2: Generate Hooks
```
The hook is everything. If the first 3 seconds don't stop the scroll, nothing else matters.

Generate 10 hook options across these categories:
1. Question hook — Ask something the ICP can't ignore
2. Stat hook — Lead with a surprising number
3. Contrarian hook — Challenge a common belief
4. Pain hook — Name the frustration they feel right now
5. Result hook — Lead with the outcome, not the product

For each hook:
- The spoken/text line (8 words max for 15s, 12 words max for 30/60s)
- Visual direction (what the viewer sees in the first 3 seconds)
- Why this hook works for this ICP
```

### Step 3: Write Full Scripts
```
Pick the top 3 hooks and write a complete script for each at [duration].

Script format:
SCENE | TIME | VISUAL | AUDIO/TEXT | NOTES
---|---|---|---|---
1 | 0-3s | [What viewer sees] | [What they hear/read] | [Hook — must stop scroll]
2 | 3-8s | | | [Problem/context]
3 | 8-Xs | | | [Solution/product reveal]
4 | X-end | | | [CTA — specific next step]

Rules:
- 15s script: 3 scenes max. One idea. No setup — straight to the point.
- 30s script: 4-5 scenes. Hook → problem → solution → proof → CTA.
- 60s script: 6-8 scenes. Hook → problem → agitate → solution → demo → proof → CTA → urgency.

For UGC style: Write in conversational first-person. No marketing speak. Include "ums" and natural pauses if it fits the style.
For product demo: Tight cuts, show the product doing the thing within first 5 seconds.
```

### Step 4: Review
```
Review each script:

1. Would someone stop scrolling at the hook? (Be honest.)
2. Does the product appear within the first 5 seconds? (It should for most formats.)
3. Is the CTA specific? ("Link in bio" is weak. "Tap to try free" is better.)
4. Can this be filmed/produced in one day? (If not, simplify.)
5. Does it follow platform conventions? (Vertical, native feel, not polished-commercial)

Rewrite any script that feels like a TV commercial instead of native content.
```

## Example Output (30s — Pain Hook — UGC Style)

| Scene | Time | Visual | Audio | Notes |
|---|---|---|---|---|
| 1 | 0-3s | Creator looking frustrated at laptop | "I used to spend 6 hours editing one video." | Hook — pain |
| 2 | 3-8s | Screen recording of complex editing timeline | "Timeline hell. Color grading. Export. Re-export." | Agitate |
| 3 | 8-18s | Screen recording of product — type prompt, video generates | "Then I found [Product]. You type what you want and it just... makes it." | Solution + demo |
| 4 | 18-25s | Side-by-side: old workflow vs new | "Same quality. Fraction of the time." | Proof |
| 5 | 25-30s | Creator smiling, product logo | "Link in bio. Free to start." | CTA |

## Tips
- Film 3 hooks for every script and test them separately — the hook is the highest-leverage variable
- For paid: Paid agent structures the A/B test. Test hooks first, then bodies, then CTAs.
- For organic: Post all 3 variants over 1 week. Let engagement data pick the winner.
- Save winning hooks in `02_content-writer/copy-bank.md` under video hooks
