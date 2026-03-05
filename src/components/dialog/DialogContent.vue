<template>
  <DialogContentPrimitive
    :class="contentClasses"
    :overlay-class="overlayClasses"
    class="l-dialog-content"
  >
    <slot />
  </DialogContentPrimitive>
</template>

<script setup lang="ts">
import DialogContentPrimitive from '@/primitives/dialog/DialogContent.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { dialogContentSpecs, dialogOverlaySpecs } from './dialogSpecs'
import type { BaseProps } from '@/types'

interface DialogContentProps extends BaseProps {
  radius?: string
}

const props = defineProps<DialogContentProps>()

const contentClasses = useComponentClasses(props, dialogContentSpecs)
const overlayClasses = useComponentClasses({}, dialogOverlaySpecs)
</script>
