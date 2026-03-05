<template>
  <div class="l-dialog">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { DIALOG_KEY } from '@/utils/keys'
import { useDismissible } from '@/composables/useDismissible'
import type { DialogContext } from '@/types/components'

const uid = Math.random().toString(36).slice(2, 7)
const triggerId = `dialog-trigger-${uid}`
const dialogId = `dialog-${uid}`

const { isOpen, open, close, toggle } = useDismissible(() => null)

provide<DialogContext>(DIALOG_KEY, { isOpen, open, close, toggle, triggerId, dialogId })
</script>
