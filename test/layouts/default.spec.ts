import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import DefaultLayout from '~/layouts/default.vue'

function stubMatchMedia(prefersDark: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: prefersDark,
      media: query,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  })
}

describe('layouts/default', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('data-theme')
    stubMatchMedia(false)
  })

  it('renders the wordmark, nav links, and footer links', async () => {
    const wrapper = await mountSuspended(DefaultLayout, {
      slots: { default: () => 'page content' }
    })

    expect(wrapper.text()).toContain('RUNE TECH')
    expect(wrapper.text()).toContain('page content')
    expect(wrapper.find('a[href="/#products"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/#inquiry"]').exists()).toBe(true)
    expect(wrapper.find('a[href="mailto:inquiries@rune-tech.org"]').exists()).toBe(true)
    expect(wrapper.find('a[href="https://github.com/jean-eric-espiegle/rune-tech-website"]').exists()).toBe(true)
  })

  it('toggles from system-light to dark on first click and persists to localStorage', async () => {
    stubMatchMedia(false)
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')
    const wrapper = await mountSuspended(DefaultLayout)

    await wrapper.find('.theme-toggle').trigger('click')

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(setItemSpy).toHaveBeenCalledWith('rune-theme', 'dark')
  })

  it('toggles from system-dark to light on first click when no explicit theme is set', async () => {
    stubMatchMedia(true)
    const wrapper = await mountSuspended(DefaultLayout)

    await wrapper.find('.theme-toggle').trigger('click')

    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('toggles back from an explicit dark theme to light', async () => {
    document.documentElement.setAttribute('data-theme', 'dark')
    const wrapper = await mountSuspended(DefaultLayout)

    await wrapper.find('.theme-toggle').trigger('click')

    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('swallows a localStorage failure (e.g. private browsing) without throwing', async () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('storage disabled')
    })
    const wrapper = await mountSuspended(DefaultLayout)

    await expect(wrapper.find('.theme-toggle').trigger('click')).resolves.not.toThrow()
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })
})
