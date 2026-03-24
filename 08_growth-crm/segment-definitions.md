# Segment Definitions

> Canonical audience segments. Every segment must produce a different message — if two segments would get the same message, merge them.

---

## Active Segments

| Segment | Size (% of base) | Frequency Cap | Status |
|---|---|---|---|
| | | | |

---

## Segment Template (copy for each new segment)

```
SEGMENT DEFINITION
──────────────────
Name:
Description:      [What behavior or attribute defines membership]
Entry criteria:   [Specific trigger or condition]
Exit criteria:    [When does a user leave this segment?]
Size estimate:    [Approximate % of user base]
Message strategy: [What is different about how we communicate with this group?]
Frequency cap:    [Maximum messages per week]
Channels:         [Email / Push / In-app / SMS — which channels for this segment?]
Priority:         [P1 / P2 / P3]
```

---

## Segment Quality Test

Before adding a segment, answer these:

1. **Actionable:** Does this segment get a different message than the default? If not, don't create it.
2. **Identifiable:** Can you actually filter for these users in your ESP/CRM? If not, work with Ops to set up the data.
3. **Substantial:** Is the segment large enough to matter? (<2% of base is usually too small unless high-value.)
4. **Stable:** Will users stay in this segment long enough to receive the tailored messaging?

---

## Standard Segment Framework

These are common starting segments. Customize per client.

| Segment | Entry Criteria | Exit Criteria | Message Strategy |
|---|---|---|---|
| New signups (Day 0-3) | Signup event | 72h elapsed or activation event | Onboarding, quick wins, setup help |
| Activated users | Completed North Star action | — | Feature discovery, habit building |
| Power users | Top 10% by engagement metric | Drops below threshold for 2 weeks | Referral prompts, early access, community |
| At-risk | Active but engagement declining 2+ weeks | Re-engages or churns | Value reinforcement, "here's what you're missing" |
| Churned | No activity in 30+ days | Returns | Win-back sequence (3 emails then suppress) |
| Unengaged email | No email open in 90+ days | Opens an email | Suppress from broadcasts, send re-permission email |
