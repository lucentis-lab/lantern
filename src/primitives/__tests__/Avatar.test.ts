import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from '@/primitives/avatar/Avatar.vue'
import AvatarImage from '@/primitives/avatar/AvatarImage.vue'
import AvatarFallback from '@/primitives/avatar/AvatarFallback.vue'

describe('AvatarPrimitive', () => {
  it('renders a span element', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('has data-state image by default', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.attributes('data-state')).toBe('image')
  })

  it('renders slot content', () => {
    const wrapper = mount(Avatar, {
      slots: { default: '<span>AB</span>' },
    })
    expect(wrapper.text()).toBe('AB')
  })
})

describe('AvatarImage', () => {
  it('renders an img element when no error', () => {
    const wrapper = mount({
      components: { Avatar, AvatarImage },
      template: `<Avatar><AvatarImage src="/img.png" alt="User" /></Avatar>`,
    })
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('/img.png')
    expect(wrapper.find('img').attributes('alt')).toBe('User')
  })

  it('defaults alt to empty string', () => {
    const wrapper = mount({
      components: { Avatar, AvatarImage },
      template: `<Avatar><AvatarImage src="/img.png" /></Avatar>`,
    })
    expect(wrapper.find('img').attributes('alt')).toBe('')
  })

  it('hides image and switches state on error', async () => {
    const wrapper = mount({
      components: { Avatar, AvatarImage },
      template: `<Avatar><AvatarImage src="/img.png" /></Avatar>`,
    })

    await wrapper.find('img').trigger('error')

    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.l-avatar').attributes('data-state')).toBe('fallback')
  })
})

describe('AvatarFallback', () => {
  it('is hidden by default', () => {
    const wrapper = mount({
      components: { Avatar, AvatarFallback },
      template: `<Avatar><AvatarFallback>AB</AvatarFallback></Avatar>`,
    })
    expect(wrapper.find('.l-avatar-fallback').exists()).toBe(false)
  })

  it('shows after image error', async () => {
    const wrapper = mount({
      components: { Avatar, AvatarImage, AvatarFallback },
      template: `
        <Avatar>
          <AvatarImage src="/img.png" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      `,
    })

    await wrapper.find('img').trigger('error')

    expect(wrapper.find('.l-avatar-fallback').exists()).toBe(true)
    expect(wrapper.find('.l-avatar-fallback').text()).toBe('AB')
  })
})
