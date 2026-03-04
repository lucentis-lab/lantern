<template>
  <Button
    class="l-dropdown-trigger"
    type="button"
    :id="dropdown?.triggerId"
    :aria-haspopup="'menu'"
    :aria-expanded="dropdown?.isOpen.value"
    :aria-controls="dropdown?.contentId"
    :data-state="dropdown?.isOpen.value ? 'open' : 'closed'"
    @click="dropdown?.toggle()"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Button from '@/primitives/button/Button.vue'
import { DROPDOWN_KEY } from '@/utils/keys'
import type { DropdownContext } from '@/types/components'

const dropdown = inject<DropdownContext>(DROPDOWN_KEY)
</script>
