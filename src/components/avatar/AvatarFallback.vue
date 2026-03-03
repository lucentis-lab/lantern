<template>
  <AvatarFallbackPrimitive :class="classes" class="l-avatar-fallback">
    <slot />
  </AvatarFallbackPrimitive>
</template>

<script setup lang="ts">
import AvatarFallbackPrimitive from '@/primitives/avatar/AvatarFallback.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { avatarFallbackSpecs } from './avatarSpecs'

const classes = useComponentClasses({}, avatarFallbackSpecs)
</script>
