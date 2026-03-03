<template>
  <BadgePrimitive v-bind="props" :class="classes" @dismiss="emit('dismiss')">
    <slot />
  </BadgePrimitive>
</template>

<script setup lang="ts">
import BadgePrimitive, { type BadgePrimitiveProps } from '@/primitives/badge/Badge.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { badgeSpecs } from './badgeSpecs'
import type { BaseProps } from '@/types'

interface BadgeProps extends BadgePrimitiveProps, BaseProps {
  size?: string
  radius?: string
}

const props = defineProps<BadgeProps>()

const emit = defineEmits<{
  dismiss: []
}>()

const classes = useComponentClasses(props, badgeSpecs)
</script>
