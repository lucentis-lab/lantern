<template>
  <TooltipPrimitive :class="classes" class="l-tooltip">
    <slot />
  </TooltipPrimitive>
</template>

<script setup lang="ts">
import TooltipPrimitive from '@/primitives/tooltip/Tooltip.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { tooltipSpecs } from './tooltipSpecs'

const classes = useComponentClasses({}, tooltipSpecs)
</script>
