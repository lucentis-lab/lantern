<template>
  <div
    class="l-alert"
    v-if="isVisible"
    :role="props.role || 'alert'"
    :aria-hidden="!isVisible ? 'true' : undefined"
    :data-state="state"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, type HTMLAttributes, onMounted, onBeforeUnmount } from 'vue'
import type { AlertContext } from '@/types/components'
import { ALERT_KEY } from '@/utils/keys'
import { useAlert } from '@/composables/useAlert'

export interface AlertPrimitiveProps {
  role?: HTMLAttributes['role']
  duration?: number
}

const props = defineProps<AlertPrimitiveProps>()

const emit = defineEmits<{
  dismiss: []
}>()

const { isVisible, dismiss: baseDismiss } = useAlert()

const dismiss = () => {
  baseDismiss()
  emit('dismiss')
}

const state = computed(() => {
  return isVisible.value ? 'open' : 'closed'
})

provide<AlertContext>(ALERT_KEY, {
  isVisible,
  dismiss,
})

defineExpose({ dismiss })

let timer: number | undefined

onMounted(() => {
  if (props.duration && props.duration > 0) {
    timer = window.setTimeout(() => dismiss(), props.duration)
  }
})

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>
