# Lifecycle Flow Build Workflow

> Building a new email lifecycle flow from scratch — onboarding sequences, win-back campaigns, milestone triggers. The chain that turns signups into retained users.

## Trigger
- New product/feature launches requiring onboarding
- CRM identifies lifecycle gap (e.g., no win-back sequence)
- Activation or retention metric drops below target
- New ICP segment needs dedicated nurture track

## Agent Chain

STEP 1: CRM — Flow Design
- Input: Lifecycle gap identified, segment definition, behavioral triggers
- Output: Flow architecture (emails, timing, triggers, branching logic, exit conditions)
- Rules: Define segment entry/exit criteria. Set frequency caps. Map to lifecycle stage.
- Reference: `08_growth-crm/email-sequences-playbook.md`

STEP 2: Content Writer — Sequence Copy
- Input: Flow architecture + brand voice + ICP context
- Output: Copy for each email (subject line variants, preview text, body, CTA)
- Rules: Maintain narrative arc across sequence. Min 2 subject line variants per email. Never write without segment context.
- Handoff: Copy → CRM for review

STEP 3: Designer — Email Templates (if needed)
- Input: Copy + brand guidelines
- Output: Email template designs (responsive, tested across clients)
- Rules: Only triggered if custom templates needed. Most flows use existing ESP templates.

STEP 4: Ops — ESP Configuration
- Input: Flow architecture + copy + templates
- Output: Configured flow in ESP with triggers, delays, branching, frequency caps
- Rules: Test every trigger path. Send test emails to verify rendering. Confirm event tracking fires.
- Decision gate: Send test emails to 3 clients (Gmail, Apple Mail, Outlook) before activation

STEP 5: Analytics — Tracking Confirmation
- Input: Configured flow
- Output: Confirmed event tracking (sends, opens, clicks, conversions, unsubscribes)
- Rules: Verify events appear in analytics dashboard before flow goes live

STEP 6: CRM — Activate + Monitor
- Flow goes live
- CRM monitors first 48h for anomalies (high unsubscribe, low open rate, trigger misfires)
- Weekly review of flow performance for first month

## Post-Launch
- CRM reports flow performance in weekly dashboard
- If open rate <20% on any email → flag for subject line test
- If click rate <2% on any email → flag for copy revision
- Quarterly flow audit: are triggers still relevant? Segments still valid?

## Exit Criteria
- [ ] Flow live in ESP with all triggers working
- [ ] Test emails verified across 3 email clients
- [ ] Event tracking confirmed in analytics
- [ ] Frequency caps set and validated
- [ ] Performance baseline documented

## Reference
- Email sequences playbook: `08_growth-crm/email-sequences-playbook.md`
- Segment definitions: `08_growth-crm/segment-definitions.md`
- CRM playbook: `08_growth-crm/crm-playbook.md`
