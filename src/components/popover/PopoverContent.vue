<template>
  <PopoverContentPrimitive v-bind="props" :class="classes" class="l-popover-content">
    <slot />
  </PopoverContentPrimitive>
</template>

<script setup lang="ts">
import PopoverContentPrimitive, {
  type PopoverContentPrimitiveProps,
} from '@/primitives/popover/PopoverContent.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { popoverContentSpecs } from './popoverSpecs'
import type { BaseProps } from '@/types'

interface PopoverContentProps extends PopoverContentPrimitiveProps, BaseProps {
  radius?: string
}

const props = defineProps<PopoverContentProps>()

const classes = useComponentClasses(props, popoverContentSpecs)
</script>
