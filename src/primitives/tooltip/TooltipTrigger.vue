<template>
  <Button
    class="l-tooltip-trigger"
    type="button"
    :aria-describedby="tooltip?.tooltipId"
    @mouseenter="tooltip?.open()"
    @mouseleave="tooltip?.close()"
    @focus="tooltip?.open()"
    @blur="tooltip?.close()"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Button from '@/primitives/button/Button.vue'
import { TOOLTIP_KEY } from '@/utils/keys'
import type { TooltipContext } from '@/types/components'

const tooltip = inject<TooltipContext>(TOOLTIP_KEY)
</script>
