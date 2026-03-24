# Technical SEO Audit Checklist

> Run this quarterly or before any major site launch. Technical SEO is the foundation — if the pipes are broken, content doesn't matter.

## Crawlability & Indexing

- [ ] `robots.txt` is accessible and not blocking important pages
- [ ] XML sitemap exists, is submitted to GSC, and is up to date
- [ ] No critical pages returning 4xx or 5xx errors (check GSC Coverage report)
- [ ] No unintentional `noindex` tags on pages that should rank
- [ ] No orphan pages (important pages with zero internal links pointing to them)
- [ ] Canonical tags are correct (self-referencing on primary pages, pointing to primary on duplicates)
- [ ] Hreflang tags correct (if international / multi-language)
- [ ] Pagination handled correctly (rel="next"/"prev" or load-more with crawlable links)
- [ ] JavaScript rendering: critical content visible in "View Source" or confirmed rendered by Googlebot (test with URL Inspection tool)

## Site Speed & Core Web Vitals

| Metric | Target | Tool |
|---|---|---|
| LCP (Largest Contentful Paint) | <2.5s | PageSpeed Insights, CrUX |
| FID/INP (Interaction to Next Paint) | <200ms | PageSpeed Insights, CrUX |
| CLS (Cumulative Layout Shift) | <0.1 | PageSpeed Insights, CrUX |

- [ ] Images optimized (WebP/AVIF, lazy loading below fold, explicit width/height)
- [ ] CSS/JS minified and bundled
- [ ] No render-blocking resources above the fold
- [ ] CDN configured for static assets
- [ ] Server response time (TTFB) <200ms
- [ ] Font loading optimized (font-display: swap, preload critical fonts)
- [ ] Third-party scripts audited — remove any unused tags/pixels

## On-Page SEO

- [ ] Every indexable page has a unique title tag (<=60 chars, keyword-front-loaded)
- [ ] Every indexable page has a unique meta description (<=155 chars, includes CTA)
- [ ] H1 tag present on every page (one per page, contains primary keyword)
- [ ] H2/H3 hierarchy is logical (no skipping levels)
- [ ] Image alt text is descriptive (not keyword-stuffed)
- [ ] URL structure is clean (short, lowercase, hyphens, no parameters for indexable pages)
- [ ] Internal links use descriptive anchor text (not "click here")
- [ ] No broken internal links (404s within the site)

## Structured Data

- [ ] Schema markup implemented where applicable:
  - [ ] Organization schema (homepage)
  - [ ] Article/BlogPosting schema (blog posts)
  - [ ] FAQ schema (FAQ pages or sections)
  - [ ] Product schema (product pages)
  - [ ] HowTo schema (tutorial content)
  - [ ] BreadcrumbList schema (navigation)
- [ ] Schema validated with Google Rich Results Test
- [ ] No schema errors in GSC

## Mobile

- [ ] Site is mobile-responsive (no horizontal scroll on any page)
- [ ] Tap targets >=44x44px with adequate spacing
- [ ] Font size >=16px on mobile
- [ ] No intrusive interstitials (popups that block content on mobile)
- [ ] Mobile page speed passes Core Web Vitals (test separately from desktop)

## Security & Infrastructure

- [ ] HTTPS everywhere (no mixed content warnings)
- [ ] SSL certificate valid and not expiring within 30 days
- [ ] HTTP -> HTTPS redirect working (301, not 302)
- [ ] www vs. non-www redirect configured (pick one, redirect the other)
- [ ] No duplicate content across HTTP/HTTPS or www/non-www versions

## AI Search Readiness (AEO)

- [ ] Key pages have concise answer paragraphs (2-3 sentences that directly answer the query) near the top
- [ ] FAQ schema implemented on high-traffic pages
- [ ] Content structured with clear H2 questions that match "People Also Ask" queries
- [ ] Author/expertise signals present (author bios, credentials, sources cited)
- [ ] Content freshness: last updated date visible on evergreen pages

## Quarterly Audit Actions

| Check | Frequency | Tool |
|---|---|---|
| Crawl errors | Monthly | GSC |
| Core Web Vitals | Monthly | PageSpeed Insights / CrUX |
| Broken links | Quarterly | Screaming Frog / Ahrefs |
| Schema validation | Quarterly | Rich Results Test |
| Sitemap accuracy | Quarterly | Manual review + GSC |
| Redirect chains | Quarterly | Screaming Frog |
| Competitor technical audit | Bi-annually | Ahrefs / Semrush |

## Rules

- Fix crawlability issues before optimizing content. If Google can't find the page, keywords don't matter.
- Core Web Vitals are a ranking factor. Treat them as P1 bugs, not nice-to-haves.
- Every site migration (domain change, CMS change, redesign) requires a full audit before AND after.
- Never block a page from indexing as a "temporary fix." Temporary blocks become permanent in 100% of cases.
