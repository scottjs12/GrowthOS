# CRM Playbook

> The lifecycle strategy document. Defines how users move through stages, what triggers transitions, and what the CRM team owns at each stage.

---

## Lifecycle Stage Map

```
Acquisition → Onboarding → Activation → Habit → Advocacy → Win-back
```

| Stage | Goal | Time Window | Success Signal | Failure Signal | Owner |
|---|---|---|---|---|---|
| Acquisition | Sign up | — | Install / signup | Drop-off | Paid / SEO |
| Onboarding | First action | Day 0–3 | Profile complete | No action in 24h | CRM |
| Activation | Core value | Day 1–7 | North Star action | No core action in 7d | CRM |
| Habit | Recurring use | Day 8–30 | D30 retention | Churn | CRM |
| Advocacy | Referral | Day 31+ | Referral sent | — | CRM |
| Win-back | Reactivate | Day 60+ inactive | Return | 90d inactive | CRM |

---

## Active Flows

| Flow Name | Stage | Trigger | # Emails | Status | Performance |
|---|---|---|---|---|---|
| | | | | | |

## Flow Template

```
LIFECYCLE FLOW
──────────────
Flow name:
Lifecycle stage:
Entry trigger:
Success exit:        [User moves to next stage when ___]
Failure exit:        [User enters win-back or is suppressed when ___]
Message frequency:   [Max messages per stage]
Channel:             [Email / Push / In-app / SMS]
# of messages:
Sequence:
  1. [Timing] — [Subject/Message] — [Goal]
  2. [Timing] — [Subject/Message] — [Goal]
  3. ...
Success metric:
Current performance:
Last reviewed:
```

---

## Quarterly Review Checklist

- [ ] All active flows reviewed for performance (open rate, click rate, conversion)
- [ ] Any email with <10% open rate rewritten or removed
- [ ] Any email with <1% click rate rewritten or removed
- [ ] Segment definitions still accurate (check entry/exit criteria)
- [ ] Frequency caps appropriate (no user receiving > limits)
- [ ] Suppression rules working (unengaged users not receiving broadcasts)
- [ ] Lifecycle stage map still matches product reality
