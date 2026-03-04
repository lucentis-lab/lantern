<template>
  <div class="l-accordion">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { ACCORDION_KEY } from '@/utils/keys'
import { useAccordion } from '@/composables/useAccordion'
import type { AccordionContext } from '@/types/components'

export interface AccordionPrimitiveProps {
  type?: 'single' | 'multiple'
}

const props = withDefaults(defineProps<AccordionPrimitiveProps>(), {
  type: 'single',
})

const { isOpen, toggle, uid } = useAccordion(props.type)

provide<AccordionContext>(ACCORDION_KEY, { isOpen, toggle, uid })
</script>
