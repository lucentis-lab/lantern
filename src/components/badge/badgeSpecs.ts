import type { ComponentSpec } from '@/types'

export const badgeSpecs: ComponentSpec = {
  name: 'Badge',
  apply: ['border'],
  class: 'inline-flex items-center gap-1 text-xs font-medium',
  defaultProps: {
    color: 'slate',
    variant: 'filled',
    size: 'small',
    radius: 'medium',
  },
  override: {},
}

export const badgeDismissSpecs: ComponentSpec = {
  name: 'BadgeDismiss',
  class: 'opacity-60 hover:opacity-100 transition-opacity cursor-pointer leading-none',
  defaultProps: {},
  override: {},
}
