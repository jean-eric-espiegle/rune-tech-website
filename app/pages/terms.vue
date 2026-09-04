<script setup lang="ts">
const siteUrl = 'https://rune-tech.org/terms'

useSeoMeta({
  title: 'Terms of Service — Rune Tech',
  description: 'The terms for using rune-tech.org.',
  ogType: 'website',
  ogTitle: 'Terms of Service — Rune Tech',
  ogUrl: siteUrl,
  ogImage: 'https://rune-tech.org/og-image.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://rune-tech.org/og-image.png'
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }]
})
</script>

<template>
  <main class="wrap">
    <section style="border-top: none;">
      <div class="legal">
        <div class="updated">Last updated 4 September 2026</div>
        <h2>Terms of Service</h2>
        <p>These terms cover this site, rune-tech.org, only. Rune Tech's products — PDF Toolkit API and Image Optimization API — are separate services with their own terms, covering things like accounts, API usage, and billing that don't apply here.</p>

        <h3>Who we are</h3>
        <p>Rune Tech is operated by Jean-Eric Espiegle. "We," "us," and "Rune Tech" refer to that operation throughout these terms.</p>

        <h3>Using this site</h3>
        <p>This site is informational: it describes Rune Tech's products and provides a way to get in touch. You may browse it and use the inquiry form for genuine questions or business purposes. You may not use this site to send spam, attempt to compromise it, or scrape it at a rate that degrades it for others.</p>

        <h3>The inquiry form</h3>
        <p>Submitting the inquiry form sends your name, email, and message to us so we can reply. See our <NuxtLink to="/privacy">Privacy Policy</NuxtLink> for exactly what's collected and how it's handled. Submitting the form doesn't create an account or any ongoing relationship beyond that correspondence.</p>

        <h3>Content and intellectual property</h3>
        <p>The text, design, and branding on this site belong to Rune Tech unless otherwise noted. You're welcome to link to this site; you don't have permission to copy or republish its content elsewhere without asking first.</p>

        <h3>Links to our products</h3>
        <p>This site links to PDF Toolkit API and Image Optimization API, each hosted separately with its own terms and its own account/billing system. Using those products means agreeing to their own terms, not these ones.</p>

        <h3>No warranty</h3>
        <p>This site is provided "as is," without warranties of any kind. We don't guarantee it will be available, error-free, or uninterrupted at all times.</p>

        <h3>Limitation of liability</h3>
        <p>To the fullest extent permitted by law, Rune Tech isn't liable for any indirect, incidental, or consequential damages arising from your use of this site.</p>

        <h3>Changes to these terms</h3>
        <p>If these terms change, we'll update the date at the top of this page.</p>

        <h3>Governing law</h3>
        <p>[GOVERNING LAW / JURISDICTION — TO BE CONFIRMED]. These terms are governed by the laws of that jurisdiction, without regard to conflict-of-law principles.</p>

        <h3>Contact</h3>
        <p>Questions about these terms? Email <a href="mailto:inquiries@rune-tech.org">inquiries@rune-tech.org</a>.</p>
      </div>
    </section>
  </main>
</template>
