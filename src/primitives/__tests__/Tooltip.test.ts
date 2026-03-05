import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from '@/primitives/tooltip/Tooltip.vue'
import TooltipTrigger from '@/primitives/tooltip/TooltipTrigger.vue'
import TooltipContent from '@/primitives/tooltip/TooltipContent.vue'

const TestTooltip = {
  components: { Tooltip, TooltipTrigger, TooltipContent },
  template: `
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>Tooltip text</TooltipContent>
    </Tooltip>
  `,
}

describe('Tooltip', () => {
  it('content is hidden by default', () => {
    const wrapper = mount(TestTooltip)
    expect(wrapper.find('.l-tooltip-content').isVisible()).toBe(false)
  })

  it('opens on mouseenter', async () => {
    const wrapper = mount(TestTooltip)
    await wrapper.find('.l-tooltip-trigger').trigger('mouseenter')
    expect(wrapper.find('.l-tooltip-content').isVisible()).toBe(true)
  })

  it('closes on mouseleave', async () => {
    const wrapper = mount(TestTooltip)
    await wrapper.find('.l-tooltip-trigger').trigger('mouseenter')
    await wrapper.find('.l-tooltip-trigger').trigger('mouseleave')
    expect(wrapper.find('.l-tooltip-content').isVisible()).toBe(false)
  })

  it('opens on focus', async () => {
    const wrapper = mount(TestTooltip)
    await wrapper.find('.l-tooltip-trigger').trigger('focus')
    expect(wrapper.find('.l-tooltip-content').isVisible()).toBe(true)
  })

  it('closes on blur', async () => {
    const wrapper = mount(TestTooltip)
    await wrapper.find('.l-tooltip-trigger').trigger('focus')
    await wrapper.find('.l-tooltip-trigger').trigger('blur')
    expect(wrapper.find('.l-tooltip-content').isVisible()).toBe(false)
  })
})

describe('TooltipTrigger', () => {
  it('has aria-describedby pointing to content', async () => {
    const wrapper = mount(TestTooltip)
    await wrapper.find('.l-tooltip-trigger').trigger('mouseenter')
    const describedBy = wrapper.find('.l-tooltip-trigger').attributes('aria-describedby')
    expect(wrapper.find(`#${describedBy}`).exists()).toBe(true)
  })
})

describe('TooltipContent', () => {
  it('has role tooltip', async () => {
    const wrapper = mount(TestTooltip)
    await wrapper.find('.l-tooltip-trigger').trigger('mouseenter')
    expect(wrapper.find('.l-tooltip-content').attributes('role')).toBe('tooltip')
  })

  it('id matches trigger aria-describedby', async () => {
    const wrapper = mount(TestTooltip)
    await wrapper.find('.l-tooltip-trigger').trigger('mouseenter')
    const describedBy = wrapper.find('.l-tooltip-trigger').attributes('aria-describedby')
    const contentId = wrapper.find('.l-tooltip-content').attributes('id')
    expect(describedBy).toBe(contentId)
  })
})
