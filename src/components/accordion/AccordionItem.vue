<template>
  <AccordionItemPrimitive v-bind="props" :class="classes" class="l-accordion-item">
    <slot />
  </AccordionItemPrimitive>
</template>

<script setup lang="ts">
import AccordionItemPrimitive, {
  type AccordionItemPrimitiveProps,
} from '@/primitives/accordion/AccordionItem.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { accordionItemSpecs } from './accordionSpecs'

const props = defineProps<AccordionItemPrimitiveProps>()

const classes = useComponentClasses(props, accordionItemSpecs)
</script>
