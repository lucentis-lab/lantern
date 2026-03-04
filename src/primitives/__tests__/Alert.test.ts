import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Alert from '@/primitives/alert/Alert.vue'
import AlertClose from '@/components/alert/AlertClose.vue'
import { lantern } from '@/plugin'
import { defaultTheme } from '@/themes/default'

const pluginOptions = { theme: defaultTheme }

describe('AlertPrimitive', () => {
  it('is visible by default', () => {
    const wrapper = mount(Alert)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.element.getAttribute('data-state')).toBe('open')
  })

  it('can be dismissed via exposed method', async () => {
    const wrapper = mount(Alert)

    ;(wrapper.vm as any).dismiss()
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.l-alert').exists()).toBe(false)
  })

  it('auto-dismisses after duration', async () => {
    vi.useFakeTimers()

    const wrapper = mount(Alert, {
      props: { duration: 1000 },
    })

    vi.advanceTimersByTime(1000)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.l-alert').exists()).toBe(false)

    vi.useRealTimers()
  })
})

describe('AlertClose', () => {
  it('dismisses alert when clicked', async () => {
    const wrapper = mount(
      {
        components: { Alert, AlertClose },
        template: `
          <Alert ref="alert">
            <AlertClose />
          </Alert>
        `,
      },
      {
        global: {
          plugins: [[lantern, pluginOptions]],
        },
      },
    )

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('.l-alert').exists()).toBe(false)
  })
})
