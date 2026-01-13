<template>
  <AlertClosePrimitive :class="classes" class="l-alert-close">
    <slot />
  </AlertClosePrimitive>
</template>

<script setup lang="ts">
import AlertClosePrimitive from '@/primitives/alert/AlertClose.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { alertCloseSpecs } from './alertSpecs'

const classes = useComponentClasses({}, alertCloseSpecs)
</script>
