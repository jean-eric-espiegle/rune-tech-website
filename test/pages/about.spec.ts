import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AboutPage from '~/pages/about.vue'

describe('pages/about', () => {
  it('renders the solo-builder story with links to the product and contact', async () => {
    const wrapper = await mountSuspended(AboutPage)

    expect(wrapper.text()).toContain('Jean-Eric Espiegle')
    expect(wrapper.find('a[href="https://pdf-toolkit-api.fly.dev"]').exists()).toBe(true)
    expect(wrapper.find('a[href="mailto:inquiries@rune-tech.org"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/#inquiry"]').exists()).toBe(true)
  })
})
