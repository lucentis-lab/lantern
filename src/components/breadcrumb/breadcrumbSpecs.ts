import type { ComponentSpec } from '@/types'

export const breadcrumbSpecs: ComponentSpec = {
  name: 'Breadcrumb',
  class: 'flex items-center gap-1 text-sm',
  defaultProps: {},
  override: {},
}

export const breadcrumbItemSpecs: ComponentSpec = {
  name: 'BreadcrumbItem',
  apply: ['hover'],
  class: 'inline-flex items-center gap-1 transition-colors',
  defaultProps: {
    color: 'slate',
    variant: 'ghost',
  },
  override: {},
}

export const breadcrumbSeparatorSpecs: ComponentSpec = {
  name: 'BreadcrumbSeparator',
  class: 'opacity-50',
  defaultProps: {},
  override: {},
}
