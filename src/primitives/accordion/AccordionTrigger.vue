<template>
  <Button
    class="l-accordion-trigger"
    type="button"
    :id="item?.triggerId.value"
    :aria-controls="item?.contentId.value"
    :aria-expanded="item?.isOpen.value"
    :data-state="item?.isOpen.value ? 'open' : 'closed'"
    @click="accordion?.toggle(item?.value ?? '')"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Button from '@/primitives/button/Button.vue'
import { ACCORDION_KEY, ACCORDION_ITEM_KEY } from '@/utils/keys'
import type { AccordionContext, AccordionItemContext } from '@/types/components'

const accordion = inject<AccordionContext>(ACCORDION_KEY)
const item = inject<AccordionItemContext>(ACCORDION_ITEM_KEY)
</script>
