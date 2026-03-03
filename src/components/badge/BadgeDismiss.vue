<template>
  <BadgeDismissPrimitive v-bind="props" :class="classes">
    <slot />
  </BadgeDismissPrimitive>
</template>

<script setup lang="ts">
import BadgeDismissPrimitive, {
  type BadgeDismissPrimitiveProps,
} from '@/primitives/badge/BadgeDismiss.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { badgeDismissSpecs } from './badgeSpecs'

const props = defineProps<BadgeDismissPrimitiveProps>()

const classes = useComponentClasses(props, badgeDismissSpecs)
</script>
