// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      // AdminDash's one public (unauthenticated) endpoint — see its
      // server/api/public/inquiries.ts. Overridable at build time via
      // NUXT_PUBLIC_INQUIRY_ENDPOINT (a Netlify build env var) without a
      // code change, e.g. if AdminDash ever moves off this Fly URL.
      inquiryEndpoint: 'https://admindash.fly.dev/api/public/inquiries'
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '360x360', href: '/icon-360.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap' }
      ],
      // Runs before hydration so the stored theme choice applies with no flash.
      script: [
        {
          innerHTML: `(function(){try{var t=localStorage.getItem('rune-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          tagPosition: 'head'
        },
        // Cloudflare Web Analytics — no cookies, no personal data collected;
        // the token is a public beacon identifier, not a secret.
        {
          type: 'module',
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          'data-cf-beacon': '{"token": "5e7f791775d347b184aa85dcc1171ab1"}',
          tagPosition: 'bodyClose'
        }
      ]
    }
  }
})
