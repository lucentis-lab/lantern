<template>
  <TabsTriggerPrimitive v-bind="props" :class="classes" class="l-tabs-trigger">
    <slot />
  </TabsTriggerPrimitive>
</template>

<script setup lang="ts">
import TabsTriggerPrimitive, {
  type TabsTriggerPrimitiveProps,
} from '@/primitives/tabs/TabsTrigger.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { tabsTriggerSpecs } from './tabsSpecs'
import type { BaseProps } from '@/types'

interface TabsTriggerProps extends TabsTriggerPrimitiveProps, BaseProps {
  size?: string
  radius?: string
}

const props = defineProps<TabsTriggerProps>()

const classes = useComponentClasses(props, tabsTriggerSpecs)
</script>
