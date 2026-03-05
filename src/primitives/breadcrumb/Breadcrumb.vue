<template>
  <nav class="l-breadcrumb" aria-label="breadcrumb">
    <ol class="l-breadcrumb-list" :class="props.class">
      <slot />
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { BaseProps } from '@/types';

export interface BreadcrumbPrimitiveProps extends BaseProps {}

const props = defineProps<BreadcrumbPrimitiveProps>()
</script>
