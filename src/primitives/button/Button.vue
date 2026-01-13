<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    :type="props.type || 'button'"
    :disabled="props.disabled || props.loading"
    :aria-disabled="props.disabled ? 'true' : undefined"
    :aria-busy="props.loading ? 'true' : undefined"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

export interface ButtonPrimitiveProps {
  disabled?: ButtonHTMLAttributes['disabled']
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = defineProps<ButtonPrimitiveProps>()
</script>
