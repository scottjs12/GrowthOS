# Filing Convention

> How to name files, organize folders, and maintain index logs across every client. Follow this or outputs become unfindable within 60 days.

---

## File Naming

Every file in a client folder follows this pattern:

```
YYYY-MM-DD_[name].md
```

- Date is when the file was created
- Name is descriptive, lowercase, hyphens for spaces
- No spaces, no special characters, no uppercase

**Examples:**
```
2026-03-24_manufacturer-lp-copy.md
2026-03-24_meta-pain-variants.md
2026-04-01_q2-experiment-brief.md
```

**Asset files (images, PDFs, design exports) follow:**
```
[client]_[channel]_[format]_[variant]_[YYYYMMDD].[ext]
```

**Examples:**
```
acme_meta_static_pain-v1_20260324.png
acme_linkedin_carousel_proof-v2_20260401.png
acme_google_responsive_identity-v1_20260415.jpg
```

---

## Folder Organization

### Default: Flat files with date prefixes

At low volume (fewer than ~15 files in a folder), keep everything flat:

```
content-writer/
  ad-copy/
    2026-03-24_meta-pain-variants.md
    2026-03-24_linkedin-proof-variants.md
    2026-04-01_meta-identity-variants.md
  copy-bank.md
```

### At scale: Campaign subfolders

When a folder exceeds ~15 files or you're running 3+ campaigns simultaneously, group by campaign:

```
content-writer/
  ad-copy/
    2026-03_manufacturer-lp/
      meta-pain-variants.md
      linkedin-proof-variants.md
      google-search-variants.md
    2026-04_healthcare-awareness/
      meta-identity-variants.md
      linkedin-social-proof.md
  copy-bank.md
```

**Campaign folder naming:** `YYYY-MM_[campaign-name]/`

**Rules:**
- Only create a campaign subfolder when you have 3+ related files
- Files inside campaign folders drop the date prefix (the folder has it)
- Single deliverables stay as files, not folders
- Log/index files always live at the agent root — never inside campaign folders

---

## Index & Log Files

Every agent has one or more index files that aggregate what's in the folder. These are the "table of contents" — agents read these first before producing new work.

### Required index files per agent

| Agent | Index File(s) | What It Tracks |
|---|---|---|
| **Strategist** | `decisions-log.md` | Every strategic decision with rationale and review date |
| **Growth PM** | `experiment-tracker.md`, `decision-log.md` | Active experiments, sprint decisions |
| **Researcher** | `icp-profiles.md`, `insight-bank.md` | ICP segments, research findings |
| **Content Writer** | `copy-bank.md`, `messaging-matrix.md`, `brand-voice.md` | All copy with performance data, positioning, voice rules |
| **SEO** | `keyword-universe.md`, `rank-tracker.md` | All target keywords, position tracking over time |
| **Designer** | `asset-naming.md` | Asset inventory with naming, status, brief reference |
| **CRO** | `cro-hypothesis-log.md` | All hypotheses with ICE scores and outcomes |
| **Paid** | `media-plan.md` | Budget allocation, campaign structure, pacing |
| **Analytics** | `tracking-plan.md`, `kpi-definitions.md`, `experiment-results-log.md` | What's tracked, how metrics are defined, test results |
| **CRM** | `segment-definitions.md` | All segments with entry/exit criteria |
| **Ops** | `launch-checklist.md`, `trafficking-checklist.md`, `tool-stack.md` | Go-live QA, pre-launch checks, active tools |
| **Growth Engineer** | `tracking-implementations.md`, `build-log.md` | What's instrumented, all builds with status |
| **Influencer** | `pipeline.md`, `creator-roster.md`, `partnership-log.md` | Pipeline status, active partners, activity history |

### How index files work

- **Append, don't overwrite.** New entries go at the top (newest first) or bottom of the table.
- **Link to source files.** Each entry should reference the full deliverable file when one exists.
- **Update on completion.** When Analytics reports results on a piece of copy, Content Writer updates the copy-bank.md entry with performance data.
- **Review monthly.** Flag stale entries (>90 days, no update). Archive or mark as inactive.

---

## The Compound Loop

The filing system exists so outputs build on each other:

1. **Researcher** produces ICP profiles → filed in `researcher/icp-profiles.md`
2. **Content Writer** reads ICP profiles → produces copy → files in `content-writer/ad-copy/` + updates `copy-bank.md`
3. **Paid** reads copy bank → builds campaigns → files in `paid/media-plan.md`
4. **Analytics** reports results → updates `analytics/experiment-results-log.md`
5. **Content Writer** reads results → writes better copy next time → updates `copy-bank.md` with performance data

If files aren't named consistently and indexed properly, this loop breaks. Agents can't find prior work, so they start from scratch every time. The filing convention is what makes the system compound.
