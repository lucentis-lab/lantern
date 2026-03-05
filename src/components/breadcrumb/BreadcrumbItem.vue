<template>
  <BreadcrumbItemPrimitive v-bind="props" :class="classes" class="l-breadcrumb-item">
    <slot />
  </BreadcrumbItemPrimitive>
</template>

<script setup lang="ts">
import BreadcrumbItemPrimitive, {
  type BreadcrumbItemPrimitiveProps,
} from '@/primitives/breadcrumb/BreadcrumbItem.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { breadcrumbItemSpecs } from './breadcrumbSpecs'
import type { BaseProps } from '@/types'

interface BreadcrumbItemProps extends BreadcrumbItemPrimitiveProps, BaseProps {}

const props = defineProps<BreadcrumbItemProps>()

const classes = useComponentClasses(props, breadcrumbItemSpecs)
</script>
