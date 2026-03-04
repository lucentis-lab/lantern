<template>
  <div
    v-if="item?.isOpen.value"
    class="l-accordion-content"
    role="region"
    :id="item?.contentId.value"
    :aria-labelledby="item?.triggerId.value"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { ACCORDION_ITEM_KEY } from '@/utils/keys'
import type { AccordionItemContext } from '@/types/components'

const item = inject<AccordionItemContext>(ACCORDION_ITEM_KEY)
</script>
