<template>
  <PopoverPrimitive :class="classes" class="l-popover">
    <slot />
  </PopoverPrimitive>
</template>

<script setup lang="ts">
import PopoverPrimitive from '@/primitives/popover/Popover.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { popoverSpecs } from './popoverSpecs'

const classes = useComponentClasses({}, popoverSpecs)
</script>
