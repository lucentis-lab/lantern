<template>
  <Button
    class="l-popover-trigger"
    type="button"
    :id="popover?.triggerId"
    :aria-haspopup="'dialog'"
    :aria-expanded="popover?.isOpen.value"
    :aria-controls="popover?.contentId"
    :data-state="popover?.isOpen.value ? 'open' : 'closed'"
    @click="popover?.toggle()"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Button from '@/primitives/button/Button.vue'
import { POPOVER_KEY } from '@/utils/keys'
import type { PopoverContext } from '@/types/components'

const popover = inject<PopoverContext>(POPOVER_KEY)
</script>
