# Email Sequence Generator

> Produces a complete 5-email lifecycle sequence (onboarding, win-back, milestone, or expansion). Uses CRM methodology + Content Writer copy standards.

## What You Get
- 5 emails with subject lines, preview text, body copy, and CTAs
- Event triggers and send timing for each email
- Branching logic (what happens if they engage vs don't)
- Exit conditions and suppression rules

## What You Need First
- [ ] Sequence type: Onboarding / Win-back / Milestone / Expansion
- [ ] ICP profile (who receives this sequence?)
- [ ] Product activation event (what does "activated" mean for your product?)
- [ ] Brand voice guidelines (tone, personality)
- [ ] Key milestones or features to highlight

## Prompt Chain

### Step 1: Load Context
```
Load the CRM agent: @08_growth-crm/AGENT.md
Also reference: @08_growth-crm/email-sequences-playbook.md

Sequence type: [Onboarding / Win-back / Milestone / Expansion]

ICP:
[Paste ICP profile or describe the audience segment]

Product: [What it does, key features]
Activation event: [The action that means a user "got it" — e.g., created first video, invited a teammate]
Brand voice: [Professional / Casual / Playful / Technical — with any specific notes]
```

### Step 2: Map the Sequence
```
Before writing copy, map the sequence architecture:

For each of the 5 emails, define:
1. Trigger event (what causes this email to send)
2. Send timing (delay from trigger or previous email)
3. Goal (what action do we want the reader to take?)
4. Branch: What happens if they take the action vs. don't?
5. Exit condition (when does the user leave this sequence?)

Also define:
- Suppression rules (who should NOT receive this sequence?)
- Overlap rules (what other sequences conflict with this one?)

Present as a visual flow: Email 1 → [action/no action] → Email 2 → ...
```

### Step 3: Write the Emails
```
Now write all 5 emails. For each email:

Subject line: [50 chars max — specific, not clever. 2 variants for A/B testing]
Preview text: [90 chars — extends the subject line, doesn't repeat it]

Body:
- Opening line (personal, contextual — reference their behavior or milestone)
- Value section (what they should do next and why it matters)
- CTA (single, specific action — button text included)
- Sign-off (human name, not "The [Company] Team")

Character count target: 150-200 words per email. Shorter is better. Every sentence earns its place.

Follow the Email Copy Standards from Content Writer AGENT.md:
- Subject line earns the open
- First line earns the read
- Body earns the click
- Never more than one CTA per email
```

### Step 4: Review
```
Review the complete sequence:

1. Does each email have a single, clear purpose?
2. Does the sequence escalate in urgency appropriately?
3. Are subject lines specific (not generic "Welcome!" or "We miss you")?
4. Would you open and read these emails yourself?
5. Are exit conditions and suppression rules defined?
6. Is there a clear handoff point if the sequence fails (e.g., after 5 unanswered emails, route to a different segment)?

Rewrite any email that fails these checks.
```

## Example Output (Onboarding Email 1)

**Subject line A:** Your first [product] project starts here
**Subject line B:** One thing to try in [product] today

**Preview text:** Most users who do this in the first 24 hours stick around.

**Body:**
Hey [first name],

You signed up for [product] — nice. Here's the one thing that'll make it click:

[Create your first video / Build your first dashboard / Import your first dataset].

Takes about 3 minutes. Users who do this in the first day are 4x more likely to become weekly users.

→ [Start your first project]

If you hit a wall, reply to this email. A human reads it.

[Sender name]
[Title]

**Trigger:** Account created
**Send timing:** 1 hour after signup
**Branch:** If they complete the action → skip to Email 3 (milestone). If not → Email 2 at +24h.

## Tips
- Always A/B test subject lines. Minimum 1,000 sends before calling a winner.
- Review sequence performance monthly — kill any email with <10% open rate after 1,000+ sends
- Route ESP setup (triggers, branching, suppression) to Ops. CRM owns strategy, Ops owns plumbing.
