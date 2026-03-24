# Cold Outbound Email Generator

> Produces a 5-touch cold email sequence using the OPPA framework (Observation → Problem → Proof → Ask). Uses Content Writer cold email methodology.

## What You Get
- 5 cold emails over a 14-day cadence
- OPPA-structured messaging that doesn't sound like spam
- Subject lines optimized for cold open rates
- Follow-up logic and breakup email

## What You Need First
- [ ] ICP profile (who are you reaching out to?)
- [ ] Your product/service and the specific problem it solves for this ICP
- [ ] Proof points (case studies, metrics, recognizable logos)
- [ ] Your ask (demo, call, trial, intro)
- [ ] Sender identity (who is the email from — name, title, company)

## Prompt Chain

### Step 1: Load Context
```
Load the Content Writer agent: @02_content-writer/AGENT.md (Cold Outbound Email Framework section)

ICP:
[Job title, company type, industry, company size]
[Their likely pain points and priorities]
[Language they use to describe their problems]

My product/service:
[What you do, who you do it for, key differentiator]

Proof:
[Best case study, key metric, notable customers]

The ask: [15-min call / demo / free trial / intro to decision-maker]
Sender: [Name, title, company]
```

### Step 2: Research the Angle
```
Before writing, identify the strongest cold email angle:

1. What is the most specific, observable problem this ICP faces?
   (Not "growing revenue" — something like "spending 10+ hours/week on manual video editing")

2. What is the trigger event that makes this problem urgent right now?
   (Hiring a role, launching a product, expanding to a new market, competitor move)

3. What proof point is most relevant to this ICP segment?
   (Same industry, same company size, same use case)

Give me the angle in one sentence: "I noticed [observation] → which means [problem] → we helped [proof] → would you be open to [ask]?"
```

### Step 3: Write the 5-Email Sequence
```
Write 5 cold emails following the OPPA framework. Cadence: Day 1, Day 3, Day 7, Day 10, Day 14.

Rules:
- Subject lines: 3-5 words, lowercase, no punctuation, no emoji
- Body: Under 100 words per email. Shorter is better.
- One CTA per email. Make the ask small (reply, not "buy").
- No "I hope this finds you well" or "I wanted to reach out"
- No HTML formatting, no images, no links in email 1 (deliverability)
- Write like a human, not a marketer

Email 1 (Day 1) — The Opener:
- OPPA: Observation about their business → Problem it implies → Proof you can help → Soft ask
- Shortest email in the sequence

Email 2 (Day 3) — The Value Add:
- Share something useful (insight, stat, resource) without asking for anything
- Builds credibility, not pressure

Email 3 (Day 7) — The Case Study:
- Lead with a result: "[Similar company] was facing [same problem]. Here's what happened."
- End with the ask again

Email 4 (Day 10) — The Different Angle:
- Try a different pain point or benefit
- Acknowledge they're busy — don't guilt-trip

Email 5 (Day 14) — The Breakup:
- "Closing the loop" energy. No pressure.
- Give them an easy out AND an easy yes
- Often gets the highest reply rate
```

### Step 4: Review
```
Review the sequence against cold email best practices:

1. Would you reply to Email 1 if it landed in your inbox?
2. Is every email under 100 words?
3. Are subject lines 3-5 words?
4. Does each email stand alone (not "per my last email")?
5. Is the ask small enough that saying yes is easy?
6. Does the breakup email actually let them go?

Rewrite any email that feels like marketing instead of a human conversation.
```

## Example Output (Email 1 — The Opener)

**Subject:** your video turnaround

**Body:**
[First name],

Noticed [Company] just launched a new product line — congrats. Guessing the marketing team is buried in video requests right now.

We helped [Similar Company] cut their video production time from 2 weeks to 2 hours per asset. They shipped 40 videos last quarter with the same team.

Worth a 15-minute look?

[Sender name]

## Tips
- Personalize Email 1 with a real observation (check their LinkedIn, company blog, recent news)
- Track reply rates per email — if Email 1 gets <5% reply rate after 100 sends, rewrite the angle
- Never send more than 50 cold emails/day per mailbox (deliverability)
- This framework is for cold outbound only — lifecycle emails use a completely different approach (see email-sequence-generator.md)
