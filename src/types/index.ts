import type { HTMLAttributes } from 'vue'

export interface Theme {
  colors: ThemeColors
  [propName: string]: Record<string, string> | ThemeColors // for other theme props
}

// Component Spec
export interface ComponentSpec {
  name: string
  apply?: string[]
  class?: string
  defaultProps?: {
    color?: string
    variant?: string
    [propName: string]: unknown
  }
  override?: {
    colors?: ThemeColors
    [propName: string]: Record<string, string> | ThemeColors | undefined // size, radius, etc.
  }
}

// Plugin options (no more defaultColor/defaultVariant)
export interface PluginOptions {
  theme: Theme
  defaultColor?: string
  defaultVariant?: string
}

export interface BaseProps {
  class?: HTMLAttributes['class']
  color?: string
  variant?: string
}

export interface ComponentProps extends BaseProps {
  [propName: string]: unknown
}

export interface ThemeColors {
  [colorName: string]: {
    [variantName: string]: {
      [key: string]: string
    }
  }
}
