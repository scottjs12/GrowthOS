# Form Optimization — CRO

> Patterns for lead gen and signup forms. Every decision here has a conversion consequence. Apply this framework before designing or auditing any form.

---

## The Core Rule

Every field you add reduces conversion by approximately 7–11%. This is not a guideline — it is the consistent finding across decades of form optimization research. Start with the minimum viable set of fields. Add fields only when you can prove the business need outweighs the conversion cost.

---

## Field Priority Hierarchy

**Tier 1 — Always include:**
- Email

This is the only field that is universally required. If you cannot qualify, route, or follow up without more information, collect it post-submit.

**Tier 2 — Include if needed for routing or personalization:**
- First name (for personalized follow-up)
- Company name (for B2B qualification)

**Tier 3 — Add only if sales cannot function without it:**
- Phone (expect a 10–20% conversion penalty — justify it)
- Job title
- Company size

**Tier 4 — Move to post-signup:**
- Detailed use case
- Current tool stack
- Budget range
- Timeline
- Project description

Collect Tier 4 data in the onboarding flow, a follow-up survey, or the first sales call. Never block the initial conversion with qualification questions.

---

## Multi-Step vs. Single-Step Decision Tree

**Use single-step when:**
- 4 or fewer fields
- Low-commitment action (newsletter, content download, free trial)
- The audience is warm and already pre-qualified

**Use multi-step when:**
- 5 or more fields are genuinely required
- High-value leads justify a longer qualification process
- The offer complexity warrants it (e.g., custom demo request, enterprise inquiry)

**Multi-step rules:**
- Easy questions first: name, email, company. Hard questions last: budget, timeline, specific needs.
- Progress bar is always visible — users abandon forms when they cannot see the end.
- Allow back navigation — never trap a user in a forward-only flow.
- Save partial completions server-side. If a user drops mid-form, send a recovery email for high-value offers.
- Never put more than 3 fields on a single step.

---

## Smart Defaults and Input Behavior

**Pre-fill where possible:**
- Use geolocation to pre-select country and time zone.
- Use company domain lookup to pre-fill company name (Clearbit Reveal or equivalent).
- Pre-fill known fields for returning visitors via cookie or CRM match.

**Input type matching:**
- Email fields: `type="email"` — triggers correct keyboard on mobile.
- Phone fields: `type="tel"` — triggers numeric keyboard.
- Number fields: `type="number"` or `inputmode="numeric"`.
- Never make the user fight their keyboard.

**Dropdowns over free text** for any structured data: country, industry, company size, job title. Free text produces messy data and slower completion.

**Inline validation:** Show errors in real time, next to the field that failed — not on submit, not in a banner at the top. Users should never have to hunt for what went wrong.

---

## Mobile-Specific Rules

- All tap targets ≥ 44 × 44px — no tiny checkboxes or radio buttons.
- No horizontal scroll. Forms wider than the viewport break on small screens.
- Font size ≥ 16px on input fields — anything smaller triggers zoom on iOS and breaks the layout.
- Sticky CTA at the bottom of the viewport on mobile forms. Do not make the user scroll to find the submit button.
- Avoid CAPTCHA. It penalizes real users more than bots. Use a honeypot field instead (hidden field — if filled, the submission is likely a bot).

---

## Post-Submit Experience

The moment after form submission is the highest-trust moment in the conversion flow. Do not waste it.

- Show immediate on-page confirmation — never a blank page or a full-page redirect with a 2-second delay.
- Make the next step visible within 2 seconds: "Check your email for your login link" or "Someone from our team will reach out within 1 business day."
- The thank-you page must have a secondary CTA. Options by context:
  - Book a demo (if the form was a content download)
  - Download a resource (if the form was a demo request — give them something while they wait)
  - Share with a colleague (referral loop trigger)
  - Connect on LinkedIn (for founder-led sales motions)

---

## Testing Priorities (ICE Order)

Test in this order. The highest-impact changes come first.

1. **Number of fields** — Remove one Tier 3 field and measure conversion rate change. This is almost always the highest-impact test on any form.
2. **Multi-step vs. single-step** — If the form has 5+ fields, test a multi-step version against the single-step control.
3. **CTA copy** — "Get started" vs. "Get my free audit" vs. "Start my trial". Small change, meaningful lift possible.
4. **Field order** — Easy fields first. Test whether moving email to the first field (vs. name first) changes completion rate.
5. **Social login option** — "Continue with Google" reduces friction dramatically for B2C and prosumer products. Test before building — not all audiences want it.

Each test must follow the standard hypothesis format in `05_cro/cro-hypothesis-log.md`. One variable per test. Never test field removal and CTA copy simultaneously.
