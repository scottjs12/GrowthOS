# Agent Conflict Resolution Framework

> Growth teams have natural tensions. SEO wants more content on the page; CRO wants less. Brand wants premium feel; Performance wants aggressive CTAs. These tensions are healthy — but they need a resolution protocol, not a debate club.

## Common Conflicts

| Conflict | Agent A | Agent B | Root Tension |
|---|---|---|---|
| Page length | SEO (more content, more keywords) | CRO (less content, faster conversion) | Organic reach vs. conversion rate |
| Creative direction | Designer (brand-forward, subtle) | Paid (performance-forward, aggressive) | Brand equity vs. short-term conversion |
| Email frequency | CRM (more touches, more lifecycle flows) | CRO (fewer touches, reduce fatigue) | Engagement vs. opt-out risk |
| Feature gating | PM (gate for revenue) | CRO (ungated for activation) | Monetization vs. product-led growth |
| Test duration | CRO (run longer for significance) | Paid (decide faster, iterate faster) | Statistical rigor vs. velocity |
| Budget allocation | Paid (more spend on winning channel) | SEO (invest in organic for long-term) | Short-term ROI vs. long-term compounding |
| Messaging angle | Researcher (data says pain angle) | Content Writer (instinct says curiosity) | Data-driven vs. creative intuition |

## Resolution Protocol

### Step 1: Define the Metric (5 minutes)
- Both agents agree on the primary metric that decides the conflict
- If they can't agree on the metric, PM decides the metric
- Example: "The primary metric for this page is conversion rate, not organic traffic"

### Step 2: Check the Data (10 minutes)
- Is there existing data that resolves this? Check:
  - Pattern library — has this been tested before?
  - Copy bank — performance data on similar approaches?
  - Experiment results — has an A/B test already answered this?
- If data exists and is conclusive: data wins. End of discussion.

### Step 3: Test It (if no data)
- If no data exists, the conflict becomes a hypothesis
- CRO files it with ICE score
- PM schedules the test
- Both agents commit to accepting the result
- Rule: "I think X will work better" is a hypothesis, not a decision. Test it.

### Step 4: Escalate (if testing isn't feasible)
- Some conflicts can't be tested (brand decisions, legal constraints, resource limits)
- Escalation path: PM decides operational conflicts. Strategist decides strategic conflicts.
- PM decisions: page layout, email frequency, creative direction within guidelines
- Strategist decisions: channel investment priorities, ICP focus, pricing philosophy
- Rule: Escalation should take <24h. Unresolved conflicts are more expensive than imperfect decisions.

## Decision Principles (when data doesn't exist)

```
╔══════════════════════════════════════════╗
║        TIEBREAKER DECISION MATRIX        ║
╚══════════════════════════════════════════╝

Page type: Paid landing page?
  → CRO wins. Optimize for conversion, not SEO.

Page type: Organic content?
  → SEO wins. Optimize for ranking, not CRO.

Approaches equal on metrics?
  → Choose the better user experience.

Short-term vs. long-term?
  → Revenue this quarter wins. Survival first.

Legal or compliance concern raised?
  → Compliance wins. Always. No exceptions.
```

1. **Conversion-first on paid landing pages.** If Paid is driving traffic, CRO wins the page design argument. Optimize for conversion, not SEO.
2. **SEO-first on organic content.** If the page exists for organic traffic, SEO wins the content length argument. Optimize for ranking.
3. **User experience breaks ties.** When two approaches are equal on metrics, choose the one that's better for the user.
4. **Revenue-impacting decisions favor the short term.** When in doubt, choose the option that impacts revenue this quarter, not next year. Survival first.
5. **Brand decisions have veto power on legal/compliance issues only.** Brand preferences don't override performance data. But legal and compliance concerns always win.

## Conflict Log Template

```
╔══════════════════════════════════════╗
║          CONFLICT LOG ENTRY          ║
╚══════════════════════════════════════╝

Date:
Agents in conflict:
Conflict type:
Primary metric agreed:

Resolution path:
  - [ ] Data resolved it (cite source)
  - [ ] Test scheduled (ICE score + launch date)
  - [ ] Escalated to PM
  - [ ] Escalated to Strategist

Decision made:
Outcome (fill in after 30 days):
Standing rule added to AGENT.md: [Y/N]
```

## Rules

- Every conflict is a learning opportunity. Win or lose, document the resolution and the outcome in the pattern library.
- Never let a conflict block work for more than 24h. An imperfect decision today beats a perfect decision next week.
- "Both" is sometimes the answer. SEO page AND conversion-optimized LP can coexist. Don't force a false binary.
- Conflicts that recur more than 3x need a standing rule, not repeated resolution. Add the rule to the relevant AGENT.md.
- Data > opinion > hierarchy. Always.
