import type { ComponentSpec } from '@/types'

export const dropdownSpecs: ComponentSpec = {
  name: 'Dropdown',
  class: 'relative inline-block',
  defaultProps: {},
  override: {},
}

export const dropdownTriggerSpecs: ComponentSpec = {
  name: 'DropdownTrigger',
  apply: ['hover', 'outline:border'],
  class: '',
  defaultProps: {
    color: 'slate',
    variant: 'outline',
    size: 'medium',
    radius: 'medium',
  },
  override: {},
}

export const dropdownContentSpecs: ComponentSpec = {
  name: 'DropdownContent',
  class: 'z-50 min-w-32 py-1 shadow-md p-2',
  apply: [ 'outline:border'],
  defaultProps: {
    color: 'slate',
    variant: 'outline',
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
