<template>
  <DialogTriggerPrimitive :class="classes" class="l-dialog-trigger">
    <slot />
  </DialogTriggerPrimitive>
</template>

<script setup lang="ts">
import DialogTriggerPrimitive from '@/primitives/dialog/DialogTrigger.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { dialogTriggerSpecs } from './dialogSpecs'
import type { BaseProps } from '@/types'

interface DialogTriggerProps extends BaseProps {
  size?: string
  radius?: string
}

const props = defineProps<DialogTriggerProps>()

const classes = useComponentClasses(props, dialogTriggerSpecs)
</script>
