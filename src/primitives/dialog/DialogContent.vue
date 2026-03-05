<template>
  <Teleport to="body">
    <div
      v-if="dialog?.isOpen.value"
      class="l-dialog-backdrop"
      :class="props.overlayClass"
      style="position: fixed; inset: 0; z-index: 50;"
      @click.self="dialog?.close()"
      @keydown.escape="dialog?.close()"
    >
      <div
        class="l-dialog-content"
        :class="props.class"
        role="dialog"
        :id="dialog?.dialogId"
        :aria-labelledby="dialog?.triggerId"
        aria-modal="true"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { DIALOG_KEY } from '@/utils/keys'
import type { DialogContext } from '@/types/components'

defineOptions({ inheritAttrs: false })

export interface DialogContentPrimitiveProps {
  class?: string
  overlayClass?: string
}

const props = defineProps<DialogContentPrimitiveProps>()

const dialog = inject<DialogContext>(DIALOG_KEY)
</script>
