<template>
  <TabsContentPrimitive v-bind="props" :class="classes" class="l-tabs-content">
    <slot />
  </TabsContentPrimitive>
</template>

<script setup lang="ts">
import TabsContentPrimitive, {
  type TabsContentPrimitiveProps,
} from '@/primitives/tabs/TabsContent.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { tabsContentSpecs } from './tabsSpecs'

const props = defineProps<TabsContentPrimitiveProps>()

const classes = useComponentClasses(props, tabsContentSpecs)
</script>
