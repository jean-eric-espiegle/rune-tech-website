import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import { flushPromises } from '@vue/test-utils'
import IndexPage from '~/pages/index.vue'

const fetchMock = vi.hoisted(() => vi.fn())
mockNuxtImport('$fetch', () => fetchMock)

describe('pages/index', () => {
  beforeEach(() => {
    fetchMock.mockReset()
  })

  it('renders the hero, product pricing, code sample, and all FAQ entries', async () => {
    const wrapper = await mountSuspended(IndexPage)

    expect(wrapper.find('h1').text()).toContain('forge small tools')
    expect(wrapper.text()).toContain('PDF Toolkit API')
    expect(wrapper.text()).toContain('Free: 100 ops/mo')
    expect(wrapper.find('.code-sample code').text()).toContain('/v1/merge')
    expect(wrapper.findAll('.faq-item')).toHaveLength(5)
    expect(wrapper.find('a[href="/about"]').exists()).toBe(true)
  })

  it('treats a filled honeypot field as spam: no network call, form reset, success message shown', async () => {
    const wrapper = await mountSuspended(IndexPage)

    await wrapper.find('#name').setValue('Bot Name')
    await wrapper.find('#email').setValue('bot@example.com')
    await wrapper.find('textarea#message').setValue('spam body')
    await wrapper.find('input[name="bot-field"]').setValue('gotcha')

    await wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(fetchMock).not.toHaveBeenCalled()
    expect(wrapper.find('.form-note').text()).toContain('we’ll be in touch soon')
  })

  it('submits a real inquiry, shows the sending state, then the success message', async () => {
    let resolveFetch: (v: unknown) => void = () => {}
    fetchMock.mockReturnValueOnce(new Promise((resolve) => { resolveFetch = resolve }))

    const wrapper = await mountSuspended(IndexPage)
    await wrapper.find('#name').setValue('Jane Doe')
    await wrapper.find('#email').setValue('jane@example.com')
    await wrapper.find('textarea#message').setValue('Hello there')

    const submitPromise = wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(wrapper.find('button[type="submit"]').text()).toBe('Sending…')
    expect(wrapper.find('button[type="submit"]').attributes('disabled')).toBeDefined()
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('inquiries'),
      expect.objectContaining({
        method: 'POST',
        body: { name: 'Jane Doe', email: 'jane@example.com', message: 'Hello there' }
      })
    )

    resolveFetch({})
    await submitPromise
    await flushPromises()

    expect(wrapper.find('.form-note').text()).toContain('we’ll be in touch soon')
    expect(wrapper.find('button[type="submit"]').attributes('disabled')).toBeUndefined()
  })

  it('shows an error message when the inquiry endpoint fails', async () => {
    fetchMock.mockRejectedValueOnce(new Error('network down'))

    const wrapper = await mountSuspended(IndexPage)
    await wrapper.find('#name').setValue('Jane Doe')
    await wrapper.find('#email').setValue('jane@example.com')
    await wrapper.find('textarea#message').setValue('Hello there')

    await wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(wrapper.find('.form-note').text()).toContain('Something went wrong')
  })
})
