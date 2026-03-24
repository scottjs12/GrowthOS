# Weekly Ops Runbook

> Everything you do each week to keep the growth engine running. Timebox each block — the goal is consistency, not perfection.

---

## Monday — Plan (1 hour)

### Review last week (20 min)
- [ ] Check ad dashboard: spend, CPA, CTR, conversions by campaign
  - Kill anything with CTR < 1% after 48+ hours
  - Note top performer to scale
- [ ] Check email dashboard: open rates, click rates, unsubscribes
  - Flag any email with open rate < 20% for subject line test
- [ ] Check landing page conversion rates
  - Flag any page converting < 5% for review
- [ ] Glance at social: any post get unusual reach? Note what worked.

### Plan this week (20 min)
- [ ] Check industry calendar: any relevant events, announcements, or seasonality this week?
- [ ] Decide: are you launching anything new this week? (new ad variant, new email test, new landing page)
  - Rule: max 1 new thing per week
- [ ] Write down 3 priorities for the week:
  1. _______________
  2. _______________
  3. _______________

### Quick actions (20 min)
- [ ] Adjust ad budgets based on last week's performance (+25% on winners, pause losers)
- [ ] Reply to any comments/DMs from the weekend on social
- [ ] Check ESP for any delivery issues or bounces
- [ ] Check lead queue — any MQLs waiting for routing or follow-up?

---

## Tuesday — Create (2 hours)

This is your production day. Batch everything.

### Ad creative (if refreshing — every 2-3 weeks)
- [ ] Pull the next ad brief from the brief library
- [ ] Create 2 new ad variants (1 image + 1 video or 2 images)
- [ ] Write 2-3 copy variants
- [ ] Upload to ad platform as new ads within existing campaign
- [ ] Pause the oldest/worst-performing ads to keep the set fresh

### Social content (weekly)
- [ ] Batch-produce 3-5 posts/videos in one session
  - Shoot vertical (9:16) for short-form video
  - Get hook, value, CTA in each piece
- [ ] Write captions for each post
- [ ] Create 1 carousel or static post (if running Instagram/LinkedIn)
- [ ] Schedule everything in social scheduler for the week

### Email (only if something needs attention)
- [ ] If an email is underperforming: draft a new subject line, set up A/B test in ESP
- [ ] If new data properties are available: update templates with real merge tags

---

## Wednesday — Off

No growth tasks. Focus on product, client work, or rest. The system runs itself mid-week.

Exception: reactive posts if something relevant breaks in your client's industry.

---

## Thursday — Check-in (30 min)

Quick mid-week pulse check. No big decisions.

- [ ] Check ad performance: any new ads from Tuesday getting traction?
- [ ] Check email delivery: any issues with this week's sends?
- [ ] Check social: any post taking off? Consider boosting it with $10-20 paid spend.
- [ ] Check lead routing: any MQLs stuck without assignment?

---

## Friday — Review + Prep (1 hour)

### Performance snapshot (30 min)

Fill in this week's numbers:

```
WEEKLY SNAPSHOT
───────────────
Week of: [YYYY-MM-DD]

| Metric               | This Week | Last Week | Trend |
|───────────────────────|───────────|───────────|───────|
| Ad spend              | $         | $         |       |
| Leads/signups (paid)  |           |           |       |
| CPA                   | $         | $         |       |
| Leads/signups (organic)|          |           |       |
| Activation rate       | %         | %         |       |
| Landing page CVR      | %         | %         |       |
| Email open rate (avg) | %         | %         |       |
| Social followers      |           |           |       |
| Top social post reach |           |           |       |
| MQLs generated        |           |           |       |
| SQLs generated        |           |           |       |
```

Log this in `09_growth-ops/performance/week-YYYY-MM-DD.csv` (even a rough version is better than nothing).

### Decisions (15 min)
- [ ] What's working? Do more of it next week.
- [ ] What's not working? Kill it or change it next week.
- [ ] Is it time to: launch a new ICP? Add a channel? Test a new page?
  - Only expand when current campaigns are stable and performing.

### Weekend prep (15 min)
- [ ] If relevant events this weekend: prep 2-3 reactive post templates with blanks
- [ ] Schedule any weekend social posts that aren't reactive
- [ ] Confirm all automations are running (spot-check one ESP workflow, one ad campaign)

---

## Monthly (First Monday of the month — 2 hours)

Once a month, zoom out.

### Full performance review (1 hour)
- [ ] Pull month-over-month numbers for all channels
- [ ] Calculate: total spend, total leads, blended CPA, activation rate
- [ ] Identify best-performing: ad, landing page, email, social post
- [ ] Identify worst-performing of each — decide: fix or kill
- [ ] Review lead pipeline: MQL → SQL conversion rate, average speed-to-lead, SLA compliance

### Strategy check (30 min)
- [ ] Are you still focused on the right ICP?
- [ ] Is your best channel getting the most budget?
- [ ] Are there new channels or angles worth testing?
- [ ] Review the seasonal/industry calendar — any tentpole events coming next month?
- [ ] Review lead scoring model — is the threshold still producing quality SQLs?

### Content refresh (30 min)
- [ ] Rotate ad creative if older than 3 weeks
- [ ] Review email sequences — any tweaks based on data?
- [ ] Plan next month's social content themes
- [ ] Update any ops docs that are outdated

---

## Time Budget Summary

| Day | Task | Time |
|---|---|---|
| Monday | Plan + review + quick actions | 1 hour |
| Tuesday | Content production + ad refresh | 2 hours |
| Wednesday | Off (unless reactive) | 0 |
| Thursday | Mid-week check-in | 30 min |
| Friday | Performance review + weekend prep | 1 hour |
| **Weekly total** | | **~4.5 hours** |
| Monthly (1st Monday) | Deep review + strategy | +2 hours |

---

## Automation Checklist

Things that should NOT require your weekly time once set up:

- [ ] **Onboarding emails** — triggered automatically on signup
- [ ] **Re-engagement emails** — triggered automatically on inactivity
- [ ] **Lifecycle emails** — triggered automatically on behavioral events
- [ ] **Lead scoring** — calculated automatically on new data
- [ ] **Lead routing** — assigned automatically on MQL threshold
- [ ] **Landing pages** — deployed, no maintenance unless A/B testing
- [ ] **Ad delivery** — runs continuously, you just adjust budget/creative
- [ ] **Social scheduling** — batch Tuesday, auto-posts rest of week

The only things that require real-time attention:
- Reactive social posts (industry news, trending moments)
- Ad performance decisions (kill/scale)
- Creative refresh (every 2-3 weeks)
- Lead routing exceptions (manual override when automation can't decide)

---

## Decision Shortcuts

To avoid overthinking, use these rules:

| Situation | Rule |
|---|---|
| Ad CTR < 1% after 48 hours | Kill it |
| Ad CTR > 2% | Increase budget 25% |
| Landing page CVR < 5% | Test new headline |
| Landing page CVR > 10% | Scale traffic to it |
| Email open rate < 20% | Test new subject line |
| Email click rate < 2% | Test new CTA or body copy |
| Social post gets 2x normal reach | Boost with $10-20 paid |
| MQL not contacted in 4 hours | Auto-escalate |
| Unsure whether to launch something new | Don't. Optimize what's running first. |
| Feeling overwhelmed | Go back to your 3 weekly priorities. Ignore everything else. |
