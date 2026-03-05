import type { ComponentSpec } from '@/types'

export const dialogSpecs: ComponentSpec = {
  name: 'Dialog',
  class: '',
  defaultProps: {},
  override: {},
}

export const dialogOverlaySpecs: ComponentSpec = {
  name: 'Dialog',
  class: 'bg-slate-500/50 flex items-center justify-center',
}

export const dialogTriggerSpecs: ComponentSpec = {
  name: 'DialogTrigger',
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

export const dialogContentSpecs: ComponentSpec = {
  name: 'DialogContent',
  class: 'bg-white p-4',
  defaultProps: {
    radius: 'medium',
  },
}

export const dialogCloseSpecs: ComponentSpec = {
  name: 'DialogClose',
  class: 'opacity-70 hover:opacity-100 transition-opacity',
  defaultProps: {},
  override: {},
}
