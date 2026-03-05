import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Popover from '@/primitives/popover/Popover.vue'
import PopoverTrigger from '@/primitives/popover/PopoverTrigger.vue'
import PopoverContent from '@/primitives/popover/PopoverContent.vue'

const TestPopover = {
  components: { Popover, PopoverTrigger, PopoverContent },
  template: `
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Popover body</PopoverContent>
    </Popover>
  `,
}

describe('Popover', () => {
  it('renders trigger', () => {
    const wrapper = mount(TestPopover)
    expect(wrapper.find('.l-popover-trigger').exists()).toBe(true)
  })

  it('content is hidden by default', () => {
    const wrapper = mount(TestPopover, { attachTo: document.body })
    expect(wrapper.find('.l-popover-content').isVisible()).toBe(false)
    wrapper.unmount()
  })

  it('opens on trigger click', async () => {
    const wrapper = mount(TestPopover, { attachTo: document.body })
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.l-popover-content').isVisible()).toBe(true)
    wrapper.unmount()
  })

  it('closes on second trigger click', async () => {
    const wrapper = mount(TestPopover, { attachTo: document.body })
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.l-popover-content').isVisible()).toBe(false)
    wrapper.unmount()
  })

  it('closes on Escape key', async () => {
    const wrapper = mount(TestPopover, { attachTo: document.body })
    await wrapper.find('button').trigger('click')
    await document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.l-popover-content').isVisible()).toBe(false)
    wrapper.unmount()
  })

  it('closes on outside click', async () => {
    const wrapper = mount(TestPopover, { attachTo: document.body })
    await wrapper.find('button').trigger('click')
    await document.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.l-popover-content').isVisible()).toBe(false)
    wrapper.unmount()
  })
})

describe('PopoverTrigger', () => {
  it('has aria-haspopup dialog', () => {
    const wrapper = mount(TestPopover)
    expect(wrapper.find('button').attributes('aria-haspopup')).toBe('dialog')
  })

  it('has aria-expanded false by default', () => {
    const wrapper = mount(TestPopover)
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('false')
  })

  it('has aria-expanded true when open', async () => {
    const wrapper = mount(TestPopover, { attachTo: document.body })
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('true')
    wrapper.unmount()
  })

  it('links trigger to content via aria-controls', async () => {
    const wrapper = mount(TestPopover, { attachTo: document.body })
    await wrapper.find('button').trigger('click')
    const contentId = wrapper.find('button').attributes('aria-controls')
    expect(document.getElementById(contentId!)).not.toBeNull()
    wrapper.unmount()
  })
})

describe('PopoverContent', () => {
  it('has role dialog', async () => {
    const wrapper = mount(TestPopover, { attachTo: document.body })
    await wrapper.find('button').trigger('click')
    expect(document.querySelector('.l-popover-content')?.getAttribute('role')).toBe('dialog')
    wrapper.unmount()
  })

  it('is teleported to body', async () => {
    const wrapper = mount(TestPopover, { attachTo: document.body })
    await wrapper.find('button').trigger('click')
    expect(document.body.contains(document.querySelector('.l-popover-content'))).toBe(true)
    wrapper.unmount()
  })

  it('links content to trigger via aria-labelledby', async () => {
    const wrapper = mount(TestPopover, { attachTo: document.body })
    await wrapper.find('button').trigger('click')
    const content = document.querySelector('.l-popover-content')
    const triggerId = content?.getAttribute('aria-labelledby')
    expect(document.getElementById(triggerId!)).not.toBeNull()
    wrapper.unmount()
  })
})
