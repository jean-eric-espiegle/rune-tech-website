<script setup lang="ts">
const siteUrl = 'https://rune-tech.org/privacy'

useSeoMeta({
  title: 'Privacy Policy — Rune Tech',
  description: 'What Rune Tech collects through the inquiry form, how it is used, and who it is shared with.',
  ogType: 'website',
  ogTitle: 'Privacy Policy — Rune Tech',
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
      <div class="legal">
        <div class="updated">Last updated 4 September 2026</div>
        <h2>Privacy Policy</h2>
        <p>This page covers exactly what this site does today. It's short because the site itself is small.</p>

        <h3>What we collect</h3>
        <p>The only personal data this site collects is what you submit through the inquiry form: your name, email address, and message. There are no cookies, no analytics, and no third-party trackers on this site.</p>
        <p>Your colour theme preference (light or dark) is stored in your own browser's local storage. It never leaves your device and is never sent to us.</p>

        <h3>How we use it</h3>
        <p>We use your name, email, and message solely to read and respond to your inquiry. We don't add you to a mailing list, sell your data, or share it with advertisers.</p>

        <h3>Who processes it</h3>
        <ul>
          <li><strong>Netlify</strong> hosts this site and processes form submissions in transit.</li>
          <li><strong>Resend</strong> delivers our email reply to you.</li>
          <li>Your inquiry is stored in our own internal systems so we can find and respond to it.</li>
        </ul>

        <h3>Retention</h3>
        <p>We keep inquiries as a basic record of correspondence. Email us at <a href="mailto:inquiries@rune-tech.org">inquiries@rune-tech.org</a> if you'd like your submission deleted, and we'll remove it.</p>

        <h3>Your rights</h3>
        <p>You can ask us what we hold about you, or ask us to correct or delete it, at any time — just email <a href="mailto:inquiries@rune-tech.org">inquiries@rune-tech.org</a>.</p>

        <h3>Changes</h3>
        <p>If this policy changes, we'll update the date at the top of this page.</p>
      </div>
    </section>
  </main>
</template>
