# Campaign Brief Generator

> Produces a complete campaign brief ready for PM to route to agents. Uses PM methodology + cross-agent coordination.

## What You Get
- Full campaign brief with objective, audience, channels, creative direction
- Agent assignment table (who does what, by when)
- Success criteria and kill thresholds
- Dependencies and approval checklist

## What You Need First
- [ ] Campaign goal (acquisition, activation, retention, expansion, awareness)
- [ ] Target ICP segment
- [ ] Budget (or budget range)
- [ ] Timeline (launch date, campaign duration)
- [ ] Channels (paid, organic, email, influencer, or TBD)
- [ ] Any creative assets or messaging that already exist

## Prompt Chain

### Step 1: Load Context
```
Load the PM agent: @00_growth-pm/AGENT.md
Also reference: @00_growth-pm/campaign-brief-template.md

Campaign goal: [What are we trying to achieve? Be specific — not "grow" but "acquire 500 signups at <$15 CPA"]
ICP segment: [Which ICP is this for? Paste profile or describe]
Budget: [$X total or $/month]
Timeline: Launch by [date], run for [duration]
Channels: [Paid Meta / Paid Google / Email / Organic social / Influencer / All — or TBD]
Existing assets: [Any copy, creative, landing pages already built — or starting from scratch]
```

### Step 2: Define the Strategy
```
Before writing the brief, define the campaign strategy:

1. What is the single measurable objective? (One number. Not three.)
2. What is the primary conversion event? (Signup / Purchase / Demo request / Install)
3. What is the campaign hypothesis? (We believe [channel + message + audience] will achieve [objective] because [reason])
4. What are the kill thresholds? (At what point do we pause and reassess?)
5. What does success look like at 2 weeks? At 4 weeks? At end of campaign?

Present the strategy as a concise summary — this becomes the brief header.
```

### Step 3: Write the Brief
```
Now produce the full campaign brief:

CAMPAIGN BRIEF
──────────────
Campaign name:
Objective:         [Single measurable goal]
Hypothesis:        [We believe X because Y]
ICP segment:       [Who — reference ICP profile]
Budget:            [Total and daily/weekly breakdown]
Timeline:          [Start date → end date]
Primary metric:    [The one number that defines success]
Kill threshold:    [Pause if: CPA exceeds $X / conversion rate drops below Y%]

CHANNEL STRATEGY
Channel 1: [Platform — objective — budget allocation — format]
Channel 2: [Platform — objective — budget allocation — format]

CREATIVE DIRECTION
Message angle:     [The core message — pain/identity/proof/curiosity]
Key claim:         [The one thing we want the audience to believe]
Tone:              [Reference brand voice]
Visual direction:  [High-level — what should the creative feel like?]

AGENT ASSIGNMENTS
| Agent | Deliverable | Deadline | Dependencies |
|---|---|---|---|
| Researcher | ICP validation brief | [Date] | None |
| Content Writer | Ad copy (3 angles × 3 variants) | [Date] | Researcher brief |
| Designer | Creative assets (3 formats) | [Date] | Copy approved |
| Paid | Media plan + campaign build | [Date] | Creative assets |
| Ops | Trafficking QA + tracking setup | [Date] | Media plan |
| Analytics | Dashboard + event tracking | [Date] | Campaign live |
| CRO | LP audit (if LP involved) | [Date] | LP URL |

DEPENDENCIES
- [What must happen before launch]
- [External dependencies — approvals, assets, access]

APPROVALS
- [ ] Scott approval required: [Yes/No — when]
- [ ] Brief reviewed by PM
- [ ] Budget confirmed
```

### Step 4: Review
```
Review the brief against PM quality criteria:

1. Is the goal a single measurable outcome?
2. Is the deadline realistic — have you checked agent capacity?
3. Are all inputs attached or linked?
4. Are kill thresholds defined (not just success criteria)?
5. Is every agent assignment clear on deliverable and deadline?
6. Are dependencies mapped — does the sequence make sense?

Fix any gaps. Then route to agents per the Handoff Confirmation Protocol:
- Each agent confirms receipt within 24h
- Each agent confirms start date
- Each agent notifies PM on completion
```

## Example Output (Brief Header)

**Campaign name:** Q2 Creator Acquisition — Meta + TikTok
**Objective:** 1,000 new signups at <$12 CPA in 30 days
**Hypothesis:** We believe short-form UGC video ads targeting creator communities on Meta and TikTok will acquire signups at target CPA because our best-performing cohorts have been creator-adjacent audiences, and UGC consistently outperforms studio creative on CTR.
**Kill threshold:** Pause if CPA exceeds $18 for 5 consecutive days or total spend reaches 50% of budget with <300 signups.

## Tips
- One brief per campaign. Don't bundle multiple campaigns into one brief.
- File in `00_shared/briefs/` and route to all assigned agents
- The brief is a living document — update it if strategy changes mid-campaign
- Use the campaign-launch workflow (@workflows/campaign-launch.md) for the full agent chain
