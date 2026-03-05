import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Dialog from '@/primitives/dialog/Dialog.vue'
import DialogTrigger from '@/primitives/dialog/DialogTrigger.vue'
import DialogContent from '@/primitives/dialog/DialogContent.vue'
import DialogClose from '@/primitives/dialog/DialogClose.vue'

const TestDialog = {
  components: { Dialog, DialogTrigger, DialogContent, DialogClose },
  template: `
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <p>Dialog body</p>
        <DialogClose />
      </DialogContent>
    </Dialog>
  `,
}

describe('Dialog', () => {
  it('renders trigger', () => {
    const wrapper = mount(TestDialog)
    expect(wrapper.find('.l-dialog-trigger').exists()).toBe(true)
  })

  it('content is hidden by default', () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    expect(document.querySelector('.l-dialog-content')).toBeNull()
    wrapper.unmount()
  })

  it('opens on trigger click', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    expect(document.querySelector('.l-dialog-content')).not.toBeNull()
    wrapper.unmount()
  })

  it('closes on second trigger click', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    await wrapper.find('.l-dialog-trigger').trigger('click')
    expect(document.querySelector('.l-dialog-content')).toBeNull()
    wrapper.unmount()
  })

  it('closes on backdrop click', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    await document.querySelector<HTMLElement>('.l-dialog-backdrop')!.click()
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.l-dialog-content')).toBeNull()
    wrapper.unmount()
  })

  it('closes on Escape key', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.l-dialog-content')).toBeNull()
    wrapper.unmount()
  })
})

describe('DialogTrigger', () => {
  it('has aria-haspopup dialog', () => {
    const wrapper = mount(TestDialog)
    expect(wrapper.find('.l-dialog-trigger').attributes('aria-haspopup')).toBe('dialog')
  })

  it('has aria-expanded false by default', () => {
    const wrapper = mount(TestDialog)
    expect(wrapper.find('.l-dialog-trigger').attributes('aria-expanded')).toBe('false')
  })

  it('has aria-expanded true when open', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    expect(wrapper.find('.l-dialog-trigger').attributes('aria-expanded')).toBe('true')
    wrapper.unmount()
  })

  it('links trigger to content via aria-controls', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    const dialogId = wrapper.find('.l-dialog-trigger').attributes('aria-controls')
    expect(document.getElementById(dialogId!)).not.toBeNull()
    wrapper.unmount()
  })
})

describe('DialogContent', () => {
  it('has role dialog', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    expect(document.querySelector('.l-dialog-content')?.getAttribute('role')).toBe('dialog')
    wrapper.unmount()
  })

  it('has aria-modal true', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    expect(document.querySelector('.l-dialog-content')?.getAttribute('aria-modal')).toBe('true')
    wrapper.unmount()
  })

  it('is teleported to body', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    expect(document.body.contains(document.querySelector('.l-dialog-content'))).toBe(true)
    wrapper.unmount()
  })
})

describe('DialogClose', () => {
  it('closes dialog on click', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    document.querySelector<HTMLElement>('.l-dialog-close')!.click()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.l-dialog-content')).toBeNull()
    wrapper.unmount()
  })

  it('has default aria-label', async () => {
    const wrapper = mount(TestDialog, { attachTo: document.body })
    await wrapper.find('.l-dialog-trigger').trigger('click')
    expect(document.querySelector('.l-dialog-close')?.getAttribute('aria-label')).toBe('Close dialog')
    wrapper.unmount()
  })
})
