<template>
  <img
    v-if="!avatar?.imageError.value"
    class="l-avatar-image"
    :src="props.src"
    :alt="props.alt"
    @error="avatar?.onError()"
  />
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { AVATAR_KEY } from '@/utils/keys'
import type { AvatarContext } from '@/types/components'

export interface AvatarImagePrimitiveProps {
  src: string
  alt?: string
}

const props = withDefaults(defineProps<AvatarImagePrimitiveProps>(), {
  alt: '',
})

const avatar = inject<AvatarContext>(AVATAR_KEY)
</script>
