<script setup lang="ts">
useSeoMeta({
  title: 'Rune Tech — Building Creative Solutions',
  description: 'Rune Tech builds focused, single-purpose software — APIs and utilities cut clean enough to trust on day one.',
  ogType: 'website',
  ogTitle: 'Rune Tech',
  ogDescription: 'An arcane workshop for software. Small tools, deliberately built.',
  twitterCard: 'summary'
})

const formNote = ref('Usually within one or two working days.')
const formStatus = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

function toggleTheme() {
  const root = document.documentElement
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const current = root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light')
  const next = current === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  try {
    localStorage.setItem('rune-theme', next)
  } catch {
    // localStorage unavailable (private browsing, etc.) — theme just won't persist
  }
}

async function submitInquiry(event: Event) {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const data = new FormData(form)
  formStatus.value = 'sending'
  try {
    await $fetch('/', {
      method: 'POST',
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
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
  <div>
    <header>
      <a href="#top" class="wordmark">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 3 L16 29 M16 3 L24 11 M16 15 L23 21 M16 3 L8 11 M16 15 L9 21" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>RUNE&nbsp;TECH</span>
      </a>
      <nav>
        <a href="#products">Products</a>
        <a href="#inquiry">Inquiries</a>
        <button class="theme-toggle" aria-label="Toggle colour theme" type="button" @click="toggleTheme">
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 3 L12 6 M12 18 L12 21 M3 12 L6 12 M18 12 L21 12 M5.6 5.6 L7.7 7.7 M16.3 16.3 L18.4 18.4 M5.6 18.4 L7.7 16.3 M16.3 7.7 L18.4 5.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6" />
          </svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 3 L12 21 M12 3 L17 9 L12 12 L17 15 L12 21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12 L8 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </button>
      </nav>
    </header>

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
            <p>Merge, split, compress, and rasterize PDFs behind one clean REST API. Metered billing, a generous free tier, four endpoints that do exactly what they say.</p>
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

    <footer class="wrap">
      <div class="footer-mark">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16 3 L16 29 M16 3 L24 11 M16 15 L23 21 M16 3 L8 11 M16 15 L9 21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
        <span>RUNE TECH</span>
      </div>
      <p class="fine">&copy; 2026 Rune Tech. Small tools, deliberately built.</p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root {
  --bg: #E8E9F1;
  --surface: #FFFFFF;
  --surface-sunken: #DEDFEA;
  --ink: #14131F;
  --ink-muted: #514F63;
  --ink-faint: #8B899E;
  --border: #CBCBDA;
  --accent: #A8792E;
  --accent-strong: #8C6323;
  --accent-ink: #FFFBF2;
  --rune-line: #4A4E6B;
  --shadow: 0 1px 2px rgb(20 19 31 / 0.05), 0 12px 32px rgb(20 19 31 / 0.08);
  --glow: 0 0 0 rgb(217 165 68 / 0);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --bg: #0E0F1C;
    --surface: #171A2E;
    --surface-sunken: #12132A;
    --ink: #E7E4F0;
    --ink-muted: #A6A3BC;
    --ink-faint: #6E6C87;
    --border: #2B2D48;
    --accent: #D9A544;
    --accent-strong: #EFC069;
    --accent-ink: #1B1404;
    --rune-line: #8985AC;
    --shadow: 0 1px 2px rgb(0 0 0 / 0.3), 0 20px 48px rgb(0 0 0 / 0.45);
    --glow: 0 0 28px rgb(217 165 68 / 0.35);
  }
}
:root[data-theme='dark'] {
  --bg: #0E0F1C;
  --surface: #171A2E;
  --surface-sunken: #12132A;
  --ink: #E7E4F0;
  --ink-muted: #A6A3BC;
  --ink-faint: #6E6C87;
  --border: #2B2D48;
  --accent: #D9A544;
  --accent-strong: #EFC069;
  --accent-ink: #1B1404;
  --rune-line: #8985AC;
  --shadow: 0 1px 2px rgb(0 0 0 / 0.3), 0 20px 48px rgb(0 0 0 / 0.45);
  --glow: 0 0 28px rgb(217 165 68 / 0.35);
}

* { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  transition: background 0.4s ease, color 0.4s ease;
}
h1, h2, h3 {
  font-family: 'Cinzel', ui-serif, Georgia, serif;
  text-wrap: balance;
  margin: 0;
  letter-spacing: 0.01em;
}
a { color: inherit; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}

.hidden-field { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

.wrap { max-width: 1180px; margin: 0 auto; padding: 0 clamp(1.5rem, 4vw, 3rem); }

header {
  position: sticky; top: 0; z-index: 30;
  display: flex; align-items: center; justify-content: space-between;
  height: 76px;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.wordmark { display: flex; align-items: center; gap: 0.65rem; text-decoration: none; }
.wordmark svg { width: 30px; height: 30px; }
.wordmark span {
  font-family: 'Cinzel', serif; font-weight: 600; font-size: 1.15rem;
  letter-spacing: 0.04em; color: var(--ink);
}
nav { display: flex; align-items: center; gap: clamp(1.25rem, 3vw, 2.25rem); }
nav a {
  text-decoration: none; font-size: 0.92rem; font-weight: 500; color: var(--ink-muted);
  transition: color 0.2s ease;
}
nav a:hover { color: var(--accent); }

.theme-toggle {
  display: grid; place-items: center;
  width: 40px; height: 40px;
  border-radius: 4px;
  border: 1px solid var(--border);
  background: var(--surface);
  cursor: pointer;
  color: var(--accent);
  transition: border-color 0.2s ease, box-shadow 0.3s ease;
}
.theme-toggle:hover { border-color: var(--accent); box-shadow: var(--glow); }
.theme-toggle svg { width: 19px; height: 19px; }
.theme-toggle .icon-moon { display: none; }
:root[data-theme='dark'] .theme-toggle .icon-sun { display: none; }
:root[data-theme='dark'] .theme-toggle .icon-moon { display: block; }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) .theme-toggle .icon-sun { display: none; }
  :root:not([data-theme='light']) .theme-toggle .icon-moon { display: block; }
}

.hero {
  padding: clamp(3.5rem, 9vw, 7rem) 0 clamp(3rem, 7vw, 5.5rem);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}
@media (max-width: 860px) { .hero { grid-template-columns: 1fr; } }

.eyebrow {
  display: inline-flex; align-items: center; gap: 0.55rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.76rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.1rem;
}
.eyebrow svg { width: 15px; height: 15px; flex-shrink: 0; }

.hero h1 {
  font-size: clamp(2.5rem, 5.2vw, 4rem);
  line-height: 1.08;
  font-weight: 600;
  max-width: 14ch;
}
.hero .lede {
  margin: 1.5rem 0 0;
  max-width: 46ch;
  font-size: 1.1rem;
  color: var(--ink-muted);
}
.hero-cta { display: flex; align-items: center; gap: 1.25rem; margin-top: 2.25rem; flex-wrap: wrap; }

.btn-primary {
  display: inline-flex; align-items: center; gap: 0.55rem;
  background: var(--accent); color: var(--accent-ink);
  border: none; border-radius: 4px;
  padding: 0.85rem 1.6rem;
  font-family: inherit; font-size: 0.95rem; font-weight: 600;
  text-decoration: none; cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.3s ease;
}
.btn-primary:hover { background: var(--accent-strong); box-shadow: var(--glow); }
.btn-primary:active { transform: translateY(1px); }
.btn-primary:disabled { opacity: 0.65; cursor: default; }

.btn-ghost {
  font-size: 0.92rem; font-weight: 600; color: var(--ink); text-decoration: none;
  display: inline-flex; align-items: center; gap: 0.4rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 2px;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.btn-ghost:hover { color: var(--accent); border-color: var(--accent); }

.sigil-wrap {
  position: relative;
  display: grid; place-items: center;
  aspect-ratio: 1;
  max-width: 420px;
  justify-self: center;
}
.sigil-wrap svg { width: 100%; height: 100%; }
.sigil-ring { stroke: var(--border); }
.sigil-lines { stroke: var(--rune-line); }
.sigil-glow { stroke: var(--accent); filter: drop-shadow(0 0 8px color-mix(in srgb, var(--accent) 70%, transparent)); }
.sigil-pulse { animation: pulse 4.5s ease-in-out infinite; transform-origin: center; }
@keyframes pulse {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

section { padding: clamp(3rem, 7vw, 5.5rem) 0; border-top: 1px solid var(--border); }
.section-head { max-width: 60ch; margin-bottom: clamp(2rem, 5vw, 3rem); }
.section-head h2 { font-size: clamp(1.7rem, 3vw, 2.2rem); font-weight: 600; }
.section-head p { margin: 0.9rem 0 0; color: var(--ink-muted); font-size: 1.02rem; }

.tablets { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
.tablet {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2rem;
  box-shadow: var(--shadow);
  display: flex; flex-direction: column; gap: 1rem;
}
.tablet-mark { width: 34px; height: 34px; color: var(--accent); }
.tablet h3 { font-size: 1.25rem; font-weight: 600; }
.tablet p { margin: 0; color: var(--ink-muted); font-size: 0.96rem; flex-grow: 1; }
.tablet-meta {
  font-family: 'IBM Plex Mono', monospace; font-size: 0.74rem; letter-spacing: 0.06em;
  color: var(--ink-faint); text-transform: uppercase;
}
.tablet-link {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.9rem; font-weight: 600; color: var(--accent); text-decoration: none;
  margin-top: 0.25rem;
}
.tablet-link svg { width: 14px; height: 14px; transition: transform 0.2s ease; }
.tablet-link:hover svg { transform: translate(2px, -2px); }

.tablet-empty {
  border: 1px dashed var(--border);
  border-radius: 4px;
  padding: 2rem;
  display: flex; flex-direction: column; justify-content: center; gap: 0.5rem;
  color: var(--ink-faint); font-size: 0.9rem;
}

.inquiry-shell {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 1fr 1.15fr;
}
@media (max-width: 780px) { .inquiry-shell { grid-template-columns: 1fr; } }
.inquiry-side {
  padding: clamp(2rem, 4vw, 2.75rem);
  background: var(--surface-sunken);
  border-right: 1px solid var(--border);
  display: flex; flex-direction: column; justify-content: space-between;
}
@media (max-width: 780px) { .inquiry-side { border-right: none; border-bottom: 1px solid var(--border); } }
.inquiry-side h3 { font-size: 1.35rem; font-weight: 600; margin-bottom: 0.75rem; }
.inquiry-side p { color: var(--ink-muted); font-size: 0.94rem; margin: 0; }
.inquiry-side .glyph { width: 26px; height: 26px; color: var(--accent); margin-bottom: 1.25rem; }

form { padding: clamp(2rem, 4vw, 2.75rem); display: flex; flex-direction: column; gap: 1.15rem; }
.field label {
  display: block; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.45rem; color: var(--ink);
}
.field input, .field textarea {
  width: 100%; padding: 0.7rem 0.85rem;
  border: 1px solid var(--border); border-radius: 4px;
  background: var(--bg); color: var(--ink);
  font-family: inherit; font-size: 0.95rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.field input:focus-visible, .field textarea:focus-visible {
  outline: none; border-color: var(--accent); box-shadow: var(--glow);
}
.field textarea { resize: vertical; min-height: 110px; }
.form-foot { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.form-note { font-size: 0.78rem; color: var(--ink-faint); }

footer {
  border-top: 1px solid var(--border);
  padding: 2.25rem 0;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
}
.footer-mark { display: flex; align-items: center; gap: 0.55rem; }
.footer-mark svg { width: 20px; height: 20px; color: var(--ink-faint); }
.footer-mark span { font-family: 'Cinzel', serif; font-size: 0.85rem; letter-spacing: 0.03em; color: var(--ink-muted); }
footer .fine { font-size: 0.8rem; color: var(--ink-faint); }

.reveal { animation: rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
.reveal-delay { animation-delay: 0.12s; }
@keyframes rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
</style>
