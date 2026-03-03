<template>
  <span
    class="l-badge"
    v-if="isVisible"
    :data-state="state"
    :aria-hidden="!isVisible ? 'true' : undefined"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { BADGE_KEY } from '@/utils/keys'
import { useBadge } from '@/composables/useBadge'
import type { BadgeContext } from '@/types/components'

export interface BadgePrimitiveProps {
}

const props = defineProps<BadgePrimitiveProps>()

const emit = defineEmits<{
  dismiss: []
}>()

const { isVisible, dismiss: baseDismiss } = useBadge()

const dismiss = () => {
  baseDismiss()
  emit('dismiss')
}

const state = computed(() => (isVisible.value ? 'visible' : 'hidden'))

provide<BadgeContext>(BADGE_KEY, { isVisible, dismiss })

defineExpose({ dismiss })
</script>
