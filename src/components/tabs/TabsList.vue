<template>
  <TabsListPrimitive :class="classes" class="l-tabs-list">
    <slot />
  </TabsListPrimitive>
</template>

<script setup lang="ts">
import TabsListPrimitive from '@/primitives/tabs/TabsList.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { tabsListSpecs } from './tabsSpecs'
import type { BaseProps } from '@/types'

const props = defineProps<BaseProps>()

const classes = useComponentClasses(props, tabsListSpecs)
</script>
