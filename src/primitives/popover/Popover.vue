<template>
  <div class="l-popover" style="position: relative; display: inline-block" ref="containerRef">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, useTemplateRef } from 'vue'
import { POPOVER_KEY } from '@/utils/keys'
import { useDismissible } from '@/composables/useDismissible'
import type { PopoverContext } from '@/types/components'

const containerRef = useTemplateRef<HTMLElement>('containerRef')

const uid = Math.random().toString(36).slice(2, 7)
const triggerId = `popover-trigger-${uid}`
const contentId = `popover-content-${uid}`

const { isOpen, open, close, toggle } = useDismissible(() => containerRef.value)

provide<PopoverContext>(POPOVER_KEY, { isOpen, open, close, toggle, triggerId, contentId })
</script>
