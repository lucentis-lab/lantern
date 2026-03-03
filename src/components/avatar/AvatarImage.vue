<template>
  <AvatarImagePrimitive v-bind="props" :class="classes" class="l-avatar-image" />
</template>

<script setup lang="ts">
import AvatarImagePrimitive, {
  type AvatarImagePrimitiveProps,
} from '@/primitives/avatar/AvatarImage.vue'
import { useComponentClasses } from '@/composables/useComponentClasses'
import { avatarImageSpecs } from './avatarSpecs'

const props = defineProps<AvatarImagePrimitiveProps>()

const classes = useComponentClasses(props, avatarImageSpecs)
</script>
