import type { HTMLAttributes } from 'vue'

export interface Theme {
  colors: ThemeColors
  size: ThemeSizes
  radius: ThemeRadius
  [propName: string]: Record<string, unknown> // for other theme props
}

// Component Spec
export interface ComponentSpec {
  name: string
  apply?: string[]
  class?: string
  defaultProps?: {
    color?: string
    variant?: string
    size?: string
    radius?: string
    [key: string]: string | undefined
  }
  override?: {
    colors?: ThemeColors
    size?: ThemeSizes
    radius?: ThemeRadius
    [propName: string]: Record<string, unknown> | undefined // size, radius, etc.
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

export interface ThemeSizes {
  [sizeName: string]: string
}

export interface ThemeRadius {
  [radiusName: string]: string
}
