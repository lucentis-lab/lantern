import type { ComponentSpec } from '@/types'

export const tooltipSpecs: ComponentSpec = {
  name: 'Tooltip',
  class: 'relative inline-block',
  defaultProps: {},
  override: {},
}

export const tooltipTriggerSpecs: ComponentSpec = {
  name: 'TooltipTrigger',
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

export const tooltipContentSpecs: ComponentSpec = {
  name: 'TooltipContent',
  class: 'z-50 px-2 py-1 text-xs pointer-events-none whitespace-nowrap',
  defaultProps: {
    color: 'slate',
    variant: 'dark',
    radius: 'medium',
  },
  override: {},
}
