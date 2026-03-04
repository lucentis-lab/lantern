<template>
  <TooltipContentPrimitive v-bind="props" :class="classes" class="l-tooltip-content">
    <slot />
  </TooltipContentPrimitive>
</template>

<script setup lang="ts">
import TooltipContentPrimitive, {
  type TooltipContentPrimitiveProps,
} from '@/primitives/tooltip/TooltipContent.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { tooltipContentSpecs } from './tooltipSpecs'
import type { BaseProps } from '@/types'

interface TooltipContentProps extends TooltipContentPrimitiveProps, BaseProps {
  radius?: string
}

const props = defineProps<TooltipContentProps>()

const classes = useComponentClasses(props, tooltipContentSpecs)
</script>
