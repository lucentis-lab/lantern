import type { ComponentSpec } from '@/types'

export const tabsSpecs: ComponentSpec = {
  name: 'Tabs',
  class: 'w-full',
  defaultProps: {},
  override: {},
}

export const tabsListSpecs: ComponentSpec = {
  name: 'TabsList',
  class: 'inline-flex items-center gap-1',
  defaultProps: {
    // color: 'slate',
    // variant: 'light',
  },
  override: {},
}

export const tabsTriggerSpecs: ComponentSpec = {
  name: 'TabsTrigger',
  apply: ['hover'],
  class: 'transition cursor-pointer disabled:pointer-events-none disabled:opacity-50',
  defaultProps: {
    color: 'slate',
    variant: 'ghost',
    size: 'small',
    radius: 'medium',
  },
  override: {},
}

export const tabsContentSpecs: ComponentSpec = {
  name: 'TabsContent',
  class: 'mt-2 outline-none',
  defaultProps: {},
  override: {},
}
