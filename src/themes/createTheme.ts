import { merge } from 'lodash-es'
import type { Theme } from '@/types'

export function createTheme(toOverride: Partial<Theme>, partialTheme: Partial<Theme>) {
  return merge({}, toOverride, partialTheme)
}
