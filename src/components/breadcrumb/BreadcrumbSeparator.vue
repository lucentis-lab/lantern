<template>
  <BreadcrumbSeparatorPrimitive v-bind="props" :class="classes" class="l-breadcrumb-item">
    <slot />
  </BreadcrumbSeparatorPrimitive>
</template>

<script setup lang="ts">
import BreadcrumbSeparatorPrimitive from '@/primitives/breadcrumb/BreadcrumbSeparator.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { breadcrumbItemSpecs } from './breadcrumbSpecs'
import type { BaseProps } from '@/types'

interface BreadcrumbSeparatorProps extends  BaseProps {}

const props = defineProps<BreadcrumbSeparatorProps>()

const classes = useComponentClasses(props, breadcrumbItemSpecs)
</script>
