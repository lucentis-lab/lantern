import type { ComponentSpec } from '@/types'

export const dropdownSpecs: ComponentSpec = {
  name: 'Dropdown',
  class: 'relative inline-block',
  defaultProps: {},
  override: {},
}

export const dropdownTriggerSpecs: ComponentSpec = {
  name: 'DropdownTrigger',
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

export const dropdownContentSpecs: ComponentSpec = {
  name: 'DropdownContent',
  class: 'z-50 min-w-32 py-1 shadow-md outline-none',
  defaultProps: {
    color: 'slate',
    variant: 'filled',
    radius: 'medium',
  },
  override: {},
}

export const dropdownItemSpecs: ComponentSpec = {
  name: 'DropdownItem',
  apply: ['hover', 'focus'],
  class: 'w-full text-left cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
  defaultProps: {
    color: 'slate',
    variant: 'ghost',
    size: 'small',
    radius: 'medium',
  },
  override: {},
}
