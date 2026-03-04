<template>
  <div class="l-accordion-item" :data-state="isOpen ? 'open' : 'closed'">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, inject } from 'vue'
import { ACCORDION_KEY, ACCORDION_ITEM_KEY } from '@/utils/keys'
import type { AccordionContext, AccordionItemContext } from '@/types/components'

export interface AccordionItemPrimitiveProps {
  value: string
}

const props = defineProps<AccordionItemPrimitiveProps>()

const accordion = inject<AccordionContext>(ACCORDION_KEY)

const isOpen = computed(() => accordion?.isOpen(props.value) ?? false)

const triggerId = computed(() => `accordion-trigger-${accordion?.uid}-${props.value}`)
const contentId = computed(() => `accordion-content-${accordion?.uid}-${props.value}`)

provide<AccordionItemContext>(ACCORDION_ITEM_KEY, {
  value: props.value,
  isOpen,
  triggerId,
  contentId,
})
</script>
