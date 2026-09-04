<script setup lang="ts">
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
</script>

<template>
  <div>
    <header>
      <NuxtLink to="/" class="wordmark">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 3 L16 29 M16 3 L24 11 M16 15 L23 21 M16 3 L8 11 M16 15 L9 21" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>RUNE&nbsp;TECH</span>
      </NuxtLink>
      <nav>
        <a href="/#products">Products</a>
        <NuxtLink to="/about">About</NuxtLink>
        <a href="/#inquiry">Inquiries</a>
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

    <slot />

    <footer class="wrap">
      <div class="footer-mark">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16 3 L16 29 M16 3 L24 11 M16 15 L23 21 M16 3 L8 11 M16 15 L9 21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
        <span>RUNE TECH</span>
      </div>
      <div class="footer-links">
        <a href="mailto:inquiries@rune-tech.org">inquiries@rune-tech.org</a>
        <a href="https://github.com/jean-eric-espiegle/rune-tech-website" target="_blank" rel="noopener">GitHub</a>
        <NuxtLink to="/changelog">Changelog</NuxtLink>
        <NuxtLink to="/privacy">Privacy</NuxtLink>
      </div>
      <p class="fine">&copy; 2026 Rune Tech. Small tools, deliberately built.</p>
    </footer>
  </div>
</template>

<style>
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
.tablet p { margin: 0; color: var(--ink-muted); font-size: 0.96rem; }
.tablet-meta {
  font-family: 'IBM Plex Mono', monospace; font-size: 0.74rem; letter-spacing: 0.06em;
  color: var(--ink-faint); text-transform: uppercase;
}
.tablet-pricing {
  font-family: 'IBM Plex Mono', monospace; font-size: 0.82rem;
  color: var(--ink-faint) !important;
}
.code-sample {
  margin: 0; padding: 0.9rem 1rem;
  background: var(--surface-sunken);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow-x: auto;
}
.code-sample code {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--ink-muted);
  white-space: pre;
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

.about-body { max-width: 62ch; color: var(--ink-muted); font-size: 1.02rem; }
.about-body p + p { margin-top: 1rem; }

.faq-list { display: flex; flex-direction: column; gap: 1.75rem; max-width: 70ch; }
.faq-item h3 { font-size: 1.05rem; font-weight: 600; margin-bottom: 0.45rem; }
.faq-item p { margin: 0; color: var(--ink-muted); font-size: 0.96rem; }

.changelog-list { display: flex; flex-direction: column; gap: 2.25rem; max-width: 65ch; }
.changelog-item { padding-left: 1.25rem; border-left: 2px solid var(--border); }
.changelog-date {
  display: block; font-family: 'IBM Plex Mono', monospace; font-size: 0.76rem;
  letter-spacing: 0.06em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.4rem;
}
.changelog-item h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.4rem; }
.changelog-item p { margin: 0; color: var(--ink-muted); font-size: 0.96rem; }

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

.legal { max-width: 68ch; }
.legal h2 { font-size: clamp(1.7rem, 3vw, 2.2rem); font-weight: 600; margin-bottom: 0.5rem; }
.legal .updated { font-family: 'IBM Plex Mono', monospace; font-size: 0.76rem; color: var(--ink-faint); text-transform: uppercase; letter-spacing: 0.08em; }
.legal h3 { font-family: 'Cinzel', ui-serif, Georgia, serif; font-size: 1.15rem; font-weight: 600; margin: 2rem 0 0.6rem; }
.legal p, .legal li { color: var(--ink-muted); font-size: 0.98rem; }
.legal ul { padding-left: 1.2rem; margin: 0.5rem 0; }
.legal li + li { margin-top: 0.4rem; }
.legal a { color: var(--accent); }

footer {
  border-top: 1px solid var(--border);
  padding: 2.25rem 0;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
}
.footer-mark { display: flex; align-items: center; gap: 0.55rem; }
.footer-mark svg { width: 20px; height: 20px; color: var(--ink-faint); }
.footer-mark span { font-family: 'Cinzel', serif; font-size: 0.85rem; letter-spacing: 0.03em; color: var(--ink-muted); }
.footer-links { display: flex; align-items: center; gap: 1.25rem; font-size: 0.85rem; }
.footer-links a { text-decoration: none; color: var(--ink-muted); transition: color 0.2s ease; }
.footer-links a:hover { color: var(--accent); }
footer .fine { font-size: 0.8rem; color: var(--ink-faint); }

.reveal { animation: rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
.reveal-delay { animation-delay: 0.12s; }
@keyframes rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
</style>
