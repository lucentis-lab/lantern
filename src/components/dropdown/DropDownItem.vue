<template>
  <DropdownItemPrimitive v-bind="props" :class="classes" class="l-dropdown-item">
    <slot />
  </DropdownItemPrimitive>
</template>

<script setup lang="ts">
import DropdownItemPrimitive, {
  type DropdownItemPrimitiveProps,
} from '@/primitives/dropdown/DropDownItem.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { dropdownItemSpecs } from './dropdownSpecs'
import type { BaseProps } from '@/types'

interface DropdownItemProps extends DropdownItemPrimitiveProps, BaseProps {
  size?: string
  radius?: string
}

const props = defineProps<DropdownItemProps>()

const classes = useComponentClasses(props, dropdownItemSpecs)
</script>
