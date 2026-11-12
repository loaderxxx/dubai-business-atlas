# Publication status — Dubai Business Atlas
DATE: 2026-10-12
STATUS: PUBLIC SOURCE-CODE/DATA REPOSITORY INITIALIZED; NO LIVE SITE; NO AUTOSYNC

## Current materials
- `data/bay-square/companies.json`: 48 public, source-linked **provisional** business records, split into primary company sources, venue directory sources, and independent third-party directory sources. No personal contacts or phone values exported; public business identity alone.
- `prototype/bay-square/`: inherited un-deployed static prototype with EN/RU/AR interface, marked noindex; public-safe company data copy. No new design work was started during migration.
- `data/bay-square/SOURCES.md`: public-only source index.

## Scope and accuracy
Operator-listed entities and company own claims are still source claims, not verified current presence at Bay Square. A company may have moved or changed offices. Unknown suite numbers remain unknown. Do not label this data as a complete current registry.

## No deployment yet
- No Railway project or domain changed.
- No GitHub Actions schedules, tokens or sync jobs configured.
- No automated promotion of draft research to public data.
- Website not publicly deployed and not represented as official.

## Publication gate for future daily cadence
Explicit release approval → privacy allowlist → source/freshness validation → EN/RU/AR editorial QA → commit approved export (only when changed) → deployment. Time-of-day remains undecided.


## Research update — 2026-11-12

- Canonical dataset now contains 53 provisional records: 48 enriched and 5 additions.
- Individual profiles, human-readable index, source index and machine-readable summary added under data/bay-square.
- Conflicts are retained explicitly. SEMA and Green Gardenia publish non-Bay-Square current contact addresses; their historical Bay Square addresses are not treated as current. Footprint has a different current Bay Square office. Boba House has conflicting locality evidence.
- Original location provenance is preserved in previous_location_evidence. The checked field means source review date, not an on-site verification date.
- company_confirmed means the company site claims a Bay Square location; operator_listed means venue-source only; conflicting means incompatible address/identity evidence remains. No status verifies licenses or legal existence.
- No personal contacts, phone numbers, account details, private notes, logos or images were added.
- Archived prototype unchanged; current richer data is not wired into the prototype. No infrastructure, deployment, DNS or scheduling changes.
- Multilingual publication QA and current-occupancy confirmation are still required before a production launch.
