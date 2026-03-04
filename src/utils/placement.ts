export type Placement =
  | 'top' | 'bottom' | 'left' | 'right'
  | 'top-start' | 'top-end'
  | 'bottom-start' | 'bottom-end'
  | 'left-start' | 'left-end'
  | 'right-start' | 'right-end'

const placementStyles: Record<Placement, string> = {
  'top':          'bottom: 100%; margin-bottom: var(--floating-offset); left: 50%; transform: translateX(-50%)',
  'bottom':       'top: 100%; margin-top: var(--floating-offset); left: 50%; transform: translateX(-50%)',
  'left':         'right: 100%; margin-right: var(--floating-offset); top: 50%; transform: translateY(-50%)',
  'right':        'left: 100%; margin-left: var(--floating-offset); top: 50%; transform: translateY(-50%)',

  'top-start':    'bottom: 100%; margin-bottom: var(--floating-offset); left: 0',
  'top-end':      'bottom: 100%; margin-bottom: var(--floating-offset); right: 0',
  'bottom-start': 'top: 100%; margin-top: var(--floating-offset); left: 0',
  'bottom-end':   'top: 100%; margin-top: var(--floating-offset); right: 0',

  'left-start':   'right: 100%; margin-right: var(--floating-offset); top: 0',
  'left-end':     'right: 100%; margin-right: var(--floating-offset); bottom: 0',
  'right-start':  'left: 100%; margin-left: var(--floating-offset); top: 0',
  'right-end':    'left: 100%; margin-left: var(--floating-offset); bottom: 0',
}

export function getPlacementStyle(placement: Placement): string {
  return placementStyles[placement] ?? placementStyles['bottom']
}
