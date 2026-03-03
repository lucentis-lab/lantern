import type { ComponentSpec } from '@/types'

export const alertSpecs: ComponentSpec = {
  name: 'Alert',
  class: 'relative p-4 rounded-lg',
  defaultProps: {
    color: 'slate',
    variant: 'filled',
    radius: 'medium',
  },
  override: {},
}

export const alertCloseSpecs: ComponentSpec = {
  name: 'AlertClose',
  class: 'absolute top-3 right-4 opacity-70 hover:opacity-100 transition-opacity',
  defaultProps: {},
  override: {},
}
