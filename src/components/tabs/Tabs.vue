<template>
  <TabsPrimitive v-bind="props" :class="classes" class="l-tabs">
    <slot />
  </TabsPrimitive>
</template>

<script setup lang="ts">
import TabsPrimitive, { type TabsPrimitiveProps } from '@/primitives/tabs/Tabs.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { tabsSpecs } from './tabsSpecs'

const props = defineProps<TabsPrimitiveProps>()

const classes = useComponentClasses(props, tabsSpecs)
</script>
