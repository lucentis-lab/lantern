<template>
  <li class="l-breadcrumb-item">
    <component
      :is="props.as ?? (props.href ? 'a' : 'span')"
      :href="props.href"
      :aria-current="props.current ? 'page' : undefined"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

export interface BreadcrumbItemPrimitiveProps {
  href?: string
  current?: boolean
  as?: string | Component
}

const props = defineProps<BreadcrumbItemPrimitiveProps>()
</script>
