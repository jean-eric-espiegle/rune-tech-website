import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PrivacyPage from '~/pages/privacy.vue'

describe('pages/privacy', () => {
  it('discloses what is collected and who processes it', async () => {
    const wrapper = await mountSuspended(PrivacyPage)

    expect(wrapper.find('h2').text()).toBe('Privacy Policy')
    expect(wrapper.text()).toContain('Netlify')
    expect(wrapper.text()).toContain('Cloudflare')
    expect(wrapper.text()).toContain('Resend')
    expect(wrapper.findAll('a[href="mailto:inquiries@rune-tech.org"]').length).toBeGreaterThan(0)
  })
})
