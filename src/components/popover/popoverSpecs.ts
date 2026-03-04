import type { ComponentSpec } from '@/types'

export const popoverSpecs: ComponentSpec = {
  name: 'Popover',
  class: 'relative inline-block',
  defaultProps: {},
  override: {},
}

export const popoverTriggerSpecs: ComponentSpec = {
  name: 'PopoverTrigger',
  apply: ['hover', 'focus'],
  class: '',
  defaultProps: {
    color: 'slate',
    variant: 'filled',
    size: 'medium',
    radius: 'medium',
  },
  override: {},
}

export const popoverContentSpecs: ComponentSpec = {
  name: 'PopoverContent',
  class: 'z-50 min-w-48 p-4 shadow-md outline-none',
  defaultProps: {
    color: 'slate',
    variant: 'filled',
    radius: 'medium',
  },
  override: {},
}
