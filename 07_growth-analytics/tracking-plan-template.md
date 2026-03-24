# Tracking Plan Template

> Standardized tracking specification for analytics setup. Complete during client onboarding. Update whenever events or UTM conventions change.

## UTM Conventions

All paid and owned traffic must use consistent UTM parameters. No exceptions.

```
UTM CONVENTION
──────────────
utm_source     = [google | meta | tiktok | reddit | youtube | linkedin | email | organic | direct | partner]
utm_medium     = [cpc | paid-social | social | email | display | video | creator | affiliate]
utm_campaign   = [icp-segment]_[angle]_[version]_[date-YYYYMMDD]
utm_content    = [creative-type]_[hook-id]
utm_term       = [keyword or audience-segment]
```

**Examples:**
- `?utm_source=meta&utm_medium=paid-social&utm_campaign=icp1_pain_v2_20260320&utm_content=video_hook3&utm_term=lookalike-2pct`
- `?utm_source=email&utm_medium=email&utm_campaign=onboarding_welcome_v1_20260320&utm_content=cta_hero`

**Rules:**
- Lowercase only. No spaces — use hyphens within values.
- Every paid link must have all 5 parameters. No partial UTMs.
- Log all active UTMs in `09_growth-ops/trafficking/utm-log.md`
- Validate UTMs before launch — a broken UTM is worse than no UTM (it corrupts attribution data)

## Event Taxonomy

Follow the `object_action` naming convention (see `07_growth-analytics/AGENT.md` for full rules).

### Core Funnel Events

| Event Name | Trigger | Category | Required Properties |
|---|---|---|---|
| `page_viewed` | Any page load | Acquisition | `page_url`, `page_title`, `referrer`, UTM params |
| `cta_clicked` | CTA button/link click | Acquisition | `cta_location` (hero/nav/footer/sticky), `cta_text`, `page_url` |
| `signup_started` | Signup form initiated | Acquisition | `signup_method` (email/google/apple/sso), `source` |
| `signup_completed` | Account created | Acquisition | `signup_method`, `time_to_signup_seconds`, UTM params |
| `onboarding_started` | First onboarding step | Activation | `onboarding_version` |
| `onboarding_completed` | Last onboarding step | Activation | `time_to_complete_seconds`, `steps_completed` |
| `first_[action]_completed` | First key value action | Activation | `time_since_signup_seconds`, relevant properties |
| `trial_activated` | Trial period begins | Revenue | `plan_name`, `trial_duration_days` |
| `subscription_started` | Paid subscription begins | Revenue | `plan_name`, `billing_cycle`, `revenue` |
| `order_completed` | Purchase completed | Revenue | `order_id`, `revenue`, `items`, `payment_method` |

### Engagement Events

| Event Name | Trigger | Category | Required Properties |
|---|---|---|---|
| `session_started` | App/site opened | Retention | `session_number`, `days_since_last_session` |
| `feature_used` | Key feature interaction | Retention | `feature_name`, `usage_count` |
| `scroll_depth_reached` | Scroll milestone | Engagement | `depth` (25/50/75/100), `page_url` |
| `section_viewed` | Page section enters viewport | Engagement | `section_name`, `page_url` |
| `time_on_page_reached` | Time milestone | Engagement | `seconds` (10/30/60/120), `page_url` |

### Lifecycle Events

| Event Name | Trigger | Category | Required Properties |
|---|---|---|---|
| `referral_link_shared` | User shares referral link | Referral | `share_channel`, `referrer_user_id` |
| `referral_signup_completed` | Referred user signs up | Referral | `referrer_user_id`, `referred_user_id` |
| `reward_earned` | Referral reward triggered | Referral | `reward_type`, `reward_value` |
| `email_opened` | Email open tracked | Lifecycle | `email_name`, `sequence_name` |
| `email_clicked` | Email link clicked | Lifecycle | `email_name`, `link_url`, `sequence_name` |
| `subscription_cancelled` | User cancels | Churn | `plan_name`, `reason` (if captured), `lifetime_days` |

## Attribution Model

```
ATTRIBUTION SPEC
────────────────
Primary model:     Last-touch (for daily optimization and channel-level ROAS)
Secondary model:   First-touch (for understanding discovery channels)
Storage:           Both stored in cookies on first visit, passed to signup event
Deduplication:     Post-signup, deduplicate by email or account ID
Lookback window:   30 days (default) — adjust per client if sales cycle is longer
```

**Implementation notes:**
- Capture UTM parameters on landing page load and store in first-party cookie
- Pass stored UTMs to signup/purchase events as properties
- For multi-device journeys, rely on authenticated user ID for cross-device attribution
- Server-side event tracking (Meta CAPI, Google Enhanced Conversions) required for accurate paid attribution

## Platform Pixel Checklist

Complete for every new client or landing page deployment.

| Platform | Pixel/Tag | Events to Configure | Status |
|---|---|---|---|
| Meta | Meta Pixel + CAPI | PageView, Lead, Purchase, AddToCart | [ ] |
| Google | Google Tag + Enhanced Conversions | page_view, sign_up, purchase, conversion | [ ] |
| TikTok | TikTok Pixel + Events API | PageView, CompleteRegistration, PlaceAnOrder | [ ] |
| LinkedIn | LinkedIn Insight Tag | page_view, conversion | [ ] |
| Analytics | GA4 / Mixpanel / Amplitude | All core funnel events above | [ ] |

## Landing Page Tracking Checklist

Before any landing page goes live:

- [ ] UTM parameters captured and stored in cookie on page load
- [ ] `page_viewed` event firing with all required properties
- [ ] `cta_clicked` event firing for every CTA with correct `cta_location`
- [ ] `scroll_depth_reached` firing at 25%, 50%, 75%, 100%
- [ ] `section_viewed` firing for hero, value props, social proof, CTA sections
- [ ] `time_on_page_reached` firing at 10s, 30s, 60s, 120s
- [ ] App store / signup links passing UTM parameters
- [ ] Platform pixels firing (Meta, Google, TikTok as applicable)
- [ ] Cookie consent banner functional (if required by jurisdiction)
- [ ] Events verified in platform debug tools (Meta Events Manager, GA4 DebugView, etc.)

## Recommended Tool Stack

| Function | Recommended Tools | Notes |
|---|---|---|
| Product analytics | Mixpanel, Amplitude, PostHog | Event-based, funnel analysis, cohorts |
| Web analytics | GA4 | Free, integrates with Google Ads |
| Tag management | Google Tag Manager | Server-side GTM preferred for accuracy |
| Attribution | Built-in (cookie-based) + platform pixels | See attribution spec above |
| Dashboard | Looker Studio, Metabase, or tool-native | One source of truth |
| Link tracking | Dub.co, Rebrandly, or UTM spreadsheet | Centralize UTM management |
