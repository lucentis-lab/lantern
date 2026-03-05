<template>
  <Button
    class="l-dialog-trigger"
    type="button"
    :id="dialog?.triggerId"
    :aria-haspopup="'dialog'"
    :aria-expanded="dialog?.isOpen.value"
    :aria-controls="dialog?.dialogId"
    :data-state="dialog?.isOpen.value ? 'open' : 'closed'"
    @click="dialog?.toggle()"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Button from '@/primitives/button/Button.vue'
import { DIALOG_KEY } from '@/utils/keys'
import type { DialogContext } from '@/types/components'

const dialog = inject<DialogContext>(DIALOG_KEY)
</script>
