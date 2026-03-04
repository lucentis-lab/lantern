<template>
  <AccordionContentPrimitive :class="classes" class="l-accordion-content">
    <slot />
  </AccordionContentPrimitive>
</template>

<script setup lang="ts">
import AccordionContentPrimitive from '@/primitives/accordion/AccordionContent.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { accordionContentSpecs } from './accordionSpecs'

const classes = useComponentClasses({}, accordionContentSpecs)
</script>
