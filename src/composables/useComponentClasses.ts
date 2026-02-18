import { inject, computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { OPTIONS_KEY } from '../utils/keys'
import type { ComponentProps, PluginOptions, ComponentSpec } from '../types'
import { resolveColorClasses } from '@/utils/resolveColorClasses'
import { resolvePropsClasses } from '@/utils/resolvePropsClasses'

export function useComponentClasses(props: ComponentProps, spec: ComponentSpec) {
  const options = inject<PluginOptions>(OPTIONS_KEY)

  if (!options?.theme) {
    throw new Error('[Lantern] Theme not found. Did you install the plugin?')
  }

  return computed(() => {
    const theme = options.theme

    const color = props.color ?? spec.defaultProps?.color ?? options.defaultColor
    const variant = props.variant ?? spec.defaultProps?.variant ?? options.defaultVariant

    const colorClasses =
      color && variant ? resolveColorClasses(theme, spec, color, variant) : ''

    const propsClasses = resolvePropsClasses(theme, spec, props)

    return twMerge(colorClasses, propsClasses, spec.class, props.class as string)
  })
}