<template>
  <DropdownPrimitive :class="classes" class="l-dropdown">
    <slot />
  </DropdownPrimitive>
</template>

<script setup lang="ts">
import DropdownPrimitive from '@/primitives/dropdown/Dropdown.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { dropdownSpecs } from './dropdownSpecs'

const classes = useComponentClasses({}, dropdownSpecs)
</script>
