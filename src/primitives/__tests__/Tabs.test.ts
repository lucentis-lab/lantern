import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tabs from '@/primitives/tabs/Tabs.vue'
import TabsList from '@/primitives/tabs/TabsList.vue'
import TabsTrigger from '@/primitives/tabs/TabsTrigger.vue'
import TabsContent from '@/primitives/tabs/TabsContent.vue'

const TestTabs = {
  components: { Tabs, TabsList, TabsTrigger, TabsContent },
  template: `
    <Tabs default-value="a">
      <TabsList aria-label="Test tabs">
        <TabsTrigger value="a">Tab A</TabsTrigger>
        <TabsTrigger value="b">Tab B</TabsTrigger>
        <TabsTrigger value="c" disabled>Tab C</TabsTrigger>
      </TabsList>
      <TabsContent value="a">Content A</TabsContent>
      <TabsContent value="b">Content B</TabsContent>
      <TabsContent value="c">Content C</TabsContent>
    </Tabs>
  `,
}

describe('Tabs', () => {
  it('renders without errors', () => {
    const wrapper = mount(TestTabs)
    expect(wrapper.find('.l-tabs').exists()).toBe(true)
  })

  it('shows default active content', () => {
    const wrapper = mount(TestTabs)
    expect(wrapper.text()).toContain('Content A')
    expect(wrapper.text()).not.toContain('Content B')
  })

  it('switches content on trigger click', async () => {
    const wrapper = mount(TestTabs)
    await wrapper.findAll('[role="tab"]')[1]?.trigger('click')
    expect(wrapper.text()).toContain('Content B')
    expect(wrapper.text()).not.toContain('Content A')
  })
})

describe('TabsList', () => {
  it('has role tablist', () => {
    const wrapper = mount(TestTabs)
    expect(wrapper.find('[role="tablist"]').exists()).toBe(true)
  })

  it('passes aria-label via fallthrough', () => {
    const wrapper = mount(TestTabs)
    expect(wrapper.find('[role="tablist"]').attributes('aria-label')).toBe('Test tabs')
  })
})

describe('TabsTrigger', () => {
  it('has role tab', () => {
    const wrapper = mount(TestTabs)
    const triggers = wrapper.findAll('[role="tab"]')
    triggers.forEach((t) => expect(t.attributes('role')).toBe('tab'))
  })

  it('sets aria-selected on active trigger', () => {
    const wrapper = mount(TestTabs)
    const triggers = wrapper.findAll('[role="tab"]')
    expect(triggers[0]?.attributes('aria-selected')).toBe('true')
    expect(triggers[1]?.attributes('aria-selected')).toBe('false')
  })

  it('sets data-state on triggers', () => {
    const wrapper = mount(TestTabs)
    const triggers = wrapper.findAll('[role="tab"]')
    expect(triggers[0]?.attributes('data-state')).toBe('active')
    expect(triggers[1]?.attributes('data-state')).toBe('inactive')
  })

  it('sets tabindex 0 on active, -1 on others', () => {
    const wrapper = mount(TestTabs)
    const triggers = wrapper.findAll('[role="tab"]')
    expect(triggers[0]?.attributes('tabindex')).toBe('0')
    expect(triggers[1]?.attributes('tabindex')).toBe('-1')
  })

  it('respects disabled prop', () => {
    const wrapper = mount(TestTabs)
    const triggers = wrapper.findAll('[role="tab"]')
    expect(triggers[2]?.attributes('disabled')).toBeDefined()
  })

  it('links trigger to panel via aria-controls', () => {
    const wrapper = mount(TestTabs)
    const trigger = wrapper.findAll('[role="tab"]')[0]
    const panelId = trigger?.attributes('aria-controls')
    expect(wrapper.find(`#${panelId}`).exists()).toBe(true)
  })
})

describe('TabsContent', () => {
  it('has role tabpanel', () => {
    const wrapper = mount(TestTabs)
    expect(wrapper.find('[role="tabpanel"]').attributes('role')).toBe('tabpanel')
  })

  it('has tabindex 0', () => {
    const wrapper = mount(TestTabs)
    expect(wrapper.find('[role="tabpanel"]').attributes('tabindex')).toBe('0')
  })

  it('links panel to trigger via aria-labelledby', () => {
    const wrapper = mount(TestTabs)
    const panel = wrapper.find('[role="tabpanel"]')
    const triggerId = panel.attributes('aria-labelledby')
    expect(wrapper.find(`#${triggerId}`).exists()).toBe(true)
  })

  it('does not render inactive content', () => {
    const wrapper = mount(TestTabs)
    const panels = wrapper.findAll('[role="tabpanel"]')
    expect(panels).toHaveLength(1)
  })
})
