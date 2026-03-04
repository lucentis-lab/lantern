<template>
  <div
    v-if="isActive"
    class="l-tabs-content"
    role="tabpanel"
    :id="`panel-${tabs?.uid}-${props.value}`"
    :aria-labelledby="`tab-${tabs?.uid}-${props.value}`"
    tabindex="0"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { TABS_KEY } from '@/utils/keys'
import type { TabsContext } from '@/types/components'

export interface TabsContentPrimitiveProps {
  value: string
}

const props = defineProps<TabsContentPrimitiveProps>()

const tabs = inject<TabsContext>(TABS_KEY)

const isActive = computed(() => tabs?.activeTab.value === props.value)
</script>
