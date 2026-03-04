<template>
  <Button
    class="l-tabs-trigger"
    type="button"
    role="tab"
    :id="`tab-${tabs?.uid}-${props.value}`"
    :aria-controls="`panel-${tabs?.uid}-${props.value}`"
    :aria-selected="isActive"
    :tabindex="isActive ? 0 : -1"
    :disabled="props.disabled"
    :data-state="isActive ? 'active' : 'inactive'"
    @click="tabs?.setTab(props.value)"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import Button from '@/primitives/button/Button.vue'
import { TABS_KEY } from '@/utils/keys'
import type { TabsContext } from '@/types/components'

export interface TabsTriggerPrimitiveProps {
  value: string
  disabled?: boolean
}

const props = defineProps<TabsTriggerPrimitiveProps>()

const tabs = inject<TabsContext>(TABS_KEY)

const isActive = computed(() => tabs?.activeTab.value === props.value)
</script>
