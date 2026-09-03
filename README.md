# Rune Tech Website

The Rune Tech company landing page — Nuxt, static-generated, "Runes & Arcane" theme with a light/dark toggle. Lists Rune Tech's products (currently [PDF Toolkit API](https://pdf-toolkit-api.fly.dev)) and takes inquiries through a Netlify Forms-backed contact form.

## Stack

Nuxt 4 (static generation via `nuxt generate`, no server/SSR — this site has no backend of its own), pnpm, hosted on Netlify.

## Develop

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm generate   # outputs static site to .output/public
pnpm lint
pnpm typecheck
```

## Inquiries

The contact form submits via [Netlify Forms](https://docs.netlify.com/forms/setup/) (`name="inquiry"`, honeypot field for spam) — submissions land in the Netlify dashboard, no backend required. Wiring this into AdminDash's admin inbox (with reply-by-email) is a planned follow-up, not yet built.

## Deploy

Netlify builds `npm run generate` and publishes `.output/public` (see `netlify.toml`). CI (`.github/workflows/ci-cd.yml`) lints, typechecks, and builds on every PR and push to `main`; the push-to-main path also triggers a Netlify deploy via `netlify-cli`, using the `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` repo secrets.
