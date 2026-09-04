<script setup lang="ts">
const siteUrl = 'https://rune-tech.org'

useSeoMeta({
  title: 'Rune Tech — Building Creative Solutions',
  description: 'Rune Tech builds focused, single-purpose software — APIs and utilities cut clean enough to trust on day one.',
  ogType: 'website',
  ogTitle: 'Rune Tech',
  ogDescription: 'An arcane workshop for software. Small tools, deliberately built.',
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/og-image.png`,
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/og-image.png`
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'Rune Tech',
            url: siteUrl,
            founder: { '@type': 'Person', name: 'Jean-Eric Espiegle' },
            description: 'Rune Tech builds focused, single-purpose software — APIs and utilities cut clean enough to trust on day one.'
          },
          {
            '@type': 'SoftwareApplication',
            name: 'PDF Toolkit API',
            url: 'https://pdf-toolkit-api.fly.dev',
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Any',
            description: 'Merge, split, compress, and rasterize PDFs behind one clean REST API. Metered billing, a generous free tier, four endpoints that do exactly what they say.',
            offers: [
              { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD', description: '100 operations/month, no card required.' },
              { '@type': 'Offer', name: 'Starter', price: '9', priceCurrency: 'USD', description: '2,000 operations/month, then $0.002/operation.' },
              { '@type': 'Offer', name: 'Pro', price: '29', priceCurrency: 'USD', description: '10,000 operations/month, then $0.002/operation.' },
              { '@type': 'Offer', name: 'Scale', price: '99', priceCurrency: 'USD', description: '50,000 operations/month, then $0.002/operation.' }
            ],
            provider: { '@id': `${siteUrl}/#organization` }
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Rune Tech?',
                acceptedAnswer: { '@type': 'Answer', text: 'Rune Tech builds small, single-purpose software tools — currently APIs — designed to do one job well instead of sprawling into an all-in-one platform.' }
              },
              {
                '@type': 'Question',
                name: 'Who is behind Rune Tech?',
                acceptedAnswer: { '@type': 'Answer', text: 'Rune Tech is built and run by Jean-Eric Espiegle, a solo developer building the tools they wished already existed.' }
              },
              {
                '@type': 'Question',
                name: "What's the first product?",
                acceptedAnswer: { '@type': 'Answer', text: 'PDF Toolkit API: merge, split, compress, and rasterize PDFs through one REST API. Free tier is 100 operations/month with no card required; paid tiers start at $9/month.' }
              },
              {
                '@type': 'Question',
                name: 'How do I get in touch?',
                acceptedAnswer: { '@type': 'Answer', text: 'Use the inquiry form on this page, or email inquiries@rune-tech.org directly. Every message is read and replied to personally, usually within one or two working days.' }
              },
              {
                '@type': 'Question',
                name: 'Will there be more products?',
                acceptedAnswer: { '@type': 'Answer', text: "Yes. Each new tool follows the same rule: small, focused, and built to outlast the trend that inspired it. The next one is already being drawn up." }
              }
            ]
          }
        ]
      })
    }
  ]
})

const formNote = ref('Usually within one or two working days.')
const formStatus = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

async function submitInquiry(event: Event) {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const data = new FormData(form)

  // Honeypot: a real visitor never fills this in (it's visually hidden).
  // A bot that fills every field will — so just pretend to succeed rather
  // than telling it what tripped the check.
  if (data.get('bot-field')) {
    formStatus.value = 'sent'
    formNote.value = 'Thanks — we’ll be in touch soon.'
    form.reset()
    return
  }

  formStatus.value = 'sending'
  try {
    await $fetch(useRuntimeConfig().public.inquiryEndpoint, {
      method: 'POST',
      body: {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message')
      }
    })
    formStatus.value = 'sent'
    formNote.value = 'Thanks — we’ll be in touch soon.'
    form.reset()
  } catch {
    formStatus.value = 'error'
    formNote.value = 'Something went wrong — please email us directly instead.'
  }
}
</script>

