<template>
  <PopoverTriggerPrimitive :class="classes" class="l-popover-trigger">
    <slot />
  </PopoverTriggerPrimitive>
</template>

<script setup lang="ts">
import PopoverTriggerPrimitive from '@/primitives/popover/PopoverTrigger.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { popoverTriggerSpecs } from './popoverSpecs'
import type { BaseProps } from '@/types'

interface PopoverTriggerProps extends BaseProps {
  size?: string
  radius?: string
}

const props = defineProps<PopoverTriggerProps>()

const classes = useComponentClasses(props, popoverTriggerSpecs)
</script>
