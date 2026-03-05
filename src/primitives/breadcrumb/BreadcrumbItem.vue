<template>
  <li class="l-breadcrumb-item">
    <component
      :is="props.href ? 'a' : 'span'"
      :href="props.href"
      :aria-current="props.current ? 'page' : undefined"
    >
      <slot />
    </component>
  </li>
</template>

<script setup lang="ts">
export interface BreadcrumbItemPrimitiveProps {
  href?: string
  current?: boolean
}

const props = defineProps<BreadcrumbItemPrimitiveProps>()
</script>
