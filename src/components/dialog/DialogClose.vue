<template>
  <DialogClosePrimitive v-bind="props" :class="classes" class="l-dialog-close">
    <slot />
  </DialogClosePrimitive>
</template>

<script setup lang="ts">
import DialogClosePrimitive, {
  type DialogClosePrimitiveProps,
} from '@/primitives/dialog/DialogClose.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { dialogCloseSpecs } from './dialogSpecs'

const props = defineProps<DialogClosePrimitiveProps>()

const classes = useComponentClasses(props, dialogCloseSpecs)
</script>
