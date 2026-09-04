# UI/UX & SEO Audit — Rune Tech Website

**Created:** 2026-09-04
**Scope:** [app.vue](app/app.vue) (the entire site is currently one file), [nuxt.config.ts](nuxt.config.ts), `public/`

Findings from a full pass over the site's UI/UX, traditional SEO, and AI SEO (GEO —
generative engine optimization) provisions, plus a phased plan to address them.

## Findings

### Content & UI/UX
- Single page, one real product (PDF Toolkit API) plus a "coming soon" placeholder — thin
  by design for now, but little for a visitor or crawler to read.
- Hero/section copy is atmospheric ("arcane workshop," "forge small tools") but light on
  concrete substance — no pricing, no use cases, no "how it works," no comparison to
  alternatives.
- No trust signals: no About/story, no testimonials, no usage stats, no team info, no
  social/GitHub links, no direct email shown outside the form.
- No legal pages (Privacy Policy/Terms) despite collecting name+email via the inquiry form.
- No visual proof of the product itself (screenshot, example request/response, code snippet).
- Google Fonts loaded twice — `<link rel="stylesheet">` in `nuxt.config.ts` *and* `@import`
  in `app.vue`'s `<style>` block. Redundant request, hurts LCP slightly.
- Accessibility is already solid: semantic landmarks, `aria-hidden` on decorative SVGs,
  `:focus-visible`, `prefers-reduced-motion` respected. No action needed here.

### Traditional SEO
- `useSeoMeta` covers title/description/og basics but has no `ogImage`/`twitterImage` —
  shared links show no preview image.
- No canonical URL.
- No structured data (JSON-LD) — no `Organization`, no `SoftwareApplication`/`Product`
  schema for PDF Toolkit API.
- `robots.txt` allows everything but has no `Sitemap:` directive, and no `sitemap.xml`
  exists yet.
- Only `favicon.svg` — no `favicon.ico` fallback, no `apple-touch-icon`, no
  `manifest.webmanifest`.
- Single-page architecture = one indexable URL. Each product should eventually get its own
  route (e.g. `/products/pdf-toolkit-api`) rather than an anchor-linked section.

### AI SEO / GEO
- No `llms.txt` — the emerging convention AI crawlers (ChatGPT, Claude, Perplexity) check
  for a plain-language site summary.
- No structured data means AI answer engines have nothing machine-readable to extract facts
  from — they're left parsing intentionally vague marketing prose.
- No FAQ content, which AI answer engines strongly favor for direct, quotable Q&A pairs.
- No topical depth (blog/guides) to build source confidence for AI engines to cite.

## Plan

### Phase 1 — Quick technical wins
- [x] Add JSON-LD `Organization` + `SoftwareApplication` schema
- [x] Add `sitemap.xml` + `Sitemap:` line in `robots.txt`
- [x] Add `llms.txt` with a plain-text summary of Rune Tech and its products
- [x] Fix duplicate font loading (drop the `@import`, keep `nuxt.config.ts`'s `<link>`)
- [x] Add `manifest.webmanifest` (referencing the existing SVG favicon)
- [x] Set a canonical URL + `ogUrl`
- [x] Add `ogImage`/`twitterImage` — designed via a Claude Design canvas, exported and
      wired in as `public/og-image.png` (1200×630) on every page
- [x] Add `apple-touch-icon.png` (180×180) and a 360×360 PNG icon (for the manifest,
      alongside the existing SVG favicon) — same canvas export

### Phase 2 — Content & trust
- [x] Write real product content for PDF Toolkit API: concrete use cases, a code/curl
      example, pricing tier summary, docs link if any exist
- [x] Add a short About/story section
- [x] Add a compact FAQ block (3–6 Q&As)
- [x] Add a Privacy Policy page, linked near the form
- [x] Add visible contact info + real social/GitHub links in the footer

### Phase 3 — Structural growth
- [x] Split `/about` into its own route (nav + footer updated). `/products/pdf-toolkit-api`
      deliberately held back — with only one live product, a dedicated page would just
      fork the same thin content; revisit once a second product ships.
- [x] Add `/changelog`, seeded with real dated history (site launch, PDF Toolkit API
      launch, this content/SEO pass)
- [x] Wire up analytics — Cloudflare Web Analytics beacon added to `nuxt.config.ts`,
      confirmed present in the generated static HTML for every page
- [x] Revisit `llms.txt` and JSON-LD for the new pages (`/about`, `/changelog`, `/privacy`
      all listed; `sitemap.xml` updated too)
