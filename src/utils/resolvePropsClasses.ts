import type { Theme, ComponentSpec } from '../types'

export function resolvePropsClasses(
  theme: Theme,
  spec: ComponentSpec,
  props: Record<string, unknown>,
): string {
  const classes: string[] = []
  const excludedProps = ['color', 'variant', 'class']

  // Loop through props passed to component
  for (const propName in props) {
    // Skip excluded props
    if (excludedProps.includes(propName)) continue

    // Skip props unrelated to the theme system
    const existsInTheme = propName in theme
    const existsInOverride = spec?.override && propName in spec.override
    if (!existsInTheme && !existsInOverride) continue
    
    // Resolve value: props > spec.defaultProps
    const propValue = props[propName] ?? spec.defaultProps?.[propName]

    if (!propValue) continue

    // Find class: spec override > global theme
    const propClass =
      spec?.override?.[propName]?.[String(propValue)] ?? theme[propName]?.[String(propValue)]

    if (propClass) {
      classes.push(propClass as string)
    } else {
      console.warn(
        `[Lantern - theme] ${propName} "${propValue}" not found neither in theme or in "${spec.name}" specs.`,
      )
    }
  }

  return classes.filter(Boolean).join(' ')
}
