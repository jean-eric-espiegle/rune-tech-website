<script setup lang="ts">
const siteUrl = 'https://rune-tech.org/about'

useSeoMeta({
  title: 'About — Rune Tech',
  description: 'Rune Tech is a one-person workshop built and run by Jean-Eric Espiegle, building small, focused software tools.',
  ogType: 'website',
  ogTitle: 'About — Rune Tech',
  ogDescription: 'One workshop, one craftsman. Small, dependable tools instead of sprawling platforms.',
  ogUrl: siteUrl,
  twitterCard: 'summary'
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }]
})
</script>

<template>
  <main class="wrap">
    <section style="border-top: none;">
      <div class="section-head">
        <div class="eyebrow">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 2 L8 14 M4 5 L12 5 M5 9 L11 9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
          Who's forging
        </div>
        <h2>One workshop, one craftsman</h2>
      </div>
      <div class="about-body">
        <p>Rune Tech is a one-person workshop — built and run by Jean-Eric Espiegle. No team, no roadmap voted on by committee: just one person building the tools they wished already existed, released as small, dependable APIs instead of sprawling platforms.</p>
        <p>Every inquiry is read and answered personally, and every product ships because it was worth building right — not because a quarterly plan said so. The first product, <a href="https://pdf-toolkit-api.fly.dev">PDF Toolkit API</a>, set the pattern: one job, done cleanly, with pricing you can actually predict. Everything after it follows the same rule.</p>
        <p>Questions, feedback, or an idea for the next tool? <NuxtLink to="/#inquiry">Get in touch</NuxtLink> — or email <a href="mailto:inquiries@rune-tech.org">inquiries@rune-tech.org</a> directly.</p>
      </div>
    </section>
  </main>
</template>
