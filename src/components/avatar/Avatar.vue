<template>
  <AvatarPrimitive :class="classes" class="l-avatar">
    <slot />
  </AvatarPrimitive>
</template>

<script setup lang="ts">
import AvatarPrimitive from '@/primitives/avatar/Avatar.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { avatarSpecs } from './avatarSpecs'
import type { BaseProps } from '@/types'

interface AvatarProps extends BaseProps {
  size?: string
  radius?: string
}

const props = defineProps<AvatarProps>()

const classes = useComponentClasses(props, avatarSpecs)
</script>
