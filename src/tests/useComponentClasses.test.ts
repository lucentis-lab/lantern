import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useComponentClasses } from '../composables/useComponentClasses'
import type { Theme, PluginOptions, ComponentSpec } from '../types'

vi.mock('vue', async (importOriginal) => {
  const actual = await importOriginal() as object
  return {
    ...actual,
    inject: vi.fn(),
  }
})

import { inject } from 'vue'
const mockInject = inject as ReturnType<typeof vi.fn>

function resolve(props: Record<string, unknown>, spec: ComponentSpec): string {
  return useComponentClasses(props, spec).value
}

const mockTheme: Theme = {
  colors: {
    default: {
      filled: {
        background: 'bg-gray-100',
        foreground: 'text-gray-900',
        hover: 'hover:bg-gray-200',
        border: 'border-gray-300',
        focus: 'focus:ring-gray-500',
      },
      outline: {
        background: 'bg-transparent',
        foreground: 'text-gray-900',
        hover: 'hover:bg-gray-100',
        border: 'border-2 border-gray-300',
        focus: 'focus:ring-gray-500',
      },
    },
    primary: {
      filled: {
        background: 'bg-blue-600',
        foreground: 'text-white',
        hover: 'hover:bg-blue-700',
        border: 'border-blue-600',
        focus: 'focus:ring-blue-500',
      },
      outline: {
        background: 'bg-transparent',
        foreground: 'text-blue-600',
        hover: 'hover:bg-blue-50',
        border: 'border-2 border-blue-600',
        focus: 'focus:ring-blue-500',
      },
    },
  },
  size: {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  },
  radius: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
  },
}

const buttonSpec: ComponentSpec = {
  name: 'Button',
  apply: ['hover', 'focus'],
  class: 'inline-flex items-center justify-center font-medium transition-colors',
  defaultProps: {
    color: 'primary',
    variant: 'filled',
    size: 'md',
    radius: 'md',
  },
  override: {
    colors: {
      primary: {
        filled: {
          background: 'bg-blue-500',
        },
      },
    },
    size: {
      sm: 'h-7 px-2 text-xs',
    },
  },
}

const cardSpec: ComponentSpec = {
  name: 'Card',
  apply: ['border'],
  class: 'p-4',
  defaultProps: {
    color: 'default',
    variant: 'outline',
    radius: 'lg',
  },
  override: {},
}

const mockOptions: PluginOptions = {
  theme: mockTheme,
}

