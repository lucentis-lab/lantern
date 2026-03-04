<template>
  <div
    v-if="popover?.isOpen.value"
    class="l-popover-content"
    role="dialog"
    :id="popover?.contentId"
    :aria-labelledby="popover?.triggerId"
    :data-placement="props.placement"
    :style="`position: absolute; ${placementStyle}; --floating-offset: ${props.offset}px`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { POPOVER_KEY } from '@/utils/keys'
import type { PopoverContext } from '@/types/components'
import { getPlacementStyle, type Placement } from '@/utils/placement'

export interface PopoverContentPrimitiveProps {
  placement?: Placement
  offset?: number
}

const props = withDefaults(defineProps<PopoverContentPrimitiveProps>(), {
  placement: 'bottom',
  offset: 8,
})

const popover = inject<PopoverContext>(POPOVER_KEY)

const placementStyle = computed(() => getPlacementStyle(props.placement))
</script>
