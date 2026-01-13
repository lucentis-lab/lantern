<template>
  <Button v-bind="props" :class="classes">
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import { buttonSpecs } from './buttonSpecs.js'
import { useComponentClasses } from '@/composables/useComponentClasses.js'
import Button, { type ButtonPrimitiveProps } from '@/primitives/button/Button.vue'
import type { BaseProps } from '../../types'
import { computed } from 'vue'

interface ButtonProps extends BaseProps, ButtonPrimitiveProps {
  size?: string
  radius?: string
}
const props = defineProps<ButtonProps>()

const classes = computed(() => {
  return useComponentClasses(props, buttonSpecs)
})
</script>
