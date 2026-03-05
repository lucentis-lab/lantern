<template>
  <DialogPrimitive :class="classes" class="l-dialog">
    <slot />
  </DialogPrimitive>
</template>

<script setup lang="ts">
import DialogPrimitive from '@/primitives/dialog/Dialog.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { dialogSpecs } from './dialogSpecs'

const classes = useComponentClasses({}, dialogSpecs)
</script>
