<template>
  <div class="l-dropdown" style="position: relative; display: inline-block" ref="containerRef">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, useTemplateRef } from 'vue'
import { DROPDOWN_KEY } from '@/utils/keys'
import { useDisclosure } from '@/composables/useDisclosure'
import type { DropdownContext } from '@/types/components'

const containerRef = useTemplateRef<HTMLElement>('containerRef')

const uid = Math.random().toString(36).slice(2, 7)
const triggerId = `dropdown-trigger-${uid}`
const contentId = `dropdown-content-${uid}`

const { isOpen, open, close, toggle } = useDisclosure(() => containerRef.value)

provide<DropdownContext>(DROPDOWN_KEY, { isOpen, open, close, toggle, triggerId, contentId })
</script>
