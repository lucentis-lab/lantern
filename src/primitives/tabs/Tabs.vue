<template>
  <div class="l-tabs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { TABS_KEY } from '@/utils/keys'
import { useTabs } from '@/composables/useTabs'
import type { TabsContext } from '@/types/components'

export interface TabsPrimitiveProps {
  defaultValue: string
}

const props = defineProps<TabsPrimitiveProps>()

const { activeTab, setTab, uid } = useTabs(props.defaultValue)

provide<TabsContext>(TABS_KEY, { activeTab, setTab, uid })
</script>
