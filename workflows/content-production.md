# Content Production Workflow

> For content sprints — blog posts, social batches, email sequences, LP copy refreshes. Lighter than a full campaign launch. Use this when there is no paid media activation.

---

## Trigger

- PM schedules a content sprint (weekly or bi-weekly cadence)
- SEO identifies a keyword cluster ready to target
- CRM needs lifecycle email copy built or refreshed
- Social calendar needs a batch production run
- Paid flags creative fatigue requiring an ad copy refresh

---

## Variants

Four variants depending on content type. All share universal rules and exit criteria. Pick the chain that matches the work.

---

### Variant A — SEO Content

```
┌─────────────────────────────────────────────────────────────────┐
│  SEO (brief)                                                    │
│    → Content Writer (writes to brief)                           │
│      → SEO (keyword + link review)                              │
│        → Ops (publishes)                                        │
│          → Analytics (confirms tracking)                        │
│            → SEO (tracks ranking in rank-tracker.md)            │
└─────────────────────────────────────────────────────────────────┘
```

- SEO delivers a content brief with target keyword, search intent, outline, and competitor gap analysis
- Content Writer writes to the brief — does not deviate from outline without flagging to SEO first
- SEO reviews for keyword placement, internal link targets, and semantic coverage
- Analytics confirms page tracking before SEO begins rank monitoring
- **Reference:** `clients/[client-name]/seo/content-briefs/`, `03_seo/AGENT.md`

---

### Variant B — Social Content Batch

```
┌─────────────────────────────────────────────────────────────────┐
│  PM or Content Writer (weekly calendar)                         │
│    → Content Writer (batch 3–5 posts)                           │
│      → Designer (visual assets, if needed)                      │
│        → Ops (schedule in Buffer/Later)                         │
└─────────────────────────────────────────────────────────────────┘
```

- Content Writer pulls from approved angles and themes in the social content playbook
- Designer receives structured copy (caption + visual direction) — never writes own captions
- Ops schedules with correct UTMs where applicable
- **Reference:** `02_content-writer/social-content-playbook.md`

---

### Variant C — Email Sequence

```
┌─────────────────────────────────────────────────────────────────┐
│  CRM (flow design + segment + trigger rules)                    │
│    → Content Writer (copy per email in sequence)                │
│      → Ops (configure in ESP)                                   │
│        → Analytics (confirm event tracking)                     │
│          → CRM (flow goes live, monitors performance)           │
└─────────────────────────────────────────────────────────────────┘
```

- CRM designs the full flow logic before any copy is written — sequence structure, segment, triggers, exit conditions
- Content Writer writes to the flow spec; flags if any email objective is unclear before writing
- Analytics confirms that open, click, and conversion events are tracked before go-live
- **Reference:** `08_growth-crm/email-sequences-playbook.md`, `08_growth-crm/AGENT.md`

---

### Variant D — Ad Copy Refresh

```
┌─────────────────────────────────────────────────────────────────┐
│  Paid (flags fatigue or new angle needed)                       │
│    → Content Writer (new copy variants, min 3)                  │
│      → Designer (new creative assets)                           │
│        → Ops (trafficking QA)                                   │
│          → Paid (swaps in new creative)                         │
└─────────────────────────────────────────────────────────────────┘
```

- Paid provides specific fatigue signal (frequency, CTR decay, CPM trend) — not a subjective call
- Content Writer delivers minimum 3 variants with structured handoff (headline / subhead / body / CTA)
- Ops confirms trafficking before swap — never bypass QA for a "quick" creative update
- **Reference:** `06_growth-paid/AGENT.md`, `clients/[client-name]/content-writer/copy-bank.md`

---

## Universal Rules

- Never write without ICP context loaded — no content sprint begins without the client context file active
- Minimum 3 variants for any testable copy unit (ads, subject lines, headlines, CTAs)
- All copy logged in `clients/[client-name]/content-writer/copy-bank.md` with performance tracking field populated
- Designer never writes own copy — always receives a structured handoff from Content Writer
- Ops validates tracking before any content goes live — no exceptions for "light" content

---

## Exit Criteria

- [ ] Content delivered and reviewed by the requesting agent
- [ ] Copy bank updated with all new variants
- [ ] Published or scheduled with tracking confirmed
- [ ] Performance baseline established for any testable content unit
- [ ] If SEO content: URL submitted and added to rank tracker
- [ ] If email sequence: flow confirmed live and monitored by CRM
