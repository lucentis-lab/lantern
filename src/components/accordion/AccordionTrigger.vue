<template>
  <AccordionTriggerPrimitive :class="classes" class="l-accordion-trigger">
    <slot />
  </AccordionTriggerPrimitive>
</template>

<script setup lang="ts">
import AccordionTriggerPrimitive from '@/primitives/accordion/AccordionTrigger.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { accordionTriggerSpecs } from './accordionSpecs'
import type { BaseProps } from '@/types'

interface AccordionTriggerProps extends BaseProps {
  size?: string
  radius?: string
}

const props = defineProps<AccordionTriggerProps>()

const classes = useComponentClasses(props, accordionTriggerSpecs)
</script>
