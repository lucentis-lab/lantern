<template>
  <Button
    class="l-dialog-close"
    type="button"
    :aria-label="props.ariaLabel"
    @click="dialog?.close()"
  >
    <slot>×</slot>
  </Button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Button from '@/primitives/button/Button.vue'
import { DIALOG_KEY } from '@/utils/keys'
import type { DialogContext } from '@/types/components'

export interface DialogClosePrimitiveProps {
  ariaLabel?: string
}

const props = withDefaults(defineProps<DialogClosePrimitiveProps>(), {
  ariaLabel: 'Close dialog',
})

const dialog = inject<DialogContext>(DIALOG_KEY)
</script>
