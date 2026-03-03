<template>
  <button
    type="button"
    class="l-badge-dismiss"
    :aria-label="props.ariaLabel"
    @click="badge?.dismiss()"
  >
    <slot>×</slot>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { BADGE_KEY } from '@/utils/keys'
import type { BadgeContext } from '@/types/components'

export interface BadgeDismissPrimitiveProps {
  ariaLabel?: string
}

const props = withDefaults(defineProps<BadgeDismissPrimitiveProps>(), {
  ariaLabel: 'Remove badge',
})

const badge = inject<BadgeContext>(BADGE_KEY)
</script>
