import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Dropdown from '@/primitives/dropdown/Dropdown.vue'
import DropdownTrigger from '@/primitives/dropdown/DropdownTrigger.vue'
import DropdownContent from '@/primitives/dropdown/DropdownContent.vue'
import DropdownItem from '@/primitives/dropdown/DropDownItem.vue'

const TestDropdown = {
  components: { Dropdown, DropdownTrigger, DropdownContent, DropdownItem },
  template: `
    <Dropdown>
      <DropdownTrigger>Menu</DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Item A</DropdownItem>
        <DropdownItem>Item B</DropdownItem>
        <DropdownItem disabled>Item C</DropdownItem>
      </DropdownContent>
    </Dropdown>
  `,
}

describe('Dropdown', () => {
  it('renders trigger', () => {
    const wrapper = mount(TestDropdown)
    expect(wrapper.find('.l-dropdown-trigger').exists()).toBe(true)
  })

  it('content is hidden by default', () => {
    const wrapper = mount(TestDropdown)
    expect(wrapper.find('.l-dropdown-content').exists()).toBe(false)
  })

  it('opens on trigger click', async () => {
    const wrapper = mount(TestDropdown)
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    expect(wrapper.find('.l-dropdown-content').exists()).toBe(true)
  })

  it('closes on second trigger click', async () => {
    const wrapper = mount(TestDropdown)
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    expect(wrapper.find('.l-dropdown-content').exists()).toBe(false)
  })

  it('closes on Escape key', async () => {
    const wrapper = mount(TestDropdown, { attachTo: document.body })
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    await document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.l-dropdown-content').exists()).toBe(false)
    wrapper.unmount()
  })

  it('closes on outside click', async () => {
    const wrapper = mount(TestDropdown, { attachTo: document.body })
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    await document.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.l-dropdown-content').exists()).toBe(false)
    wrapper.unmount()
  })
})

describe('DropdownTrigger', () => {
  it('has aria-haspopup menu', () => {
    const wrapper = mount(TestDropdown)
    expect(wrapper.find('.l-dropdown-trigger').attributes('aria-haspopup')).toBe('menu')
  })

  it('has aria-expanded false by default', () => {
    const wrapper = mount(TestDropdown)
    expect(wrapper.find('.l-dropdown-trigger').attributes('aria-expanded')).toBe('false')
  })

  it('has aria-expanded true when open', async () => {
    const wrapper = mount(TestDropdown)
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    expect(wrapper.find('.l-dropdown-trigger').attributes('aria-expanded')).toBe('true')
  })

  it('links trigger to content via aria-controls', async () => {
    const wrapper = mount(TestDropdown)
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    const contentId = wrapper.find('.l-dropdown-trigger').attributes('aria-controls')
    expect(wrapper.find(`#${contentId}`).exists()).toBe(true)
  })
})

describe('DropdownContent', () => {
  it('has role menu', async () => {
    const wrapper = mount(TestDropdown)
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    expect(wrapper.find('.l-dropdown-content').attributes('role')).toBe('menu')
  })

  it('links content to trigger via aria-labelledby', async () => {
    const wrapper = mount(TestDropdown)
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    const triggerId = wrapper.find('.l-dropdown-content').attributes('aria-labelledby')
    expect(wrapper.find(`#${triggerId}`).exists()).toBe(true)
  })
})

describe('DropdownItem', () => {
  it('has role menuitem', async () => {
    const wrapper = mount(TestDropdown)
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    const items = wrapper.findAll('[role="menuitem"]')
    expect(items.length).toBe(3)
  })

  it('closes dropdown on item click', async () => {
    const wrapper = mount(TestDropdown)
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    await wrapper.findAll('[role="menuitem"]')[0]?.trigger('click')
    expect(wrapper.find('.l-dropdown-content').exists()).toBe(false)
  })

  it('emits click event on item click', async () => {
    const onClick = vi.fn()
    const wrapper = mount({
      components: { Dropdown, DropdownTrigger, DropdownContent, DropdownItem },
      template: `
        <Dropdown>
          <DropdownTrigger>Menu</DropdownTrigger>
          <DropdownContent>
            <DropdownItem @click="onClick">Item A</DropdownItem>
          </DropdownContent>
        </Dropdown>
      `,
      setup: () => ({ onClick }),
    })
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    await wrapper.find('[role="menuitem"]').trigger('click')
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('does not close or emit when disabled', async () => {
    const onClick = vi.fn()
    const wrapper = mount({
      components: { Dropdown, DropdownTrigger, DropdownContent, DropdownItem },
      template: `
        <Dropdown>
          <DropdownTrigger>Menu</DropdownTrigger>
          <DropdownContent>
            <DropdownItem disabled @click="onClick">Item C</DropdownItem>
          </DropdownContent>
        </Dropdown>
      `,
      setup: () => ({ onClick }),
    })
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    await wrapper.find('[role="menuitem"]').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
    expect(wrapper.find('.l-dropdown-content').exists()).toBe(true)
  })

  it('sets disabled attributes', async () => {
    const wrapper = mount(TestDropdown)
    await wrapper.find('.l-dropdown-trigger').trigger('click')
    const disabledItem = wrapper.findAll('[role="menuitem"]')[2]
    expect(disabledItem?.attributes('disabled')).toBeDefined()
    expect(disabledItem?.attributes('aria-disabled')).toBe('true')
  })
})