describe('useComponentClasses', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockInject.mockReturnValue(mockOptions)
  })

  describe('Theme injection', () => {
    it('should throw error if theme is not injected', () => {
      mockInject.mockReturnValue(undefined)

      expect(() => {
        useComponentClasses({}, buttonSpec)
      }).toThrow('[Lantern] Theme not found. Did you install the plugin?')
    })
  })

  describe('Color and variant resolution', () => {
    it('should use props when provided', () => {
      const classes = resolve({ color: 'default', variant: 'outline' }, buttonSpec)

      expect(classes).toContain('bg-transparent')
      expect(classes).toContain('text-gray-900')
    })

    it('should use spec defaultProps as fallback', () => {
      const classes = resolve({}, buttonSpec)

      expect(classes).toContain('bg-blue-500')
      expect(classes).toContain('text-white')
    })

    it('should apply spec override', () => {
      const classes = resolve({ color: 'primary', variant: 'filled' }, buttonSpec)

      expect(classes).toContain('bg-blue-500')
      expect(classes).not.toContain('bg-blue-600')
    })

    it('should apply only allowed keys', () => {
      const classes = resolve({ color: 'primary', variant: 'filled' }, buttonSpec)

      expect(classes).toContain('hover:bg-blue-700')
      expect(classes).toContain('focus:ring-blue-500')
      expect(classes).not.toContain('border-blue-600')
    })

    it('should always include background + foreground', () => {
      const classes = resolve({}, cardSpec)

      expect(classes).toContain('bg-transparent')
      expect(classes).toContain('text-gray-900')
    })

    it('should warn if color/variant missing', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      const classes = resolve({ color: 'x', variant: 'y' }, buttonSpec)

      expect(warnSpy).toHaveBeenCalled()
      expect(classes.length).toBeGreaterThan(0)

      warnSpy.mockRestore()
    })
  })

  describe('Props resolution (size, radius)', () => {
    it('should use provided props', () => {
      const classes = resolve({ size: 'lg', radius: 'lg' }, buttonSpec)

      expect(classes).toContain('h-12 px-6 text-lg')
      expect(classes).toContain('rounded-lg')
    })

    it('should apply spec override for size', () => {
      const classes = resolve({ size: 'sm' }, buttonSpec)

      expect(classes).toContain('h-7 px-2 text-xs')
      expect(classes).not.toContain('h-8 px-3 text-sm')
    })

    it('should fallback to global theme', () => {
      const classes = resolve({ size: 'lg' }, buttonSpec)

      expect(classes).toContain('h-12 px-6 text-lg')
    })

    it('should warn unknown size', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      resolve({ size: '???' }, buttonSpec)

      expect(warnSpy).toHaveBeenCalled()

      warnSpy.mockRestore()
    })
  })

  describe('Class merging', () => {
    it('should include spec base classes', () => {
      const classes = resolve({}, buttonSpec)

      expect(classes).toContain('inline-flex')
      expect(classes).toContain('items-center')
    })

    it('should merge correctly', () => {
      const classes = resolve(
        { color: 'primary', variant: 'filled', size: 'lg', radius: 'lg' },
        buttonSpec,
      )

      expect(classes).toContain('inline-flex')
      expect(classes).toContain('bg-blue-500')
      expect(classes).toContain('h-12')
      expect(classes).toContain('rounded-lg')
    })

    it('should let user class override', () => {
      const classes = resolve(
        { color: 'primary', variant: 'filled', class: 'bg-red-500 h-20' },
        buttonSpec,
      )

      expect(classes).toContain('bg-red-500')
      expect(classes).toContain('h-20')
      expect(classes).not.toContain('bg-blue-500')
    })
  })

  describe('Edge cases', () => {
    it('should handle empty props', () => {
      const classes = resolve({}, buttonSpec)
      expect(classes.length).toBeGreaterThan(0)
    })

    it('should handle spec with no overrides', () => {
      const classes = resolve({}, cardSpec)
      expect(classes).toContain('p-4')
    })

    it('should support only user class', () => {
      const classes = resolve({ class: 'custom-class' }, buttonSpec)
      expect(classes).toContain('custom-class')
    })

    it('should support multiple classes', () => {
      const classes = resolve({ class: 'c1 c2 c3' }, buttonSpec)

      expect(classes).toContain('c1')
      expect(classes).toContain('c2')
      expect(classes).toContain('c3')
    })

    it('should apply variant-specific keys with colon syntax', () => {
      const outlineSpec: ComponentSpec = {
        name: 'Button',
        apply: ['hover', 'focus', 'outline:border'],
        class: '',
        defaultProps: { color: 'default', variant: 'outline' },
      }

      const classes = resolve({}, outlineSpec)

      expect(classes).toContain('hover:bg-gray-100')
      expect(classes).toContain('focus:ring-gray-500')
      expect(classes).toContain('border-2 border-gray-300')
    })

    it('should not apply variant-specific keys if variant does not match', () => {
      const outlineSpec: ComponentSpec = {
        name: 'Button',
        apply: ['hover', 'focus', 'outline:border'],
        class: '',
        defaultProps: { color: 'default', variant: 'filled' },
      }

      const classes = resolve({}, outlineSpec)

      expect(classes).toContain('hover:bg-gray-200')
      expect(classes).toContain('focus:ring-gray-500')
      expect(classes).not.toContain('border-2 border-gray-300')
    })
  })
})
