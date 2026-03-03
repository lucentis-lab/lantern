import type { ComponentSpec } from '@/types'

export const avatarSpecs: ComponentSpec = {
  name: 'Avatar',
  class: 'relative inline-flex items-center justify-center overflow-hidden size-12',
  defaultProps: {
    color: 'slate',
    variant: 'filled',
    radius: 'circle',
  },
  override: {},
}

export const avatarImageSpecs: ComponentSpec = {
  name: 'AvatarImage',
  class: 'h-full w-full object-cover',
  defaultProps: {},
  override: {},
}

export const avatarFallbackSpecs: ComponentSpec = {
  name: 'AvatarFallback',
  class: 'flex h-full w-full items-center justify-center text-sm font-medium select-none',
  defaultProps: {},
  override: {},
}
