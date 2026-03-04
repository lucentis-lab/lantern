import type { ComponentSpec } from '@/types'

export const accordionSpecs: ComponentSpec = {
  name: 'Accordion',
  class: 'w-full',
  defaultProps: {},
  override: {},
}

export const accordionItemSpecs: ComponentSpec = {
  name: 'AccordionItem',
  class: 'border-b',
  defaultProps: {},
  override: {},
}

export const accordionTriggerSpecs: ComponentSpec = {
  name: 'AccordionTrigger',
  apply: ['hover', 'focus'],
  class: 'w-full text-left',
  defaultProps: {
    color: 'slate',
    variant: 'ghost',
    size: 'medium',
    radius: 'medium',
  },
  override: {},
}

export const accordionContentSpecs: ComponentSpec = {
  name: 'AccordionContent',
  class: 'pb-4',
  defaultProps: {},
  override: {},
}
