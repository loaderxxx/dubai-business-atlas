# Bay Square Atlas — Static MVP
STATUS: CODE CREATED / NOT DEPLOYED
DATE: 2026-10-12

## Files
- `index.html`: lightweight semantic site, preview stage noindex.
- `styles.css`: responsive visual system; RTL support.
- `catalog.js`: 48 source-linked public-only company profiles. Data is curated, not a bulk copy of third-party site text.
- `app.js`: EN/RU/AR interface, search company/specialty/sector/building, category filters, detail dialogs and profile deep links.

## Preview
Open `index.html` locally or serve this directory with `python -m http.server 8080`. No framework or external services required beyond optional Google Fonts. The interface works without external network; external source links naturally require access.

## Deploy later
Choose a publication domain, verify sources and translations, then serve the `site/` directory with any static host. Production publish/permission changes require explicit owner authorization. Remove the noindex meta ONLY after QA approval. Do not claim this is official or partner-approved.

## Future production work
Static locale URLs /en/ /ru/ /ar/ with unique SEO metadata and organization JSON-LD; accessible route-based profiles; CMS for tenant corrections and source log; GA/analytics only with lawful privacy practices; photo rights; operator consent for co-branding; structured import/export.
