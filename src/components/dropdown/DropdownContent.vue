<template>
  <DropdownContentPrimitive v-bind="props" :class="classes" class="l-dropdown-content">
    <slot />
  </DropdownContentPrimitive>
</template>

<script setup lang="ts">
import DropdownContentPrimitive, {
  type DropdownContentPrimitiveProps,
} from '@/primitives/dropdown/DropdownContent.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { dropdownContentSpecs } from './dropdownSpecs'
import type { BaseProps } from '@/types'

interface DropdownContentProps extends DropdownContentPrimitiveProps, BaseProps {
  radius?: string
}

const props = defineProps<DropdownContentProps>()

const classes = useComponentClasses(props, dropdownContentSpecs)
</script>
