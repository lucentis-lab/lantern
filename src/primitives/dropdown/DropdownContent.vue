<template>
  <div
    v-if="dropdown?.isOpen.value"
    class="l-dropdown-content"
    role="menu"
    :id="dropdown?.contentId"
    :aria-labelledby="dropdown?.triggerId"
    :data-placement="props.placement"
    :style="`position: absolute; ${placementStyle}; --floating-offset: ${props.offset}px`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { DROPDOWN_KEY } from '@/utils/keys'
import type { DropdownContext } from '@/types/components'
import { getPlacementStyle, type Placement } from '@/utils/placement'

export interface DropdownContentPrimitiveProps {
  placement?: Placement
  offset?: number
}

const props = withDefaults(defineProps<DropdownContentPrimitiveProps>(), {
  placement: 'bottom',
  offset: 4,
})

const dropdown = inject<DropdownContext>(DROPDOWN_KEY)

const placementStyle = computed(() => getPlacementStyle(props.placement))
</script>
