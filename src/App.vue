<script setup lang="ts">
import { useComponentClasses } from './composables/useComponentClasses'

useComponentClasses(
  {
    size: 'xl',
  },
  {
    name: 'Button',
    apply: ['hover', 'focus', 'outline:border'], //only thoses will be added to button classes
    class: 'transition',
    defaultProps: {
      //possibility to choose default prop for component
      color: 'slate',
      variant: 'filled',
      size: 'medium',
      radius: 'medium',
    },
  },
)
</script>

<template>
  <div class="">ok</div>
</template>

<style scoped></style>
