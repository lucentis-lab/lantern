<template>
  <Button
    class="l-dropdown-item"
    type="button"
    role="menuitem"
    :disabled="props.disabled"
    @click="onClick"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Button from '@/primitives/button/Button.vue'
import { DROPDOWN_KEY } from '@/utils/keys'
import type { DropdownContext } from '@/types/components'

export interface DropdownItemPrimitiveProps {
  disabled?: boolean
}

const props = defineProps<DropdownItemPrimitiveProps>()

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()

const dropdown = inject<DropdownContext>(DROPDOWN_KEY)

const onClick = (e: MouseEvent) => {
  if (props.disabled) return
  emit('click', e)
  dropdown?.close()
}
</script>
