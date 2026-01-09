import { merge } from 'lodash-es'
import type { Theme, ComponentSpec } from '../types'

const staticProperties = ['background', 'foreground']

export function resolveColorClasses(
  theme: Theme,
  spec: ComponentSpec,
  color: string,
  variant: string,
): string {
  // 1. Get color/variant from global theme
  const globalColorVariant = theme.colors[color]?.[variant]

  // 2. Get override from spec
  const overrideColorVariant = spec?.override?.colors?.[color]?.[variant]

  // 3. If neither global nor override exists, return empty
  if (!globalColorVariant && !overrideColorVariant) {
    console.warn(
      `[Lantern - theme] Color "${color}" with variant "${variant}" not found neither in theme or "${spec.name}" specs.`,
    )
    return ''
  }

  // 4. Deep merge with lodash
  const mergedColorVariant = merge({}, globalColorVariant, overrideColorVariant)

  // 5. Get apply keys from spec
  const applyKeys = spec?.apply ?? []

  // 6. Extract classes according to staticProperties + apply
  const colorClasses = [
    ...staticProperties.map((key) => mergedColorVariant[key]),
    ...applyKeys.map((key) => {
      if (key.includes(':')) {
        // format variant:key
        const [targetVariant, targetKey] = key.split(':')
        return targetVariant === variant
          ? mergedColorVariant[targetKey as keyof typeof mergedColorVariant]
          : null
      } else {
        return mergedColorVariant[key]
      }
    }),
  ]
    .filter(Boolean)
    .join(' ')

  return colorClasses
}
