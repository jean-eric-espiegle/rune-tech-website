<script setup lang="ts">
const siteUrl = 'https://rune-tech.org/changelog'

useSeoMeta({
  title: 'Changelog — Rune Tech',
  description: 'What has shipped at Rune Tech, in order.',
  ogType: 'website',
  ogTitle: 'Changelog — Rune Tech',
  ogUrl: siteUrl,
  ogImage: 'https://rune-tech.org/og-image.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://rune-tech.org/og-image.png'
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }]
})

const entries = [
  {
    date: '2026-09-04',
    label: '4 September 2026',
    title: 'Image Optimization API launches',
    body: 'The second Rune Tech product: resize, convert, compress, and smart-crop images behind one clean REST API. Same shape as PDF Toolkit API, billed by MB processed instead of by operation.'
  },
  {
    date: '2026-09-04',
    label: '4 September 2026',
    title: 'Content and SEO groundwork',
    body: 'Added real pricing and a curl example to the PDF Toolkit API listing, an About page, an FAQ, and a Privacy Policy. Underneath: structured data, a sitemap, and an llms.txt so the site is easier for both search and AI engines to read correctly.'
  },
  {
    date: '2026-09-03',
    label: '3 September 2026',
    title: 'Rune Tech site goes live',
    body: 'The Rune Tech landing page launched at rune-tech.org — the "Runes & Arcane" brand identity, a listing for PDF Toolkit API, and an inquiry form wired directly into the internal admin inbox.'
  },
  {
    date: '2026-08-20',
    label: 'August 2026',
    title: 'PDF Toolkit API launches',
    body: 'The first Rune Tech product: merge, split, compress, and rasterize PDFs behind one clean REST API, with a free tier and transparent per-operation pricing on the paid tiers.'
  }
]
</script>

<template>
  <main class="wrap">
    <section style="border-top: none;">
      <div class="section-head">
        <div class="eyebrow">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 1 L8 15 M3 5 L13 5 M3 10 L10 10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
          What shipped
        </div>
        <h2>Changelog</h2>
      </div>
      <div class="changelog-list">
        <article v-for="entry in entries" :key="entry.title" class="changelog-item">
          <time :datetime="entry.date" class="changelog-date">{{ entry.label }}</time>
          <h3>{{ entry.title }}</h3>
          <p>{{ entry.body }}</p>
        </article>
      </div>
    </section>
  </main>
</template>
