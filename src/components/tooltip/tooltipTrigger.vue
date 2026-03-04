<template>
  <TooltipTriggerPrimitive :class="classes" class="l-tooltip-trigger">
    <slot />
  </TooltipTriggerPrimitive>
</template>

<script setup lang="ts">
import TooltipTriggerPrimitive from '@/primitives/tooltip/TooltipTrigger.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { tooltipTriggerSpecs } from './tooltipSpecs'
import type { BaseProps } from '@/types'

interface TooltipTriggerProps extends BaseProps {
  size?: string
  radius?: string
}

const props = defineProps<TooltipTriggerProps>()

const classes = useComponentClasses(props, tooltipTriggerSpecs)
</script>
