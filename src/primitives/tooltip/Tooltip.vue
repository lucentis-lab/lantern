<template>
  <div class="l-tooltip" style="position: relative; display: inline-block">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { TOOLTIP_KEY } from '@/utils/keys'
import type { TooltipContext } from '@/types/components'

const uid = Math.random().toString(36).slice(2, 7)
const tooltipId = `tooltip-${uid}`

const isOpen = ref(false)
const open = () => { isOpen.value = true }
const close = () => { isOpen.value = false }

provide<TooltipContext>(TOOLTIP_KEY, { isOpen, open, close, tooltipId })
</script>