<template>
  <main id="top" class="wrap">
    <section class="hero" style="border-top: none;">
      <div class="reveal">
        <div class="eyebrow">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 1 L8 15 M8 1 L13 6 M8 8 L12 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
          An arcane workshop for software
        </div>
        <h1>We forge small tools with old&#8209;world precision.</h1>
        <p class="lede">Rune Tech builds focused, single-purpose software — APIs and utilities cut clean enough to trust on day one. No sprawl, no bloat: each product does one thing, built to outlast the trend that inspired it.</p>
        <div class="hero-cta">
          <a href="#products" class="btn-primary">
            See what we've forged
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 8 L13 8 M8 3 L13 8 L8 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </a>
          <a href="#inquiry" class="btn-ghost">Start an inquiry</a>
        </div>
      </div>
      <div class="sigil-wrap reveal reveal-delay">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle class="sigil-ring" cx="100" cy="100" r="92" stroke-width="1" />
          <circle class="sigil-ring" cx="100" cy="100" r="70" stroke-width="1" stroke-dasharray="2 6" />
          <g class="sigil-lines" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M100 35 L100 165" />
            <path d="M100 35 L138 68" />
            <path d="M100 88 L132 112" />
            <path d="M100 35 L62 68" />
            <path d="M100 88 L68 112" />
            <path d="M100 130 L128 150" />
            <path d="M100 130 L72 150" />
          </g>
          <g class="sigil-glow sigil-pulse" stroke-width="2.2" stroke-linecap="round">
            <path d="M100 35 L100 60" />
            <circle cx="100" cy="35" r="3.5" fill="var(--accent)" stroke="none" />
          </g>
        </svg>
      </div>
    </section>

    <section id="products">
      <div class="section-head">
        <div class="eyebrow">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 8 L14 8 M8 2 L8 14 M4.5 4.5 L11.5 11.5 M11.5 4.5 L4.5 11.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
          From the workshop
        </div>
        <h2>What we've built so far</h2>
        <p>Small on purpose. Each product ships as a standalone API — pay for what you use, cancel any time.</p>
      </div>
      <div class="tablets">
        <div class="tablet">
          <svg class="tablet-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="6" y="4" width="16" height="22" rx="1.5" stroke="currentColor" stroke-width="1.6" />
            <path d="M22 4 L26 8 L22 8 Z" fill="currentColor" />
            <path d="M10 12 L18 12 M10 16 L18 16 M10 20 L15 20" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
          </svg>
          <div>
            <div class="tablet-meta">Live &middot; est. 2026</div>
            <h3>PDF Toolkit API</h3>
          </div>
          <p>Merge, split, compress, and rasterize PDFs behind one clean REST API. Four endpoints that do exactly what they say — no OCR, no e-signing, no bloat.</p>
          <p class="tablet-pricing">Free: 100 ops/mo, no card &middot; Starter $9/mo &middot; Pro $29/mo &middot; Scale $99/mo</p>
          <pre class="code-sample"><code>curl -X POST https://pdf-toolkit-api.fly.dev/v1/merge \
  -H "x-api-key: YOUR_KEY" \
  -F "files=@a.pdf" -F "files=@b.pdf"</code></pre>
          <a class="tablet-link" href="https://pdf-toolkit-api.fly.dev" target="_blank" rel="noopener">
            Visit PDF Toolkit API
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 10 L10 6 M6 6 L10 6 L10 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </a>
        </div>
        <div class="tablet-empty">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 4 L12 20 M4 12 L20 12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
          The next tool is being drawn up.
        </div>
      </div>
    </section>

    <section id="faq">
      <div class="section-head">
        <div class="eyebrow">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 1 C5 1 4 3 4 4.5 C4 6 5.5 6 5.5 7.5 M5.5 10.5 L5.5 10.6 M8 1 L8 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /><circle cx="8" cy="13" r="0.9" fill="currentColor" /></svg>
          Questions
        </div>
        <h2>Frequently asked</h2>
      </div>
      <div class="faq-list">
        <div class="faq-item">
          <h3>What is Rune Tech?</h3>
          <p>Rune Tech builds small, single-purpose software tools — currently APIs — designed to do one job well instead of sprawling into an all-in-one platform.</p>
        </div>
        <div class="faq-item">
          <h3>Who is behind Rune Tech?</h3>
          <p>Rune Tech is built and run by Jean-Eric Espiegle, a solo developer building the tools they wished already existed. More on <NuxtLink to="/about">the About page</NuxtLink>.</p>
        </div>
        <div class="faq-item">
          <h3>What's the first product?</h3>
          <p>PDF Toolkit API: merge, split, compress, and rasterize PDFs through one REST API. Free tier is 100 operations/month with no card required; paid tiers start at $9/month.</p>
        </div>
        <div class="faq-item">
          <h3>How do I get in touch?</h3>
          <p>Use the inquiry form below, or email <a href="mailto:inquiries@rune-tech.org">inquiries@rune-tech.org</a> directly. Every message is read and replied to personally, usually within one or two working days.</p>
        </div>
        <div class="faq-item">
          <h3>Will there be more products?</h3>
          <p>Yes. Each new tool follows the same rule: small, focused, and built to outlast the trend that inspired it. The next one is already being drawn up.</p>
        </div>
      </div>
    </section>

    <section id="inquiry">
      <div class="inquiry-shell">
        <div class="inquiry-side">
          <div>
            <svg class="glyph" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2 L12 22 M12 2 L18 8 M12 12 L17 16 M12 2 L6 8 M12 12 L7 16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <h3>Have something in mind?</h3>
            <p>Tell us what you're building, or what's missing from your stack. We read every inquiry ourselves and reply from a real inbox, not a ticket queue.</p>
          </div>
          <p class="form-note" style="margin-top: 2rem;">{{ formNote }}</p>
        </div>
        <form name="inquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit="submitInquiry">
          <input type="hidden" name="form-name" value="inquiry">
          <p class="hidden-field">
            <label>Don't fill this out if you're human: <input name="bot-field"></label>
          </p>
          <div class="field">
            <label for="name">Name</label>
            <input id="name" type="text" name="name" autocomplete="name" required>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" type="email" name="email" autocomplete="email" required>
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <div class="form-foot">
            <button type="submit" class="btn-primary" :disabled="formStatus === 'sending'">
              {{ formStatus === 'sending' ? 'Sending…' : 'Send inquiry' }}
            </button>
            <span class="form-note">&nbsp;</span>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>
