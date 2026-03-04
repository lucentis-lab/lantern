<template>
  <AccordionPrimitive v-bind="props" :class="classes" class="l-accordion">
    <slot />
  </AccordionPrimitive>
</template>

<script setup lang="ts">
import AccordionPrimitive, {
  type AccordionPrimitiveProps,
} from '@/primitives/accordion/Accordion.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { accordionSpecs } from './accordionSpecs'

const props = defineProps<AccordionPrimitiveProps>()

const classes = useComponentClasses(props, accordionSpecs)
</script>
