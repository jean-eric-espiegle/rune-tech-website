import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import TermsPage from '~/pages/terms.vue'

describe('pages/terms', () => {
  it('covers this site only and links out to Privacy', async () => {
    const wrapper = await mountSuspended(TermsPage)

    expect(wrapper.find('h2').text()).toBe('Terms of Service')
    expect(wrapper.text()).toContain('Jean-Eric Espiegle')
    expect(wrapper.find('a[href="/privacy"]').exists()).toBe(true)
    expect(wrapper.findAll('a[href="mailto:inquiries@rune-tech.org"]').length).toBeGreaterThan(0)
  })
})
