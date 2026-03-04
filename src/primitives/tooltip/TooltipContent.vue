<template>
  <div
    v-show="tooltip?.isOpen.value"
    class="l-tooltip-content"
    role="tooltip"
    :id="tooltip?.tooltipId"
    :data-placement="props.placement"
    :style="`position: absolute; ${placementStyle}; --floating-offset: ${props.offset}px`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { TOOLTIP_KEY } from '@/utils/keys'
import type { TooltipContext } from '@/types/components'
import { getPlacementStyle, type Placement } from '@/utils/placement'

export interface TooltipContentPrimitiveProps {
  placement?: Placement
  offset?: number
}

const props = withDefaults(defineProps<TooltipContentPrimitiveProps>(), {
  placement: 'top',
  offset: 6,
})

const tooltip = inject<TooltipContext>(TOOLTIP_KEY)

const placementStyle = computed(() => getPlacementStyle(props.placement))
</script>
