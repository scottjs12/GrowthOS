# Privacy & Compliance Checklist

> Growth without compliance is a liability. This checklist covers the minimum viable compliance for any growth operation. Not legal advice — always confirm with legal counsel for your jurisdiction.

## Email Compliance

### CAN-SPAM (US)
- [ ] Every email includes physical mailing address
- [ ] Every email has a visible, working unsubscribe link
- [ ] Unsubscribe requests honored within 10 business days
- [ ] Subject lines are not deceptive (match email content)
- [ ] "From" name and email are accurate and identifiable
- [ ] No harvested email addresses (all opted in or have legitimate business relationship)

### GDPR (EU/UK)
- [ ] Explicit opt-in consent obtained before sending marketing emails (no pre-checked boxes)
- [ ] Consent records stored (who, when, what they consented to, how)
- [ ] Privacy policy linked at point of data collection
- [ ] Easy unsubscribe in every email
- [ ] Data processing purpose clearly stated at collection
- [ ] Right to deletion: can delete all user data on request within 30 days
- [ ] Data Processing Agreement (DPA) signed with every vendor that touches personal data (ESP, analytics, ad platforms)

### CASL (Canada)
- [ ] Express consent obtained before commercial emails
- [ ] Consent includes: sender identity, contact info, unsubscribe mechanism
- [ ] Implied consent expires after 2 years (re-confirm before expiry)

### CCPA/CPRA (California)
- [ ] "Do Not Sell My Personal Information" link on website (if applicable)
- [ ] Privacy policy updated annually with data categories collected
- [ ] Consumers can request data deletion
- [ ] No financial incentives for data sharing without clear disclosure

## Tracking & Pixel Compliance

### Cookie Consent
- [ ] Cookie consent banner implemented (required in EU, recommended globally)
- [ ] Non-essential cookies blocked until consent given
- [ ] Cookie categories clearly explained (necessary, analytics, marketing)
- [ ] Consent choice stored and respected across sessions
- [ ] "Reject all" option as prominent as "Accept all"

### Pixel & Event Tracking
- [ ] Meta Pixel: Consent Mode implemented (fires limited events without consent, full events with consent)
- [ ] Google tags: Google Consent Mode v2 configured
- [ ] No PII in URL parameters (no email addresses in UTMs)
- [ ] No PII in event properties (hash emails before sending to ad platforms)
- [ ] Server-side tracking considered for first-party data control
- [ ] Data retention settings configured in analytics platform (recommended: 14-26 months)

### UTM Hygiene
- [ ] No PII in UTM parameters (never put names or emails in URLs)
- [ ] UTM values are lowercase, hyphenated, consistent (see Ops AGENT.md conventions)
- [ ] No internal navigation tracked as campaigns (UTMs for external sources only)

## Ad Platform Compliance

### Meta Ads
- [ ] Custom Audience terms accepted
- [ ] Special Ad Category selected if applicable (housing, credit, employment, social issues)
- [ ] No discriminatory targeting (age, gender, zip code restrictions for special categories)
- [ ] Landing page matches ad content (no bait-and-switch)

### Google Ads
- [ ] Destination requirements met (LP loads, matches ad promise)
- [ ] Restricted content policies reviewed (healthcare, financial, political)
- [ ] Trademark usage reviewed if mentioning competitors

### General
- [ ] All ad copy claims are substantiated (can you prove the claim if challenged?)
- [ ] Testimonials are real and attributed (or clearly marked as illustrative)
- [ ] Pricing is transparent (no hidden fees in LP but not in ad)
- [ ] Disclaimers visible where required (financial, health, results claims)

## Data Handling

### Collection
- [ ] Only collect data you actually need (data minimization)
- [ ] Purpose stated at point of collection
- [ ] Consent obtained before collection (where required)

### Storage
- [ ] Personal data encrypted at rest
- [ ] Access limited to those who need it (principle of least privilege)
- [ ] Vendor DPAs in place for all third-party processors
- [ ] Data stored in regions compliant with user jurisdiction

### Deletion
- [ ] Process exists to delete user data on request
- [ ] Deletion includes: all databases, backups (within reasonable timeframe), third-party syncs
- [ ] Deletion requests logged and confirmed to requester

## Quarterly Compliance Review

- [ ] Review all active email lists for consent validity
- [ ] Audit cookie consent implementation (test in EU IP)
- [ ] Verify pixel firing matches consent state
- [ ] Review ad platform policies for any updates
- [ ] Confirm DPAs current with all vendors
- [ ] Update privacy policy if data practices changed
- [ ] Test "right to delete" process end-to-end

## Rules
- When in doubt, get consent. Forgiveness is not a compliance strategy.
- Never share user lists between clients without explicit consent per client.
- Treat every market as GDPR-level until confirmed otherwise — it's the strictest standard and covers you globally.
- Privacy compliance is not a one-time setup. Review quarterly.
- If a vendor can't provide a DPA, find a different vendor.
