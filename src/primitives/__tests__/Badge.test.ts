import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from '@/primitives/badge/Badge.vue'
import BadgeDismiss from '@/primitives/badge/BadgeDismiss.vue'

describe('BadgePrimitive', () => {
  it('renders a span element', () => {
    const wrapper = mount(Badge)
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders slot content', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'v1.0.0' },
    })
    expect(wrapper.text()).toBe('v1.0.0')
  })

  it('is visible by default', () => {
    const wrapper = mount(Badge)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.attributes('data-state')).toBe('visible')
  })

  it('can be dismissed via exposed method', async () => {
    const wrapper = mount(Badge)

    ;(wrapper.vm as any).dismiss()
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.l-badge').exists()).toBe(false)
  })

  it('emits dismiss event when dismissed', async () => {
    const wrapper = mount(Badge)

    ;(wrapper.vm as any).dismiss()
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('dismiss')).toHaveLength(1)
  })
})

describe('BadgeDismiss', () => {
  it('renders a button element', () => {
    const wrapper = mount({
      components: { Badge, BadgeDismiss },
      template: `<Badge><BadgeDismiss /></Badge>`,
    })
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('has default aria-label', () => {
    const wrapper = mount({
      components: { Badge, BadgeDismiss },
      template: `<Badge><BadgeDismiss /></Badge>`,
    })
    expect(wrapper.find('button').attributes('aria-label')).toBe('Remove badge')
  })

  it('accepts custom aria-label', () => {
    const wrapper = mount({
      components: { Badge, BadgeDismiss },
      template: `<Badge><BadgeDismiss aria-label="Remove tag" /></Badge>`,
    })
    expect(wrapper.find('button').attributes('aria-label')).toBe('Remove tag')
  })

  it('dismisses badge when clicked', async () => {
    const wrapper = mount({
      components: { Badge, BadgeDismiss },
      template: `<Badge><BadgeDismiss /></Badge>`,
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('.l-badge').exists()).toBe(false)
  })
})
