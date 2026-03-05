<template>
  <BreadcrumbPrimitive v-bind="props" :class="classes" class="l-breadcrumb-item">
    <slot />
  </BreadcrumbPrimitive>
</template>

<script setup lang="ts">
import BreadcrumbPrimitive from '@/primitives/breadcrumb/Breadcrumb.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { breadcrumbSpecs } from './breadcrumbSpecs'
import type { BaseProps } from '@/types'

interface BreadcrumbProps extends BaseProps {}

const props = defineProps<BreadcrumbProps>()

const classes = useComponentClasses(props, breadcrumbSpecs)
</script>
