import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Accordion from '@/primitives/accordion/Accordion.vue'
import AccordionItem from '@/primitives/accordion/AccordionItem.vue'
import AccordionTrigger from '@/primitives/accordion/AccordionTrigger.vue'
import AccordionContent from '@/primitives/accordion/AccordionContent.vue'

const TestAccordion = {
  components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
  template: `
    <Accordion>
      <AccordionItem value="a">
        <AccordionTrigger>Trigger A</AccordionTrigger>
        <AccordionContent>Content A</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Trigger B</AccordionTrigger>
        <AccordionContent>Content B</AccordionContent>
      </AccordionItem>
    </Accordion>
  `,
}

const TestAccordionMultiple = {
  components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
  template: `
    <Accordion type="multiple">
      <AccordionItem value="a">
        <AccordionTrigger>Trigger A</AccordionTrigger>
        <AccordionContent>Content A</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Trigger B</AccordionTrigger>
        <AccordionContent>Content B</AccordionContent>
      </AccordionItem>
    </Accordion>
  `,
}

describe('Accordion (single)', () => {
  it('renders without errors', () => {
    const wrapper = mount(TestAccordion)
    expect(wrapper.find('.l-accordion').exists()).toBe(true)
  })

  it('all items closed by default', () => {
    const wrapper = mount(TestAccordion)
    expect(wrapper.text()).not.toContain('Content A')
    expect(wrapper.text()).not.toContain('Content B')
  })

  it('opens an item on trigger click', async () => {
    const wrapper = mount(TestAccordion)
    await wrapper.findAll('[role="button"], button')[0]?.trigger('click')
    expect(wrapper.text()).toContain('Content A')
  })

  it('closes an open item on second click', async () => {
    const wrapper = mount(TestAccordion)
    const trigger = wrapper.findAll('button')[0]
    await trigger?.trigger('click')
    await trigger?.trigger('click')
    expect(wrapper.text()).not.toContain('Content A')
  })

  it('closes previous item when opening another', async () => {
    const wrapper = mount(TestAccordion)
    const triggers = wrapper.findAll('button')
    await triggers[0]?.trigger('click')
    await triggers[1]?.trigger('click')
    expect(wrapper.text()).not.toContain('Content A')
    expect(wrapper.text()).toContain('Content B')
  })
})

describe('Accordion (multiple)', () => {
  it('can open multiple items at once', async () => {
    const wrapper = mount(TestAccordionMultiple)
    const triggers = wrapper.findAll('button')
    await triggers[0]?.trigger('click')
    await triggers[1]?.trigger('click')
    expect(wrapper.text()).toContain('Content A')
    expect(wrapper.text()).toContain('Content B')
  })

  it('closes only the clicked item', async () => {
    const wrapper = mount(TestAccordionMultiple)
    const triggers = wrapper.findAll('button')
    await triggers[0]?.trigger('click')
    await triggers[1]?.trigger('click')
    await triggers[0]?.trigger('click')
    expect(wrapper.text()).not.toContain('Content A')
    expect(wrapper.text()).toContain('Content B')
  })
})

describe('AccordionItem', () => {
  it('sets data-state closed by default', () => {
    const wrapper = mount(TestAccordion)
    const items = wrapper.findAll('.l-accordion-item')
    items.forEach((item) => expect(item.attributes('data-state')).toBe('closed'))
  })

  it('sets data-state open when active', async () => {
    const wrapper = mount(TestAccordion)
    await wrapper.findAll('button')[0]?.trigger('click')
    expect(wrapper.findAll('.l-accordion-item')[0]?.attributes('data-state')).toBe('open')
  })
})

describe('AccordionTrigger', () => {
  it('sets aria-expanded false by default', () => {
    const wrapper = mount(TestAccordion)
    const triggers = wrapper.findAll('button')
    triggers.forEach((t) => expect(t.attributes('aria-expanded')).toBe('false'))
  })

  it('sets aria-expanded true when open', async () => {
    const wrapper = mount(TestAccordion)
    const trigger = wrapper.findAll('button')[0]
    await trigger?.trigger('click')
    expect(trigger?.attributes('aria-expanded')).toBe('true')
  })

  it('links trigger to content via aria-controls', async () => {
    const wrapper = mount(TestAccordion)
    await wrapper.findAll('button')[0]?.trigger('click')
    const trigger = wrapper.findAll('button')[0]
    const contentId = trigger?.attributes('aria-controls')
    expect(wrapper.find(`#${contentId}`).exists()).toBe(true)
  })
})

describe('AccordionContent', () => {
  it('has role region', async () => {
    const wrapper = mount(TestAccordion)
    await wrapper.findAll('button')[0]?.trigger('click')
    expect(wrapper.find('[role="region"]').exists()).toBe(true)
  })

  it('links content to trigger via aria-labelledby', async () => {
    const wrapper = mount(TestAccordion)
    await wrapper.findAll('button')[0]?.trigger('click')
    const content = wrapper.find('[role="region"]')
    const triggerId = content.attributes('aria-labelledby')
    expect(wrapper.find(`#${triggerId}`).exists()).toBe(true)
  })
})
