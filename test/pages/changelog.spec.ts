import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ChangelogPage from '~/pages/changelog.vue'

describe('pages/changelog', () => {
  it('renders all four dated entries in order', async () => {
    const wrapper = await mountSuspended(ChangelogPage)
    const items = wrapper.findAll('.changelog-item')

    expect(items).toHaveLength(4)
    expect(items[0].text()).toContain('Image Optimization API launches')
    expect(items[1].text()).toContain('Content and SEO groundwork')
    expect(items[2].text()).toContain('Rune Tech site goes live')
    expect(items[3].text()).toContain('PDF Toolkit API launches')
    expect(wrapper.find('time').attributes('datetime')).toBe('2026-09-04')
  })
})
