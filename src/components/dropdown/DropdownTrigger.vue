<template>
  <DropdownTriggerPrimitive :class="classes" class="l-dropdown-trigger">
    <slot />
  </DropdownTriggerPrimitive>
</template>

<script setup lang="ts">
import DropdownTriggerPrimitive from '@/primitives/dropdown/DropdownTrigger.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { dropdownTriggerSpecs } from './dropdownSpecs'
import type { BaseProps } from '@/types'

interface DropdownTriggerProps extends BaseProps {
  size?: string
  radius?: string
}

const props = defineProps<DropdownTriggerProps>()

const classes = useComponentClasses(props, dropdownTriggerSpecs)
</script>
